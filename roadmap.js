/* ============================================================
   ROAD TO B2 — one honest roadmap, shown as a study guide in
   French, Portuguese and Hawaiian. Loaded after all three.
   ============================================================ */

const ROADMAP_HTML = `
<h3>The honest maths</h3>
<p>B2 means you can live there: argue a bill, follow friends talking fast, joke around, make friends without English. For an English speaker that takes roughly:</p>
<table>
<tr><th>Language</th><th>Hours to B2</th><th>At 20 min/day only</th></tr>
<tr><td>🇫🇷 French</td><td>~550–650</td><td>~4½–5 years</td></tr>
<tr><td>🇧🇷 Portuguese</td><td>~550–650</td><td>~4½–5 years</td></tr>
<tr><td>🌺 Hawaiian</td><td>~700–900</td><td>~6–7 years</td></tr>
</table>
<p>20 minutes a day is about <b>120 hours a year</b>. That's a great base, but on its own it isn't fast. The fix isn't more studying. It's adding <b>free listening</b> on top.</p>

<h3>The fast plan: 20 minutes of study + 30 of listening</h3>
<div class="box green"><b>The 20 minutes is the lesson. The listening is the immersion.</b>Put the 30 minutes into time you already have: driving, the gym, cooking, a show at night. That takes each language to about <b>300 hours a year</b> and cuts the timeline roughly in half.</div>
<table>
<tr><th>Milestone</th><th>French / Portuguese</th><th>Hawaiian</th><th>What you can do</th></tr>
<tr><td><b>A1</b></td><td>Month 3</td><td>Month 3–4</td><td>Greet, order, ask directions, survive a first week</td></tr>
<tr><td><b>A2</b></td><td>Month 6–8</td><td>Month 8–10</td><td>Rent a place, see a doctor, set up a phone, small talk</td></tr>
<tr><td><b>B1</b></td><td>Month 12–15</td><td>Month 16–20</td><td>Handle problems, chat with coworkers, follow TV with subtitles</td></tr>
<tr><td><b>B2</b></td><td>Month 24–30</td><td>Month 30–40</td><td>Keep up with a group of locals, get jokes and slang, make friends</td></tr>
</table>
<p>The 90-day course in this app takes you through A1 and into A2. Later stages get written as you reach them. Just tell Claude "start stage 2".</p>

<h3>Survival missions — what each level means in real life</h3>
<table>
<tr><td style="width:56px"><span class="tag t-blue">A1</span></td><td>Order a coffee and a meal · buy a SIM card · ask where the bathroom is · say you don't understand · take a taxi</td></tr>
<tr><td><span class="tag t-gold">A2</span></td><td>View an apartment · pharmacy visit · open a bank account · tell someone about your weekend · text a new friend</td></tr>
<tr><td><span class="tag t-red">B1</span></td><td>Complain about a wrong order · call to book a doctor · handle a landlord problem · follow a podcast for learners</td></tr>
<tr><td><span class="tag t-green">B2</span></td><td>Argue a charge on a bill · follow a group of friends at a bar · understand a comedian · be yourself, with humor, in the language</td></tr>
</table>

<h3>Three things that make it go faster</h3>
<ol>
<li><b>Speak from week one.</b> A 30-minute weekly call with a tutor (italki, Preply) is the single biggest boost. Your 20-minute lessons give you material, and the call makes you use it.</li>
<li><b>Practice tab every day.</b> Two minutes of flashcards beats an hour once a week. The 🌍 All-languages deck covers all three at once.</li>
<li><b>Shadow.</b> Play a short clip, pause, repeat it exactly, copying the rhythm. That's how you start to sound native, not textbook.</li>
</ol>

<h3>Doing three languages at once</h3>
<ul>
<li><b>Separate French and Portuguese in time.</b> They're close enough to blur together. Anchor each one to a part of your day, for example French with morning coffee, Portuguese at lunch, Hawaiian in the evening.</li>
<li>Hawaiian is so different from the other two that it never gets mixed up with them. Do it whenever.</li>
<li>When they do blur (you'll say <i>obrigado</i> in Paris), laugh and move on. Mixing them up means both are sinking in.</li>
<li>Missed a day? Do 10 minutes of one language rather than skipping all three. The streak counts any 20 minutes.</li>
</ul>

<h3>What to listen to</h3>
<table>
<tr><td style="width:110px">🇫🇷 <b>French</b></td><td>InnerFrench podcast (learners) · Easy French on YouTube (street interviews) · <i>Lupin</i> and <i>Call My Agent!</i> on Netflix</td></tr>
<tr><td>🇧🇷 <b>Portuguese</b></td><td>Easy Portuguese on YouTube · <i>Sintonia</i> and <i>Cidade Invisível</i> on Netflix · Brazilian music: MPB, sertanejo, funk</td></tr>
<tr><td>🌺 <b>Hawaiian</b></td><td>Duolingo Hawaiian (a good add-on) · wehewehe.org (the dictionary) · Ke Aolama (Hawaiian-language news) · Keali'i Reichel's music</td></tr>
<tr><td>🤙 <b>Pidgin</b></td><td>Search YouTube for Bu Laʻia or Andy Bumatai (comedy). Pidgin is mostly heard, not written, so listening is the only way in.</td></tr>
</table>

<h3>Proving it</h3>
<p>French: <b>DELF B2</b>. Brazilian Portuguese: <b>Celpe-Bras</b> (the official Brazilian exam). Hawaiian has no official B2 test. The finish line there is a relaxed 30-minute talk story with a fluent speaker, without slipping into English.</p>
`;

(function addRoadmap(){
  const g = {id:"b2", title:"Road to B2", sub:"Honest hours, realistic dates, and how to go faster", tag:"Roadmap", body:ROADMAP_HTML};
  [typeof FR_GUIDES!=="undefined"?FR_GUIDES:null,
   typeof PT_GUIDES!=="undefined"?PT_GUIDES:null].forEach(list=>{
    if(list && !list.some(x=>x.id==="b2")) list.unshift(g);
  });
  if(typeof HAW_GUIDES!=="undefined"){
    const i = HAW_GUIDES.findIndex(x=>x.id==="b2");
    if(i>-1) HAW_GUIDES.splice(i,1);
    HAW_GUIDES.unshift(g);
  }
})();
