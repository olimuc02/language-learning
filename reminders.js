/* ============================================================
   REMINDERS — Duolingo-style nudges on the phone.

   The phone signs up for push notifications and saves its sign-up,
   its time zone and its chosen times to Firestore. Every practice
   session also saves today's minutes (by local date), and devices that
   share a sync code count together — practice on the Mac counts too.

   A GitHub Actions job (.github/workflows/reminders.yml) runs every
   15 minutes, and sends a notification only when a reminder time
   has passed AND today's 20 minutes aren't done yet.
   ============================================================ */

const VAPID_PUBLIC = "BIKQdpTi4aBfZgUqBoWb8DMHEfUHTFYDnfEcZCbIjF5Utnyz_W6HvX6bolxTx4S87PYlr5ow2h-fOB-kngKfs_Y";
const RKEY = "lt-remind", AKEY = "lt-activity";

function loadRemind(){
  let r = {};
  try{ r = JSON.parse(localStorage.getItem(RKEY)) || {}; }catch(e){}
  if(!r.id || !/^[A-Z0-9]{7}$/.test(r.id)){
    const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    r.id = ""; for(let i=0;i<7;i++) r.id += A[Math.floor(Math.random()*A.length)];
    r.indexed = "";
  }
  if(r.t1 == null) r.t1 = "18:00";
  if(r.t2 == null) r.t2 = "21:00";
  return r;
}
let RM = loadRemind();
function saveRemind(){ try{ localStorage.setItem(RKEY, JSON.stringify(RM)); }catch(e){} }
saveRemind();

/* the phone's own calendar date — not UTC — so "today" means today in Hawaiʻi */
function localDate(d){
  d = d || new Date();
  return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
}
function activityKey(){ return (typeof P!=="undefined" && P.syncCode) ? P.syncCode : RM.id; }

/* The database only accepts {blob, updatedAt} records in french_progress, named
   like a sync code (ABCD-1234), so every reminder record is a JSON blob there.
   A device has a 7-character id; its records are R/A/S + id, e.g. RK7P-2QXM:
     RMND-INDX   → [{id, key}]  every device that logs practice
     R<id>       → this device's sign-up, time zone, times, streak
     A<id>       → this device's minutes for the last 4 days (local dates)
     S<id>       → written by the scheduled job: what it already sent today */
function rec(prefix){ return prefix + RM.id.slice(0,3) + "-" + RM.id.slice(3); }
function fsUrl(id){
  return "https://firestore.googleapis.com/v1/projects/" + FB.project + "/databases/(default)/documents/" +
         FB.col + "/" + encodeURIComponent(id) + "?key=" + FB.key;
}
function fsPut(id, obj){
  return fetch(fsUrl(id), {
    method:"PATCH", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({fields:{ blob:{stringValue: JSON.stringify(obj)}, updatedAt:{stringValue: new Date().toISOString()} }})
  });
}
function fsGet(id){
  return fetch(fsUrl(id) + "&_=" + Date.now()).then(r => r.ok ? r.json() : null)
    .then(j => j && j.fields && j.fields.blob ? JSON.parse(j.fields.blob.stringValue) : null);
}

/* make sure the scheduled job knows this device exists, under the right sync code */
function ensureIndexed(){
  const key = activityKey();
  if(RM.indexed === key) return Promise.resolve();
  return fsGet("RMND-INDX").then(list => {
    list = Array.isArray(list) ? list.filter(x => x.id !== RM.id) : [];
    list.push({id: RM.id, key});
    return fsPut("RMND-INDX", list);
  }).then(r => { if(r && r.ok){ RM.indexed = key; saveRemind(); } }).catch(()=>{});
}

/* ---- every logged session lands here too ---- */
function remindLog(mins){
  let a = {};
  try{ a = JSON.parse(localStorage.getItem(AKEY)) || {}; }catch(e){}
  const t = localDate(), lang = (typeof P!=="undefined" && P.lang) || "?";
  a[t] = a[t] || {};
  a[t][lang] = (a[t][lang]||0) + mins;
  Object.keys(a).sort().slice(0, -4).forEach(k => delete a[k]);   // keep the last 4 days
  try{ localStorage.setItem(AKEY, JSON.stringify(a)); }catch(e){}
  pushActivity(a);
  if(RM.on) pushCfg();          // streak just changed
}
function pushActivity(a){
  if(!a){ try{ a = JSON.parse(localStorage.getItem(AKEY)) || {}; }catch(e){ a = {}; } }
  return ensureIndexed().then(() => fsPut(rec("A"), a)).catch(()=>{});
}

/* ---- sign-up details the scheduled job reads ---- */
function pushCfg(sub){
  const getSub = sub ? Promise.resolve(sub)
    : navigator.serviceWorker.ready.then(r => r.pushManager.getSubscription());
  return getSub.then(s => {
    if(!s) return;
    const langs = (typeof ringLangs==="function" ? ringLangs() : ["haw","fr","pt"])
      .map(c => ({c, name: LANGS[c].name, flag: LANGS[c].flag}));
    return ensureIndexed().then(() => fsPut(rec("R"), {
      sub:    s.toJSON ? s.toJSON() : s,
      tz:     Intl.DateTimeFormat().resolvedOptions().timeZone || "Pacific/Honolulu",
      t1:     RM.t1 || "",
      t2:     RM.t2 || "",
      key:    activityKey(),
      langs,
      streak: typeof dailyStreak==="function" ? dailyStreak() : 0
    }));
  }).catch(()=>{});
}

function isIOS(){ return /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform==="MacIntel" && navigator.maxTouchPoints>1); }
function pushSupported(){ return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window; }

function b64ToBytes(b){
  const p = "=".repeat((4 - b.length % 4) % 4);
  const s = atob((b + p).replace(/-/g,"+").replace(/_/g,"/"));
  return Uint8Array.from(s, c => c.charCodeAt(0));
}

async function enableReminders(){
  if(!pushSupported()){
    if(isIOS() && !isStandalone()){
      alert("On iPhone, reminders only work from the home-screen app.\n\nIn Safari tap Share → Add to Home Screen, open the app from there, then come back to Progress → Reminders.");
    } else {
      alert("This browser can't receive notifications. Use the app on your iPhone (added to the home screen) or Chrome/Safari on the Mac.");
    }
    return;
  }
  const perm = await Notification.requestPermission();
  if(perm !== "granted"){
    alert("Notifications are blocked.\n\nOn iPhone: Settings → Notifications → Language Learning → Allow Notifications. Then try again.");
    return;
  }
  try{
    const reg = await navigator.serviceWorker.ready;
    const sub = (await reg.pushManager.getSubscription()) ||
                (await reg.pushManager.subscribe({userVisibleOnly:true, applicationServerKey: b64ToBytes(VAPID_PUBLIC)}));
    RM.on = true; saveRemind();
    await pushCfg(sub);
    await pushActivity();
    toast("🔔 Reminders on");
  }catch(e){
    alert("Couldn't turn reminders on: " + (e && e.message || e));
  }
  if(typeof paintProgress==="function") paintProgress();
}

async function disableReminders(){
  RM.on = false; saveRemind();
  try{
    await fetch(fsUrl(rec("R")), {method:"DELETE"});
    const reg = await navigator.serviceWorker.ready;
    const s = await reg.pushManager.getSubscription();
    if(s) await s.unsubscribe();
  }catch(e){}
  toast("🔕 Reminders off");
  if(typeof paintProgress==="function") paintProgress();
}

function setRemindTime(which, val){
  RM[which] = val || "";
  saveRemind();
  if(RM.on) pushCfg().then(()=> toast("Saved"));
}

async function testReminder(){
  try{
    const reg = await navigator.serviceWorker.ready;
    await reg.showNotification("Time for your 20 minutes 🌺", {
      body: "This is what a reminder looks like. E aʻo kākou — let's learn!",
      icon: "icon-192.png", badge: "icon-192.png", tag: "lt-test"
    });
  }catch(e){ alert("Test failed: " + (e && e.message || e)); }
}

function fmt12(t){
  if(!t) return "off";
  const [h,m] = t.split(":").map(Number);
  return ((h%12)||12) + ":" + String(m).padStart(2,"0") + (h<12?" AM":" PM");
}

function remindersCard(){
  const on = RM.on && pushSupported() && Notification.permission === "granted";
  const needsInstall = isIOS() && !isStandalone();
  return `<div class="card"><h3>Reminders</h3>
  <p class="muted" style="margin:2px 0 12px;font-size:14px">A nudge on your phone when you haven't done your 20 minutes yet.
  Days you've already hit 20 minutes (any language, Mac or iPhone) get no reminder.</p>
  ${on ? `
    <div class="rrow"><div><b>Daily Reminder</b><span class="muted">Your usual practice time</span></div>
      <input type="time" value="${RM.t1||""}" onchange="setRemindTime('t1',this.value)"></div>
    <div class="rrow"><div><b>Streak Saver</b><span class="muted">Last call if you still haven't practiced</span></div>
      <input type="time" value="${RM.t2||""}" onchange="setRemindTime('t2',this.value)"></div>
    <p class="muted" style="font-size:13px;margin:10px 0 12px">Clear a time to switch that reminder off. Reminders can arrive up to ~15 minutes late.</p>
    <div class="row">
      <button class="btn ghost sm" onclick="testReminder()">Send A Test</button>
      <button class="btn ghost sm" onclick="disableReminders()">Turn Off</button>
    </div>`
  : `
    ${needsInstall ? `<div class="box blue"><b>First, add the app to your home screen</b>
      iPhone only allows notifications from home-screen apps. In Safari tap <b>Share → Add to Home Screen</b>,
      open it from there, and come back here.</div>` : ""}
    <div class="row"><button class="btn sm" onclick="enableReminders()">🔔 Turn On Reminders</button></div>
    <p class="muted" style="font-size:13px;margin:10px 0 0">Default: ${fmt12(RM.t1)} daily, plus a streak saver at ${fmt12(RM.t2)}. You can change both after.</p>`}
  </div>`;
}

/* keep the time zone, streak and sign-up fresh whenever the app opens */
window.addEventListener("load", () => {
  setTimeout(ensureIndexed, 4000);
  if(RM.on && pushSupported() && Notification.permission === "granted"){
    setTimeout(() => { pushCfg(); pushActivity(); }, 2500);
  }
});
