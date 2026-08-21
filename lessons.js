/* ============================================================
   LESSONS — Days 1-7. Each has a long body, homework, and a
   real test. Quizzes shuffle both questions and answer order.
   Question types: mc (multiple choice), type (write it),
   listen (hear it, then answer).
   ============================================================ */
const FR_LESSONS = {};
const FR_EXTRA_VOCAB = [];

/* ------------------------------------------------------------------ DAY 1 */
FR_LESSONS[1] = {
title:"The four sounds English doesn't have",
mins:20,
goal:"Produce the four French sounds that don't exist in English, and use the eight words you'll say most often.",
body:`
<h3>Why we start with sound, not words</h3>
<p>Most courses teach words first and pronunciation later. That is backwards. Your mouth builds habits in the first two weeks, and bad habits are brutal to undo — people who start with sound end up with an accent, people who start with vocabulary end up with an American accent they spend years sanding off.</p>
<p>So today is four sounds. That is genuinely it. Everything else this week is built on them.</p>
<div class="box red"><b>Non-negotiable</b>Read every French word on this page <b>out loud</b>. Not in your head. Whispering does not count. Your mouth is learning a physical skill, like a golf swing — watching does nothing.</div>

<h3>Sound 1 — The nasal vowel</h3>
<p>English sends all its air through the mouth. French sometimes routes it through the <b>nose</b> instead. When you see <b>-on, -an, -en, -in, -un</b> and the next letter isn't a vowel, that N is not a consonant. It is a road sign that says "open the nose".</p>
<p><b>Find the sound:</b> say the English word "song" — but stop dead before the G. That trapped, humming <i>onnn</i> is the French sound. Now say "bon" the same way.</p>
<p>There are really only <b>three</b> nasal sounds to learn, and English speakers hear them as roughly:</p>
<table>
<tr><th>Spelling</th><th>Roughly</th><th>Examples</th></tr>
<tr><td><b>on, om</b></td><td>"ohn" — like the O in "bone", nose open</td><td class="fr">bon, bonjour, nom, non</td></tr>
<tr><td><b>an, am, en, em</b></td><td>"ahn" — like the A in "father", nose open</td><td class="fr">an, dans, temps, enfant</td></tr>
<tr><td><b>in, im, ain, ein, un</b></td><td>"an" — like the A in "cat", nose open</td><td class="fr">vin, pain, main, un</td></tr>
</table>
<div class="box red"><b>The number one beginner mistake</b>Pronouncing the N. <span class="fr">Bonjour</span> is <span class="say">bohn-ZHOOR</span> — never "bon-jore". If your tongue touches the roof of your mouth at the end of "bon", you said it wrong. Try again with your tongue flat.</div>
<p><b>Test yourself:</b> these two words differ <i>only</i> in the nasal vowel. Say them back to back until they sound different: <span class="fr">bon</span> (good) vs <span class="fr">banc</span> (bench). Then <span class="fr">vin</span> (wine) vs <span class="fr">vent</span> (wind).</p>

<h3>Sound 2 — The French U</h3>
<p>This sound does not exist anywhere in English, which is why there is a trick for it:</p>
<div class="box blue"><b>The whistle trick</b>Say "ee" and hold it. Now, <b>without moving your tongue at all</b>, round your lips as if you were about to whistle. The sound changes. That new sound is the French <b>u</b>.</div>
<p>Your tongue stays forward the whole time. If your tongue slides back, you get "oo" instead, which is a different word in French.</p>
<table>
<tr><th>Word</th><th>Say it</th><th>Means</th></tr>
<tr><td class="fr">tu</td><td class="say">tü</td><td>you</td></tr>
<tr><td class="fr">salut</td><td class="say">sa-LÜ</td><td>hi / bye</td></tr>
<tr><td class="fr">une</td><td class="say">ün</td><td>a / one</td></tr>
<tr><td class="fr">bienvenue</td><td class="say">bee-an-vuh-NÜ</td><td>welcome</td></tr>
</table>
<p><b>Critical contrast:</b> <b>u</b> is the whistle sound. <b>ou</b> is the ordinary English "oo" as in "food". These are completely different letters to a French ear:</p>
<table>
<tr><td class="fr">tu</td><td class="say">tü</td><td>you</td><td class="fr">tout</td><td class="say">too</td><td>everything</td></tr>
<tr><td class="fr">dessus</td><td class="say">duh-SÜ</td><td>on top</td><td class="fr">dessous</td><td class="say">duh-SOO</td><td>underneath</td></tr>
</table>
<p>So: <span class="fr">bonjour</span> has the easy "oo". <span class="fr">salut</span> has the whistle. Say them one after the other and feel your lips change.</p>

<h3>Sound 3 — The R in the throat</h3>
<p>The French R is not made with the tip of your tongue. It is made at the very <b>back of your throat</b>, in the same place you gargle. It is closer to a soft, wet clearing of the throat than to any English R.</p>
<p><b>Find the sound:</b> say "ah". Now say "ah" again while very gently pretending to gargle water. That scratch at the back is the French R. Add it to "ah" and you have <span class="fr">art</span>.</p>
<table>
<tr><td class="fr">merci</td><td class="say">mehr-SEE</td><td>thank you</td></tr>
<tr><td class="fr">Paris</td><td class="say">pa-REE</td><td>Paris</td></tr>
<tr><td class="fr">rouge</td><td class="say">roozh</td><td>red</td></tr>
<tr><td class="fr">au revoir</td><td class="say">oh ruh-VWAHR</td><td>goodbye</td></tr>
</table>
<div class="box"><b>Do not stress about this one</b>A weak, soft French R is completely understandable and nobody will blink. An English "rrr" is the single thing that instantly marks you as American. Aim for "soft and throaty", not "perfect". This one takes weeks and that is normal.</div>

<h3>Sound 4 — ZH (and its cousin SH)</h3>
<p>The letter <b>J</b>, and <b>G</b> when it comes before <b>e</b> or <b>i</b>, make the sound in the middle of "mea<b>s</b>ure" or "vi<b>si</b>on". Never the English J of "jump".</p>
<table>
<tr><td class="fr">je</td><td class="say">zhuh</td><td>I</td></tr>
<tr><td class="fr">bonjour</td><td class="say">bohn-ZHOOR</td><td>hello</td></tr>
<tr><td class="fr">rouge</td><td class="say">roozh</td><td>red</td></tr>
<tr><td class="fr">bonne journée</td><td class="say">bun zhoor-NAY</td><td>have a good day</td></tr>
</table>
<p>Its cousin: <b>ch</b> in French is "sh", never "ch" as in "church". <span class="fr">chat</span> = <span class="say">sha</span> (cat). <span class="fr">chaud</span> = <span class="say">shoh</span> (hot).</p>

<h3>Your first eight words</h3>
<table>
<tr><th>French</th><th>Say it</th><th>Means</th><th>When to use it</th></tr>
<tr><td class="fr">Bonjour</td><td class="say">bohn-ZHOOR</td><td>Hello / Good day</td><td>Anyone, until about 6pm. Non-negotiable entering a shop.</td></tr>
<tr><td class="fr">Bonsoir</td><td class="say">bohn-SWAHR</td><td>Good evening</td><td>After about 6pm</td></tr>
<tr><td class="fr">Salut</td><td class="say">sa-LÜ</td><td>Hi / Bye</td><td>Friends only. Never to a shopkeeper.</td></tr>
<tr><td class="fr">Au revoir</td><td class="say">oh ruh-VWAHR</td><td>Goodbye</td><td>Always say it when leaving a shop</td></tr>
<tr><td class="fr">Merci</td><td class="say">mehr-SEE</td><td>Thank you</td><td>Everywhere</td></tr>
<tr><td class="fr">S'il vous plaît</td><td class="say">seel voo PLEH</td><td>Please</td><td>Everywhere. Literally "if it pleases you".</td></tr>
<tr><td class="fr">Oui / Non</td><td class="say">wee / nohn</td><td>Yes / No</td><td>Everywhere</td></tr>
<tr><td class="fr">Pardon</td><td class="say">par-DOHN</td><td>Sorry / Excuse me</td><td>Bumping into someone, or getting attention</td></tr>
</table>
<p>Two more you get for free because they are built from the above:</p>
<ul>
<li><span class="fr">Merci beaucoup</span> <span class="say">mehr-SEE boh-KOO</span> — thank you very much</li>
<li><span class="fr">Bonne journée</span> <span class="say">bun zhoor-NAY</span> — have a good day (said when leaving)</li>
</ul>

<h3>Memory hooks</h3>
<ul>
<li><b>Bonjour</b> = <i>bon</i> (good) + <i>jour</i> (day). You already know "bon" from bonbon, bon voyage, bon appétit. A good day.</li>
<li><b>Bonsoir</b> = <i>bon</i> + <i>soir</i> (evening). Same machine, different part.</li>
<li><b>Au revoir</b> = literally "until re-seeing". Think <i>re-view</i>. Until we view each other again.</li>
<li><b>S'il vous plaît</b> — hear it as "seal, voo, play". Picture a seal playing with a ball to please you.</li>
<li><b>Merci</b> — think "mercy". You beg for mercy, then you say thanks.</li>
<li><b>Pardon</b> — the same word English borrowed. Just say it with the nose open and no hard N.</li>
</ul>

<h3>The one cultural rule that matters most</h3>
<div class="box blue"><b>Always say bonjour first</b>In France you say <span class="fr">Bonjour</span> when you walk into a shop, a bakery, a pharmacy, a doctor's waiting room, an elevator, a small restaurant — anywhere with a person in it. Not saying it reads as genuinely rude, and it is the single biggest reason tourists come home thinking Parisians are cold. Say bonjour first, and the entire interaction changes tone. Then say <span class="fr">au revoir</span> on the way out.</div>
<p>The unwritten sequence for any shop:</p>
<ol>
<li>Walk in. <span class="fr">Bonjour !</span></li>
<li>Do your business. <span class="fr">S'il vous plaît</span> when asking, <span class="fr">merci</span> when receiving.</li>
<li>Leave. <span class="fr">Merci, au revoir, bonne journée !</span></li>
</ol>

<h3>Out loud — five minutes, no skipping</h3>
<p><b>Drill A — the nasal.</b> Say five times each, tongue flat, no N at the end:<br>
<span class="fr">bon … bon … bon</span> then <span class="fr">bonjour … bonjour … bonjour</span></p>
<p><b>Drill B — u vs ou.</b> Alternate, ten times, exaggerating your lips:<br>
<span class="fr">tu — tout — tu — tout — salut — bonjour</span></p>
<p><b>Drill C — the R.</b> Gargle-soft, five times each:<br>
<span class="fr">merci … merci … Paris … Paris … au revoir</span></p>
<p><b>Drill D — the whole shop sequence.</b> Say it as one flowing performance, three times, as if you mean it:<br>
<span class="fr">Bonjour ! … Oui, s'il vous plaît. … Merci beaucoup ! … Au revoir, bonne journée !</span></p>
`,
homework:[
 {t:"The bakery rehearsal", d:"Stand up, walk across the room, and perform the full shop sequence out loud three times: Bonjour — S'il vous plaît — Merci beaucoup — Au revoir, bonne journée. Standing and walking matters; it wires the phrases to a situation instead of to a page."},
 {t:"Record yourself", d:"Open Voice Memos on your phone. Record yourself saying bonjour, salut, merci, au revoir. Play it back. Compare to the app's audio by tapping the same words. Note one thing that is off — that is tomorrow's warm-up."},
 {t:"Nasal hunt", d:"Say these out loud and mark which nasal family each one is (ohn / ahn / an): bon, pain, dans, non, vin, temps, un, nom. Answers: ohn, an, ahn, ohn, an, ahn, an, ohn."},
 {t:"Say it in the wild", d:"At some point today, say bonjour out loud to an empty room the way a French person would — brisk, upward, two syllables. Once you can do it without thinking, it will come out right under pressure."}
],
quiz:[
 {t:"mc", q:"How do you pronounce the <b>N</b> at the end of <b>bonjour</b>?", a:["You don't — it just tells your nose to open","Hard, like the N in 'bone'","Like an M","Silently, but the O becomes 'oh'"], c:0, why:"The N is a road sign, not a consonant. Your tongue should never touch the roof of your mouth. <b>bohn-ZHOOR</b>."},
 {t:"mc", q:"You walk into a bakery at 10am. What comes out of your mouth first?", a:["Bonjour","Salut","Merci","Au revoir"], c:0, why:"<b>Bonjour</b>, always, to anyone, on entering. <b>Salut</b> is friends-only and would land as rude to a shopkeeper."},
 {t:"mc", q:"What is the trick for the French <b>u</b> in <i>salut</i>?", a:["Say 'ee', then round your lips like a whistle without moving your tongue","Say 'oo' as in food","Say 'uh' with your throat closed","Say 'yoo' as in 'you'"], c:0, why:"Tongue stays forward in the 'ee' position, lips round. If your tongue slides back you get 'ou' instead, which is a different sound entirely."},
 {t:"mc", q:"Where in your mouth is the French <b>R</b> made?", a:["At the back of the throat, like a gentle gargle","With the tip of the tongue, like English","Rolled with the tongue, like Spanish","It is silent"], c:0, why:"Back of the throat. Both the English 'rrr' and a rolled Spanish R sound instantly foreign in French."},
 {t:"mc", q:"<b>S'il vous plaît</b> literally translates as…", a:["If it pleases you","Please me","With pleasure","I would like"], c:0, why:"French politeness is built out of little conditional escape hatches like this one."},
 {t:"mc", q:"Which pair of words has the SAME vowel sound?", a:["bonjour and tout","tu and tout","salut and bonjour","vin and bon"], c:0, why:"<b>bonjour</b> and <b>tout</b> both use 'ou' = ordinary 'oo'. <b>tu</b> and <b>salut</b> use the whistle 'u'. <b>vin</b> and <b>bon</b> are different nasal families."},
 {t:"mc", q:"In French, <b>ch</b> as in <i>chat</i> sounds like…", a:["sh, as in 'shoe'","ch, as in 'church'","k, as in 'chaos'","zh, as in 'measure'"], c:0, why:"<b>chat</b> = <b>sha</b> (cat). French <b>ch</b> is always 'sh'. The 'zh' sound comes from <b>j</b> and soft <b>g</b> instead."},
 {t:"mc", q:"It is 8pm and you are meeting your friend's parents for the first time. What do you say?", a:["Bonsoir","Bonjour","Salut","Bonne journée"], c:0, why:"After roughly 6pm it becomes <b>bonsoir</b>. <b>Salut</b> is too casual for people you have just met, and <b>bonne journée</b> is a goodbye, not a hello."},
 {t:"type", q:"Write the French for <b>thank you very much</b>.", ans:["merci beaucoup"], why:"<b>Merci beaucoup</b> — <span class='say'>mehr-SEE boh-KOO</span>. Note the final P of 'beaucoup' is silent, like most final consonants."},
 {t:"type", q:"Write the French for <b>goodbye</b> (the standard, polite one).", ans:["au revoir","aurevoir"], why:"<b>Au revoir</b> — literally 'until re-seeing'. Two words."},
 {t:"listen", play:"Bonjour, merci beaucoup !", q:"Listen, then choose what you heard.", a:["Hello, thank you very much!","Good evening, please!","Goodbye, have a good day!","Hi, sorry!"], c:0, why:"<b>Bonjour, merci beaucoup !</b> Getting used to hearing these at speed is half the battle."},
 {t:"listen", play:"Au revoir, bonne journée !", q:"Listen, then choose what you heard.", a:["Goodbye, have a good day!","Hello, good evening!","Please and thank you!","Sorry, I don't understand!"], c:0, why:"<b>Au revoir, bonne journée !</b> This is the standard exit line from any French shop."}
]
};

/* ------------------------------------------------------------------ DAY 2 */
FR_LESSONS[2] = {
title:"Silent letters, and how to answer Ça va ?",
mins:20,
goal:"Read French out loud without pronouncing letters that aren't there, and hold the shortest real conversation in the language.",
body:`
<h3>Warm-up (say these out loud before reading on)</h3>
<p><span class="fr">Bonjour ! Merci beaucoup. Au revoir, bonne journée !</span> — nose open on "bon", whistle lips on nothing yet, throat R on "merci".</p>

<h3>The single biggest rule in French spelling</h3>
<div class="box blue"><b>Final consonants are usually silent</b>French writes far more letters than it says. The ends of words are where the letters go to die.</div>
<table>
<tr><th>Written</th><th>Said</th><th>Means</th></tr>
<tr><td class="fr">Paris</td><td class="say">pa-REE</td><td>Paris — no S</td></tr>
<tr><td class="fr">petit</td><td class="say">puh-TEE</td><td>small — no T</td></tr>
<tr><td class="fr">vous</td><td class="say">voo</td><td>you — no S</td></tr>
<tr><td class="fr">grand</td><td class="say">grahn</td><td>big — no D</td></tr>
<tr><td class="fr">beaucoup</td><td class="say">boh-KOO</td><td>a lot — no P</td></tr>
<tr><td class="fr">français</td><td class="say">frahn-SEH</td><td>French — no S</td></tr>
</table>

<h3>The exception, and it has a name</h3>
<div class="box"><b>CaReFuL</b>The letters <b>C, R, F, L</b> usually ARE pronounced at the end of a word. Be <i>careful</i> with CaReFuL.</div>
<table>
<tr><td class="fr">sac</td><td class="say">sak</td><td>bag — C is said</td></tr>
<tr><td class="fr">bonjour</td><td class="say">bohn-ZHOOR</td><td>hello — R is said</td></tr>
<tr><td class="fr">neuf</td><td class="say">nuhf</td><td>nine — F is said</td></tr>
<tr><td class="fr">hôtel</td><td class="say">oh-TEL</td><td>hotel — L is said</td></tr>
</table>
<p>It is not a perfect rule — <span class="fr">blanc</span> is <span class="say">blahn</span> with a silent C — but it will carry you a very long way.</p>

<h3>Two more silent things</h3>
<p><b>Final -e is silent.</b> It does not add a syllable, it just wakes up the consonant before it.</p>
<ul>
<li><span class="fr">grand</span> <span class="say">grahn</span> (big, masculine) → <span class="fr">grande</span> <span class="say">grahnd</span> (big, feminine) — the E makes the D sound</li>
<li><span class="fr">table</span> <span class="say">TAH-bluh</span> — the final E is barely a breath</li>
</ul>
<p><b>Plural -s is silent too.</b> This is why French plurals are invisible in speech:</p>
<ul>
<li><span class="fr">l'ami</span> <span class="say">la-MEE</span> (the friend) and <span class="fr">les amis</span> <span class="say">lay za-MEE</span> (the friends) — you hear the difference in <b>le / les</b>, not in the S.</li>
</ul>
<p><b>H is always silent.</b> Every single time. <span class="fr">hôtel</span> = <span class="say">oh-TEL</span>, <span class="fr">homme</span> = <span class="say">om</span>, <span class="fr">heure</span> = <span class="say">uhr</span>.</p>

<h3>Liaison — why French sounds like one long word</h3>
<p>Here is the twist. A final consonant is silent <b>until</b> the next word starts with a vowel. Then it wakes up and jumps across to join it.</p>
<table>
<tr><th>Words</th><th>Said</th><th>What happened</th></tr>
<tr><td class="fr">vous êtes</td><td class="say">voo ZET</td><td>silent S wakes up as a Z</td></tr>
<tr><td class="fr">les amis</td><td class="say">lay za-MEE</td><td>silent S wakes up as a Z</td></tr>
<tr><td class="fr">c'est un ami</td><td class="say">say tan na-MEE</td><td>T and N both jump across</td></tr>
<tr><td class="fr">comment allez-vous</td><td class="say">kom-mahn ta-lay VOO</td><td>T jumps across</td></tr>
</table>
<div class="box"><b>This is not you being bad at listening</b>Spoken French genuinely glues words together. When you can't tell where one word ends, that is the language working as designed, not a failure of your ear. It gets easier fast.</div>

<h3>Now the conversation: Ça va ?</h3>
<p><span class="fr">Ça va ?</span> <span class="say">sa VA</span> literally means "it goes?" It is the most-used question in casual French and it does triple duty: how are you, is everything okay, are we good.</p>
<p>The beautiful part: <span class="fr">Ça va</span> is also the answer. Same two words, falling tone instead of rising.</p>
<table>
<tr><th>Answer</th><th>Say it</th><th>Means</th><th>Mood</th></tr>
<tr><td class="fr">Ça va</td><td class="say">sa VA</td><td>I'm fine</td><td>neutral, default</td></tr>
<tr><td class="fr">Ça va bien</td><td class="say">sa va bee-AN</td><td>I'm well</td><td>positive</td></tr>
<tr><td class="fr">Très bien, merci</td><td class="say">treh bee-AN mehr-SEE</td><td>Very well, thanks</td><td>warm, polite</td></tr>
<tr><td class="fr">Pas mal</td><td class="say">pa MAL</td><td>Not bad</td><td>casual, honest</td></tr>
<tr><td class="fr">Comme ci, comme ça</td><td class="say">kom SEE kom SA</td><td>So-so</td><td>meh</td></tr>
<tr><td class="fr">Ça va pas trop</td><td class="say">sa va pa TROH</td><td>Not great</td><td>honest, opens a conversation</td></tr>
</table>
<p><b>Then bounce it back.</b> This is what makes you sound like a person instead of a phrasebook:</p>
<ul>
<li><span class="fr">Et toi ?</span> <span class="say">ay TWA</span> — And you? (friends)</li>
<li><span class="fr">Et vous ?</span> <span class="say">ay VOO</span> — And you? (anyone else)</li>
</ul>

<h3>The formal version</h3>
<p>To a stranger, a shopkeeper, anyone older, or anyone you would call "sir" or "ma'am":</p>
<p><span class="fr">Comment allez-vous ?</span> <span class="say">kom-mahn ta-lay VOO</span> — How are you?<br>
Answer: <span class="fr">Très bien, merci. Et vous ?</span></p>
<div class="box red"><b>Careful</b>Do not say <span class="fr">Ça va ?</span> to your boss's boss or to a doctor you have just met. It is not offensive, but it lands like saying "sup" — mildly too familiar. Default to <span class="fr">Comment allez-vous ?</span> when in doubt.</div>

<h3>Put it together — the full two-line exchange</h3>
<table>
<tr><td class="fr">— Salut ! Ça va ?</td><td>— Hi! How's it going?</td></tr>
<tr><td class="fr">— Ça va bien, merci. Et toi ?</td><td>— Good, thanks. And you?</td></tr>
<tr><td class="fr">— Ça va, merci !</td><td>— I'm good, thanks!</td></tr>
</table>
<p>That is a complete, natural French conversation. You now own one.</p>

<h3>Out loud — five minutes</h3>
<p><b>Drill A — silent endings.</b> Say each, cutting the final letter dead:<br>
<span class="fr">Paris — petit — vous — grand — beaucoup — français</span></p>
<p><b>Drill B — CaReFuL.</b> Now say these, landing on the final letter:<br>
<span class="fr">sac — bonjour — neuf — hôtel</span></p>
<p><b>Drill C — liaison.</b> Glue them, three times each:<br>
<span class="fr">vous êtes — les amis — comment allez-vous</span></p>
<p><b>Drill D — the whole exchange.</b> Play both parts out loud, three times, changing the answer each time (bien / pas mal / comme ci comme ça).</p>
`,
homework:[
 {t:"Read a sign", d:"Find any French text — a wine label, a menu online, a perfume bottle. Read six words out loud applying the silent-ending rule. Then tap the same words in the Vocabulary tab if they're there and check yourself."},
 {t:"Six answers", d:"Say Ça va ? out loud, then answer it six different ways from the table, out loud, with the matching facial expression. Sounding bored when you say comme ci comme ça is part of the vocabulary."},
 {t:"Bounce it back", d:"Practice ten rounds of: question, answer, Et toi ? Do it fast enough that Et toi ? comes out automatically. That reflex is what keeps a real conversation alive."},
 {t:"Formal switch", d:"Run the same exchange twice — once casual with tu (Salut, ça va ?) and once formal with vous (Bonjour, comment allez-vous ?). Being able to flip registers is a week-3 skill you're starting early."}
],
quiz:[
 {t:"mc", q:"How is <b>Paris</b> pronounced in French?", a:["pa-REE","PA-riss","pa-REESS","PAIR-iss"], c:0, why:"Final S is silent. This is the default for French word endings."},
 {t:"mc", q:"The <b>CaReFuL</b> rule tells you which letters…", a:["ARE usually pronounced at the end of a word","are always silent","change the vowel before them","only appear in borrowed words"], c:0, why:"C, R, F, L are the usual survivors at the end of a word: sac, bonjour, neuf, hôtel."},
 {t:"mc", q:"Why does <b>vous êtes</b> sound like 'voo ZET'?", a:["Liaison — the silent S wakes up as a Z before a vowel","The S in vous is always pronounced","êtes starts with a hidden Z","It's an irregular exception you just memorize"], c:0, why:"Liaison: a silent final consonant reactivates and jumps to the next word when that word starts with a vowel. S becomes a Z sound."},
 {t:"mc", q:"What does the final <b>-e</b> in <b>grande</b> do?", a:["Nothing audible itself, but it makes the D before it pronounced","Adds an 'uh' syllable","Makes the word plural","Nasalizes the A"], c:0, why:"<b>grand</b> = grahn (silent D). <b>grande</b> = grahnd — the E wakes the D but isn't itself a syllable."},
 {t:"mc", q:"How do you hear the difference between <b>l'ami</b> and <b>les amis</b>?", a:["From le vs les — the plural S itself is silent","The S at the end is pronounced","There is no difference in speech","The A changes to a nasal"], c:0, why:"Plural S is silent. The article carries the information: <b>la-MEE</b> vs <b>lay za-MEE</b>."},
 {t:"mc", q:"Your friend says <b>Ça va ?</b> Which is NOT a natural answer?", a:["Comment allez-vous","Ça va bien","Pas mal","Comme ci, comme ça"], c:0, why:"<b>Comment allez-vous</b> is itself a question, and a formal one. The others are all answers."},
 {t:"mc", q:"You meet your friend's grandmother for the first time. Best opener?", a:["Bonjour, comment allez-vous ?","Salut, ça va ?","Ça va ?","Salut !"], c:0, why:"Stranger plus older plus first meeting — that is firmly <b>vous</b> territory. Ça va would land like saying 'sup' to her."},
 {t:"mc", q:"Which letter is silent in French every single time, no exceptions?", a:["H","R","L","N"], c:0, why:"French H is never pronounced: hôtel = oh-TEL, homme = om, heure = uhr."},
 {t:"type", q:"Write the French for <b>Not bad</b> (as an answer to Ça va ?).", ans:["pas mal"], why:"<b>Pas mal</b> — literally 'not bad'. Casual and very common."},
 {t:"type", q:"Write the two French words that bounce the question back to a friend: <b>And you?</b>", ans:["et toi","et toi ?"], why:"<b>Et toi ?</b> for a friend, <b>Et vous ?</b> for anyone else. Getting this reflex automatic is what keeps a conversation going."},
 {t:"type", q:"Write the French for <b>Very well, thank you.</b>", ans:["tres bien merci","tres bien, merci","très bien merci","très bien, merci"], why:"<b>Très bien, merci.</b> Accents don't change whether you're right here, but the real spelling is très."},
 {t:"listen", play:"Salut, ça va ?", q:"Listen, then choose what you heard.", a:["Hi, how's it going?","Hello, how are you? (formal)","Goodbye, see you soon","Please, thank you"], c:0, why:"<b>Salut, ça va ?</b> — the casual pair. The formal version would be Bonjour, comment allez-vous ?"},
 {t:"listen", play:"Comment allez-vous ?", q:"Listen. Who would you say this to?", a:["A shopkeeper you have never met","Your brother","A close friend","A small child"], c:0, why:"<b>Comment allez-vous ?</b> is the vous form — strangers, shopkeepers, elders, anyone in authority."}
]
};

FR_EXTRA_VOCAB.push(
["Ça va bien","sa va bee-AN","I'm doing well","greet","Ça va bien, merci. Et toi ?","I'm good, thanks. And you?","",2],
["Pas mal","pa MAL","Not bad","greet","— Ça va ? — Pas mal.","— How's it going? — Not bad.","literally 'not bad'",2],
["Comme ci, comme ça","kom SEE kom SA","So-so","greet","Comme ci, comme ça.","So-so.","say it with a shrug",2],
["Très bien","treh bee-AN","Very well","greet","Très bien, merci.","Very well, thank you.","",2],
["Et toi ?","ay TWA","And you? (friend)","greet","Ça va bien. Et toi ?","I'm good. And you?","bounce it back",2],
["Et vous ?","ay VOO","And you? (formal)","greet","Très bien. Et vous ?","Very well. And you?","",2],
["Merci beaucoup","mehr-SEE boh-KOO","Thank you very much","greet","Merci beaucoup, monsieur.","Thank you very much, sir.","final P silent",1]
);

/* ------------------------------------------------------------------ DAY 3 */
FR_LESSONS[3] = {
title:"Je suis, tu es, il est — saying who you are",
mins:20,
goal:"Introduce yourself completely: name, nationality, job, and where you live.",
body:`
<h3>Warm-up</h3>
<p>Out loud, no reading ahead: <span class="fr">Bonjour ! Ça va ?</span> … <span class="fr">Ça va bien, merci. Et vous ?</span> … <span class="fr">Au revoir, bonne journée !</span></p>

<h3>The people words (subject pronouns)</h3>
<p>English has I, you, he, she, we, they. French has nine, because "you" comes in two flavours and "they" comes in two genders.</p>
<table>
<tr><th>French</th><th>Say it</th><th>Means</th><th>Note</th></tr>
<tr><td class="fr">je</td><td class="say">zhuh</td><td>I</td><td>becomes <b>j'</b> before a vowel: j'ai, j'habite</td></tr>
<tr><td class="fr">tu</td><td class="say">tü</td><td>you</td><td>ONE person you know well</td></tr>
<tr><td class="fr">il</td><td class="say">eel</td><td>he / it</td><td></td></tr>
<tr><td class="fr">elle</td><td class="say">ell</td><td>she / it</td><td></td></tr>
<tr><td class="fr">on</td><td class="say">ohn</td><td>we (casual)</td><td>what French people actually say for "we"</td></tr>
<tr><td class="fr">nous</td><td class="say">noo</td><td>we</td><td>correct but slightly formal in speech</td></tr>
<tr><td class="fr">vous</td><td class="say">voo</td><td>you</td><td>polite singular OR any group</td></tr>
<tr><td class="fr">ils</td><td class="say">eel</td><td>they (m. or mixed)</td><td></td></tr>
<tr><td class="fr">elles</td><td class="say">ell</td><td>they (all female)</td><td></td></tr>
</table>
<div class="box blue"><b>Tu or vous — the rule that keeps you safe</b><b>tu</b> = one person, and you know them: friends, family, kids, pets, close colleagues.<br><b>vous</b> = everyone else, and always for groups: strangers, shopkeepers, waiters, anyone older, anyone in authority.<br><br>Being too formal is mildly charming. Being too casual is rude. <b>When in doubt, vous.</b> Wait for them to say <span class="fr">on peut se tutoyer</span> ("we can use tu").</div>

<h3>Today's grammar: the first three forms of ÊTRE (to be)</h3>
<p>We take the most important verb in the language three pieces at a time. Today, the singular.</p>
<table>
<tr><th>French</th><th>Say it</th><th>English</th></tr>
<tr><td class="fr">je suis</td><td class="say">zhuh SWEE</td><td>I am</td></tr>
<tr><td class="fr">tu es</td><td class="say">tü EH</td><td>you are (friend)</td></tr>
<tr><td class="fr">il est</td><td class="say">eel EH</td><td>he is</td></tr>
<tr><td class="fr">elle est</td><td class="say">ell EH</td><td>she is</td></tr>
<tr><td class="fr">vous êtes</td><td class="say">voo ZET</td><td>you are (polite)</td></tr>
</table>
<p>Note that <span class="fr">tu es</span> and <span class="fr">il est</span> sound almost identical — <span class="say">tü EH</span> / <span class="say">eel EH</span>. The pronoun carries all the information. That is a running theme in French.</p>

<h3>Saying your name — two ways</h3>
<table>
<tr><td class="fr">Je m'appelle Oliver.</td><td class="say">zhuh ma-PELL</td><td>My name is Oliver. (literally: I call myself)</td></tr>
<tr><td class="fr">Je suis Oliver.</td><td class="say">zhuh SWEE</td><td>I'm Oliver.</td></tr>
</table>
<p>Asking back:</p>
<ul>
<li><span class="fr">Comment tu t'appelles ?</span> <span class="say">ko-mahn tü ta-PELL</span> — What's your name? (friend)</li>
<li><span class="fr">Comment vous appelez-vous ?</span> <span class="say">ko-mahn voo za-play VOO</span> — What's your name? (formal)</li>
<li><span class="fr">Enchanté.</span> <span class="say">ahn-shahn-TAY</span> — Nice to meet you. (literally "enchanted")</li>
</ul>

<h3>Nationality — and your first taste of gender</h3>
<p>Adjectives in French change depending on whether the person is male or female. Usually you just add an <b>-e</b>, which wakes up the final consonant (Day 2's rule doing real work).</p>
<table>
<tr><th>Male says</th><th>Female says</th><th>Means</th></tr>
<tr><td class="fr">américain <span class="say">a-may-ree-KAN</span></td><td class="fr">américaine <span class="say">a-may-ree-KEN</span></td><td>American</td></tr>
<tr><td class="fr">français <span class="say">frahn-SEH</span></td><td class="fr">française <span class="say">frahn-SEZ</span></td><td>French</td></tr>
<tr><td class="fr">anglais</td><td class="fr">anglaise</td><td>English</td></tr>
<tr><td class="fr">canadien</td><td class="fr">canadienne</td><td>Canadian</td></tr>
</table>
<p>Hear it: <span class="fr">américain</span> ends in a nasal "an". Add the E and the N wakes up: <span class="fr">américaine</span> = "KEN". Same for <span class="fr">français</span> (silent S) → <span class="fr">française</span> ("SEZ").</p>
<div class="box"><b>Lowercase</b>Nationalities as adjectives are lowercase in French: <span class="fr">Je suis américain.</span> Only the country itself is capitalised: <span class="fr">les États-Unis</span>.</div>

<h3>Your job — and the trap</h3>
<p>Here is something English speakers get wrong every time. In French, <b>you drop the "a" before a job</b>.</p>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>I am <b>a</b> nurse</td><td class="fr">Je suis infirmier. <span class="muted">(not "un infirmier")</span></td></tr>
<tr><td>She is <b>a</b> doctor</td><td class="fr">Elle est médecin.</td></tr>
<tr><td>He is <b>a</b> teacher</td><td class="fr">Il est professeur.</td></tr>
</table>
<p>Useful jobs:</p>
<table>
<tr><td class="fr">infirmier / infirmière</td><td>nurse (m / f)</td></tr>
<tr><td class="fr">médecin</td><td>doctor</td></tr>
<tr><td class="fr">anesthésiste</td><td>anesthetist</td></tr>
<tr><td class="fr">professeur</td><td>teacher</td></tr>
<tr><td class="fr">étudiant / étudiante</td><td>student</td></tr>
<tr><td class="fr">ingénieur</td><td>engineer</td></tr>
<tr><td class="fr">chef d'entreprise</td><td>business owner</td></tr>
</table>

<h3>Where you live</h3>
<p><span class="fr">J'habite à Chicago.</span> <span class="say">zha-BEET a shee-ka-GO</span> — I live in Chicago.</p>
<ul>
<li><b>à</b> + a city: <span class="fr">à Paris, à Chicago, à Lyon</span></li>
<li><b>en</b> + a feminine country: <span class="fr">en France, en Espagne, en Italie</span></li>
<li><b>aux</b> + États-Unis: <span class="fr">aux États-Unis</span> <span class="say">oh zay-ta-ZÜ-nee</span></li>
</ul>
<p>And where you are from: <span class="fr">Je viens des États-Unis.</span> <span class="say">zhuh vee-AN day zay-ta-ZÜ-nee</span></p>

<h3>The full introduction — memorize this shape</h3>
<div class="box green"><b>Your 30-second self-introduction</b>
<span class="fr">Bonjour ! Je m'appelle Oliver. Je suis américain. J'habite à Chicago. Je suis chef d'entreprise. Enchanté !</span>
<br><br>Hello! My name is Oliver. I'm American. I live in Chicago. I'm a business owner. Nice to meet you!</div>
<p>That is five sentences and it covers 90% of what anyone asks a stranger. This is the Week 1 goal, and you now have it.</p>

<h3>Out loud — five minutes</h3>
<p><b>Drill A.</b> Say the full introduction above five times. By round three, stop looking.</p>
<p><b>Drill B — swap the subject.</b> Say each of these out loud:<br>
<span class="fr">Je suis américain. Tu es américain. Il est américain. Elle est américaine. Vous êtes américain.</span></p>
<p><b>Drill C — tu or vous?</b> Say the right greeting out loud for each: your brother · a waiter · a taxi driver · your best friend · a group of coworkers · a nurse you just met.</p>
`,
homework:[
 {t:"The 30-second intro", d:"Say your full self-introduction out loud ten times today. Not five — ten. Spread them out. By tonight it should come out without you assembling it. This is the Week 1 checkpoint task, so you are practising the actual test."},
 {t:"Record and compare", d:"Record your introduction on your phone. Listen back specifically for: is the N silent in américain? Is your R throaty? Does j'habite start with a ZH and no H? Fix one thing and re-record."},
 {t:"Introduce three other people", d:"Out loud, introduce three people you know using il/elle: Il s'appelle Josh. Il est américain. Il habite à Chicago. Then a woman, remembering elle est américaine with the N woken up."},
 {t:"Tu or vous drill", d:"Write down ten people in your life and mark each tu or vous. Anyone you'd call by their first name without thinking: tu. Everyone else: vous. Check your instinct against the rule."}
],
quiz:[
 {t:"mc", q:"You are speaking to a waiter you have never met. Which pronoun?", a:["vous","tu","on","il"], c:0, why:"Stranger plus service situation equals <b>vous</b>, always. Tu to a waiter is genuinely rude in France."},
 {t:"mc", q:"Which is correct for <b>I am a nurse</b>?", a:["Je suis infirmier","Je suis un infirmier","J'ai infirmier","Je suis une infirmier"], c:0, why:"French drops the article before a job. <b>Je suis infirmier.</b> Adding 'un' is the classic English-speaker error."},
 {t:"mc", q:"A woman says she is French. Which is right?", a:["Je suis française","Je suis français","Je suis françaises","Je suis un français"], c:0, why:"The <b>-e</b> makes it feminine and wakes up the S as a Z sound: <b>frahn-SEZ</b>. Without the E, the S is silent: frahn-SEH."},
 {t:"mc", q:"<b>Je m'appelle</b> literally means…", a:["I call myself","My name is","I am called by","They call me"], c:0, why:"Literally 'I call myself'. French says it reflexively, which is why the <b>m'</b> is in there."},
 {t:"mc", q:"How do you say <b>I live in Chicago</b>?", a:["J'habite à Chicago","Je habite en Chicago","J'habite en Chicago","Je suis à Chicago"], c:0, why:"<b>à</b> for cities, <b>en</b> for feminine countries. And <b>je</b> shrinks to <b>j'</b> before the vowel sound — remember H is silent, so habite starts with a vowel."},
 {t:"mc", q:"Which pronoun do French people actually use most for <b>we</b> in everyday speech?", a:["on","nous","vous","ils"], c:0, why:"<b>on</b> is what you'll hear constantly: On va au marché. <b>nous</b> is correct but sounds slightly formal in casual speech."},
 {t:"mc", q:"<b>Vous</b> can mean…", a:["one person politely, OR any group of people","only one person politely","only a group","the same as tu"], c:0, why:"It does double duty. Even with your closest friends, once there are two of them you switch to vous."},
 {t:"mc", q:"Why do <b>tu es</b> and <b>il est</b> sound nearly identical?", a:["The verb endings are silent, so the pronoun carries the meaning","They are actually pronounced very differently","It is a regional accent thing","Tu es is a contraction of il est"], c:0, why:"tü EH and eel EH. This is a running theme — French verb endings often vanish in speech and the pronoun does the work."},
 {t:"type", q:"Write the French for <b>My name is Oliver.</b> (the 'I call myself' version)", ans:["je m'appelle oliver","je mappelle oliver"], why:"<b>Je m'appelle Oliver.</b> Note the apostrophe — me + appelle collapses to m'appelle."},
 {t:"type", q:"Write the French for <b>Nice to meet you.</b> (one word)", ans:["enchante","enchanté","enchantee","enchantée"], why:"<b>Enchanté</b> — literally 'enchanted'. A woman writes <b>enchantée</b>, though it sounds identical."},
 {t:"type", q:"Write the French for <b>She is American.</b>", ans:["elle est americaine","elle est américaine"], why:"<b>Elle est américaine.</b> The feminine <b>-e</b> wakes up the N: a-may-ree-KEN, not the nasal a-may-ree-KAN."},
 {t:"listen", play:"Je m'appelle Oliver. Je suis américain.", q:"Listen, then choose what you heard.", a:["My name is Oliver. I'm American.","I'm called Oliver. I live in America.","Hello Oliver, are you American?","Oliver is American, I think."], c:0, why:"<b>Je m'appelle Oliver. Je suis américain.</b> The two opening lines of your introduction."},
 {t:"listen", play:"Comment vous appelez-vous ?", q:"Listen. What is being asked, and how?", a:["What is your name? — formally","What is your name? — casually","How are you? — formally","Where do you live?"], c:0, why:"<b>Comment vous appelez-vous ?</b> The vous form. The casual version is Comment tu t'appelles ?"}
]
};

FR_EXTRA_VOCAB.push(
["je suis","zhuh SWEE","I am","verbs","Je suis américain.","I am American.","",3],
["tu es","tü EH","you are (friend)","verbs","Tu es français ?","Are you French?","",3],
["il est / elle est","eel EH / ell EH","he is / she is","verbs","Elle est infirmière.","She is a nurse.","",3],
["vous êtes","voo ZET","you are (polite)","verbs","Vous êtes médecin ?","Are you a doctor?","liaison: the S sounds like Z",3],
["on","ohn","we (casual)","people","On va au marché.","We're going to the market.","what French people really say for 'we'",3],
["américain / américaine","a-may-ree-KAN / -KEN","American (m / f)","people","Je suis américain.","I am American.","the -e wakes up the N",3],
["français / française","frahn-SEH / frahn-SEZ","French (m / f)","people","Elle est française.","She is French.","lowercase as an adjective",3],
["J'habite à…","zha-BEET a","I live in…","home","J'habite à Chicago.","I live in Chicago.","H is silent, so je becomes j'",3],
["Comment tu t'appelles ?","ko-mahn tü ta-PELL","What's your name? (friend)","greet","Salut ! Comment tu t'appelles ?","Hi! What's your name?","",3],
["infirmier / infirmière","an-feer-mee-AY / -EHR","nurse (m / f)","work","Je suis infirmier.","I am a nurse.","no 'un' before a job!",3],
["étudiant / étudiante","ay-tü-dee-AHN / -AHNT","student (m / f)","work","Elle est étudiante.","She is a student.","",3],
["chef d'entreprise","shef dahn-truh-PREEZ","business owner","work","Je suis chef d'entreprise.","I own a business.","",3]
);

/* ------------------------------------------------------------------ DAY 4 */
FR_LESSONS[4] = {
title:"Numbers 0 to 20, and how old you are",
mins:20,
goal:"Count to 20, give your age and phone number, and dodge the two pronunciation traps in French numbers.",
body:`
<h3>Warm-up</h3>
<p>Your introduction, out loud, without looking: name, nationality, city, job. Go.</p>

<h3>0 to 10</h3>
<table>
<tr><th>#</th><th>French</th><th>Say it</th><th>Hook</th></tr>
<tr><td>0</td><td class="fr">zéro</td><td class="say">zay-ROH</td><td>free one</td></tr>
<tr><td>1</td><td class="fr">un</td><td class="say">an</td><td>nasal, no N sound</td></tr>
<tr><td>2</td><td class="fr">deux</td><td class="say">duh</td><td>"duh" with rounded lips</td></tr>
<tr><td>3</td><td class="fr">trois</td><td class="say">trwah</td><td>oi = "wah"</td></tr>
<tr><td>4</td><td class="fr">quatre</td><td class="say">KA-truh</td><td>qu = "k", never "kw"</td></tr>
<tr><td>5</td><td class="fr">cinq</td><td class="say">sank</td><td>the Q is said</td></tr>
<tr><td>6</td><td class="fr">six</td><td class="say">seess</td><td>see the trap below</td></tr>
<tr><td>7</td><td class="fr">sept</td><td class="say">set</td><td>the P is silent</td></tr>
<tr><td>8</td><td class="fr">huit</td><td class="say">weet</td><td>starts like "we"</td></tr>
<tr><td>9</td><td class="fr">neuf</td><td class="say">nuhf</td><td>CaReFuL — the F is said</td></tr>
<tr><td>10</td><td class="fr">dix</td><td class="say">deess</td><td>see the trap below</td></tr>
</table>

<h3>11 to 20</h3>
<p>Eleven through sixteen are their own words. Seventeen through nineteen are just 10 + the number, which is a nice break.</p>
<table>
<tr><td>11 <span class="fr">onze</span> <span class="say">ohnz</span></td><td>12 <span class="fr">douze</span> <span class="say">dooz</span></td><td>13 <span class="fr">treize</span> <span class="say">trez</span></td></tr>
<tr><td>14 <span class="fr">quatorze</span> <span class="say">ka-TORZ</span></td><td>15 <span class="fr">quinze</span> <span class="say">kanz</span></td><td>16 <span class="fr">seize</span> <span class="say">sez</span></td></tr>
<tr><td>17 <span class="fr">dix-sept</span> <span class="say">dee-SET</span></td><td>18 <span class="fr">dix-huit</span> <span class="say">dee-ZWEET</span></td><td>19 <span class="fr">dix-neuf</span> <span class="say">deez-NUHF</span></td></tr>
<tr><td>20 <span class="fr">vingt</span> <span class="say">van</span></td><td colspan="2" class="muted">G and T both silent — it is just a nasal "van"</td></tr>
</table>

<h3>Trap 1 — six and dix change shape</h3>
<div class="box red"><b>These two numbers are pronounced three different ways</b>depending on what comes after them. Nobody tells beginners this and it causes real confusion.</div>
<table>
<tr><th>Situation</th><th>six</th><th>dix</th><th>Example</th></tr>
<tr><td>Alone / at the end</td><td class="say">seess</td><td class="say">deess</td><td class="fr">J'en veux six. <span class="say">…seess</span></td></tr>
<tr><td>Before a consonant</td><td class="say">see</td><td class="say">dee</td><td class="fr">six personnes <span class="say">see pehr-SON</span></td></tr>
<tr><td>Before a vowel</td><td class="say">seez</td><td class="say">deez</td><td class="fr">six euros <span class="say">seez uh-ROH</span></td></tr>
</table>
<p>The same thing happens to <span class="fr">neuf</span> in two fixed phrases: <span class="fr">neuf ans</span> is <span class="say">nuh VAHN</span> and <span class="fr">neuf heures</span> is <span class="say">nuh VUHR</span> — the F turns into a V. Only in those two.</p>

<h3>Trap 2 — un becomes une</h3>
<p><span class="fr">un</span> means both "one" and "a". Before a feminine noun it becomes <span class="fr">une</span> <span class="say">ün</span> — the whistle U from Day 1.</p>
<ul>
<li><span class="fr">un café</span> — one coffee / a coffee</li>
<li><span class="fr">une bière</span> — one beer / a beer</li>
</ul>
<p>You do not know yet which nouns are feminine — that is tomorrow. For now just notice the two shapes exist.</p>

<h3>Your age — the avoir trap</h3>
<div class="box red"><b>In French you do not "be" 40 — you "have" 40 years</b><span class="fr">J'ai quarante ans.</span> <span class="say">zhay ka-RAHNT ahn</span> — I am 40.<br><br>Saying <span class="fr">Je suis 40</span> is a classic beginner error and sounds genuinely strange, like saying "I am 40 what?"</div>
<table>
<tr><td class="fr">J'ai … ans.</td><td class="say">zhay … ahn</td><td>I am … years old</td></tr>
<tr><td class="fr">Tu as quel âge ?</td><td class="say">tü a kell AHZH</td><td>How old are you? (friend)</td></tr>
<tr><td class="fr">Vous avez quel âge ?</td><td class="say">voo za-vay kell AHZH</td><td>How old are you? (formal)</td></tr>
<tr><td class="fr">Il a douze ans.</td><td class="say">eel a DOOZ ahn</td><td>He is twelve.</td></tr>
</table>
<p>Notice the liaison: <span class="fr">deux ans</span> is <span class="say">duh ZAHN</span>, <span class="fr">trois ans</span> is <span class="say">trwah ZAHN</span>. The silent final consonant wakes up before "ans".</p>

<h3>Phone numbers — said in pairs</h3>
<p>A French phone number is ten digits, spoken as <b>five two-digit numbers</b>, never digit by digit.</p>
<p><b>06 12 34 56 78</b> is said: <span class="fr">zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit</span></p>
<p>You do not have the numbers above 20 yet, so for now just know the shape — when someone rattles off a number, they are giving you pairs, not digits. That alone stops the panic.</p>

<h3>Counting things — the phrase you will use daily</h3>
<p><span class="fr">Il y a</span> <span class="say">eel ee A</span>, said fast as <span class="say">ya</span> — "there is" or "there are". One phrase covers both.</p>
<ul>
<li><span class="fr">Il y a deux personnes.</span> — There are two people.</li>
<li><span class="fr">Il y a un problème.</span> — There's a problem.</li>
<li><span class="fr">Il y a un métro ici ?</span> — Is there a metro here?</li>
</ul>
<p>And to ask how many: <span class="fr">Combien ?</span> <span class="say">kohn-bee-AN</span></p>

<h3>Out loud — five minutes</h3>
<p><b>Drill A.</b> Count 0 to 20 out loud three times. Then <b>backwards</b> from 20 to 0 once. Backwards is where you find out which ones you actually know.</p>
<p><b>Drill B — the six/dix trap.</b> Say each pair:<br>
<span class="fr">six … six personnes … six euros</span> then <span class="fr">dix … dix personnes … dix euros</span></p>
<p><b>Drill C — ages.</b> Say the real ages of five people you know: <span class="fr">J'ai … ans. Il a … ans. Elle a … ans.</span></p>
<p><b>Drill D.</b> Count the objects on your desk out loud in French. Actually do it.</p>
`,
homework:[
 {t:"Count everything", d:"For the rest of today, count small things in French out loud — stairs, cars at a light, items in your cart, reps at the gym. Twenty is enough for almost anything. Repetition in the wild beats repetition at a desk."},
 {t:"Backwards from 20", d:"Say 20 down to 0 three times. Then do the evens only (20, 18, 16...), then the odds. If you stumble on the same number twice, star it in the Vocabulary tab."},
 {t:"Five ages", d:"Out loud, state the ages of five real people using J'ai / Il a / Elle a + ans. Listen for the liaison: deux ans is duh ZAHN, not duh AHN."},
 {t:"The six/dix drill", d:"Say these six phrases out loud, getting the three shapes right: six, six cafés, six euros, dix, dix personnes, dix ans. This one trap causes more misunderstandings than any other beginner number issue."}
],
quiz:[
 {t:"mc", q:"How do you say <b>I am 40 years old</b> in French?", a:["J'ai quarante ans","Je suis quarante","Je suis quarante ans","J'ai quarante"], c:0, why:"Age uses <b>avoir</b> — you <i>have</i> 40 years. And <b>ans</b> is mandatory; dropping it leaves the sentence unfinished."},
 {t:"mc", q:"How is <b>vingt</b> (20) pronounced?", a:["van — G and T both silent","vingt, with the T said","van-guh","veen"], c:0, why:"Both final letters are silent. It is just the nasal 'van'."},
 {t:"mc", q:"<b>six euros</b> is pronounced…", a:["seez uh-ROH","seess uh-ROH","see uh-ROH","siks uh-ROH"], c:0, why:"Before a vowel, the X of six becomes a Z sound. Alone it is 'seess', before a consonant it is 'see'."},
 {t:"mc", q:"Which number breaks the silent-ending rule because of CaReFuL?", a:["neuf — the F is pronounced","deux — the X is pronounced","vingt — the T is pronounced","trois — the S is pronounced"], c:0, why:"C, R, F, L usually survive at the end of a word. <b>neuf</b> = nuhf."},
 {t:"mc", q:"A French person gives you their phone number. How is it spoken?", a:["As five two-digit numbers","Digit by digit","As three groups of three then one","Backwards, in pairs"], c:0, why:"Always in pairs. 06 12 34 56 78 is read as zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit."},
 {t:"mc", q:"<b>Il y a</b> means…", a:["There is / there are","He has","It goes","There was"], c:0, why:"One phrase covers both singular and plural. Said fast it collapses to something like 'ya'."},
 {t:"mc", q:"Why is <b>trois ans</b> pronounced 'trwah ZAHN'?", a:["Liaison — the silent S wakes up as a Z before the vowel","The S in trois is always pronounced","ans starts with a Z sound","It is an irregular exception"], c:0, why:"Same Day 2 rule at work. Silent final consonant plus following vowel equals liaison."},
 {t:"mc", q:"Which is the correct question for <b>How old are you?</b> to a friend?", a:["Tu as quel âge ?","Tu es quel âge ?","Quel âge tu es ?","Tu as combien ans ?"], c:0, why:"Age uses avoir, so it must be <b>tu as</b>. Literally 'you have what age'."},
 {t:"type", q:"Write the French number <b>8</b>.", ans:["huit"], why:"<b>huit</b> — said 'weet'. The H is silent as always, so it starts with a 'w' glide."},
 {t:"type", q:"Write the French number <b>15</b>.", ans:["quinze"], why:"<b>quinze</b> — 'kanz'. Eleven through sixteen are all their own words; 17-19 switch to dix-sept, dix-huit, dix-neuf."},
 {t:"type", q:"Write the French for <b>There is a problem.</b>", ans:["il y a un probleme","il y a un problème"], why:"<b>Il y a un problème.</b> This exact sentence will be useful more often than you would like."},
 {t:"listen", play:"J'ai quarante ans.", q:"Listen, then choose what you heard.", a:["I am forty years old.","I have forty euros.","There are forty people.","I am forty minutes away."], c:0, why:"<b>J'ai quarante ans.</b> The 'ans' is what turns it from a quantity into an age."},
 {t:"listen", play:"un, deux, trois, quatre, cinq", q:"Listen. Which numbers did you hear?", a:["1, 2, 3, 4, 5","1, 2, 3, 4, 6","2, 3, 4, 5, 6","1, 3, 5, 7, 9"], c:0, why:"<b>un, deux, trois, quatre, cinq.</b> Note cinq keeps its Q sound: 'sank'."}
]
};

FR_EXTRA_VOCAB.push(
["J'ai … ans","zhay … ahn","I am … years old","time","J'ai quarante ans.","I'm forty.","French 'has' years, not 'is'",4],
["Tu as quel âge ?","tü a kell AHZH","How old are you?","time","Tu as quel âge ?","How old are you?","uses avoir",4],
["onze, douze, treize","ohnz, dooz, trez","eleven, twelve, thirteen","time","Il a treize ans.","He is thirteen.","",4],
["quatorze, quinze, seize","ka-TORZ, kanz, sez","fourteen, fifteen, sixteen","time","Quinze euros.","Fifteen euros.","",4],
["vingt","van","twenty","time","J'ai vingt ans.","I'm twenty.","G and T silent",4],
["Combien ?","kohn-bee-AN","How many? / How much?","shop","Combien de personnes ?","How many people?","",4]
);

/* ------------------------------------------------------------------ DAY 5 */
FR_LESSONS[5] = {
title:"Le, la, un, une — why every object has a gender",
mins:20,
goal:"Use the right article in front of any noun, and start every new word the way French people store it.",
body:`
<h3>Warm-up</h3>
<p>Out loud: count 0 to 10. Then your introduction. Then <span class="fr">J'ai quarante ans.</span></p>

<h3>The situation, stated plainly</h3>
<p>Every French noun is either masculine or feminine. A table is feminine. A book is masculine. A chair is feminine, a sofa is masculine. There is <b>no logic</b> and no shortcut around it.</p>
<p>English has nothing like this — the closest thing is calling a ship "she". Every other language you might learn next (Spanish, Portuguese, German) does the same thing, so learning to cope now pays off four times over.</p>
<div class="box green"><b>The only rule that actually matters</b>Never learn a noun on its own. Learn <span class="fr">le pain</span>, not "pain". Learn <span class="fr">la table</span>, not "table". <b>The article is part of the word.</b><br><br>If you learn nouns bare, you will spend years guessing. If you learn them with le or la attached, you will simply know.</div>

<h3>The four sets of articles</h3>
<table>
<tr><th></th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><th>the</th><td class="fr">le pain</td><td class="fr">la table</td><td class="fr">les amis</td></tr>
<tr><th>a / an</th><td class="fr">un café</td><td class="fr">une bière</td><td class="fr">des cafés</td></tr>
<tr><th>before a vowel</th><td colspan="2" class="fr">l'homme, l'eau, l'ami</td><td class="muted">le and la both shrink to l'</td></tr>
</table>
<p>Say them and hear the difference clearly:</p>
<ul>
<li><span class="fr">le</span> <span class="say">luh</span> vs <span class="fr">la</span> <span class="say">la</span> vs <span class="fr">les</span> <span class="say">lay</span></li>
<li><span class="fr">un</span> <span class="say">an</span> (nasal) vs <span class="fr">une</span> <span class="say">ün</span> (whistle U)</li>
</ul>
<p><b>Remember Day 2:</b> the plural S is silent. <span class="fr">les amis</span> is <span class="say">lay za-MEE</span> — you hear the plural in <b>les</b> and in the liaison Z, never in the S itself.</p>

<h3>Patterns that predict gender — about 80% reliable</h3>
<p>You cannot deduce gender, but you can bet well. These endings are worth memorizing:</p>
<table>
<tr><th>Usually FEMININE</th><th>Examples</th></tr>
<tr><td class="fr">-tion, -sion</td><td class="fr">la nation, la question, la télévision</td></tr>
<tr><td class="fr">-té, -ée</td><td class="fr">la liberté, la journée, la soirée</td></tr>
<tr><td class="fr">-ie, -ure</td><td class="fr">la boulangerie, la voiture, la culture</td></tr>
<tr><td class="fr">-ette, -ance, -ence</td><td class="fr">la baguette, la chance, la différence</td></tr>
</table>
<table>
<tr><th>Usually MASCULINE</th><th>Examples</th></tr>
<tr><td class="fr">-age</td><td class="fr">le fromage, le voyage, le message</td></tr>
<tr><td class="fr">-ment</td><td class="fr">le moment, le gouvernement</td></tr>
<tr><td class="fr">-eau, -ou</td><td class="fr">le bureau, le gâteau, le bijou</td></tr>
<tr><td class="fr">-isme, -oir, -er</td><td class="fr">le tourisme, le soir, le dîner</td></tr>
<tr><td class="fr">-in, -on, -an</td><td class="fr">le vin, le poisson, le plan</td></tr>
</table>
<div class="box red"><b>The exceptions that will catch you</b><span class="fr">la page</span>, <span class="fr">la plage</span> and <span class="fr">l'image</span> are feminine despite -age. <span class="fr">l'eau</span> (water) is feminine despite -eau. <span class="fr">le musée</span> and <span class="fr">le lycée</span> are masculine despite -ée. Learn these four as oddities now and you dodge the most common traps.</div>

<h3>C'est — the sentence that does everything</h3>
<p><span class="fr">C'est</span> <span class="say">say</span> means "it is" or "this is" or "that is". It is the single most useful two-syllable phrase for a beginner, because it lets you name and judge anything.</p>
<table>
<tr><td class="fr">C'est un café.</td><td>It's a coffee.</td></tr>
<tr><td class="fr">C'est une table.</td><td>It's a table.</td></tr>
<tr><td class="fr">C'est bon.</td><td>It's good. (taste, feel)</td></tr>
<tr><td class="fr">C'est bien.</td><td>It's good. (quality, idea)</td></tr>
<tr><td class="fr">C'est combien ?</td><td>How much is it?</td></tr>
<tr><td class="fr">C'est mon ami Josh.</td><td>This is my friend Josh.</td></tr>
<tr><td class="fr">Ce n'est pas bon.</td><td>It's not good.</td></tr>
</table>
<p>And to ask what something is: <span class="fr">Qu'est-ce que c'est ?</span> <span class="say">kess-kuh SAY</span> — "What is that?"</p>
<div class="box blue"><b>Do not analyze that one</b><span class="fr">Qu'est-ce que c'est ?</span> is four words doing something grammatically fiddly. Learn it as one chunk, like a single word. You will use it constantly and you never need to take it apart.</div>

<h3>Your first possessives</h3>
<p>Here is the part that surprises people: <b>my</b> also changes with the gender of the thing owned, not the owner.</p>
<table>
<tr><th></th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><th>my</th><td class="fr">mon café</td><td class="fr">ma bière</td><td class="fr">mes amis</td></tr>
<tr><th>your (friend)</th><td class="fr">ton café</td><td class="fr">ta bière</td><td class="fr">tes amis</td></tr>
<tr><th>your (polite)</th><td class="fr">votre café</td><td class="fr">votre bière</td><td class="fr">vos amis</td></tr>
</table>
<p>So a man and a woman both say <span class="fr">ma voiture</span> for "my car", because <i>voiture</i> is feminine. The owner's gender is irrelevant.</p>

<h3>Out loud — five minutes</h3>
<p><b>Drill A.</b> Say each with its article, five times, so they fuse into one word:<br>
<span class="fr">le pain — la table — le café — la bière — l'eau — les amis</span></p>
<p><b>Drill B — predict the gender.</b> Say le or la out loud before each, using the ending patterns, then check below:<br>
<span class="fr">___ fromage · ___ nation · ___ voiture · ___ bureau · ___ boulangerie · ___ moment</span><br>
<span class="muted">Answers: le fromage, la nation, la voiture, le bureau, la boulangerie, le moment</span></p>
<p><b>Drill C — C'est.</b> Point at six things around you and say <span class="fr">C'est un…</span> or <span class="fr">C'est une…</span> out loud. Guess when you don't know; guessing is how the pattern sets.</p>
`,
homework:[
 {t:"Relabel your world", d:"Walk around your home and name ten objects out loud with the article attached: le lit, la porte, la table, le téléphone. Say the article and noun as one fused word, never the noun alone. This is the single habit that decides whether gender becomes easy or a lifelong problem for you."},
 {t:"Ending patterns", d:"Write le or la for these from the ending rules, then check in the Study Guides tab: message, question, voyage, liberté, poisson, baguette, gouvernement, culture. Getting six of eight means the patterns are landing."},
 {t:"C'est practice", d:"Say fifteen C'est sentences out loud about things in the room. Mix in C'est bon, C'est bien, and Ce n'est pas bon. Say Qu'est-ce que c'est ? five times until it comes out as one blurted chunk."},
 {t:"Fix the four exceptions", d:"Say these four out loud ten times each, because they will trip you otherwise: la page, la plage, l'eau (feminine), le musée (masculine)."}
],
quiz:[
 {t:"mc", q:"What is the one habit that makes French gender manageable?", a:["Always learn a noun with its article attached: le pain, not pain","Memorize a list of all feminine nouns","Assume masculine and correct later","Use les for everything"], c:0, why:"The article is part of the word. Learn them fused and you simply know; learn nouns bare and you guess forever."},
 {t:"mc", q:"Which is correct?", a:["une bière","un bière","la bière is masculine","des bière"], c:0, why:"<b>bière</b> is feminine, so <b>une bière</b> and <b>la bière</b>. Listen for the whistle U in 'une' versus the nasal in 'un'."},
 {t:"mc", q:"Based on its ending, <b>la nation</b> is feminine because…", a:["words ending in -tion are usually feminine","words ending in -on are usually feminine","it is borrowed from English","all abstract nouns are feminine"], c:0, why:"-tion and -sion are reliably feminine. Careful though: -on on its own (le poisson, le vin) usually goes masculine."},
 {t:"mc", q:"Which of these is a FEMININE exception to its ending pattern?", a:["l'eau","le fromage","le bureau","le moment"], c:0, why:"<b>l'eau</b> (water) is feminine despite ending in -eau, which is normally masculine. The others all follow their pattern."},
 {t:"mc", q:"A man is talking about his car. He says…", a:["ma voiture","mon voiture","mon voitures","le mon voiture"], c:0, why:"Possessives agree with the <b>thing owned</b>, not the owner. <i>voiture</i> is feminine, so every speaker says <b>ma voiture</b>."},
 {t:"mc", q:"What is the difference between <b>C'est bon</b> and <b>C'est bien</b>?", a:["bon is for taste and physical feel; bien is for quality and ideas","bon is masculine, bien is feminine","bon is formal, bien is casual","There is no difference"], c:0, why:"Food is <b>bon</b>. A film, a plan or a piece of work is <b>bien</b>. Mixing them is one of the most common learner tells."},
 {t:"mc", q:"How do you hear that <b>les amis</b> is plural, given the S is silent?", a:["From les, plus the liaison Z sound: lay za-MEE","The S is actually pronounced","From the stress pattern","You cannot — context only"], c:0, why:"The article carries the plural, and the liaison Z gives you a second clue. The written S itself is silent."},
 {t:"mc", q:"<b>Qu'est-ce que c'est ?</b> means…", a:["What is that?","Who is that?","Where is it?","How much is it?"], c:0, why:"Learn it as one chunk — <span class='say'>kess-kuh SAY</span>. Taking it apart grammatically is not useful at this stage."},
 {t:"type", q:"Write the French for <b>the bread</b>.", ans:["le pain"], why:"<b>le pain</b> — masculine. And remember the nasal: 'pan', not 'pain' as in English."},
 {t:"type", q:"Write the French for <b>It's a table.</b>", ans:["c'est une table","cest une table"], why:"<b>C'est une table.</b> Table is feminine, so <b>une</b>, with the whistle U."},
 {t:"type", q:"Write the French for <b>How much is it?</b>", ans:["c'est combien","c'est combien ?","cest combien"], why:"<b>C'est combien ?</b> The single most useful shopping question you will learn all month."},
 {t:"listen", play:"C'est une bière, s'il vous plaît.", q:"Listen, then choose what you heard.", a:["It's a beer, please.","It's a coffee, please.","How much is the beer?","I would like a beer."], c:0, why:"<b>C'est une bière, s'il vous plaît.</b> Note the feminine 'une' — you can hear the whistle U."},
 {t:"listen", play:"Qu'est-ce que c'est ?", q:"Listen. What is being asked?", a:["What is that?","Who is that?","How are you?","How much is it?"], c:0, why:"<b>Qu'est-ce que c'est ?</b> It runs together as roughly 'kess-kuh SAY' — which is why you learn it as a chunk."}
]
};

FR_EXTRA_VOCAB.push(
["C'est…","say","It is / This is","glue","C'est mon ami Josh.","This is my friend Josh.","the most useful phrase for a beginner",5],
["C'est bon / C'est bien","say BOHN / say bee-AN","It's good (taste / quality)","glue","C'est bon !","It's delicious!","bon = food, bien = ideas",5],
["Qu'est-ce que c'est ?","kess-kuh SAY","What is that?","glue","Qu'est-ce que c'est ?","What's that?","learn as one chunk",5],
["mon / ma / mes","mohn / ma / may","my (m / f / pl)","glue","C'est ma voiture.","That's my car.","agrees with the thing, not the owner",5],
["la table","la TAH-bluh","table","home","C'est une table.","It's a table.","feminine",5],
["l'eau","LOH","water","food","Une carafe d'eau.","A jug of tap water.","feminine, despite -eau",5]
);

/* ------------------------------------------------------------------ DAY 6 */
FR_LESSONS[6] = {
title:"Conversation — a first meeting, start to finish",
mins:20,
goal:"Run a complete first-meeting conversation without stopping. No new grammar today, only assembly.",
body:`
<h3>What today is</h3>
<p>No new rules. Today you take everything from Days 1 to 5 and turn it into something you can actually perform. Read every line out loud — today more than any other day, silent reading is wasted time.</p>

<h3>The dialogue</h3>
<p>You have just arrived at a small hotel in Lyon. The woman at the desk is Madame Girard.</p>
<table>
<tr><td class="fr">— Bonjour, monsieur !</td><td>— Hello, sir!</td></tr>
<tr><td class="fr">— Bonjour, madame. Comment allez-vous ?</td><td>— Hello, ma'am. How are you?</td></tr>
<tr><td class="fr">— Très bien, merci. Et vous ?</td><td>— Very well, thank you. And you?</td></tr>
<tr><td class="fr">— Ça va bien, merci.</td><td>— I'm good, thanks.</td></tr>
<tr><td class="fr">— Comment vous appelez-vous ?</td><td>— What's your name?</td></tr>
<tr><td class="fr">— Je m'appelle Oliver Mucka.</td><td>— My name is Oliver Mucka.</td></tr>
<tr><td class="fr">— Enchantée. Vous êtes américain ?</td><td>— Nice to meet you. Are you American?</td></tr>
<tr><td class="fr">— Oui, je suis américain. J'habite à Chicago.</td><td>— Yes, I'm American. I live in Chicago.</td></tr>
<tr><td class="fr">— Et qu'est-ce que vous faites dans la vie ?</td><td>— And what do you do for a living?</td></tr>
<tr><td class="fr">— Je suis chef d'entreprise.</td><td>— I own a business.</td></tr>
<tr><td class="fr">— Très bien. Voici la clé, chambre huit.</td><td>— Very good. Here's the key, room eight.</td></tr>
<tr><td class="fr">— Merci beaucoup, madame.</td><td>— Thank you very much, ma'am.</td></tr>
<tr><td class="fr">— Je vous en prie. Bonne journée !</td><td>— You're welcome. Have a good day!</td></tr>
<tr><td class="fr">— Au revoir !</td><td>— Goodbye!</td></tr>
</table>

<h3>The four new pieces</h3>
<table>
<tr><td class="fr">monsieur / madame</td><td class="say">muh-SYUH / ma-DAM</td><td>sir / ma'am — used far more than in English. Add them to almost anything.</td></tr>
<tr><td class="fr">Qu'est-ce que vous faites dans la vie ?</td><td class="say">kess-kuh voo fet dahn la VEE</td><td>What do you do for a living? Literally "in life".</td></tr>
<tr><td class="fr">Voici</td><td class="say">vwa-SEE</td><td>Here is / here's. <span class="fr">Voici la clé.</span></td></tr>
<tr><td class="fr">Je vous en prie</td><td class="say">zhuh voo zahn PREE</td><td>You're welcome (polite). The casual version is <span class="fr">de rien</span>.</td></tr>
</table>
<div class="box blue"><b>Monsieur and madame are not optional decoration</b>French adds them constantly where English would not: <span class="fr">Bonjour, madame. Merci, monsieur. Au revoir, madame.</span> Leaving them out makes you sound clipped. Adding them costs nothing and buys a lot of goodwill.</div>

<h3>Notice what is happening in the sound</h3>
<ul>
<li><span class="fr">Comment allez-vous</span> → <span class="say">ko-mahn ta-lay VOO</span> — liaison, the T jumps</li>
<li><span class="fr">Vous êtes américain</span> → <span class="say">voo ZET a-may-ree-KAN</span> — liaison, S becomes Z</li>
<li><span class="fr">Je vous en prie</span> → <span class="say">zhuh voo zahn PREE</span> — liaison again</li>
<li><span class="fr">chambre huit</span> — the H is silent, so it is <span class="say">shahm-bruh WEET</span></li>
</ul>
<p>Every one of those is Day 2's rule paying off. This is why we did silent letters before conversation.</p>

<h3>Your turn — fill the gaps out loud</h3>
<p>Cover the right-hand column. Say the French for each, then check.</p>
<table>
<tr><td>Hello, ma'am. How are you?</td><td class="fr">Bonjour, madame. Comment allez-vous ?</td></tr>
<tr><td>Very well, thank you. And you?</td><td class="fr">Très bien, merci. Et vous ?</td></tr>
<tr><td>My name is Oliver.</td><td class="fr">Je m'appelle Oliver.</td></tr>
<tr><td>I'm American. I live in Chicago.</td><td class="fr">Je suis américain. J'habite à Chicago.</td></tr>
<tr><td>I own a business.</td><td class="fr">Je suis chef d'entreprise.</td></tr>
<tr><td>Nice to meet you.</td><td class="fr">Enchanté.</td></tr>
<tr><td>Thank you very much, ma'am.</td><td class="fr">Merci beaucoup, madame.</td></tr>
<tr><td>Goodbye! Have a good day!</td><td class="fr">Au revoir ! Bonne journée !</td></tr>
</table>

<h3>Three things that keep a real conversation alive</h3>
<p>You will not understand everything. That is fine and permanent. These three phrases are what separate people who keep talking from people who freeze:</p>
<table>
<tr><td class="fr">Pardon ?</td><td class="say">par-DOHN</td><td>Sorry? (asking them to repeat)</td></tr>
<tr><td class="fr">Plus lentement, s'il vous plaît.</td><td class="say">plü lahnt-MAHN</td><td>Slower, please.</td></tr>
<tr><td class="fr">Je ne comprends pas.</td><td class="say">zhuh nuh kohn-PRAHN pa</td><td>I don't understand.</td></tr>
</table>
<div class="box green"><b>Say these with confidence, not apology</b>A confident "Plus lentement, s'il vous plaît" gets you a slower French person. A mumbled apology gets you an English-speaking one, and your practice is over.</div>

<h3>Out loud — eight minutes, the main event</h3>
<p><b>Round 1.</b> Read the whole dialogue aloud, both parts, slowly. Accuracy over speed.</p>
<p><b>Round 2.</b> Read it again at conversational speed. Do not stop to fix mistakes.</p>
<p><b>Round 3.</b> Cover your own lines and improvise them from the English. Stumble through it.</p>
<p><b>Round 4.</b> Change the facts to be true: your real name, your real job, your real city. Perform it once as yourself.</p>
`,
homework:[
 {t:"Perform it four times", d:"Do all four rounds from the lesson, standing up, out loud. Round 4 — the true-facts version — is the one that matters, because it is the version you will actually need."},
 {t:"Record the full dialogue", d:"Record yourself playing both parts. Listen back once for content (did you get the words?) and once for sound (nasal, R, liaison). Note the single worst moment and drill just that line ten times."},
 {t:"Rewrite it as casual", d:"Rewrite the whole dialogue as if it were with a friend instead of a hotel clerk: Salut instead of Bonjour, ça va instead of comment allez-vous, tu instead of vous, de rien instead of je vous en prie. Say the casual version out loud twice."},
 {t:"The three lifelines", d:"Say Pardon ? / Plus lentement, s'il vous plaît / Je ne comprends pas ten times each, in a confident tone, not an apologetic one. These three will save more conversations than any vocabulary you learn this month."}
],
quiz:[
 {t:"mc", q:"In the dialogue, why does the clerk say <b>Enchantée</b> with two Es?", a:["She is female, and the adjective agrees with her","It is a plural","It is a typo","Enchantée is the formal version"], c:0, why:"Adjectives agree with the speaker. A woman writes <b>enchantée</b>, a man writes <b>enchanté</b>. They sound identical."},
 {t:"mc", q:"<b>Je vous en prie</b> means…", a:["You're welcome (polite)","Please (formal)","I beg you","Nice to meet you"], c:0, why:"It is the polite 'you're welcome'. The casual equivalent is <b>de rien</b>, literally 'of nothing'."},
 {t:"mc", q:"Why is <b>Vous êtes américain</b> pronounced 'voo ZET'?", a:["Liaison — the silent S of vous wakes up as a Z before the vowel","êtes begins with a Z sound","The S in vous is always pronounced","It is an irregular form"], c:0, why:"Same rule as les amis and comment allez-vous. Silent final consonant plus a following vowel equals liaison."},
 {t:"mc", q:"How often should you add <b>monsieur</b> or <b>madame</b> compared to English 'sir' or 'ma'am'?", a:["Much more often — it's expected in almost every exchange","About the same","Less often — it sounds old-fashioned","Only in writing"], c:0, why:"French adds them constantly. Bonjour madame, merci monsieur, au revoir madame. Omitting them sounds clipped."},
 {t:"mc", q:"<b>Qu'est-ce que vous faites dans la vie ?</b> asks…", a:["What do you do for a living?","What are you doing right now?","What do you like in life?","How is life going?"], c:0, why:"Literally 'what do you do in life' — it is the standard way to ask someone's occupation."},
 {t:"mc", q:"Which phrase gets a French person to slow down instead of switching to English?", a:["Plus lentement, s'il vous plaît — said confidently","Sorry, my French is bad","Do you speak English?","Saying nothing and nodding"], c:0, why:"Confidence is the variable. A firm request for slower French keeps you in French; an apology signals you want out."},
 {t:"mc", q:"How is <b>chambre huit</b> pronounced?", a:["shahm-bruh WEET — the H is silent","shahm-bruh HOO-eet","shahm-brey hweet","shahmb WEET, with a silent T"], c:0, why:"French H is always silent, so huit starts with a 'w' glide. And the T of huit IS pronounced."},
 {t:"mc", q:"You want to make this dialogue casual, with a friend. Which set is right?", a:["Salut / ça va / tu / de rien","Bonjour / ça va / vous / je vous en prie","Salut / comment allez-vous / tu / merci","Bonsoir / ça va / vous / de rien"], c:0, why:"Casual register moves all four pieces together: greeting, question, pronoun, and the you're-welcome."},
 {t:"type", q:"Write the French for <b>Here is the key.</b>", ans:["voici la cle","voici la clé"], why:"<b>Voici la clé.</b> Voici = here is. Its partner voilà = there is / there you go."},
 {t:"type", q:"Write the French for <b>I don't understand.</b>", ans:["je ne comprends pas","je comprends pas"], why:"<b>Je ne comprends pas.</b> In fast casual speech the 'ne' often drops: je comprends pas. Both accepted here."},
 {t:"type", q:"Write the French for <b>Slower, please.</b>", ans:["plus lentement s'il vous plait","plus lentement, s'il vous plaît","plus lentement sil vous plait","plus lentement, s'il vous plait"], why:"<b>Plus lentement, s'il vous plaît.</b> Say it like a request, not an apology."},
 {t:"listen", play:"Comment vous appelez-vous ?", q:"Listen, then choose the best reply.", a:["Je m'appelle Oliver.","Ça va bien, merci.","J'ai quarante ans.","Oui, s'il vous plaît."], c:0, why:"The question is 'what is your name', so the reply is <b>Je m'appelle…</b>"},
 {t:"listen", play:"Vous êtes américain ?", q:"Listen, then choose the best reply.", a:["Oui, je suis américain.","Oui, j'ai quarante ans.","Non, merci beaucoup.","Je m'appelle Oliver."], c:0, why:"It asks whether you are American, so you answer with <b>je suis</b>, matching the verb in the question."},
 {t:"listen", play:"Je vous en prie. Bonne journée !", q:"Listen. What just happened?", a:["They said you're welcome and wished you a good day","They asked you to repeat yourself","They said goodbye and asked your name","They apologised"], c:0, why:"<b>Je vous en prie. Bonne journée !</b> — the standard polite close to any French exchange."}
]
};

FR_EXTRA_VOCAB.push(
["monsieur / madame","muh-SYUH / ma-DAM","sir / ma'am","greet","Bonjour, madame.","Hello, ma'am.","use far more than in English",6],
["Je vous en prie","zhuh voo zahn PREE","You're welcome (polite)","greet","— Merci ! — Je vous en prie.","— Thanks! — You're welcome.","casual version: de rien",6],
["Voici","vwa-SEE","Here is","glue","Voici la clé.","Here's the key.","partner of voilà",6],
["Qu'est-ce que vous faites dans la vie ?","kess-kuh voo fet dahn la VEE","What do you do for a living?","work","Et qu'est-ce que vous faites dans la vie ?","And what do you do for a living?","",6],
["Plus lentement, s'il vous plaît","plü lahnt-MAHN","Slower, please","greet","Pardon ? Plus lentement, s'il vous plaît.","Sorry? Slower, please.","say it confidently",6],
["Pardon ?","par-DOHN","Sorry? (repeat that)","greet","Pardon ? Je n'ai pas compris.","Sorry? I didn't catch that.","",6]
);

/* ------------------------------------------------------------------ DAY 7 */
FR_LESSONS[7] = {
title:"Review + Checkpoint 1",
mins:20,
isCheckpoint:true,
goal:"Prove Week 1 stuck. 25 questions across pronunciation, vocabulary, grammar, listening and production. 75% to pass.",
body:`
<h3>What happened this week</h3>
<p>Six days ago you knew nothing. Right now you can greet anyone appropriately, introduce yourself completely, count, give your age, and hold a short conversation without English. That is a real week.</p>

<h3>The five-minute review — say all of it out loud</h3>

<h3>1. The four sounds</h3>
<table>
<tr><td><b>Nasal</b></td><td>Air through the nose, N never pronounced. Three families: <span class="fr">bon</span> (ohn), <span class="fr">dans</span> (ahn), <span class="fr">vin</span> (an).</td></tr>
<tr><td><b>u</b></td><td>Say "ee", round your lips to whistle. <span class="fr">tu, salut, une</span>. Not the same as <b>ou</b> = "oo".</td></tr>
<tr><td><b>r</b></td><td>Back of the throat, soft gargle. <span class="fr">merci, Paris, au revoir</span>.</td></tr>
<tr><td><b>zh</b></td><td>The S in "measure". <span class="fr">je, bonjour, rouge</span>. And <b>ch</b> = "sh".</td></tr>
</table>

<h3>2. Silent letters</h3>
<ul>
<li>Final consonants are usually silent: <span class="fr">Paris, petit, vous, grand, beaucoup</span></li>
<li><b>CaReFuL</b> — C, R, F, L usually survive: <span class="fr">sac, bonjour, neuf, hôtel</span></li>
<li>Final <b>-e</b> is silent but wakes the consonant before it: <span class="fr">grand → grande</span></li>
<li>Plural <b>-s</b> is silent. <b>H</b> is always silent.</li>
<li><b>Liaison:</b> silent consonant + following vowel = it wakes up and jumps. <span class="fr">vous êtes</span> = voo ZET</li>
</ul>

<h3>3. Greetings and the exchange</h3>
<table>
<tr><td class="fr">Bonjour / Bonsoir / Salut</td><td>Hello / Good evening / Hi (friends only)</td></tr>
<tr><td class="fr">Ça va ? — Ça va bien, merci. Et toi ?</td><td>Casual how-are-you and its bounce-back</td></tr>
<tr><td class="fr">Comment allez-vous ? — Très bien, merci. Et vous ?</td><td>The formal version</td></tr>
<tr><td class="fr">Merci / S'il vous plaît / Pardon / Au revoir / Bonne journée</td><td>The daily toolkit</td></tr>
</table>

<h3>4. Être and introductions</h3>
<p><span class="fr">je suis · tu es · il est · elle est · vous êtes</span></p>
<p>Your introduction: <span class="fr">Bonjour ! Je m'appelle Oliver. Je suis américain. J'habite à Chicago. Je suis chef d'entreprise. Enchanté !</span></p>
<p>Traps: <b>no article before a job</b> (je suis infirmier, not un infirmier). Nationalities are lowercase and take <b>-e</b> for women.</p>

<h3>5. Numbers and age</h3>
<p><span class="fr">un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt</span></p>
<p>Age uses <b>avoir</b>: <span class="fr">J'ai quarante ans.</span> Never <span class="fr">je suis</span>.</p>

<h3>6. Articles and gender</h3>
<p><span class="fr">le / la / l' / les</span> and <span class="fr">un / une / des</span>. Learn every noun with its article attached.</p>
<p>Feminine endings: -tion, -té, -ée, -ie, -ure, -ette. Masculine endings: -age, -ment, -eau, -oir, -in, -on.</p>
<p><span class="fr">C'est…</span> names anything. <span class="fr">Qu'est-ce que c'est ?</span> asks about anything.</p>

<div class="box blue"><b>Before you start the test</b>Say your full introduction out loud once, from memory, without looking at anything. If you cannot, go back and read Day 3 again — the test will not go well and there is no prize for rushing.</div>

<h3>The checkpoint</h3>
<p>25 questions. Pronunciation, vocabulary, grammar, listening and writing. <b>75% (19 correct) passes.</b> Below that, we do a repair day before Week 2 — that rule is the entire reason this course works.</p>
<p>Your score logs automatically to the Progress tab.</p>
`,
homework:[
 {t:"The 30-second test", d:"Record your self-introduction from memory, no notes, no restarts. Play it back. If it is smooth and under 40 seconds, Week 1 is genuinely done. If you froze, that is your repair day."},
 {t:"Write it out", d:"On paper, write the full first-meeting dialogue from Day 6 from memory. Writing catches things speaking hides — especially silent letters and accents."},
 {t:"Teach it to someone", d:"Explain to another person why bonjour has no N sound, and what the CaReFuL rule is. If you can teach it, you own it. If you fumble, reread Days 1 and 2."},
 {t:"Set up Week 2", d:"Tell Claude your checkpoint score and say 'continue my French course'. Week 2 is être and avoir in full — the two verbs everything else is built on."}
],
quiz:[
 {t:"mc", q:"PRONUNCIATION — How is <b>bonjour</b> pronounced?", a:["bohn-ZHOOR, no N sound, throaty R","bon-JOOR with a hard N","BON-jore","bohn-JOO, silent R"], c:0, why:"Nasal on the first syllable, ZH not J, and the R survives because of CaReFuL."},
 {t:"mc", q:"PRONUNCIATION — Which word does NOT use the whistle <b>u</b>?", a:["bonjour","tu","salut","une"], c:0, why:"<b>bonjour</b> has <b>ou</b> = ordinary 'oo'. The other three have the whistle u."},
 {t:"mc", q:"PRONUNCIATION — Which final letter IS pronounced?", a:["the F in neuf","the S in Paris","the T in petit","the P in beaucoup"], c:0, why:"CaReFuL: C, R, F, L survive at the end of a word."},
 {t:"mc", q:"PRONUNCIATION — <b>les amis</b> is said…", a:["lay za-MEE","lay a-MEE","less a-MEESS","lay za-MEESS"], c:0, why:"Liaison gives you the Z; the final S of amis stays silent."},
 {t:"mc", q:"PRONUNCIATION — French <b>ch</b>, as in <i>chat</i>, sounds like…", a:["sh","ch as in church","k","zh as in measure"], c:0, why:"chat = 'sha'. The zh sound comes from j and soft g instead."},
 {t:"mc", q:"VOCABULARY — You are leaving a bakery. What do you say?", a:["Merci, au revoir, bonne journée !","Salut !","Bonjour, madame","Je vous en prie"], c:0, why:"The full exit line. Saying nothing on the way out is as rude as skipping bonjour on the way in."},
 {t:"mc", q:"VOCABULARY — Which is NOT a valid answer to <b>Ça va ?</b>", a:["Comment allez-vous","Pas mal","Comme ci, comme ça","Ça va bien"], c:0, why:"That one is a question, and a formal one at that."},
 {t:"mc", q:"VOCABULARY — <b>Je vous en prie</b> means…", a:["You're welcome","Please","I'm sorry","Nice to meet you"], c:0, why:"Polite 'you're welcome'. The casual version is de rien."},
 {t:"mc", q:"VOCABULARY — What does <b>Voici</b> mean?", a:["Here is","There was","Look out","Thank you"], c:0, why:"Voici la clé — here's the key. Its partner voilà means 'there you go'."},
 {t:"mc", q:"GRAMMAR — Which is correct for <b>I am a nurse</b>?", a:["Je suis infirmier","Je suis un infirmier","J'ai infirmier","Je suis une infirmier"], c:0, why:"No article before a job in French. This is the error English speakers make most."},
 {t:"mc", q:"GRAMMAR — How do you say <b>I am 40 years old</b>?", a:["J'ai quarante ans","Je suis quarante ans","Je suis quarante","J'ai quarante"], c:0, why:"Age uses avoir, and 'ans' is mandatory."},
 {t:"mc", q:"GRAMMAR — A woman says she is American:", a:["Je suis américaine","Je suis américain","Je suis une américaine","J'ai américaine"], c:0, why:"The -e makes it feminine and wakes up the N: a-may-ree-KEN."},
 {t:"mc", q:"GRAMMAR — You are talking to a taxi driver. Which pronoun?", a:["vous","tu","on","il"], c:0, why:"Stranger in a service role. Always vous."},
 {t:"mc", q:"GRAMMAR — Which article goes with <b>bière</b>?", a:["une","un","le","des"], c:0, why:"bière is feminine: une bière, la bière."},
 {t:"mc", q:"GRAMMAR — <b>la nation</b> is feminine because of which ending?", a:["-tion","-on","-ion","-at"], c:0, why:"-tion and -sion are reliably feminine. Bare -on (le poisson, le vin) is usually masculine."},
 {t:"mc", q:"GRAMMAR — A man talks about his car. He says…", a:["ma voiture","mon voiture","mes voiture","le voiture"], c:0, why:"Possessives agree with the thing owned. voiture is feminine, so everyone says ma voiture."},
 {t:"mc", q:"GRAMMAR — What is the difference between <b>C'est bon</b> and <b>C'est bien</b>?", a:["bon = taste or physical feel; bien = quality or ideas","bon is masculine, bien is feminine","No difference","bon is formal"], c:0, why:"Food is bon. A film or a plan is bien."},
 {t:"mc", q:"GRAMMAR — Why do <b>tu es</b> and <b>il est</b> sound almost the same?", a:["The verb endings are silent, so the pronoun carries the meaning","They are regional variants","tu es is a contraction","They do not sound similar"], c:0, why:"tü EH / eel EH. French leans on the pronoun because the endings vanish in speech."},
 {t:"type", q:"WRITE — <b>Thank you very much.</b>", ans:["merci beaucoup"], why:"Merci beaucoup. Final P of beaucoup is silent."},
 {t:"type", q:"WRITE — <b>My name is Oliver.</b> (the 'I call myself' version)", ans:["je m'appelle oliver","je mappelle oliver"], why:"Je m'appelle Oliver."},
 {t:"type", q:"WRITE — <b>I live in Chicago.</b>", ans:["j'habite a chicago","j'habite à chicago","jhabite a chicago"], why:"J'habite à Chicago. H is silent, so je contracts to j'."},
 {t:"type", q:"WRITE — <b>How much is it?</b>", ans:["c'est combien","c'est combien ?","cest combien"], why:"C'est combien ? Your most-used shopping question."},
 {t:"type", q:"WRITE — <b>Slower, please.</b>", ans:["plus lentement s'il vous plait","plus lentement, s'il vous plaît","plus lentement sil vous plait","plus lentement, s'il vous plait"], why:"Plus lentement, s'il vous plaît. Said with confidence, not apology."},
 {t:"listen", play:"Bonjour, madame. Comment allez-vous ?", q:"LISTENING — What did you hear?", a:["Hello ma'am. How are you? (formal)","Hi. How's it going? (casual)","Good evening. What's your name?","Goodbye ma'am. Have a good day."], c:0, why:"The vous form — formal, to someone you don't know."},
 {t:"listen", play:"Je suis américain et j'habite à Chicago.", q:"LISTENING — What did you hear?", a:["I'm American and I live in Chicago.","I'm American and I work in Chicago.","I am from Chicago in America.","My name is American, from Chicago."], c:0, why:"Je suis américain et j'habite à Chicago — two of the five sentences in your introduction."}
]
};
