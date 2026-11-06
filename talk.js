/* ============================================================
   CHAT — learn through written conversation.
   Claude plays a character in a real-life scenario. Every reply you
   write gets feedback on how it would SOUND (spelling is ignored),
   the best way a native would say it, and alternative phrasings.

   Runs straight from the browser with your own Anthropic API key,
   which is kept on this device only (localStorage "lt-claude-key")
   and is never included in sync.
   ============================================================ */

const TALK_MODEL = "claude-opus-5-5";
const TALK_KEY = "lt-claude-key";
const TALK_SDK = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk/+esm";

/* ---------- scenarios, per language ---------- */
const TALK_SCENARIOS = {
pl: [
 {id:"sasiad",   e:"☕", t:"Small Talk With a Neighbour", pl:"Rozmowa z sąsiadką",
  role:"Pani Krystyna, a chatty retired neighbour in her late 60s, meeting the learner on the stairwell of a Warsaw apartment block. Uses Pan/Pani, loves gossip about the building, the weather and prices.",
  goal:"Polite small talk, then she asks a favour (watering her plants while she visits her sister in Łódź)."},
 {id:"lekarz",   e:"🩺", t:"At the Doctor", pl:"U lekarza",
  role:"Dr Nowak, a busy but kind GP (lekarz rodzinny) at a NFZ clinic. Formal, efficient, asks precise follow-up questions.",
  goal:"The learner describes symptoms (a cough and fever for 4 days), answers questions about history and allergies, and understands the prescription and sick-leave note (L4)."},
 {id:"urzad",    e:"🏛️", t:"At the Government Office", pl:"W urzędzie",
  role:"Pani Bożena, a tired clerk at the Urząd Dzielnicy handling address registration (meldunek). Bureaucratic, slightly impatient, keeps asking for documents.",
  goal:"Register the learner's address; she says a form is missing; the learner must stay polite and find a solution."},
 {id:"restauracja", e:"🍽️", t:"At a Restaurant", pl:"W restauracji",
  role:"Kamil, a friendly waiter at a traditional Polish restaurant in Kraków.",
  goal:"Ask for recommendations, order a full meal, then politely complain that the żurek arrived cold, and ask for the bill split two ways."},
 {id:"hydraulik", e:"🔧", t:"Calling a Plumber", pl:"Telefon do hydraulika",
  role:"Pan Zbyszek, a gruff plumber answering the phone while on another job. Talks fast, quotes high prices, uses some colloquial speech.",
  goal:"Explain a leaking pipe under the kitchen sink, arrange a visit time, and negotiate the price down a bit."},
 {id:"reklamacja", e:"🛍️", t:"Returning a Broken Item", pl:"Reklamacja w sklepie",
  role:"A sales assistant at an electronics store (think RTV Euro AGD) who first tries to brush the learner off.",
  goal:"Return headphones that broke after two weeks, insist on reklamacja under rękojmia/gwarancja, stay firm but polite."},
 {id:"praca",    e:"💼", t:"Job Interview", pl:"Rozmowa o pracę",
  role:"Pani Anna Wiśniewska, HR manager at a Warsaw company. Professional, asks classic interview questions plus a tricky one.",
  goal:"Introduce yourself professionally, describe experience, strengths and weaknesses, and ask good questions back."},
 {id:"rodzina",  e:"👪", t:"Sunday Dinner With Family", pl:"Obiad u rodziny",
  role:"Babcia Halina, the partner's grandmother, at Sunday obiad. Warm, insists the learner eats more, asks nosy questions about work, marriage plans and why he speaks Polish 'with that accent'.",
  goal:"Be charming and respectful, compliment the food properly, deflect nosy questions with humour, refuse a third helping without offending."},
 {id:"impreza",  e:"🍻", t:"At a House Party", pl:"Na imprezie",
  role:"Kuba, a 28-year-old friend-of-a-friend at a party. Very casual, na ty, uses slang (spoko, masakra, ogarniać, beka, ziom), talks fast and jokes a lot.",
  goal:"Hold a relaxed conversation with slang, banter, talk about music and weekend plans, and swap numbers."},
 {id:"wlasciciel", e:"🏠", t:"Landlord Dispute", pl:"Spór z właścicielem",
  role:"Pan Marek, a landlord who wants to keep part of the deposit (kaucja) for 'damage' that was already there when the learner moved in.",
  goal:"Argue calmly and firmly, reference the handover protocol (protokół zdawczo-odbiorczy), and reach a fair deal."},
 {id:"taxi",     e:"🚕", t:"Taxi Driver Chat", pl:"Rozmowa z taksówkarzem",
  role:"Pan Heniek, a talkative Warsaw taxi driver with opinions about traffic, football, politicians and 'how things used to be'.",
  goal:"Give directions, keep up with the chat, agree and disagree tactfully, and handle his complaining."},
 {id:"wizyta",   e:"📞", t:"Booking an Appointment", pl:"Umawianie wizyty",
  role:"A receptionist at a dental clinic answering the phone.",
  goal:"Book a check-up and cleaning, find a time that works, ask about price and whether it's covered by NFZ."},
 {id:"narzekanie", e:"🌧️", t:"The Art of Complaining", pl:"Narzekanie po polsku",
  role:"Ola, a close friend, venting over coffee about her boss, the weather and prices. Classic Polish complaining as bonding.",
  goal:"Join in the complaining naturally, sympathise with the right phrases, and offer advice without sounding preachy."},
 {id:"luzno",    e:"🗣️", t:"Casual Chat", pl:"Luźna rozmowa",
  role:"Marta, a friendly Polish friend the learner's age, curious about his life in the US, his work and his travels.",
  goal:"Open-ended catch-up: weekend, work, plans, opinions. Keep it flowing and natural."},
],

/* Hawaiian: two kinds of scene.
   mode "haw"   = a Hawaiian speaker who talks to him IN Hawaiian, slowly, at his level.
   mode "local" = everyday island life: locals speak English with Pidgin and Hawaiian words,
                  and he practises sounding local (and slipping Hawaiian in where locals do). */
haw: [
 {id:"luzno",   e:"🌺", t:"Casual Chat in Hawaiian", pl:"Kamaʻilio", mode:"haw",
  role:"Keola, a friendly Hawaiian speaker in his 30s who went to a Hawaiian-immersion school. Patient, laughs easily, loves helping newcomers who try.",
  goal:"A relaxed catch-up in simple Hawaiian: how are you, what's new, what did you do today, what are you up to this weekend."},
 {id:"intro",   e:"👋", t:"Introduce Yourself", pl:"ʻO wai kou inoa?", mode:"haw",
  role:"Kumu Leilani, a warm Hawaiian-language teacher meeting the learner at a community class. Speaks slowly and only in Hawaiian, with a little English to rescue him.",
  goal:"Say your name, where you're from, where you live now, what you do, and why you're learning Hawaiian. Ask her the same back."},
 {id:"aunty",   e:"🥭", t:"Talk Story With Aunty Next Door", pl:"Me ka ʻAnakē", mode:"local",
  role:"Aunty Mapuana, a retired neighbour in her 60s who speaks local English full of Pidgin and drops Hawaiian phrases into everything. Generous, nosy in a loving way, always feeding people.",
  goal:"Small talk over the fence: she asks where you're from and 'what school you went', offers you a bag of mangoes, and asks you to kōkua with something. Accept graciously and offer help."},
 {id:"plate",   e:"🍱", t:"Plate Lunch Counter", pl:"Ma ka hale ʻaina", mode:"local",
  role:"Uncle at the window of a busy local plate-lunch spot. Fast, friendly, heavy Pidgin, a line of people behind you.",
  goal:"Order a plate lunch (two scoop rice, one mac), a poke bowl and a drink, ask what's ʻono today, and pay. Use mahalo and local ordering style."},
 {id:"market",  e:"🍍", t:"Farmers' Market", pl:"Ka mākeke", mode:"haw",
  role:"Kaʻiulani, a farmer at a weekend market stall who happily speaks Hawaiian with anyone who tries. Sells maiʻa (banana), ʻulu, lilikoʻi, papaya and avocado.",
  goal:"Greet her in Hawaiian, ask what things are (He aha kēia?), ask prices (ʻEhia kālā?), buy two or three things, and thank her."},
 {id:"beach",   e:"🌊", t:"Lifeguard at the Beach", pl:"Ma kahakai", mode:"local",
  role:"Kai, a lifeguard on duty at a popular beach. Calm, direct, local English with some Pidgin. Today has a strong current and a jellyfish warning.",
  goal:"Ask about conditions before swimming, understand the warning (currents, where it's safe, where it's kapu), and ask where to go instead."},
 {id:"surf",    e:"🏄", t:"In the Surf Lineup", pl:"I ka nalu", mode:"local",
  role:"Bruddah Kawika, a local surfer at his home break. Friendly if you show respect, quick to give stink eye if you don't. Heavy Pidgin.",
  goal:"Say howzit, show respect, ask about the break, and handle it when he tells you that wave was his."},
 {id:"lost",    e:"🧭", t:"Asking Directions", pl:"Aia i hea?", mode:"haw",
  role:"Pualani, a university student waiting at a bus stop who is happy to answer in Hawaiian, using mauka, makai and simple directions.",
  goal:"Ask where the restroom, a store and the beach are (Aia i hea…?), and understand directions given with mauka and makai."},
 {id:"pau",     e:"🍻", t:"Pau Hana With Coworkers", pl:"Pau hana", mode:"local",
  role:"Jordan and Malia, two local coworkers at after-work drinks and pūpū. Casual, joking, mix of local English, Pidgin and Hawaiian words, tease the newcomer kindly.",
  goal:"Join the banter, talk about your week and weekend plans, react to the food, and say goodbye the local way."},
 {id:"party",   e:"🎉", t:"Baby's First Lūʻau", pl:"Pāʻina", mode:"local",
  role:"Uncle Bobby, the baby's grand-uncle at a backyard first-birthday lūʻau. Proud, welcoming, insists you eat and take a plate home.",
  goal:"Greet the family properly, congratulate them, talk story about the food and music, accept a plate home, and thank the host on the way out."},
 {id:"hike",    e:"⛰️", t:"Hiking With a Friend", pl:"Hele wāwae", mode:"haw",
  role:"Noelani, a friend who is a fluent Hawaiian speaker, hiking with the learner. Points at things and names them: mauna, wailele, lāʻau, manu. Keeps it simple.",
  goal:"Talk about the hike in Hawaiian: the weather, how you feel (tired, hot, thirsty), what you see, and plans to eat afterwards."},
 {id:"text",    e:"📱", t:"Texting Plans", pl:"Leka uila", mode:"haw",
  role:"Keola, a Hawaiian-speaking friend texting to make plans. Short messages, simple Hawaiian, the occasional 'shoots' or emoji.",
  goal:"Agree on what to do Saturday, what time, and where to meet (Aia i hea? I ka hola ʻehia?)."},
],
};

/* who the learner is, per language — shapes the coaching */
const TALK_LEARNER = {
haw: `Oliver, an American living in Hawaiʻi from November 2026 to mid-2027 (seven months). He is a BEGINNER in Hawaiian (roughly A1, working through a 90-day course) and wants to reach a real conversational level. He also wants to understand and sound natural in local island English and Pidgin. He cares about SPEAKING, not writing.

LANGUAGE LEVEL — VERY IMPORTANT
Scenes have a MODE given in the scenario.
- MODE haw: speak Hawaiian at his level: short, simple sentences (He ___ au / verb-first patterns, E + verb, Aia i hea, ʻEhia, makemake au i), common words only, one idea per line. Use correct ʻokina and kahakō. If he is clearly lost, add a few English words in brackets, never a full English reply. Gradually raise the level as he does well.
- MODE local: speak like a real local in that situation: English with natural Pidgin and the Hawaiian words locals actually use (mahalo, pau, ʻono, kōkua, keiki, mauka/makai, shoots, howzit…). Do not overdo heavy Pidgin to the point of caricature. In feedback, push him to use Hawaiian words and phrases where locals naturally would, and the safe Pidgin words; warn him if he uses Pidgin in a way that sounds like mocking it.
In both modes, best_version and alternatives should be Hawaiian (MODE haw) or natural local speech (MODE local). Use register "slang" for Pidgin, "casual" for relaxed local English or casual Hawaiian, "neutral" for standard, "formal" for respectful speech to kūpuna or teachers.
IGNORE missing ʻokina and kahakō when he types (phones make them hard) unless the missing mark makes a genuinely different word a listener would hear; then explain gently. Always write them correctly yourself.
Point out cultural fit too: calling elders Aunty/Uncle, saying mahalo, not calling himself "Hawaiian", respecting kapu.`,
};

/* ---------- the tutor's instructions (kept identical every call so it caches) ---------- */
function talkSystem(langName, code){ return `You are a conversation partner and speaking coach for ${langName}.

THE LEARNER
${TALK_LEARNER[code] || `Oliver, an American heritage speaker. He speaks ${langName} fluently at roughly B2/C1 but learned it at home, not in school. His goal is to sound like a native in real-life situations. He cares about SPEAKING, not writing.`}

HOW THE SESSION WORKS
The first user message describes a scenario: your character and the goal. Stay in character for the whole conversation. Speak like a real native in that situation — natural rhythm, colloquial where the character would be, formal where the situation demands it. Keep each in-character reply short (1–3 sentences) and always end with something the learner has to respond to, so the conversation keeps moving toward the scenario's goal. Introduce small complications so it isn't too easy.

FEEDBACK ON EVERY LEARNER MESSAGE
Judge the learner's message as if he had SAID it out loud.
- IGNORE everything that would be invisible in speech: missing diacritics (ą ę ł ó ś ż ź ć ń), spelling, capitalisation, punctuation, typos. Never mention them. Treat "zrobilem" as "zrobiłem".
- FOCUS on what a listener would hear: wrong case endings, gender agreement, verb aspect, conjugation, prepositions, word order that sounds foreign, calques from English, wrong word choice, and wrong register (ty vs Pan/Pani, too stiff, too casual).
- Also judge whether he answered the situation well: did he actually respond to what was asked, was it polite enough, would it get him what he wants?
- verdict: "perfect" = a native would say exactly this; "good" = correct and understandable but a native would phrase it better; "fix" = something sounds wrong to a native ear.
- your_version: repeat the learner's message exactly as typed.
- best_version: how a native would naturally say the same thing in this situation, written with correct diacritics. If his version is already perfect, repeat it with diacritics.
- why: one or two short sentences in English explaining the most important difference. If perfect, say what he did well. Never comment on spelling.
- fits_situation: one short English sentence ONLY if register or appropriateness was off or could be smarter; otherwise "".
- alternatives: 2–3 other ways a native might say it, varied in register and style (casual, neutral, formal, slang), each with an English gloss. Prefer phrasings he probably doesn't use yet: idioms, set phrases, natural fillers.
- new_words: 0–3 useful words or phrases from YOUR reply or the alternatives that he may not know, with English.
For the very first turn (scenario start, no learner message yet) set verdict to "none" and leave the other feedback fields empty ("" or []).

YOUR NEXT LINE
- reply: your next in-character line, in ${langName} with correct diacritics.
- reply_en: an English translation of it.
- hint_en: a short English nudge for what he could say or ask next (not a translation of the answer).

If the learner writes in English or asks for help, stay in character but make the reply simpler, and put the ${langName} way to say what he wanted into best_version.
When the goal is reached, wrap the scene up naturally in character and offer a natural next twist so practice can continue.`; }

const TALK_TURN_SCHEMA = {
  type:"object", additionalProperties:false,
  required:["feedback","reply","reply_en","hint_en"],
  properties:{
    feedback:{ type:"object", additionalProperties:false,
      required:["verdict","your_version","best_version","why","fits_situation","alternatives","new_words"],
      properties:{
        verdict:{type:"string", enum:["none","perfect","good","fix"]},
        your_version:{type:"string"},
        best_version:{type:"string"},
        why:{type:"string"},
        fits_situation:{type:"string"},
        alternatives:{type:"array", items:{type:"object", additionalProperties:false,
          required:["text","en","register"],
          properties:{text:{type:"string"}, en:{type:"string"},
                      register:{type:"string", enum:["casual","neutral","formal","slang"]}}}},
        new_words:{type:"array", items:{type:"object", additionalProperties:false,
          required:["text","en"], properties:{text:{type:"string"}, en:{type:"string"}}}},
      }},
    reply:{type:"string"}, reply_en:{type:"string"}, hint_en:{type:"string"},
  }
};
const TALK_SUMMARY_SCHEMA = {
  type:"object", additionalProperties:false,
  required:["headline","did_well","work_on","phrases"],
  properties:{
    headline:{type:"string"},
    did_well:{type:"array", items:{type:"string"}},
    work_on:{type:"array", items:{type:"object", additionalProperties:false,
      required:["issue","you_said","native"], properties:{issue:{type:"string"}, you_said:{type:"string"}, native:{type:"string"}}}},
    phrases:{type:"array", items:{type:"object", additionalProperties:false,
      required:["text","en"], properties:{text:{type:"string"}, en:{type:"string"}}}},
  }
};

/* ---------- state ---------- */
let TK = null;          // the live conversation: {sc, msgs:[api messages], turns:[rendered], busy}
let TK_CLIENT = null;
function talkStoreKey(){ return "lt-talk-"+P.lang; }
function talkLoad(){ try{ TK = JSON.parse(localStorage.getItem(talkStoreKey())) || null; }catch(e){ TK=null; } if(TK) TK.busy=false; }
function talkSave(){ try{ localStorage.setItem(talkStoreKey(), JSON.stringify(TK)); }catch(e){} }
function talkApiKey(){ try{ return localStorage.getItem(TALK_KEY)||""; }catch(e){ return ""; } }
function talkScenarios(){ return TALK_SCENARIOS[P.lang] || []; }
function hasTalk(){ return !!TALK_SCENARIOS[P.lang]; }
const TALK_UI = {
  pl:{own:"Własny scenariusz", type:"Napisz po polsku…", eg:"e.g. Buying a used car from a private seller in Gdańsk"},
  haw:{own:"Kou manaʻo", type:"Write in Hawaiian, or local English…", eg:"e.g. Buying a used car from a local seller"},
};
function talkUI(){ return TALK_UI[P.lang] || {own:"Your own", type:"Write your reply…", eg:"e.g. Meeting a friend's parents for the first time"}; }

async function talkClient(){
  if(TK_CLIENT) return TK_CLIENT;
  const mod = await import(TALK_SDK);
  const Anthropic = mod.default || mod.Anthropic;
  TK_CLIENT = new Anthropic({ apiKey: talkApiKey(), dangerouslyAllowBrowser: true });
  TK_CLIENT._A = Anthropic;
  return TK_CLIENT;
}

/* one round-trip: send the history, get structured JSON back */
async function talkCall(messages, schema){
  const client = await talkClient();
  const res = await client.beta.messages.create({
    model: TALK_MODEL,
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    cache_control: { type: "ephemeral" },
    output_config: { effort: "medium", format: { type: "json_schema", schema } },
    system: talkSystem(L.name, P.lang),
    messages,
  });
  if(res.stop_reason === "refusal") throw new Error("REFUSAL");
  const txt = res.content.filter(b=>b.type==="text").map(b=>b.text).join("");
  return { res, data: JSON.parse(txt) };
}

function talkErr(e){
  const A = TK_CLIENT && TK_CLIENT._A;
  if(A && e instanceof A.AuthenticationError) return "Your API key was rejected. Tap ⚙️ Key to paste a new one.";
  if(A && e instanceof A.RateLimitError) return "Too many requests right now. Wait a moment and send again.";
  if(A && e instanceof A.APIConnectionError) return "Couldn't reach Claude. Check your connection and try again.";
  if(A && e instanceof A.APIError) return "Claude returned an error ("+e.status+"). Try sending again.";
  if(e && e.message==="REFUSAL") return "Claude declined that message. Try rephrasing it.";
  if(e instanceof SyntaxError) return "The reply came back garbled. Send again.";
  return "Something went wrong: "+(e&&e.message||e);
}

/* ---------- actions ---------- */
async function talkStart(id, custom){
  if(!talkApiKey()) return talkKeyModal();
  const sc = id==="custom"
    ? {id:"custom", e:"✨", t:"Your Own Scenario", pl:talkUI().own, role:"Whoever fits the situation the learner describes.", goal:custom}
    : talkScenarios().find(s=>s.id===id);
  if(!sc) return;
  const opener = `SCENARIO START.${sc.mode?`\nMODE: ${sc.mode}`:""}\nYour character: ${sc.role}\nThe learner's goal: ${sc.goal}\nOpen the scene in character with your first line.`;
  TK = {sc, msgs:[{role:"user", content:opener}], turns:[], busy:true, err:""};
  autoStartTimer("talk-"+P.lang);
  paintTalk();
  try{
    const {res, data} = await talkCall(TK.msgs, TALK_TURN_SCHEMA);
    TK.msgs.push({role:"assistant", content:res.content});
    TK.turns.push({who:"ai", text:data.reply, en:data.reply_en, hint:data.hint_en});
    if(P.autoplay) speak(data.reply);
  }catch(e){ TK.err=talkErr(e); }
  TK.busy=false; talkSave(); paintTalk();
}

async function talkSend(){
  const box=document.getElementById("tk-in"); if(!box||!TK||TK.busy) return;
  const text=box.value.trim(); if(!text) return;
  TK.turns.push({who:"me", text});
  TK.msgs.push({role:"user", content:text});
  TK.busy=true; TK.err=""; box.value="";
  paintTalk();
  try{
    const {res, data} = await talkCall(TK.msgs, TALK_TURN_SCHEMA);
    TK.msgs.push({role:"assistant", content:res.content});
    TK.turns[TK.turns.length-1].fb = data.feedback;
    TK.turns.push({who:"ai", text:data.reply, en:data.reply_en, hint:data.hint_en});
    if(P.autoplay) speak(data.reply);
  }catch(e){
    TK.err=talkErr(e);
    TK.msgs.pop(); TK.turns.pop();             // let him resend the same line
    const b=document.getElementById("tk-in"); if(b) b.value=text;
  }
  TK.busy=false; talkSave(); paintTalk();
}

async function talkFinish(){
  if(!TK || TK.busy) return;
  if(!TK.turns.some(t=>t.who==="me")){ talkQuit(); return; }
  TK.busy=true; paintTalk();
  const ask = {role:"user", content:"SCENE OVER. Step out of character. Review the whole conversation as a speaking coach (ignore spelling and diacritics entirely). headline: one encouraging, honest sentence. did_well: 2–3 specific things. work_on: the 2–4 most important patterns to fix, each with a short example of what he said and how a native would say it. phrases: 5 native phrases from this conversation worth adopting, with English."};
  try{
    const {data} = await talkCall(TK.msgs.concat([ask]), TALK_SUMMARY_SCHEMA);
    talkSummaryModal(data);
    (S.talkLog=S.talkLog||[]).push({d:todayStr(), sc:TK.sc.id, n:TK.turns.filter(t=>t.who==="me").length});
    TK=null; localStorage.removeItem(talkStoreKey()); save();
  }catch(e){ TK.err=talkErr(e); TK.busy=false; talkSave(); }
  paintTalk();
}
function talkUnsave(text){ S.phrases=(S.phrases||[]).filter(x=>x.text!==text); save(); talkPhrases(); }
function talkQuit(){ TK=null; try{localStorage.removeItem(talkStoreKey());}catch(e){} paintTalk(); }

function talkSavePhrase(text,en){
  S.phrases=S.phrases||[];
  if(!S.phrases.some(p=>p.text===text)){ S.phrases.push({text,en,d:todayStr()}); save(); toast("★ Saved to your phrases"); }
  else toast("Already saved");
}

/* ---------- rendering ---------- */
/* tkH: safe inside an HTML attribute · tkA: safe as a '…' argument inside onclick="…" */
function tkH(x){ return String(x==null?"":x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }
function tkA(x){ return tkH(String(x==null?"":x).replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g," ")); }
function talkHint(b){ const p=document.createElement("p"); p.className="tk-hintx"; p.textContent="💡 "+b.dataset.h; b.replaceWith(p); }
const REG_TAG={casual:"t-blue",neutral:"t-gold",formal:"t-red",slang:"t-green"};
const VERDICT={perfect:["🎯","Native-Like","t-green"], good:["👍","Good — Here's the Native Way","t-gold"], fix:["🛠️","Let's Fix This","t-red"]};

function phraseRow(text,en,tag){
  return `<div class="tk-alt">
    <div><span class="fr">${esc(text)}</span>${tag?` <span class="tag ${REG_TAG[tag]||"t-blue"}">${tag}</span>`:""}<div class="muted tk-en">${esc(en)}</div></div>
    <button class="spk" data-t="${tkH(text)}" title="Hear it">🔊</button>
    <button class="tk-star" title="Save phrase" onclick="talkSavePhrase('${tkA(text)}','${tkA(en)}')">☆</button>
  </div>`;
}
function fbCard(f){
  if(!f || f.verdict==="none") return "";
  const v=VERDICT[f.verdict]||VERDICT.good;
  const same = (f.best_version||"").trim().toLowerCase()===(f.your_version||"").trim().toLowerCase();
  return `<div class="tk-fb ${f.verdict}">
    <div class="tk-fbh"><span class="tag ${v[2]}">${v[0]} ${v[1]}</span></div>
    ${f.best_version && !(f.verdict==="perfect"&&same)?`<div class="tk-best"><div class="eyebrow" style="margin:0 0 2px">Best Way to Say It</div>${phraseRow(f.best_version,"",null)}</div>`:""}
    ${f.why?`<p class="tk-why">${esc(f.why)}</p>`:""}
    ${f.fits_situation?`<p class="tk-sit">🎭 ${esc(f.fits_situation)}</p>`:""}
    ${(f.alternatives||[]).length?`<div class="eyebrow" style="margin:10px 0 4px">Natives Also Say</div>${f.alternatives.map(a=>phraseRow(a.text,a.en,a.register)).join("")}`:""}
    ${(f.new_words||[]).length?`<div class="eyebrow" style="margin:10px 0 4px">New Words</div><div class="tk-words">${f.new_words.map(w=>`<span><b class="fr">${esc(w.text)}</b> ${esc(w.en)}</span>`).join("")}</div>`:""}
  </div>`;
}

function paintTalk(){
  const el=document.getElementById("v-talk"); if(!el) return;
  if(!hasTalk()){ el.innerHTML=`<div class="card"><p>Conversation practice isn't set up for ${L.name} yet.</p></div>`; return; }
  if(TK===null) talkLoad();
  if(!TK){ el.innerHTML=talkPicker(); return; }

  const last=TK.turns[TK.turns.length-1];
  el.innerHTML=`
  <div class="tk-head">
    <div><div class="eyebrow" style="margin:0">${TK.sc.e} ${esc(TK.sc.pl)}</div><b>${esc(TK.sc.t)}</b></div>
    <button class="btn ghost sm" onclick="talkFinish()" ${TK.busy?"disabled":""}>Finish &amp; Review</button>
  </div>
  <p class="muted tk-goal">🎯 ${esc(TK.sc.goal)}<br>✍️ Spelling and missing accents are never marked. You're coached on how it would sound said out loud.</p>
  <div class="tk-chat" id="tk-chat">
    ${TK.turns.map((t,i)=> t.who==="ai"
      ? `<div class="tk-row ai"><div class="tk-b ai">
          <span class="fr">${esc(t.text)}</span>
          <div class="tk-tools"><button class="spk" data-t="${tkH(t.text)}">🔊</button>
            <button class="tk-tr" onclick="this.parentNode.nextElementSibling.hidden=!this.parentNode.nextElementSibling.hidden">EN</button></div>
          <div class="tk-en muted" ${P.talkEN?"":"hidden"}>${esc(t.en||"")}</div>
        </div></div>`
      : `<div class="tk-row me"><div class="tk-b me">${esc(t.text)}</div></div>${fbCard(t.fb)}`
    ).join("")}
    ${TK.busy?`<div class="tk-row ai"><div class="tk-b ai tk-typing"><i></i><i></i><i></i></div></div>`:""}
    ${TK.err?`<div class="box red"><b>Not sent</b>${esc(TK.err)}${TK.turns.length===0?`<div class="row" style="margin-top:10px"><button class="btn sm" onclick="talkStart(TK.sc.id, TK.sc.goal)">Try Again</button><button class="btn ghost sm" onclick="talkKeyModal()">⚙️ API Key</button><button class="btn ghost sm" onclick="talkQuit()">Back</button></div>`:""}</div>`:""}
  </div>
  <div class="tk-bar">
    ${last&&last.who==="ai"&&last.hint&&!TK.busy?`<button class="tk-hint" onclick="talkHint(this)" data-h="${tkH(last.hint)}">💡 What Could I Say?</button>`:""}
    <div class="tk-inrow">
      <textarea id="tk-in" rows="2" placeholder="${tkH(talkUI().type)}" ${TK.busy?"disabled":""}></textarea>
      <button class="btn" onclick="talkSend()" ${TK.busy?"disabled":""}>Send</button>
    </div>
  </div>`;
  const box=document.getElementById("tk-in");
  if(box){ box.onkeydown=e=>{ if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); talkSend(); } }; if(!TK.busy && window.innerWidth>700) box.focus(); }
  const ch=document.getElementById("tk-chat"); if(ch) ch.lastElementChild && ch.lastElementChild.scrollIntoView({block:"end"});
}

function talkPicker(){
  const key=!!talkApiKey(), ph=(S.phrases||[]).length, done=(S.talkLog||[]).length;
  return `
  <div class="hero">
    <div class="hero-flag">💬</div>
    <div class="eyebrow">${L.name} · Conversation</div>
    <h2>Learn by Talking</h2>
    <p>Pick a real-life situation. Claude plays the other person, you reply in ${L.name}, and every reply gets coached on how it would <b>sound</b>: the native way to say it, and other ways natives would put it. Spelling and missing accents are ignored.</p>
    <div class="row">
      <button class="btn" onclick="talkStart('luzno')">Start a Casual Chat</button>
      <button class="btn ghost" onclick="talkPhrases()">★ Saved Phrases (${ph})</button>
    </div>
  </div>
  ${key?"":`<div class="card" style="margin-top:16px;border-color:var(--blue)">
    <div class="eyebrow">One-Time Setup</div>
    <p style="margin:0 0 10px">Conversation practice needs your Anthropic API key. It stays on this device and is never synced.</p>
    <button class="btn" onclick="talkKeyModal()">Add API Key</button></div>`}
  <div class="mini">
    <div class="stat"><b>${done}</b><span>Conversations</span></div>
    <div class="stat"><b>${ph}</b><span>Phrases Saved</span></div>
  </div>
  <h3 style="margin:22px 0 10px">Scenarios</h3>
  <div class="g-list">${talkScenarios().map(s=>`<button class="g" onclick="talkStart('${s.id}')">
    <h4>${s.e} ${s.t}</h4><p><i>${s.pl}</i> — ${esc(s.goal)}</p></button>`).join("")}
    <div class="g" style="cursor:default">
      <h4>✨ Your Own Scenario</h4>
      <p style="margin-bottom:9px">Describe any situation, in English or ${L.name}.</p>
      <textarea id="tk-custom" rows="2" placeholder="${tkH(talkUI().eg)}"></textarea>
      <button class="btn sm" style="margin-top:8px" onclick="const v=document.getElementById('tk-custom').value.trim(); if(v) talkStart('custom', v)">Start</button>
    </div>
  </div>
  <div class="row" style="margin-top:18px">
    <button class="btn ghost sm" onclick="talkKeyModal()">⚙️ API Key</button>
    <button class="btn ghost sm" onclick="P.talkEN=!P.talkEN;savePrefs();toast(P.talkEN?'English shown under replies':'English hidden — tap EN to reveal')">${P.talkEN?"Hide":"Show"} English Under Replies</button>
  </div>`;
}

function talkKeyModal(){
  const has=!!talkApiKey();
  modal(`<h2>Anthropic API Key</h2>
  <p class="muted">Conversation practice calls Claude directly from this device. Your key is saved <b>only in this browser</b>. It isn't synced and never leaves your device except to talk to Anthropic.</p>
  <ol style="font-size:14.5px">
    <li>Go to <b>console.anthropic.com</b> → API Keys → Create Key.</li>
    <li>Copy it (it starts with <code>sk-ant-</code>) and paste it below.</li>
    <li>Do this once on each device you use (phone and computer).</li>
  </ol>
  <input type="text" id="tk-key" placeholder="sk-ant-…" autocomplete="off" autocapitalize="off" spellcheck="false" value="">
  ${has?`<p class="muted" style="font-size:13px">A key is already saved. Paste a new one to replace it.</p>`:""}
  <div class="row" style="margin-top:12px">
    <button class="btn" onclick="const v=document.getElementById('tk-key').value.trim(); if(!v) return; localStorage.setItem('${TALK_KEY}',v); TK_CLIENT=null; closeModal(); toast('🔑 Key saved on this device'); paintTalk();">Save Key</button>
    ${has?`<button class="btn ghost" onclick="localStorage.removeItem('${TALK_KEY}'); TK_CLIENT=null; closeModal(); toast('Key removed'); paintTalk();">Remove Key</button>`:""}
  </div>
  <p class="muted" style="font-size:12.5px;margin-top:14px">Cost: each reply is a few cents or less with ${TALK_MODEL}. A 20-minute conversation typically costs well under a dollar.</p>`);
}

function talkSummaryModal(s){
  modal(`<div style="text-align:center"><div class="result-emoji">🗣️</div><h2>Conversation Review</h2></div>
  <p style="text-align:center;font-size:16px;font-weight:700">${esc(s.headline)}</p>
  ${(s.did_well||[]).length?`<div class="box green"><b>What You Did Well</b><ul style="margin:4px 0 0;padding-left:18px">${s.did_well.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`:""}
  ${(s.work_on||[]).length?`<h3 style="margin:18px 0 8px">Work On</h3>${s.work_on.map(w=>`<div class="wcard" style="margin-bottom:10px">
      <b>${esc(w.issue)}</b>
      <div class="wvs" style="margin-top:6px"><div><span class="tag t-red">You</span><i>${esc(w.you_said)}</i></div>
      <div><span class="tag t-green">Native</span><i class="fr">${esc(w.native)}</i></div></div></div>`).join("")}`:""}
  ${(s.phrases||[]).length?`<h3 style="margin:18px 0 8px">Phrases Worth Keeping</h3>${s.phrases.map(p=>phraseRow(p.text,p.en,null)).join("")}`:""}
  <div class="row" style="margin-top:18px"><button class="btn" onclick="closeModal();paintTalk()">New Conversation</button></div>`);
  confetti();
}

function talkPhrases(){
  const ps=(S.phrases||[]).slice().reverse();
  modal(`<h2>Saved Phrases</h2>
  <p class="muted">Phrases you starred during conversations. Tap 🔊 to hear one and say it out loud along with it.</p>
  ${ps.length?ps.map(p=>`<div class="tk-alt"><div><span class="fr">${esc(p.text)}</span><div class="muted tk-en">${esc(p.en||"")}</div></div>
    <button class="spk" data-t="${tkH(p.text)}">🔊</button>
    <button class="tk-star on" title="Remove" onclick="talkUnsave('${tkA(p.text)}')">★</button></div>`).join("")
   :`<p>Nothing saved yet. Tap ☆ next to any phrase during a conversation.</p>`}`);
}
