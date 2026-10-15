/* ============================================================
   HAWAIIAN — ʻŌlelo Hawaiʻi, built for actually living on island.
   Three layers, taught side by side from week one:
     1. Hawaiian words every local uses inside English
     2. Pidgin (Hawaiʻi Creole English) — what you hear on the street
     3. Real Hawaiian sentences — greetings, food, directions, talk story
   Pidgin is marked with class "pg" (not spoken by the TTS voice,
   because it is English-based and the Hawaiian voice would mangle it).
   ============================================================ */

const HAW_CATS = [
 ["kumu","Essentials","🌺"],
 ["local","Local Words","🏝️"],
 ["pidgin","Pidgin","🤙"],
 ["ai","Food (ʻAi)","🍱"],
 ["wahi","Places &amp; Directions","🧭"],
 ["kanaka","People &amp; ʻOhana","👪"],
 ["helu","Numbers","🔢"],
 ["hana","Verbs","⚡"],
];

/* [word, say it, meaning, category, example, English, note, day] */
const HAW_VOCAB = [
// --- kumu (essentials)
["Aloha","ah-LOH-hah","Hello / goodbye / love","kumu","Aloha kakahiaka!","Good morning!","the most important word on the islands — it carries respect, not just 'hi'",2],
["Aloha kakahiaka","ah-LOH-hah kah-kah-hee-AH-kah","Good morning","kumu","Aloha kakahiaka, e Kawika.","Good morning, Kawika.","",2],
["Aloha ʻauinalā","ah-LOH-hah ow-ee-nah-LAH","Good afternoon","kumu","Aloha ʻauinalā!","Good afternoon!","",2],
["Aloha ahiahi","ah-LOH-hah ah-hee-AH-hee","Good evening","kumu","Aloha ahiahi kākou.","Good evening, everyone.","",2],
["Mahalo","mah-HAH-loh","Thank you","kumu","Mahalo nui loa!","Thank you very much!","used constantly in everyday English",2],
["Mahalo nui loa","mah-HAH-loh NOO-ee LOH-ah","Thank you very much","kumu","Mahalo nui loa no ka ʻai.","Thanks so much for the food.","",2],
["ʻAʻole pilikia","ah-OH-leh pee-lee-KEE-ah","No problem / you're welcome","kumu","— Mahalo! — ʻAʻole pilikia.","— Thanks! — No problem.","literally 'no trouble'",2],
["Pehea ʻoe?","peh-HEH-ah OH-eh","How are you?","kumu","Aloha! Pehea ʻoe?","Hi! How are you?","",2],
["Maikaʻi nō","my-KAH-ee NOH","I'm fine / doing well","kumu","Maikaʻi nō, a ʻo ʻoe?","Doing well, and you?","",2],
["A ʻo ʻoe?","ah oh OH-eh","And you?","kumu","Maikaʻi nō, a ʻo ʻoe?","Fine, and you?","",2],
["ʻAe","EYE","Yes","kumu","ʻAe, makemake au.","Yes, I'd like that.","",2],
["ʻAʻole","ah-OH-leh","No / not","kumu","ʻAʻole, mahalo.","No, thank you.","",2],
["E kala mai","eh KAH-lah MY","Excuse me / sorry","kumu","E kala mai iaʻu.","Forgive me / I'm sorry.","",2],
["E ʻoluʻolu","eh OH-loo-OH-loo","Please","kumu","He wai, e ʻoluʻolu.","Water, please.","literally 'be pleasant'",2],
["E komo mai","eh KOH-moh MY","Welcome / come in","kumu","E komo mai i ko mākou hale!","Welcome to our home!","you will see it on every shop door",2],
["A hui hou","ah HOO-ee HOH","Until we meet again","kumu","A hui hou, e ka hoaaloha!","See you again, friend!","the warm goodbye",2],
["ʻO wai kou inoa?","oh VAI koh ee-NOH-ah","What's your name?","kumu","Aloha! ʻO wai kou inoa?","Hi! What's your name?","",3],
["ʻO ___ koʻu inoa","oh ___ KOH-oo ee-NOH-ah","My name is ___","kumu","ʻO Oliver koʻu inoa.","My name is Oliver.","",3],
["No hea mai ʻoe?","noh HEH-ah MY OH-eh","Where are you from?","kumu","No hea mai ʻoe?","Where are you from?","",3],
["No ___ mai au","noh ___ MY OW","I'm from ___","kumu","No Chicago mai au.","I'm from Chicago.","",3],
["ʻAʻole maopopo iaʻu","ah-OH-leh mah-oh-POH-poh ee-AH-oo","I don't understand","kumu","E kala mai, ʻaʻole maopopo iaʻu.","Sorry, I don't understand.","survival phrase",3],
["Hiki iā ʻoe ke ʻōlelo mālie?","HEE-kee ee-AH OH-eh keh OH-leh-loh MAH-lee-eh","Can you speak slowly?","kumu","Hiki iā ʻoe ke ʻōlelo mālie?","Can you speak slowly?","",3],
["He aha kēia?","heh AH-hah KAY-ah","What is this?","kumu","He aha kēia? He ʻulu kēia.","What's this? It's breadfruit.","the most useful question a learner has",3],
["Hūi!","HOO-ee","Hey! (calling out)","kumu","Hūi! E Keola!","Hey, Keola!","to get attention across a beach or yard",2],

// --- local (Hawaiian words inside everyday English)
["Pau","POW","Finished, done","local","Pau already?","Done already?","used in English all day: 'I'm pau'",6],
["Pau hana","POW HAH-nah","After work (and the drinks after work)","local","Pau hana at 5?","After-work drinks at 5?","hana = work",6],
["Puka","POO-kah","Hole","local","Get one puka in my slippah.","There's a hole in my flip-flop.","",6],
["Keiki","KAY-kee","Child, kids","local","Keiki menu, please.","Kids' menu, please.","on every menu and sign",6],
["ʻOhana","oh-HAH-nah","Family (incl. chosen family)","local","He's ʻohana.","He's family.","bigger than blood relatives",6],
["Kūpuna","koo-POO-nah","Elders, grandparents","local","Kūpuna hour at the store.","Seniors' shopping hour.","singular kupuna; deep respect is expected",6],
["Tūtū","TOO-too","Grandma / grandpa","local","Tūtū stay sleeping.","Grandma's sleeping.","affectionate",6],
["Kuleana","koo-leh-AH-nah","Responsibility, your business","local","That's not my kuleana.","That's not my responsibility.","also 'privilege' — what is yours to care for",6],
["Kōkua","koh-KOO-ah","Help","local","Mahalo for your kōkua.","Thanks for your help.","'Please kōkua' on signs = please cooperate",6],
["Kapu","KAH-poo","Forbidden, sacred, keep out","local","That area stay kapu.","That area is off-limits.","respect every kapu sign — no exceptions",6],
["Mauka","MOW-kah","Toward the mountains","local","Go mauka two blocks.","Go two blocks toward the mountains.","how locals give directions — not north/south",36],
["Makai","mah-KAI","Toward the ocean","local","The parking stay makai side.","The parking is on the ocean side.","",36],
["Wahine","wah-HEE-neh","Woman","local","Wahine on the restroom door.","Women's restroom.","plural wāhine",6],
["Kāne","KAH-neh","Man","local","Kāne is the men's room.","","on restroom doors — don't mix these up",6],
["Lānai","LAH-nai","Porch, balcony","local","Eat on the lānai.","Eat out on the porch.","",6],
["Hale","HAH-leh","House","local","His hale stay mauka.","His house is up toward the mountains.","",6],
["Hana hou","HAH-nah HOH","Again! / Encore!","local","Hana hou! Hana hou!","Encore! Encore!","shouted at concerts",6],
["Kamaʻāina","kah-mah-AH-ee-nah","Local resident","local","You get kamaʻāina discount?","Do you have a resident discount?","literally 'child of the land' — ask for this discount with a Hawaiʻi ID",6],
["Malihini","mah-lee-HEE-nee","Newcomer, visitor","local","Still one malihini.","Still a newcomer.","what you are on arrival — no shame in it",6],
["Haole","HOW-leh","Foreigner; usually a white person","local","","","neutral or insulting depending on tone. Understand it; don't use it about others",6],
["Hapa","HAH-pah","Half, mixed heritage","local","She's hapa Japanese.","She's half Japanese.","",6],
["Holoholo","hoh-loh-HOH-loh","To go out for fun, cruise around","local","We go holoholo Sunday.","Let's go cruise around Sunday.","",6],
["Pilikia","pee-lee-KEE-ah","Trouble","local","No make pilikia.","Don't cause trouble.","",6],
["ʻAkamai","ah-kah-MY","Smart, clever","local","Akamai, that one.","That one's smart.","",6],
["Kolohe","koh-LOH-heh","Mischievous, rascal","local","Da keiki so kolohe.","The kid's such a rascal.","affectionate",6],
["Lolo","LOH-loh","Crazy, dumb","local","No be lolo.","Don't be dumb.","friends only",6],
["Hūhū","HOO-hoo","Angry","local","He stay hūhū.","He's angry.","",6],
["Pupule","poo-POO-leh","Crazy","local","Pupule, that guy.","That guy's nuts.","friends only",6],
["ʻŌkole","oh-KOH-leh","Butt","local","Sit your ʻōkole down.","Sit down.","cheeky, family/friends register",6],
["ʻŌpala","oh-PAH-lah","Trash","local","Take out the ʻōpala.","Take out the trash.","",6],
["Mālama","MAH-lah-mah","To care for, protect","local","Mālama the ʻāina.","Take care of the land.","'mālama pono' = take care, look after yourself",6],
["ʻĀina","AH-ee-nah","Land","local","Aloha ʻāina.","Love of the land.","",6],
["Pono","POH-noh","Right, just, the proper way","local","Make sure you do 'em pono.","Make sure you do it right.","",6],
["Mana","MAH-nah","Spiritual power","local","That place get mana.","That place has power.","",6],

// --- pidgin
["Howzit","HOW-zit","Hi / how's it going","pidgin","Howzit brah!","Hey man, how's it going?","the default greeting — safe for anyone to say",6],
["Brah / Bruddah","brah / BRUH-dah","Bro, man","pidgin","Shoots, brah.","Sounds good, bro.","",6],
["Sistah","SIS-tah","Sis (friendly, to a woman)","pidgin","Mahalo, sistah!","Thanks, sis!","",6],
["Shoots","shoots","OK / sounds good / bye","pidgin","— Pau hana at 5? — Shoots!","— Drinks at 5? — Sounds good!","safe, everyone uses it",6],
["Da kine","dah KINE","Whatchamacallit, that thing","pidgin","Pass me da kine.","Pass me the, uh, thing.","stands in for any word you can't remember",6],
["Choke","choke","Lots, plenty","pidgin","Get choke cars today.","There are tons of cars today.","",6],
["Grind / Grinds","grind / grindz","To eat / food","pidgin","Time fo grind!","Time to eat!","'ono grinds' = delicious food",22],
["Broke da mouth","broke dah MOWT","Incredibly delicious","pidgin","Dis poke broke da mouth!","This poke is amazing!","",22],
["Slippahs","SLIP-ahs","Flip-flops","pidgin","Take off your slippahs.","Take off your shoes.","shoes off at the door, always",6],
["Chicken skin","CHICK-en skin","Goosebumps","pidgin","Dat song give me chicken skin.","That song gives me goosebumps.","",6],
["Stink eye","stink eye","A dirty look","pidgin","He wen give me stink eye.","He gave me a dirty look.","",6],
["Talk story","tawk STOR-ee","To chat, hang out and talk","pidgin","We go talk story.","Let's sit and chat.","the heart of local social life",6],
["Fo real?","foh REE-ahl","Really? Seriously?","pidgin","Fo real kine?","For real?","",6],
["Rajah","RAH-jah","Got it (from 'roger')","pidgin","Rajah dat.","Got it.","",6],
["Bumbye","bum-BYE","Later, eventually","pidgin","Bumbye you going see.","You'll see eventually.","",6],
["Mo bettah","moh BET-ah","Better","pidgin","Mo bettah you go early.","Better you go early.","",6],
["Li'dat","lie-DAT","Like that","pidgin","Why you stay acting li'dat?","Why are you acting like that?","",6],
["Wen","wen","Past-tense marker (did)","pidgin","I wen go beach.","I went to the beach.","the grammar of Pidgin — recognise it",6],
["Stay","stay","Is / are (located, ongoing)","pidgin","He stay inside.","He's inside.","",6],
["Get","get","There is / there are","pidgin","Get one shark ova dea!","There's a shark over there!","",6],
["Like","like","Want to","pidgin","You like go beach?","Do you want to go to the beach?","",6],
["Can!","can","Yes, I can / sure","pidgin","— You can drive? — Can!","— Can you drive? — Sure!","",6],
["Small kine","small kine","A little bit","pidgin","Small kine hot today.","It's kinda hot today.","",6],
["Bambucha","bahm-BOO-chah","Huge","pidgin","Bambucha wave!","Massive wave!","",6],
["Junk","junk","Lousy, bad","pidgin","Da traffic stay junk.","The traffic is awful.","",6],
["Shaka","SHAH-kah","The hang-loose hand sign","pidgin","Throw one shaka.","Give a shaka.","thumb and pinky out — thanks, hi, no worries, let someone merge",6],
["Laters","LAY-tahs","See you later","pidgin","Laters, brah.","See you, bro.","",6],

// --- food
["ʻAi","AH-ee","Food; to eat","ai","E ʻai kākou!","Let's eat!","",22],
["ʻOno","OH-noh","Delicious","ai","ʻOno loa!","Really delicious!","used in English constantly",22],
["Wai","VAI","Fresh water","ai","He wai, e ʻoluʻolu.","Water, please.","kai is seawater — don't mix them up",22],
["Pūpū","POO-poo","Appetizers, snacks","ai","Get pūpū at pau hana.","There are snacks at happy hour.","",22],
["Poke","POH-keh","Cubed raw fish salad","ai","One pound ahi poke.","A pound of ahi poke.","two syllables: POH-keh, never 'poke'",22],
["ʻAhi","AH-hee","Yellowfin tuna","ai","ʻAhi poke, shoyu style.","Tuna poke, soy-sauce style.","",22],
["Plate lunch","plate lunch","Meat + two scoop rice + mac salad","ai","One plate lunch, two scoop rice.","","the local staple",22],
["Two scoop rice","two scoop rice","Two scoops of rice","ai","Chicken katsu, two scoop rice, one mac.","","",22],
["Musubi","moo-soo-BEE","Spam on rice wrapped in nori","ai","Grab one musubi.","Grab a spam musubi.","from Japanese; sold at every 7-Eleven",22],
["Shave ice","shave ice","Hawaiian shaved ice","ai","Shave ice wit ice cream bottom.","","never 'shaved ice' — that marks you instantly",22],
["Loco moco","LOH-koh MOH-koh","Rice, burger, egg, gravy","ai","Loco moco, extra gravy.","","",22],
["Kalua pig","kah-LOO-ah pig","Pork cooked in an underground oven","ai","Kalua pig and cabbage.","","",22],
["Lūʻau","LOO-ow","Feast, party","ai","Get one lūʻau Saturday.","There's a lūʻau on Saturday.","",22],
["Kaukau","KOW-kow","Food (Pidgin)","ai","Bring kaukau.","Bring food.","",22],
["Makemake au i ___","mah-keh-MAH-keh OW ee","I want ___","ai","Makemake au i ka poke.","I'd like the poke.","the ordering phrase",22],
["ʻEhia ke kumukūʻai?","eh-HEE-ah keh koo-moo-KOO-ai","How much is it?","ai","ʻEhia ke kumukūʻai o kēia?","How much is this?","",22],

// --- places & directions
["Aia i hea ___?","EYE-ah ee HEH-ah","Where is ___?","wahi","Aia i hea ka lua?","Where's the bathroom?","",36],
["Ka lua","kah LOO-ah","The toilet / restroom","wahi","Aia i hea ka lua?","Where's the restroom?","",36],
["ʻEwa","EH-vah","Toward ʻEwa (west, on Oʻahu)","wahi","Go ʻEwa side.","Head west.","Oʻahu directions: mauka, makai, ʻEwa, Diamond Head",36],
["Diamond Head side","","East (on Oʻahu)","wahi","Stay Diamond Head side of Kapahulu.","","",36],
["Kai","KAI","Sea, ocean water","wahi","Hele i ke kai.","Go to the sea.","",36],
["Kahakai","kah-hah-KAI","Beach","wahi","E hele kāua i kahakai.","Let's go to the beach, you and me.","",36],
["Mauna","MOW-nah","Mountain","wahi","Mauna Kea","White Mountain","",36],
["Hale kūʻai","HAH-leh koo-AI","Store","wahi","Aia i hea ka hale kūʻai?","Where's the store?","",36],
["Hale ʻaina","HAH-leh AI-nah","Restaurant","wahi","He hale ʻaina ʻono kēia.","This is a great restaurant.","",36],
["Hele","HEH-leh","To go","wahi","E hele kākou!","Let's all go!","",36],
["Hele mai","HEH-leh MY","Come here","wahi","Hele mai, e ka keiki.","Come here, kid.","",36],
["Hele on","HEH-leh on","Let's go / get moving (Pidgin)","wahi","Hele on, we late!","Let's go, we're late!","",36],

// --- people
["Hoaaloha","hoh-ah-ah-LOH-hah","Friend","kanaka","ʻO Keola koʻu hoaaloha.","Keola is my friend.","",13],
["Makuahine","mah-koo-ah-HEE-neh","Mother","kanaka","Aia koʻu makuahine ma Hilo.","My mother's in Hilo.","",13],
["Makuakāne","mah-koo-ah-KAH-neh","Father","kanaka","","","",13],
["Kaikuaʻana","kai-koo-ah-AH-nah","Older sibling (same gender)","kanaka","","","Hawaiian names siblings by gender and age relative to you",13],
["Kaikaina","kai-KAI-nah","Younger sibling (same gender)","kanaka","","","",13],
["Kumu","KOO-moo","Teacher; source","kanaka","He kumu ʻo ia.","She's a teacher.","",3],
["Haumāna","how-MAH-nah","Student","kanaka","He haumāna au.","I'm a student.","",3],
["Kanaka","kah-NAH-kah","Person; Native Hawaiian","kanaka","","","Kānaka Maoli = Native Hawaiian people",3],
["Au / Wau","OW / VOW","I, me","kanaka","He kauka au.","I'm a doctor.","",3],
["ʻOe","OH-eh","You (one person)","kanaka","Pehea ʻoe?","How are you?","",3],
["ʻO ia","oh EE-ah","He / she","kanaka","He kumu ʻo ia.","He's a teacher.","no gender in Hawaiian pronouns",3],
["Kākou","KAH-koh","We all (including you)","kanaka","Aloha kākou!","Hello everyone!","Hawaiian has four words for 'we'",3],

// --- numbers
["ʻEkahi","eh-KAH-hee","One","helu","","","",4],
["ʻElua","eh-LOO-ah","Two","helu","","","",4],
["ʻEkolu","eh-KOH-loo","Three","helu","","","",4],
["ʻEhā","eh-HAH","Four","helu","","","",4],
["ʻElima","eh-LEE-mah","Five","helu","","","",4],
["ʻEono","eh-OH-noh","Six","helu","","","",4],
["ʻEhiku","eh-HEE-koo","Seven","helu","","","",4],
["ʻEwalu","eh-VAH-loo","Eight","helu","","","",4],
["ʻEiwa","eh-EE-vah","Nine","helu","","","",4],
["ʻUmi","OO-mee","Ten","helu","","","",4],

// --- verbs
["Makemake","mah-keh-MAH-keh","To want, like","hana","Makemake au e hele.","I want to go.","",22],
["ʻŌlelo","OH-leh-loh","To speak; language","hana","ʻŌlelo Hawaiʻi","Hawaiian language","",3],
["Maopopo","mah-oh-POH-poh","To understand, know","hana","Maopopo iaʻu.","I understand.","",3],
["Hana","HAH-nah","To work, do; work","hana","Hele au i ka hana.","I'm going to work.","",6],
["Inu","EE-noo","To drink","hana","E inu wai.","Drink water.","",22],
["Noho","NOH-hoh","To live, sit, stay","hana","Noho au ma Kailua.","I live in Kailua.","",13],
["ʻAuʻau","OW-ow","To swim, bathe","hana","E ʻauʻau kākou i ke kai.","Let's swim in the sea.","",36],
];

/* ============================================================
   GUIDES
   ============================================================ */
const HAW_GUIDES = [
{id:"kani", title:"Kani — Hawaiian Sounds", sub:"Thirteen letters, and the two marks that change meaning", tag:"Start here", body:`
<h3>The whole alphabet</h3>
<p>Hawaiian has only 13 letters: the five vowels <b>a e i o u</b>, the consonants <b>h k l m n p w</b>, and the <b>ʻokina</b> (ʻ). Every word ends in a vowel. Every vowel is pronounced, every time.</p>
<table>
<tr><th>Letter</th><th>Sounds like</th><th>Example</th></tr>
<tr><td class="fr">a</td><td class="say">ah (father)</td><td class="fr">aloha</td></tr>
<tr><td class="fr">e</td><td class="say">eh (bet)</td><td class="fr">hele</td></tr>
<tr><td class="fr">i</td><td class="say">ee (see)</td><td class="fr">wiki</td></tr>
<tr><td class="fr">o</td><td class="say">oh (go)</td><td class="fr">ono</td></tr>
<tr><td class="fr">u</td><td class="say">oo (moon)</td><td class="fr">puka</td></tr>
</table>

<h3>The ʻokina — a catch in the throat</h3>
<div class="box blue"><b>Say "uh-oh"</b>The little break in the middle of "uh-oh" is the ʻokina. It is a real consonant, and leaving it out changes the word.</div>
<table>
<tr><td class="fr">pau</td><td class="say">POW</td><td>finished</td></tr>
<tr><td class="fr">paʻu</td><td class="say">PAH-oo</td><td>soot</td></tr>
<tr><td class="fr">Hawaiʻi</td><td class="say">hah-VAI-ee</td><td>the island / the state</td></tr>
</table>

<h3>The kahakō — a longer, stressed vowel</h3>
<p>The line over a vowel (ā ē ī ō ū) holds the vowel a little longer and pulls the stress onto it.</p>
<table>
<tr><td class="fr">kane</td><td>a skin disease</td></tr>
<tr><td class="fr">kāne</td><td>man — the one on the restroom door</td></tr>
<tr><td class="fr">pupu</td><td>a shell</td></tr>
<tr><td class="fr">pūpū</td><td>appetizer</td></tr>
</table>

<h3>W — sometimes V</h3>
<p>After <b>i</b> or <b>e</b>, W usually sounds like V. After <b>o</b> or <b>u</b>, it's a W. At the start of a word, either is fine.</p>
<p><span class="fr">Hawaiʻi</span> <span class="say">hah-VAI-ee</span> · <span class="fr">ʻEwa</span> <span class="say">EH-vah</span> · <span class="fr">auwē</span> <span class="say">ow-WEH</span></p>

<h3>Stress</h3>
<p>Stress the second-to-last syllable unless a kahakō pulls it elsewhere: <span class="fr">ma-HA-lo</span>, <span class="fr">a-LO-ha</span>.</p>

<h3>Place names — where newcomers get spotted</h3>
<table>
<tr><th>Written</th><th>Locals say</th><th>Not</th></tr>
<tr><td class="fr">Kauaʻi</td><td class="say">kow-AH-ee</td><td>"kuh-WHY"</td></tr>
<tr><td class="fr">Lānaʻi</td><td class="say">lah-NAH-ee</td><td>"luh-NIGH"</td></tr>
<tr><td class="fr">Oʻahu</td><td class="say">oh-AH-hoo</td><td>"oh-WAH-hoo"</td></tr>
<tr><td class="fr">Kīlauea</td><td class="say">kee-lau-EH-ah</td><td></td></tr>
<tr><td class="fr">Kapiʻolani</td><td class="say">kah-pee-oh-LAH-nee</td><td></td></tr>
<tr><td class="fr">Likelike Hwy</td><td class="say">LEE-keh-LEE-keh</td><td>"like-like"</td></tr>
</table>
<div class="box green"><b>Why this matters</b>Saying place names right is the single fastest way to show respect. People notice, and they warm up to you because of it.</div>
`},

{id:"pidgin", title:"Pidgin — How Locals Talk", sub:"Hawaiʻi Creole English: understand all of it, use some of it", tag:"Street talk", body:`
<h3>What Pidgin is</h3>
<p>Pidgin (linguists call it Hawaiʻi Creole English) is a full language of its own. Plantation workers built it from English, Hawaiian, Japanese, Chinese, Portuguese and Filipino languages. Around 600,000 people speak it. On the islands it is what you hear at the beach, the gym, the job site and the plate-lunch counter. You'll hear far more Pidgin than Hawaiian.</p>

<div class="box red"><b>The one rule</b>Learn to <b>understand</b> all of it. <b>Use</b> only the safe words below until people start using it with you. A newcomer forcing heavy Pidgin sounds like they're mocking it. Understanding it gets you in; overdoing it pushes you out.</div>

<h3>Safe to use from day one</h3>
<table>
<tr><td class="pg">Howzit</td><td>hi, how's it going</td></tr>
<tr><td class="pg">Shoots</td><td>ok, sounds good, bye</td></tr>
<tr><td class="pg">Pau</td><td>done ("I'm pau")</td></tr>
<tr><td class="pg">Brah</td><td>bro (with guys your age)</td></tr>
<tr><td class="pg">Da kine</td><td>whatchamacallit</td></tr>
<tr><td class="pg">Talk story</td><td>chat, hang out</td></tr>
<tr><td class="pg">Slippahs</td><td>flip-flops</td></tr>
<tr><td class="pg">Shaka 🤙</td><td>thanks / hi / no worries — especially when someone lets you merge in traffic</td></tr>
</table>

<h3>Grammar you will hear constantly</h3>
<table>
<tr><th>Pidgin</th><th>English</th><th>How it works</th></tr>
<tr><td class="pg">I wen go store.</td><td>I went to the store.</td><td><b>wen</b> = past</td></tr>
<tr><td class="pg">I going go store.</td><td>I'm going to the store.</td><td><b>going</b> = future</td></tr>
<tr><td class="pg">He stay sleeping.</td><td>He's sleeping.</td><td><b>stay</b> = is (right now / located)</td></tr>
<tr><td class="pg">Get one dog outside.</td><td>There's a dog outside.</td><td><b>get</b> = there is</td></tr>
<tr><td class="pg">You like go beach?</td><td>Want to go to the beach?</td><td><b>like</b> = want</td></tr>
<tr><td class="pg">No can.</td><td>I can't.</td><td><b>no</b> = don't / can't</td></tr>
<tr><td class="pg">Dis one ʻono, yeah?</td><td>This is good, isn't it?</td><td><b>yeah?</b> = tag question</td></tr>
<tr><td class="pg">Da guy wen cockaroach my pen.</td><td>The guy swiped my pen.</td><td></td></tr>
</table>

<h3>Register tags</h3>
<table>
<tr><td><span class="tag t-green">safe</span></td><td>howzit, shoots, pau, mahalo, da kine, choke, ʻono, grind, talk story</td></tr>
<tr><td><span class="tag t-gold">friends only</span></td><td>lolo, pupule, ʻōkole, junk, stink eye</td></tr>
<tr><td><span class="tag t-red">recognise, don't use</span></td><td>haole (when said with an edge), "make ass" (embarrass yourself, crude), and heavy-accent imitation of any kind</td></tr>
</table>

<h3>Habits that mark you as local, not tourist</h3>
<ul>
<li>Shoes off at the door. Always. Look for the pile of slippahs.</li>
<li>Call older people <b>Aunty</b> and <b>Uncle</b>, even strangers. It's respectful, not weird.</li>
<li><b>Shave ice</b>, not "shaved ice". <b>Two scoop rice</b>, not "two scoops".</li>
<li>Give directions with <b>mauka / makai</b>, not north/south.</li>
<li>Don't call yourself "Hawaiian" if you aren't Native Hawaiian. Residents are <b>locals</b> or <b>kamaʻāina</b>; "Hawaiian" means the ethnicity.</li>
<li>No honking. Shaka instead.</li>
</ul>
`},

{id:"pepeke", title:"Sentence Building", sub:"Hawaiian puts the action first — once you see it, sentences click", tag:"Grammar", body:`
<h3>The core idea</h3>
<p>English: <b>I am a teacher.</b> Hawaiian: <b>A teacher, I.</b> → <span class="fr">He kumu au.</span></p>
<p>The important part comes first, then who it's about. This one pattern carries you a long way.</p>

<h3>Pattern 1 — "I am a ___" (He + noun + who)</h3>
<table>
<tr><td class="fr">He kumu au.</td><td>I'm a teacher.</td></tr>
<tr><td class="fr">He haumāna ʻo ia.</td><td>He/she is a student.</td></tr>
<tr><td class="fr">He kauka ʻoe?</td><td>Are you a doctor?</td></tr>
<tr><td class="fr">He aha kēia?</td><td>What is this? (lit. "a what, this?")</td></tr>
</table>

<h3>Pattern 2 — describing (adjective first)</h3>
<table>
<tr><td class="fr">Maikaʻi au.</td><td>I'm good.</td></tr>
<tr><td class="fr">ʻOno kēia.</td><td>This is delicious.</td></tr>
<tr><td class="fr">Wela ka lā.</td><td>The sun/day is hot.</td></tr>
</table>

<h3>Pattern 3 — doing (verb first)</h3>
<table>
<tr><td class="fr">Hele au i ke kai.</td><td>I go to the sea.</td></tr>
<tr><td class="fr">Makemake au i ka poke.</td><td>I want the poke.</td></tr>
<tr><td class="fr">E hele kākou!</td><td>Let's go! (E + verb = do it / let's)</td></tr>
</table>

<h3>Four words for "we"</h3>
<table>
<tr><th></th><th>Including you</th><th>Not including you</th></tr>
<tr><td><b>two of us</b></td><td class="fr">kāua</td><td class="fr">māua</td></tr>
<tr><td><b>three or more</b></td><td class="fr">kākou</td><td class="fr">mākou</td></tr>
</table>
<p><span class="fr">Aloha kākou</span> greets a whole room, you included. It's the classic way to open a speech.</p>

<h3>Ka / ke — "the"</h3>
<p><b>ke</b> before words starting with k, e, a, o, or ʻ (mostly); <b>ka</b> everywhere else. <span class="fr">ke kai</span>, <span class="fr">ka wai</span>, <span class="fr">ka lā</span>, <span class="fr">ke ʻano</span>.</p>
`},

{id:"b2", title:"Road to B2 — All Three Languages", sub:"Honest hours, realistic dates, and how to go faster", tag:"Roadmap", body:"__ROADMAP__"},
];

/* ============================================================
   THE 90-DAY PLAN
   ============================================================ */
const HAW_PHASES = [
  {n:1, days:[1,21],  name:"Kani a me ke Aloha", goal:"Sound right, greet anyone, and understand the local words in everyday English.", tag:"t-blue"},
  {n:2, days:[22,45], name:"Ma ke Kaona",        goal:"Eat, shop, get around and handle the beach and weather like a resident.", tag:"t-gold"},
  {n:3, days:[46,66], name:"Ka Nohona",          goal:"Talk about your life, past and future, and your people.", tag:"t-red"},
  {n:4, days:[67,90], name:"Kamaʻilio",          goal:"Talk story: hold a relaxed conversation and follow fast Pidgin.", tag:"t-green"},
];

const HAW_WEEK_GOALS = {
 1:{t:"Sounds and aloha",          g:"Say place names right and greet anyone properly.", m:"Read 15 island place names aloud without one mistake."},
 2:{t:"Who you are",               g:"Introduce yourself fully in Hawaiian.", m:"A 30-second self-introduction, unscripted."},
 3:{t:"Daily life words",          g:"Follow everyday local English full of Hawaiian words.", m:"Explain 20 local words to a friend from the mainland."},
 4:{t:"Plate lunch and poke",      g:"Order food and drink with confidence.", m:"Order a full plate lunch in mixed Hawaiian and Pidgin."},
 5:{t:"Shopping and money",        g:"Buy things and ask the price.", m:"Farmers' market role-play, 10 exchanges."},
 6:{t:"Getting around",            g:"Give and follow island directions.", m:"Direct someone from Ala Moana to Diamond Head using mauka/makai."},
 7:{t:"Ke kai — the ocean",        g:"Beach, surf, weather, safety.", m:"Describe today's ocean conditions in 6 sentences."},
 8:{t:"Past tense",                g:"Say what you did.", m:"Tell what you did last weekend, in Hawaiian and in Pidgin."},
 9:{t:"Plans and future",          g:"Talk about plans.", m:"Describe next week in 8 sentences."},
10:{t:"ʻOhana and kuleana",        g:"Talk about family, work and responsibilities.", m:"Describe your ʻohana for 60 seconds."},
11:{t:"Culture and respect",       g:"Understand protocol: kapu, mālama, chants, hula.", m:"Explain three local customs to a visitor."},
12:{t:"Pidgin at speed",           g:"Follow fast, natural Pidgin.", m:"Understand a 2-minute Pidgin clip without English help."},
13:{t:"Final talk story",          g:"Prove the 90 days worked.", m:"10-minute unscripted conversation, graded honestly."},
};

const HAW_PLAN = [
 [1,"Kani — Hawaiian sounds","Thirteen letters, the ʻokina, the kahakō, and island place names."],
 [2,"Aloha — greetings","Aloha, mahalo, pehea ʻoe — the words you'll use every single day."],
 [3,"He ___ au — who you are","Name, where you're from, what you do. The sentence pattern that unlocks everything."],
 [4,"Helu — numbers 1 to 10","Counting, plus phone numbers and prices."],
 [5,"Ka / ke — 'the'","Articles, and kēia / kēlā (this / that)."],
 [6,"Local talk — Pidgin & island words","Howzit, shoots, pau, da kine. How people actually talk."],
 [7,"Review + Checkpoint 1","Week 1, tested four ways."],
 [8,"Pronouns","Au, ʻoe, ʻo ia — and the four words for 'we'."],
 [9,"Describing things","Maikaʻi, nui, liʻiliʻi, wela — adjective first."],
 [10,"Questions","Wai, aha, hea, ehia — who, what, where, how many."],
 [11,"ʻAʻole — saying no","Negation, and how it moves the words around."],
 [12,"Aunty, Uncle, respect","Talking to elders and the protocol nobody explains."],
 [13,"ʻOhana — family","Your people, and sibling words that depend on age and gender."],
 [14,"Review + Checkpoint 2","Week 2 test."],
 [15,"E + verb","Commands and 'let's' — e hele, e ʻai, e noho."],
 [16,"Ke + verb + nei","Saying what's happening right now."],
 [17,"Days and time","Lāpule, Pōʻakahi… and 'island time'."],
 [18,"The weather","Wela, ua, makani — and the trade winds."],
 [19,"Pidgin grammar","Wen, stay, get, like — read any Pidgin sentence."],
 [20,"Talk story: your day","Describe your whole day out loud, mixed Hawaiian and English."],
 [21,"Review + PHASE 1 EXAM","Three weeks, one test."],
 [22,"Plate lunch & poke","Makemake au i… — ordering food like a local."],
 [23,"Island menu words","Kalua, laulau, lomi, haupia, musubi, loco moco."],
 [24,"Drinks and pau hana","Inu, wai, and happy-hour talk."],
 [25,"At the lūʻau","Food, music, and what to do (and not do)."],
 [26,"Saying it was ʻono","Complimenting, thanking, and 'broke da mouth'."],
 [27,"Talk story: ordering lunch","Arrive, order, chat, pay, leave."],
 [28,"Review + Checkpoint 4","Week 4 test."],
 [29,"Numbers to 100","Prices and phone numbers said fast."],
 [30,"ʻEhia? — how much?","Asking, understanding the answer, paying."],
 [31,"At the farmers' market","Fruit names: maiʻa, ʻulu, lilikoʻi, mīkana."],
 [32,"Kamaʻāina life","Resident discounts, ID, Costco runs, and slippahs."],
 [33,"Colors and things","Ulaula, uliuli, melemele — describe what you want."],
 [34,"Talk story: shopping day","Three stops, three different tones."],
 [35,"Review + Checkpoint 5","Week 5 test."],
 [36,"Mauka, makai — directions","Island directions, getting around, asking for the restroom."],
 [37,"Aia i hea? — where things are","Ma, i, mai, aku — place words."],
 [38,"TheBus and driving","Freeways, shaka etiquette, and parking."],
 [39,"Neighborhoods and islands","Kailua, Kaimukī, Hilo, Lahaina — say them right."],
 [40,"Hiking and the land","Mauna, awāwa, wailele — trails, valleys, waterfalls."],
 [41,"Talk story: show me around","Give a friend a tour of your neighborhood."],
 [42,"Review + Checkpoint 6","Week 6 test."],
 [43,"Ke kai — the ocean","Kai, nalu, honu — the beach in Hawaiian."],
 [44,"Surf and safety","Rip currents, warning flags, lifeguards — words that matter."],
 [45,"Review + PHASE 2 EXAM","Around town, tested."],
 [46,"Ua — the past","Ua hele au — saying what happened."],
 [47,"Last weekend","Time words for the past."],
 [48,"Pidgin past: wen","The same stories in Pidgin."],
 [49,"Stories","Linking events: a laila, ma hope."],
 [50,"Feelings","Hauʻoli, kaumaha, hūhū, makaʻu."],
 [51,"Talk story: what happened","Tell a 2-minute story."],
 [52,"Review + Checkpoint 7","Week 7 test."],
 [53,"E … ana — the future","E hele ana au — plans."],
 [54,"Invitations","Asking people out, accepting, saying no nicely."],
 [55,"Making plans","Times, places, 'bumbye' and island time."],
 [56,"Phone and texting","Local texting shorthand and voice notes."],
 [57,"Wants and needs","Makemake, pono — I need, I should."],
 [58,"Talk story: weekend plans","Plan a holoholo day."],
 [59,"Review + Checkpoint 8","Week 8 test."],
 [60,"Work — hana","Jobs, the workplace, pau hana culture."],
 [61,"Home — hale","Rooms, chores, the lānai."],
 [62,"Kuleana","Responsibility, privilege, and the local sense of duty."],
 [63,"Possession: kaʻu / koʻu","The two kinds of 'my' — and why."],
 [64,"Health","Body parts, the doctor, the pharmacy."],
 [65,"Talk story: my life here","60 seconds about your life in Hawaiʻi."],
 [66,"Review + PHASE 3 EXAM","Past, future, people."],
 [67,"Mālama ʻāina","Caring for the land: reef-safe, kapu, beach cleanups."],
 [68,"Mele — songs","Learn a song, understand its words."],
 [69,"Hula and oli","What you're watching and how to behave."],
 [70,"Kaona — hidden meaning","Why Hawaiian poetry says two things at once."],
 [71,"Proverbs — ʻōlelo noʻeau","Ten sayings locals actually quote."],
 [72,"Talk story: culture","Explain a custom to a visitor."],
 [73,"Review + Checkpoint 10","Week 10 test."],
 [74,"Opinions","Manaʻo — what I think, and why."],
 [75,"Agreeing and disagreeing","Politely, the local way."],
 [76,"Pidgin at full speed","Comedy, radio, and real conversations."],
 [77,"Code-switching","When locals move between English, Pidgin and Hawaiian."],
 [78,"Island news","Following a short Hawaiian-language news clip."],
 [79,"Talk story: a debate","Light topic, both sides."],
 [80,"Review + Checkpoint 11","Week 11 test."],
 [81,"Asking favors","Kōkua, politeness, and the indirect ask."],
 [82,"Problems and pilikia","Something went wrong — get it fixed."],
 [83,"Celebrations","Birthdays, babies' first lūʻau, graduations, lei."],
 [84,"Register","Kūpuna, coworkers, friends — three tones."],
 [85,"Giving a speech","Aloha kākou — opening and closing like a local."],
 [86,"Talk story: two registers","Same story, to an Aunty and to a friend."],
 [87,"Review + Checkpoint 12","Week 12 test."],
 [88,"FINAL: listening","Real Hawaiian and Pidgin, at real speed."],
 [89,"FINAL: writing","100 words about your life in Hawaiian."],
 [90,"FINAL TALK STORY","10 unscripted minutes. Honest grade at the end."],
];

/* ============================================================
   LESSONS
   ============================================================ */
const HAW_LESSONS = {};

HAW_LESSONS[1] = {
title:"Kani — Hawaiian sounds",
mins:20, goal:"Pronounce Hawaiian so it sounds right — vowels, the ʻokina, the kahakō, and the place names you'll say every day.",
body:`
<h3>Good news first</h3>
<p>Hawaiian is the easiest of your three languages to <b>pronounce</b>. There are only 13 letters, and every word is spelled exactly the way it sounds. Learn five vowels and two marks today and you can read any sign on the islands.</p>
<div class="box red"><b>Read everything out loud</b>Same rule as French and Portuguese. Your mouth is learning a physical skill.</div>

<h3>1. Five vowels, always the same</h3>
<table>
<tr><td class="fr">a</td><td class="say">ah</td><td class="fr">aloha</td></tr>
<tr><td class="fr">e</td><td class="say">eh</td><td class="fr">hele</td></tr>
<tr><td class="fr">i</td><td class="say">ee</td><td class="fr">wiki</td></tr>
<tr><td class="fr">o</td><td class="say">oh</td><td class="fr">ono</td></tr>
<tr><td class="fr">u</td><td class="say">oo</td><td class="fr">puka</td></tr>
</table>
<div class="box green"><b>You already own these</b>They are the same pure vowels as Portuguese and Spanish. No English "ay-oh" glide. <b>e</b> is "eh", not "ee".</div>

<h3>2. The ʻokina (ʻ) — a stop in the throat</h3>
<p>Say <b>"uh-oh"</b>. The little catch in the middle is the ʻokina. It's a real consonant, and leaving it out changes the word.</p>
<table>
<tr><td class="fr">pau</td><td class="say">POW</td><td>done</td></tr>
<tr><td class="fr">Hawaiʻi</td><td class="say">hah-VAI-ee</td><td>with a catch before the last "ee"</td></tr>
<tr><td class="fr">ʻaʻole</td><td class="say">ah-OH-leh</td><td>no</td></tr>
</table>

<h3>3. The kahakō (ā) — hold it and stress it</h3>
<p><span class="fr">kāne</span> (man) vs <span class="fr">kane</span> (a skin disease). <span class="fr">pūpū</span> (snacks) vs <span class="fr">pupu</span> (shell). Hold the marked vowel a little longer.</p>

<h3>4. W after i or e sounds like V</h3>
<p><span class="fr">Hawaiʻi</span> = <span class="say">hah-VAI-ee</span> · <span class="fr">ʻEwa</span> = <span class="say">EH-vah</span>. After o or u it stays W.</p>

<h3>5. Island names — say them right</h3>
<table>
<tr><td class="fr">Oʻahu</td><td class="say">oh-AH-hoo</td></tr>
<tr><td class="fr">Kauaʻi</td><td class="say">kow-AH-ee</td></tr>
<tr><td class="fr">Maui</td><td class="say">MOW-ee</td></tr>
<tr><td class="fr">Molokaʻi</td><td class="say">moh-loh-KAH-ee</td></tr>
<tr><td class="fr">Lānaʻi</td><td class="say">lah-NAH-ee</td></tr>
<tr><td class="fr">Waikīkī</td><td class="say">vai-kee-KEE</td></tr>
<tr><td class="fr">Honolulu</td><td class="say">hoh-noh-LOO-loo</td></tr>
</table>

<h3>Out loud — five minutes</h3>
<p><b>Drill A.</b> <span class="fr">a — e — i — o — u</span>, pure, no glide. Then <span class="fr">aloha — hele — puka — mahalo</span>.</p>
<p><b>Drill B.</b> <span class="fr">pau — Hawaiʻi — ʻaʻole — Oʻahu</span>. Feel the catch.</p>
<p><b>Drill C.</b> The islands, west to east: <span class="fr">Niʻihau, Kauaʻi, Oʻahu, Molokaʻi, Lānaʻi, Maui, Hawaiʻi</span>.</p>
<div class="box blue"><b>About the audio</b>No phone or computer ships a Hawaiian voice yet, so this track uses an Italian voice, whose vowels are the closest match. It won't do the ʻokina. Trust the red "say it" guide over the robot.</div>
`,
homework:[
 {t:"Island chain, ten times", d:"Say Niʻihau, Kauaʻi, Oʻahu, Molokaʻi, Lānaʻi, Maui, Hawaiʻi aloud ten times. Get the ʻokina catches in."},
 {t:"Pure vowels", d:"Read 'aloha, mahalo, hele, puka, ono, keiki' slowly. If any vowel glides like English 'oh-oo', redo it."},
 {t:"Kahakō pairs", d:"Say kāne / kane and pūpū / pupu back to back until the long vowel is obvious."},
 {t:"Spot a mistake", d:"Watch any Hawaiʻi travel video. Note one place name the presenter says wrong and how it should sound."}
],
quiz:[
 {t:"mc", q:"How many letters are in the Hawaiian alphabet?", a:["13","26","18","21"], c:0, why:"Five vowels, seven consonants (h k l m n p w), and the ʻokina."},
 {t:"mc", q:"The <b>ʻokina</b> (ʻ) is…", a:["A catch in the throat, like the middle of 'uh-oh'","A decoration you can skip","A long vowel","A silent letter"], c:0, why:"It's a real consonant (a glottal stop). Skip it and you've said a different word."},
 {t:"mc", q:"A line over a vowel (the <b>kahakō</b>) means…", a:["Hold the vowel longer and stress it","The vowel is silent","Say it through the nose","It's a question"], c:0, why:"kāne (man) vs kane (skin disease) — the line matters."},
 {t:"mc", q:"<b>Hawaiʻi</b> is pronounced…", a:["hah-VAI-ee","huh-WHY-ee","hah-WAY-ee","HAH-wai"], c:0, why:"W after 'ai' leans toward V, and the ʻokina adds a catch before the last 'ee'."},
 {t:"mc", q:"<b>Oʻahu</b> is pronounced…", a:["oh-AH-hoo","oh-WAH-hoo","OH-ah-hoo","wah-HOO"], c:0, why:"The ʻokina separates the o and the a. There's no W sound."},
 {t:"mc", q:"Hawaiian <b>e</b> sounds like…", a:["eh (as in bet)","ee (as in see)","ay (as in day)","uh"], c:0, why:"hele = HEH-leh. The vowels are pure, like Portuguese."},
 {t:"mc", q:"Every Hawaiian word ends in…", a:["A vowel","A consonant","An ʻokina","Either"], c:0, why:"No Hawaiian word ends in a consonant. That's why 'Pidgin' and English loanwords get vowels added: Kalikimaka (Christmas)."},
 {t:"mc", q:"Which restroom door is for men?", a:["Kāne","Wahine","Keiki","Kapu"], c:0, why:"Kāne = man, wahine = woman. People really do get this wrong on their first day."},
 {t:"mc", q:"<b>ʻEwa</b> (a place on Oʻahu) is said…", a:["EH-vah","EE-wah","YOO-ah","EH-wah"], c:0, why:"W after e usually sounds like V."},
 {t:"type", q:"Write the Hawaiian word for <b>thank you</b>.", ans:["mahalo"], why:"<b>Mahalo</b> — mah-HAH-loh."},
 {t:"type", q:"Write the island name pronounced <b>MOW-ee</b>.", ans:["maui"], why:"<b>Maui</b>."},
 {t:"listen", play:"Aloha", q:"Listen, then choose what you heard.", a:["Aloha","Mahalo","Hele","Pau"], c:0, why:"<b>Aloha</b> — ah-LOH-hah."}
]
};

HAW_LESSONS[2] = {
title:"Aloha — greetings",
mins:20, goal:"Greet anyone at any time of day, thank them, and say goodbye properly.",
body:`
<h3>Aloha is not just "hi"</h3>
<p><span class="fr">Aloha</span> means hello, goodbye, love, and compassion. When a local says it, they mean it. Say it warmly and look people in the eye.</p>

<h3>Greetings by time of day</h3>
<table>
<tr><td class="fr">Aloha kakahiaka</td><td>Good morning</td></tr>
<tr><td class="fr">Aloha awakea</td><td>Good midday</td></tr>
<tr><td class="fr">Aloha ʻauinalā</td><td>Good afternoon</td></tr>
<tr><td class="fr">Aloha ahiahi</td><td>Good evening</td></tr>
<tr><td class="fr">Aloha kākou</td><td>Hello everyone (you included)</td></tr>
</table>

<h3>The first conversation</h3>
<table>
<tr><td class="fr">Aloha! Pehea ʻoe?</td><td>Hi! How are you?</td></tr>
<tr><td class="fr">Maikaʻi nō, mahalo. A ʻo ʻoe?</td><td>Fine, thanks. And you?</td></tr>
<tr><td class="fr">Maikaʻi nō!</td><td>Good!</td></tr>
</table>
<p>Other answers: <span class="fr">Maikaʻi loa</span> (really good), <span class="fr">Luhi au</span> (I'm tired), <span class="fr">ʻAʻole maikaʻi</span> (not good).</p>

<h3>Courtesy words</h3>
<table>
<tr><td class="fr">Mahalo</td><td>Thanks</td></tr>
<tr><td class="fr">Mahalo nui loa</td><td>Thank you very much</td></tr>
<tr><td class="fr">ʻAʻole pilikia</td><td>No problem / you're welcome</td></tr>
<tr><td class="fr">E kala mai</td><td>Excuse me / sorry</td></tr>
<tr><td class="fr">E ʻoluʻolu</td><td>Please</td></tr>
<tr><td class="fr">E komo mai</td><td>Welcome / come in</td></tr>
<tr><td class="fr">A hui hou</td><td>Until we meet again</td></tr>
</table>

<h3>The local version, same conversation</h3>
<table>
<tr><td class="pg">Howzit!</td><td>Hi!</td></tr>
<tr><td class="pg">Good, good. You?</td><td>(Locals say it twice.)</td></tr>
<tr><td class="pg">Shoots, laters!</td><td>OK, see you!</td></tr>
</table>
<div class="box"><b>Real life</b>At work or a shop you'll hear English sprinkled with <b>aloha</b> and <b>mahalo</b>. At the beach it's <b>howzit</b> and <b>shoots</b>. Full Hawaiian happens at Hawaiian-language schools, churches, cultural events and among speakers. Learn all three and you'll fit in anywhere.</div>

<h3>Out loud</h3>
<p>Play both sides: <span class="fr">Aloha kakahiaka! Pehea ʻoe? — Maikaʻi nō, mahalo. A ʻo ʻoe? — Maikaʻi nō! A hui hou!</span></p>
`,
homework:[
 {t:"Say it to a real person", d:"Use 'mahalo' and 'aloha' with someone today. Notice how it lands."},
 {t:"Time of day", d:"Each time you check your phone today, say the right greeting for that time."},
 {t:"Both registers", d:"Act out the first conversation twice: once in Hawaiian, once in local English/Pidgin."},
 {t:"Write it", d:"Write the four-line conversation from memory, ʻokina and kahakō included."}
],
quiz:[
 {t:"mc", q:"<b>Aloha kakahiaka</b> means…", a:["Good morning","Good evening","Goodbye","Welcome"], c:0, why:"kakahiaka = morning."},
 {t:"mc", q:"Someone asks <b>Pehea ʻoe?</b> You answer…", a:["Maikaʻi nō, a ʻo ʻoe?","ʻO Oliver koʻu inoa.","E komo mai.","ʻAʻole pilikia."], c:0, why:"'Doing well, and you?'"},
 {t:"mc", q:"Someone says <b>Mahalo!</b> You reply…", a:["ʻAʻole pilikia","E kala mai","Aloha ahiahi","Pehea ʻoe?"], c:0, why:"'No trouble' — the everyday 'you're welcome'."},
 {t:"mc", q:"<b>E komo mai</b> on a shop door means…", a:["Welcome, come in","Closed","Keep out","Pull"], c:0, why:"It's on doors and mats everywhere."},
 {t:"mc", q:"<b>A hui hou</b> means…", a:["Until we meet again","Good morning","How are you?","Excuse me"], c:0, why:"The warm Hawaiian goodbye."},
 {t:"mc", q:"You bump into someone in line. You say…", a:["E kala mai","E komo mai","Hana hou","Pau"], c:0, why:"E kala mai = excuse me / sorry."},
 {t:"mc", q:"Greeting a whole room, you say…", a:["Aloha kākou","Aloha ʻoe","Aloha au","Aloha kāua"], c:0, why:"kākou = all of us, you included."},
 {t:"mc", q:"In Pidgin, <b>Shoots!</b> means…", a:["OK / sounds good / bye","Watch out!","Hurry up","Gross"], c:0, why:"The most useful Pidgin word. Safe for anyone to say."},
 {t:"mc", q:"<b>Aloha ahiahi</b> is used…", a:["In the evening","In the morning","At midday","Only at funerals"], c:0, why:"ahiahi = evening."},
 {t:"type", q:"Write <b>thank you very much</b>.", ans:["mahalo nui loa","mahalo nui"], why:"<b>Mahalo nui loa</b>."},
 {t:"type", q:"Write <b>yes</b> in Hawaiian.", ans:["ʻae","'ae","ae"], why:"<b>ʻAe</b> — sounds like 'eye'."},
 {t:"type", q:"Write <b>no</b> in Hawaiian.", ans:["ʻaʻole","'a'ole","aole","a'ole"], why:"<b>ʻAʻole</b> — ah-OH-leh."},
 {t:"listen", play:"Aloha! Pehea ʻoe?", q:"Listen, then choose what you heard.", a:["Hi! How are you?","Good morning, everyone.","Thank you very much.","Until we meet again."], c:0, why:"<b>Aloha! Pehea ʻoe?</b>"}
]
};

HAW_LESSONS[3] = {
title:"He ___ au — who you are",
mins:20, goal:"Say your name, where you're from and what you do — and learn the one sentence pattern behind all of it.",
body:`
<h3>Name</h3>
<table>
<tr><td class="fr">ʻO wai kou inoa?</td><td>What's your name?</td></tr>
<tr><td class="fr">ʻO Oliver koʻu inoa.</td><td>My name is Oliver.</td></tr>
</table>
<p>Word for word: <i>"Oliver, my name."</i> The new information goes first.</p>

<h3>Where you're from</h3>
<table>
<tr><td class="fr">No hea mai ʻoe?</td><td>Where are you from?</td></tr>
<tr><td class="fr">No Chicago mai au.</td><td>I'm from Chicago.</td></tr>
<tr><td class="fr">Noho au ma Honolulu.</td><td>I live in Honolulu.</td></tr>
</table>

<h3>What you are: He + noun + who</h3>
<div class="box blue"><b>The pattern</b><span class="fr">He</span> + thing + person. "A teacher, I." → <span class="fr">He kumu au.</span></div>
<table>
<tr><td class="fr">He kumu au.</td><td>I'm a teacher.</td></tr>
<tr><td class="fr">He haumāna au.</td><td>I'm a student.</td></tr>
<tr><td class="fr">He kauka ʻo ia.</td><td>He/she is a doctor.</td></tr>
<tr><td class="fr">He malihini au.</td><td>I'm a newcomer.</td></tr>
<tr><td class="fr">He aha kēia?</td><td>What's this?</td></tr>
</table>

<h3>The pronouns</h3>
<table>
<tr><td class="fr">au / wau</td><td>I</td></tr>
<tr><td class="fr">ʻoe</td><td>you (one person)</td></tr>
<tr><td class="fr">ʻo ia</td><td>he / she — no gender</td></tr>
<tr><td class="fr">kākou</td><td>we all (including you)</td></tr>
</table>

<h3>Survival lines</h3>
<table>
<tr><td class="fr">ʻAʻole maopopo iaʻu.</td><td>I don't understand.</td></tr>
<tr><td class="fr">Hiki iā ʻoe ke ʻōlelo mālie?</td><td>Can you speak slowly?</td></tr>
<tr><td class="fr">Ke aʻo nei au i ka ʻōlelo Hawaiʻi.</td><td>I'm learning Hawaiian.</td></tr>
</table>
<div class="box green"><b>Use that last line</b>Locals who speak Hawaiian light up when they hear it. It opens more doors than perfect grammar.</div>

<h3>Your 20-second introduction</h3>
<p><span class="fr">Aloha kākou! ʻO Oliver koʻu inoa. No Chicago mai au. Ke aʻo nei au i ka ʻōlelo Hawaiʻi. Mahalo!</span></p>
`,
homework:[
 {t:"Memorize your introduction", d:"Say the 20-second intro five times without reading. Then record it."},
 {t:"He ___ au", d:"Make 5 sentences about yourself: He ___ au (job, hobby, malihini...)."},
 {t:"He aha kēia?", d:"Point at 5 things around you and ask 'He aha kēia?' Look up the answers on wehewehe.org."},
 {t:"Pronoun swap", d:"Change 'He kumu au' to talk about a friend (ʻo ia) and to ask a question (ʻoe?)."}
],
quiz:[
 {t:"mc", q:"<b>ʻO wai kou inoa?</b> means…", a:["What's your name?","Where are you from?","How are you?","What's this?"], c:0, why:"inoa = name."},
 {t:"mc", q:"How do you say <b>I'm a student</b>?", a:["He haumāna au.","Au he haumāna.","He au haumāna.","Haumāna au he."], c:0, why:"He + noun + person."},
 {t:"mc", q:"<b>No hea mai ʻoe?</b> means…", a:["Where are you from?","Where do you live?","Where's the restroom?","What's your name?"], c:0, why:"No ___ mai = from ___."},
 {t:"mc", q:"<b>ʻO ia</b> means…", a:["he OR she","only he","only she","they"], c:0, why:"Hawaiian pronouns have no gender."},
 {t:"mc", q:"<b>He aha kēia?</b> means…", a:["What is this?","Who is this?","Where is this?","How much is this?"], c:0, why:"Literally 'a what, this?'"},
 {t:"mc", q:"You didn't catch something. You say…", a:["ʻAʻole maopopo iaʻu.","ʻAʻole pilikia.","E komo mai.","Maikaʻi nō."], c:0, why:"'I don't understand.'"},
 {t:"mc", q:"<b>Kākou</b> means…", a:["we all, including you","we, not including you","you two","they"], c:0, why:"Hawaiian has four words for 'we'. Kākou is the inclusive, 3-or-more one."},
 {t:"mc", q:"Translate: <b>He kauka ʻo ia.</b>", a:["He/she is a doctor.","I'm a doctor.","Are you a doctor?","The doctor is here."], c:0, why:"kauka = doctor (from English 'doctor')."},
 {t:"mc", q:"<b>No Chicago mai au</b> means…", a:["I'm from Chicago","I live in Chicago","I'm going to Chicago","I love Chicago"], c:0, why:"No ___ mai au = I'm from ___."},
 {t:"type", q:"Complete: <b>ʻO Oliver ___ inoa</b> (my name is Oliver).", ans:["koʻu","ko'u","kou"], why:"<b>koʻu</b> = my. (kou = your.)"},
 {t:"type", q:"Write the Hawaiian word for <b>teacher</b>.", ans:["kumu"], why:"<b>Kumu</b> — also means 'source' or 'foundation'."},
 {t:"type", q:"Write <b>I</b> in Hawaiian.", ans:["au","wau"], why:"<b>au</b> (or wau)."},
 {t:"listen", play:"ʻO Oliver koʻu inoa.", q:"Listen, then choose what you heard.", a:["My name is Oliver.","Oliver is a teacher.","Where is Oliver?","Oliver is from Chicago."], c:0, why:"<b>ʻO Oliver koʻu inoa.</b>"}
]
};

HAW_LESSONS[6] = {
title:"Local talk — Pidgin & island words",
mins:20, goal:"Understand the Hawaiian words and Pidgin that fill everyday conversation, and know which ones you can use yourself.",
body:`
<h3>What you'll actually hear</h3>
<p>Walk into a shop in Kailua and you'll hear something like this:</p>
<div class="box"><b>Real conversation</b><span class="pg">"Howzit! You pau already? Shoots, I going grab one musubi. Get choke people today, brah — da kine stay pack."</span><br><br>
"Hey! You done already? OK, I'm grabbing a spam musubi. There are tons of people today, man — the, uh, place is packed."</div>
<p>That's English grammar mixed with Pidgin grammar (<b>going</b>, <b>get</b>, <b>stay</b>) and Hawaiian words (<b>pau</b>). This is what living there actually sounds like.</p>

<h3>Hawaiian words inside English — learn all of these</h3>
<table>
<tr><td class="fr">pau</td><td>done — "I'm pau"</td></tr>
<tr><td class="fr">pau hana</td><td>after work / happy hour</td></tr>
<tr><td class="fr">puka</td><td>hole</td></tr>
<tr><td class="fr">keiki</td><td>kids — "keiki menu"</td></tr>
<tr><td class="fr">ʻohana</td><td>family</td></tr>
<tr><td class="fr">kuleana</td><td>responsibility — "not my kuleana"</td></tr>
<tr><td class="fr">kōkua</td><td>help — "mahalo for your kōkua"</td></tr>
<tr><td class="fr">kapu</td><td>forbidden — on signs</td></tr>
<tr><td class="fr">ʻono</td><td>delicious</td></tr>
<tr><td class="fr">holoholo</td><td>go cruising / out for fun</td></tr>
<tr><td class="fr">kamaʻāina</td><td>resident — "kamaʻāina discount"</td></tr>
<tr><td class="fr">malihini</td><td>newcomer — you, right now</td></tr>
</table>

<h3>Pidgin — understand everything, use the safe ones</h3>
<table>
<tr><th>Pidgin</th><th>Means</th><th>Use it?</th></tr>
<tr><td class="pg">Howzit</td><td>Hi</td><td><span class="tag t-green">safe</span></td></tr>
<tr><td class="pg">Shoots</td><td>OK / bye</td><td><span class="tag t-green">safe</span></td></tr>
<tr><td class="pg">Da kine</td><td>whatchamacallit</td><td><span class="tag t-green">safe</span></td></tr>
<tr><td class="pg">Choke</td><td>a lot</td><td><span class="tag t-green">safe</span></td></tr>
<tr><td class="pg">Talk story</td><td>to chat</td><td><span class="tag t-green">safe</span></td></tr>
<tr><td class="pg">Brah</td><td>bro</td><td><span class="tag t-gold">friends</span></td></tr>
<tr><td class="pg">Stink eye</td><td>a dirty look</td><td><span class="tag t-gold">friends</span></td></tr>
<tr><td class="pg">Lolo</td><td>dumb</td><td><span class="tag t-gold">friends</span></td></tr>
<tr><td class="pg">Haole</td><td>outsider / white person</td><td><span class="tag t-red">recognise only</span></td></tr>
</table>

<h3>Four grammar words decode most Pidgin</h3>
<table>
<tr><td class="pg">wen</td><td>past: <i>I wen go</i> = I went</td></tr>
<tr><td class="pg">stay</td><td>is (right now): <i>He stay sleeping</i></td></tr>
<tr><td class="pg">get</td><td>there is: <i>Get one shark!</i></td></tr>
<tr><td class="pg">like</td><td>want: <i>You like go?</i></td></tr>
</table>

<div class="box red"><b>The newcomer rule</b>Don't fake heavy Pidgin. Use <b>howzit, shoots, pau, mahalo, da kine</b> and let the rest come naturally as people use it with you. Understanding Pidgin earns respect; imitating it costs you.</div>
`,
homework:[
 {t:"Decode it", d:"Translate into standard English: 'Brah, I wen go beach and get choke people. Da waves stay junk.'"},
 {t:"Use three today", d:"Work 'pau', 'mahalo' and 'shoots' naturally into conversation today."},
 {t:"Watch", d:"Search YouTube for 'Pidgin Hawaii comedy' or 'Bu La'ia'. Write down 5 expressions you hear."},
 {t:"Label it", d:"For each of 10 local words, mark it safe / friends / recognise-only. Check against this lesson."}
],
quiz:[
 {t:"mc", q:"Someone says <b>\"I'm pau\"</b>. They mean…", a:["I'm done","I'm hungry","I'm tired","I'm leaving"], c:0, why:"pau = finished."},
 {t:"mc", q:"<b>Pau hana</b> is…", a:["After work, usually with drinks","Lunch break","A day off","Working late"], c:0, why:"hana = work. Pau hana = work's done."},
 {t:"mc", q:"<b>Get choke cars</b> means…", a:["There are a lot of cars","Cars are choking","Get in the car","The cars are broken"], c:0, why:"get = there is, choke = lots."},
 {t:"mc", q:"<b>I wen go store</b> means…", a:["I went to the store","I'm going to the store","I want to go to the store","I live near the store"], c:0, why:"wen = past-tense marker."},
 {t:"mc", q:"<b>Kamaʻāina discount</b> is for…", a:["Residents with a Hawaiʻi ID","Children","Tourists","Military only"], c:0, why:"kamaʻāina = local resident."},
 {t:"mc", q:"Which Pidgin word is <b>safe</b> for a newcomer to use with anyone?", a:["Shoots","Lolo","Haole","Stink eye"], c:0, why:"Shoots is neutral and friendly."},
 {t:"mc", q:"<b>Da kine</b> means…", a:["Whatchamacallit — any word you can't think of","The king","That kind of food","Be kind"], c:0, why:"It can replace almost any noun, verb or adjective."},
 {t:"mc", q:"A sign says <b>KAPU</b>. You should…", a:["Stay out — it's forbidden or sacred","Take a photo inside","Pay first","Take your shoes off"], c:0, why:"Kapu means keep out. Always respect it."},
 {t:"mc", q:"<b>Talk story</b> means…", a:["Chat and hang out","Tell a lie","Read aloud","Give a speech"], c:0, why:"The center of local social life."},
 {t:"mc", q:"<b>He stay inside</b> means…", a:["He's inside","He wants to stay inside","He lives inside","He went inside"], c:0, why:"stay = is (location / right now)."},
 {t:"mc", q:"Best newcomer approach to Pidgin?", a:["Understand all of it, use only a few safe words","Speak it heavily right away","Avoid it completely","Correct people to standard English"], c:0, why:"Understanding earns respect; imitating can sound like mocking."},
 {t:"type", q:"Write the local word for <b>kids</b>.", ans:["keiki"], why:"<b>Keiki</b> — on every menu."},
 {t:"type", q:"Write the word for <b>delicious</b>.", ans:["ʻono","'ono","ono"], why:"<b>ʻOno</b>."},
 {t:"type", q:"Write the word for <b>family</b>.", ans:["ʻohana","'ohana","ohana"], why:"<b>ʻOhana</b>."}
]
};

HAW_LESSONS[22] = {
title:"Plate lunch & poke",
mins:20, goal:"Order food at a plate-lunch counter, a poke shop and a lūʻau, using the words locals use.",
body:`
<h3>The ordering phrase</h3>
<div class="box blue"><b>Makemake au i ___</b>I want / I'd like ___. <span class="fr">Makemake au i ka poke.</span> — I'd like the poke.</div>
<table>
<tr><td class="fr">Makemake au i ka wai.</td><td>I'd like water.</td></tr>
<tr><td class="fr">ʻEhia ke kumukūʻai?</td><td>How much is it?</td></tr>
<tr><td class="fr">ʻOno loa!</td><td>Really delicious!</td></tr>
<tr><td class="fr">Mahalo no ka ʻai.</td><td>Thanks for the food.</td></tr>
</table>

<h3>What's on the board</h3>
<table>
<tr><td><b>Plate lunch</b></td><td>main + two scoop rice + mac salad</td></tr>
<tr><td class="fr">poke</td><td>cubed raw fish — POH-keh</td></tr>
<tr><td class="fr">ʻahi</td><td>yellowfin tuna</td></tr>
<tr><td class="fr">kalua pig</td><td>smoky shredded pork from an underground oven (imu)</td></tr>
<tr><td class="fr">laulau</td><td>pork wrapped in taro leaves, steamed</td></tr>
<tr><td class="fr">lomi salmon</td><td>salted salmon, tomato, onion</td></tr>
<tr><td class="fr">haupia</td><td>coconut pudding</td></tr>
<tr><td class="fr">poi</td><td>pounded taro</td></tr>
<tr><td><b>Musubi</b></td><td>spam on rice with nori</td></tr>
<tr><td><b>Loco moco</b></td><td>rice, burger patty, fried egg, gravy</td></tr>
<tr><td><b>Shave ice</b></td><td>NOT "shaved ice"</td></tr>
</table>

<h3>Order like a local</h3>
<table>
<tr><td class="pg">"Can I get one chicken katsu, two scoop rice, one mac?"</td></tr>
<tr><td class="pg">"One pound ʻahi poke, shoyu, and one spicy."</td></tr>
<tr><td class="pg">"Shave ice — lilikoʻi and lychee, ice cream bottom."</td></tr>
</table>
<p>Notice <b>one</b> instead of "a" — that's Pidgin, and everyone does it. Shoyu = soy sauce.</p>

<h3>Reacting</h3>
<table>
<tr><td class="fr">ʻOno!</td><td>Delicious!</td><td><span class="tag t-green">anyone</span></td></tr>
<tr><td class="pg">Broke da mouth!</td><td>Insanely good!</td><td><span class="tag t-green">casual</span></td></tr>
<tr><td class="pg">Ono grinds</td><td>Good food</td><td><span class="tag t-green">casual</span></td></tr>
<tr><td class="pg">Time fo grind!</td><td>Time to eat!</td><td><span class="tag t-gold">friends</span></td></tr>
</table>

<div class="box green"><b>Lūʻau etiquette</b>Let kūpuna (elders) eat first. Take a plate home if someone offers one — saying no can come across as rude. And never leave without saying mahalo to the host.</div>
`,
homework:[
 {t:"Order out loud", d:"Pretend you're at a counter. Order a plate lunch, poke and a drink — mixing Hawaiian, local English and 'makemake au i'."},
 {t:"Menu memory", d:"Without looking, describe 6 dishes from this lesson in English."},
 {t:"ʻEhia?", d:"Ask 'ʻEhia ke kumukūʻai?' about 5 things around you and answer with a price in English."},
 {t:"The shave ice test", d:"Say 'shave ice', 'two scoop rice' and 'poke' (POH-keh) correctly ten times each."}
],
quiz:[
 {t:"mc", q:"<b>Makemake au i ka poke</b> means…", a:["I'd like the poke","The poke is good","Where's the poke?","How much is the poke?"], c:0, why:"Makemake au i ___ = I want ___."},
 {t:"mc", q:"How is <b>poke</b> pronounced?", a:["POH-keh","pohk","POH-kee","POH-kay-ah"], c:0, why:"Two syllables. Saying 'pohk' is an instant tourist giveaway."},
 {t:"mc", q:"A standard <b>plate lunch</b> comes with…", a:["Two scoop rice and mac salad","Fries and coleslaw","Poi only","Salad and bread"], c:0, why:"Main + two scoop rice + mac salad."},
 {t:"mc", q:"<b>ʻEhia ke kumukūʻai?</b> means…", a:["How much is it?","Is it delicious?","What is it?","Where is it?"], c:0, why:"kumukūʻai = price."},
 {t:"mc", q:"Which is correct?", a:["Shave ice","Shaved ice","Shaving ice","Ice shave"], c:0, why:"Locals never say 'shaved ice'."},
 {t:"mc", q:"<b>Broke da mouth</b> means…", a:["Incredibly delicious","Too spicy","I bit my tongue","Too expensive"], c:0, why:"The highest food compliment in Pidgin."},
 {t:"mc", q:"<b>Kalua pig</b> is…", a:["Pork cooked in an underground oven","Pork with coffee","Raw pork","A pig-shaped cake"], c:0, why:"Kalua = cooked in an imu (underground oven)."},
 {t:"mc", q:"<b>Haupia</b> is…", a:["Coconut pudding","Taro paste","Fish salad","Sweet bread"], c:0, why:"The classic lūʻau dessert."},
 {t:"mc", q:"At a lūʻau, who eats first?", a:["Kūpuna (elders)","Children","Guests from far away","Whoever's hungriest"], c:0, why:"Respect for kūpuna comes first."},
 {t:"mc", q:"<b>Wai</b> vs <b>kai</b>:", a:["wai = fresh water, kai = seawater","Same thing","wai = sea, kai = rain","wai = juice, kai = water"], c:0, why:"Order 'wai', not 'kai'!"},
 {t:"type", q:"Write the Hawaiian for <b>delicious</b>.", ans:["ʻono","'ono","ono"], why:"<b>ʻOno</b>."},
 {t:"type", q:"Complete: <b>Makemake au i ka ___</b> (I'd like water).", ans:["wai"], why:"<b>wai</b> = fresh water."},
 {t:"listen", play:"Makemake au i ka wai.", q:"Listen, then choose what you heard.", a:["I'd like water.","The water is cold.","Where is the sea?","How much is water?"], c:0, why:"<b>Makemake au i ka wai.</b>"}
]
};

HAW_LESSONS[36] = {
title:"Mauka, makai — directions",
mins:20, goal:"Give and follow directions the island way, find the restroom, and get around town.",
body:`
<h3>Forget north and south</h3>
<p>On the islands, people give directions by the land, not the compass:</p>
<table>
<tr><td class="fr">mauka</td><td>toward the mountains (inland)</td></tr>
<tr><td class="fr">makai</td><td>toward the ocean</td></tr>
</table>
<p>On Oʻahu, add two landmarks for the other directions:</p>
<table>
<tr><td class="fr">ʻEwa</td><td>toward ʻEwa — roughly west</td></tr>
<tr><td><b>Diamond Head</b></td><td>toward Diamond Head — roughly east</td></tr>
</table>
<div class="box"><b>Real directions</b><span class="pg">"Go makai on Kapahulu, den turn Diamond Head side at da light. Stay on da mauka side, by da shave ice place."</span></div>
<p>On the other islands, people use town names instead: "Hilo side", "Kona side", "Lahaina side". <span class="pg">Side</span> does a lot of work.</p>

<h3>Where is…?</h3>
<table>
<tr><td class="fr">Aia i hea ka lua?</td><td>Where's the restroom?</td></tr>
<tr><td class="fr">Aia i hea ka hale kūʻai?</td><td>Where's the store?</td></tr>
<tr><td class="fr">Aia i hea ke kahakai?</td><td>Where's the beach?</td></tr>
<tr><td class="fr">Aia ma laila.</td><td>It's over there.</td></tr>
<tr><td class="fr">Aia ma ʻaneʻi.</td><td>It's here.</td></tr>
</table>

<h3>Going places</h3>
<table>
<tr><td class="fr">E hele kāua i kahakai!</td><td>Let's go to the beach, you and me!</td></tr>
<tr><td class="fr">E hele kākou!</td><td>Let's all go!</td></tr>
<tr><td class="fr">Hele mai!</td><td>Come here!</td></tr>
<tr><td class="pg">Hele on!</td><td>Let's go! / Get moving!</td></tr>
<tr><td class="pg">We go holoholo.</td><td>Let's go cruise around.</td></tr>
</table>

<h3>On the road</h3>
<ul>
<li>Highways are named for Hawaiian royalty and places: <span class="fr">Kalanianaʻole</span>, <span class="fr">Kamehameha</span>, <span class="fr">Likelike</span> (LEE-keh-LEE-keh). Practice them; you'll say them daily.</li>
<li>Someone lets you in? <b>Shaka</b> 🤙. No honking unless it's an emergency.</li>
<li>"TheBus" is the actual name of Oʻahu's bus system.</li>
</ul>
`,
homework:[
 {t:"Your own directions", d:"Give directions from your home to the nearest store using only mauka/makai and left/right."},
 {t:"Highway names", d:"Say Kalanianaʻole, Kamehameha, Likelike, Pali, H-1 ten times each."},
 {t:"Where is…", d:"Ask 'Aia i hea ___?' for 5 places, and answer 'Aia ma laila'."},
 {t:"Map work", d:"Open a map of Oʻahu. Point ʻEwa, Diamond Head, mauka and makai from three different spots."}
],
quiz:[
 {t:"mc", q:"<b>Mauka</b> means…", a:["Toward the mountains","Toward the ocean","West","Downtown"], c:0, why:"mauna = mountain."},
 {t:"mc", q:"<b>Makai</b> means…", a:["Toward the ocean","Toward the mountains","East","Uphill"], c:0, why:"kai = sea."},
 {t:"mc", q:"On Oʻahu, <b>ʻEwa side</b> is roughly…", a:["West","East","North","Up the mountain"], c:0, why:"ʻEwa = west-ish; Diamond Head = east-ish."},
 {t:"mc", q:"<b>Aia i hea ka lua?</b>", a:["Where's the restroom?","Where's the beach?","Where's the store?","Where are you from?"], c:0, why:"lua = toilet / restroom."},
 {t:"mc", q:"<b>Aia ma laila</b> means…", a:["It's over there","It's here","It's closed","It's far"], c:0, why:"ma laila = there."},
 {t:"mc", q:"<b>E hele kāua!</b> invites…", a:["Just you and me","Everyone","Them","Nobody — it's a command"], c:0, why:"kāua = we two, including you."},
 {t:"mc", q:"Someone lets you merge. You…", a:["Throw a shaka","Honk twice","Flash your lights","Do nothing"], c:0, why:"The shaka is island road etiquette."},
 {t:"mc", q:"<b>Likelike Highway</b> is said…", a:["LEE-keh-LEE-keh","LIKE-LIKE","lee-KEE-lee-kee","LICK-lick"], c:0, why:"Every vowel pronounced, pure."},
 {t:"mc", q:"<b>Hele on!</b> (Pidgin) means…", a:["Let's go!","Hold on!","Hello!","Help!"], c:0, why:"hele = go."},
 {t:"mc", q:"On the Big Island, people often say…", a:["Hilo side / Kona side","ʻEwa / Diamond Head","Uptown / downtown","North / south only"], c:0, why:"ʻEwa / Diamond Head is Oʻahu-specific."},
 {t:"type", q:"Write the word for <b>toward the ocean</b>.", ans:["makai"], why:"<b>makai</b>."},
 {t:"type", q:"Write the word for <b>beach</b>.", ans:["kahakai"], why:"<b>kahakai</b>."},
 {t:"listen", play:"Aia i hea ka lua?", q:"Listen, then choose what you heard.", a:["Where's the restroom?","Where's the store?","Let's go to the beach!","It's over there."], c:0, why:"<b>Aia i hea ka lua?</b>"}
]
};
