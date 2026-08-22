/* ============================================================
   BRAZILIAN PORTUGUESE — from zero, with slang from day one.
   Ordered sets rather than a fixed 90-day plan, so it can run
   alongside French without either becoming a chore.
   ============================================================ */

const PT_CATS = [
 ["basico","Essentials","👋"],
 ["giria","Gíria (Slang)","😎"],
 ["comida","Food &amp; Drink","🍽️"],
 ["viagem","Travel","✈️"],
 ["pessoas","People","👤"],
 ["verbos","Core Verbs","⚡"],
 ["expressoes","Expressions","💬"],
 ["armadilhas","False Friends","⚠️"],
];

/* [word, say it, meaning, category, example, English, note, set] */
const PT_VOCAB = [
// --- basico
["Oi","oy","Hi","basico","Oi, tudo bem?","Hi, how's it going?","the default greeting in Brazil",2],
["Olá","oh-LA","Hello","basico","Olá, bom dia.","Hello, good morning.","slightly more formal than oi",2],
["Bom dia","bohn JEE-ah","Good morning","basico","Bom dia, senhora.","Good morning, ma'am.","until midday",2],
["Boa tarde","BOH-ah TAR-jee","Good afternoon","basico","Boa tarde!","Good afternoon!","midday to sunset",2],
["Boa noite","BOH-ah NOY-chee","Good evening / night","basico","Boa noite, tudo bem?","Good evening, how are you?","both hello and goodbye",2],
["Tudo bem?","TOO-doo BAYN","How's it going?","basico","E aí, tudo bem?","Hey, how's it going?","also the answer",2],
["Tudo bom","TOO-doo BOHN","All good","basico","Tudo bom, e você?","All good, and you?","",2],
["Obrigado / Obrigada","oh-bree-GAH-doo / -dah","Thank you","basico","Muito obrigado!","Thank you very much!","-o if you are male, -a if female",2],
["De nada","jee NAH-dah","You're welcome","basico","— Obrigado! — De nada.","— Thanks! — You're welcome.","",2],
["Por favor","poor fah-VOR","Please","basico","Um café, por favor.","A coffee, please.","",2],
["Com licença","kohn lee-SEN-sah","Excuse me","basico","Com licença, posso passar?","Excuse me, may I get past?","to pass or interrupt",2],
["Desculpa","dees-KOOL-pah","Sorry","basico","Desculpa, foi mal.","Sorry, my bad.","desculpe is the formal version",2],
["Sim / Não","seen / nown","Yes / No","basico","Sim, claro.","Yes, of course.","não is nasal",2],
["Tchau","chow","Bye","basico","Tchau, até logo!","Bye, see you soon!","from Italian ciao",2],
["Até logo","ah-TEH LOH-goo","See you soon","basico","Até logo!","See you later!","",2],
["Você","voh-SEH","You","basico","Você fala inglês?","Do you speak English?","Brazilians use você, not tu",2],
["Eu","eh-oo","I","basico","Eu sou americano.","I'm American.","",2],
["A gente","ah JEN-chee","We","basico","A gente vai agora.","We're going now.","far more common than 'nós'",2],
["Meu nome é","meh-oo NOH-mee eh","My name is","basico","Meu nome é Oliver.","My name is Oliver.","",2],
["Prazer","prah-ZEHR","Nice to meet you","basico","Prazer em conhecer!","Pleased to meet you!","literally 'pleasure'",2],
["Não entendi","nown en-ten-JEE","I didn't understand","basico","Desculpa, não entendi.","Sorry, I didn't catch that.","your survival phrase",2],
["Fala devagar","FAH-lah jee-vah-GAR","Speak slowly","basico","Fala devagar, por favor.","Speak slowly, please.","",2],
["Você fala inglês?","voh-SEH FAH-lah een-GLESS","Do you speak English?","basico","Você fala inglês?","Do you speak English?","",2],

// --- giria (slang from the start, per the standing rule)
["E aí?","ee ah-EE","What's up?","giria","E aí, beleza?","Hey, all good?","the most common casual opener",3],
["Beleza","beh-LEH-zah","Cool / all good","giria","Beleza, então!","Cool, then!","both a question and an answer",3],
["Legal","lay-GOW","Cool, nice","giria","Que legal!","How cool!","NOT 'legal' in the law sense here",3],
["Massa","MAH-sah","Awesome","giria","Que massa!","That's awesome!","very Brazilian",3],
["Maneiro","mah-NAY-roo","Cool, neat","giria","Cara, que maneiro.","Man, that's cool.","Rio flavour",3],
["Cara","KAH-rah","Guy / mate","giria","E aí, cara!","Hey man!","literally 'face'",3],
["Mano","MAH-noo","Bro","giria","Fala, mano.","What's up, bro.","São Paulo flavour",3],
["Valeu","vah-LEH-oo","Thanks / cheers","giria","Valeu, mano!","Cheers, bro!","casual thank you",3],
["Falou","fah-LOH","Later / got it","giria","Falou, até amanhã.","Later, see you tomorrow.","a casual sign-off",3],
["Nossa!","NOH-sah","Wow!","giria","Nossa, que caro!","Wow, that's expensive!","short for Nossa Senhora",3],
["Caramba!","kah-RAHM-bah","Damn! / Wow!","giria","Caramba, que susto!","Damn, what a fright!","mild",3],
["Pô","poh","Man… / come on","giria","Pô, sério?","Come on, seriously?","softened form of a swear word",3],
["Foi mal","foy MOW","My bad","giria","Foi mal, cara.","My bad, man.","casual apology",3],
["Tá ligado?","tah lee-GAH-doo","You know what I mean?","giria","Tá ligado, né?","You get me, right?","literally 'are you switched on'",3],
["Né?","neh","Right? / isn't it?","giria","Legal, né?","Cool, right?","contraction of 'não é'",3],
["Rolar","hoh-LAR","to happen, go down","giria","O que vai rolar hoje?","What's happening today?","literally 'to roll'",3],
["Curtir","koor-CHEER","to enjoy, be into","giria","Curti muito o filme.","I really enjoyed the film.","also 'to like' online",3],
["Dar certo","dar SEHR-too","to work out","giria","Deu certo!","It worked out!","",3],
["Treta","TREH-tah","drama, beef","giria","Deu treta ontem.","There was drama yesterday.","",3],
["Zoar","zoh-AR","to mess about, tease","giria","Tô zoando!","I'm just kidding!","",3],
["Chato","SHAH-too","annoying, boring","giria","Que cara chato.","What an annoying guy.","used constantly",3],
["Bagunça","bah-GOON-sah","a mess","giria","Que bagunça!","What a mess!","",3],
["Tô","toh","I am (short for estou)","giria","Tô cansado.","I'm tired.","everyone says tô, not estou",3],
["Vamo","VAH-moo","Let's go","giria","Vamo lá!","Let's go!","clipped vamos",3],

// --- comida
["A água","AH-gwah","water","comida","Uma água, por favor.","A water, please.","",4],
["O café","oo kah-FEH","coffee","comida","Um cafezinho?","A little coffee?","cafezinho is the small strong one",4],
["A cerveja","ah sehr-VEH-zhah","beer","comida","Uma cerveja gelada.","A cold beer.","gelada = ice cold, essential",4],
["O pão","oo pown","bread","comida","Pão de queijo.","Cheese bread.","nasal ão",4],
["O arroz","oo ah-HOHS","rice","comida","Arroz com feijão.","Rice and beans.","the national staple",4],
["O feijão","oo fay-ZHOWN","beans","comida","Feijoada é o prato nacional.","Feijoada is the national dish.","",4],
["A carne","ah KAR-nee","meat","comida","Carne bem passada.","Well-done meat.","",4],
["O frango","oo FRAHN-goo","chicken","comida","Frango grelhado.","Grilled chicken.","",4],
["O peixe","oo PAY-shee","fish","comida","Peixe fresco.","Fresh fish.","",4],
["A conta","ah KOHN-tah","the bill","comida","A conta, por favor.","The bill, please.","",4],
["O garçom","oo gar-SOHN","waiter","comida","Garçom, por favor!","Waiter, please!","",4],
["Gostoso","gohs-TOH-zoo","tasty, delicious","comida","Que gostoso!","How delicious!","careful: about a person it means attractive",4],
["Eu queria","eh-oo keh-REE-ah","I would like","comida","Eu queria um café.","I'd like a coffee.","politer than eu quero",4],
["Sem / Com","seyn / kohn","without / with","comida","Sem açúcar, por favor.","Without sugar, please.","",4],
["O almoço","oo ow-MOH-soo","lunch","comida","O almoço é ao meio-dia.","Lunch is at midday.","",4],
["O jantar","oo zhan-TAR","dinner","comida","O jantar está pronto.","Dinner is ready.","",4],

// --- viagem
["Onde fica…?","OHN-jee FEE-kah","Where is…?","viagem","Onde fica o banheiro?","Where's the bathroom?","fica for fixed places",5],
["O banheiro","oo bahn-YAY-roo","bathroom","viagem","Onde fica o banheiro?","Where's the bathroom?","",5],
["Quanto custa?","KWAN-too KOOS-tah","How much is it?","viagem","Quanto custa isso?","How much is this?","",5],
["O dinheiro","oo jeen-YAY-roo","money","viagem","Não tenho dinheiro.","I don't have money.","nh = ny",5],
["Caro / Barato","KAH-roo / bah-RAH-too","expensive / cheap","viagem","Muito caro!","Too expensive!","",5],
["A rua","ah HOO-ah","street","viagem","Na rua Augusta.","On Augusta street.","initial R = H sound",5],
["O ônibus","oo OH-nee-boos","bus","viagem","O ônibus está atrasado.","The bus is late.","",5],
["O aeroporto","oo ah-eh-roo-POR-too","airport","viagem","Vou ao aeroporto.","I'm going to the airport.","",5],
["A praia","ah PRY-ah","beach","viagem","Vamos à praia!","Let's go to the beach!","",5],
["Direita / Esquerda","jee-RAY-tah / ess-KEHR-dah","right / left","viagem","Vira à direita.","Turn right.","",5],
["Perto / Longe","PEHR-too / LOHN-zhee","near / far","viagem","É perto daqui?","Is it near here?","",5],
["Ajuda","ah-ZHOO-dah","help","viagem","Preciso de ajuda.","I need help.","",5],
["Socorro!","soh-KOH-hoo","Help! (emergency)","viagem","Socorro! Chama a polícia!","Help! Call the police!","emergencies only",5],
["A farmácia","ah far-MAH-see-ah","pharmacy","viagem","Onde tem farmácia?","Where's there a pharmacy?","",5],
["Perdi","pehr-JEE","I lost","viagem","Perdi meu passaporte.","I lost my passport.","",5],

// --- pessoas
["O amigo / A amiga","ah-MEE-goo / -gah","friend","pessoas","Meu amigo Josh.","My friend Josh.","",2],
["A família","ah fah-MEE-lee-ah","family","pessoas","Minha família é grande.","My family is big.","",2],
["A mulher","ah mool-YEHR","woman / wife","pessoas","Minha mulher é enfermeira.","My wife is a nurse.","lh = ly",2],
["O homem","oo OH-mayn","man","pessoas","Aquele homem ali.","That man over there.","",2],
["O filho / A filha","oo FEEL-yoo / ah FEEL-yah","son / daughter","pessoas","Tenho uma filha.","I have a daughter.","",2],
["O trabalho","oo trah-BAH-lyoo","work","pessoas","Vou pro trabalho.","I'm off to work.","pro = para o",2],

// --- verbos
["ser","sehr","to be (permanent)","verbos","Eu sou americano.","I am American.","identity, origin, traits",6],
["estar","ess-TAR","to be (temporary)","verbos","Eu estou cansado.","I am tired.","states, location, moods",6],
["ter","tehr","to have","verbos","Eu tenho dois filhos.","I have two children.","also 'there is': tem…",6],
["ir","eer","to go","verbos","Eu vou agora.","I'm going now.","builds the future: vou fazer",6],
["fazer","fah-ZEHR","to do, to make","verbos","O que você faz?","What do you do?","",6],
["querer","keh-REHR","to want","verbos","Eu quero um café.","I want a coffee.","eu queria is politer",6],
["poder","poh-DEHR","to be able, can","verbos","Posso ajudar?","Can I help?","",6],
["falar","fah-LAR","to speak","verbos","Eu falo um pouco.","I speak a little.","regular -ar",6],
["comer","koh-MEHR","to eat","verbos","Vamos comer!","Let's eat!","regular -er",6],
["gostar de","gohs-TAR jee","to like","verbos","Eu gosto de café.","I like coffee.","always with 'de'",6],
["precisar de","preh-see-ZAR jee","to need","verbos","Preciso de ajuda.","I need help.","always with 'de'",6],
["saber","sah-BEHR","to know (a fact)","verbos","Não sei.","I don't know.","vs conhecer for people",6],
["conhecer","koh-nyeh-SEHR","to know (a person, place)","verbos","Conheço o Rio.","I know Rio.","",6],
["ficar","fee-KAR","to stay, to become, to be located","verbos","Onde fica o hotel?","Where is the hotel?","enormously versatile",6],
["dar","dar","to give","verbos","Deu certo.","It worked out.","dar certo = to work out",6],

// --- expressoes
["Saudade","sow-DAH-jee","longing for something absent","expressoes","Que saudade!","I miss it/you so much!","famously has no English equivalent",3],
["Nossa Senhora!","NOH-sah sen-YOH-rah","Good heavens!","expressoes","Nossa Senhora, que susto!","Good heavens, what a fright!","usually shortened to Nossa",3],
["Que pena","kee PEH-nah","What a shame","expressoes","Que pena, não deu.","Shame, it didn't work out.","",3],
["Claro","KLAH-roo","Of course","expressoes","Claro que sim!","Of course!","",3],
["Talvez","tow-VESS","Maybe","expressoes","Talvez amanhã.","Maybe tomorrow.","",3],
["Com certeza","kohn sehr-TEH-zah","Definitely","expressoes","Com certeza!","For sure!","",3],
["Mais ou menos","mice oh MEH-noos","More or less, so-so","expressoes","— Tudo bem? — Mais ou menos.","— All good? — So-so.","",3],
["Vamos ver","VAH-moos vehr","We'll see","expressoes","Vamos ver amanhã.","We'll see tomorrow.","",3],
["Fica tranquilo","FEE-kah trahn-KEE-loo","Take it easy, don't worry","expressoes","Fica tranquilo, dá tempo.","Relax, there's time.","very Brazilian reassurance",3],
["Se Deus quiser","see DEH-oos kee-ZEHR","God willing","expressoes","Até amanhã, se Deus quiser.","See you tomorrow, God willing.","common and sincere",3],

// --- armadilhas (false friends)
["puxar","poo-SHAR","to PULL","armadilhas","Puxe a porta.","Pull the door.","doors say PUXE — it means pull, not push",1],
["esquisito","ess-kee-ZEE-too","weird, strange","armadilhas","Que gosto esquisito.","What a strange taste.","NOT 'exquisite'",1],
["pretender","preh-ten-DEHR","to intend","armadilhas","Pretendo viajar.","I intend to travel.","NOT 'to pretend'",1],
["assistir","ah-sees-CHEER","to watch","armadilhas","Assisti o jogo.","I watched the game.","NOT 'to assist'",1],
["a salsa","ah SOW-sah","parsley","armadilhas","Salsa e cebola.","Parsley and onion.","the sauce is 'molho'",1],
["o copo","oo KOH-poo","drinking glass","armadilhas","Um copo de água.","A glass of water.","a cup is 'xícara'",1],
["a oficina","ah oh-fee-SEE-nah","workshop, garage","armadilhas","O carro está na oficina.","The car's at the garage.","an office is 'escritório'",1],
["o rato","oo HAH-too","rat, mouse","armadilhas","Tem um rato aqui!","There's a rat here!","",1],
["custante / constipado","kohns-chee-PAH-doo","having a cold (in Portugal)","armadilhas","No Brasil: resfriado.","In Brazil, say resfriado.","means something else entirely in Spanish",1],
["gostoso","gohs-TOH-zoo","tasty — or attractive","armadilhas","A comida está gostosa.","The food is delicious.","about a person it means 'hot' — be careful",1],
];

/* ============================================================
   PORTUGUESE STUDY GUIDES
   ============================================================ */
const PT_GUIDES = [
{id:"sons", title:"Sons — Brazilian Pronunciation", sub:"It looks like Spanish and sounds nothing like it", tag:"Start here", body:`
<h3>The five rules that change everything</h3>
<p>Brazilian Portuguese is spelled like Spanish and pronounced like nothing else. Learn these five and you go from unintelligible to understandable in one sitting.</p>

<h3>1. R at the start = English H</h3>
<table>
<tr><th>Written</th><th>Said</th><th>Means</th></tr>
<tr><td class="fr">Rio</td><td class="say">HEE-oo</td><td>river / Rio</td></tr>
<tr><td class="fr">rua</td><td class="say">HOO-ah</td><td>street</td></tr>
<tr><td class="fr">carro</td><td class="say">KAH-hoo</td><td>car (RR is also H)</td></tr>
<tr><td class="fr">socorro</td><td class="say">soh-KOH-hoo</td><td>help</td></tr>
</table>
<p>A single R <b>between vowels</b> stays a light tap: <span class="fr">caro</span> = <span class="say">KAH-roo</span> (expensive) vs <span class="fr">carro</span> = <span class="say">KAH-hoo</span> (car). That one is a real minimal pair.</p>

<h3>2. DI and TI become JI and CHI</h3>
<div class="box blue"><b>The single most Brazilian sound</b>Before an <b>i</b> sound, <b>d</b> becomes "j" and <b>t</b> becomes "ch". This includes final <b>-de</b> and <b>-te</b>, because they are pronounced "ee".</div>
<table>
<tr><td class="fr">dia</td><td class="say">JEE-ah</td><td>day</td></tr>
<tr><td class="fr">bom dia</td><td class="say">bohn JEE-ah</td><td>good morning</td></tr>
<tr><td class="fr">noite</td><td class="say">NOY-chee</td><td>night</td></tr>
<tr><td class="fr">tarde</td><td class="say">TAR-jee</td><td>afternoon</td></tr>
<tr><td class="fr">gente</td><td class="say">ZHEN-chee</td><td>people</td></tr>
<tr><td class="fr">onde</td><td class="say">OHN-jee</td><td>where</td></tr>
</table>

<h3>3. Final -o = "oo", final -e = "ee"</h3>
<table>
<tr><td class="fr">obrigado</td><td class="say">oh-bree-GAH-doo</td></tr>
<tr><td class="fr">tudo</td><td class="say">TOO-doo</td></tr>
<tr><td class="fr">nome</td><td class="say">NOH-mee</td></tr>
<tr><td class="fr">verde</td><td class="say">VEHR-jee</td></tr>
</table>

<h3>4. The nasal vowels</h3>
<p>The tilde <b>~</b> and any vowel before <b>m</b> or <b>n</b> goes through the nose — same instruction as French.</p>
<table>
<tr><td class="fr">não</td><td class="say">nown</td><td>no</td></tr>
<tr><td class="fr">pão</td><td class="say">pown</td><td>bread</td></tr>
<tr><td class="fr">mão</td><td class="say">mown</td><td>hand</td></tr>
<tr><td class="fr">bem</td><td class="say">bayn</td><td>well</td></tr>
<tr><td class="fr">sim</td><td class="say">seen</td><td>yes</td></tr>
<tr><td class="fr">irmã</td><td class="say">eer-MAN</td><td>sister</td></tr>
</table>
<div class="box green"><b>Your French is helping already</b>The nasal vowel is the same physical move you learned on French Day 1. <span class="fr">pão</span> and <span class="fr">pain</span> are cousins in more than meaning.</div>

<h3>5. LH and NH</h3>
<table>
<tr><td class="fr">filho</td><td class="say">FEEL-yoo</td><td>son — lh = "ly"</td></tr>
<tr><td class="fr">mulher</td><td class="say">mool-YEHR</td><td>woman</td></tr>
<tr><td class="fr">dinheiro</td><td class="say">jeen-YAY-roo</td><td>money — nh = "ny"</td></tr>
<tr><td class="fr">senhor</td><td class="say">sen-YOHR</td><td>sir</td></tr>
</table>

<h3>The rest, briefly</h3>
<table>
<tr><td><b>ç</b></td><td>always "s"</td><td class="fr">começar, açúcar</td></tr>
<tr><td><b>ch</b></td><td>"sh"</td><td class="fr">chato = SHAH-too</td></tr>
<tr><td><b>x</b></td><td>usually "sh"</td><td class="fr">xícara = SHEE-kah-rah</td></tr>
<tr><td><b>s</b> between vowels</td><td>"z"</td><td class="fr">casa = KAH-zah</td></tr>
<tr><td><b>lo, l</b> at the end</td><td>"w"</td><td class="fr">legal = lay-GOW, Brasil = brah-ZEEW</td></tr>
<tr><td><b>é / ê</b></td><td>open "eh" / closed "ay"</td><td class="fr">café / você</td></tr>
<tr><td><b>ó / ô</b></td><td>open "aw" / closed "oh"</td><td class="fr">avó (grandma) / avô (grandpa)</td></tr>
</table>
<div class="box red"><b>Worth memorising</b><span class="fr">avó</span> = grandmother, <span class="fr">avô</span> = grandfather. One accent apart, and Brazilians will absolutely notice.</div>
`},

{id:"giria", title:"Gíria — How Brazilians Actually Talk", sub:"The slang, from day one rather than year three", tag:"Street Portuguese", body:`
<h3>Why this comes early</h3>
<p>Brazilian speech is enormously informal. Learning textbook Portuguese first and slang later means spending a year unable to follow any real conversation. These are not advanced extras — several are more common than the "correct" forms.</p>

<h3>Greeting and reacting</h3>
<table>
<tr><th>Slang</th><th>Say it</th><th>Means</th></tr>
<tr><td class="fr">E aí?</td><td class="say">ee ah-EE</td><td>What's up? — the standard casual opener</td></tr>
<tr><td class="fr">Beleza?</td><td class="say">beh-LEH-zah</td><td>All good? — and also the answer</td></tr>
<tr><td class="fr">Tudo bem? / Tudo bom?</td><td class="say">TOO-doo BAYN</td><td>Both question and answer</td></tr>
<tr><td class="fr">Valeu</td><td class="say">vah-LEH-oo</td><td>Cheers, thanks</td></tr>
<tr><td class="fr">Falou</td><td class="say">fah-LOH</td><td>Later / got it — a sign-off</td></tr>
<tr><td class="fr">Nossa!</td><td class="say">NOH-sah</td><td>Wow! (short for Nossa Senhora)</td></tr>
<tr><td class="fr">Caramba!</td><td class="say">kah-RAHM-bah</td><td>Damn! Wow!</td></tr>
<tr><td class="fr">Pô</td><td class="say">poh</td><td>Man… come on. A softened swear.</td></tr>
<tr><td class="fr">Né?</td><td class="say">neh</td><td>Right? — tagged onto everything</td></tr>
</table>

<h3>Describing things</h3>
<table>
<tr><td class="fr">legal</td><td class="say">lay-GOW</td><td>cool, nice — the most-used word in Brazil</td></tr>
<tr><td class="fr">massa</td><td class="say">MAH-sah</td><td>awesome</td></tr>
<tr><td class="fr">maneiro</td><td class="say">mah-NAY-roo</td><td>cool (Rio)</td></tr>
<tr><td class="fr">chato</td><td class="say">SHAH-too</td><td>annoying or boring — used constantly</td></tr>
<tr><td class="fr">bagunça</td><td class="say">bah-GOON-sah</td><td>a mess</td></tr>
<tr><td class="fr">treta</td><td class="say">TREH-tah</td><td>drama, beef</td></tr>
</table>

<h3>People</h3>
<table>
<tr><td class="fr">cara</td><td class="say">KAH-rah</td><td>guy, mate — literally "face"</td></tr>
<tr><td class="fr">mano</td><td class="say">MAH-noo</td><td>bro (São Paulo)</td></tr>
<tr><td class="fr">galera</td><td class="say">gah-LEH-rah</td><td>the crowd, the gang</td></tr>
<tr><td class="fr">gente</td><td class="say">ZHEN-chee</td><td>people — and "a gente" means "we"</td></tr>
</table>

<h3>The contractions everyone uses</h3>
<div class="box blue"><b>Nobody says the full forms</b>
<span class="fr">estou</span> → <span class="fr">tô</span> · <span class="fr">está</span> → <span class="fr">tá</span> · <span class="fr">para</span> → <span class="fr">pra</span> · <span class="fr">para o</span> → <span class="fr">pro</span> · <span class="fr">vamos</span> → <span class="fr">vamo</span> · <span class="fr">você</span> → <span class="fr">cê</span><br><br>
<span class="fr">Tô cansado.</span> — I'm tired.<br>
<span class="fr">Tá bom.</span> — Okay.<br>
<span class="fr">Vou pro trabalho.</span> — I'm off to work.</div>

<h3>Saudade — the famous one</h3>
<p><span class="fr">Saudade</span> <span class="say">sow-DAH-jee</span> is a longing for something or someone absent. It is not quite "missing", not quite "nostalgia". Brazilians are proud that it does not translate.</p>
<p><span class="fr">Que saudade!</span> — I miss it so much. · <span class="fr">Estou com saudade de você.</span> — I miss you.</p>

<h3>Softening and reassurance</h3>
<table>
<tr><td class="fr">Fica tranquilo</td><td>Relax, don't worry — extremely Brazilian</td></tr>
<tr><td class="fr">Foi mal</td><td>My bad</td></tr>
<tr><td class="fr">Mais ou menos</td><td>So-so</td></tr>
<tr><td class="fr">Vamos ver</td><td>We'll see</td></tr>
<tr><td class="fr">Se Deus quiser</td><td>God willing — sincere, not ironic</td></tr>
</table>
<div class="box red"><b>One to be careful with</b><span class="fr">gostoso</span> means "delicious" about food and "hot" about a person. <span class="fr">A comida está gostosa</span> is fine. Said to a stranger it is a come-on.</div>
`},

{id:"gramatica", title:"Gramática — The Essentials", sub:"Ser vs estar, gender, and the future the easy way", tag:"Core", body:`
<h3>Ser vs Estar — two verbs for "to be"</h3>
<table>
<tr><th>SER — permanent</th><th>ESTAR — temporary</th></tr>
<tr><td>identity, origin, character</td><td>state, mood, location</td></tr>
<tr><td class="fr">Eu sou americano.</td><td class="fr">Eu estou cansado.</td></tr>
<tr><td>I am American.</td><td>I am tired.</td></tr>
<tr><td class="fr">Ela é médica.</td><td class="fr">Ela está no hospital.</td></tr>
<tr><td>She is a doctor.</td><td>She is at the hospital.</td></tr>
</table>
<table>
<tr><th>SER</th><th>ESTAR</th></tr>
<tr><td class="fr">eu sou</td><td class="fr">eu estou (tô)</td></tr>
<tr><td class="fr">você é</td><td class="fr">você está (tá)</td></tr>
<tr><td class="fr">ele/ela é</td><td class="fr">ele/ela está</td></tr>
<tr><td class="fr">a gente é</td><td class="fr">a gente está</td></tr>
<tr><td class="fr">eles são</td><td class="fr">eles estão</td></tr>
</table>
<div class="box red"><b>The meaning genuinely changes</b><span class="fr">Ele é chato</span> = he is a boring person. <span class="fr">Ele está chato</span> = he is being annoying today.</div>

<h3>Gender and articles</h3>
<table>
<tr><th></th><th>Masculine</th><th>Feminine</th></tr>
<tr><th>the</th><td class="fr">o carro</td><td class="fr">a casa</td></tr>
<tr><th>a</th><td class="fr">um carro</td><td class="fr">uma casa</td></tr>
<tr><th>plural</th><td class="fr">os carros</td><td class="fr">as casas</td></tr>
</table>
<p>Usually <b>-o</b> is masculine and <b>-a</b> is feminine, which makes it far more predictable than French. Watch for <span class="fr">o problema, o dia, a mão</span>.</p>
<div class="box"><b>Brazilians use the article with names</b><span class="fr">O Josh está aqui.</span> — Josh is here. Dropping it sounds oddly formal.</div>

<h3>You: você, not tu</h3>
<p>Brazil uses <span class="fr">você</span> for almost everyone, and it takes the <b>he/she</b> verb form. For respect, use <span class="fr">o senhor</span> / <span class="fr">a senhora</span>.</p>
<p>And for "we", real speech overwhelmingly prefers <span class="fr">a gente</span> — which also takes the he/she form:</p>
<p><span class="fr">A gente vai amanhã.</span> — We're going tomorrow.</p>

<h3>The future, the easy way</h3>
<p><b>ir + infinitive</b> — exactly like English "going to".</p>
<p><span class="fr">Eu vou comer.</span> — I'm going to eat.<br>
<span class="fr">A gente vai viajar.</span> — We're going to travel.</p>
<table>
<tr><td class="fr">eu vou</td><td class="fr">você vai</td><td class="fr">a gente vai</td><td class="fr">eles vão</td></tr>
</table>

<h3>Right now: estar + -ndo</h3>
<p>Brazil uses the gerund, unlike Portugal.</p>
<p><span class="fr">Estou comendo.</span> — I'm eating. · <span class="fr">Tô indo!</span> — I'm on my way!</p>

<h3>Ter — to have, and "there is"</h3>
<p><span class="fr">Eu tenho dois filhos.</span> — I have two children.<br>
<span class="fr">Tem banheiro aqui?</span> — Is there a bathroom here? <i>(Brazilians use ter for "there is", not há.)</i></p>
`},

{id:"armadilhas", title:"Armadilhas — False Friends", sub:"Words that look English or Spanish and are not", tag:"Fix these", body:`
<h3>Looks English, isn't</h3>
<table>
<tr><th>Portuguese</th><th>Actually means</th><th>NOT</th></tr>
<tr><td class="fr">puxar</td><td>to pull</td><td>to push — doors marked <b>PUXE</b> mean PULL</td></tr>
<tr><td class="fr">pretender</td><td>to intend</td><td>to pretend (= fingir)</td></tr>
<tr><td class="fr">esquisito</td><td>weird, strange</td><td>exquisite (= requintado)</td></tr>
<tr><td class="fr">assistir</td><td>to watch</td><td>to assist (= ajudar)</td></tr>
<tr><td class="fr">a oficina</td><td>workshop, garage</td><td>office (= escritório)</td></tr>
<tr><td class="fr">o copo</td><td>drinking glass</td><td>cup (= xícara)</td></tr>
<tr><td class="fr">a salsa</td><td>parsley</td><td>sauce (= molho)</td></tr>
<tr><td class="fr">costume</td><td>a custom, habit</td><td>costume (= fantasia)</td></tr>
<tr><td class="fr">livraria</td><td>bookshop</td><td>library (= biblioteca)</td></tr>
<tr><td class="fr">o parente</td><td>a relative</td><td>parent (= pai/mãe)</td></tr>
</table>
<div class="box red"><b>The one that matters on day one</b>Brazilian doors say <b>PUXE</b> (pull) and <b>EMPURRE</b> (push). PUXE looks like "push" and means the opposite. Everyone gets this wrong once.</div>

<h3>Looks Spanish, isn't</h3>
<table>
<tr><th>Portuguese</th><th>Means</th><th>Spanish trap</th></tr>
<tr><td class="fr">Fecha!</td><td>Close (it)!</td><td>fecha = date in Spanish</td></tr>
<tr><td class="fr">o escritório</td><td>office</td><td>escritorio = desk in Spanish</td></tr>
<tr><td class="fr">borracha</td><td>rubber, eraser</td><td>borracha = drunk in Spanish</td></tr>
<tr><td class="fr">ninho</td><td>nest</td><td>niño = child in Spanish</td></tr>
<tr><td class="fr">largo</td><td>wide</td><td>largo = long in Spanish</td></tr>
<tr><td class="fr">exquisito / esquisito</td><td>weird in PT, delicious in ES</td><td>opposite connotations</td></tr>
</table>

<h3>Two to handle with care</h3>
<div class="box red"><b>gostoso</b>About food: delicious. About a person: sexually attractive. <span class="fr">A comida está gostosa</span> is a compliment to the cook. Said to someone, it is a proposition.</div>
<div class="box"><b>Obrigado / obrigada</b>You match it to <b>your own</b> gender, not the person you're thanking. A man always says <b>obrigado</b>; a woman always says <b>obrigada</b>.</div>
`},

{id:"sobreviver", title:"The 20 Phrases That Get You Through Brazil", sub:"Print this before a trip", tag:"Emergency sheet", body:`
<table>
<tr><th>Portuguese</th><th>Say it</th><th>Means</th></tr>
<tr><td class="fr">Oi / Bom dia</td><td class="say">oy / bohn JEE-ah</td><td>Hi / Good morning</td></tr>
<tr><td class="fr">Tudo bem?</td><td class="say">TOO-doo BAYN</td><td>How's it going?</td></tr>
<tr><td class="fr">Obrigado / Obrigada</td><td class="say">oh-bree-GAH-doo/-dah</td><td>Thank you (match your own gender)</td></tr>
<tr><td class="fr">Por favor</td><td class="say">poor fah-VOR</td><td>Please</td></tr>
<tr><td class="fr">Com licença</td><td class="say">kohn lee-SEN-sah</td><td>Excuse me</td></tr>
<tr><td class="fr">Desculpa</td><td class="say">dees-KOOL-pah</td><td>Sorry</td></tr>
<tr><td class="fr">Você fala inglês?</td><td class="say">voh-SEH FAH-lah een-GLESS</td><td>Do you speak English?</td></tr>
<tr><td class="fr">Não entendi</td><td class="say">nown en-ten-JEE</td><td>I didn't understand</td></tr>
<tr><td class="fr">Fala devagar, por favor</td><td class="say">FAH-lah jee-vah-GAR</td><td>Speak slowly, please</td></tr>
<tr><td class="fr">Eu queria…</td><td class="say">eh-oo keh-REE-ah</td><td>I would like…</td></tr>
<tr><td class="fr">Quanto custa?</td><td class="say">KWAN-too KOOS-tah</td><td>How much is it?</td></tr>
<tr><td class="fr">A conta, por favor</td><td class="say">ah KOHN-tah</td><td>The bill, please</td></tr>
<tr><td class="fr">Onde fica o banheiro?</td><td class="say">OHN-jee FEE-kah oo bahn-YAY-roo</td><td>Where's the bathroom?</td></tr>
<tr><td class="fr">Tem…?</td><td class="say">tayn</td><td>Is there…? / Do you have…?</td></tr>
<tr><td class="fr">Aceita cartão?</td><td class="say">ah-SAY-tah kar-TOWN</td><td>Do you take card?</td></tr>
<tr><td class="fr">Uma cerveja gelada</td><td class="say">OO-mah sehr-VEH-zhah zheh-LAH-dah</td><td>An ice-cold beer</td></tr>
<tr><td class="fr">Que gostoso!</td><td class="say">kee gohs-TOH-zoo</td><td>Delicious! (about food only)</td></tr>
<tr><td class="fr">Preciso de ajuda</td><td class="say">preh-SEE-zoo jee ah-ZHOO-dah</td><td>I need help</td></tr>
<tr><td class="fr">Socorro!</td><td class="say">soh-KOH-hoo</td><td>Help! (emergency)</td></tr>
<tr><td class="fr">Tchau, valeu!</td><td class="say">chow vah-LEH-oo</td><td>Bye, cheers!</td></tr>
</table>
<div class="box blue"><b>Emergency numbers in Brazil</b>190 police · 192 ambulance · 193 fire</div>
<div class="box"><b>Two habits that help immediately</b>Say <span class="fr">oi</span> rather than <span class="fr">olá</span> — it is what people actually use. And add <span class="fr">né?</span> to the end of statements; it is the Brazilian equivalent of "right?" and makes you sound conversational instantly.</div>
`},
];

/* ============================================================
   PORTUGUESE SETS — ordered, but do them however you like
   ============================================================ */
const PT_SETS = [
 [1,"Sons do português","The five rules that make you understandable. Start here."],
 [2,"O essencial","Greetings, courtesy, and the first thirty words."],
 [3,"Gíria brasileira","How people actually talk — not saved for later."],
 [4,"Comida e restaurante","Ordering, paying, and the beer temperature that matters."],
 [5,"Na rua","Directions, money, transport and getting help."],
 [6,"Ser, estar e os verbos","The two verbs for 'to be', and the easy future."],
];

const PT_LESSONS = {};

PT_LESSONS[1] = {
title:"Sons do português",
mins:20, goal:"Pronounce Brazilian Portuguese so people understand you — five rules, nothing else.",
body:`
<h3>Why sound comes first here too</h3>
<p>Portuguese is written almost like Spanish and spoken nothing like it. English speakers who read it as Spanish are simply not understood. Five rules fix that, and you already own one of them from French.</p>
<div class="box red"><b>Read everything out loud.</b>Same rule as French Day 1. Your mouth is learning a physical skill.</div>

<h3>1. R at the start of a word = English H</h3>
<table>
<tr><td class="fr">Rio</td><td class="say">HEE-oo</td></tr>
<tr><td class="fr">rua</td><td class="say">HOO-ah</td><td>street</td></tr>
<tr><td class="fr">rato</td><td class="say">HAH-too</td><td>rat</td></tr>
<tr><td class="fr">carro</td><td class="say">KAH-hoo</td><td>car — RR is also H</td></tr>
</table>
<p>But a single R <b>between vowels</b> is a light tap: <span class="fr">caro</span> <span class="say">KAH-roo</span> (expensive) vs <span class="fr">carro</span> <span class="say">KAH-hoo</span> (car). Say them back to back until they differ.</p>

<h3>2. DI → JI and TI → CHI</h3>
<div class="box blue"><b>The most Brazilian sound there is</b>Before an "ee" sound, <b>d</b> becomes "j" and <b>t</b> becomes "ch". This catches final <b>-de</b> and <b>-te</b> too, because those end in "ee".</div>
<table>
<tr><td class="fr">dia</td><td class="say">JEE-ah</td><td>day</td></tr>
<tr><td class="fr">bom dia</td><td class="say">bohn JEE-ah</td><td>good morning</td></tr>
<tr><td class="fr">noite</td><td class="say">NOY-chee</td><td>night</td></tr>
<tr><td class="fr">boa tarde</td><td class="say">BOH-ah TAR-jee</td><td>good afternoon</td></tr>
<tr><td class="fr">onde</td><td class="say">OHN-jee</td><td>where</td></tr>
<tr><td class="fr">gente</td><td class="say">ZHEN-chee</td><td>people</td></tr>
</table>

<h3>3. Final -o = "oo", final -e = "ee"</h3>
<p><span class="fr">obrigado</span> <span class="say">oh-bree-GAH-doo</span> · <span class="fr">tudo</span> <span class="say">TOO-doo</span> · <span class="fr">nome</span> <span class="say">NOH-mee</span></p>
<p>Combine with rule 2 and <span class="fr">verde</span> becomes <span class="say">VEHR-jee</span>.</p>

<h3>4. Nasal vowels — you already have this</h3>
<p>The tilde, and any vowel before m or n. Exactly the French Day 1 move: air through the nose, no hard consonant at the end.</p>
<table>
<tr><td class="fr">não</td><td class="say">nown</td><td>no</td></tr>
<tr><td class="fr">pão</td><td class="say">pown</td><td>bread</td></tr>
<tr><td class="fr">bem</td><td class="say">bayn</td><td>well</td></tr>
<tr><td class="fr">sim</td><td class="say">seen</td><td>yes</td></tr>
</table>
<div class="box green"><b>Two languages, one skill</b><span class="fr">pão</span> and French <span class="fr">pain</span> are the same word and nearly the same sound. Every nasal you drill in French is a nasal you already have in Portuguese.</div>

<h3>5. LH = "ly", NH = "ny"</h3>
<p><span class="fr">filho</span> <span class="say">FEEL-yoo</span> · <span class="fr">mulher</span> <span class="say">mool-YEHR</span> · <span class="fr">dinheiro</span> <span class="say">jeen-YAY-roo</span></p>

<h3>Two extras worth knowing now</h3>
<ul>
<li>Final <b>-l</b> sounds like <b>w</b>: <span class="fr">legal</span> = <span class="say">lay-GOW</span>, <span class="fr">Brasil</span> = <span class="say">brah-ZEEW</span>.</li>
<li><b>ç</b> is always "s", <b>ch</b> is "sh", and <b>s</b> between vowels is "z" (<span class="fr">casa</span> = <span class="say">KAH-zah</span>).</li>
</ul>

<h3>Out loud — five minutes</h3>
<p><b>Drill A.</b> <span class="fr">Rio — rua — rato — carro</span> then <span class="fr">caro — carro — caro — carro</span></p>
<p><b>Drill B.</b> <span class="fr">bom dia — boa tarde — boa noite — onde — gente</span></p>
<p><b>Drill C.</b> <span class="fr">não — pão — bem — sim</span> — nose open, nothing hard at the end.</p>
<p><b>Drill D.</b> The whole greeting: <span class="fr">Oi! Tudo bem? Obrigado! Tchau!</span></p>
`,
homework:[
 {t:"Say the greeting sequence ten times", d:"Oi — Tudo bem? — Obrigado — Tchau. Standing up, out loud. Get the -o endings to 'oo' and the R in 'obrigado' as a light tap."},
 {t:"Caro vs carro", d:"Say the pair twenty times alternating. This single distinction is the difference between 'expensive' and 'car', and English speakers flatten both into the same word."},
 {t:"Hunt the JI and CHI", d:"Say these applying rule 2: dia, tarde, noite, onde, gente, verde, sete, vinte. Every one changes."},
 {t:"Compare with French", d:"Say pão then pain, não then non. Notice they are the same nasal move. Two languages, one mouth position — this is why doing them together works."}
],
quiz:[
 {t:"mc", q:"How is <b>Rio</b> pronounced?", a:["HEE-oo","REE-oh","ZHEE-oo","HEE-oh"], c:0, why:"An R at the start of a word is an English H sound. RR in the middle is the same."},
 {t:"mc", q:"What is the difference between <b>caro</b> and <b>carro</b>?", a:["caro = expensive (tapped r); carro = car (H sound)","No difference","caro is plural","carro is a verb"], c:0, why:"Single R between vowels is a light tap; RR is the H sound. A genuine minimal pair."},
 {t:"mc", q:"<b>Bom dia</b> is pronounced…", a:["bohn JEE-ah","bohm DEE-ah","bohn DEE-ah","bom JEE-uh"], c:0, why:"D before an 'ee' sound becomes 'j'. This is the most recognisably Brazilian sound."},
 {t:"mc", q:"<b>Noite</b> is pronounced…", a:["NOY-chee","NOY-tay","NOY-teh","NWAH-chee"], c:0, why:"T before 'ee' becomes 'ch', and the final -e is 'ee'."},
 {t:"mc", q:"Final <b>-o</b> in Portuguese sounds like…", a:["oo","oh","aw","uh"], c:0, why:"obrigado = oh-bree-GAH-doo, tudo = TOO-doo."},
 {t:"mc", q:"<b>Filho</b> is pronounced…", a:["FEEL-yoo","FEEL-hoo","FEE-loo","FEEL-choo"], c:0, why:"lh = 'ly'. Similarly nh = 'ny': dinheiro = jeen-YAY-roo."},
 {t:"mc", q:"Why is the nasal in <b>pão</b> already familiar to you?", a:["It is the same sound as French pain","Portuguese borrowed it from English","It is pronounced like Spanish","It is not nasal"], c:0, why:"Same word, same nasal move you drilled on French Day 1."},
 {t:"mc", q:"<b>Legal</b> (cool) is pronounced…", a:["lay-GOW","lay-GAL","LEH-gal","lay-GAHL"], c:0, why:"A final -l becomes a 'w' sound. Brasil = brah-ZEEW."},
 {t:"type", q:"Write the Portuguese for <b>thank you</b>, as a man would say it.", ans:["obrigado"], why:"<b>Obrigado</b> for a man, <b>obrigada</b> for a woman — matched to your own gender, not the listener's."},
 {t:"type", q:"Write the Portuguese for <b>good morning</b>.", ans:["bom dia"], why:"<b>Bom dia</b> — bohn JEE-ah."},
 {t:"listen", play:"Oi, tudo bem?", q:"Listen, then choose what you heard.", a:["Hi, how's it going?","Good morning, sir.","Thank you very much.","Goodbye, see you soon."], c:0, why:"<b>Oi, tudo bem?</b> — the standard Brazilian opener."},
 {t:"listen", play:"Bom dia! Obrigado!", q:"Listen, then choose what you heard.", a:["Good morning! Thank you!","Good night! Please!","Hello! Excuse me!","How much? Thanks!"], c:0, why:"<b>Bom dia! Obrigado!</b> Note the 'JEE' in dia and the 'oo' at the end of obrigado."}
]
};

PT_LESSONS[2] = {
title:"O essencial",
mins:20, goal:"Greet anyone, introduce yourself, and be polite — with the words Brazilians actually use.",
body:`
<h3>Greetings by time of day</h3>
<table>
<tr><td class="fr">Oi</td><td class="say">oy</td><td>Hi — the default, any time</td></tr>
<tr><td class="fr">Olá</td><td class="say">oh-LA</td><td>Hello — slightly more formal</td></tr>
<tr><td class="fr">Bom dia</td><td class="say">bohn JEE-ah</td><td>until midday</td></tr>
<tr><td class="fr">Boa tarde</td><td class="say">BOH-ah TAR-jee</td><td>midday to sunset</td></tr>
<tr><td class="fr">Boa noite</td><td class="say">BOH-ah NOY-chee</td><td>after dark — hello AND goodbye</td></tr>
</table>
<div class="box blue"><b>Use oi</b>Textbooks teach <span class="fr">olá</span>. Brazilians say <span class="fr">oi</span>. It is warm, universal and never wrong outside a very formal setting.</div>

<h3>The exchange</h3>
<table>
<tr><td class="fr">— Oi, tudo bem?</td><td>— Hi, how's it going?</td></tr>
<tr><td class="fr">— Tudo bom, e você?</td><td>— All good, and you?</td></tr>
<tr><td class="fr">— Tudo bem, obrigado.</td><td>— All good, thanks.</td></tr>
</table>
<p><span class="fr">Tudo bem</span> and <span class="fr">tudo bom</span> are interchangeable, and each works as both the question and the answer. Answer one with the other and you sound native.</p>

<h3>Courtesy</h3>
<table>
<tr><td class="fr">Obrigado / Obrigada</td><td>Thank you — <b>match your own gender</b></td></tr>
<tr><td class="fr">De nada</td><td>You're welcome</td></tr>
<tr><td class="fr">Por favor</td><td>Please</td></tr>
<tr><td class="fr">Com licença</td><td>Excuse me (to pass or interrupt)</td></tr>
<tr><td class="fr">Desculpa</td><td>Sorry</td></tr>
</table>
<div class="box red"><b>The gender rule catches everyone</b>A man always says <b>obrigado</b>. A woman always says <b>obrigada</b>. It agrees with the speaker, never with the person being thanked.</div>

<h3>Introducing yourself</h3>
<table>
<tr><td class="fr">Meu nome é Oliver.</td><td>My name is Oliver.</td></tr>
<tr><td class="fr">Eu sou americano.</td><td>I'm American.</td></tr>
<tr><td class="fr">Eu moro em Chicago.</td><td>I live in Chicago.</td></tr>
<tr><td class="fr">Prazer!</td><td>Nice to meet you!</td></tr>
<tr><td class="fr">Qual é o seu nome?</td><td>What's your name?</td></tr>
</table>
<p>Put together: <span class="fr">Oi! Meu nome é Oliver. Eu sou americano e moro em Chicago. Prazer!</span></p>

<h3>You and we</h3>
<p><span class="fr">você</span> = you, for almost everyone. Brazil barely uses <span class="fr">tu</span>. For respect: <span class="fr">o senhor</span> / <span class="fr">a senhora</span>.</p>
<p><span class="fr">a gente</span> = we. Grammatically it behaves like "he/she", and it is far more common than <span class="fr">nós</span>: <span class="fr">A gente vai agora.</span></p>

<h3>The three survival phrases</h3>
<table>
<tr><td class="fr">Não entendi.</td><td class="say">nown en-ten-JEE</td><td>I didn't understand.</td></tr>
<tr><td class="fr">Fala devagar, por favor.</td><td class="say">FAH-lah jee-vah-GAR</td><td>Speak slowly, please.</td></tr>
<tr><td class="fr">Você fala inglês?</td><td class="say">voh-SEH FAH-lah een-GLESS</td><td>Do you speak English?</td></tr>
</table>

<h3>Out loud</h3>
<p><b>Drill A.</b> The full exchange, both parts, five times.</p>
<p><b>Drill B.</b> Your introduction — four sentences — until you stop reading.</p>
<p><b>Drill C.</b> The three survival phrases, said with confidence rather than apology.</p>
`,
homework:[
 {t:"Introduce yourself ten times", d:"Oi! Meu nome é Oliver. Eu sou americano e moro em Chicago. Prazer! Say it until it comes out without assembling it."},
 {t:"Obrigado, correctly", d:"Say obrigado out loud twenty times, and consciously note it matches you, not the person you're thanking. This is the most common beginner error in Portuguese."},
 {t:"Swap tudo bem and tudo bom", d:"Practise answering a 'tudo bem?' with 'tudo bom' and vice versa. That swap is what makes the exchange sound natural rather than rehearsed."},
 {t:"Record and compare", d:"Record your introduction and play it against the app's audio. Check three things: the JI in dia, the 'oo' at the end of obrigado, and the nasal in não."}
],
quiz:[
 {t:"mc", q:"A man thanking a woman says…", a:["obrigado","obrigada","obrigados","obrigade"], c:0, why:"It agrees with the <b>speaker</b>. A man always says obrigado, whoever he is thanking."},
 {t:"mc", q:"Which greeting do Brazilians actually use most?", a:["Oi","Olá","Bom dia","Saudações"], c:0, why:"<b>Oi</b> is the everyday default. Olá is what textbooks teach."},
 {t:"mc", q:"<b>Boa noite</b> is used…", a:["as both hello and goodbye after dark","only as goodbye","only as hello","only before bed"], c:0, why:"Unlike English, it does both jobs."},
 {t:"mc", q:"What do most Brazilians say for <b>we</b>?", a:["a gente","nós","vocês","eles"], c:0, why:"<b>A gente</b> dominates speech, and it takes the he/she verb form: a gente vai."},
 {t:"mc", q:"<b>Com licença</b> is used when…", a:["you need to pass or interrupt","you have made a mistake","you are leaving","you are thanking someone"], c:0, why:"For apologising after a mistake you want <b>desculpa</b>."},
 {t:"mc", q:"Which is the right reply to <b>Tudo bem?</b>", a:["Tudo bom, e você?","Com licença.","De nada.","Prazer."], c:0, why:"Answering one form with the other is what natives do."},
 {t:"mc", q:"To show respect to an older stranger you would use…", a:["o senhor / a senhora","você","tu","a gente"], c:0, why:"Você is neutral and fine almost everywhere, but o senhor / a senhora adds deference."},
 {t:"type", q:"Write the Portuguese for <b>I didn't understand.</b>", ans:["nao entendi","não entendi"], why:"<b>Não entendi.</b> Your most useful sentence in the first month."},
 {t:"type", q:"Write the Portuguese for <b>My name is Oliver.</b>", ans:["meu nome e oliver","meu nome é oliver"], why:"<b>Meu nome é Oliver.</b>"},
 {t:"listen", play:"Oi! Meu nome é Oliver. Prazer!", q:"Listen, then choose what you heard.", a:["Hi! My name is Oliver. Nice to meet you!","Hello! I'm from Chicago. Thanks!","Good morning! What's your name?","Hi! How are you? Goodbye!"], c:0, why:"<b>Oi! Meu nome é Oliver. Prazer!</b>"},
 {t:"listen", play:"Fala devagar, por favor.", q:"Listen. What are you asking for?", a:["For them to speak more slowly","For them to speak English","For directions","For the bill"], c:0, why:"<b>Fala devagar, por favor.</b> Say it confidently or they will switch to English."}
]
};

PT_LESSONS[3] = {
title:"Gíria brasileira",
mins:20, goal:"Follow a real conversation, not a textbook one.",
body:`
<h3>Why this is set 3 and not set 30</h3>
<p>Brazilian speech is deeply informal. Several slang words are more common than their textbook equivalents — <span class="fr">legal</span> outnumbers <span class="fr">bom</span> in ordinary conversation. Learning these late means a year of not following anything real.</p>

<h3>Openers and sign-offs</h3>
<table>
<tr><td class="fr">E aí?</td><td class="say">ee ah-EE</td><td>What's up? — the standard casual hello</td></tr>
<tr><td class="fr">Beleza?</td><td class="say">beh-LEH-zah</td><td>All good? — and also the reply</td></tr>
<tr><td class="fr">Valeu</td><td class="say">vah-LEH-oo</td><td>Cheers, thanks</td></tr>
<tr><td class="fr">Falou</td><td class="say">fah-LOH</td><td>Later — a sign-off</td></tr>
<tr><td class="fr">Tchau, valeu!</td><td class="say">chow vah-LEH-oo</td><td>Bye, cheers!</td></tr>
</table>
<p><span class="fr">— E aí, beleza? — Beleza!</span> is a complete, entirely normal exchange.</p>

<h3>Reactions</h3>
<table>
<tr><td class="fr">Nossa!</td><td>Wow! — short for Nossa Senhora</td></tr>
<tr><td class="fr">Caramba!</td><td>Damn! Wow! — mild</td></tr>
<tr><td class="fr">Pô</td><td>Man… come on — a softened swear</td></tr>
<tr><td class="fr">Que legal!</td><td>How cool!</td></tr>
<tr><td class="fr">Que massa!</td><td>That's awesome!</td></tr>
<tr><td class="fr">Que chato!</td><td>How annoying!</td></tr>
<tr><td class="fr">Que pena!</td><td>What a shame!</td></tr>
<tr><td class="fr">Foi mal</td><td>My bad</td></tr>
</table>

<h3>Describing</h3>
<p><span class="fr">legal</span> (cool) · <span class="fr">massa</span> (awesome) · <span class="fr">maneiro</span> (cool, Rio) · <span class="fr">chato</span> (annoying or boring) · <span class="fr">bagunça</span> (a mess) · <span class="fr">treta</span> (drama)</p>
<div class="box"><b>chato does a lot of work</b>A boring film, an annoying person, a tedious task — all <span class="fr">chato</span>. You will hear it constantly.</div>

<h3>People</h3>
<p><span class="fr">cara</span> (guy, mate — literally "face") · <span class="fr">mano</span> (bro, São Paulo) · <span class="fr">galera</span> (the gang) · <span class="fr">gente</span> (people, and "a gente" = we)</p>

<h3>The contractions</h3>
<div class="box blue"><b>Nobody uses the full forms in speech</b>
<span class="fr">estou → tô</span> · <span class="fr">está → tá</span> · <span class="fr">para → pra</span> · <span class="fr">para o → pro</span> · <span class="fr">vamos → vamo</span><br><br>
<span class="fr">Tô cansado.</span> I'm tired. · <span class="fr">Tá bom.</span> Okay. · <span class="fr">Vou pro trabalho.</span> I'm off to work.</div>

<h3>Né? — the tag that transforms your speech</h3>
<p>A contraction of <span class="fr">não é</span>, stuck on the end of statements like English "right?" or "innit". Brazilians use it constantly, and adopting it makes you sound conversational faster than any amount of vocabulary.</p>
<p><span class="fr">Legal, né?</span> · <span class="fr">Tá caro, né?</span> · <span class="fr">Você é americano, né?</span></p>

<h3>Saudade</h3>
<p><span class="fr">Saudade</span> <span class="say">sow-DAH-jee</span> — longing for something absent. Not quite missing, not quite nostalgia. Brazilians are proud it doesn't translate.</p>
<p><span class="fr">Que saudade!</span> · <span class="fr">Estou com saudade de você.</span></p>

<h3>Reassurance</h3>
<p><span class="fr">Fica tranquilo</span> — relax, don't worry. Deeply Brazilian, and used far more readily than an English speaker would expect.</p>

<div class="box red"><b>The one to be careful with</b><span class="fr">gostoso</span> means delicious about food and attractive about a person. <span class="fr">A comida está gostosa</span> compliments the cook. Said to a person, it is a proposition.</div>
`,
homework:[
 {t:"Run the casual exchange", d:"E aí, beleza? — Beleza! — Valeu! — Falou! Say all four out loud ten times until they run together naturally."},
 {t:"Add né to everything", d:"Take ten statements you can already make in Portuguese and tag né? onto each. It is the single fastest way to stop sounding like a textbook."},
 {t:"Use the contractions only", d:"For the rest of today, never say estou or está — only tô and tá. Full forms in speech mark you as a learner."},
 {t:"Sort by register", d:"Split these into 'fine with anyone' and 'friends only': e aí, beleza, valeu, pô, mano, legal, treta, com licença. Getting register wrong is worse than not knowing the word."}
],
quiz:[
 {t:"mc", q:"<b>E aí?</b> means…", a:["What's up?","Where is it?","And then?","Is that so?"], c:0, why:"The standard Brazilian casual opener. Literally 'and there?'"},
 {t:"mc", q:"<b>Beleza</b> can be…", a:["both the question and the answer","only a question","only a noun meaning beauty","only used in Rio"], c:0, why:"— E aí, beleza? — Beleza! is a complete exchange."},
 {t:"mc", q:"<b>Chato</b> means…", a:["annoying or boring","flat","charming","cheap"], c:0, why:"It covers a dull film, a tedious task and an irritating person alike."},
 {t:"mc", q:"<b>Né?</b> is a contraction of…", a:["não é","nada é","nem é","no e"], c:0, why:"Tagged onto statements like 'right?'. Adopting it is the quickest fluency upgrade there is."},
 {t:"mc", q:"In real speech, <b>estou</b> becomes…", a:["tô","tou","tá","es"], c:0, why:"<b>Tô cansado.</b> Full forms in speech sound like a textbook."},
 {t:"mc", q:"<b>Saudade</b> means…", a:["a longing for something or someone absent","sadness","health","greetings"], c:0, why:"Famously has no clean English equivalent — somewhere between missing and nostalgia."},
 {t:"mc", q:"Saying <b>gostoso</b> to a person means…", a:["you find them attractive","their cooking is good","they are kind","they are funny"], c:0, why:"About food it means delicious; about a person it is a come-on. Keep it for the food."},
 {t:"mc", q:"Which is safe to use with anyone?", a:["Com licença","Pô","Mano","Treta"], c:0, why:"<b>Com licença</b> is neutral courtesy. The other three are casual."},
 {t:"type", q:"Write the casual Portuguese for <b>thanks</b> (one word, slang).", ans:["valeu"], why:"<b>Valeu</b> — casual thanks, often paired with tchau."},
 {t:"type", q:"Write the Portuguese for <b>Relax, don't worry.</b>", ans:["fica tranquilo","fica tranquila"], why:"<b>Fica tranquilo.</b> Deeply Brazilian reassurance."},
 {t:"listen", play:"E aí, beleza?", q:"Listen, then choose the best reply.", a:["Beleza!","Com licença.","Não entendi.","De nada."], c:0, why:"<b>Beleza</b> answers itself — the whole exchange is two words."},
 {t:"listen", play:"Nossa, que legal!", q:"Listen. What is being expressed?", a:["Enthusiasm — wow, how cool!","Annoyance","An apology","A question about price"], c:0, why:"<b>Nossa</b> is the all-purpose Brazilian 'wow', and <b>legal</b> means cool."}
]
};

PT_LESSONS[4] = {
title:"Comida e restaurante",
mins:20, goal:"Order, ask for the bill, and get your beer at the right temperature.",
body:`
<h3>Ordering</h3>
<table>
<tr><td class="fr">Eu queria…</td><td class="say">eh-oo keh-REE-ah</td><td>I would like… (politer than eu quero)</td></tr>
<tr><td class="fr">Um café, por favor.</td><td></td><td>A coffee, please.</td></tr>
<tr><td class="fr">Para mim…</td><td class="say">pah-rah MEEN</td><td>For me…</td></tr>
<tr><td class="fr">Tem…?</td><td class="say">tayn</td><td>Do you have…? / Is there…?</td></tr>
<tr><td class="fr">A conta, por favor.</td><td></td><td>The bill, please.</td></tr>
<tr><td class="fr">Aceita cartão?</td><td class="say">ah-SAY-tah kar-TOWN</td><td>Do you take card?</td></tr>
</table>

<h3>The food you will actually meet</h3>
<table>
<tr><td class="fr">arroz e feijão</td><td>rice and beans — with almost everything</td></tr>
<tr><td class="fr">feijoada</td><td>the national dish: black bean and pork stew</td></tr>
<tr><td class="fr">pão de queijo</td><td>cheese bread — small, hot, addictive</td></tr>
<tr><td class="fr">churrasco</td><td>barbecue</td></tr>
<tr><td class="fr">salgado</td><td>a savoury snack (coxinha, pastel)</td></tr>
<tr><td class="fr">açaí</td><td class="say">ah-sah-EE</td><td>eaten frozen, like sorbet</td></tr>
<tr><td class="fr">cafezinho</td><td>a small strong coffee, offered everywhere</td></tr>
<tr><td class="fr">caipirinha</td><td>cachaça, lime and sugar</td></tr>
</table>

<h3>The beer rule</h3>
<div class="box blue"><b>Gelada is not optional</b>Brazilians drink beer <b>very</b> cold. Ask for <span class="fr">uma cerveja gelada</span> — an ice-cold beer. In a bar, <span class="fr">um chope</span> is draught beer, and it arrives with a head, deliberately.</div>

<h3>Useful qualifiers</h3>
<table>
<tr><td class="fr">sem açúcar</td><td>without sugar</td></tr>
<tr><td class="fr">com gelo / sem gelo</td><td>with / without ice</td></tr>
<tr><td class="fr">bem passada</td><td>well done (meat)</td></tr>
<tr><td class="fr">mal passada</td><td>rare</td></tr>
<tr><td class="fr">sou alérgico a…</td><td>I'm allergic to…</td></tr>
<tr><td class="fr">não como carne</td><td>I don't eat meat</td></tr>
</table>

<h3>Paying</h3>
<p>Service is usually <b>10%</b> and often already on the bill as <span class="fr">a taxa de serviço</span>. Paying it is normal; declining is allowed. Ask <span class="fr">O serviço está incluído?</span></p>
<p>Splitting: <span class="fr">Pode dividir?</span> — Can you split it?</p>

<h3>Complimenting</h3>
<p><span class="fr">Que gostoso!</span> — Delicious! · <span class="fr">Estava ótimo.</span> — It was excellent.</p>
<div class="box red"><b>About the food only</b>Remember <span class="fr">gostoso</span> said about a person means something else entirely.</div>

<h3>A whole scene</h3>
<table>
<tr><td class="fr">— Boa noite! Tem mesa para dois?</td><td>— Good evening! Table for two?</td></tr>
<tr><td class="fr">— Eu queria uma cerveja gelada, por favor.</td><td>— I'd like an ice-cold beer, please.</td></tr>
<tr><td class="fr">— O que você recomenda?</td><td>— What do you recommend?</td></tr>
<tr><td class="fr">— Que gostoso! Estava ótimo.</td><td>— Delicious! That was excellent.</td></tr>
<tr><td class="fr">— A conta, por favor. Aceita cartão?</td><td>— The bill, please. Do you take card?</td></tr>
</table>
`,
homework:[
 {t:"Perform the restaurant scene", d:"Read all five lines out loud three times, then do it again from the English only. This is the scene you will actually need first."},
 {t:"Order ten things", d:"Eu queria + ten different items, out loud. Getting 'eu queria' automatic matters more than the vocabulary."},
 {t:"The gelada drill", d:"Uma cerveja gelada, por favor. Say it twenty times. It is the single most useful sentence in a Brazilian bar."},
 {t:"Learn five foods properly", d:"Pick five from the list, look up a photo of each, and say the name out loud while looking at it. Attaching a word to an image beats attaching it to a translation."}
],
quiz:[
 {t:"mc", q:"Which is the politer way to order?", a:["Eu queria um café","Eu quero um café","Me dá um café","Um café"], c:0, why:"<b>Eu queria</b> is a softened conditional — the same politeness move as French 'je voudrais'."},
 {t:"mc", q:"<b>Gelada</b> means…", a:["ice-cold","frozen solid","chilled slightly","with ice added"], c:0, why:"Brazilians take beer temperature seriously. Asking for uma cerveja gelada is standard."},
 {t:"mc", q:"<b>Tem…?</b> means…", a:["Do you have…? / Is there…?","How much is…?","Where is…?","Can I have…?"], c:0, why:"Brazilians use ter for 'there is', where Portugal would use há."},
 {t:"mc", q:"What is <b>pão de queijo</b>?", a:["cheese bread","fish stew","a savoury pastry","a coffee"], c:0, why:"Small hot cheese-bread balls, served everywhere."},
 {t:"mc", q:"Service in Brazilian restaurants is usually…", a:["10%, often already on the bill","not expected at all","20%, added automatically","included in the menu prices"], c:0, why:"Ask <b>O serviço está incluído?</b> Paying it is normal; declining is permitted."},
 {t:"mc", q:"How do you ask to split the bill?", a:["Pode dividir?","Pode pagar?","Pode somar?","Pode trocar?"], c:0, why:"<b>Pode dividir?</b> — literally 'can you divide it?'"},
 {t:"mc", q:"<b>Bem passada</b> describes meat that is…", a:["well done","rare","medium","raw"], c:0, why:"<b>Mal passada</b> is rare — literally 'badly passed'."},
 {t:"type", q:"Write the Portuguese for <b>The bill, please.</b>", ans:["a conta por favor","a conta, por favor"], why:"<b>A conta, por favor.</b>"},
 {t:"type", q:"Write the Portuguese for <b>an ice-cold beer</b>.", ans:["uma cerveja gelada"], why:"<b>Uma cerveja gelada.</b> The gelada is the important half."},
 {t:"listen", play:"Eu queria uma cerveja gelada, por favor.", q:"Listen, then choose what you heard.", a:["I'd like an ice-cold beer, please.","I'd like a coffee, please.","The bill, please.","Do you have a table?"], c:0, why:"<b>Eu queria uma cerveja gelada, por favor.</b>"},
 {t:"listen", play:"A conta, por favor. Aceita cartão?", q:"Listen. What is being asked?", a:["For the bill, and whether card is accepted","For the menu, and whether they have beer","For directions to the restaurant","For a table for two"], c:0, why:"<b>A conta, por favor. Aceita cartão?</b> — how every Brazilian meal ends."}
]
};

PT_LESSONS[5] = {
title:"Na rua",
mins:20, goal:"Find things, pay for things, and get help when something goes wrong.",
body:`
<h3>Asking where things are</h3>
<table>
<tr><td class="fr">Onde fica…?</td><td class="say">OHN-jee FEE-kah</td><td>Where is…? (for fixed places)</td></tr>
<tr><td class="fr">Onde tem…?</td><td class="say">OHN-jee tayn</td><td>Where is there a…?</td></tr>
<tr><td class="fr">É perto daqui?</td><td class="say">eh PEHR-too dah-KEE</td><td>Is it near here?</td></tr>
<tr><td class="fr">Como eu chego lá?</td><td class="say">KOH-moo eh-oo SHEH-goo lah</td><td>How do I get there?</td></tr>
</table>
<p><span class="fr">fica</span> is for permanent locations, <span class="fr">tem</span> for "is there one around". <span class="fr">Onde fica o banheiro?</span> vs <span class="fr">Onde tem farmácia?</span></p>

<h3>Understanding the answer</h3>
<table>
<tr><td class="fr">à direita / à esquerda</td><td>to the right / left</td></tr>
<tr><td class="fr">em frente / reto</td><td>straight ahead</td></tr>
<tr><td class="fr">vira</td><td>turn</td></tr>
<tr><td class="fr">na esquina</td><td>on the corner</td></tr>
<tr><td class="fr">do lado de</td><td>next to</td></tr>
<tr><td class="fr">em frente de</td><td>opposite</td></tr>
<tr><td class="fr">perto / longe</td><td>near / far</td></tr>
</table>

<h3>Money</h3>
<table>
<tr><td class="fr">Quanto custa?</td><td>How much is it?</td></tr>
<tr><td class="fr">Quanto é?</td><td>How much? (shorter, very common)</td></tr>
<tr><td class="fr">Muito caro!</td><td>Too expensive!</td></tr>
<tr><td class="fr">Tem desconto?</td><td>Is there a discount?</td></tr>
<tr><td class="fr">Aceita cartão?</td><td>Do you take card?</td></tr>
<tr><td class="fr">Só dinheiro</td><td>Cash only</td></tr>
<tr><td class="fr">o troco</td><td>the change</td></tr>
</table>
<p>The currency is the <b>real</b>, plural <b>reais</b> <span class="say">hay-ICE</span>. Written R$.</p>

<h3>Numbers you need</h3>
<p class="fr">um, dois, três, quatro, cinco, seis, sete, oito, nove, dez</p>
<p class="say">oon, doys, trays, KWAH-troo, SEEN-koo, says, SEH-chee, OY-too, NOH-vee, dess</p>
<p class="fr">vinte (20) · trinta (30) · cinquenta (50) · cem (100) · mil (1000)</p>

<h3>Getting around</h3>
<table>
<tr><td class="fr">o ônibus</td><td>bus</td></tr>
<tr><td class="fr">o metrô</td><td>metro</td></tr>
<tr><td class="fr">o táxi</td><td>taxi</td></tr>
<tr><td class="fr">a passagem</td><td>ticket / fare</td></tr>
<tr><td class="fr">o aeroporto</td><td>airport</td></tr>
<tr><td class="fr">a rodoviária</td><td>bus station</td></tr>
</table>

<h3>When something goes wrong</h3>
<table>
<tr><td class="fr">Preciso de ajuda.</td><td>I need help.</td></tr>
<tr><td class="fr">Socorro!</td><td>Help! (emergency only)</td></tr>
<tr><td class="fr">Perdi meu passaporte.</td><td>I lost my passport.</td></tr>
<tr><td class="fr">Fui roubado.</td><td>I was robbed.</td></tr>
<tr><td class="fr">Chama a polícia!</td><td>Call the police!</td></tr>
<tr><td class="fr">Estou perdido.</td><td>I'm lost.</td></tr>
<tr><td class="fr">Onde tem farmácia?</td><td>Where's a pharmacy?</td></tr>
<tr><td class="fr">Estou doente.</td><td>I'm ill.</td></tr>
</table>
<div class="box blue"><b>Emergency numbers</b>190 police · 192 ambulance · 193 fire</div>

<h3>The false friend that matters on the street</h3>
<div class="box red"><b>PUXE means PULL</b>Brazilian doors are marked <span class="fr">PUXE</span> (pull) and <span class="fr">EMPURRE</span> (push). PUXE looks like "push" and means the opposite. Everyone walks into a door once.</div>
`,
homework:[
 {t:"Ask for five places", d:"Onde fica…? with five real places out loud: o banheiro, o hotel, a estação, a praia, o aeroporto. Then five with 'Onde tem…?'"},
 {t:"Understand the answer", d:"The hard part is not asking, it is following the reply. Say the direction words out loud while pointing: à direita, à esquerda, em frente, na esquina."},
 {t:"Count to twenty", d:"Out loud, twice, then backwards once. Watch sete (SEH-chee) and dez (dess)."},
 {t:"The emergency five", d:"Preciso de ajuda / Socorro / Perdi meu passaporte / Estou perdido / Chama a polícia. Say them calmly and clearly — panic makes accents unintelligible."}
],
quiz:[
 {t:"mc", q:"A Brazilian door marked <b>PUXE</b> means…", a:["pull","push","exit","emergency"], c:0, why:"PUXE = pull, EMPURRE = push. The false friend that catches every English speaker once."},
 {t:"mc", q:"Which asks where a fixed place is?", a:["Onde fica o banheiro?","Onde tem banheiro?","Quanto custa o banheiro?","Como é o banheiro?"], c:0, why:"<b>fica</b> for a specific fixed location; <b>tem</b> for 'is there one around here'."},
 {t:"mc", q:"The Brazilian currency is the…", a:["real, plural reais","peso","escudo","cruzeiro"], c:0, why:"Written R$. Reais is pronounced roughly 'hay-ICE'."},
 {t:"mc", q:"<b>Socorro!</b> should be used…", a:["only in a real emergency","to get a waiter's attention","when you are lost","to ask for directions"], c:0, why:"It means Help! in the emergency sense. For ordinary help use <b>Preciso de ajuda</b>."},
 {t:"mc", q:"<b>Na esquina</b> means…", a:["on the corner","in the square","at the end","across the road"], c:0, why:"A common part of any answer to Onde fica…?"},
 {t:"mc", q:"Which number is pronounced 'SEH-chee'?", a:["sete","seis","cinco","cem"], c:0, why:"<b>sete</b> — the t before an 'ee' sound becomes 'ch', and the final -e is 'ee'."},
 {t:"mc", q:"<b>Só dinheiro</b> means…", a:["cash only","no money","money first","change only"], c:0, why:"You will see this in markets and small bars."},
 {t:"type", q:"Write the Portuguese for <b>How much is it?</b>", ans:["quanto custa","quanto custa?","quanto e","quanto é"], why:"<b>Quanto custa?</b> or the shorter <b>Quanto é?</b>"},
 {t:"type", q:"Write the Portuguese for <b>I need help.</b>", ans:["preciso de ajuda"], why:"<b>Preciso de ajuda.</b> Note precisar always takes <b>de</b>."},
 {t:"listen", play:"Onde fica o banheiro?", q:"Listen, then choose what you heard.", a:["Where is the bathroom?","Where is the hotel?","How much is it?","Is it far from here?"], c:0, why:"<b>Onde fica o banheiro?</b> — note OHN-jee for onde."},
 {t:"listen", play:"É perto daqui?", q:"Listen. What is being asked?", a:["Is it near here?","Is it far?","Is it open?","Is it expensive?"], c:0, why:"<b>É perto daqui?</b> The opposite would be <b>É longe?</b>"}
]
};

PT_LESSONS[6] = {
title:"Ser, estar e os verbos",
mins:20, goal:"Use both verbs for 'to be' correctly, and talk about the future without learning a new tense.",
body:`
<h3>Two verbs, one English word</h3>
<table>
<tr><th>SER — what something IS</th><th>ESTAR — how something IS right now</th></tr>
<tr><td>identity, origin, profession, character</td><td>state, mood, location, weather</td></tr>
<tr><td class="fr">Eu sou americano.</td><td class="fr">Eu estou cansado.</td></tr>
<tr><td class="fr">Ela é médica.</td><td class="fr">Ela está no hospital.</td></tr>
<tr><td class="fr">O Rio é lindo.</td><td class="fr">O Rio está quente hoje.</td></tr>
</table>
<div class="box red"><b>The meaning really changes</b><span class="fr">Ele é chato</span> = he is a boring person, permanently.<br>
<span class="fr">Ele está chato</span> = he is being annoying today.<br><br>
Same with <span class="fr">ela é bonita</span> (she is beautiful) vs <span class="fr">ela está bonita</span> (she looks lovely tonight).</div>

<h3>The two tables</h3>
<table>
<tr><th>SER</th><th>ESTAR</th></tr>
<tr><td class="fr">eu sou</td><td class="fr">eu estou → tô</td></tr>
<tr><td class="fr">você é</td><td class="fr">você está → tá</td></tr>
<tr><td class="fr">ele / ela é</td><td class="fr">ele / ela está</td></tr>
<tr><td class="fr">a gente é</td><td class="fr">a gente está</td></tr>
<tr><td class="fr">nós somos</td><td class="fr">nós estamos</td></tr>
<tr><td class="fr">eles / elas são</td><td class="fr">eles / elas estão</td></tr>
</table>
<p>Notice <span class="fr">a gente</span> takes the same form as <span class="fr">ele</span>. That is why Brazilians prefer it — one fewer conjugation to remember.</p>

<h3>Ter — to have, and "there is"</h3>
<table>
<tr><td class="fr">eu tenho</td><td class="fr">você tem</td><td class="fr">a gente tem</td><td class="fr">eles têm</td></tr>
</table>
<p><span class="fr">Eu tenho dois filhos.</span> — I have two children.<br>
<span class="fr">Tem banheiro aqui?</span> — Is there a bathroom here?</p>
<p>Brazilians use <span class="fr">ter</span> for "there is" where Portugal uses <span class="fr">há</span>. Use <span class="fr">tem</span>.</p>

<h3>The future — no new tense needed</h3>
<p><b>ir + infinitive</b>, exactly like English "going to".</p>
<table>
<tr><td class="fr">eu vou</td><td class="fr">você vai</td><td class="fr">a gente vai</td><td class="fr">eles vão</td></tr>
</table>
<p><span class="fr">Eu vou comer.</span> — I'm going to eat.<br>
<span class="fr">A gente vai viajar amanhã.</span> — We're going to travel tomorrow.<br>
<span class="fr">Vai dar certo.</span> — It's going to work out.</p>
<div class="box green"><b>This covers most of your future needs</b>There is a "proper" future tense (<span class="fr">comerei</span>) but Brazilians use it far less in speech. Learn ir + infinitive now and you can talk about tomorrow immediately.</div>

<h3>Right now — estar + -ndo</h3>
<p><span class="fr">Estou comendo.</span> — I'm eating. · <span class="fr">Tô indo!</span> — I'm on my way!</p>
<p>Take the infinitive, swap the ending: <span class="fr">falar → falando</span>, <span class="fr">comer → comendo</span>, <span class="fr">partir → partindo</span>.</p>

<h3>Two verbs that always take "de"</h3>
<p><span class="fr">gostar de</span> — <span class="fr">Eu gosto de café.</span> (I like coffee)<br>
<span class="fr">precisar de</span> — <span class="fr">Preciso de ajuda.</span> (I need help)</p>
<p>Dropping the <span class="fr">de</span> is one of the most common learner errors.</p>

<h3>Ficar — the versatile one</h3>
<p><span class="fr">ficar</span> covers to stay, to become, and to be located:</p>
<p><span class="fr">Onde fica o hotel?</span> (located) · <span class="fr">Fica tranquilo.</span> (stay calm) · <span class="fr">Ele ficou bravo.</span> (became angry)</p>
`,
homework:[
 {t:"Ten ser/estar pairs", d:"Write ten sentence pairs where the same adjective changes meaning: é chato / está chato, é bonita / está bonita, é frio / está frio. Say both out loud and feel the difference."},
 {t:"Talk about tomorrow", d:"Say five things you're going to do tomorrow using vou + infinitive. Then five for 'a gente vai'."},
 {t:"Never drop the de", d:"Ten sentences with gostar de and precisar de. Dropping the de is the error that marks a learner fastest."},
 {t:"Contractions only", d:"Say ten estar sentences using only tô and tá. Nobody says estou in conversation."}
],
quiz:[
 {t:"mc", q:"Which is correct: <b>I am American</b>?", a:["Eu sou americano","Eu estou americano","Eu tenho americano","Eu fico americano"], c:0, why:"Nationality is permanent identity, so <b>ser</b>."},
 {t:"mc", q:"Which is correct: <b>I am tired</b>?", a:["Eu estou cansado","Eu sou cansado","Eu tenho cansado","Eu fico cansado"], c:0, why:"A temporary state, so <b>estar</b>. 'Eu sou cansado' would mean you are a tiring person."},
 {t:"mc", q:"<b>Ele está chato</b> means…", a:["he is being annoying today","he is a boring person","he is tired","he is angry"], c:0, why:"With <b>ser</b> it would be a permanent trait; with <b>estar</b> it is how he is right now."},
 {t:"mc", q:"How do Brazilians say <b>there is a bathroom here</b>?", a:["Tem banheiro aqui","Há banheiro aqui","Está banheiro aqui","É banheiro aqui"], c:0, why:"Brazil uses <b>ter</b> for 'there is'. Há is correct but sounds bookish in Brazil."},
 {t:"mc", q:"How do you say <b>I'm going to eat</b>?", a:["Eu vou comer","Eu comerei","Eu estou comer","Eu vou comendo"], c:0, why:"<b>ir + infinitive</b> — the same construction as English 'going to', and what Brazilians actually use."},
 {t:"mc", q:"Which is correct?", a:["Eu gosto de café","Eu gosto café","Eu gosto o café","Eu gosto para café"], c:0, why:"<b>gostar</b> always takes <b>de</b>. So does <b>precisar</b>."},
 {t:"mc", q:"Why do Brazilians prefer <b>a gente</b> to <b>nós</b>?", a:["it takes the simpler he/she verb form","it is more formal","it is regional","nós is incorrect"], c:0, why:"A gente vai, a gente é — one fewer conjugation to remember, and it dominates speech."},
 {t:"mc", q:"<b>Onde fica o hotel?</b> uses ficar in which sense?", a:["to be located","to stay","to become","to remain calm"], c:0, why:"Ficar covers all three, and location is its most common use in questions."},
 {t:"type", q:"Write the Portuguese for <b>I'm tired.</b> using the contraction Brazilians actually say.", ans:["to cansado","tô cansado","to cansada","tô cansada"], why:"<b>Tô cansado.</b> Estou is almost never said in full."},
 {t:"type", q:"Write the Portuguese for <b>We're going to travel tomorrow.</b> using a gente.", ans:["a gente vai viajar amanha","a gente vai viajar amanhã"], why:"<b>A gente vai viajar amanhã.</b> Note a gente takes the he/she form: vai."},
 {t:"listen", play:"Eu sou americano e moro em Chicago.", q:"Listen, then choose what you heard.", a:["I'm American and I live in Chicago.","I'm American and I work in Chicago.","I'm going to America from Chicago.","My name is American, from Chicago."], c:0, why:"<b>Eu sou americano e moro em Chicago.</b>"},
 {t:"listen", play:"Tô cansado, vou dormir.", q:"Listen. What is being said?", a:["I'm tired, I'm going to sleep.","I'm hungry, I'm going to eat.","I'm late, I'm going to run.","I'm bored, I'm going home."], c:0, why:"<b>Tô cansado, vou dormir.</b> — contraction plus ir + infinitive, both very Brazilian."}
]
};

/* ============================================================
   THE 90-DAY BRAZILIAN PORTUGUESE PLAN
   Same shape as the French course. Slang is woven through the
   whole thing rather than saved for an "advanced" phase.
   ============================================================ */
const PT_PHASES = [
  {n:1, days:[1,21],  name:"Sons e Sobrevivência",  goal:"Stop reading Portuguese as if it were Spanish, and survive a first meeting.", tag:"t-blue"},
  {n:2, days:[22,45], name:"Na Rua",                goal:"Eat, pay, travel and ask for help without English.", tag:"t-gold"},
  {n:3, days:[46,66], name:"Passado e Futuro",      goal:"Escape the present tense and start telling stories.", tag:"t-red"},
  {n:4, days:[67,90], name:"Opinião e Conversa",    goal:"Hold your end of a real Brazilian conversation.", tag:"t-green"},
];

const PT_WEEK_GOALS = {
 1:{t:"Sounds and hellos",       g:"Be understood, and greet anyone appropriately.", m:"Say a 30-second self-introduction out loud without reading it."},
 2:{t:"Ser, estar, ter",         g:"Use both verbs for 'to be' without thinking.", m:"Ten sentences alternating ser and estar, correctly, at speed."},
 3:{t:"Doing things",            g:"Describe an ordinary day.", m:"Speak for 60 seconds about your routine, unscripted."},
 4:{t:"Food and restaurants",    g:"Order a full meal and pay.", m:"Role-play a restaurant scene with a fast-talking waiter."},
 5:{t:"Money and shopping",      g:"Buy things and understand the price.", m:"Handle a 15-exchange shopping role-play in reais."},
 6:{t:"Getting around",          g:"Navigate a Brazilian city.", m:"Give directions from your hotel to the beach, in Portuguese."},
 7:{t:"The past tense",          g:"Say what you did yesterday.", m:"Tell a 5-sentence story about last Saturday."},
 8:{t:"The imperfect",           g:"Describe how things used to be.", m:"Full A1 exam — vocabulary, grammar, listening, a 60-word text."},
 9:{t:"Pronouns and the future", g:"Talk about plans without repeating nouns.", m:"Describe next month in 8 sentences using pronouns."},
10:{t:"Opinions and connectors", g:"Give an opinion and defend it.", m:"Argue one side of a light debate for 2 minutes."},
11:{t:"Health and problems",     g:"Get help when something goes wrong.", m:"Pharmacy and police role-play, unscripted."},
12:{t:"Register and nuance",     g:"Switch between formal and street Portuguese.", m:"One formal phone call, one casual papo with a friend."},
13:{t:"Final exams",             g:"Prove the 90 days worked.", m:"15-minute unscripted oral exam, graded honestly."},
};

const PT_PLAN = [
 [1,"Sons do português","The five rules that make you understandable. R as H, di/ti, final vowels, nasals, lh/nh."],
 [2,"O essencial","Oi, tudo bem, obrigado — and the gender rule that catches everyone."],
 [3,"Eu sou, você é","Ser for identity: name, nationality, job."],
 [4,"Números 0 a 20, idade","Counting, age, and phone numbers Brazilian-style."],
 [5,"O, a, um, uma","Gender and articles — far more predictable than French."],
 [6,"Gíria brasileira","E aí, beleza, valeu, né. How people actually talk."],
 [7,"Revisão + Checkpoint 1","Week 1, tested four ways."],
 [8,"Estar — estados e lugares","Moods, states, weather, location. And tô."],
 [9,"Ser vs estar","The distinction that changes what a sentence means."],
 [10,"Ter — e tem para 'there is'","Possession, and the Brazilian way to say there is."],
 [11,"Perguntas","Asking questions — and the intonation that does most of the work."],
 [12,"Não — negação","Negation, and the double negative Brazilians use freely."],
 [13,"Família e pessoas","Your people, in Portuguese."],
 [14,"Revisão + Checkpoint 2","Week 2 test."],
 [15,"Verbos -ar","One pattern unlocks hundreds of verbs."],
 [16,"Verbos -er e -ir","The other two families."],
 [17,"Ir + infinitivo","The easy future. Vou fazer, vamos ver."],
 [18,"Dias, meses, horas","Scheduling anything."],
 [19,"Sua rotina","Reflexive verbs, gently. Me levanto, me deito."],
 [20,"Conversa: um dia normal","Describe your whole day out loud."],
 [21,"Revisão + EXAME DA FASE 1","Three weeks, one test."],
 [22,"No restaurante","Eu queria — the single most useful phrase for a traveller."],
 [23,"O cardápio","Reading a Brazilian menu, and the false friends on it."],
 [24,"Comida brasileira","Feijoada, pão de queijo, açaí — the forty foods you will meet."],
 [25,"A conta, gorjeta, dividir","Ending a meal without awkwardness."],
 [26,"No bar","Cerveja gelada, chope, caipirinha, petiscos."],
 [27,"Conversa: uma noite no restaurante","Arrive, order, complain, pay, leave."],
 [28,"Revisão + Checkpoint 4","Week 4 test."],
 [29,"Números 20 a 1000, reais","Prices, and understanding them said fast."],
 [30,"Quanto custa?","Asking, understanding the answer, paying."],
 [31,"Cores, tamanhos, roupas","Describing what you want."],
 [32,"Provar, trocar, devolver","Fitting rooms, exchanges, returns."],
 [33,"Na feira e na padaria","Markets, quantities, and haggling politely."],
 [34,"Conversa: um dia de compras","Three shops, three different tones."],
 [35,"Revisão + Checkpoint 5","Week 5 test."],
 [36,"Na rua","Directions, money, transport and getting help."],
 [37,"Onde fica, onde tem","Prepositions of place, and which verb to use."],
 [38,"Transporte","Ônibus, metrô, Uber, rodoviária, aeroporto."],
 [39,"No hotel","Check-in, keys, wifi, and 'the shower is broken'."],
 [40,"Pedindo ajuda","Com licença — the phrases that open doors."],
 [41,"Conversa: chegando numa cidade nova","Airport to hotel to dinner, all in Portuguese."],
 [42,"Revisão + Checkpoint 6","Week 6 test."],
 [43,"Exame da Fase 2: escuta e leitura","Menus, signs, announcements."],
 [44,"Exame da Fase 2: escrita","A 60-word message to a hotel."],
 [45,"Primeiro dia só em português","I speak Portuguese. English only if you are truly stuck."],
 [46,"O pretérito perfeito","The past tense: falei, comi, parti."],
 [47,"Irregulares no passado","The twenty that break the pattern."],
 [48,"Ser, ir, ter, fazer no passado","Fui, fui, tive, fiz — including the one that does double duty."],
 [49,"Negativas e perguntas no passado","Where does 'não' go now?"],
 [50,"Ontem, semana passada","Anchoring a story in time."],
 [51,"Conversa: o que eu fiz no fim de semana","Your first real storytelling."],
 [52,"Revisão + Checkpoint 7","Week 7 test."],
 [53,"O imperfeito","One ending set, almost no exceptions."],
 [54,"Descrições e costumes","Quando eu era criança…"],
 [55,"Perfeito vs imperfeito","The rule that works: photo versus film."],
 [56,"Contando uma história","Background and events together."],
 [57,"Infância e memórias","Growing up, school, places you lived."],
 [58,"Conversa: como eu cresci","Ten minutes, mostly Portuguese."],
 [59,"Revisão + CHECKPOINT 8 = EXAME A1","The real milestone. 75% confirms A1."],
 [60,"Pronomes: me, te, o, a","Stop repeating nouns."],
 [61,"Pronomes indiretos","Lhe, nos — and where Brazilians actually put them."],
 [62,"Isso, isto, aquilo","Pointing at things precisely."],
 [63,"Futuro com ir, revisitado","The future you will actually use."],
 [64,"Futuro simples","Farei, comerei — for writing and emphasis."],
 [65,"Conversa: seus planos e seu trabalho","Work vocabulary in a real conversation."],
 [66,"Revisão + Checkpoint 9","Week 9 test."],
 [67,"Eu acho que…","Giving opinions, and five softer alternatives."],
 [68,"Porque, mas, então","How sentences get longer than five words."],
 [69,"Concordar e discordar","Agreeing and disagreeing, politely and less politely."],
 [70,"Comparações","Mais, menos, tão quanto."],
 [71,"Superlativos e reações","Nossa, que absurdo — how Brazilians react."],
 [72,"Conversa: um debate leve","Pick a side and defend it."],
 [73,"Revisão + Checkpoint 10","Week 10 test."],
 [74,"O corpo e onde dói","Estou com dor de…"],
 [75,"Na farmácia","The Brazilian pharmacy does more than you expect."],
 [76,"No médico","Symptoms, history, instructions."],
 [77,"Emergências","Polícia, roubo, documentos perdidos. 190, 192, 193."],
 [78,"Reclamando com jeitinho","Complaining the Brazilian way."],
 [79,"Conversa: um dia ruim no Rio","Everything goes wrong. In Portuguese."],
 [80,"Revisão + Checkpoint 11","Week 11 test."],
 [81,"Você poderia? — o condicional","Politeness as a verb form."],
 [82,"Precisa, tem que, deve","Obligation."],
 [83,"Subjuntivo, devagar","Just the phrases that trigger it."],
 [84,"Senhor, você, gíria pesada","Register — the thing textbooks skip."],
 [85,"Ligações e mensagens","Phone calls, WhatsApp, and how Brazilians actually message."],
 [86,"Conversa: uma ligação formal e um papo","Same content, two registers."],
 [87,"Revisão + Checkpoint 12","Week 12 test."],
 [88,"EXAME FINAL: escuta e leitura","Real Portuguese, at real speed."],
 [89,"EXAME FINAL: escrita","150 words about your life."],
 [90,"EXAME ORAL FINAL","15 unscripted minutes. Honest grade at the end."],
];

/* the six written lessons sit at their natural places in the plan */
(function placeLessons(){
  const map={1:1, 2:2, 3:6, 4:22, 5:36, 6:9};
  const moved={};
  Object.keys(PT_LESSONS).forEach(k=>{ moved[map[k]||k]=PT_LESSONS[k]; });
  Object.keys(PT_LESSONS).forEach(k=>delete PT_LESSONS[k]);
  Object.assign(PT_LESSONS, moved);
  PT_LESSONS[7]  = undefined; delete PT_LESSONS[7];
})();
