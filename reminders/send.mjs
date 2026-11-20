/* Sends practice reminders. Run every 15 minutes by .github/workflows/reminders.yml.
   For each signed-up device: if a reminder time has passed (in that device's time zone),
   it hasn't been sent today, and today's 20 minutes aren't done — send one push. */
import webpush from "web-push";

const PROJECT = "tasks-oj", KEY = "AIzaSyDu-bAYH7t7rf-y3Fs0K1GjyvjFrSTDSSc";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/french_progress`;
const GOAL = 20, WINDOW_MIN = 180;        // give up on a reminder 3 hours after its time
const DRY = process.env.DRY_RUN === "1";

webpush.setVapidDetails("https://olimuc02.github.io/language-learning/",
  process.env.VAPID_PUBLIC, process.env.VAPID_PRIVATE);

// that collection only accepts {blob, updatedAt}, so each record is a JSON blob
// records are named like sync codes: R/A/S + 7-char device id → "RK7P-2QXM"
const rec = (prefix, id) => prefix + id.slice(0, 3) + "-" + id.slice(3);
const url = id => `${BASE}/${encodeURIComponent(id)}?key=${KEY}`;
const getBlob = id => fetch(url(id) + "&_=" + Date.now()).then(r => r.ok ? r.json() : null)
  .then(j => { try { return JSON.parse(j.fields.blob.stringValue); } catch { return null; } });
const putBlob = (id, obj) => fetch(url(id), {
  method: "PATCH", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ fields: { blob: { stringValue: JSON.stringify(obj) }, updatedAt: { stringValue: new Date().toISOString() } } })
});

function localNow(tz){
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
    timeZone: tz, year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", hourCycle:"h23"
  }).formatToParts(new Date()).map(x => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, min: (+p.hour) * 60 + (+p.minute) };
}
const toMin = t => { const [h, m] = String(t).split(":").map(Number); return h * 60 + m; };

function pick(arr, date, salt){
  let h = salt; for (const c of date) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return arr[h % arr.length];
}
const listNames = a => a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1];

function message(slot, { streak, total, byLang, langs, date }){
  const open = langs.filter(l => (byLang[l.c] || 0) < GOAL).map(l => l.name);
  if (slot === "t2") {
    return streak > 0
      ? pick([
          { title: `Last call 🔥 ${streak}-day streak`, body: `Your streak ends at midnight. 20 minutes saves it.` },
          { title: `Don't lose ${streak} days 🔥`, body: `One quick lesson before bed keeps the streak alive.` },
          { title: `Your streak is nervous 😬`, body: `${streak} days on the line. Open a lesson — even the timer counts.` },
        ], date, 7)
      : pick([
          { title: `Still time today 🌙`, body: `Even 5 minutes beats zero. Start a new streak tonight.` },
          { title: `A hui hou, today? 👋`, body: `Not yet — there's still time for one short lesson.` },
        ], date, 7);
  }
  if (total > 0) {
    return { title: `${total} minutes in 💪`, body: `${GOAL - total} more to close today. ${open.length ? listNames(open) + " still open." : ""}`.trim() };
  }
  return pick([
    { title: `Time for your 20 minutes 🌺`, body: `${listNames(open)} ${open.length === 1 ? "is" : "are"} waiting.` },
    { title: `E aʻo kākou! 🌺`, body: `Let's learn. Your rings are still open today.` },
    { title: streak > 0 ? `🔥 ${streak}-day streak` : `New day, new rings ⭕`, body: streak > 0 ? `Keep it going — 20 minutes keeps it alive.` : `20 minutes today starts a fresh streak.` },
    { title: `Quick lesson? 🤙`, body: `Your Hawaiian won't learn itself. 20 minutes, that's all.` },
    { title: `Bonjour, olá, aloha 👋`, body: `Three languages, 20 minutes. Today's practice is waiting.` },
  ], date, 3);
}

async function main(){
  const index = (await getBlob("RMND-INDX")) || [];
  console.log(`${index.length} device(s) known`);

  for (const { id } of index) {
    const cfg = await getBlob(rec("R", id));
    if (!cfg || !cfg.sub) continue;                         // this device hasn't turned reminders on
    const tz = cfg.tz || "Pacific/Honolulu";
    const now = localNow(tz);
    const sent = (await getBlob(rec("S", id))) || {};

    // which reminders are due right now and not yet sent today
    const due = [["t1", cfg.t1], ["t2", cfg.t2]]
      .filter(([s, t]) => t && /^\d\d:\d\d$/.test(t))
      .filter(([s, t]) => now.min >= toMin(t) && now.min - toMin(t) <= WINDOW_MIN && !sent[`${now.date}|${s}`]);
    const clock = `${tz} ${now.date} ${Math.floor(now.min / 60)}:${String(now.min % 60).padStart(2, "0")}`;
    if (!due.length) { console.log(`${id}: nothing due (${clock})`); continue; }

    // today's minutes, from every device that shares this sync code (Mac + iPhone)
    const byLang = {};
    for (const dev of index.filter(x => x.key === cfg.key)) {
      const act = (await getBlob(rec("A", dev.id))) || {};
      Object.entries(act[now.date] || {}).forEach(([l, m]) => byLang[l] = (byLang[l] || 0) + m);
    }
    const total = Object.values(byLang).reduce((a, b) => a + b, 0);

    const keep = {};
    Object.keys(sent).filter(k => k.startsWith(now.date)).forEach(k => keep[k] = 1);   // only keep today
    due.forEach(([s]) => keep[`${now.date}|${s}`] = 1);

    const slot = due[due.length - 1][0];      // if the job ran late and both are due, send only the later one
    if (total < GOAL) {
      const msg = message(slot, { streak: +cfg.streak || 0, total, byLang, langs: cfg.langs || [], date: now.date });
      console.log(`${id}: sending ${slot} (${clock}) — ${msg.title} / ${msg.body}`);
      if (!DRY) {
        try {
          const r = await webpush.sendNotification(cfg.sub, JSON.stringify({ ...msg, tag: "lt-remind", url: "./" }), { TTL: 3 * 3600 });
          console.log(`${id}: delivered to push service (${r.statusCode})`);
        } catch (e) {
          console.log(`${id}: push failed ${e.statusCode || ""} ${e.body || e.message}`);
          if (e.statusCode === 404 || e.statusCode === 410) {          // the phone dropped the sign-up
            await fetch(url(rec("R", id)), { method: "DELETE" });
            continue;
          }
        }
      }
    } else {
      console.log(`${id}: ${slot} skipped — ${total} min done today`);
    }
    if (!DRY) await putBlob(rec("S", id), keep);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
