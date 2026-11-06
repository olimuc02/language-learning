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
 ["kamailio","Conversation","💬"],
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

// --- kamaʻilio (conversation: the phrases that keep a real chat going)
// meeting people
["Pehea kou lā?","PEH-heh-ah koh LAH","How's your day?","kamailio","Aloha e Keola! Pehea kou lā?","Hi Keola! How's your day going?","lā = day (and sun)",2],
["Maikaʻi loa!","my-KAH-ee LOH-ah","Really good! / Great!","kamailio","— Pehea ʻoe? — Maikaʻi loa, mahalo!","— How are you? — Great, thanks!","loa = very; goes after the word it boosts",2],
["Hauʻoli ka launa ʻana","how-OH-lee kah LOW-nah AH-nah","Nice to meet you","kamailio","Aloha, ʻo Oliver koʻu inoa. Hauʻoli ka launa ʻana!","Hi, I'm Oliver. Nice to meet you!","literally 'the meeting is a joy'",3],
["Ma hea ʻoe e noho ai?","mah HEH-ah OH-eh eh NOH-hoh eye","Where do you live?","kamailio","Ma hea ʻoe e noho ai? — Noho au ma Kailua.","Where do you live? — I live in Kailua.","answer with 'Noho au ma ___'",3],
["He aha kāu hana?","heh AH-hah KAH-oo HAH-nah","What do you do (for work)?","kamailio","He aha kāu hana? — He kauka au.","What do you do? — I'm a doctor.","answer with the He ___ au pattern",3],
["Ke aʻo nei au i ka ʻōlelo Hawaiʻi","keh AH-oh NAY OW ee kah OH-leh-loh hah-VAI-ee","I'm learning Hawaiian","kamailio","E kala mai, ke aʻo nei au i ka ʻōlelo Hawaiʻi.","Sorry, I'm learning Hawaiian.","say this early: people slow down and help",3],
["He malihini au","heh mah-lee-HEE-nee OW","I'm new here","kamailio","He malihini au. No Chicago mai au.","I'm new here. I'm from Chicago.","honest and humble — locals respect it",3],
// keeping the chat alive
["He aha ka nūhou?","heh AH-hah kah noo-HOH","What's new?","kamailio","Aloha e Pua! He aha ka nūhou?","Hey Pua! What's new?","nūhou also means 'news'",10],
["ʻAʻohe nūhou","ah-OH-heh noo-HOH","Nothing new","kamailio","ʻAʻohe nūhou. A ʻo ʻoe?","Nothing new. And you?","ʻaʻohe = there is no",10],
["Pehea ka ʻohana?","PEH-heh-ah kah oh-HAH-nah","How's the family?","kamailio","Pehea ka ʻohana? Maikaʻi nō?","How's the family? All good?","asked constantly — family comes first here",10],
["ʻOiaʻiʻo?","oh-ee-ah-EE-oh","Really? / Is that so?","kamailio","— Ua ʻike au i ka honu! — ʻOiaʻiʻo?","— I saw a turtle! — Really?","literally 'the truth'",10],
["Pololei!","poh-loh-LAY","Exactly! / That's right!","kamailio","— ʻOno ka poke ma laila? — Pololei!","— Is the poke good there? — Exactly!","also 'straight' and 'correct'",10],
["Pēlā nō","PAY-lah NOH","Same here / that's how it is","kamailio","— Māluhiluhi au. — Pēlā nō!","— I'm tired. — Same here!","an easy, warm way to agree",10],
["Malia paha","mah-LEE-ah PAH-hah","Maybe / perhaps","kamailio","— E hele ana ʻoe? — Malia paha.","— Are you going? — Maybe.","paha alone = 'maybe' after a word",10],
["ʻAʻole au i ʻike","ah-OH-leh OW ee EE-keh","I don't know","kamailio","ʻAʻole au i ʻike, e kala mai.","I don't know, sorry.","",10],
["He aha kou manaʻo?","heh AH-hah koh mah-NAH-oh","What do you think?","kamailio","He aha kou manaʻo? ʻOno?","What do you think? Tasty?","manaʻo = thought, opinion — also used in English",10],
["No ke aha?","noh keh AH-hah","Why?","kamailio","No ke aha? He aha ka pilikia?","Why? What's the problem?","",10],
["ʻO wai kēlā?","oh VAI KAY-lah","Who's that?","kamailio","ʻO wai kēlā kāne?","Who's that guy?","",10],
// when you're lost
["E ʻōlelo hou mai","eh OH-leh-loh HOH my","Say it again (to me)","kamailio","E kala mai, e ʻōlelo hou mai, e ʻoluʻolu.","Sorry, please say it again.","hou = again, mai = toward me",3],
["He aha ka ʻōlelo Hawaiʻi no ___?","heh AH-hah kah OH-leh-loh hah-VAI-ee noh","What's the Hawaiian for ___?","kamailio","He aha ka ʻōlelo Hawaiʻi no 'beach'? — Kahakai.","What's the Hawaiian for 'beach'? — Kahakai.","your most powerful learning question",3],
["Hiki iā ʻoe ke kōkua mai iaʻu?","HEE-kee ee-AH OH-eh keh koh-KOO-ah my ee-AH-oo","Can you help me?","kamailio","E kala mai, hiki iā ʻoe ke kōkua mai iaʻu?","Excuse me, can you help me?","",10],
["Hiki iaʻu ke kōkua?","HEE-kee ee-AH-oo keh koh-KOO-ah","Can I help?","kamailio","Hiki iaʻu ke kōkua iā ʻoe?","Can I help you?","always offer at someone's house",25],
// yes, no, plans
["Hiki nō!","HEE-kee NOH","Sure! / Can do!","kamailio","— E hele kāua i kahakai? — Hiki nō!","— Beach, you and me? — Sure!","the friendliest yes",2],
["ʻAʻole hiki","ah-OH-leh HEE-kee","I can't / not possible","kamailio","ʻAʻole hiki iaʻu i kēia lā, e kala mai.","I can't today, sorry.","",11],
["E hele kāua!","eh HEH-leh KAH-wah","Let's go (you and me)!","kamailio","E hele kāua e ʻai!","Let's go eat, you and me!","kāua = you + me; kākou = all of us",15],
["Aia i hea ʻoe?","EYE-ah ee HEH-ah OH-eh","Where are you?","kamailio","Aia i hea ʻoe? Aia au ma kahakai.","Where are you? I'm at the beach.","the texting classic",37],
["Aia au ma ka hale","EYE-ah OW mah kah HAH-leh","I'm at home","kamailio","Aia au ma ka hale, hele mai!","I'm home, come over!","",37],
["ʻEhia ka hola?","eh-HEE-ah kah HOH-lah","What time is it?","kamailio","ʻEhia ka hola? Ua lohi kākou!","What time is it? We're late!","",17],
["I ka hola ʻehia?","ee kah HOH-lah eh-HEE-ah","At what time?","kamailio","Pāʻina i ka Pōʻaono. I ka hola ʻehia?","Party on Saturday. At what time?","",17],
["I ka hola ʻelima","ee kah HOH-lah eh-LEE-mah","At five o'clock","kamailio","Pau hana i ka hola ʻelima?","Pau hana at five?","swap in any number 1–12",17],
// feelings & body
["Pōloli au","poh-LOH-lee OW","I'm hungry","kamailio","Pōloli loa au! E ʻai kākou.","I'm starving! Let's eat.","feeling-word first, then 'au'",50],
["Makewai au","mah-keh-VAI OW","I'm thirsty","kamailio","Makewai au. He wai, e ʻoluʻolu.","I'm thirsty. Water, please.","",50],
["Māluhiluhi au","mah-loo-hee-LOO-hee OW","I'm tired","kamailio","Māluhiluhi au, ua lōʻihi ka hana.","I'm tired, work was long.","",50],
["Hauʻoli au","how-OH-lee OW","I'm happy","kamailio","Hauʻoli au i kou hele ʻana mai!","I'm happy you came!","",50],
["Wela loa!","VEH-lah LOH-ah","So hot!","kamailio","Wela loa kēia lā!","It's so hot today!","the islands' favourite complaint",18],
["Ke ua nei","keh OO-ah NAY","It's raining","kamailio","Ke ua nei ma uka.","It's raining up mauka.","ke ___ nei = happening now",18],
["Nani loa!","NAH-nee LOH-ah","So beautiful!","kamailio","Nani loa ka napoʻo ʻana o ka lā!","What a beautiful sunset!","",9],
["Nui ka nalu i kēia lā","NOO-ee kah NAH-loo ee KAY-ah LAH","The waves are big today","kamailio","Nui ka nalu i kēia lā, mālama pono!","Big surf today, be careful!","",43],
// at someone's home
["Hele mai e ʻai!","HEH-leh my eh AH-ee","Come eat!","kamailio","Hele mai e ʻai, nui ka ʻai!","Come eat, there's plenty of food!","you'll hear this at every gathering",25],
["E noho mai","eh NOH-hoh my","Have a seat","kamailio","E komo mai, e noho mai!","Come in, have a seat!","",25],
["Mahalo no ka ʻai","mah-HAH-loh noh kah AH-ee","Thanks for the food","kamailio","Mahalo nui no ka ʻai, ʻono loa!","Thanks so much for the food, delicious!","say it to the host before you leave",22],
["Mahalo no kou kōkua","mah-HAH-loh noh koh koh-KOO-ah","Thanks for your help","kamailio","Mahalo nui no kou kōkua!","Thank you so much for your help!","",25],
["Mahalo no ka hele ʻana mai","mah-HAH-loh noh kah HEH-leh AH-nah my","Thanks for coming","kamailio","Mahalo no ka hele ʻana mai, e Aunty!","Thanks for coming, Aunty!","",25],
// celebrations (you're on island for all of these)
["Mele Kalikimaka!","MEH-leh kah-lee-kee-MAH-kah","Merry Christmas!","kamailio","Mele Kalikimaka a Hauʻoli Makahiki Hou!","Merry Christmas and Happy New Year!","you'll be on island for it — use it all December",83],
["Hauʻoli Makahiki Hou!","how-OH-lee mah-kah-HEE-kee HOH","Happy New Year!","kamailio","Hauʻoli Makahiki Hou, e ka ʻohana!","Happy New Year, family!","",83],
["Hauʻoli lā hānau!","how-OH-lee LAH HAH-now","Happy birthday!","kamailio","Hauʻoli lā hānau iā ʻoe!","Happy birthday to you!","",83],
["Aloha au iā ʻoe","ah-LOH-hah OW ee-AH OH-eh","I love you","kamailio","Aloha au iā ʻoe, e Tūtū.","I love you, Grandma.","",50],
// goodbyes
["Mālama pono!","MAH-lah-mah POH-noh","Take care!","kamailio","A hui hou, mālama pono!","See you, take care!","the warmest way to say goodbye",2],
["A hui hou kākou","ah HOO-ee HOH KAH-koh","See you all again","kamailio","Mahalo nui, a hui hou kākou!","Thanks so much, see you all!","to a whole group",2],
// local English & Pidgin you'll hear in every conversation
["What school you went?","","Which high school did you go to?","kamailio","Eh, you from here? What school you went?","","local English — THE island icebreaker. It means high school, not college; it places you in the local map",6],
["Eh, long time!","","Long time no see!","kamailio","Eh, long time! Howzit?","","local English — the standard reunion line",6],
["Try wait","","Hang on a sec","kamailio","Try wait, I go get my keys.","","Pidgin — 'try' softens any request: try look, try come",19],
["Can or not?","","Is that possible? / Can you?","kamailio","You can pick me up, can or not?","","Pidgin — answer 'Can!' or 'No can'",19],
["Where you stay?","","Where are you (right now)?","kamailio","Where you stay? We stay at the beach already.","","Pidgin — stay = are (located)",19],
["You going?","","Are you coming?","kamailio","Get one party Friday, you going?","","Pidgin — no 'are' needed",19],
["Shoots den","","OK then, sounds good","kamailio","Shoots den, see you at five.","","Pidgin — safe for anyone; ends most plans",6],
["No worry, beef curry","","Don't worry about it","kamailio","— Sorry I late! — No worry, beef curry.","","Pidgin — playful, with friends",19],
["Garans","gah-RANS","Guaranteed, for sure","kamailio","Garans going rain later.","It's definitely going to rain later.","Pidgin — 'garans ballbarans' = absolutely guaranteed",19],
["Ho, brah!","","Whoa, man! (surprise)","kamailio","Ho, brah, dat wave was huge!","","Pidgin — the all-purpose 'wow'",19],
["Bodda you?","","Does it bother you?","kamailio","I go open da window, bodda you?","","Pidgin — polite check-in",19],
["Eh, sorry ah","","Oops, sorry","kamailio","Eh, sorry ah, I neva see you.","Oops, sorry, I didn't see you.","Pidgin — neva = didn't",19],
["Mahalo plenty","","Thanks a lot","kamailio","Mahalo plenty for da ride, brah.","","local English — warm and casual",6],

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
{id:"phrases", title:"Island Phrasebook", sub:"Real conversations, situation by situation: Hawaiian, local English and Pidgin side by side", tag:"Use today", body:`
<p>This is the sheet to keep open on your phone. Each situation has the <b>Hawaiian</b> (blue, tap to hear it) and the way <b>locals actually say it</b> in everyday English or Pidgin (orange). Use the Hawaiian with anyone. People light up when a newcomer tries.</p>
<div class="box green"><b>The daily habit</b>Every day, take the three phrases on the Today tab and say each one to a real person: a cashier, a neighbour, a coworker. Three real uses a day is about 600 by the time you leave.</div>

<h3>1. The ten you'll use every day</h3>
<table>
<tr><td class="fr">Aloha!</td><td>Hello / goodbye</td><td>everyone, all day</td></tr>
<tr><td class="fr">Mahalo (nui loa)</td><td>Thank you (very much)</td><td>every cashier, driver, server</td></tr>
<tr><td class="fr">ʻAʻole pilikia</td><td>No problem / you're welcome</td><td>when someone thanks you</td></tr>
<tr><td class="fr">Pehea ʻoe?</td><td>How are you?</td><td></td></tr>
<tr><td class="fr">Maikaʻi nō, a ʻo ʻoe?</td><td>Good, and you?</td><td></td></tr>
<tr><td class="fr">E kala mai</td><td>Excuse me / sorry</td><td>squeezing past, bumping someone</td></tr>
<tr><td class="fr">Hiki nō!</td><td>Sure! / Can do!</td><td>saying yes to anything</td></tr>
<tr><td class="fr">ʻOno!</td><td>Delicious!</td><td>every meal</td></tr>
<tr><td class="fr">Mālama pono</td><td>Take care</td><td>parting</td></tr>
<tr><td class="fr">A hui hou!</td><td>See you again!</td><td>parting</td></tr>
</table>

<h3>2. Meeting someone new</h3>
<table>
<tr><th>Hawaiian</th><th>English</th><th>Locals also say</th></tr>
<tr><td class="fr">ʻO wai kou inoa?</td><td>What's your name?</td><td class="pg">What's your name?</td></tr>
<tr><td class="fr">ʻO Oliver koʻu inoa.</td><td>My name is Oliver.</td><td></td></tr>
<tr><td class="fr">Hauʻoli ka launa ʻana!</td><td>Nice to meet you!</td><td class="pg">Nice meeting you, brah.</td></tr>
<tr><td class="fr">No hea mai ʻoe?</td><td>Where are you from?</td><td class="pg">You from here?</td></tr>
<tr><td class="fr">No Chicago mai au.</td><td>I'm from Chicago.</td><td></td></tr>
<tr><td class="fr">He malihini au.</td><td>I'm new here.</td><td class="pg">I just wen move here.</td></tr>
<tr><td class="fr">Ma hea ʻoe e noho ai?</td><td>Where do you live?</td><td class="pg">Where you stay living?</td></tr>
<tr><td class="fr">He aha kāu hana?</td><td>What do you do?</td><td class="pg">What you do for work?</td></tr>
<tr><td></td><td>Which high school did you go to?</td><td class="pg">What school you went?</td></tr>
</table>
<div class="box blue"><b>"What school you went?"</b>The classic local question. It means <b>high school</b>, and it's how people place each other. You're not from here, so just smile and say <i>"I'm from Chicago — I went to ___ High."</i> Then ask them back. People love telling you about their school.</div>

<h3>3. Keeping a conversation going</h3>
<p>Most of a real conversation is short reactions. Learn these and you can keep up long before you can say long sentences.</p>
<table>
<tr><td class="fr">He aha ka nūhou?</td><td>What's new?</td></tr>
<tr><td class="fr">ʻAʻohe nūhou.</td><td>Nothing new.</td></tr>
<tr><td class="fr">Pehea kou lā?</td><td>How's your day?</td></tr>
<tr><td class="fr">Pehea ka ʻohana?</td><td>How's the family?</td></tr>
<tr><td class="fr">ʻOiaʻiʻo?</td><td>Really?</td></tr>
<tr><td class="fr">Pololei!</td><td>Exactly! / Right!</td></tr>
<tr><td class="fr">Pēlā nō.</td><td>Same here. / That's how it is.</td></tr>
<tr><td class="fr">Malia paha.</td><td>Maybe.</td></tr>
<tr><td class="fr">ʻAʻole au i ʻike.</td><td>I don't know.</td></tr>
<tr><td class="fr">He aha kou manaʻo?</td><td>What do you think?</td></tr>
<tr><td class="fr">No ke aha?</td><td>Why?</td></tr>
<tr><td class="fr">ʻO wai kēlā?</td><td>Who's that?</td></tr>
<tr><td class="pg">Ho, brah!</td><td>Whoa! (surprise)</td></tr>
<tr><td class="pg">Fo real?</td><td>Seriously?</td></tr>
<tr><td class="pg">Shoots.</td><td>Sounds good.</td></tr>
</table>

<h3>4. When you're lost (use these without shame)</h3>
<table>
<tr><td class="fr">Ke aʻo nei au i ka ʻōlelo Hawaiʻi.</td><td>I'm learning Hawaiian.</td></tr>
<tr><td class="fr">ʻAʻole maopopo iaʻu.</td><td>I don't understand.</td></tr>
<tr><td class="fr">E ʻōlelo hou mai, e ʻoluʻolu.</td><td>Please say that again.</td></tr>
<tr><td class="fr">Hiki iā ʻoe ke ʻōlelo mālie?</td><td>Can you speak slowly?</td></tr>
<tr><td class="fr">He aha ka ʻōlelo Hawaiʻi no "beach"?</td><td>What's the Hawaiian for "beach"?</td></tr>
<tr><td class="fr">He aha kēia?</td><td>What's this?</td></tr>
</table>
<div class="box"><b>The magic question</b><span class="fr">He aha ka ʻōlelo Hawaiʻi no ___?</span> turns every Hawaiian speaker you meet into a teacher. Ask it once a day, then write the answer into a note on your phone.</div>

<h3>5. Making plans and texting</h3>
<table>
<tr><td class="fr">E hele kāua i kahakai!</td><td>Let's go to the beach (you and me)!</td></tr>
<tr><td class="fr">Hiki nō! / ʻAʻole hiki.</td><td>Sure! / I can't.</td></tr>
<tr><td class="fr">I ka hola ʻehia?</td><td>At what time?</td></tr>
<tr><td class="fr">I ka hola ʻelima.</td><td>At five.</td></tr>
<tr><td class="fr">Aia i hea ʻoe?</td><td>Where are you?</td></tr>
<tr><td class="fr">Aia au ma ka hale.</td><td>I'm at home.</td></tr>
<tr><td class="pg">You going?</td><td>Are you coming?</td></tr>
<tr><td class="pg">Try wait, I coming.</td><td>Hang on, I'm on my way.</td></tr>
<tr><td class="pg">Can or not?</td><td>Can you, or not?</td></tr>
<tr><td class="pg">Shoots den, laters.</td><td>OK then, see you.</td></tr>
</table>

<h3>6. How you feel</h3>
<p>Feeling first, then <b>au</b> (I). Add <b>loa</b> for "very".</p>
<table>
<tr><td class="fr">Pōloli au.</td><td>I'm hungry.</td><td class="fr">Makewai au.</td><td>I'm thirsty.</td></tr>
<tr><td class="fr">Māluhiluhi au.</td><td>I'm tired.</td><td class="fr">Hauʻoli au.</td><td>I'm happy.</td></tr>
<tr><td class="fr">Wela loa!</td><td>So hot!</td><td class="fr">Ke ua nei.</td><td>It's raining.</td></tr>
<tr><td class="fr">Nani loa!</td><td>So beautiful!</td><td class="fr">Maikaʻi loa!</td><td>Great!</td></tr>
</table>

<h3>7. At someone's home</h3>
<table>
<tr><td class="fr">E komo mai! E noho mai.</td><td>Come in! Have a seat.</td><td>what you'll hear</td></tr>
<tr><td class="fr">Hele mai e ʻai!</td><td>Come eat!</td><td>what you'll hear</td></tr>
<tr><td class="fr">Hiki iaʻu ke kōkua?</td><td>Can I help?</td><td>always offer</td></tr>
<tr><td class="fr">Mahalo no ka ʻai. ʻOno loa!</td><td>Thanks for the food. Delicious!</td><td>before you leave</td></tr>
<tr><td class="fr">Mahalo no kou kōkua.</td><td>Thanks for your help.</td><td></td></tr>
</table>
<div class="box green"><b>House rules nobody tells you</b>Shoes off at the door. Bring something (a dessert or drinks). Call older people <b>Aunty</b> and <b>Uncle</b>. Let the kūpuna eat first. When someone offers you a plate to take home, say yes.</div>

<h3>8. Holidays while you're here</h3>
<table>
<tr><td class="fr">Mele Kalikimaka!</td><td>Merry Christmas!</td><td>December</td></tr>
<tr><td class="fr">Hauʻoli Makahiki Hou!</td><td>Happy New Year!</td><td>January 1</td></tr>
<tr><td class="fr">Hauʻoli lā hānau!</td><td>Happy birthday!</td><td>any time</td></tr>
<tr><td><b>Lei Day</b></td><td>"May Day is Lei Day in Hawaiʻi." Wear or give a lei.</td><td>May 1</td></tr>
</table>

<h3>9. Goodbyes</h3>
<table>
<tr><td class="fr">A hui hou!</td><td>See you again!</td><td class="pg">Laters!</td></tr>
<tr><td class="fr">A hui hou kākou!</td><td>See you all!</td><td class="pg">K, laters everybody.</td></tr>
<tr><td class="fr">Mālama pono!</td><td>Take care!</td><td class="pg">Take care, ah.</td></tr>
<tr><td class="fr">Aloha ʻoe.</td><td>Farewell (to one person).</td><td></td></tr>
</table>
`},

{id:"seven", title:"Your 7 Months on Island", sub:"November to May: what to learn each month, and what you'll be able to say by the end", tag:"Your plan", body:`
<p>You're in Hawaiʻi for about seven months, from November 2026 to early June 2027. Here's how to get from "Aloha, mahalo" to <b>real conversation</b> in that time.</p>

<div class="box red"><b>The honest part</b>Day to day, most people on the islands speak <b>English and Pidgin</b>, sprinkled with Hawaiian words. Fluent Hawaiian speakers exist (immersion-school families, teachers, kūpuna, musicians), but you have to look for them. So there are two goals here:<br>
<b>1. Local English and Pidgin:</b> understand all of it, sound natural in it. Very reachable in 7 months.<br>
<b>2. Conversational Hawaiian (about A2):</b> chat about yourself, your day, food, plans and simple stories. Reachable in 7 months <b>only</b> with more than the 20-minute lesson. Plan on about 45 minutes a day in total (see below).</div>

<h3>The daily routine (about 45 minutes, most of it in time you already have)</h3>
<table>
<tr><td style="width:96px"><b>20 min</b></td><td>The day's lesson in this app. The timer runs it for you.</td></tr>
<tr><td><b>5 min</b></td><td>Today's Phrases (on the Today tab). Say each one to a real person.</td></tr>
<tr><td><b>10 min</b></td><td><b>Chat tab</b>, 3 times a week. Start with "Casual Chat in Hawaiian" and "Introduce Yourself".</td></tr>
<tr><td><b>15 min</b></td><td>Listening while you drive, cook or work out: Hawaiian music, Ke Aolama news, Pidgin comedy on YouTube.</td></tr>
</table>

<h3>Month by month</h3>
<table>
<tr><th>Month</th><th>Lessons</th><th>What you'll be able to do</th><th>Real-world mission</th></tr>
<tr><td><b>1 · November</b></td><td>Days 1–30</td><td>Pronounce everything, greet anyone, introduce yourself, numbers, the local words</td><td>Say aloha and mahalo to every cashier. Say every place name right. Introduce yourself in Hawaiian to one person.</td></tr>
<tr><td><b>2 · December</b></td><td>Days 31–60</td><td>Order food, shop, ask directions, beach and weather talk, say what you did</td><td>Order a plate lunch the local way. Farmers' market in Hawaiian. Mele Kalikimaka to everyone.</td></tr>
<tr><td><b>3 · January</b></td><td>Days 61–90</td><td>Talk about your life, plans and family; culture and protocol; final 10-minute talk story</td><td>Find a beginner Hawaiian class or conversation group (community colleges, libraries and Hawaiian civic clubs run them).</td></tr>
<tr><td><b>4 · February</b></td><td>Stage 2 (A2)</td><td>Longer stories, opinions, asking favours, the two kinds of "my"</td><td>One 30-minute talk story in Hawaiian a week, with a class partner, tutor or speaker you met.</td></tr>
<tr><td><b>5 · March</b></td><td>Stage 2</td><td>Mele (songs) and ʻōlelo noʻeau (proverbs). Understand what a song is saying.</td><td>Learn one mele by heart and know what every line means.</td></tr>
<tr><td><b>6 · April</b></td><td>Stage 2</td><td>Follow slower native speech; Pidgin at full speed</td><td>Watch the Merrie Monarch hula festival (early April, broadcast live) and follow parts of the Hawaiian commentary.</td></tr>
<tr><td><b>7 · May</b></td><td>Stage 2 review</td><td>Hold a relaxed 20–30 minute conversation, mostly in Hawaiian</td><td>Lei Day, May 1. Final talk story with a fluent speaker before you leave.</td></tr>
</table>
<p class="muted">Stage 2 isn't written yet. When you reach Day 90, tell Claude <b>"start Hawaiian stage 2"</b> and it gets built around what you've found hard.</p>

<h3>Where to find Hawaiian speakers</h3>
<ul>
<li><b>A class.</b> Community colleges, public libraries and Hawaiian civic clubs often run evening beginner classes. One class a week doubles your speaking time.</li>
<li><b>Ask.</b> When someone uses a Hawaiian word, ask <span class="fr">He aha ka ʻōlelo Hawaiʻi no ___?</span> Speakers are often happy to help someone who's trying.</li>
<li><b>Music and events.</b> Kanikapila (jam sessions), hula performances, and cultural events at museums and parks.</li>
<li><b>Media.</b> Ke Aolama (short news in Hawaiian), ʻŌiwi TV, Hawaiian radio shows, and Duolingo Hawaiian as a daily add-on.</li>
</ul>

<h3>How you'll know it's working</h3>
<table>
<tr><td><b>End of November</b></td><td>You can introduce yourself for 30 seconds in Hawaiian without notes.</td></tr>
<tr><td><b>End of January</b></td><td>You can hold a 10-minute simple talk story and get through a Chat scene without switching to English.</td></tr>
<tr><td><b>End of March</b></td><td>You understand most of a slow conversation between two speakers, and every word of everyday Pidgin.</td></tr>
<tr><td><b>End of May</b></td><td>20–30 minutes of real conversation, mostly in Hawaiian, about your life here.</td></tr>
</table>
`},

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
 [4,"Helu — numbers 1 to 10","Counting, swapping phone numbers, asking 'how many?' and 'how much?'."],
 [5,"Kēia, kēlā — this and that","Point, ask, choose: He aha kēlā? ʻO kēhea? Plus ka, ke and nā (the)."],
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

HAW_LESSONS[4] = {
title:"Helu — numbers 1 to 10",
mins:20, goal:"Count to ten, swap phone numbers, and ask 'how many?' and 'how much?' in a real conversation.",
body:`
<h3>Why numbers, this early</h3>
<p>Numbers come up in almost every real exchange: a phone number at a party, a price at the market, how many kids someone has, what time to meet. Today you learn 1 to 10 and three questions that use them.</p>

<h3>1. One to ten</h3>
<p>Every number from 1 to 9 starts with <b>ʻe-</b> (a glottal stop, then "eh"). Ten is the odd one out.</p>
<table>
<tr><td class="fr">ʻekahi</td><td>1</td><td class="fr">ʻeono</td><td>6</td></tr>
<tr><td class="fr">ʻelua</td><td>2</td><td class="fr">ʻehiku</td><td>7</td></tr>
<tr><td class="fr">ʻekolu</td><td>3</td><td class="fr">ʻewalu</td><td>8</td></tr>
<tr><td class="fr">ʻehā</td><td>4</td><td class="fr">ʻeiwa</td><td>9</td></tr>
<tr><td class="fr">ʻelima</td><td>5</td><td class="fr">ʻumi</td><td>10</td></tr>
</table>
<p>And <span class="fr">ʻole</span> is zero. It also means "without" or "not", the same word you'll see in <i>ʻaʻole</i>.</p>
<div class="box blue"><b>Where you'll hear these first</b>At any hula class or performance: <span class="fr">ʻEkahi, ʻelua, ʻekolu, ʻehā!</span> is the count the kumu calls out to start the dancers.</div>

<h3>2. Sound tips</h3>
<ul>
<li><span class="fr">ʻewalu</span> (8): the <b>w</b> after <i>e</i> sounds like a soft <b>v</b>: eh-VAH-loo.</li>
<li><span class="fr">ʻehā</span> (4): the line on the <b>ā</b> makes it long: eh-HAAH.</li>
<li><span class="fr">ʻumi</span> (10): start with that little catch in the throat, like "uh-oh".</li>
</ul>

<h3>3. "How many?" — ʻEhia?</h3>
<p><span class="fr">ʻEhia</span> means "how many" or "how much". Put the thing after it.</p>
<table>
<tr><td class="fr">ʻEhia āu keiki?</td><td>How many kids do you have?</td></tr>
<tr><td class="fr">ʻElua aʻu keiki.</td><td>I have two kids.</td></tr>
<tr><td class="fr">ʻAʻohe aʻu keiki.</td><td>I don't have kids.</td></tr>
<tr><td class="fr">ʻEhia ou makahiki?</td><td>How old are you? (lit. how many your years?)</td></tr>
<tr><td class="fr">ʻEhiku ona makahiki.</td><td>He/she is seven.</td></tr>
</table>
<p class="muted">Adult ages need numbers above ten, which come on Day 29. For now, kids' ages are the perfect practice.</p>

<h3>4. "How much?" — ʻEhia kālā?</h3>
<p><span class="fr">kālā</span> = dollar, money (it comes from "dollar").</p>
<table>
<tr><td class="fr">ʻEhia kālā?</td><td>How many dollars? / How much?</td></tr>
<tr><td class="fr">ʻElima kālā.</td><td>Five dollars.</td></tr>
<tr><td class="fr">ʻElua maiʻa, e ʻoluʻolu.</td><td>Two bananas, please.</td></tr>
<tr><td class="fr">ʻEkahi wale nō.</td><td>Just one.</td></tr>
</table>

<h3>5. Swapping phone numbers</h3>
<p>Phone numbers are said one digit at a time, just like in English.</p>
<table>
<tr><td class="fr">He aha kou helu kelepona?</td><td>What's your phone number?</td></tr>
<tr><td class="fr">ʻEwalu, ʻole, ʻewalu…</td><td>8, 0, 8… (Hawaiʻi's area code)</td></tr>
</table>

<h3>6. How locals actually say it</h3>
<p>In everyday local English, numbers stay in English, but notice the Pidgin habits:</p>
<table>
<tr><td class="pg">Can I get one plate lunch?</td><td><b>one</b> instead of "a"</td></tr>
<tr><td class="pg">How much dis?</td><td>How much is this?</td></tr>
<tr><td class="pg">Two scoop rice</td><td>never "two scoops"</td></tr>
<tr><td class="pg">Get choke people today.</td><td>There are tons of people today.</td></tr>
</table>

<h3>A real exchange — read it out loud</h3>
<table>
<tr><td><b>Kaʻiulani</b></td><td class="fr">Aloha! He aha kou makemake?</td><td>Hi! What would you like?</td></tr>
<tr><td><b>You</b></td><td class="fr">Aloha! ʻEkolu maiʻa, e ʻoluʻolu. ʻEhia kālā?</td><td>Hi! Three bananas, please. How much?</td></tr>
<tr><td><b>Kaʻiulani</b></td><td class="fr">ʻElua kālā.</td><td>Two dollars.</td></tr>
<tr><td><b>You</b></td><td class="fr">Mahalo nui!</td><td>Thanks so much!</td></tr>
<tr><td><b>Kaʻiulani</b></td><td class="fr">ʻAʻole pilikia. A hui hou!</td><td>No problem. See you!</td></tr>
</table>
`,
homework:[
 {t:"Count everything", d:"Count 10 real things out loud in Hawaiian: steps, plates, palm trees, cars at a light."},
 {t:"Your number", d:"Say your own phone number in Hawaiian three times, digit by digit, without looking."},
 {t:"ʻEhia kālā?", d:"Next time you buy something, say the price to yourself in Hawaiian (if it's under $10), then say mahalo out loud."},
 {t:"Chat practice", d:"Open the Chat tab and do 'Farmers' Market'. Buy at least two things and ask the price."}
],
quiz:[
 {t:"mc", q:"<b>ʻekolu</b> is…", a:["3","2","4","8"], c:0, why:"ʻekahi 1, ʻelua 2, <b>ʻekolu 3</b>."},
 {t:"mc", q:"<b>ʻewalu</b> is…", a:["8","6","7","9"], c:0, why:"ʻewalu = 8, said eh-VAH-loo."},
 {t:"mc", q:"Which number does NOT start with ʻe-?", a:["ʻumi (10)","ʻelima (5)","ʻeiwa (9)","ʻehā (4)"], c:0, why:"Ten is <b>ʻumi</b>. 1–9 all start with ʻe-."},
 {t:"mc", q:"<b>ʻEhia kālā?</b> means…", a:["How much? (how many dollars)","Where's the money?","Is it free?","Five dollars"], c:0, why:"ʻEhia = how many/much, kālā = dollar."},
 {t:"mc", q:"<b>ʻEhia āu keiki?</b> means…", a:["How many kids do you have?","How old is your kid?","Where are your kids?","Are those your kids?"], c:0, why:"ʻEhia + āu (your) + keiki (kids)."},
 {t:"mc", q:"How do you say <b>zero</b> in a phone number?", a:["ʻole","ʻumi","ʻekahi","ʻaʻole"], c:0, why:"<b>ʻole</b> = zero / without."},
 {t:"mc", q:"<b>ʻEkahi wale nō</b> means…", a:["Just one","One more","The first one","Only ten"], c:0, why:"wale nō = only, just."},
 {t:"mc", q:"A local at a counter says <b>\"Can I get one plate lunch?\"</b> Why \"one\"?", a:["In Pidgin, 'one' does the job of 'a'","They want exactly one, not two","It's rude to say 'a'","It's a Hawaiian word"], c:0, why:"Pidgin uses <b>one</b> as the article: one dog, one plate, one shark."},
 {t:"mc", q:"<b>He aha kou helu kelepona?</b> asks for…", a:["Your phone number","Your age","Your address","Your name"], c:0, why:"helu = number, kelepona = telephone."},
 {t:"type", q:"Write the Hawaiian for <b>5</b>.", ans:["ʻelima","'elima","elima"], why:"<b>ʻelima</b>."},
 {t:"type", q:"Write the Hawaiian for <b>10</b>.", ans:["ʻumi","'umi","umi"], why:"<b>ʻumi</b>."},
 {t:"listen", play:"ʻElua maiʻa, e ʻoluʻolu.", q:"Listen, then choose what you heard.", a:["Two bananas, please.","Two dollars, please.","Ten bananas.","How many bananas?"], c:0, why:"<b>ʻElua maiʻa, e ʻoluʻolu.</b>"},
 {t:"listen", play:"ʻEhia kālā?", q:"Listen, then choose what you heard.", a:["How much?","How many kids?","How old are you?","What time is it?"], c:0, why:"<b>ʻEhia kālā?</b>"}
]
};

HAW_LESSONS[5] = {
title:"Kēia, kēlā — this and that",
mins:20, goal:"Point at things and talk about them: what's this, which one, I want this one. Plus the three words for 'the'.",
body:`
<h3>The most useful words for a beginner</h3>
<p>When you don't know a word, you can still point. Today's words let you ask about anything you can see, and choose between things, in any shop, market or kitchen.</p>

<h3>1. Three kinds of "this / that"</h3>
<p>Hawaiian has one more than English. It cares about <b>who the thing is close to</b>.</p>
<table>
<tr><td class="fr">kēia</td><td>this (near me)</td></tr>
<tr><td class="fr">kēnā</td><td>that (near you)</td></tr>
<tr><td class="fr">kēlā</td><td>that (over there, away from both of us)</td></tr>
</table>

<h3>2. Asking about anything</h3>
<table>
<tr><td class="fr">He aha kēia?</td><td>What's this?</td></tr>
<tr><td class="fr">He maiʻa kēia.</td><td>This is a banana.</td></tr>
<tr><td class="fr">He aha kēnā?</td><td>What's that (by you)?</td></tr>
<tr><td class="fr">He aha kēlā?</td><td>What's that (over there)?</td></tr>
<tr><td class="fr">He honu kēlā!</td><td>That's a turtle!</td></tr>
</table>
<p>Same pattern as Day 3: <b>He + thing + who/what</b>. <i>He kumu au</i> (I'm a teacher), <i>He maiʻa kēia</i> (this is a banana).</p>

<h3>3. Choosing — ʻO kēhea?</h3>
<table>
<tr><td class="fr">ʻO kēhea?</td><td>Which one?</td></tr>
<tr><td class="fr">ʻO kēia.</td><td>This one.</td></tr>
<tr><td class="fr">ʻO kēlā.</td><td>That one (over there).</td></tr>
<tr><td class="fr">Makemake au i kēia.</td><td>I want this one.</td></tr>
<tr><td class="fr">ʻOno kēia!</td><td>This is delicious!</td></tr>
</table>

<h3>4. Time words built on kēia</h3>
<p>You'll use these in every conversation about plans:</p>
<table>
<tr><td class="fr">i kēia lā</td><td>today (this day)</td></tr>
<tr><td class="fr">i kēia pō</td><td>tonight (this night)</td></tr>
<tr><td class="fr">i kēia pule</td><td>this week</td></tr>
</table>
<p><span class="fr">Wela loa i kēia lā!</span> — It's so hot today!</p>

<h3>5. "The": ka, ke and nā</h3>
<table>
<tr><td class="fr">ke</td><td>before words starting with <b>k, e, a, o</b></td><td><span class="fr">ke kai</span> (the sea), <span class="fr">ke ala</span> (the road)</td></tr>
<tr><td class="fr">ka</td><td>everything else</td><td><span class="fr">ka wai</span> (the water), <span class="fr">ka hale</span> (the house)</td></tr>
<tr><td class="fr">nā</td><td>"the" for more than one, any word</td><td><span class="fr">nā keiki</span> (the kids), <span class="fr">nā maiʻa</span> (the bananas)</td></tr>
</table>
<div class="box"><b>Don't stress the rule</b>A few words break it (<span class="fr">ke ʻano</span>, "the kind"). If you pick the wrong one, everyone still understands you. Learn the common ones by ear: <i>ke kai, ka lā, ka ʻai, ka wai, ke kahakai</i>.</div>

<h3>6. How locals say it</h3>
<table>
<tr><td class="pg">Dis one or dat one?</td><td>This one or that one?</td></tr>
<tr><td class="pg">Which one you like?</td><td>Which one do you want?</td></tr>
<tr><td class="pg">Dis kine</td><td>this kind (of thing)</td></tr>
<tr><td class="pg">Da kine</td><td>whatchamacallit (for when the word won't come)</td></tr>
</table>

<h3>A real exchange — read it out loud</h3>
<table>
<tr><td><b>You</b></td><td class="fr">E kala mai, he aha kēlā?</td><td>Excuse me, what's that?</td></tr>
<tr><td><b>Seller</b></td><td class="fr">He lilikoʻi kēlā. ʻOno loa!</td><td>That's passion fruit. Really good!</td></tr>
<tr><td><b>You</b></td><td class="fr">A he aha kēia?</td><td>And what's this?</td></tr>
<tr><td><b>Seller</b></td><td class="fr">He ʻulu kēia.</td><td>That's breadfruit.</td></tr>
<tr><td><b>You</b></td><td class="fr">Makemake au i ka lilikoʻi. ʻElua, e ʻoluʻolu.</td><td>I'd like the passion fruit. Two, please.</td></tr>
<tr><td><b>Seller</b></td><td class="fr">Hiki nō!</td><td>Sure!</td></tr>
</table>
`,
homework:[
 {t:"Point and ask", d:"Walk around your home. Point at 10 things and ask 'He aha kēia?' or 'He aha kēlā?' out loud. Answer in English if you don't know the Hawaiian yet."},
 {t:"The magic question", d:"Ask one real person 'He aha ka ʻōlelo Hawaiʻi no ___?' about anything. Save the answer in a phone note."},
 {t:"Three distances", d:"Put a cup next to you, one across the table, and one across the room. Say kēia, kēnā, kēlā for each."},
 {t:"Chat practice", d:"In the Chat tab, do 'Casual Chat in Hawaiian' for 5 minutes. Use 'i kēia lā' at least twice."}
],
quiz:[
 {t:"mc", q:"<b>He aha kēia?</b> means…", a:["What's this?","Who's this?","Where is this?","Is this good?"], c:0, why:"He aha = what, kēia = this."},
 {t:"mc", q:"Which word means <b>that, over there</b> (away from both of you)?", a:["kēlā","kēia","kēnā","kēhea"], c:0, why:"kēia = near me, kēnā = near you, <b>kēlā</b> = over there."},
 {t:"mc", q:"Which word means <b>that, near you</b>?", a:["kēnā","kēlā","kēia","nā"], c:0, why:"<b>kēnā</b> points at something by the person you're talking to."},
 {t:"mc", q:"<b>ʻO kēhea?</b> means…", a:["Which one?","Who is it?","Where is it?","How much?"], c:0, why:"kēhea = which."},
 {t:"mc", q:"<b>Makemake au i kēia</b> means…", a:["I want this one","I like that one","This one is good","I don't want this"], c:0, why:"Makemake au i ___ = I want ___."},
 {t:"mc", q:"<b>i kēia pō</b> means…", a:["tonight","today","this week","this morning"], c:0, why:"pō = night. i kēia lā = today, i kēia pule = this week."},
 {t:"mc", q:"Which is right for <b>the sea</b>?", a:["ke kai","ka kai","nā kai","kēia kai"], c:0, why:"<b>ke</b> before words starting with k, e, a, o."},
 {t:"mc", q:"Which is right for <b>the water</b>?", a:["ka wai","ke wai","nā wai","he wai"], c:0, why:"<b>ka</b> before most letters, including w."},
 {t:"mc", q:"<b>nā keiki</b> means…", a:["the kids","a kid","this kid","no kids"], c:0, why:"<b>nā</b> = the, for more than one."},
 {t:"mc", q:"At a market a local asks <b>\"Dis one or dat one?\"</b> They mean…", a:["This one or that one?","Do you want a discount?","Is this yours?","Are you done?"], c:0, why:"Pidgin: dis = this, dat = that."},
 {t:"type", q:"Write the Hawaiian for <b>today</b> (3 words).", ans:["i kēia lā","i keia la","i kēia la","i keia lā"], why:"<b>i kēia lā</b> — literally 'on this day'."},
 {t:"type", q:"Answer the seller: <b>He aha kēia?</b> (it's a banana). <b>He ___ kēia.</b>", ans:["maiʻa","mai'a","maia"], why:"<b>He maiʻa kēia.</b>"},
 {t:"listen", play:"He honu kēlā!", q:"Listen, then choose what you heard.", a:["That's a turtle!","This is a fish!","What's that?","Where's the turtle?"], c:0, why:"<b>He honu kēlā!</b> honu = sea turtle."}
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
