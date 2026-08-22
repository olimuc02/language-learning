/* ============================================================
   POLISH — maintenance and expansion, not a beginner course.
   Aimed at someone who already speaks it: precision vocabulary,
   idioms, register, and the grammar fluent speakers still fumble.
   ============================================================ */

const PL_CATS = [
 ["precyzja","Precise Words","🎯"],
 ["idiomy","Idioms","🗣️"],
 ["biznes","Business &amp; Formal","💼"],
 ["czasowniki","Tricky Verbs","⚡"],
 ["potoczne","Colloquial &amp; Slang","😎"],
 ["laczniki","Connectors","🔗"],
 ["pulapki","Traps &amp; Errors","⚠️"],
 ["literackie","Literary","📖"],
];

/* [word, grammar hint, meaning, category, example, example in English, note, set] */
const PL_VOCAB = [
// --- precyzja: replacements for the words everyone overuses
["wnikliwy","przym.","penetrating, insightful","precyzja","Wnikliwa analiza rynku.","A penetrating market analysis.","upgrade from 'dokładny'",1],
["zwięzły","przym.","concise, terse","precyzja","Napisz to zwięźle.","Write it concisely.","opposite: rozwlekły",1],
["dosadny","przym.","blunt, forceful","precyzja","Dosadnie postawił sprawę.","He put it bluntly.","stronger than 'bezpośredni'",1],
["rzetelny","przym.","reliable, sound, honest","precyzja","Rzetelne źródło informacji.","A reliable source.","about work and sources, not people's moods",1],
["przenikliwy","przym.","piercing (cold, gaze, mind)","precyzja","Przenikliwy chłód.","A piercing cold.","also przenikliwy wzrok",1],
["nieodzowny","przym.","indispensable","precyzja","Nieodzowny element planu.","An indispensable part of the plan.","stronger than 'potrzebny'",1],
["znikomy","przym.","negligible, minimal","precyzja","Znikoma szansa powodzenia.","A negligible chance of success.","legal: znikoma szkodliwość",1],
["dotkliwy","przym.","severe, keenly felt","precyzja","Dotkliwa strata.","A severe loss.","pain and loss, not size",1],
["osobliwy","przym.","peculiar, singular","precyzja","Osobliwe zachowanie.","Peculiar behaviour.","not 'osobisty'",1],
["przewrotny","przym.","perverse, cunningly ironic","precyzja","Przewrotna logika.","Perverse logic.","",1],
["gruntowny","przym.","thorough, fundamental","precyzja","Gruntowny remont.","A gut renovation.","gruntownie = thoroughly",1],
["nienaganny","przym.","impeccable, faultless","precyzja","Nienaganne maniery.","Impeccable manners.","",1],
["pobieżny","przym.","cursory, superficial","precyzja","Pobieżna lektura.","A cursory read.","opposite of gruntowny",1],
["doniosły","przym.","momentous, weighty","precyzja","Doniosła decyzja.","A momentous decision.","",1],
["nikły","przym.","faint, slight","precyzja","Nikła nadzieja.","A faint hope.","",1],
["uporczywy","przym.","persistent, dogged","precyzja","Uporczywy kaszel.","A persistent cough.","slightly negative",1],
["wyrazisty","przym.","distinct, well-defined","precyzja","Wyrazisty smak.","A distinct flavour.","food, character, style",1],
["zawiły","przym.","convoluted, intricate","precyzja","Zawiła sprawa.","A convoluted matter.","",1],

// --- idiomy
["rzucać grochem o ścianę","niedk.","to talk to a brick wall","idiomy","Tłumaczę mu, ale to jak grochem o ścianę.","I explain, but it's like talking to a wall.","literally: throwing peas at a wall",2],
["mieć muchy w nosie","niedk.","to be in a huff","idiomy","Nie zaczepiaj go, ma muchy w nosie.","Don't bother him, he's in a mood.","literally: flies in the nose",2],
["urwanie głowy","rzecz.","a madhouse, chaos","idiomy","W pracy urwanie głowy.","Work is absolute chaos.","",2],
["wyjść na swoje","dk.","to break even, come out fine","idiomy","Po wszystkim wyszedł na swoje.","In the end he came out fine.","",2],
["robić z igły widły","niedk.","to make a mountain out of a molehill","idiomy","Nie rób z igły widły.","Don't blow it out of proportion.","needle into a pitchfork",2],
["mieć węża w kieszeni","niedk.","to be stingy","idiomy","On ma węża w kieszeni.","He's tight-fisted.","a snake in the pocket",2],
["bułka z masłem","rzecz.","a piece of cake","idiomy","Ten egzamin to bułka z masłem.","That exam is a piece of cake.","a roll with butter",2],
["rzucić okiem","dk.","to take a quick look","idiomy","Rzuć okiem na tę umowę.","Take a look at this contract.","",2],
["trzymać kciuki","niedk.","to keep fingers crossed","idiomy","Trzymam za ciebie kciuki.","Fingers crossed for you.","thumbs, not fingers",2],
["być nie w sosie","niedk.","to be out of sorts","idiomy","Dziś jestem nie w sosie.","I'm out of sorts today.","",2],
["chodzić na rzęsach","niedk.","to be dead on one's feet","idiomy","Po nocce chodzę na rzęsach.","After the night shift I'm dead on my feet.","walking on eyelashes",2],
["wiercić dziurę w brzuchu","niedk.","to pester relentlessly","idiomy","Dzieci wiercą mi dziurę w brzuchu.","The kids won't stop pestering me.","",2],
["puszczać płazem","niedk.","to let something slide","idiomy","Nie puszczę tego płazem.","I won't let that slide.","",2],
["mieć coś z głowy","dk.","to have something off one's plate","idiomy","Zrobione, mam to z głowy.","Done, that's off my plate.","very common",2],
["iść po najmniejszej linii oporu","niedk.","to take the path of least resistance","idiomy","Zawsze idzie po najmniejszej linii oporu.","He always takes the easy way out.","",2],

// --- biznes
["wdrożyć","dk. (ndk. wdrażać)","to implement, roll out","biznes","Wdrożyliśmy nowy system.","We rolled out a new system.","also: wdrożyć kogoś = onboard",3],
["sporządzić","dk. (ndk. sporządzać)","to draw up, prepare (a document)","biznes","Sporządzę umowę do piątku.","I'll draw up the contract by Friday.","formal register",3],
["zobowiązanie","rzecz. n.","obligation, commitment, liability","biznes","Mamy zobowiązania wobec klienta.","We have obligations to the client.","also financial liabilities",3],
["rozliczenie","rzecz. n.","settlement, accounting, reconciliation","biznes","Rozliczenie za pierwszy kwartał.","The settlement for Q1.","rozliczyć się z = settle up with",3],
["należność","rzecz. ż.","amount due, receivable","biznes","Uregulować należność.","To settle the amount due.","",3],
["przedsięwzięcie","rzecz. n.","undertaking, venture","biznes","Ryzykowne przedsięwzięcie.","A risky venture.","",3],
["kontrahent","rzecz. m.","contracting party, business partner","biznes","Nasz kontrahent z Niemiec.","Our German counterparty.","standard in contracts",3],
["z góry","wyr.","in advance","biznes","Dziękuję z góry.","Thanks in advance.","also: płatne z góry",3],
["w nawiązaniu do","wyr.","further to, with reference to","biznes","W nawiązaniu do naszej rozmowy…","Further to our conversation…","email opener",3],
["uprzejmie proszę","wyr.","I kindly request","biznes","Uprzejmie proszę o potwierdzenie.","I kindly ask for confirmation.","formal email staple",3],
["z poważaniem","wyr.","Yours sincerely","biznes","Z poważaniem, Oliver","Yours sincerely, Oliver","formal sign-off",3],
["pozostaję do dyspozycji","wyr.","I remain at your disposal","biznes","Pozostaję do dyspozycji.","I remain at your disposal.","closes a formal email",3],
["termin","rzecz. m.","deadline, appointment, term","biznes","Termin mija w piątek.","The deadline is Friday.","three meanings, context decides",3],
["wywiązać się z","dk.","to fulfil (an obligation)","biznes","Wywiązaliśmy się z umowy.","We fulfilled the contract.","+ genitive",3],
["odnotować","dk.","to note, record, register","biznes","Odnotowaliśmy wzrost.","We recorded growth.","",3],

// --- czasowniki: aspect pairs people muddle
["brać / wziąć","ndk. / dk.","to take","czasowniki","Biorę leki codziennie. Wziąłem jedną.","I take pills daily. I took one.","completely different roots",4],
["widzieć / zobaczyć","ndk. / dk.","to see","czasowniki","Widzę go co dzień. Zobaczyłem go wczoraj.","I see him daily. I saw him yesterday.","",4],
["kłaść / położyć","ndk. / dk.","to put, lay down","czasowniki","Kładę klucze tutaj. Położyłem je tam.","I put the keys here. I put them there.","kłaść is often said wrong",4],
["mówić / powiedzieć","ndk. / dk.","to speak / to say","czasowniki","Mówię po polsku. Powiedziałem mu.","I speak Polish. I told him.","",4],
["oglądać / obejrzeć","ndk. / dk.","to watch","czasowniki","Oglądam serial. Obejrzałem odcinek.","I watch a show. I watched an episode.","",4],
["zdążyć","dk.","to make it in time","czasowniki","Nie zdążyłem na pociąg.","I didn't make the train.","no good English one-word match",4],
["ogarnąć","dk., pot.","to get a handle on, sort out","czasowniki","Ogarnę to jutro.","I'll sort it tomorrow.","hugely common in speech",4],
["załatwić","dk.","to arrange, take care of, get done","czasowniki","Załatwię ci bilet.","I'll sort you out a ticket.","the Polish universal verb",4],
["zdarzyć się","dk.","to happen, occur","czasowniki","Zdarzyło się to raz.","It happened once.","",4],
["polegać na","ndk.","to rely on / to consist in","czasowniki","Polegam na tobie. Problem polega na tym, że…","I rely on you. The problem is that…","two distinct uses",4],
["dotyczyć","ndk.","to concern, pertain to","czasowniki","To nie dotyczy ciebie.","That doesn't concern you.","+ genitive",4],
["okazać się","dk.","to turn out","czasowniki","Okazało się, że miał rację.","It turned out he was right.","",4],
["podjąć","dk. (ndk. podejmować)","to undertake, take (a decision)","czasowniki","Podjąłem decyzję.","I made a decision.","not 'zrobić decyzję'",4],
["nabrać","dk.","to acquire / to fool someone","czasowniki","Nabrał wprawy. Nabrałeś mnie!","He gained skill. You got me!","two meanings",4],
["przywiązywać wagę do","ndk.","to attach importance to","czasowniki","Przywiązuję do tego dużą wagę.","I attach a lot of importance to it.","",4],

// --- potoczne
["spoko","pot.","cool, no worries","potoczne","Spoko, nie ma sprawy.","Cool, no problem.","",5],
["beka","pot. rzecz.","a laugh, something hilarious","potoczne","Ale beka!","That's hilarious!","younger register",5],
["masakra","pot.","a disaster / unbelievable","potoczne","Korki na mieście, masakra.","Traffic in town, a nightmare.","used for good and bad",5],
["ogarnięty","pot. przym.","switched-on, on top of things","potoczne","Ogarnięty gość.","A guy who has it together.","from ogarnąć",5],
["w porządku","wyr.","alright, fine","potoczne","Jest w porządku.","It's fine. / He's a decent guy.","also about people",5],
["dawać radę","ndk.","to manage, cope","potoczne","Dajesz radę?","You managing?","very common check-in",5],
["nie ma sprawy","wyr.","no problem","potoczne","Nie ma sprawy, zrobię to.","No problem, I'll do it.","",5],
["kumać","pot. ndk.","to get it, follow","potoczne","Kumasz, o co chodzi?","Do you get what this is about?","slangy",5],
["lipa","pot. rzecz.","rubbish, a letdown","potoczne","Ten film to lipa.","That film is rubbish.","",5],
["z marszu","wyr.","straight off, on the fly","potoczne","Zrobił to z marszu.","He did it straight off the bat.","",5],
["na chłopski rozum","wyr.","in plain common sense terms","potoczne","Na chłopski rozum to się nie opłaca.","Common sense says it isn't worth it.","",5],
["mieć to gdzieś","pot.","not to care at all","potoczne","Mam to gdzieś.","I couldn't care less.","mildly rude",5],

// --- laczniki
["niemniej jednak","wyr.","nevertheless","laczniki","Niemniej jednak warto spróbować.","Nevertheless, it's worth a try.","formal writing",6],
["wobec tego","wyr.","in that case, therefore","laczniki","Wobec tego zmieniamy plan.","In that case we change the plan.","",6],
["o ile","spój.","insofar as, provided that","laczniki","O ile się nie mylę…","Unless I'm mistaken…","",6],
["zważywszy na","wyr.","considering, given","laczniki","Zważywszy na koszty, rezygnujemy.","Given the costs, we're pulling out.","formal",6],
["tym bardziej, że","wyr.","all the more so because","laczniki","Nie pójdę, tym bardziej że pada.","I won't go, all the more so as it's raining.","",6],
["z jednej strony… z drugiej","wyr.","on one hand… on the other","laczniki","Z jednej strony tak, z drugiej nie.","On one hand yes, on the other no.","",6],
["rzecz w tym, że","wyr.","the thing is that","laczniki","Rzecz w tym, że nie mamy czasu.","The thing is, we have no time.","",6],
["bynajmniej","przysł.","by no means, not at all","laczniki","Bynajmniej nie jestem zły.","I'm by no means angry.","NOT a synonym of 'przynajmniej'",6],
["skądinąd","przysł.","incidentally, from elsewhere","laczniki","Skądinąd słuszna uwaga.","An apt remark, incidentally.","literary",6],
["mimo to","wyr.","in spite of that","laczniki","Mimo to spróbujemy.","In spite of that, we'll try.","vs mimo że = although",6],
["co więcej","wyr.","moreover","laczniki","Co więcej, to tańsze.","What's more, it's cheaper.","",6],
["innymi słowy","wyr.","in other words","laczniki","Innymi słowy, to koniec.","In other words, it's over.","",6],

// --- pulapki
["bynajmniej vs przynajmniej","pułapka","by no means vs at least","pulapki","Bynajmniej nie. / Przynajmniej spróbuj.","Not at all. / At least try.","the single most misused pair in Polish",7],
["w każdym razie","poprawnie","in any case","pulapki","W każdym razie zadzwoń.","In any case, call.","NOT 'w każdym bądź razie' — that's wrong",7],
["włączać vs załączać","pułapka","to switch on vs to attach","pulapki","Włącz światło. Załączam plik.","Turn on the light. I attach the file.","emails: załącznik",7],
["pod rząd vs z rzędu","poprawnie","in a row","pulapki","Trzy dni z rzędu.","Three days in a row.","'pod rząd' is considered incorrect",7],
["poprawny vs prawidłowy","pułapka","correct vs proper","pulapki","Poprawna odpowiedź. Prawidłowy rozwój.","A correct answer. Proper development.","",7],
["dwa tysiące dwudziesty","liczeb.","the year 2020","pulapki","W dwa tysiące dwudziestym roku.","In 2020.","only the last part declines",7],
["cofać się do tyłu","błąd","to go back backwards","pulapki","Powiedz po prostu: cofnąć się.","Just say: to go back.","pleonasm, very common",7],
["okres czasu","błąd","period of time","pulapki","Powiedz: okres. Albo: czas.","Say: period. Or: time.","pleonasm",7],
["w cudzysłowie","poprawnie","in quotation marks","pulapki","Ujmij to w cudzysłów.","Put it in quotes.","not 'w cudzysłowiu'",7],
["tę vs tą","pułapka","this (accusative vs instrumental)","pulapki","Widzę tę książkę. Idę z tą książką.","I see this book. I go with this book.","tę for the object, tą after a preposition",7],
["proszę pana / pani","wyr.","sir / madam (vocative)","pulapki","Proszę pana, przepraszam.","Excuse me, sir.","not 'panie' when addressing directly",7],
["pisać na maila","pot./błąd","to write to an email","pulapki","Lepiej: napisać maila / napisać na adres.","Better: write an email.","common but sloppy",7],

// --- literackie
["snuć","ndk.","to spin (a tale), to muse","literackie","Snuł opowieść o wojnie.","He spun a tale about the war.","snuć plany = make plans",8],
["obłuda","rzecz. ż.","hypocrisy","literackie","Nie znoszę obłudy.","I can't stand hypocrisy.","stronger than 'fałsz'",8],
["znój","rzecz. m.","toil, hardship","literackie","W znoju i pocie.","In toil and sweat.","archaic flavour",8],
["ułuda","rzecz. ż.","illusion, delusion","literackie","To tylko ułuda.","It's only an illusion.","",8],
["dojmujący","przym.","acute, overwhelming (feeling)","literackie","Dojmujące poczucie straty.","An acute sense of loss.","",8],
["nieodparty","przym.","irresistible, compelling","literackie","Nieodparte wrażenie.","An irresistible impression.","",8],
["czczy","przym.","empty, vain, idle","literackie","Czcze gadanie.","Idle talk.","also: na czczo = on empty stomach",8],
["poczytywać za","ndk.","to regard as","literackie","Poczytuję to za zaszczyt.","I regard it as an honour.","formal, elegant",8],
["zgoła","przysł.","utterly, quite","literackie","Zgoła inna sprawa.","An entirely different matter.","",8],
["wszelako","spój.","however (archaic)","literackie","Wszelako nie zgadzam się.","However, I disagree.","deliberately old-fashioned",8],
["osnowa","rzecz. ż.","the warp, underlying fabric","literackie","Osnowa całej historii.","The underlying fabric of the story.","",8],
["nurt","rzecz. m.","current, trend, school of thought","literackie","Główny nurt myśli.","The mainstream of thought.","also: nurt rzeki",8],
];

/* ============================================================
   POLISH STUDY GUIDES
   ============================================================ */
const PL_GUIDES = [
{id:"aspekt", title:"Aspekt — dokonany vs niedokonany", sub:"The one grammar point that separates fluent from precise", tag:"Core", body:`
<h3>What aspect actually encodes</h3>
<p>Polish verbs come in pairs. The choice is not about <i>when</i> — it is about whether the action is viewed as a <b>completed whole</b> or as a <b>process</b>.</p>
<table>
<tr><th>Niedokonany (imperfective)</th><th>Dokonany (perfective)</th></tr>
<tr><td>process, habit, repetition, background</td><td>a single completed act, a result</td></tr>
<tr><td class="fr">Czytałem książkę.</td><td class="fr">Przeczytałem książkę.</td></tr>
<tr><td>I was reading / used to read a book.</td><td>I read the book (finished it).</td></tr>
<tr><td class="fr">Pisałem maila.</td><td class="fr">Napisałem maila.</td></tr>
<tr><td>I was writing an email.</td><td>I wrote the email (it is done).</td></tr>
</table>

<h3>The tense grid</h3>
<table>
<tr><th></th><th>Niedokonany</th><th>Dokonany</th></tr>
<tr><th>Past</th><td class="fr">robiłem</td><td class="fr">zrobiłem</td></tr>
<tr><th>Present</th><td class="fr">robię</td><td>— does not exist —</td></tr>
<tr><th>Future</th><td class="fr">będę robił / będę robić</td><td class="fr">zrobię</td></tr>
</table>
<div class="box red"><b>The trap</b>A perfective verb has <b>no present tense</b>. <span class="fr">Zrobię</span> looks present but means "I will do". This is why <span class="fr">napiszę</span> is future, not present.</div>

<h3>Pairs where the root changes entirely</h3>
<table>
<tr><td class="fr">brać → wziąć</td><td>to take</td></tr>
<tr><td class="fr">widzieć → zobaczyć</td><td>to see</td></tr>
<tr><td class="fr">mówić → powiedzieć</td><td>to say</td></tr>
<tr><td class="fr">kłaść → położyć</td><td>to put</td></tr>
<tr><td class="fr">oglądać → obejrzeć</td><td>to watch</td></tr>
</table>

<h3>Words that force one aspect</h3>
<table>
<tr><th>Forces imperfective</th><th>Forces perfective</th></tr>
<tr><td class="fr">zawsze, często, zwykle, codziennie, ciągle</td><td class="fr">nagle, wreszcie, w końcu, od razu</td></tr>
<tr><td class="fr">Zawsze <b>czytałem</b> wieczorem.</td><td class="fr">W końcu <b>przeczytałem</b> tę książkę.</td></tr>
</table>
<div class="box"><b>After "zacząć", "przestać", "lubić" — always imperfective</b><span class="fr">Zacząłem <b>czytać</b></span> (never przeczytać). <span class="fr">Lubię <b>gotować</b></span>. <span class="fr">Przestał <b>palić</b></span>.</div>
`},

{id:"przypadki", title:"Przypadki — the seven cases at a glance", sub:"What triggers each case, with the prepositions that decide it", tag:"Reference", body:`
<h3>The seven, and what each one is for</h3>
<table>
<tr><th>Case</th><th>Question</th><th>Used for</th></tr>
<tr><td><b>Mianownik</b> (nom.)</td><td class="fr">kto? co?</td><td>the subject</td></tr>
<tr><td><b>Dopełniacz</b> (gen.)</td><td class="fr">kogo? czego?</td><td>possession, negation, quantity, "of"</td></tr>
<tr><td><b>Celownik</b> (dat.)</td><td class="fr">komu? czemu?</td><td>the indirect object, "to whom"</td></tr>
<tr><td><b>Biernik</b> (acc.)</td><td class="fr">kogo? co?</td><td>the direct object</td></tr>
<tr><td><b>Narzędnik</b> (instr.)</td><td class="fr">kim? czym?</td><td>"with", "by means of", professions after być</td></tr>
<tr><td><b>Miejscownik</b> (loc.)</td><td class="fr">o kim? o czym?</td><td>only ever after a preposition</td></tr>
<tr><td><b>Wołacz</b> (voc.)</td><td>—</td><td>addressing someone directly</td></tr>
</table>

<h3>The rule that catches everyone: genitive of negation</h3>
<p>A direct object in the accusative flips to the <b>genitive</b> when the verb is negated.</p>
<table>
<tr><td class="fr">Mam <b>samochód</b>.</td><td>I have a car. (acc.)</td></tr>
<tr><td class="fr">Nie mam <b>samochodu</b>.</td><td>I don't have a car. (gen.)</td></tr>
<tr><td class="fr">Widzę <b>Annę</b>.</td><td>I see Anna. (acc.)</td></tr>
<tr><td class="fr">Nie widzę <b>Anny</b>.</td><td>I don't see Anna. (gen.)</td></tr>
</table>

<h3>Prepositions, sorted by the case they take</h3>
<table>
<tr><th>Genitive</th><td class="fr">do, od, z (from), bez, dla, obok, koło, według, podczas, oprócz</td></tr>
<tr><th>Dative</th><td class="fr">ku, dzięki, przeciwko, wbrew</td></tr>
<tr><th>Accusative</th><td class="fr">przez, na (onto), w (into), po (to fetch), o (about, hitting)</td></tr>
<tr><th>Instrumental</th><td class="fr">z (with), nad, pod, przed, za, między</td></tr>
<tr><th>Locative</th><td class="fr">w (in), na (on), o (about), przy, po (after)</td></tr>
</table>
<div class="box blue"><b>The movement rule</b><span class="fr">w</span> and <span class="fr">na</span> take the <b>accusative</b> for motion toward, and the <b>locative</b> for a static position.<br>
<span class="fr">Idę <b>na pocztę</b></span> (acc., going there) vs <span class="fr">Jestem <b>na poczcie</b></span> (loc., being there).</div>

<h3>Być + instrumental</h3>
<p>Professions and identities after <span class="fr">być</span> take the instrumental, not the nominative.</p>
<p><span class="fr">Jestem <b>lekarzem</b>. Ona jest <b>nauczycielką</b>. To był <b>błąd</b>.</span></p>
`},

{id:"liczby", title:"Liczebniki — the 2-4 vs 5+ rule", sub:"Why it's dwa koty but pięć kotów", tag:"Core", body:`
<h3>The rule</h3>
<table>
<tr><th>Number</th><th>What the noun does</th><th>Example</th></tr>
<tr><td><b>1</b></td><td>nominative singular</td><td class="fr">jeden kot, jedna książka</td></tr>
<tr><td><b>2, 3, 4</b></td><td>nominative <b>plural</b></td><td class="fr">dwa koty, trzy książki</td></tr>
<tr><td><b>5 and up</b></td><td><b>genitive</b> plural</td><td class="fr">pięć kotów, sześć książek</td></tr>
</table>
<div class="box"><b>And it repeats every hundred</b>What matters is the <b>last digit</b>: 22, 23, 24 behave like 2-4 (<span class="fr">dwadzieścia dwa koty</span>), while 25-31 behave like 5+ (<span class="fr">dwadzieścia pięć kotów</span>).<br><br>
The exception: <b>12, 13, 14</b> take the genitive like 5+ (<span class="fr">dwanaście kotów</span>). Teens always behave like 5+.</div>

<h3>And the verb changes too</h3>
<table>
<tr><td class="fr">Dwa koty <b>są</b> na dachu.</td><td>Two cats are on the roof. (plural verb)</td></tr>
<tr><td class="fr">Pięć kotów <b>jest</b> na dachu.</td><td>Five cats are on the roof. (singular verb!)</td></tr>
<tr><td class="fr">Było pięć osób.</td><td>There were five people. (neuter singular past)</td></tr>
</table>

<h3>Męskoosobowe — the male-personal forms</h3>
<p>Groups that include at least one man use a separate set of numerals:</p>
<table>
<tr><td class="fr">dwaj mężczyźni</td><td>two men</td></tr>
<tr><td class="fr">dwóch mężczyzn</td><td>two men (the more common form)</td></tr>
<tr><td class="fr">pięciu mężczyzn</td><td>five men</td></tr>
<tr><td class="fr">pięć kobiet</td><td>five women (ordinary form)</td></tr>
</table>

<h3>Years</h3>
<p>Only the final element declines: <span class="fr">w dwa tysiące dwudziestym <b>roku</b></span> — 2020. Not "w dwutysięcznym dwudziestym".</p>
`},

{id:"ruch", title:"Czasowniki ruchu — verbs of motion", sub:"iść vs chodzić, and what the prefixes do", tag:"Core", body:`
<h3>Determinate vs indeterminate</h3>
<p>Polish splits motion two ways before aspect even enters the picture.</p>
<table>
<tr><th>One trip, one direction</th><th>Repeated, habitual, or aimless</th></tr>
<tr><td class="fr">iść</td><td class="fr">chodzić</td></tr>
<tr><td class="fr">jechać</td><td class="fr">jeździć</td></tr>
<tr><td class="fr">lecieć</td><td class="fr">latać</td></tr>
<tr><td class="fr">nieść</td><td class="fr">nosić</td></tr>
</table>
<table>
<tr><td class="fr">Idę do sklepu.</td><td>I'm walking to the shop (right now).</td></tr>
<tr><td class="fr">Chodzę do tego sklepu.</td><td>I go to that shop (regularly).</td></tr>
<tr><td class="fr">Jadę do Krakowa.</td><td>I'm travelling to Kraków.</td></tr>
<tr><td class="fr">Jeżdżę do Krakowa co miesiąc.</td><td>I go to Kraków every month.</td></tr>
</table>

<h3>The prefixes do the heavy lifting</h3>
<table>
<tr><td class="fr">wy-</td><td>out</td><td class="fr">wyjść — to go out</td></tr>
<tr><td class="fr">w-</td><td>in</td><td class="fr">wejść — to enter</td></tr>
<tr><td class="fr">przy-</td><td>arriving</td><td class="fr">przyjść — to arrive</td></tr>
<tr><td class="fr">od-</td><td>away from</td><td class="fr">odejść — to walk away</td></tr>
<tr><td class="fr">do-</td><td>reaching</td><td class="fr">dojść — to reach on foot</td></tr>
<tr><td class="fr">prze-</td><td>across, through</td><td class="fr">przejść — to cross</td></tr>
<tr><td class="fr">pod-</td><td>up to</td><td class="fr">podejść — to approach</td></tr>
<tr><td class="fr">ob-</td><td>around</td><td class="fr">obejść — to go around</td></tr>
<tr><td class="fr">roz- … się</td><td>scatter</td><td class="fr">rozejść się — to disperse</td></tr>
<tr><td class="fr">z- … się</td><td>gather</td><td class="fr">zejść się — to come together</td></tr>
</table>
<div class="box blue"><b>The pattern that unlocks it</b>Prefix + <b>iść</b> gives a perfective verb. Prefix + <b>chodzić</b> gives its imperfective partner.<br>
<span class="fr">wejść</span> (dk.) / <span class="fr">wchodzić</span> (ndk.) · <span class="fr">wyjść</span> / <span class="fr">wychodzić</span> · <span class="fr">przyjść</span> / <span class="fr">przychodzić</span></div>
`},

{id:"bledy", title:"Błędy — mistakes fluent speakers still make", sub:"The ones that mark someone out as untrained rather than non-native", tag:"Fix these", body:`
<h3>Wrong vs right</h3>
<table>
<tr><th>❌ Wrong</th><th>✅ Right</th><th>Why</th></tr>
<tr><td class="fr">w każdym bądź razie</td><td class="fr">w każdym razie</td><td>a mashup of two phrases; extremely common and always wrong</td></tr>
<tr><td class="fr">cofnąć się do tyłu</td><td class="fr">cofnąć się</td><td>cofnąć already means backwards</td></tr>
<tr><td class="fr">okres czasu</td><td class="fr">okres</td><td>an okres is already a period of time</td></tr>
<tr><td class="fr">w miesiącu maju</td><td class="fr">w maju</td><td>we know May is a month</td></tr>
<tr><td class="fr">poszłem</td><td class="fr">poszedłem</td><td>a classic; poszłam is correct for a woman</td></tr>
<tr><td class="fr">wziąść</td><td class="fr">wziąć</td><td>there is no ś in this verb</td></tr>
<tr><td class="fr">włanczać</td><td class="fr">włączać</td><td>from łączyć, so it keeps the ą</td></tr>
<tr><td class="fr">pod rząd</td><td class="fr">z rzędu</td><td>trzy dni z rzędu</td></tr>
<tr><td class="fr">na dworzu</td><td class="fr">na dworze</td><td>outside</td></tr>
<tr><td class="fr">tą książkę widzę</td><td class="fr">tę książkę widzę</td><td>tę is the accusative; tą is instrumental</td></tr>
<tr><td class="fr">dwutysięczny dwudziesty rok</td><td class="fr">dwa tysiące dwudziesty rok</td><td>only the last element declines</td></tr>
<tr><td class="fr">bynajmniej = przynajmniej</td><td class="fr">bynajmniej = not at all</td><td>they are opposites, not synonyms</td></tr>
</table>

<h3>Bynajmniej vs przynajmniej — worth its own box</h3>
<div class="box red"><b>These mean completely different things</b>
<span class="fr">Bynajmniej</span> = <b>not at all, by no means</b>. It is emphatic negation.<br>
<span class="fr">Przynajmniej</span> = <b>at least</b>.<br><br>
<span class="fr">Bynajmniej nie jestem zmęczony.</span> — I'm not remotely tired.<br>
<span class="fr">Przynajmniej spróbuj.</span> — At least try.<br><br>
Using bynajmniej to mean "at least" is the single most recognisable Polish vocabulary error.</div>

<h3>Ortografia — the three pairs</h3>
<table>
<tr><th>Pair</th><th>Rule of thumb</th><th>Examples</th></tr>
<tr><td><b>ó / u</b></td><td>ó usually alternates with o or e in a related word</td><td class="fr">mróz → mrozu · wóz → wozy · but: ogórek, król</td></tr>
<tr><td><b>rz / ż</b></td><td>rz alternates with r; ż alternates with g, dz, z, s, h</td><td class="fr">morze → morski · może → mogę</td></tr>
<tr><td><b>ch / h</b></td><td>ch alternates with sz; h alternates with g or ż</td><td class="fr">mucha → muszka · wahać → waga</td></tr>
</table>
<p>After the consonants <b>p, b, t, d, k, g, ch, j, w</b> it is always <b>rz</b>: <span class="fr">przy, brzeg, trzy, drzewo, krzyk, grzyb, chrzest, wrzesień</span>.</p>
`},

{id:"rejestr", title:"Rejestr — formal Polish and Pan/Pani", sub:"Sounding right in an email, a meeting, or an office", tag:"Register", body:`
<h3>Pan / Pani — the third person you</h3>
<p>Polish formality does not use a special pronoun. It talks about the person in the <b>third person</b>.</p>
<table>
<tr><td class="fr">Czy pan może mi pomóc?</td><td>Can you help me? (to a man)</td></tr>
<tr><td class="fr">Czy pani ma chwilę?</td><td>Do you have a moment? (to a woman)</td></tr>
<tr><td class="fr">Państwo pozwolą…</td><td>If you'd allow… (to a mixed group)</td></tr>
</table>
<div class="box red"><b>The vocative trap</b>When you address someone directly, use <span class="fr">proszę pana</span> / <span class="fr">proszę pani</span>, not <span class="fr">panie</span> on its own.<br>
<span class="fr">Przepraszam, proszę pana…</span> — Excuse me, sir…<br>
<span class="fr">Panie Marku</span> is correct, because it is the vocative with a first name.</div>

<h3>Email skeleton</h3>
<table>
<tr><th>Slot</th><th>Formal</th><th>Neutral</th></tr>
<tr><td>Opening</td><td class="fr">Szanowny Panie / Szanowna Pani,</td><td class="fr">Dzień dobry,</td></tr>
<tr><td>Reference</td><td class="fr">W nawiązaniu do naszej rozmowy…</td><td class="fr">Piszę w sprawie…</td></tr>
<tr><td>Request</td><td class="fr">Uprzejmie proszę o…</td><td class="fr">Czy mógłbym prosić o…</td></tr>
<tr><td>Attachment</td><td class="fr">W załączeniu przesyłam…</td><td class="fr">Załączam…</td></tr>
<tr><td>Close</td><td class="fr">Pozostaję do dyspozycji.</td><td class="fr">Dziękuję i pozdrawiam.</td></tr>
<tr><td>Sign-off</td><td class="fr">Z poważaniem</td><td class="fr">Pozdrawiam</td></tr>
</table>
<div class="box"><b>Never open a formal email with "Witam"</b>It reads as either careless or subtly condescending to Polish readers, because it positions you as the host welcoming them. Use <span class="fr">Dzień dobry</span> or <span class="fr">Szanowny Panie</span>.</div>

<h3>Softening, the Polish way</h3>
<table>
<tr><td class="fr">Czy mógłbym prosić o…</td><td>Could I ask for…</td></tr>
<tr><td class="fr">Byłbym wdzięczny za…</td><td>I'd be grateful for…</td></tr>
<tr><td class="fr">Chciałbym zapytać, czy…</td><td>I'd like to ask whether…</td></tr>
<tr><td class="fr">Wydaje mi się, że…</td><td>It seems to me that…</td></tr>
<tr><td class="fr">Nie jestem pewien, ale…</td><td>I'm not sure, but…</td></tr>
</table>
`},
];

/* ============================================================
   POLISH DRILL SETS — no 90-day plan, just training blocks.
   Do them in any order, repeat them whenever.
   ============================================================ */
const PL_SETS = [
 [1,"Precyzja — better words than 'fajny'","Eighteen adjectives that make writing and speech land harder."],
 [2,"Idiomy, które warto mieć w zapasie","Fifteen idioms a native uses without thinking."],
 [3,"Polski biznesowy","Contracts, emails, invoices — the register that has to be right."],
 [4,"Aspekt w praktyce","Dokonany vs niedokonany, drilled on real sentences."],
 [5,"Potoczny polski","How people actually talk when nobody is being careful."],
 [6,"Łączniki i spójniki","The connectors that turn short sentences into arguments."],
 [7,"Pułapki i błędy","The mistakes that mark a speaker as untrained."],
 [8,"Słownictwo literackie","Words for writing, not chatting."],
];

const PL_LESSONS = {};

PL_LESSONS[1] = {
title:"Precyzja — better words than 'fajny'",
mins:20, goal:"Swap eighteen vague adjectives for precise ones, and know which register each belongs to.",
body:`
<h3>Why this set</h3>
<p>Fluent speakers plateau on a small set of all-purpose adjectives — <span class="fr">fajny, dobry, duży, ciekawy</span>. The vocabulary is not missing, it is just not active. This set moves eighteen precise words from recognition into use.</p>

<h3>The upgrades</h3>
<table>
<tr><th>Instead of</th><th>Try</th><th>When</th></tr>
<tr><td class="fr">dokładny</td><td class="fr">wnikliwy</td><td>analysis that goes beneath the surface</td></tr>
<tr><td class="fr">krótki</td><td class="fr">zwięzły</td><td>writing that wastes nothing</td></tr>
<tr><td class="fr">bezpośredni</td><td class="fr">dosadny</td><td>blunt to the point of discomfort</td></tr>
<tr><td class="fr">dobry, uczciwy</td><td class="fr">rzetelny</td><td>work and sources you can lean on</td></tr>
<tr><td class="fr">potrzebny</td><td class="fr">nieodzowny</td><td>cannot be removed without collapse</td></tr>
<tr><td class="fr">mały</td><td class="fr">znikomy</td><td>so small it barely counts</td></tr>
<tr><td class="fr">bolesny</td><td class="fr">dotkliwy</td><td>a loss keenly felt</td></tr>
<tr><td class="fr">dziwny</td><td class="fr">osobliwy</td><td>odd in an interesting way</td></tr>
<tr><td class="fr">dokładny (o remoncie)</td><td class="fr">gruntowny</td><td>down to the foundations</td></tr>
<tr><td class="fr">idealny</td><td class="fr">nienaganny</td><td>manners, form, execution</td></tr>
<tr><td class="fr">szybki, powierzchowny</td><td class="fr">pobieżny</td><td>a glance rather than a read</td></tr>
<tr><td class="fr">ważny</td><td class="fr">doniosły</td><td>historically weighty</td></tr>
<tr><td class="fr">uparty (o kaszlu)</td><td class="fr">uporczywy</td><td>won't go away, mildly negative</td></tr>
<tr><td class="fr">wyraźny</td><td class="fr">wyrazisty</td><td>flavour, character, style</td></tr>
<tr><td class="fr">skomplikowany</td><td class="fr">zawiły</td><td>tangled rather than merely hard</td></tr>
</table>

<h3>Pairs worth keeping apart</h3>
<div class="box"><b>wyraźny vs wyrazisty</b><span class="fr">wyraźny</span> = clearly perceptible (a clear signal).
<span class="fr">wyrazisty</span> = strongly characterful (a bold flavour, a vivid style).</div>
<div class="box"><b>osobliwy vs osobisty</b><span class="fr">osobliwy</span> = peculiar. <span class="fr">osobisty</span> = personal. They are not related.</div>
<div class="box"><b>znikomy vs nikły</b><span class="fr">znikomy</span> = negligible in quantity or significance. <span class="fr">nikły</span> = faint, barely perceptible — light, hope, a sound.</div>

<h3>Say them in context</h3>
<ol>
<li><span class="fr">Przeprowadzili wnikliwą analizę i wyciągnęli doniosłe wnioski.</span></li>
<li><span class="fr">Szansa jest znikoma, ale nadzieja nikła to wciąż nadzieja.</span></li>
<li><span class="fr">Jego uwagi są dosadne, za to zawsze rzetelne.</span></li>
<li><span class="fr">Po pobieżnej lekturze trudno ocenić tak zawiłą sprawę.</span></li>
</ol>
`,
homework:[
 {t:"Rewrite five sentences", d:"Take five things you wrote recently in Polish — messages, notes, anything. Replace every fajny, dobry, duży and ciekawy with a precise word from this set. Read both versions out loud and notice the difference."},
 {t:"Three a day", d:"Pick three words from this set and deliberately use each one in real speech or writing today. Active use once beats passive reading ten times."},
 {t:"Build the contrasts", d:"Write one sentence pair for each: wyraźny/wyrazisty, znikomy/nikły, osobliwy/osobisty. Getting the contrast right is what makes the word usable."},
 {t:"Read something dense", d:"Read one article from a serious Polish outlet and mark every adjective you recognise but would never produce. Those are your next set."}
],
quiz:[
 {t:"mc", q:"Which word means <b>concise, saying much in few words</b>?", a:["zwięzły","znikomy","zawiły","zgoła"], c:0, why:"<b>zwięzły</b> — its opposite is rozwlekły (long-winded)."},
 {t:"mc", q:"A renovation that goes down to the foundations is…", a:["gruntowny remont","pobieżny remont","znikomy remont","osobliwy remont"], c:0, why:"<b>gruntowny</b> — from grunt (ground). Pobieżny is its opposite: cursory."},
 {t:"mc", q:"<b>Bynajmniej</b> means…", a:["not at all, by no means","at least","approximately","in any case"], c:0, why:"It is emphatic negation. <b>Przynajmniej</b> is the one that means 'at least' — mixing them is the classic error."},
 {t:"mc", q:"Which pairs correctly?", a:["wyrazisty smak — a bold, distinct flavour","wyraźny smak — a bold flavour","wyrazisty sygnał — a clear signal","osobliwy smak — a personal flavour"], c:0, why:"<b>wyrazisty</b> is about strength of character; <b>wyraźny</b> is about being clearly perceptible."},
 {t:"mc", q:"A chance so small it barely registers is…", a:["znikoma","nikła","dotkliwa","doniosła"], c:0, why:"<b>znikomy</b> = negligible. <b>nikły</b> would suit a faint hope or light rather than a probability."},
 {t:"mc", q:"<b>Dotkliwy</b> describes…", a:["a loss or cold that is keenly felt","something physically large","something peculiar","something reliable"], c:0, why:"dotkliwa strata, dotkliwy ból, dotkliwy mróz — it is about severity felt, not size."},
 {t:"mc", q:"Which is the right word for a source you can rely on?", a:["rzetelne źródło","osobliwe źródło","pobieżne źródło","przewrotne źródło"], c:0, why:"<b>rzetelny</b> covers reliable and honest, and is standard for sources and work."},
 {t:"mc", q:"<b>Zawiły</b> suggests a problem that is…", a:["tangled and convoluted","merely large","urgent","trivial"], c:0, why:"It is about intricacy and knots, not scale or urgency."},
 {t:"type", q:"Write the Polish for <b>impeccable manners</b>.", ans:["nienaganne maniery"], why:"<b>Nienaganne maniery</b> — from nagana (a reprimand), so literally 'not open to reproach'."},
 {t:"type", q:"Write the Polish adjective meaning <b>indispensable</b>.", ans:["nieodzowny","nieodzowna","nieodzowne"], why:"<b>Nieodzowny</b> — stronger than potrzebny; it means the thing cannot be dispensed with."},
 {t:"type", q:"Write the Polish for <b>a persistent cough</b>.", ans:["uporczywy kaszel"], why:"<b>Uporczywy kaszel</b> — uporczywy carries a note of irritation that 'uparty' would not."},
 {t:"type", q:"Which word means <b>cursory, superficial</b>? Write it.", ans:["pobiezny","pobieżny","pobiezna","pobieżna"], why:"<b>Pobieżny</b> — a pobieżna lektura is a skim, the opposite of gruntowna."}
]
};

PL_LESSONS[2] = {
title:"Idiomy, które warto mieć w zapasie",
mins:20, goal:"Fifteen idioms, with the register each belongs to and what happens if you translate it literally.",
body:`
<h3>Why idioms matter more than vocabulary</h3>
<p>Idioms are the fastest way to sound like someone who grew up with the language rather than someone who learned it well. They are also the hardest thing to acquire passively, because you have to hear one several times before it becomes usable.</p>

<h3>The fifteen</h3>
<table>
<tr><th>Idiom</th><th>Means</th><th>Literally</th></tr>
<tr><td class="fr">rzucać grochem o ścianę</td><td>to talk to a brick wall</td><td>throwing peas at a wall</td></tr>
<tr><td class="fr">mieć muchy w nosie</td><td>to be in a huff</td><td>to have flies in the nose</td></tr>
<tr><td class="fr">urwanie głowy</td><td>utter chaos</td><td>a tearing-off of the head</td></tr>
<tr><td class="fr">wyjść na swoje</td><td>to come out even</td><td>to come out onto one's own</td></tr>
<tr><td class="fr">robić z igły widły</td><td>to blow it out of proportion</td><td>to make a pitchfork from a needle</td></tr>
<tr><td class="fr">mieć węża w kieszeni</td><td>to be tight-fisted</td><td>to have a snake in one's pocket</td></tr>
<tr><td class="fr">bułka z masłem</td><td>a piece of cake</td><td>a roll with butter</td></tr>
<tr><td class="fr">rzucić okiem</td><td>to take a quick look</td><td>to throw an eye</td></tr>
<tr><td class="fr">trzymać kciuki</td><td>to keep fingers crossed</td><td>to hold thumbs</td></tr>
<tr><td class="fr">być nie w sosie</td><td>to be out of sorts</td><td>to be not in the sauce</td></tr>
<tr><td class="fr">chodzić na rzęsach</td><td>to be dead on one's feet</td><td>to walk on one's eyelashes</td></tr>
<tr><td class="fr">wiercić dziurę w brzuchu</td><td>to pester relentlessly</td><td>to drill a hole in someone's belly</td></tr>
<tr><td class="fr">puszczać płazem</td><td>to let it slide</td><td>to let it go as an amphibian</td></tr>
<tr><td class="fr">mieć coś z głowy</td><td>to have it off one's plate</td><td>to have it off one's head</td></tr>
<tr><td class="fr">iść po najmniejszej linii oporu</td><td>to take the easy way out</td><td>along the least line of resistance</td></tr>
</table>

<h3>Register notes</h3>
<div class="box"><b>Safe anywhere</b><span class="fr">rzucić okiem, trzymać kciuki, mieć coś z głowy, bułka z masłem</span> — all fine in an office.</div>
<div class="box red"><b>Keep out of formal writing</b><span class="fr">mieć muchy w nosie, chodzić na rzęsach, być nie w sosie</span> — these are spoken register. In an email they read as jokey.</div>

<h3>Three that behave grammatically</h3>
<ul>
<li><span class="fr">trzymać kciuki <b>za kogoś</b></span> — <span class="fr">Trzymam za ciebie kciuki.</span></li>
<li><span class="fr">puszczać coś <b>płazem</b></span> — the płazem stays fixed in the instrumental.</li>
<li><span class="fr">wiercić <b>komuś</b> dziurę w brzuchu</span> — takes a dative person.</li>
</ul>
`,
homework:[
 {t:"Five in conversation", d:"Use five of these idioms in actual speech or messages this week. Idioms only stick once you have risked one in front of another person."},
 {t:"Sort by register", d:"Split all fifteen into three piles: fine in an email, fine with colleagues, friends only. Being wrong about register is worse than not knowing the idiom."},
 {t:"Find the English twin", d:"For each idiom, write the closest English equivalent. Where none exists — zdążyć, urwanie głowy — note that, because those are the ones worth keeping."},
 {t:"Listen for them", d:"Watch twenty minutes of Polish television or a podcast and count how many of these fifteen come up. You will be surprised how dense the usage is."}
],
quiz:[
 {t:"mc", q:"<b>Rzucać grochem o ścianę</b> means…", a:["to talk to a brick wall","to waste food","to argue loudly","to throw a tantrum"], c:0, why:"The peas bounce off; nothing you say goes in."},
 {t:"mc", q:"Someone who <b>ma węża w kieszeni</b> is…", a:["stingy","dangerous","secretive","unlucky"], c:0, why:"The snake would bite anyone reaching for the wallet."},
 {t:"mc", q:"Which idiom means <b>utter chaos</b>?", a:["urwanie głowy","bułka z masłem","wyjść na swoje","rzucić okiem"], c:0, why:"<b>Urwanie głowy</b> — used constantly about work: W pracy urwanie głowy."},
 {t:"mc", q:"In Poland, to wish someone luck you hold your…", a:["thumbs — trzymać kciuki","fingers crossed","breath","hat"], c:0, why:"<b>Trzymam kciuki</b>. The English crossed fingers does not translate."},
 {t:"mc", q:"<b>Chodzić na rzęsach</b> describes someone who is…", a:["exhausted","sneaking around","showing off","very careful"], c:0, why:"Dead on their feet. It is spoken register — keep it out of formal writing."},
 {t:"mc", q:"Which of these is safe in a work email?", a:["rzucić okiem","być nie w sosie","mieć muchy w nosie","chodzić na rzęsach"], c:0, why:"<b>Rzuć okiem na tę umowę</b> is perfectly normal at work. The other three are casual spoken idioms."},
 {t:"mc", q:"<b>Robić z igły widły</b> means…", a:["to make a mountain out of a molehill","to do delicate work","to improvise a tool","to make things worse deliberately"], c:0, why:"A needle turned into a pitchfork — the same exaggeration image as the English."},
 {t:"mc", q:"<b>Puszczać płazem</b> means…", a:["to let something slide","to release an animal","to spread a rumour","to fail an exam"], c:0, why:"Nie puszczę tego płazem — I won't let that go unanswered."},
 {t:"type", q:"Write the Polish idiom for <b>a piece of cake</b> (something very easy).", ans:["bulka z maslem","bułka z masłem"], why:"<b>Bułka z masłem</b> — a bread roll with butter."},
 {t:"type", q:"Write the Polish for <b>Take a look at this contract.</b> using the idiom for a quick look.", ans:["rzuc okiem na te umowe","rzuć okiem na tę umowę","rzuc okiem na ta umowe"], why:"<b>Rzuć okiem na tę umowę.</b> Note tę, not tą — it is the direct object."},
 {t:"type", q:"Write the Polish idiom meaning <b>to have something off one's plate</b> (done and dealt with).", ans:["miec cos z glowy","mieć coś z głowy"], why:"<b>Mieć coś z głowy</b> — Zrobione, mam to z głowy."},
 {t:"type", q:"Write the Polish for <b>Don't blow it out of proportion.</b>", ans:["nie rob z igly widel","nie rób z igły wideł","nie rob z igly widly","nie rób z igły widły"], why:"<b>Nie rób z igły widły</b> is the fixed form you will hear most, though widły is technically the plural subject."}
]
};

PL_LESSONS[3] = {
title:"Polski biznesowy",
mins:20, goal:"Write a contract email that reads as though a Polish lawyer wrote it.",
body:`
<h3>The register problem</h3>
<p>Business Polish is not just formal vocabulary — it is a different set of verbs. Spoken Polish says <span class="fr">zrobić umowę</span>; written business Polish says <span class="fr">sporządzić umowę</span>. Getting this wrong does not make you unintelligible, it makes you sound junior.</p>

<h3>Verb upgrades</h3>
<table>
<tr><th>Spoken</th><th>Business</th><th>Use</th></tr>
<tr><td class="fr">zrobić umowę</td><td class="fr">sporządzić umowę</td><td>draw up a document</td></tr>
<tr><td class="fr">wprowadzić</td><td class="fr">wdrożyć</td><td>implement a system or process</td></tr>
<tr><td class="fr">zapłacić</td><td class="fr">uregulować należność</td><td>settle an amount due</td></tr>
<tr><td class="fr">zrobić, co obiecaliśmy</td><td class="fr">wywiązać się z umowy</td><td>fulfil an obligation (+ genitive)</td></tr>
<tr><td class="fr">zauważyć</td><td class="fr">odnotować</td><td>record, note formally</td></tr>
<tr><td class="fr">zdecydować</td><td class="fr">podjąć decyzję</td><td>never 'zrobić decyzję'</td></tr>
</table>

<h3>The email skeleton</h3>
<table>
<tr><td class="fr">Szanowny Panie Marku,</td><td>Dear Mr Marek,</td></tr>
<tr><td class="fr">W nawiązaniu do naszej rozmowy z dnia 12 sierpnia…</td><td>Further to our conversation of 12 August…</td></tr>
<tr><td class="fr">Uprzejmie proszę o potwierdzenie terminu.</td><td>I kindly ask you to confirm the date.</td></tr>
<tr><td class="fr">W załączeniu przesyłam sporządzoną umowę.</td><td>Please find attached the drafted contract.</td></tr>
<tr><td class="fr">Pozostaję do dyspozycji.</td><td>I remain at your disposal.</td></tr>
<tr><td class="fr">Z poważaniem, Oliver Mucka</td><td>Yours sincerely, Oliver Mucka</td></tr>
</table>
<div class="box red"><b>Never open with "Witam"</b>To a Polish reader it positions you as the host welcoming them into your space, which reads as careless at best and condescending at worst. Use <span class="fr">Dzień dobry</span> or <span class="fr">Szanowny Panie / Szanowna Pani</span>.</div>

<h3>Three nouns worth owning</h3>
<ul>
<li><span class="fr">zobowiązanie</span> — an obligation, and in the plural, financial liabilities.</li>
<li><span class="fr">kontrahent</span> — the other party to a contract. Standard, neutral, precise.</li>
<li><span class="fr">rozliczenie</span> — a settlement or reconciliation of accounts. <span class="fr">Rozliczyć się z kimś</span> = to settle up.</li>
</ul>
`,
homework:[
 {t:"Write one real email", d:"Write a genuine business email in Polish using the six-slot skeleton. Even if you never send it, produce the whole thing: opening, reference, request, attachment, close, sign-off."},
 {t:"Swap six verbs", d:"Take something you wrote in casual Polish and swap in sporządzić, wdrożyć, uregulować, wywiązać się z, odnotować, podjąć. Notice how much more formal it reads."},
 {t:"Read a real contract", d:"Find any Polish umowa online and read the first page out loud. Mark every verb you would not have chosen yourself — those are the ones doing the register work."},
 {t:"Kill the Witam habit", d:"If you ever open Polish emails with Witam, replace it everywhere with Dzień dobry. It is the single quickest upgrade to how your written Polish is received."}
],
quiz:[
 {t:"mc", q:"Which verb belongs in a contract: to draw up a document?", a:["sporządzić","zrobić","napisać","założyć"], c:0, why:"<b>Sporządzić umowę</b> is standard legal register. Zrobić umowę is spoken."},
 {t:"mc", q:"How should you NOT open a formal Polish email?", a:["Witam","Dzień dobry","Szanowny Panie","Szanowna Pani"], c:0, why:"<b>Witam</b> casts you as the host welcoming the reader — it lands as careless or condescending."},
 {t:"mc", q:"<b>Wywiązać się</b> takes which case?", a:["genitive — wywiązać się z umowy","accusative","dative","instrumental"], c:0, why:"Always <b>z</b> + genitive: wywiązać się z umowy, z obowiązku."},
 {t:"mc", q:"The other party to a contract is a…", a:["kontrahent","klient","odbiorca","świadek"], c:0, why:"<b>Kontrahent</b> is the neutral standard term in Polish contracts."},
 {t:"mc", q:"Which is correct?", a:["podjąć decyzję","zrobić decyzję","wziąć decyzję","dać decyzję"], c:0, why:"<b>Podjąć decyzję</b>. Zrobić decyzję is a direct calque from English and sounds wrong."},
 {t:"mc", q:"<b>Uregulować należność</b> means…", a:["to settle an amount due","to regulate a market","to cancel an invoice","to negotiate a price"], c:0, why:"It is the formal way to say 'pay what is owed'."},
 {t:"mc", q:"Which closes a formal Polish email correctly?", a:["Z poważaniem","Pozdrowienia","Trzymaj się","Do zobaczenia"], c:0, why:"<b>Z poważaniem</b> is the formal sign-off. Pozdrawiam is neutral; the last two are personal."},
 {t:"type", q:"Write the Polish for <b>Further to our conversation…</b>", ans:["w nawiazaniu do naszej rozmowy","w nawiązaniu do naszej rozmowy"], why:"<b>W nawiązaniu do naszej rozmowy</b> — the standard business email opener."},
 {t:"type", q:"Write the Polish for <b>I remain at your disposal.</b>", ans:["pozostaje do dyspozycji","pozostaję do dyspozycji"], why:"<b>Pozostaję do dyspozycji</b> — closes a formal email before the sign-off."},
 {t:"type", q:"Write the business verb meaning <b>to implement / roll out</b>.", ans:["wdrozyc","wdrożyć","wdrazac","wdrażać"], why:"<b>Wdrożyć</b> (dk.) / <b>wdrażać</b> (ndk.). Also used for onboarding a person."}
]
};

PL_LESSONS[4] = {
title:"Aspekt w praktyce",
mins:20, goal:"Choose the right aspect without thinking about it, including after zacząć, lubić and przestać.",
body:`
<h3>The question to ask</h3>
<p>Not "when did it happen" but <b>"am I describing a process or a completed whole?"</b></p>
<table>
<tr><th>Process, habit, background</th><th>One finished act, a result</th></tr>
<tr><td class="fr">Czytałem książkę.</td><td class="fr">Przeczytałem książkę.</td></tr>
<tr><td>I was reading / used to read.</td><td>I read it through.</td></tr>
<tr><td class="fr">Uczyłem się polskiego.</td><td class="fr">Nauczyłem się polskiego.</td></tr>
<tr><td>I was studying Polish.</td><td>I learned Polish (and now know it).</td></tr>
</table>

<h3>Perfective verbs have no present tense</h3>
<div class="box red"><b>This is the trap</b><span class="fr">Zrobię</span> looks like a present tense and means <b>I will do</b>. There is no way to say "I am doing" with a perfective verb — that is exactly what the imperfective is for.<br><br>
<span class="fr">robię</span> = I am doing · <span class="fr">będę robić</span> = I will be doing · <span class="fr">zrobię</span> = I will do (and finish)</div>

<h3>Trigger words</h3>
<table>
<tr><th>Force imperfective</th><th>Force perfective</th></tr>
<tr><td class="fr">zawsze, często, zwykle, codziennie, ciągle, długo</td><td class="fr">nagle, wreszcie, w końcu, od razu, naraz</td></tr>
</table>
<div class="box blue"><b>After these three verbs, always imperfective</b><span class="fr">zacząć</span>, <span class="fr">przestać</span>, <span class="fr">lubić</span>.<br>
<span class="fr">Zacząłem <b>czytać</b></span> — never przeczytać. <span class="fr">Przestał <b>palić</b></span>. <span class="fr">Lubię <b>gotować</b></span>.</div>

<h3>Pairs with different roots</h3>
<p>Most pairs are built with a prefix (<span class="fr">pisać → napisać</span>). These five are not, and they have to be memorised:</p>
<p class="fr">brać → wziąć · widzieć → zobaczyć · mówić → powiedzieć · kłaść → położyć · oglądać → obejrzeć</p>

<h3>Negation flips the feel</h3>
<p><span class="fr">Nie czytałem tej książki.</span> — I haven't read it (no particular occasion in mind).<br>
<span class="fr">Nie przeczytałem tej książki.</span> — I failed to finish it (a specific attempt).</p>
`,
homework:[
 {t:"Ten pairs out loud", d:"Take ten verbs you use constantly and say both aspects in a full sentence each: robić/zrobić, pisać/napisać, czytać/przeczytać, jeść/zjeść, kupować/kupić and five of your own."},
 {t:"Rewrite a story", d:"Describe your yesterday in five sentences, then rewrite it switching every aspect. Read both. The second version should sound wrong in a way you can feel — that feeling is the skill."},
 {t:"The zacząć drill", d:"Write five sentences with zacząć, przestać and lubić. Every single verb after them must be imperfective. Check each one."},
 {t:"Catch yourself", d:"For one day, notice every time you use a perfective verb about the present. It will be zero, because it is impossible — proving the rule to yourself is the point."}
],
quiz:[
 {t:"mc", q:"<b>Zrobię to jutro.</b> What tense is this?", a:["Future — perfective verbs have no present","Present","Past","Conditional"], c:0, why:"A perfective verb conjugated like a present tense is always future. This is the core trap."},
 {t:"mc", q:"Which is correct: <b>Zacząłem ___ książkę.</b>", a:["czytać","przeczytać","poczytać","doczytać"], c:0, why:"After <b>zacząć</b> the verb is always imperfective — you begin a process, not a completed act."},
 {t:"mc", q:"<b>Przeczytałem książkę</b> means…", a:["I read the book all the way through","I was reading the book","I used to read the book","I will read the book"], c:0, why:"The prefix prze- makes it perfective: a completed whole with a result."},
 {t:"mc", q:"The perfective partner of <b>brać</b> is…", a:["wziąć","zabrać","brałem","branie"], c:0, why:"A different root entirely — one of the five pairs you simply have to memorise."},
 {t:"mc", q:"Which word forces an imperfective verb?", a:["zawsze","nagle","wreszcie","od razu"], c:0, why:"<b>Zawsze</b> signals habit, so the verb must be imperfective. The other three signal a single completed event."},
 {t:"mc", q:"<b>Nauczyłem się polskiego</b> implies…", a:["I learned it and now I know it","I was studying it","I study it regularly","I will study it"], c:0, why:"Perfective, so there is a result: the knowledge is acquired."},
 {t:"mc", q:"Which is the correct perfective of <b>mówić</b>?", a:["powiedzieć","mówiłem","mawiać","zmówić"], c:0, why:"<b>Mówić → powiedzieć</b>, another different-root pair."},
 {t:"mc", q:"How do you say <b>I will be doing it</b> (ongoing)?", a:["Będę to robić","Zrobię to","Robię to","Zrobiłem to"], c:0, why:"Imperfective future is <b>być</b> + infinitive (or + past participle): będę robić / będę robił."},
 {t:"type", q:"Write the Polish for <b>I finally read that book.</b> (finished it)", ans:["w koncu przeczytalem te ksiazke","w końcu przeczytałem tę książkę","wreszcie przeczytalem te ksiazke","wreszcie przeczytałem tę książkę"], why:"<b>W końcu przeczytałem tę książkę.</b> W końcu forces the perfective, and note tę for the object."},
 {t:"type", q:"Write the imperfective partner of <b>zobaczyć</b>.", ans:["widziec","widzieć"], why:"<b>Widzieć → zobaczyć.</b> Widzę go co dzień; zobaczyłem go wczoraj."}
]
};

PL_LESSONS[5] = {
title:"Potoczny polski",
mins:20, goal:"Sound like someone who lives there, not someone who studied there.",
body:`
<h3>The gap</h3>
<p>Textbook Polish and spoken Polish diverge fast. These are the words that fill actual conversation — and the ones that instantly mark speech as natural.</p>
<table>
<tr><th>Word</th><th>Means</th><th>Note</th></tr>
<tr><td class="fr">ogarnąć</td><td>to sort out, get a handle on</td><td>the single most useful modern colloquialism</td></tr>
<tr><td class="fr">ogarnięty</td><td>switched-on, has it together</td><td>high praise about a person</td></tr>
<tr><td class="fr">załatwić</td><td>to arrange, take care of, get done</td><td>the universal Polish verb</td></tr>
<tr><td class="fr">dawać radę</td><td>to manage, cope</td><td class="fr">Dajesz radę?</td></tr>
<tr><td class="fr">spoko</td><td>cool, no worries</td><td>neutral casual</td></tr>
<tr><td class="fr">masakra</td><td>a disaster / unbelievable</td><td>used for good and bad alike</td></tr>
<tr><td class="fr">beka</td><td>a laugh, something hilarious</td><td>younger register</td></tr>
<tr><td class="fr">lipa</td><td>rubbish, a letdown</td><td></td></tr>
<tr><td class="fr">kumać</td><td>to get it, follow</td><td>slangy</td></tr>
<tr><td class="fr">z marszu</td><td>straight off, on the fly</td><td>also fine at work</td></tr>
<tr><td class="fr">na chłopski rozum</td><td>in plain common-sense terms</td><td>folksy but widely used</td></tr>
<tr><td class="fr">mieć to gdzieś</td><td>not to care at all</td><td>mildly rude</td></tr>
</table>

<h3>Ogarnąć deserves its own section</h3>
<p>It has spread to cover almost anything involving getting on top of a situation:</p>
<ul>
<li><span class="fr">Ogarnę to jutro.</span> — I'll sort it tomorrow.</li>
<li><span class="fr">Ogarniasz temat?</span> — Do you follow / are you across this?</li>
<li><span class="fr">Ogarnij się.</span> — Pull yourself together.</li>
<li><span class="fr">Ogarnięty gość.</span> — A guy who has his act together.</li>
</ul>

<h3>W porządku — two meanings</h3>
<p><span class="fr">Jest w porządku</span> can mean "it's fine" about a situation, or "he's a decent person" about someone. Context decides, and the second use is very common.</p>

<div class="box red"><b>Register warning</b><span class="fr">beka</span>, <span class="fr">kumać</span> and <span class="fr">mieć to gdzieś</span> are for friends only. <span class="fr">Spoko</span>, <span class="fr">dawać radę</span>, <span class="fr">załatwić</span> and <span class="fr">z marszu</span> are fine with colleagues.</div>
`,
homework:[
 {t:"Ogarnij coś", d:"Use ogarnąć in four different senses today — sorting a task, following a topic, telling someone to pull themselves together, describing a competent person."},
 {t:"Register sort", d:"Split these twelve into friends-only and work-safe. Then check yourself against the warning box. Getting this wrong is more costly than not knowing the word."},
 {t:"Listen and count", d:"Watch a Polish YouTube vlog or podcast for fifteen minutes and tally how often these appear. Colloquial density is much higher than textbooks suggest."},
 {t:"Rewrite formal to casual", d:"Take five formal Polish sentences and rewrite them the way you would actually say them to a friend. That gap is the thing you are training."}
],
quiz:[
 {t:"mc", q:"<b>Ogarnę to jutro</b> means…", a:["I'll sort it out tomorrow","I'll look at it tomorrow","I'll forget about it","I'll finish it today"], c:0, why:"Ogarnąć covers getting on top of almost any task or situation."},
 {t:"mc", q:"Calling someone <b>ogarnięty</b> is…", a:["a compliment — they have it together","an insult","neutral, meaning busy","a way of saying confused"], c:0, why:"It is real praise: competent, organised, across things."},
 {t:"mc", q:"Which is safe to use with colleagues?", a:["dawać radę","beka","kumać","mieć to gdzieś"], c:0, why:"<b>Dajesz radę?</b> is a normal check-in at work. The other three are friends-only."},
 {t:"mc", q:"<b>Masakra</b> can describe…", a:["both something terrible and something amazing","only disasters","only violence","only traffic"], c:0, why:"Like the English 'insane', it swings both ways depending on tone."},
 {t:"mc", q:"<b>Jest w porządku</b> said about a person means…", a:["he's a decent guy","he's physically fine","he's organised","he's on time"], c:0, why:"About a person it is a character judgement — decent, sound, alright."},
 {t:"mc", q:"<b>Załatwić</b> is best translated as…", a:["to arrange or take care of","to finish","to argue","to pay"], c:0, why:"Załatwię ci bilet — I'll sort you out a ticket. It covers an enormous range."},
 {t:"mc", q:"<b>Z marszu</b> means…", a:["straight off, without preparation","on the way","during a walk","in a hurry"], c:0, why:"Zrobił to z marszu — he did it off the bat, no run-up."},
 {t:"mc", q:"<b>Lipa</b> means…", a:["rubbish, a letdown","a lime tree only","a lie","luck"], c:0, why:"Literally a linden tree, but colloquially something disappointing or fake."},
 {t:"type", q:"Write the Polish for <b>Are you managing?</b> using the colloquial phrase.", ans:["dajesz rade","dajesz radę"], why:"<b>Dajesz radę?</b> — an extremely common informal check-in."},
 {t:"type", q:"Write the Polish colloquial verb meaning <b>to sort out / get a handle on</b>.", ans:["ogarnac","ogarnąć"], why:"<b>Ogarnąć</b> — perfective; the imperfective is ogarniać."}
]
};

PL_LESSONS[6] = {
title:"Łączniki i spójniki",
mins:20, goal:"Build long, argued sentences instead of short declarative ones.",
body:`
<h3>Why connectors matter</h3>
<p>The difference between competent Polish and impressive Polish is rarely vocabulary — it is the ability to hold a thought across three clauses. Connectors are what make that possible.</p>

<h3>The set</h3>
<table>
<tr><th>Connector</th><th>Means</th><th>Register</th></tr>
<tr><td class="fr">niemniej jednak</td><td>nevertheless</td><td>formal writing</td></tr>
<tr><td class="fr">wobec tego</td><td>in that case, therefore</td><td>neutral</td></tr>
<tr><td class="fr">zważywszy na</td><td>considering, given</td><td>formal</td></tr>
<tr><td class="fr">tym bardziej, że</td><td>all the more so because</td><td>neutral</td></tr>
<tr><td class="fr">o ile</td><td>insofar as, provided that</td><td>neutral</td></tr>
<tr><td class="fr">rzecz w tym, że</td><td>the thing is that</td><td>spoken and written</td></tr>
<tr><td class="fr">mimo to</td><td>in spite of that</td><td>neutral</td></tr>
<tr><td class="fr">co więcej</td><td>moreover</td><td>neutral</td></tr>
<tr><td class="fr">innymi słowy</td><td>in other words</td><td>neutral</td></tr>
<tr><td class="fr">skądinąd</td><td>incidentally, from another angle</td><td>literary</td></tr>
<tr><td class="fr">bynajmniej</td><td>by no means</td><td>formal — and constantly misused</td></tr>
<tr><td class="fr">z jednej strony… z drugiej</td><td>on one hand… on the other</td><td>neutral</td></tr>
</table>

<h3>Two that get confused</h3>
<div class="box"><b>mimo to vs mimo że</b><span class="fr">mimo to</span> = in spite of <b>that</b> (refers back to a whole previous statement).<br>
<span class="fr">mimo że</span> = although (introduces a clause).<br><br>
<span class="fr">Padało. Mimo to poszliśmy.</span> — It rained. We went anyway.<br>
<span class="fr">Mimo że padało, poszliśmy.</span> — Although it rained, we went.</div>

<h3>Build one long sentence</h3>
<p>Take a simple claim and stack connectors onto it:</p>
<ol>
<li><span class="fr">To drogie.</span></li>
<li><span class="fr">To drogie, niemniej jednak warto.</span></li>
<li><span class="fr">Zważywszy na koszty, to drogie, niemniej jednak warto — tym bardziej, że nie mamy alternatywy.</span></li>
</ol>
<p>That third sentence is the target register.</p>
`,
homework:[
 {t:"Stack a sentence", d:"Take three simple opinions you hold and expand each into a three-clause sentence using at least two connectors. Say them out loud — connectors have to survive speech, not just writing."},
 {t:"Fix the bynajmniej habit", d:"Write five sentences with bynajmniej meaning 'by no means', and five with przynajmniej meaning 'at least'. Read them until the difference is automatic."},
 {t:"Mimo to / mimo że", d:"Write four sentence pairs contrasting the two. The test is whether what follows is a full clause or a reference back."},
 {t:"Argue a side", d:"Pick something small you have an opinion about and argue it out loud in Polish for two minutes, deliberately using z jednej strony, co więcej, niemniej jednak and wobec tego."}
],
quiz:[
 {t:"mc", q:"<b>Bynajmniej</b> means…", a:["by no means, not at all","at least","approximately","in any case"], c:0, why:"It is emphatic negation and the opposite of what most speakers assume."},
 {t:"mc", q:"Which is correct: <b>___ padało, poszliśmy.</b> (Although it rained, we went)", a:["Mimo że","Mimo to","Niemniej","Wobec tego"], c:0, why:"<b>Mimo że</b> introduces a clause. <b>Mimo to</b> refers back to a previous statement."},
 {t:"mc", q:"<b>Zważywszy na koszty…</b> means…", a:["Given the costs…","Weighing the costs…","Ignoring the costs…","Regarding the costs…"], c:0, why:"A formal way of saying 'taking X into account'."},
 {t:"mc", q:"<b>Tym bardziej, że</b> introduces…", a:["a reinforcing reason","a contrast","a conclusion","an example"], c:0, why:"Nie pójdę, tym bardziej że pada — the rain strengthens the reason already given."},
 {t:"mc", q:"Which connector is the most formal?", a:["niemniej jednak","no bo","rzecz w tym","spoko"], c:0, why:"<b>Niemniej jednak</b> belongs in formal writing; the others are conversational or not connectors at all."},
 {t:"mc", q:"<b>O ile się nie mylę</b> means…", a:["Unless I'm mistaken","However much I'm mistaken","Since I'm not mistaken","As I'm mistaken"], c:0, why:"O ile sets a condition: insofar as / provided that."},
 {t:"mc", q:"<b>Skądinąd</b> is best described as…", a:["literary — incidentally, from another angle","colloquial — from somewhere","formal — therefore","neutral — nevertheless"], c:0, why:"It carries a literary flavour: Skądinąd słuszna uwaga."},
 {t:"mc", q:"Which pair correctly opens a two-sided argument?", a:["Z jednej strony… z drugiej strony…","Z jednej strony… niemniej…","Wobec tego… co więcej…","Innymi słowy… mimo to…"], c:0, why:"The fixed pairing is z jednej strony… z drugiej (strony)."},
 {t:"type", q:"Write the Polish for <b>Nevertheless, it's worth a try.</b>", ans:["niemniej jednak warto sprobowac","niemniej jednak warto spróbować"], why:"<b>Niemniej jednak warto spróbować.</b>"},
 {t:"type", q:"Write the Polish for <b>In that case, we're changing the plan.</b>", ans:["wobec tego zmieniamy plan"], why:"<b>Wobec tego zmieniamy plan.</b> Wobec tego draws a consequence from what was just said."}
]
};

PL_LESSONS[7] = {
title:"Pułapki i błędy",
mins:20, goal:"Eliminate the twelve errors that mark a speaker as untrained.",
body:`
<h3>These are not learner errors</h3>
<p>Every one of these is made by native speakers every day. Fixing them is what separates fluent from precise.</p>

<h3>The twelve</h3>
<table>
<tr><th>❌</th><th>✅</th><th>Why</th></tr>
<tr><td class="fr">w każdym bądź razie</td><td class="fr">w każdym razie</td><td>a collision of two separate phrases</td></tr>
<tr><td class="fr">poszłem</td><td class="fr">poszedłem</td><td>masculine is poszedłem; poszłam is the feminine</td></tr>
<tr><td class="fr">wziąść</td><td class="fr">wziąć</td><td>there is no ś in the infinitive</td></tr>
<tr><td class="fr">włanczać</td><td class="fr">włączać</td><td>built on łączyć, so the ą stays</td></tr>
<tr><td class="fr">cofnąć się do tyłu</td><td class="fr">cofnąć się</td><td>cofnąć already means backwards</td></tr>
<tr><td class="fr">okres czasu</td><td class="fr">okres</td><td>an okres is by definition a stretch of time</td></tr>
<tr><td class="fr">pod rząd</td><td class="fr">z rzędu</td><td>trzy dni z rzędu</td></tr>
<tr><td class="fr">na dworzu</td><td class="fr">na dworze</td><td>outside</td></tr>
<tr><td class="fr">widzę tą książkę</td><td class="fr">widzę tę książkę</td><td>tę is accusative, tą is instrumental</td></tr>
<tr><td class="fr">w cudzysłowiu</td><td class="fr">w cudzysłowie</td><td></td></tr>
<tr><td class="fr">bynajmniej = przynajmniej</td><td class="fr">bynajmniej = not at all</td><td>they are opposites</td></tr>
<tr><td class="fr">dwutysięczny dwudziesty rok</td><td class="fr">dwa tysiące dwudziesty rok</td><td>only the last element declines</td></tr>
</table>

<h3>Tę vs tą — the quick test</h3>
<div class="box blue"><b>Is it the direct object, or after a preposition?</b>
Direct object → <span class="fr">tę</span>: <span class="fr">Widzę <b>tę</b> książkę. Kupiłem <b>tę</b> sukienkę.</span><br>
After a preposition taking the instrumental → <span class="fr">tą</span>: <span class="fr">Idę z <b>tą</b> książką. Pod <b>tą</b> lampą.</span></div>

<h3>Włączać vs załączać</h3>
<p><span class="fr">włączyć</span> = switch on. <span class="fr">załączyć</span> = attach (to an email). The noun is <span class="fr">załącznik</span>. Business emails need the second one.</p>
`,
homework:[
 {t:"Audit your own speech", d:"For one day, catch yourself on these twelve. Most people commit at least three habitually. Write down which ones are yours."},
 {t:"The tę drill", d:"Write ten sentences alternating tę and tą. Say each out loud. The rule only works if it is automatic in speech, not just recognised on the page."},
 {t:"Read the wrong versions aloud", d:"Say each ❌ form out loud once, then the ✅ form five times. Hearing the wrong one deliberately makes the right one feel correct by contrast."},
 {t:"Fix one for good", d:"Pick the single error you make most often and correct yourself every time for a week. One eliminated habit beats twelve half-noticed ones."}
],
quiz:[
 {t:"mc", q:"Which is correct?", a:["w każdym razie","w każdym bądź razie","w każdym bądź wypadku","bądź w każdym razie"], c:0, why:"<b>W każdym razie.</b> The 'bądź' version is a mashup of w każdym razie and bądź co bądź."},
 {t:"mc", q:"A man says he went. Which is right?", a:["poszedłem","poszłem","poszłam","poszedłam"], c:0, why:"<b>Poszedłem</b> for a man, <b>poszłam</b> for a woman. Poszłem is a very common error."},
 {t:"mc", q:"Which is the correct infinitive?", a:["wziąć","wziąść","wziąsc","wziać"], c:0, why:"<b>Wziąć.</b> There is no ś anywhere in it."},
 {t:"mc", q:"Which is correct: <b>Widzę ___ książkę.</b>", a:["tę","tą","ta","tej"], c:0, why:"Direct object, so accusative: <b>tę</b>. Tą is instrumental — z tą książką."},
 {t:"mc", q:"Three days in a row is…", a:["trzy dni z rzędu","trzy dni pod rząd","trzy dni w rzędzie","trzy dni na rząd"], c:0, why:"<b>Z rzędu</b> is the correct form; pod rząd is widely used but considered incorrect."},
 {t:"mc", q:"Which is correct for attaching a file to an email?", a:["załączam plik","włączam plik","łączę plik","wyłączam plik"], c:0, why:"<b>Załączyć</b> = attach; <b>włączyć</b> = switch on. The noun is załącznik."},
 {t:"mc", q:"<b>Okres czasu</b> is wrong because…", a:["okres already means a period of time","okres is the wrong noun","czasu is the wrong case","it is too formal"], c:0, why:"A pleonasm — the same fault as 'cofnąć się do tyłu'."},
 {t:"mc", q:"How do you say the year 2020 in Polish?", a:["dwa tysiące dwudziesty rok","dwutysięczny dwudziesty rok","dwa tysiąc dwudziesty rok","dwutysiączny rok dwudziesty"], c:0, why:"Only the final element declines: <b>dwa tysiące dwudziesty</b>."},
 {t:"type", q:"Write the correct Polish for <b>outside</b> (as in, the weather outside).", ans:["na dworze"], why:"<b>Na dworze.</b> Na dworzu is a common mistake."},
 {t:"type", q:"Write the correct form: to switch on the light.", ans:["wlaczyc swiatlo","włączyć światło","wlaczac swiatlo","włączać światło"], why:"<b>Włączyć światło.</b> Never włanczać — it comes from łączyć."}
]
};

PL_LESSONS[8] = {
title:"Słownictwo literackie",
mins:20, goal:"Twelve words for writing rather than chatting — and the judgement to know when they fit.",
body:`
<h3>What this register is for</h3>
<p>These words belong in essays, speeches, serious articles and deliberate writing. Used in casual conversation they sound affected — which is exactly why knowing where the line falls matters as much as knowing the words.</p>

<h3>The twelve</h3>
<table>
<tr><th>Word</th><th>Means</th><th>Note</th></tr>
<tr><td class="fr">snuć</td><td>to spin (a tale), to muse</td><td><span class="fr">snuć plany</span> is common even in speech</td></tr>
<tr><td class="fr">obłuda</td><td>hypocrisy</td><td>stronger and colder than fałsz</td></tr>
<tr><td class="fr">ułuda</td><td>illusion, delusion</td><td></td></tr>
<tr><td class="fr">znój</td><td>toil, hardship</td><td>archaic flavour, used deliberately</td></tr>
<tr><td class="fr">dojmujący</td><td>acute, overwhelming (of feeling)</td><td class="fr">dojmujące poczucie straty</td></tr>
<tr><td class="fr">nieodparty</td><td>irresistible, compelling</td><td class="fr">nieodparte wrażenie</td></tr>
<tr><td class="fr">czczy</td><td>empty, idle, vain</td><td class="fr">czcze gadanie</td></tr>
<tr><td class="fr">poczytywać za</td><td>to regard as</td><td class="fr">Poczytuję to za zaszczyt.</td></tr>
<tr><td class="fr">zgoła</td><td>utterly, quite</td><td class="fr">zgoła inna sprawa</td></tr>
<tr><td class="fr">wszelako</td><td>however</td><td>deliberately old-fashioned</td></tr>
<tr><td class="fr">osnowa</td><td>the underlying fabric</td><td>from weaving</td></tr>
<tr><td class="fr">nurt</td><td>current, school of thought</td><td><span class="fr">główny nurt</span> = the mainstream</td></tr>
</table>

<h3>Where the line falls</h3>
<div class="box"><b>These have crossed into ordinary use</b><span class="fr">snuć plany</span>, <span class="fr">obłuda</span>, <span class="fr">nurt</span>, <span class="fr">nieodparty</span> — all usable in a serious conversation without sounding theatrical.</div>
<div class="box red"><b>These stay on the page</b><span class="fr">wszelako</span>, <span class="fr">zgoła</span>, <span class="fr">znój</span>, <span class="fr">osnowa</span> — in speech they read as either literary parody or affectation, unless you are doing it on purpose.</div>

<h3>Two false trails</h3>
<ul>
<li><span class="fr">czczy</span> (empty, idle) is unrelated to <span class="fr">czcić</span> (to worship). But <span class="fr">na czczo</span> — on an empty stomach — is the same root.</li>
<li><span class="fr">ułuda</span> and <span class="fr">obłuda</span> look like a pair and are not: illusion versus hypocrisy.</li>
</ul>
`,
homework:[
 {t:"Write a paragraph", d:"Write 150 words of deliberately literary Polish about anything, using at least six of these. The point is to feel the register from the inside."},
 {t:"Sort the twelve", d:"Split them into speech-safe and page-only. Then check against the two boxes. Register judgement is the actual skill here."},
 {t:"Read a Polish essay", d:"Find an essay or long-form article in Polish and mark every word from this register. Note which ones the writer chose and why a plainer word would have been weaker."},
 {t:"The false pairs", d:"Write one sentence each for ułuda and obłuda, and one for czczy and na czczo. These four are where the confusion lives."}
],
quiz:[
 {t:"mc", q:"<b>Obłuda</b> means…", a:["hypocrisy","illusion","toil","emptiness"], c:0, why:"Colder and stronger than fałsz. <b>Ułuda</b> is the one that means illusion."},
 {t:"mc", q:"<b>Ułuda</b> means…", a:["illusion, delusion","hypocrisy","hardship","current"], c:0, why:"The two look like a pair but are unrelated in meaning."},
 {t:"mc", q:"Which of these would sound affected in casual speech?", a:["wszelako","nurt","obłuda","nieodparty"], c:0, why:"<b>Wszelako</b> is deliberately archaic. The other three are fine in serious conversation."},
 {t:"mc", q:"<b>Dojmujący</b> describes…", a:["a feeling that is acute and overwhelming","a sound that is loud","a person who is persistent","a colour that is bright"], c:0, why:"Dojmujące poczucie straty — an acute sense of loss."},
 {t:"mc", q:"<b>Czcze gadanie</b> means…", a:["idle, empty talk","sacred speech","fast talking","honest talk"], c:0, why:"Czczy = empty or vain. Unrelated to czcić (to worship), though na czczo shares the root."},
 {t:"mc", q:"<b>Główny nurt</b> means…", a:["the mainstream","the main river","the main problem","the main point"], c:0, why:"Nurt is a current — literally of a river, figuratively of thought."},
 {t:"mc", q:"<b>Poczytywać za</b> means…", a:["to regard as","to read about","to count towards","to blame for"], c:0, why:"Poczytuję to za zaszczyt — I regard it as an honour. Formal and elegant."},
 {t:"mc", q:"<b>Snuć plany</b> means…", a:["to make plans","to abandon plans","to hide plans","to rush plans"], c:0, why:"Literally to spin plans — the same weaving image as snuć opowieść."},
 {t:"type", q:"Write the Polish for <b>an entirely different matter</b> using the literary adverb.", ans:["zgola inna sprawa","zgoła inna sprawa"], why:"<b>Zgoła inna sprawa.</b> Zgoła means utterly or quite, and stays on the page."},
 {t:"type", q:"Write the Polish word meaning <b>toil, hardship</b> with an archaic flavour.", ans:["znoj","znój"], why:"<b>Znój</b> — w znoju i pocie. Used deliberately for its old-fashioned weight."}
]
};

PL_SETS.push([9,"Ortografia — ó/u, rz/ż, ch/h, ą/ę","The written norms. Speech is fine; spelling is where the gaps are."]);

PL_LESSONS[9] = {
title:"Ortografia — ó/u, rz/ż, ch/h, ą/ę",
mins:20, goal:"Spell Polish the way it is written, not the way it sounds.",
body:`
<h3>Why this set exists</h3>
<p>Polish spelling records sounds that merged centuries ago. <b>ó</b> and <b>u</b> are now identical in speech, so are <b>rz</b> and <b>ż</b>, and <b>ch</b> and <b>h</b>. A speaker who learned Polish by ear has no way to hear which one to write — the information simply is not in the sound any more. That is not a knowledge gap, it is missing data, and the rules below put it back.</p>

<h3>ó or u — look for the alternation</h3>
<div class="box blue"><b>The test</b>Write <b>ó</b> when a related word has <b>o</b>, <b>e</b> or <b>a</b> in that slot.</div>
<table>
<tr><th>Word</th><th>Related form</th><th>Why</th></tr>
<tr><td class="fr">mróz</td><td class="fr">mrozu, mrozem</td><td>ó ↔ o</td></tr>
<tr><td class="fr">wóz</td><td class="fr">wozy</td><td>ó ↔ o</td></tr>
<tr><td class="fr">stół</td><td class="fr">stołu</td><td>ó ↔ o</td></tr>
<tr><td class="fr">niósł</td><td class="fr">niesie</td><td>ó ↔ e</td></tr>
<tr><td class="fr">skrót</td><td class="fr">skrócić</td><td>ó ↔ o</td></tr>
<tr><td class="fr">mój, twój, swój</td><td class="fr">mojego, twojego</td><td>ó ↔ o</td></tr>
</table>
<p><b>Always ó:</b> in the endings <b>-ów, -ówka, -ówna</b> — <span class="fr">samochodów, pocztówka, Nowakówna</span>.</p>
<p><b>Just memorise these:</b> <span class="fr">ogórek, król, córka, wróbel, góra, próba, później, wkrótce, płótno</span>.</p>
<p><b>Never ó at the start of a word</b> except <span class="fr">ósmy, ów, ówczesny</span>.</p>

<h3>rz or ż — same test, different partners</h3>
<div class="box blue"><b>The test</b>Write <b>rz</b> when a related word has <b>r</b>. Write <b>ż</b> when a related word has <b>g, dz, z, s, h</b>.</div>
<table>
<tr><th>rz ↔ r</th><th>ż ↔ g / dz / z / s</th></tr>
<tr><td class="fr">morze → morski</td><td class="fr">może → mogę</td></tr>
<tr><td class="fr">dworzec → dworu</td><td class="fr">książka → księga</td></tr>
<tr><td class="fr">lekarz → lekarski</td><td class="fr">mosiężny → mosiądz</td></tr>
<tr><td class="fr">rzeka → rzeczny</td><td class="fr">wożę → wozić</td></tr>
</table>
<div class="box red"><b>The rule that solves half of them</b>After <b>p, b, t, d, k, g, ch, j, w</b> it is <b>always rz</b>:<br>
<span class="fr">przy, brzeg, trzy, drzewo, krzyk, grzyb, chrzest, wrzesień, ujrzeć</span>.<br><br>
Exceptions worth knowing: <span class="fr">pszenica, pszczoła, kształt, bukszpan, wszystko, zawsze</span> — these take <b>sz</b>, not rz.</div>
<p><b>Always ż after l, ł, r, n:</b> <span class="fr">lżej, łże, rżysko</span>.</p>
<p><b>Memorise:</b> <span class="fr">żaba, żona, żyto, jeżeli, żeby, ryż, także, zawżdy</span>.</p>

<h3>ch or h</h3>
<div class="box blue"><b>The test</b><b>ch</b> alternates with <b>sz</b>. <b>h</b> alternates with <b>g</b>, <b>z</b> or <b>ż</b>.</div>
<table>
<tr><th>ch ↔ sz</th><th>h ↔ g / z / ż</th></tr>
<tr><td class="fr">mucha → muszka</td><td class="fr">wahać się → waga</td></tr>
<tr><td class="fr">druch → druszka</td><td class="fr">druh → drużyna</td></tr>
<tr><td class="fr">cicho → ciszej</td><td class="fr">błahy → błazen</td></tr>
</table>
<p><b>ch is always the ending</b> of a word: <span class="fr">dach, gmach, na rękach, o domach</span>. A Polish word never ends in <b>h</b>.</p>
<p><b>h mostly appears in borrowings:</b> <span class="fr">historia, hotel, herbata, honor, humor, bohater</span>.</p>

<h3>ą or ę — and where they turn into om / em</h3>
<table>
<tr><td class="fr">wziąć</td><td>never <b>wziąść</b> — there is no ś in this verb</td></tr>
<tr><td class="fr">włączać</td><td>from <b>łączyć</b>, so never <b>włanczać</b></td></tr>
<tr><td class="fr">wziąłem / wzięłam</td><td>ą for a man, ę for a woman</td></tr>
<tr><td class="fr">poszedłem / poszłam</td><td>never <b>poszłem</b></td></tr>
<tr><td class="fr">idę, robię, piszę</td><td>first person always ends <b>-ę</b>, never <b>-em</b></td></tr>
<tr><td class="fr">tę książkę</td><td>accusative is <b>tę</b>; <b>tą</b> is instrumental — z tą książką</td></tr>
</table>

<h3>Write these ten out by hand</h3>
<p class="fr">mój · mróz · stół · ogórek · książka · przez · wrzesień · mucha · historia · wziąłem</p>
<p>Handwriting them matters more than typing. The motor memory is what fixes spelling, which is why children copy words rather than reading them.</p>
`,
homework:[
 {t:"Handwrite twenty words", d:"Write out by hand, twice each: mój, mróz, stół, skrót, ogórek, król, córka, morze, może, książka, przez, brzeg, trzy, wrzesień, mucha, cicho, historia, herbata, wziąłem, poszedłem. Typing does not build the same memory."},
 {t:"Apply the alternation test", d:"For each of these, find the related word that proves the spelling: wóz, niósł, lekarz, wożę, mucha, wahać. If you can produce the partner word, you never have to memorise the spelling."},
 {t:"Rewrite your own email", d:"Take question 33 from your placement test and rewrite it with every diacritic in place. Compare against the corrected version I gave you, word by word."},
 {t:"Read aloud, then copy", d:"Take one paragraph of written Polish. Read it out loud, then copy it by hand, then check. Do this once a week — it is the single most effective exercise for a speaker whose ear is ahead of their eye."}
],
quiz:[
 {t:"mc", q:"Which is correct?", a:["mróz","mruz","mrósz","mrus"], c:0, why:"<b>mróz</b> — because the genitive is <b>mrozu</b>. ó alternates with o."},
 {t:"mc", q:"Why is it <b>morze</b> and not <b>może</b> when you mean 'sea'?", a:["rz alternates with r — morski","ż is only used at word ends","they are interchangeable","morze is a borrowing"], c:0, why:"<b>morze → morski</b> gives you rz. <b>może → mogę</b> gives you ż."},
 {t:"mc", q:"After the letters p, b, t, d, k, g, ch, j, w you always write…", a:["rz","ż","sz","either"], c:0, why:"przy, brzeg, trzy, drzewo, krzyk, grzyb, chrzest, wrzesień. Watch for the sz exceptions: pszenica, pszczoła, kształt, wszystko."},
 {t:"mc", q:"Which is correct?", a:["wziąć","wziąść","wziąźć","wzionść"], c:0, why:"<b>wziąć.</b> There is no ś anywhere in this verb."},
 {t:"mc", q:"A man says he went. Which is right?", a:["poszedłem","poszłem","poszedłam","poszłam"], c:0, why:"<b>Poszedłem</b> for a man, <b>poszłam</b> for a woman. Poszłem is the most common spoken error in Polish."},
 {t:"mc", q:"Which is correct?", a:["włączać","włanczać","właczać","włonczać"], c:0, why:"It comes from <b>łączyć</b>, so the ą stays: <b>włączać</b>."},
 {t:"mc", q:"Why is it <b>mucha</b> and not <b>muha</b>?", a:["ch alternates with sz — muszka","h never appears mid-word","mucha is a borrowing","both spellings are accepted"], c:0, why:"<b>mucha → muszka.</b> The ch/sz alternation proves it."},
 {t:"mc", q:"A Polish word can end in…", a:["ch, never h","h, never ch","either","neither"], c:0, why:"<b>dach, gmach, na rękach.</b> No native Polish word ends in h."},
 {t:"mc", q:"Widzę ___ książkę. / Idę z ___ książką.", a:["tę / tą","tą / tę","tę / tę","tą / tą"], c:0, why:"<b>tę</b> is the accusative (direct object); <b>tą</b> is the instrumental, used after a preposition."},
 {t:"type", q:"Write the Polish for <b>my</b> (masculine, e.g. my Polish) with the correct diacritic.", ans:["moj","mój"], why:"<b>mój</b> — because of <b>mojego</b>. The o in the related form gives you ó."},
 {t:"type", q:"Write the Polish word for <b>book</b>.", ans:["ksiazka","książka"], why:"<b>książka</b> — ż because of <b>księga</b>."},
 {t:"type", q:"Write the Polish word for <b>September</b>.", ans:["wrzesien","wrzesień"], why:"<b>wrzesień</b> — rz because it follows w, and ń at the end."}
]
};
