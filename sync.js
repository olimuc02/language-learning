/* ============================================================
   SYNC — keeps the Mac and the iPhone identical.

   Progress is stored in Oliver's existing Firebase project under a
   private sync code. Merging is additive: a lesson finished on the
   phone and homework ticked on the Mac both survive, in either order.
   ============================================================ */

const FB = {
  project: "tasks-oj",
  key: "AIzaSyDu-bAYH7t7rf-y3Fs0K1GjyvjFrSTDSSc",
  col: "french_progress"
};

function fbUrl(code){
  return "https://firestore.googleapis.com/v1/projects/" + FB.project +
         "/databases/(default)/documents/" + FB.col + "/" +
         encodeURIComponent(code) + "?key=" + FB.key;
}

let SY = { state:"idle", last:null, timer:null, busy:false };

function newCode(){
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";   // no O/0/I/1 — easier to read out loud
  let s = "";
  for(let i=0;i<8;i++) s += A[Math.floor(Math.random()*A.length)];
  return s.slice(0,4) + "-" + s.slice(4);
}

function setSync(st){
  SY.state = st;
  const el = document.getElementById("syncstate");
  if(el) el.textContent = {idle:"not set up", syncing:"syncing…", saving:"saving…", ok:"synced", off:"offline"}[st] || st;
  const dot = document.getElementById("syncdot");
  if(dot) dot.textContent = st==="ok" ? "☁️" : st==="off" ? "⚠️" : "🔄";
}

/* every language travels together; voice and speed stay on the device */
function bundle(){
  const all = allStates(), out = {};
  Object.keys(all).forEach(c=>{
    const o = Object.assign({}, all[c]);
    delete o.voice; delete o.rate; delete o.autoplay; delete o.syncCode;
    out[c] = o;
  });
  return {v:2, langs: out};
}

function unionFlags(a,b){
  const o = Object.assign({}, a||{});
  Object.keys(b||{}).forEach(k=>{ if(b[k]) o[k] = true; });
  return o;
}

/* Additive merge — nothing done on either device is ever discarded. */
function mergeState(local, remote){
  const m = Object.assign({}, remote, local);

  m.completed = unionFlags(local.completed, remote.completed);
  m.known     = unionFlags(local.known,     remote.known);
  m.starred   = unionFlags(local.starred,   remote.starred);
  m.hw        = unionFlags(local.hw,        remote.hw);
  m.canDo     = unionFlags(local.canDo,     remote.canDo);

  m.quiz = {};
  new Set([].concat(Object.keys(local.quiz||{}), Object.keys(remote.quiz||{}))).forEach(d=>{
    const a=(local.quiz||{})[d], b=(remote.quiz||{})[d];
    if(!a) m.quiz[d]=b;
    else if(!b) m.quiz[d]=a;
    else m.quiz[d] = ((a.pct||0) >= (b.pct||0)) ? a : b;   // best attempt wins
  });

  m.checkpoints = {};
  new Set([].concat(Object.keys(local.checkpoints||{}), Object.keys(remote.checkpoints||{}))).forEach(d=>{
    const a=(local.checkpoints||{})[d], b=(remote.checkpoints||{})[d];
    m.checkpoints[d] = Math.max(a==null?-1:a, b==null?-1:b);
  });

  const seen = new Set(), out = [];
  [].concat(remote.sessions||[], local.sessions||[]).forEach(x=>{
    const k = x.d + "|" + x.m + "|" + (x.i||"");
    if(!seen.has(k)){ seen.add(k); out.push(x); }
  });
  m.sessions = out.sort((a,b)=> a.d < b.d ? -1 : 1);

  m.currentDay = Math.max(local.currentDay||1, remote.currentDay||1);
  m.streak     = Math.max(local.streak||0, remote.streak||0);
  m.lastStudy  = (local.lastStudy||"") > (remote.lastStudy||"") ? local.lastStudy : remote.lastStudy;
  m.startDate  = (local.startDate && remote.startDate)
                   ? (local.startDate < remote.startDate ? local.startDate : remote.startDate)
                   : (local.startDate || remote.startDate);
  m.notes = (local.notes||"").length >= (remote.notes||"").length ? local.notes : remote.notes;

  delete m.voice; delete m.rate; delete m.autoplay; delete m.syncCode;
  return m;
}

function queuePush(){
  if(!P.syncCode) return;
  clearTimeout(SY.timer);
  SY.timer = setTimeout(pushSync, 1500);
}

function pushSync(){
  if(!P.syncCode || SY.busy) return Promise.resolve();
  SY.busy = true; setSync("saving");
  const body = { fields: {
    blob:      { stringValue: JSON.stringify(bundle()) },
    updatedAt: { stringValue: new Date().toISOString() }
  }};
  return fetch(fbUrl(P.syncCode), {
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(body)
    })
    .then(r=>{ if(!r.ok) throw new Error(r.status); SY.last = new Date(); setSync("ok"); })
    .catch(()=> setSync("off"))
    .then(()=>{ SY.busy = false; });
}

function pullSync(silent){
  if(!P.syncCode) return Promise.resolve();
  if(!silent) setSync("syncing");
  return fetch(fbUrl(P.syncCode) + "&_=" + Date.now())
    .then(r=>{
      if(r.status === 404) return null;            // first device up — nothing stored yet
      if(!r.ok) throw new Error(r.status);
      return r.json();
    })
    .then(j=>{
      if(!j) return pushSync();
      const raw = JSON.parse(j.fields.blob.stringValue);
      // v1 blobs held French only; v2 holds every language
      const remoteLangs = raw && raw.v === 2 ? raw.langs : {fr: raw};
      const mine = allStates();
      Object.keys(remoteLangs).forEach(c=>{
        const merged = mergeState(mine[c] || blank(), remoteLangs[c] || blank());
        writeState(c, merged);
      });
      saveLocalOnly();
      SY.last = new Date(); setSync("ok");
      repaint();
      return pushSync();
    })
    .catch(()=> setSync("off"));
}

function repaint(){ if(typeof CURRENT !== "undefined" && CURRENT) go(CURRENT); }

function connectCode(raw){
  const code = String(raw||"").trim().toUpperCase().replace(/[^A-Z0-9-]/g,"");
  if(code.length < 4){ alert("That code doesn't look right — it should look like ABCD-1234."); return; }
  P.syncCode = code;
  saveLocalOnly();
  pullSync().then(()=>{
    paintProgress();
    alert("Connected.\n\nThis device now shares progress with anything else using code " + code + ".");
  });
}

function startSync(){
  if(!P.syncCode){ P.syncCode = newCode(); savePrefs(); }
  pullSync(true);
}

function lastSyncLabel(){
  if(!SY.last) return "not yet";
  const secs = Math.round((Date.now() - SY.last.getTime())/1000);
  if(secs < 60) return "just now";
  if(secs < 3600) return Math.round(secs/60) + " min ago";
  return Math.round(secs/3600) + " hr ago";
}

window.addEventListener("online", ()=> pullSync(true));
window.addEventListener("focus",  ()=> pullSync(true));
document.addEventListener("visibilitychange", ()=>{ if(!document.hidden) pullSync(true); });
