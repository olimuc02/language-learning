/* ============================================================
   FRENCH — course data. Lessons are in lessons.js.
   ============================================================ */

/* ============================================================
   DATA — the 90 day plan
   ============================================================ */
const FR_PHASES = [
  {n:1, days:[1,21],  name:"Ears &amp; Mouth",            goal:"Stop sounding like an English speaker reading French. Survive a first meeting.", tag:"t-blue"},
  {n:2, days:[22,45], name:"Out in the World",            goal:"Handle real transactions — food, money, travel. The “survive France” phase.", tag:"t-gold"},
  {n:3, days:[46,66], name:"The Past &amp; The Future",   goal:"Escape the present tense. Start telling stories about your life.", tag:"t-red"},
  {n:4, days:[67,90], name:"Opinions &amp; Real Talk",    goal:"Sound like a person, not a phrasebook.", tag:"t-green"},
];

const FR_WEEK_GOALS = {
 1:{t:"Sounds and hellos",       g:"Introduce yourself and greet someone with a believable accent.", m:"Say a 30-second self-introduction out loud without reading it."},
 2:{t:"Being and having",        g:"Ask and answer basic personal questions.", m:"Answer 10 rapid-fire personal questions with zero English."},
 3:{t:"Doing things",            g:"Describe what you do in a normal day.", m:"Speak for 60 seconds about your day, unscripted."},
 4:{t:"Food and restaurants",    g:"Order a full meal and pay, no English.", m:"Role-play a restaurant scene with a fast-talking waiter."},
 5:{t:"Shopping and money",      g:"Buy clothes and groceries, handle prices.", m:"Survive a 15-exchange shopping role-play."},
 6:{t:"Getting around",          g:"Navigate a city you've never been to.", m:"Give directions from your hotel to a museum, in French."},
 7:{t:"The past tense",          g:"Say what you did yesterday and last weekend.", m:"Tell a 5-sentence story about last Saturday."},
 8:{t:"The other past tense",    g:"Describe how things used to be.", m:"Full A1 exam — vocab, grammar, listening, 60-word text."},
 9:{t:"Pronouns and the future", g:"Talk about plans without repeating nouns constantly.", m:"Describe next month in 8 sentences using pronouns."},
10:{t:"Opinions and connectors", g:"Give an opinion and back it up.", m:"Argue one side of a light debate for 2 minutes."},
11:{t:"Health and emergencies",  g:"Get help when something goes wrong.", m:"Pharmacy + police report role-play, unscripted."},
12:{t:"Politeness and nuance",   g:"Switch between formal and casual French.", m:"One formal phone call, one casual chat with a friend."},
13:{t:"Final exams",             g:"Prove the 90 days worked.", m:"15-minute unscripted oral exam, graded honestly."},
};

const FR_PLAN = [
 [1,"The four sounds English doesn't have","Nasal vowels, the French U, the throat R, and ZH. Plus bonjour, merci, au revoir."],
 [2,"Silent letters — the biggest rule","Why 'Paris' isn't 'Pariss'. Ça va ? and five ways to answer it."],
 [3,"Je suis, tu es, il est","Say your name, your job, where you're from."],
 [4,"Numbers 0 to 20","Age, phone numbers, how many."],
 [5,"Le, la, un, une","Why every object has a gender, and how to cope with it."],
 [6,"Conversation: a first meeting","A whole introduction, start to finish. No new grammar."],
 [7,"Review + Checkpoint 1","Everything from week 1, tested four ways."],
 [8,"Être in full","The most important verb in the language."],
 [9,"Avoir in full","In French you don't 'be' 40 — you 'have' 40 years."],
 [10,"Asking questions three ways","The lazy way, the normal way, the formal way."],
 [11,"Saying no: ne ... pas","The French negation sandwich."],
 [12,"Family and people","Your people, in French."],
 [13,"Conversation: family and work","Talk about Josh, Atlas, your day job."],
 [14,"Review + Checkpoint 2","Week 2 test."],
 [15,"Regular -er verbs","One pattern unlocks roughly a thousand verbs."],
 [16,"Aller + places in town","Where you're going and how you say it."],
 [17,"Faire + the weather","The verb French uses for everything."],
 [18,"Days, months, telling time","Scheduling anything."],
 [19,"Your daily routine","Reflexive verbs, gently — je me lève, je me couche."],
 [20,"Conversation: a typical Tuesday","Describe your whole day out loud."],
 [21,"Review + PHASE 1 EXAM","Three weeks of material, one test."],
 [22,"At the café: je voudrais","The single most useful phrase for a traveler."],
 [23,"The menu, top to bottom","Entrée, plat, dessert — and the false friends that trap English speakers."],
 [24,"Some, any: du, de la, des","How French says 'some bread' — it's mandatory, not optional."],
 [25,"The bill, tipping, sending things back","Ending a meal without awkwardness."],
 [26,"Food words that actually matter","The 40 foods you'll actually meet."],
 [27,"Conversation: a full restaurant scene","Arrive, order, complain, pay, leave."],
 [28,"Review + Checkpoint 4","Week 4 test."],
 [29,"Numbers 20 to 1000, and prices","Including the famously insane 70, 80, 90."],
 [30,"C'est combien ? Shopping basics","Asking, understanding the answer, paying."],
 [31,"Colors, sizes, materials","Describing what you want."],
 [32,"Trying on, returns, exchanges","Fitting rooms and 'do you have this in blue?'"],
 [33,"The market and the boulangerie","Quantities, weights, 'a bit more', 'that's all'."],
 [34,"Conversation: a shopping day","Three shops, three different tones."],
 [35,"Review + Checkpoint 5","Week 5 test."],
 [36,"Directions: left, right, straight on","Understanding the answer is the hard part."],
 [37,"Il y a + where things are","Next to, opposite, behind, between."],
 [38,"Transport and tickets","Metro, train, bus, taxi, airport."],
 [39,"Hotel check-in and problems","Booking, keys, wifi, 'the shower is broken'."],
 [40,"Asking for help politely","Excusez-moi… the phrases that open doors."],
 [41,"Conversation: arriving in a new city","Airport to hotel to dinner, all in French."],
 [42,"Review + Checkpoint 6","Week 6 test."],
 [43,"Phase 2 exam: listening and reading","Menus, signs, announcements."],
 [44,"Phase 2 exam: writing","A 60-word message to a hotel."],
 [45,"First French-only day","I speak French. English only if you're truly stuck."],
 [46,"The past tense: avoir + participle","J'ai mangé. The workhorse of spoken French."],
 [47,"Irregular past participles","The 20 that don't follow the pattern."],
 [48,"The 16 verbs that use être","Movement verbs, and the agreement trap."],
 [49,"Saying no and asking questions in the past","Where does 'pas' go now?"],
 [50,"Time markers: hier, la semaine dernière","Anchoring a story in time."],
 [51,"Conversation: what I did last weekend","Your first real storytelling."],
 [52,"Review + Checkpoint 7","Week 7 test."],
 [53,"The imparfait: how to build it","One ending set, almost no exceptions."],
 [54,"Descriptions and 'I used to'","Quand j'étais jeune…"],
 [55,"Passé composé vs imparfait","The rule that actually works: photo vs film."],
 [56,"Storytelling: mixing both tenses","Background and events together."],
 [57,"Childhood and memories vocabulary","Growing up, school, places you lived."],
 [58,"Conversation: tell me about growing up","Ten minutes, mostly French."],
 [59,"Review + CHECKPOINT 8 = A1 EXAM","The real milestone. 75% confirms A1."],
 [60,"Direct object pronouns: le, la, les","Je le vois. Stop repeating nouns."],
 [61,"Indirect object pronouns: lui, leur","Je lui parle. To whom?"],
 [62,"Y and en","The two little words French can't live without."],
 [63,"The near future: je vais faire","The easiest tense in the language."],
 [64,"The simple future","For plans, promises, and predictions."],
 [65,"Conversation: your plans and your business","Work vocabulary in a real conversation."],
 [66,"Review + Checkpoint 9","Week 9 test."],
 [67,"Giving opinions: je pense que…","And the five softer alternatives."],
 [68,"Because, but, so — connectors","How sentences get longer than five words."],
 [69,"Agreeing and disagreeing","Politely, and less politely."],
 [70,"Comparisons: plus, moins, aussi","Bigger, smaller, just as good."],
 [71,"Superlatives and strong reactions","The best, the worst, and how the French react."],
 [72,"Conversation: a light debate","Pick a side and defend it."],
 [73,"Review + Checkpoint 10","Week 10 test."],
 [74,"The body and where it hurts","J'ai mal à…"],
 [75,"At the pharmacy","The French pharmacy is a mini doctor's office."],
 [76,"At the doctor","Symptoms, history, instructions."],
 [77,"Emergencies: police, theft, lost things","The numbers to call and the words to say."],
 [78,"Complaining politely","The French are very good at this."],
 [79,"Conversation: a bad day in Paris","Everything goes wrong. In French."],
 [80,"Review + Checkpoint 11","Week 11 test."],
 [81,"The conditional: je voudrais, pourriez-vous","Politeness is a verb tense in French."],
 [82,"Il faut, on doit — obligation","What you have to do."],
 [83,"The subjunctive, gently","Just the six phrases that trigger it."],
 [84,"Tu vs vous, and real slang","Register: the thing textbooks skip."],
 [85,"Phone calls and emails","Openings and sign-offs that sound native."],
 [86,"Conversation: formal call, casual chat","Same content, two registers."],
 [87,"Review + Checkpoint 12","Week 12 test."],
 [88,"FINAL EXAM: listening and reading","Real French, at real speed."],
 [89,"FINAL EXAM: writing","150 words about your life."],
 [90,"FINAL ORAL EXAM","15 unscripted minutes. Honest grade at the end."],
];

/* ============================================================
   VOCABULARY BANK
   ============================================================ */
const FR_CATS = [
 ["greet","Greetings &amp; Politeness","👋"],
 ["people","People &amp; Family","👨‍👩‍👧"],
 ["food","Food &amp; Restaurant","🍽️"],
 ["shop","Shopping &amp; Money","🛍️"],
 ["travel","Travel &amp; Directions","🚉"],
 ["work","Work &amp; Business","💼"],
 ["health","Health &amp; Emergency","🚑"],
 ["time","Time &amp; Numbers","🕐"],
 ["home","Home &amp; Everyday","🏠"],
 ["glue","Conversation Glue","🔗"],
 ["verbs","Core Verbs","⚡"],
];

const FR_VOCAB = [
// --- greetings & politeness
["Bonjour","bohn-ZHOOR","Hello / Good day","greet","Bonjour, madame.","Hello, ma'am.","'bon' = good, 'jour' = day",1],
["Bonsoir","bohn-SWAHR","Good evening","greet","Bonsoir, monsieur.","Good evening, sir.","",1],
["Salut","sa-LÜ","Hi / Bye (casual)","greet","Salut, ça va ?","Hi, how's it going?","Friends only",1],
["Au revoir","oh ruh-VWAHR","Goodbye","greet","Au revoir et merci !","Goodbye and thank you!","'until re-seeing'",1],
["Merci","mehr-SEE","Thank you","greet","Merci beaucoup !","Thank you very much!","Sounds like 'mercy'",1],
["S'il vous plaît","seel voo PLEH","Please (formal)","greet","Un café, s'il vous plaît.","A coffee, please.","'if it pleases you'",1],
["De rien","duh ree-AN","You're welcome","greet","— Merci ! — De rien.","— Thanks! — No problem.","literally 'of nothing'",2],
["Pardon","par-DOHN","Sorry / Excuse me","greet","Pardon, je suis désolé.","Sorry, I'm sorry.","",1],
["Excusez-moi","ex-kü-zay MWAH","Excuse me","greet","Excusez-moi, où sont les toilettes ?","Excuse me, where's the bathroom?","",2],
["Oui","wee","Yes","greet","Oui, bien sûr.","Yes, of course.","",1],
["Non","nohn","No","greet","Non, merci.","No, thank you.","",1],
["Ça va ?","sa VA","How's it going?","greet","Salut ! Ça va ?","Hi! How's it going?","literally 'it goes?'",2],
["Ça va bien","sa va bee-AN","I'm doing well","greet","Ça va bien, merci.","I'm well, thanks.","",2],
["Comment allez-vous ?","kom-mahn ta-lay VOO","How are you? (formal)","greet","Bonjour, comment allez-vous ?","Hello, how are you?","",2],
["Enchanté","ahn-shahn-TAY","Nice to meet you","greet","Enchanté, je m'appelle Oliver.","Nice to meet you, I'm Oliver.","'enchanted'",3],
["Je m'appelle","zhuh ma-PELL","My name is","greet","Je m'appelle Oliver.","My name is Oliver.","'I call myself'",3],
["Bienvenue","bee-an-vuh-NÜ","Welcome","greet","Bienvenue en France !","Welcome to France!","'well come'",6],
["Bonne journée","bun zhoor-NAY","Have a good day","greet","Au revoir, bonne journée !","Bye, have a good day!","",2],
["Désolé","day-zo-LAY","Sorry","greet","Je suis désolé, je ne comprends pas.","I'm sorry, I don't understand.","'desolate'",2],
["Je ne comprends pas","zhuh nuh kohn-PRAHN pa","I don't understand","greet","Pardon, je ne comprends pas.","Sorry, I don't understand.","Your #1 survival phrase",2],
["Parlez-vous anglais ?","par-lay voo ahn-GLEH","Do you speak English?","greet","Excusez-moi, parlez-vous anglais ?","Excuse me, do you speak English?","",2],
["Répétez, s'il vous plaît","ray-pay-TAY seel voo pleh","Please repeat","greet","Plus lentement, répétez s'il vous plaît.","Slower, please repeat.","",2],

// --- people & family
["l'homme","LOM","man","people","C'est un homme sympa.","He's a nice man.","",12],
["la femme","la FAM","woman / wife","people","Ma femme s'appelle Anna.","My wife's name is Anna.","'femme' → feminine",12],
["le garçon","luh gar-SOHN","boy","people","Le garçon joue dehors.","The boy is playing outside.","also 'waiter', old-fashioned",12],
["la fille","la FEE-yuh","girl / daughter","people","J'ai une fille.","I have a daughter.","",12],
["l'ami / l'amie","la-MEE","friend","people","C'est mon ami Josh.","This is my friend Josh.","'amiable'",12],
["la famille","la fa-MEE-yuh","family","people","Ma famille est grande.","My family is big.","",12],
["le père","luh PEHR","father","people","Mon père travaille beaucoup.","My father works a lot.","'paternal'",12],
["la mère","la MEHR","mother","people","Ma mère est gentille.","My mother is kind.","'maternal'",12],
["le frère","luh FREHR","brother","people","J'ai un frère.","I have a brother.","'fraternal'",12],
["la sœur","la SUHR","sister","people","Ma sœur habite à Chicago.","My sister lives in Chicago.","'sorority'",12],
["les parents","lay pa-RAHN","parents","people","Mes parents sont en France.","My parents are in France.","",12],
["l'enfant","lahn-FAHN","child","people","Les enfants jouent.","The children are playing.","'infant'",12],
["le mari","luh ma-REE","husband","people","Son mari est médecin.","Her husband is a doctor.","'marital'",12],
["le voisin","luh vwa-ZAN","neighbor","people","Mon voisin est bruyant.","My neighbor is loud.","",12],
["le collègue","luh ko-LEG","colleague","people","Je déjeune avec un collègue.","I'm having lunch with a colleague.","",12],

// --- food & restaurant
["l'eau","LOH","water","food","Une carafe d'eau, s'il vous plaît.","A jug of tap water, please.","free in restaurants!",22],
["le pain","luh PAN","bread","food","Le pain est frais.","The bread is fresh.","nasal, no N sound",22],
["le café","luh ka-FAY","coffee / café","food","Un café, s'il vous plaît.","A coffee, please.","means espresso by default",22],
["le vin","luh VAN","wine","food","Un verre de vin rouge.","A glass of red wine.","'vine'",22],
["la bière","la bee-EHR","beer","food","Une bière pression.","A draft beer.","",22],
["le fromage","luh fro-MAHZH","cheese","food","Je voudrais du fromage.","I'd like some cheese.","",26],
["le poulet","luh poo-LEH","chicken","food","Le poulet rôti est excellent.","The roast chicken is excellent.","",26],
["le poisson","luh pwa-SOHN","fish","food","Je préfère le poisson.","I prefer fish.","",26],
["la viande","la vee-AHND","meat","food","Je ne mange pas de viande.","I don't eat meat.","",26],
["le légume","luh lay-GÜM","vegetable","food","Avec des légumes, s'il vous plaît.","With vegetables, please.","'legume'",26],
["le petit-déjeuner","luh puh-tee day-zhuh-NAY","breakfast","food","Le petit-déjeuner est à sept heures.","Breakfast is at 7.","'little lunch'",26],
["le déjeuner","luh day-zhuh-NAY","lunch","food","On déjeune à midi.","We have lunch at noon.","",26],
["le dîner","luh dee-NAY","dinner","food","Le dîner est prêt.","Dinner is ready.","",26],
["l'addition","la-dee-see-OHN","the bill / check","food","L'addition, s'il vous plaît.","The check, please.","'addition' of what you owe",25],
["la carte","la KART","the menu","food","La carte, s'il vous plaît.","The menu, please.","NOT 'le menu' — that's a set meal",23],
["l'entrée","lahn-TRAY","starter / appetizer","food","Une entrée et un plat.","A starter and a main.","FALSE FRIEND — not the main course",23],
["le plat","luh PLA","main course","food","Quel est le plat du jour ?","What's today's special?","",23],
["le dessert","luh day-SEHR","dessert","food","Un dessert pour finir ?","A dessert to finish?","",23],
["Je voudrais","zhuh voo-DREH","I would like","food","Je voudrais un café.","I'd like a coffee.","THE traveler phrase",22],
["l'addition svp","","(see l'addition)","food","","","",25],
["une table pour deux","ün TAH-bluh poor DUH","a table for two","food","Bonjour, une table pour deux ?","Hi, a table for two?","",27],
["délicieux","day-lee-see-UH","delicious","food","C'était délicieux !","That was delicious!","",27],
["l'allergie","la-lehr-ZHEE","allergy","food","J'ai une allergie aux noix.","I have a nut allergy.","",26],
["sans","sahn","without","food","Sans sucre, s'il vous plaît.","Without sugar, please.","",24],

// --- shopping & money
["combien","kohn-bee-AN","how much / how many","shop","C'est combien ?","How much is it?","",30],
["l'argent","lar-ZHAHN","money","shop","Je n'ai pas d'argent liquide.","I don't have cash.","also means 'silver'",30],
["la carte bancaire","la kart bahn-KEHR","debit/credit card","shop","Vous prenez la carte ?","Do you take card?","",30],
["cher","SHEHR","expensive","shop","C'est trop cher.","That's too expensive.","also 'dear'",30],
["pas cher","pa SHEHR","cheap","shop","C'est pas cher !","That's cheap!","",30],
["le magasin","luh ma-ga-ZAN","shop / store","shop","Le magasin ferme à 19h.","The shop closes at 7pm.","'magazine' = storehouse",30],
["la boulangerie","la boo-lahn-zhuh-REE","bakery","shop","Je vais à la boulangerie.","I'm going to the bakery.","",33],
["le marché","luh mar-SHAY","market","shop","Le marché est le samedi.","The market is on Saturday.","",33],
["la taille","la TIE-yuh","size (clothing)","shop","Vous avez la taille au-dessus ?","Do you have the next size up?","",31],
["essayer","ess-ay-YAY","to try on","shop","Je peux l'essayer ?","Can I try it on?","'essay' = attempt",32],
["la caisse","la KESS","checkout / till","shop","On paie à la caisse.","You pay at the checkout.","",30],
["le reçu","luh ruh-SÜ","receipt","shop","Vous voulez le reçu ?","Do you want the receipt?","'receipt'",32],
["rembourser","rahn-boor-SAY","to refund","shop","Je voudrais me faire rembourser.","I'd like a refund.","",32],
["ouvert / fermé","oo-VEHR / fehr-MAY","open / closed","shop","C'est ouvert le dimanche ?","Is it open on Sunday?","",30],
["Je regarde","zhuh ruh-GARD","I'm just looking","shop","Merci, je regarde.","Thanks, I'm just browsing.","polite brush-off",30],

// --- travel & directions
["où","OO","where","travel","Où est la gare ?","Where is the station?","",36],
["à gauche","a GOHSH","to the left","travel","Tournez à gauche.","Turn left.","",36],
["à droite","a DRWAT","to the right","travel","C'est à droite.","It's on the right.","",36],
["tout droit","too DRWA","straight ahead","travel","Allez tout droit.","Go straight on.","careful: droit ≠ droite",36],
["la gare","la GAR","train station","travel","La gare est loin ?","Is the station far?","",38],
["l'aéroport","la-ay-ro-POR","airport","travel","Je vais à l'aéroport.","I'm going to the airport.","",38],
["le billet","luh bee-YEH","ticket","travel","Un billet pour Lyon.","One ticket to Lyon.","",38],
["l'hôtel","lo-TEL","hotel","travel","L'hôtel est près d'ici.","The hotel is near here.","",39],
["la chambre","la SHAHN-bruh","room","travel","J'ai réservé une chambre.","I booked a room.","'chamber'",39],
["la clé","la KLAY","key","travel","La clé de la chambre douze.","The key for room 12.","",39],
["près de","preh duh","near","travel","C'est près du musée.","It's near the museum.","",37],
["loin de","lwan duh","far from","travel","C'est loin d'ici ?","Is it far from here?","",37],
["à côté de","a ko-TAY duh","next to","travel","À côté de la banque.","Next to the bank.","",37],
["en face de","ahn FASS duh","opposite","travel","En face de l'église.","Across from the church.","'in the face of'",37],
["il y a","eel ee A","there is / there are","travel","Il y a un métro ici ?","Is there a metro here?","spoken fast: 'ya'",37],
["la rue","la RÜ","street","travel","Dans la rue Victor Hugo.","On Victor Hugo street.","",36],
["le plan","luh PLAHN","map (of a city)","travel","Vous avez un plan ?","Do you have a map?","",36],
["la valise","la va-LEEZ","suitcase","travel","Ma valise est perdue.","My suitcase is lost.","",77],
["le train","luh TRAN","train","travel","Le train part à midi.","The train leaves at noon.","",38],
["la voiture","la vwa-TÜR","car","travel","On y va en voiture.","We're going by car.","",38],

// --- work & business
["le travail","luh tra-VYE","work","work","J'aime mon travail.","I like my job.","'travail' in English = hard labor",65],
["travailler","tra-vye-YAY","to work","work","Je travaille à Chicago.","I work in Chicago.","",15],
["l'entreprise","lahn-truh-PREEZ","company","work","J'ai une entreprise.","I own a company.","'enterprise'",65],
["le bureau","luh bü-ROH","office / desk","work","Je suis au bureau.","I'm at the office.","'bureau'",65],
["la réunion","la ray-ü-nee-OHN","meeting","work","J'ai une réunion à 10h.","I have a meeting at 10.","'reunion'",65],
["le client","luh klee-AHN","client / customer","work","Le client est content.","The client is happy.","",65],
["le projet","luh pro-ZHEH","project","work","Le projet avance bien.","The project is going well.","",65],
["l'argent / le salaire","luh sa-LEHR","salary","work","Le salaire est correct.","The pay is decent.","'salary'",65],
["l'infirmier / l'infirmière","lan-feer-mee-EHR","nurse","work","Ma femme est infirmière.","My wife is a nurse.","",65],
["le médecin","luh mayd-SAN","doctor","work","Je vais chez le médecin.","I'm going to the doctor.","'medicine'",76],
["l'entretien","lahn-truh-tee-AN","interview / maintenance","work","J'ai un entretien demain.","I have an interview tomorrow.","",65],
["envoyer","ahn-vwa-YAY","to send","work","Je vous envoie un email.","I'll send you an email.","'envoy'",85],

// --- health & emergency
["Au secours !","oh suh-KOOR","Help!","health","Au secours ! Appelez la police !","Help! Call the police!","",77],
["J'ai mal à…","zhay MAL a","My … hurts","health","J'ai mal à la tête.","I have a headache.","'I have pain at'",74],
["la tête","la TET","head","health","J'ai mal à la tête.","My head hurts.","",74],
["le ventre","luh VAHN-truh","stomach / belly","health","J'ai mal au ventre.","My stomach hurts.","",74],
["le dos","luh DOH","back","health","J'ai mal au dos.","My back hurts.","",74],
["malade","ma-LAD","sick","health","Je suis malade.","I'm sick.","'malady'",74],
["la pharmacie","la far-ma-SEE","pharmacy","health","Où est la pharmacie ?","Where's the pharmacy?","green cross sign",75],
["le médicament","luh may-dee-ka-MAHN","medicine","health","J'ai besoin d'un médicament.","I need medicine.","",75],
["l'hôpital","lo-pee-TAL","hospital","health","Emmenez-moi à l'hôpital.","Take me to the hospital.","",76],
["les urgences","lay zür-ZHAHNSS","emergency room","health","Allez aux urgences.","Go to the ER.","'urgencies'",76],
["la police","la po-LEESS","police","health","Appelez la police !","Call the police!","dial 17 in France",77],
["les pompiers","lay pohn-pee-AY","fire brigade / medics","health","Appelez les pompiers !","Call the fire brigade!","dial 18",77],
["volé","vo-LAY","stolen","health","On m'a volé mon sac.","My bag was stolen.","",77],
["perdu","pehr-DÜ","lost","health","J'ai perdu mon passeport.","I lost my passport.","",77],

// --- time & numbers
["un, deux, trois","an, DUH, TRWA","one, two, three","time","Un, deux, trois — allez !","One, two, three — go!","",4],
["quatre, cinq, six","KA-truh, SANK, SEESS","four, five, six","time","Il est six heures.","It's six o'clock.","",4],
["sept, huit, neuf, dix","SET, WEET, NUF, DEESS","seven, eight, nine, ten","time","Dix euros.","Ten euros.","",4],
["aujourd'hui","oh-zhoor-DWEE","today","time","Aujourd'hui, il fait beau.","Today the weather's nice.","'on the day of today'",18],
["demain","duh-MAN","tomorrow","time","À demain !","See you tomorrow!","",18],
["hier","ee-EHR","yesterday","time","Hier, j'ai travaillé.","Yesterday I worked.","",50],
["maintenant","man-tuh-NAHN","now","time","Je pars maintenant.","I'm leaving now.","",18],
["l'heure","LUHR","hour / o'clock","time","Il est quelle heure ?","What time is it?","'hour'",18],
["le matin","luh ma-TAN","morning","time","Le matin, je cours.","In the morning, I run.","",18],
["le soir","luh SWAHR","evening","time","Ce soir, on sort.","Tonight we're going out.","",18],
["la semaine","la suh-MEN","week","time","La semaine prochaine.","Next week.","",18],
["le mois","luh MWA","month","time","Le mois dernier.","Last month.","",18],
["l'année","la-NAY","year","time","Bonne année !","Happy new year!","",18],
["lundi","lan-DEE","Monday","time","On se voit lundi.","We'll see each other Monday.","all days end in -di",18],
["samedi","sam-DEE","Saturday","time","Samedi, je suis libre.","Saturday I'm free.","",18],
["toujours","too-ZHOOR","always","time","Je bois toujours du café.","I always drink coffee.","'all days'",19],
["souvent","soo-VAHN","often","time","Je vais souvent au marché.","I often go to the market.","",19],
["jamais","zha-MEH","never","time","Je ne fume jamais.","I never smoke.","",19],

// --- home & everyday
["la maison","la meh-ZOHN","house / home","home","Je rentre à la maison.","I'm going home.","'mansion'",19],
["l'appartement","la-par-tuh-MAHN","apartment","home","Mon appartement est petit.","My apartment is small.","",19],
["la cuisine","la kwee-ZEEN","kitchen / cooking","home","Je fais la cuisine.","I cook.","'cuisine'",19],
["la chambre","la SHAHN-bruh","bedroom","home","Ma chambre est en haut.","My bedroom is upstairs.","",19],
["la salle de bain","la sal duh BAN","bathroom","home","La salle de bain est là.","The bathroom is there.","",19],
["les toilettes","lay twa-LET","toilet","home","Où sont les toilettes ?","Where's the restroom?","always plural",19],
["le lit","luh LEE","bed","home","Je vais au lit.","I'm going to bed.","",19],
["la porte","la PORT","door","home","Ferme la porte.","Close the door.","'portal'",19],
["l'eau chaude","loh SHOHD","hot water","home","Il n'y a pas d'eau chaude.","There's no hot water.","",39],
["le téléphone","luh tay-lay-FON","phone","home","Mon téléphone est mort.","My phone is dead.","",19],
["le chien / le chat","luh shee-AN / luh SHA","dog / cat","home","J'ai un chien.","I have a dog.","",19],

// --- conversation glue
["et","AY","and","glue","Un café et un croissant.","A coffee and a croissant.","",68],
["mais","MEH","but","glue","C'est bon, mais cher.","It's good, but expensive.","",68],
["parce que","par-suh KUH","because","glue","Parce que je suis fatigué.","Because I'm tired.","",68],
["donc","DOHNK","so / therefore","glue","Il pleut, donc on reste.","It's raining, so we're staying.","",68],
["aussi","oh-SEE","also / too","glue","Moi aussi !","Me too!","",68],
["alors","a-LOR","so / then / well…","glue","Alors, on y va ?","So, shall we go?","the ultimate filler word",68],
["peut-être","puh-TET-ruh","maybe","glue","Peut-être demain.","Maybe tomorrow.","'can-be'",68],
["bien sûr","bee-an SÜR","of course","glue","Bien sûr !","Of course!","",69],
["d'accord","da-KOR","okay / agreed","glue","D'accord, à demain.","Okay, see you tomorrow.","'in accord'",69],
["je pense que","zhuh PAHNSS kuh","I think that","glue","Je pense que c'est vrai.","I think it's true.","'pensive'",67],
["à mon avis","a mon a-VEE","in my opinion","glue","À mon avis, c'est mieux.","In my opinion, it's better.","",67],
["par contre","par KOHN-truh","on the other hand","glue","Par contre, c'est cher.","On the other hand, it's expensive.","",68],
["quand même","kahn MEM","even so / still","glue","C'est cher, mais bon quand même.","It's expensive, but good even so.","very French",68],
["voilà","vwa-LA","there you go / that's it","glue","Voilà, c'est fini.","There, it's done.","used constantly",68],
["bon","BOHN","good / right then","glue","Bon, on commence.","Right, let's start.","",68],

// --- core verbs
["être","ET-ruh","to be","verbs","Je suis américain.","I am American.","irregular — memorize it",8],
["avoir","a-VWAHR","to have","verbs","J'ai deux enfants.","I have two children.","used for age & the past tense",9],
["aller","a-LAY","to go","verbs","Je vais au marché.","I'm going to the market.","also builds the future",16],
["faire","FEHR","to do / to make","verbs","Qu'est-ce que tu fais ?","What are you doing?","used for weather, sports, cooking",17],
["pouvoir","poo-VWAHR","to be able / can","verbs","Je peux vous aider ?","Can I help you?","",40],
["vouloir","voo-LWAHR","to want","verbs","Je veux un café.","I want a coffee.","'je voudrais' is politer",22],
["devoir","duh-VWAHR","to have to / must","verbs","Je dois partir.","I have to leave.","",82],
["savoir","sa-VWAHR","to know (a fact)","verbs","Je ne sais pas.","I don't know.","THE most useful sentence",40],
["connaître","ko-NEH-truh","to know (a person/place)","verbs","Je connais Paris.","I know Paris.","two verbs for 'know'",40],
["parler","par-LAY","to speak","verbs","Je parle un peu français.","I speak a little French.","regular -er",15],
["manger","mahn-ZHAY","to eat","verbs","On mange à midi.","We eat at noon.","",15],
["boire","BWAHR","to drink","verbs","Je bois de l'eau.","I drink water.","",22],
["habiter","a-bee-TAY","to live (somewhere)","verbs","J'habite à Chicago.","I live in Chicago.","'habitat'",15],
["prendre","PRAHN-druh","to take / to have (food)","verbs","Je prends un café.","I'll have a coffee.","used for ordering",22],
["voir","VWAHR","to see","verbs","Je vois.","I see.","",47],
["dire","DEER","to say","verbs","Qu'est-ce que tu dis ?","What are you saying?","",47],
["venir","vuh-NEER","to come","verbs","Tu viens avec nous ?","Are you coming with us?","",48],
["partir","par-TEER","to leave","verbs","Je pars demain.","I'm leaving tomorrow.","",48],
["acheter","ash-TAY","to buy","verbs","J'achète du pain.","I'm buying bread.","",30],
["payer","pay-YAY","to pay","verbs","Je paie par carte.","I'm paying by card.","",30],
["aimer","eh-MAY","to like / to love","verbs","J'aime le café.","I like coffee.","",15],
["chercher","shehr-SHAY","to look for","verbs","Je cherche la gare.","I'm looking for the station.","'search'",36],
["trouver","troo-VAY","to find / to think","verbs","Je trouve ça bien.","I think that's good.","",67],
["donner","do-NAY","to give","verbs","Donnez-moi l'addition.","Give me the bill.","'donate'",25],
["attendre","a-TAHN-druh","to wait","verbs","Attendez, s'il vous plaît.","Wait, please.","NOT 'attend'",40],
["comprendre","kohn-PRAHN-druh","to understand","verbs","Je comprends !","I understand!","'comprehend'",40],
];

/* ============================================================
   STUDY GUIDES / REVIEW SHEETS
   ============================================================ */
const FR_GUIDES = [
{id:"pron", title:"Pronunciation Cheat Sheet", sub:"Every French sound, with an English trick for each", tag:"Day 1+", body:`
<h3>The four hard sounds</h3>
<table>
<tr><th>Sound</th><th>How to make it</th><th>Example</th></tr>
<tr><td><b>Nasal</b> on/an/en/in/un</td><td>Say the vowel with air going through your <i>nose</i>. The N is never pronounced.</td><td class="fr">bon <span class="say">bohn</span> · vin <span class="say">van</span></td></tr>
<tr><td><b>u</b></td><td>Say "ee", then round your lips into a whistle. Tongue does not move.</td><td class="fr">tu <span class="say">tü</span> · salut <span class="say">sa-LÜ</span></td></tr>
<tr><td><b>r</b></td><td>Back of the throat, gentle gargle. Never the English "rrr".</td><td class="fr">merci · Paris</td></tr>
<tr><td><b>j / g+e,i</b></td><td>Like the "s" in <i>measure</i>. Never English "j".</td><td class="fr">je <span class="say">zhuh</span> · rouge</td></tr>
</table>

<h3>Letters that behave differently</h3>
<table>
<tr><th>Spelling</th><th>Sounds like</th><th>Example</th></tr>
<tr><td>ou</td><td>oo (as in food)</td><td class="fr">bonjour, vous</td></tr>
<tr><td>oi</td><td>wah</td><td class="fr">moi <span class="say">mwah</span>, trois</td></tr>
<tr><td>ai / ei</td><td>eh</td><td class="fr">français, mais</td></tr>
<tr><td>au / eau</td><td>oh</td><td class="fr">eau <span class="say">oh</span>, beau</td></tr>
<tr><td>eu</td><td>uh (lips rounded)</td><td class="fr">deux, peu</td></tr>
<tr><td>ch</td><td>sh</td><td class="fr">chat <span class="say">sha</span></td></tr>
<tr><td>gn</td><td>ny (as in canyon)</td><td class="fr">montagne</td></tr>
<tr><td>ill</td><td>ee-y</td><td class="fr">fille <span class="say">FEE-yuh</span></td></tr>
<tr><td>qu</td><td>k (never "kw")</td><td class="fr">qui <span class="say">kee</span></td></tr>
<tr><td>h</td><td>always silent</td><td class="fr">hôtel <span class="say">oh-TEL</span></td></tr>
<tr><td>é</td><td>ay</td><td class="fr">café</td></tr>
<tr><td>è / ê</td><td>eh</td><td class="fr">père, être</td></tr>
<tr><td>ç</td><td>s</td><td class="fr">ça <span class="say">sa</span></td></tr>
</table>

<h3>Silent letters — the big rule</h3>
<p>Final consonants are usually <b>silent</b>: <span class="fr">Paris</span> = <span class="say">pa-REE</span>, <span class="fr">petit</span> = <span class="say">puh-TEE</span>, <span class="fr">vous</span> = <span class="say">voo</span>.</p>
<div class="box"><b>The CaReFuL rule</b>The letters in <b>C, R, F, L</b> usually ARE pronounced at the end of a word: sa<b>c</b>, bonjou<b>r</b>, neu<b>f</b>, hôte<b>l</b>. Everything else, assume silent.</div>
<p>Also silent: final <b>-e</b> (<span class="fr">table</span> = <span class="say">TAH-bluh</span>, barely), final <b>-s</b> of plurals (<span class="fr">les amis</span> sounds the same as one ami, apart from the liaison).</p>

<h3>Liaison — words gluing together</h3>
<p>When a silent final consonant meets a word starting with a vowel, it wakes up and joins:</p>
<ul>
<li><span class="fr">vous êtes</span> → <span class="say">voo ZET</span> (the S becomes a Z)</li>
<li><span class="fr">les amis</span> → <span class="say">lay za-MEE</span></li>
<li><span class="fr">c'est un</span> → <span class="say">say tan</span></li>
</ul>
<p>This is why spoken French sounds like one long word. It's not you — it's genuinely glued together.</p>

<h3>Stress</h3>
<p>English stresses one syllable hard (<b>PHO</b>-to-graph). French stresses the <b>last</b> syllable of a phrase, lightly and evenly. Flatten your delivery and push slightly at the end: <span class="fr">un café au LAIT</span>.</p>
`},

{id:"survive", title:"The 20 Phrases That Get You Through France", sub:"If you learn nothing else, learn these", tag:"Emergency sheet", body:`
<p>Print this. It's genuinely enough to survive a two-week trip.</p>
<table>
<tr><th>French</th><th>Say it</th><th>Means</th></tr>
<tr><td class="fr">Bonjour / Bonsoir</td><td class="say">bohn-ZHOOR / bohn-SWAHR</td><td>Hello / Good evening</td></tr>
<tr><td class="fr">Merci beaucoup</td><td class="say">mehr-SEE boh-KOO</td><td>Thank you very much</td></tr>
<tr><td class="fr">S'il vous plaît</td><td class="say">seel voo PLEH</td><td>Please</td></tr>
<tr><td class="fr">Excusez-moi</td><td class="say">ex-kü-zay MWAH</td><td>Excuse me</td></tr>
<tr><td class="fr">Pardon</td><td class="say">par-DOHN</td><td>Sorry / coming through</td></tr>
<tr><td class="fr">Parlez-vous anglais ?</td><td class="say">par-lay voo ahn-GLEH</td><td>Do you speak English?</td></tr>
<tr><td class="fr">Je ne parle pas bien français</td><td class="say">zhuh nuh parl pa bee-AN frahn-SEH</td><td>I don't speak French well</td></tr>
<tr><td class="fr">Je ne comprends pas</td><td class="say">zhuh nuh kohn-PRAHN pa</td><td>I don't understand</td></tr>
<tr><td class="fr">Plus lentement, s'il vous plaît</td><td class="say">plü lahnt-MAHN</td><td>Slower, please</td></tr>
<tr><td class="fr">Je voudrais…</td><td class="say">zhuh voo-DREH</td><td>I would like…</td></tr>
<tr><td class="fr">C'est combien ?</td><td class="say">say kohn-bee-AN</td><td>How much is it?</td></tr>
<tr><td class="fr">L'addition, s'il vous plaît</td><td class="say">la-dee-see-OHN</td><td>The check, please</td></tr>
<tr><td class="fr">Où sont les toilettes ?</td><td class="say">oo sohn lay twa-LET</td><td>Where's the restroom?</td></tr>
<tr><td class="fr">Où est… ?</td><td class="say">oo EH</td><td>Where is…?</td></tr>
<tr><td class="fr">Je cherche…</td><td class="say">zhuh SHEHRSH</td><td>I'm looking for…</td></tr>
<tr><td class="fr">Vous prenez la carte ?</td><td class="say">voo pruh-NAY la KART</td><td>Do you take card?</td></tr>
<tr><td class="fr">Une carafe d'eau</td><td class="say">ün ka-RAF DOH</td><td>A jug of tap water (free)</td></tr>
<tr><td class="fr">C'est délicieux !</td><td class="say">say day-lee-see-UH</td><td>It's delicious!</td></tr>
<tr><td class="fr">Au secours !</td><td class="say">oh suh-KOOR</td><td>Help!</td></tr>
<tr><td class="fr">Au revoir, bonne journée !</td><td class="say">oh ruh-VWAHR, bun zhoor-NAY</td><td>Bye, have a good day!</td></tr>
</table>
<div class="box blue"><b>Emergency numbers in France</b>112 (all emergencies, works EU-wide) · 15 (ambulance) · 17 (police) · 18 (fire)</div>
`},

{id:"etre", title:"Être &amp; Avoir — Full Tables", sub:"The two verbs everything else is built on", tag:"Days 8–9", body:`
<h3>ÊTRE — to be</h3>
<table>
<tr><th>French</th><th>Say it</th><th>English</th></tr>
<tr><td class="fr">je suis</td><td class="say">zhuh SWEE</td><td>I am</td></tr>
<tr><td class="fr">tu es</td><td class="say">tü EH</td><td>you are (friend)</td></tr>
<tr><td class="fr">il / elle est</td><td class="say">eel / ell EH</td><td>he / she is</td></tr>
<tr><td class="fr">nous sommes</td><td class="say">noo SOM</td><td>we are</td></tr>
<tr><td class="fr">vous êtes</td><td class="say">voo ZET</td><td>you are (formal/plural)</td></tr>
<tr><td class="fr">ils / elles sont</td><td class="say">eel / ell SOHN</td><td>they are</td></tr>
</table>
<p><b>Used for:</b> identity, nationality, jobs, permanent descriptions, location.<br>
<span class="fr">Je suis américain. Je suis fatigué. Il est à Paris.</span></p>

<h3>AVOIR — to have</h3>
<table>
<tr><th>French</th><th>Say it</th><th>English</th></tr>
<tr><td class="fr">j'ai</td><td class="say">ZHAY</td><td>I have</td></tr>
<tr><td class="fr">tu as</td><td class="say">tü A</td><td>you have</td></tr>
<tr><td class="fr">il / elle a</td><td class="say">eel A</td><td>he / she has</td></tr>
<tr><td class="fr">nous avons</td><td class="say">noo za-VOHN</td><td>we have</td></tr>
<tr><td class="fr">vous avez</td><td class="say">voo za-VAY</td><td>you have</td></tr>
<tr><td class="fr">ils / elles ont</td><td class="say">eel ZOHN</td><td>they have</td></tr>
</table>
<div class="box red"><b>Watch out</b><span class="fr">ils sont</span> (they are) vs <span class="fr">ils ont</span> (they have) — the only difference in speech is a Z sound: <span class="say">eel SOHN</span> vs <span class="say">eel ZOHN</span>. Learners mix these up constantly.</div>

<h3>Where French uses AVOIR but English uses "be"</h3>
<table>
<tr><th>French (literally)</th><th>Real meaning</th></tr>
<tr><td class="fr">J'ai 40 ans</td><td>I'm 40 (I <i>have</i> 40 years)</td></tr>
<tr><td class="fr">J'ai faim</td><td>I'm hungry (I have hunger)</td></tr>
<tr><td class="fr">J'ai soif</td><td>I'm thirsty</td></tr>
<tr><td class="fr">J'ai froid / chaud</td><td>I'm cold / hot</td></tr>
<tr><td class="fr">J'ai peur</td><td>I'm afraid</td></tr>
<tr><td class="fr">J'ai raison / tort</td><td>I'm right / wrong</td></tr>
<tr><td class="fr">J'ai besoin de…</td><td>I need…</td></tr>
</table>
<p>Saying <span class="fr">je suis 40</span> is a classic beginner error and sounds very strange to a French ear.</p>
`},

{id:"gender", title:"Gender &amp; Articles — Coping Strategies", sub:"Le, la, un, une, du, des — the whole system", tag:"Day 5+", body:`
<h3>The situation</h3>
<p>Every French noun is masculine or feminine. A table is feminine. A book is masculine. There is no logic. English has nothing like this — the closest thing is remembering that a ship is "she".</p>
<div class="box green"><b>The only rule that matters</b>Never learn a noun alone. Learn <span class="fr">le pain</span>, not <i>pain</i>. Learn <span class="fr">la table</span>, not <i>table</i>. The article is part of the word.</div>

<h3>The four article types</h3>
<table>
<tr><th></th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><th>the</th><td class="fr">le pain</td><td class="fr">la table</td><td class="fr">les amis</td></tr>
<tr><th>a / an</th><td class="fr">un café</td><td class="fr">une bière</td><td class="fr">des cafés (some)</td></tr>
<tr><th>some / any</th><td class="fr">du pain</td><td class="fr">de la viande</td><td class="fr">des légumes</td></tr>
<tr><th>before a vowel</th><td colspan="3" class="fr">l'homme, l'eau, l'ami (le/la both shrink to l')</td></tr>
</table>

<h3>Patterns that predict gender (~80% reliable)</h3>
<p><b>Usually feminine</b> — endings: <b>-tion, -sion, -té, -ée, -ie, -ure, -ette, -ance, -ence</b><br>
<span class="fr">la nation, la liberté, la journée, la boulangerie, la voiture</span></p>
<p><b>Usually masculine</b> — endings: <b>-age, -ment, -eau, -isme, -oir, -er, -in, -on</b><br>
<span class="fr">le fromage, le gouvernement, le bureau, le soir, le vin</span></p>
<p>Exceptions exist (<span class="fr">la page, la plage, l'eau</span> is feminine!) but this gets you most of the way.</p>

<h3>Contractions you must know</h3>
<table>
<tr><td class="fr">à + le = <b>au</b></td><td>Je vais <b>au</b> marché — I'm going to the market</td></tr>
<tr><td class="fr">à + les = <b>aux</b></td><td>Je parle <b>aux</b> enfants</td></tr>
<tr><td class="fr">de + le = <b>du</b></td><td>Je viens <b>du</b> bureau — I'm coming from the office</td></tr>
<tr><td class="fr">de + les = <b>des</b></td><td>La clé <b>des</b> chambres</td></tr>
</table>
<p><span class="fr">à la</span> and <span class="fr">de la</span> never contract: <span class="fr">à la maison, de la viande</span>.</p>

<h3>The "some" rule English doesn't have</h3>
<p>In English "I eat bread" is fine. In French you <b>must</b> say "I eat <i>some</i> bread":</p>
<ul>
<li>✅ <span class="fr">Je mange du pain.</span> — I eat bread.</li>
<li>❌ <span class="fr">Je mange pain.</span> — sounds broken.</li>
</ul>
<p><b>But after a negative, it all becomes <span class="fr">de</span>:</b><br>
<span class="fr">Je mange du pain</span> → <span class="fr">Je ne mange <b>pas de</b> pain.</span><br>
<span class="fr">J'ai une voiture</span> → <span class="fr">Je n'ai <b>pas de</b> voiture.</span></p>
`},

{id:"verbs", title:"Verb Conjugation Master Sheet", sub:"Present, past, future — all in one place", tag:"Days 15+", body:`
<h3>Regular -ER verbs (about 90% of all French verbs)</h3>
<p>Take <span class="fr">parler</span> (to speak). Chop off <b>-er</b> → <b>parl</b>. Add:</p>
<table>
<tr><td class="fr">je parl<b>e</b></td><td class="say">zhuh PARL</td><td>I speak</td></tr>
<tr><td class="fr">tu parl<b>es</b></td><td class="say">tü PARL</td><td>you speak</td></tr>
<tr><td class="fr">il/elle parl<b>e</b></td><td class="say">eel PARL</td><td>he/she speaks</td></tr>
<tr><td class="fr">nous parl<b>ons</b></td><td class="say">noo par-LOHN</td><td>we speak</td></tr>
<tr><td class="fr">vous parl<b>ez</b></td><td class="say">voo par-LAY</td><td>you speak</td></tr>
<tr><td class="fr">ils/elles parl<b>ent</b></td><td class="say">eel PARL</td><td>they speak</td></tr>
</table>
<div class="box green"><b>Great news</b>Four of those six are pronounced <i>identically</i> — <span class="say">PARL</span>. The -e, -es, -e, -ent endings are all silent. You only really learn two new sounds: -ons and -ez.</div>
<p>Same pattern: <span class="fr">aimer, habiter, travailler, manger, chercher, trouver, donner, écouter, regarder, jouer</span> — hundreds more.</p>

<h3>The present tense means three English things</h3>
<p><span class="fr">Je parle français</span> = "I speak French" / "I am speaking French" / "I do speak French". French has no separate "-ing" tense. This makes life easier.</p>

<h3>The past tense (passé composé)</h3>
<p><b>avoir + past participle.</b> That's the whole formula.</p>
<table>
<tr><th>Verb type</th><th>Participle</th><th>Example</th></tr>
<tr><td>-er verbs</td><td>-é</td><td class="fr">J'ai parlé — I spoke</td></tr>
<tr><td>-ir verbs</td><td>-i</td><td class="fr">J'ai fini — I finished</td></tr>
<tr><td>-re verbs</td><td>-u</td><td class="fr">J'ai vendu — I sold</td></tr>
</table>
<p><b>The irregular ones worth memorizing now:</b></p>
<table>
<tr><td class="fr">avoir → eu</td><td class="fr">être → été</td><td class="fr">faire → fait</td></tr>
<tr><td class="fr">voir → vu</td><td class="fr">prendre → pris</td><td class="fr">mettre → mis</td></tr>
<tr><td class="fr">dire → dit</td><td class="fr">écrire → écrit</td><td class="fr">lire → lu</td></tr>
<tr><td class="fr">boire → bu</td><td class="fr">pouvoir → pu</td><td class="fr">vouloir → voulu</td></tr>
</table>

<h3>The 16 verbs that use ÊTRE instead</h3>
<p>Mostly verbs of movement. Memory trick: <b>DR &amp; MRS VANDERTRAMP</b>.</p>
<p class="fr">Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir</p>
<p><span class="fr">Je <b>suis</b> allé au marché.</span> — I went to the market.<br>
With être, the participle agrees: a woman says <span class="fr">je suis allé<b>e</b></span>.</p>

<h3>The imparfait (used to / was doing)</h3>
<p>Take the <b>nous</b> form of the present, drop <b>-ons</b>, add: <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.</p>
<p><span class="fr">nous parlons</span> → <span class="fr">je parlais</span> (I used to speak / I was speaking)</p>
<p>Only one irregular in the whole language: <span class="fr">être → j'étais</span>.</p>

<h3>Which past tense? The photo vs film rule</h3>
<ul>
<li><b>Passé composé</b> = a <i>photo</i>. One completed event. "I ate. I arrived. He called."</li>
<li><b>Imparfait</b> = a <i>film</i> running in the background. Descriptions, weather, feelings, habits. "It was raining. I was tired. I used to go every Sunday."</li>
</ul>
<p><span class="fr">Il <b>pleuvait</b> quand je <b>suis arrivé</b>.</span> — It was raining (film) when I arrived (photo).</p>

<h3>The future — the easy way</h3>
<p><b>aller + infinitive.</b> Exactly like English "going to".</p>
<p><span class="fr">Je vais manger.</span> — I'm going to eat.<br>
<span class="fr">On va partir demain.</span> — We're going to leave tomorrow.</p>
<p>This covers 90% of spoken future. The "real" future tense (<span class="fr">je mangerai</span>) comes on Day 64.</p>
`},

{id:"questions", title:"Questions &amp; Negation", sub:"Asking things, and saying no", tag:"Days 10–11", body:`
<h3>Three ways to ask a question — all correct</h3>
<table>
<tr><th>Style</th><th>How</th><th>Example</th></tr>
<tr><td><b>1. Casual</b><br>(most spoken)</td><td>Say a statement, raise your voice at the end</td><td class="fr">Tu parles français ?</td></tr>
<tr><td><b>2. Neutral</b><br>(safest)</td><td>Put <b>Est-ce que</b> in front</td><td class="fr">Est-ce que tu parles français ?</td></tr>
<tr><td><b>3. Formal</b><br>(written, polite)</td><td>Flip the verb and subject</td><td class="fr">Parlez-vous français ?</td></tr>
</table>
<div class="box blue"><b>Use #2 as your default</b><span class="fr">Est-ce que</span> (<span class="say">ess-kuh</span>) works in front of literally any statement and is always correct. It's the beginner's best friend.</div>

<h3>Question words</h3>
<table>
<tr><td class="fr">qui</td><td class="say">kee</td><td>who</td><td class="fr">Qui est-ce ?</td></tr>
<tr><td class="fr">quoi / que</td><td class="say">kwa / kuh</td><td>what</td><td class="fr">Qu'est-ce que c'est ?</td></tr>
<tr><td class="fr">où</td><td class="say">oo</td><td>where</td><td class="fr">Où est la gare ?</td></tr>
<tr><td class="fr">quand</td><td class="say">kahn</td><td>when</td><td class="fr">Quand est-ce que tu pars ?</td></tr>
<tr><td class="fr">pourquoi</td><td class="say">poor-KWA</td><td>why</td><td class="fr">Pourquoi pas ?</td></tr>
<tr><td class="fr">comment</td><td class="say">ko-MAHN</td><td>how</td><td class="fr">Comment ça va ?</td></tr>
<tr><td class="fr">combien</td><td class="say">kohn-bee-AN</td><td>how much</td><td class="fr">C'est combien ?</td></tr>
<tr><td class="fr">quel / quelle</td><td class="say">kell</td><td>which / what</td><td class="fr">Quelle heure est-il ?</td></tr>
</table>
<p><b>The one to memorize whole:</b> <span class="fr">Qu'est-ce que c'est ?</span> <span class="say">kess-kuh SAY</span> = "What is that?" Don't analyze it, just learn it as a chunk.</p>

<h3>Negation — the sandwich</h3>
<p>French wraps the verb in two pieces: <b>ne … pas</b>.</p>
<ul>
<li><span class="fr">Je parle</span> → <span class="fr">Je <b>ne</b> parle <b>pas</b>.</span> — I don't speak.</li>
<li><span class="fr">C'est bon</span> → <span class="fr">Ce <b>n'</b>est <b>pas</b> bon.</span> — It's not good.</li>
</ul>
<div class="box"><b>In real speech, the "ne" disappears</b>French people say <span class="fr">je sais pas</span>, not <span class="fr">je ne sais pas</span>. <span class="fr">C'est pas bon.</span> Dropping "ne" is normal and casual — but keep it in writing.</div>

<h3>Other negatives — same sandwich, different filling</h3>
<table>
<tr><td class="fr">ne … jamais</td><td>never</td><td class="fr">Je ne fume jamais.</td></tr>
<tr><td class="fr">ne … plus</td><td>not anymore</td><td class="fr">Je ne travaille plus.</td></tr>
<tr><td class="fr">ne … rien</td><td>nothing</td><td class="fr">Je ne vois rien.</td></tr>
<tr><td class="fr">ne … personne</td><td>nobody</td><td class="fr">Je ne connais personne.</td></tr>
<tr><td class="fr">ne … pas encore</td><td>not yet</td><td class="fr">Je n'ai pas encore mangé.</td></tr>
</table>
`},

{id:"numbers", title:"Numbers, Time &amp; Dates", sub:"Including the notorious French 70–99", tag:"Days 4, 18, 29", body:`
<h3>0–20</h3>
<table>
<tr><td class="fr">0 zéro</td><td class="fr">1 un</td><td class="fr">2 deux</td><td class="fr">3 trois</td><td class="fr">4 quatre</td></tr>
<tr><td class="fr">5 cinq</td><td class="fr">6 six</td><td class="fr">7 sept</td><td class="fr">8 huit</td><td class="fr">9 neuf</td></tr>
<tr><td class="fr">10 dix</td><td class="fr">11 onze</td><td class="fr">12 douze</td><td class="fr">13 treize</td><td class="fr">14 quatorze</td></tr>
<tr><td class="fr">15 quinze</td><td class="fr">16 seize</td><td class="fr">17 dix-sept</td><td class="fr">18 dix-huit</td><td class="fr">19 dix-neuf</td></tr>
<tr><td class="fr">20 vingt</td><td colspan="4" class="say">van — the G and T are silent</td></tr>
</table>

<h3>20–69 — completely normal</h3>
<p class="fr">20 vingt · 30 trente · 40 quarante · 50 cinquante · 60 soixante</p>
<p>Then just add: <span class="fr">vingt-et-un</span> (21), <span class="fr">vingt-deux</span> (22), <span class="fr">trente-cinq</span> (35)…</p>

<h3>70–99 — the famous madness</h3>
<div class="box red"><b>Brace yourself</b>French stops having new words at 60 and starts doing arithmetic instead.</div>
<table>
<tr><th>Number</th><th>French</th><th>Literally</th></tr>
<tr><td>70</td><td class="fr">soixante-dix</td><td>sixty-ten</td></tr>
<tr><td>71</td><td class="fr">soixante-et-onze</td><td>sixty-and-eleven</td></tr>
<tr><td>75</td><td class="fr">soixante-quinze</td><td>sixty-fifteen</td></tr>
<tr><td>80</td><td class="fr">quatre-vingts</td><td>four-twenties</td></tr>
<tr><td>85</td><td class="fr">quatre-vingt-cinq</td><td>four-twenties-five</td></tr>
<tr><td>90</td><td class="fr">quatre-vingt-dix</td><td>four-twenties-ten</td></tr>
<tr><td>95</td><td class="fr">quatre-vingt-quinze</td><td>four-twenties-fifteen</td></tr>
<tr><td>99</td><td class="fr">quatre-vingt-dix-neuf</td><td>four-twenties-ten-nine</td></tr>
</table>
<p><i>(In Belgium and Switzerland they sensibly say</i> <span class="fr">septante</span> <i>and</i> <span class="fr">nonante</span><i>. France does not.)</i></p>

<h3>Big numbers</h3>
<p class="fr">100 cent · 200 deux cents · 1000 mille · 1 000 000 un million</p>
<p>French uses a <b>comma</b> for decimals and a space for thousands: <b>3,50 €</b> = three euros fifty, said <span class="fr">trois euros cinquante</span>.</p>

<h3>Telling time</h3>
<p><b>Question:</b> <span class="fr">Quelle heure est-il ?</span> <span class="say">kell UHR ay-TEEL</span></p>
<table>
<tr><td>2:00</td><td class="fr">Il est deux heures</td></tr>
<tr><td>2:15</td><td class="fr">Il est deux heures et quart</td></tr>
<tr><td>2:30</td><td class="fr">Il est deux heures et demie</td></tr>
<tr><td>2:45</td><td class="fr">Il est trois heures moins le quart</td><td class="muted">"three minus a quarter"</td></tr>
<tr><td>2:10</td><td class="fr">Il est deux heures dix</td></tr>
<tr><td>noon / midnight</td><td class="fr">midi / minuit</td></tr>
</table>
<p>Officially France uses the 24-hour clock: <b>19h30</b> = <span class="fr">dix-neuf heures trente</span>. In casual speech people still say "sept heures et demie du soir".</p>

<h3>Days &amp; months</h3>
<p class="fr">lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</p>
<p class="fr">janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre</p>
<div class="box"><b>No capital letters</b>Days and months are lowercase in French. And a date goes day-first: <b>12/08/2026</b> means 12 August.</div>
`},

{id:"traps", title:"False Friends &amp; Classic Mistakes", sub:"The traps English speakers fall into", tag:"All levels", body:`
<h3>False friends — words that look English but aren't</h3>
<table>
<tr><th>French</th><th>Actually means</th><th>NOT</th></tr>
<tr><td class="fr">l'entrée</td><td>starter / appetizer</td><td>main course</td></tr>
<tr><td class="fr">actuellement</td><td>currently, right now</td><td>actually</td></tr>
<tr><td class="fr">éventuellement</td><td>possibly, if need be</td><td>eventually</td></tr>
<tr><td class="fr">attendre</td><td>to wait for</td><td>to attend</td></tr>
<tr><td class="fr">assister à</td><td>to attend</td><td>to assist</td></tr>
<tr><td class="fr">sensible</td><td>sensitive</td><td>sensible</td></tr>
<tr><td class="fr">la librairie</td><td>bookshop</td><td>library (= la bibliothèque)</td></tr>
<tr><td class="fr">la monnaie</td><td>change (coins)</td><td>money (= l'argent)</td></tr>
<tr><td class="fr">le collège</td><td>middle school</td><td>college</td></tr>
<tr><td class="fr">passer un examen</td><td>to take an exam</td><td>to pass it (= réussir)</td></tr>
<tr><td class="fr">demander</td><td>to ask</td><td>to demand</td></tr>
<tr><td class="fr">rester</td><td>to stay</td><td>to rest</td></tr>
<tr><td class="fr">blesser</td><td>to injure</td><td>to bless</td></tr>
<tr><td class="fr">le pain</td><td>bread</td><td>pain (= la douleur)</td></tr>
<tr><td class="fr">le préservatif</td><td>condom</td><td>preservative — be careful with this one</td></tr>
</table>

<h3>The mistakes almost every English speaker makes</h3>
<table>
<tr><th>❌ Wrong</th><th>✅ Right</th><th>Why</th></tr>
<tr><td class="fr">Je suis 40 ans</td><td class="fr">J'ai 40 ans</td><td>Age uses <i>avoir</i>, not <i>être</i></td></tr>
<tr><td class="fr">Je suis chaud</td><td class="fr">J'ai chaud</td><td>"Je suis chaud" means you're… aroused</td></tr>
<tr><td class="fr">Je mange pain</td><td class="fr">Je mange du pain</td><td>"Some" is mandatory in French</td></tr>
<tr><td class="fr">Je visite mon ami</td><td class="fr">Je rends visite à mon ami</td><td><i>visiter</i> is for places, not people</td></tr>
<tr><td class="fr">Je suis en train</td><td class="fr">Je suis dans le train</td><td>"en train de" means "in the middle of doing"</td></tr>
<tr><td class="fr">C'est bon ?</td><td class="fr">C'est bien ?</td><td><i>bon</i> = tastes/feels good; <i>bien</i> = good in quality</td></tr>
<tr><td class="fr">Je sais Paris</td><td class="fr">Je connais Paris</td><td><i>savoir</i> = know a fact; <i>connaître</i> = know a person/place</td></tr>
<tr><td class="fr">un grand homme</td><td class="fr">un homme grand</td><td>Before the noun = "a great man"; after = "a tall man"</td></tr>
</table>

<h3>Adjective placement</h3>
<p>Most French adjectives go <b>after</b> the noun: <span class="fr">une voiture rouge</span> (a red car), <span class="fr">un homme intéressant</span>.</p>
<p>A short list goes <b>before</b> — remember <b>BAGS</b>: <b>B</b>eauty, <b>A</b>ge, <b>G</b>oodness, <b>S</b>ize.<br>
<span class="fr">un <b>beau</b> jardin, une <b>vieille</b> maison, un <b>bon</b> repas, une <b>petite</b> ville</span></p>

<h3>Tu vs Vous</h3>
<table>
<tr><th>Use <span class="fr">tu</span></th><th>Use <span class="fr">vous</span></th></tr>
<tr><td>Friends, family, kids, pets, colleagues you know well</td><td>Strangers, shopkeepers, waiters, anyone older, anyone in authority, any group of people</td></tr>
</table>
<div class="box blue"><b>When in doubt, use vous</b>Being too formal is mildly amusing. Being too casual is genuinely rude. Wait for them to say <span class="fr">on peut se tutoyer</span> ("we can use tu").</div>
`},

{id:"convo", title:"Conversation Starter Kit", sub:"Scripts for the conversations you'll actually have", tag:"Days 6, 13, 20+", body:`
<h3>Meeting someone</h3>
<table>
<tr><td class="fr">Bonjour, je m'appelle Oliver.</td><td>Hello, my name is Oliver.</td></tr>
<tr><td class="fr">Enchanté.</td><td>Nice to meet you.</td></tr>
<tr><td class="fr">Comment vous appelez-vous ?</td><td>What's your name? (formal)</td></tr>
<tr><td class="fr">Je suis américain. / Je viens des États-Unis.</td><td>I'm American. / I'm from the US.</td></tr>
<tr><td class="fr">J'habite à Chicago.</td><td>I live in Chicago.</td></tr>
<tr><td class="fr">Je parle un peu français.</td><td>I speak a little French.</td></tr>
<tr><td class="fr">Qu'est-ce que vous faites dans la vie ?</td><td>What do you do for a living?</td></tr>
<tr><td class="fr">Je travaille dans la santé.</td><td>I work in healthcare.</td></tr>
</table>

<h3>At a café</h3>
<table>
<tr><td class="fr">Bonjour ! Une table pour deux, s'il vous plaît.</td><td>Hi! A table for two, please.</td></tr>
<tr><td class="fr">La carte, s'il vous plaît.</td><td>The menu, please.</td></tr>
<tr><td class="fr">Qu'est-ce que vous recommandez ?</td><td>What do you recommend?</td></tr>
<tr><td class="fr">Je vais prendre le poulet.</td><td>I'll have the chicken.</td></tr>
<tr><td class="fr">Une carafe d'eau, s'il vous plaît.</td><td>A jug of tap water, please. (free)</td></tr>
<tr><td class="fr">C'était très bon, merci.</td><td>That was very good, thank you.</td></tr>
<tr><td class="fr">L'addition, s'il vous plaît.</td><td>The check, please.</td></tr>
</table>

<h3>Small talk that always works</h3>
<table>
<tr><td class="fr">Il fait beau aujourd'hui !</td><td>Nice weather today!</td></tr>
<tr><td class="fr">Vous êtes d'ici ?</td><td>Are you from here?</td></tr>
<tr><td class="fr">C'est ma première fois en France.</td><td>It's my first time in France.</td></tr>
<tr><td class="fr">J'adore cette ville.</td><td>I love this city.</td></tr>
<tr><td class="fr">Qu'est-ce qu'il faut voir ici ?</td><td>What should I see here?</td></tr>
</table>

<h3>Buying time when you're stuck</h3>
<p>These make you sound fluent while your brain catches up. Use them constantly.</p>
<table>
<tr><td class="fr">Alors…</td><td class="say">a-LOR</td><td>So… / Well…</td></tr>
<tr><td class="fr">Euh…</td><td class="say">uh</td><td>Um… (the French "uh")</td></tr>
<tr><td class="fr">Ben…</td><td class="say">bahn</td><td>Well… (very casual)</td></tr>
<tr><td class="fr">Comment dire…</td><td class="say">ko-mahn DEER</td><td>How to say it…</td></tr>
<tr><td class="fr">C'est-à-dire…</td><td class="say">say-ta-DEER</td><td>That is to say…</td></tr>
<tr><td class="fr">Voilà.</td><td class="say">vwa-LA</td><td>There you go. (ends any sentence)</td></tr>
<tr><td class="fr">Je ne sais pas comment on dit…</td><td></td><td>I don't know how you say…</td></tr>
</table>
<div class="box green"><b>The single best learner phrase</b><span class="fr">Comment on dit "___" en français ?</span> — "How do you say ___ in French?" It turns any conversation into a lesson.</div>
`},
];

