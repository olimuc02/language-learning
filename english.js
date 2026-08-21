/* ============================================================
   ENGLISH — vocabulary expansion for a native speaker.
   Not ESL: precision words, rhetoric, confusables, and the
   Latin and French that carries weight in serious writing.
   ============================================================ */

const EN_CATS = [
 ["precision","Precision Words","🎯"],
 ["rhetoric","Argument &amp; Rhetoric","⚖️"],
 ["character","Describing People","👤"],
 ["business","Business &amp; Professional","💼"],
 ["confusable","Commonly Confused","⚠️"],
 ["borrowed","Latin &amp; French","🏛️"],
 ["verbs","Vivid Verbs","⚡"],
];

/* [word, pronunciation, meaning, category, example, gloss, note, set] */
const EN_VOCAB = [
// --- precision
["salient","SAY-lee-ənt","most noticeable or important","precision","The salient point is cost.","Cost is the point that stands out.","from Latin 'to leap' — it jumps out at you",1],
["ostensible","oss-TEN-si-bəl","apparent, stated but perhaps not true","precision","The ostensible reason was budget.","The stated reason — with a hint it wasn't the real one.","always carries mild suspicion",1],
["tractable","TRAK-tə-bəl","easily managed or solved","precision","A tractable problem.","One that yields to effort.","opposite: intractable",1],
["tenuous","TEN-yoo-əs","thin, weak, barely holding","precision","A tenuous connection.","A link that barely holds.","not the same as 'tenacious'",1],
["nominal","NOM-i-nəl","in name only; or trivially small","precision","A nominal fee.","A token amount.","two distinct senses",1],
["germane","jer-MAYN","relevant to the matter at hand","precision","That isn't germane.","That's beside the point.","sharper than 'relevant'",1],
["categorical","kat-ə-GOR-i-kəl","absolute, without exception","precision","A categorical denial.","A flat, unqualified denial.","",1],
["endemic","en-DEM-ik","native to and regularly found in","precision","Corruption is endemic there.","Built into the place.","not the same as 'epidemic'",1],
["attenuate","ə-TEN-yoo-ayt","to weaken or thin out","precision","The effect attenuates over distance.","It fades with distance.","",1],
["proximate","PROK-si-mət","nearest in a causal chain","precision","The proximate cause was the fire.","The immediate cause, not the root one.","legal and engineering term",1],
["commensurate","kə-MEN-shər-ət","proportionate to","precision","Pay commensurate with experience.","Pay in proportion to experience.","+ with",1],
["ancillary","AN-si-ler-ee","supporting, subordinate","precision","Ancillary services.","The supporting ones, not the core.","",1],
["discrete","dis-KREET","separate, individually distinct","precision","Three discrete stages.","Three separate stages.","NOT 'discreet' (tactful)",1],
["obviate","OB-vee-ayt","to remove the need for","precision","That obviates the second step.","It makes step two unnecessary.","not 'to make obvious'",1],
["cogent","KOH-jənt","clear, logical and convincing","precision","A cogent argument.","One that compels agreement.","",1],
["nuance","NOO-ahns","a subtle distinction","precision","A nuance worth preserving.","A fine distinction.","from French",1],

// --- rhetoric
["specious","SPEE-shəs","superficially plausible but wrong","rhetoric","A specious argument.","Looks sound, isn't.","the classic word for bad reasoning",2],
["tautology","taw-TOL-ə-jee","saying the same thing twice","rhetoric","'Free gift' is a tautology.","Redundant by definition.","",2],
["equivocate","ee-KWIV-ə-kayt","to use ambiguity to avoid committing","rhetoric","He equivocated for ten minutes.","Talked without saying anything.","",2],
["concede","kən-SEED","to grant a point to an opponent","rhetoric","I'll concede that much.","I'll grant you that.","strengthens your own position",2],
["premise","PREM-iss","a claim an argument is built on","rhetoric","The premise is flawed.","The foundation is wrong.","attack this, not the conclusion",2],
["corollary","KOR-ə-ler-ee","something that follows naturally","rhetoric","The corollary is higher costs.","What necessarily follows.","",2],
["caveat","KAV-ee-at","a warning or qualification","rhetoric","With one caveat.","With one reservation.","Latin: 'let him beware'",2],
["untenable","un-TEN-ə-bəl","impossible to defend","rhetoric","That position is untenable.","It cannot be held.","",2],
["disingenuous","dis-in-JEN-yoo-əs","pretending to be more naive than one is","rhetoric","That's disingenuous.","Falsely innocent.","a precise accusation, not just 'dishonest'",2],
["ad hominem","ad HOM-i-nem","attacking the person, not the argument","rhetoric","That's ad hominem.","Attacking me, not my point.","Latin",2],
["strawman","STRAW-man","a distorted version of an argument","rhetoric","You're arguing a strawman.","Attacking a claim I didn't make.","",2],
["substantiate","səb-STAN-shee-ayt","to support with evidence","rhetoric","Can you substantiate that?","Can you back it up?","",2],
["repudiate","ri-PYOO-dee-ayt","to reject formally and completely","rhetoric","He repudiated the claim.","Publicly disowned it.","stronger than 'deny'",2],
["overstate","oh-ver-STAYT","to exaggerate","rhetoric","I don't want to overstate it.","A useful hedge before a strong claim.","",2],

// --- character
["laconic","lə-KON-ik","using very few words","character","A laconic reply.","Terse to the point of dryness.","from Laconia — the Spartans",3],
["mercurial","mer-KYOOR-ee-əl","liable to sudden mood changes","character","A mercurial boss.","Unpredictable in temperament.","from the planet Mercury",3],
["punctilious","punk-TIL-ee-əs","attentive to fine points of correctness","character","Punctilious about form.","Exacting about the details.","",3],
["obsequious","əb-SEE-kwee-əs","excessively eager to please","character","An obsequious assistant.","Fawning.","always pejorative",3],
["phlegmatic","fleg-MAT-ik","calm and unemotional","character","Phlegmatic under pressure.","Unruffled.","one of the four humours",3],
["intransigent","in-TRAN-si-jənt","refusing to compromise","character","An intransigent negotiator.","Immovable.","",3],
["magnanimous","mag-NAN-i-məs","generous, especially in victory","character","Magnanimous in victory.","Big-hearted toward the loser.","",3],
["pedantic","pə-DAN-tik","overly concerned with minor rules","character","Don't be pedantic.","Fussing over trivia.","",3],
["diffident","DIF-i-dənt","modest, lacking self-confidence","character","A diffident speaker.","Hesitant, self-effacing.","NOT the same as 'indifferent'",3],
["astute","ə-STOOT","shrewd, quick to see advantage","character","An astute observation.","Sharp and practical.","",3],
["dogged","DOG-id","persistent, refusing to give up","character","Dogged determination.","Relentless.","two syllables, not 'dogd'",3],
["affable","AF-ə-bəl","easy to talk to, good-natured","character","An affable host.","Warm and approachable.","",3],
["circumspect","SER-kəm-spekt","cautious, considering consequences","character","Circumspect in his answers.","Carefully guarded.","literally 'looking around'",3],
["truculent","TRUK-yoo-lənt","eager to argue, aggressively defiant","character","A truculent response.","Belligerent.","",3],

// --- business
["leverage","LEV-ər-ij","to use something to maximum advantage","business","Leverage the existing contract.","Use it as a lever.","overused, but precise when literal",4],
["mandate","MAN-dayt","an authoritative instruction","business","We have a clear mandate.","Authority to act.","also a verb",4],
["contingency","kən-TIN-jən-see","a provision for something that might happen","business","Build in a contingency.","A buffer for the unexpected.","",4],
["remit","REM-it (noun)","the scope of one's responsibility","business","That's outside my remit.","Not my area of authority.","British usage, increasingly common",4],
["material","mə-TEER-ee-əl","significant enough to matter","business","A material change to the terms.","Significant, not trivial.","legal and accounting sense",4],
["escalate","ESS-kə-layt","to refer upward for resolution","business","I'll escalate this.","Take it to someone senior.","",4],
["due diligence","dyoo DIL-i-jəns","thorough investigation before committing","business","We did our due diligence.","We checked properly first.","",4],
["stakeholder","STAYK-hohl-der","anyone with an interest in the outcome","business","Consult all stakeholders.","Everyone affected.","",4],
["indemnify","in-DEM-ni-fy","to protect against loss or liability","business","The clause indemnifies us.","Shields us from liability.","",4],
["in arrears","in ə-REERZ","behind on payments; or paid after the fact","business","Rent is paid in arrears.","Paid for the period just ended.","two related senses",4],
["pro rata","proh RAH-tə","proportionally","business","Charged pro rata.","In proportion to the share used.","Latin",4],
["accrue","ə-KROO","to accumulate over time","business","Interest accrues monthly.","Builds up month by month.","",4],
["attrition","ə-TRISH-ən","gradual loss of staff or customers","business","Reduce headcount by attrition.","Let it shrink naturally.","",4],
["fiduciary","fi-DOO-shee-er-ee","involving trust over another's assets","business","A fiduciary duty.","A legal duty of loyalty.","",4],

// --- confusable
["affect / effect","","affect = to influence (v); effect = a result (n)","confusable","It affected me. The effect was clear.","Affect acts, effect results.","'effect' as a verb means to bring about",5],
["comprise / compose","","the whole comprises the parts","confusable","The set comprises six items.","NOT 'is comprised of'.","the whole comprises; parts compose the whole",5],
["fewer / less","","fewer for countables, less for quantities","confusable","Fewer people, less water.","If you can count them, fewer.","",5],
["imply / infer","","the speaker implies, the listener infers","confusable","He implied it; I inferred it.","Two ends of the same act.","",5],
["disinterested / uninterested","","disinterested = impartial","confusable","A disinterested judge.","Not 'bored' — unbiased.","",5],
["discreet / discrete","","discreet = tactful; discrete = separate","confusable","Be discreet. Three discrete stages.","Different words entirely.","",5],
["principal / principle","","principal = chief; principle = a rule","confusable","The principal reason. A matter of principle.","Principal is a person or the main thing.","",5],
["flout / flaunt","","flout = to defy; flaunt = to display","confusable","Flout the rules, flaunt your wealth.","Often swapped.","",5],
["enormity","ee-NOR-mi-tee","extreme wickedness, not just size","confusable","The enormity of the crime.","Not simply 'the enormousness'.","purists insist; usage is shifting",5],
["begs the question","","assumes what it sets out to prove","confusable","That begs the question.","Not 'raises the question'.","the original logical sense",5],
["literally","LIT-ər-ə-lee","actually, not figuratively","confusable","He literally ran.","He actually ran.","the intensifier use grates on many readers",5],
["nonplussed","non-PLUST","bewildered, at a loss","confusable","She was nonplussed.","NOT 'unbothered'.","the American reversal causes real ambiguity",5],

// --- borrowed
["de facto","day FAK-toh","in fact, whether or not by right","borrowed","The de facto leader.","Leader in practice.","opposite: de jure",6],
["sine qua non","sin-ay kwah NON","an absolutely essential condition","borrowed","Trust is the sine qua non.","Without which, nothing.","Latin",6],
["prima facie","PRY-mə FAY-shee","on first appearance","borrowed","A prima facie case.","Enough to proceed on.","legal",6],
["ipso facto","IP-soh FAK-toh","by that very fact","borrowed","Ipso facto, it's void.","By that fact alone.","",6],
["ad nauseam","ad NAW-zee-am","to a tedious degree","borrowed","Debated ad nauseam.","Past the point of endurance.","",6],
["bona fide","BOH-nə fyde","genuine, in good faith","borrowed","A bona fide offer.","Sincere.","",6],
["carte blanche","kart BLONSH","complete freedom to act","borrowed","He was given carte blanche.","A blank cheque.","French",6],
["fait accompli","fayt ə-kom-PLEE","a thing already done","borrowed","Presented as a fait accompli.","Too late to argue.","French",6],
["raison d'être","ray-zon DET-rə","the reason a thing exists","borrowed","Its raison d'être.","Its whole purpose.","French",6],
["tour de force","toor də FORSS","a masterful performance","borrowed","A tour de force.","A display of great skill.","French",6],
["status quo","STAY-təs KWOH","the existing state of affairs","borrowed","Defend the status quo.","How things currently are.","",6],
["quid pro quo","kwid proh KWOH","something given for something received","borrowed","A clear quid pro quo.","This for that.","",6],
["non sequitur","non SEK-wi-ter","a conclusion that doesn't follow","borrowed","That's a non sequitur.","It doesn't follow.","",6],
["modus operandi","MOH-dəs op-ə-RAN-dee","a characteristic way of working","borrowed","His usual modus operandi.","His standard method.","often shortened to MO",6],

// --- vivid verbs
["galvanise","GAL-və-nyze","to shock into action","verbs","The news galvanised the team.","Jolted them into motion.","from electricity",7],
["obfuscate","OB-fəs-kayt","to deliberately make unclear","verbs","The report obfuscates the losses.","Hides them in fog.","",7],
["truncate","TRUNG-kayt","to cut short","verbs","The meeting was truncated.","Cut off before the end.","",7],
["supplant","sə-PLANT","to replace, especially by force","verbs","Supplanted by a rival.","Displaced and taken over.","stronger than 'replace'",7],
["capitulate","kə-PIT-yoo-layt","to surrender on terms","verbs","They capitulated.","Gave in.","",7],
["proliferate","prə-LIF-ər-ayt","to increase rapidly in number","verbs","Copies proliferated.","Multiplied fast.","",7],
["undermine","un-der-MYNE","to weaken gradually from below","verbs","It undermines trust.","Erodes it quietly.","from siege warfare",7],
["circumvent","ser-kəm-VENT","to find a way around","verbs","Circumvent the restriction.","Get around it.","",7],
["precipitate","pri-SIP-i-tayt","to cause to happen suddenly","verbs","It precipitated a crisis.","Triggered it abruptly.","as an adjective it means rash",7],
["consolidate","kən-SOL-i-dayt","to combine into a stronger whole","verbs","Consolidate the accounts.","Merge and strengthen.","",7],
["mitigate","MIT-i-gayt","to make less severe","verbs","Mitigate the risk.","Reduce the damage.","NOT 'militate'",7],
["delineate","di-LIN-ee-ayt","to describe or mark out precisely","verbs","Delineate the boundaries.","Draw the lines clearly.","",7],
["vacillate","VASS-i-layt","to waver between options","verbs","He vacillated for weeks.","Couldn't settle.","",7],
["exacerbate","ig-ZASS-er-bayt","to make worse","verbs","That exacerbates the problem.","Aggravates it.","",7],
];

/* ============================================================
   ENGLISH STUDY GUIDES
   ============================================================ */
const EN_GUIDES = [
{id:"misused", title:"Words People Misuse", sub:"The ones that quietly cost you credibility in writing", tag:"Fix these", body:`
<h3>The pairs</h3>
<table>
<tr><th>Word</th><th>What it actually means</th><th>What people think it means</th></tr>
<tr><td><b>disinterested</b></td><td>impartial, having no stake</td><td>bored</td></tr>
<tr><td><b>nonplussed</b></td><td>bewildered, at a loss</td><td>unbothered</td></tr>
<tr><td><b>enormity</b></td><td>extreme wickedness</td><td>enormous size</td></tr>
<tr><td><b>begs the question</b></td><td>assumes what it sets out to prove</td><td>raises the question</td></tr>
<tr><td><b>fulsome</b></td><td>excessive to the point of insincerity</td><td>generous, abundant</td></tr>
<tr><td><b>peruse</b></td><td>to read carefully and in full</td><td>to skim</td></tr>
<tr><td><b>moot</b></td><td>debatable (UK) / irrelevant (US)</td><td>settled</td></tr>
<tr><td><b>decimate</b></td><td>to destroy a tenth of</td><td>to wipe out</td></tr>
<tr><td><b>refute</b></td><td>to disprove with evidence</td><td>to deny</td></tr>
<tr><td><b>comprise</b></td><td>the whole comprises the parts</td><td>is comprised of</td></tr>
</table>
<div class="box"><b>A note on being right about this</b>Several of these have shifted so far in general usage that insisting on the older sense can itself be a communication failure. The useful position: know the distinction, use the precise sense in writing that will be read closely, and don't correct people at dinner.</div>

<h3>The genuinely useful distinctions</h3>
<table>
<tr><th>Pair</th><th>Rule</th><th>Example</th></tr>
<tr><td>affect / effect</td><td>affect acts, effect results</td><td>It affected me. The effect was clear.</td></tr>
<tr><td>imply / infer</td><td>speaker implies, listener infers</td><td>He implied it; I inferred it.</td></tr>
<tr><td>fewer / less</td><td>countable / uncountable</td><td>Fewer people, less water.</td></tr>
<tr><td>discreet / discrete</td><td>tactful / separate</td><td>Be discreet. Three discrete stages.</td></tr>
<tr><td>principal / principle</td><td>chief / a rule</td><td>The principal reason. A matter of principle.</td></tr>
<tr><td>flout / flaunt</td><td>defy / display</td><td>Flout rules, flaunt wealth.</td></tr>
<tr><td>mitigate / militate</td><td>lessen / work against</td><td>Mitigate risk. Militate against success.</td></tr>
<tr><td>proscribe / prescribe</td><td>forbid / recommend</td><td>Opposites, one letter apart.</td></tr>
</table>
`},

{id:"upgrades", title:"Precision Upgrades", sub:"Replacing 'very X' with the word that already means it", tag:"Writing", body:`
<h3>The very-trap</h3>
<p>Reaching for an intensifier usually means the right word exists and hasn't been found. The upgrade is almost always shorter and always stronger.</p>
<table>
<tr><th>Instead of</th><th>Use</th></tr>
<tr><td>very important</td><td>crucial, pivotal, salient</td></tr>
<tr><td>very obvious</td><td>self-evident, patent, manifest</td></tr>
<tr><td>very stubborn</td><td>intransigent, obdurate</td></tr>
<tr><td>very careful</td><td>meticulous, punctilious, circumspect</td></tr>
<tr><td>very short (of speech)</td><td>terse, laconic, curt</td></tr>
<tr><td>very convincing</td><td>cogent, compelling</td></tr>
<tr><td>very relevant</td><td>germane, pertinent</td></tr>
<tr><td>very common there</td><td>endemic</td></tr>
<tr><td>very small (amount)</td><td>negligible, nominal</td></tr>
<tr><td>very weak (link)</td><td>tenuous</td></tr>
<tr><td>very hard to solve</td><td>intractable</td></tr>
<tr><td>very generous in victory</td><td>magnanimous</td></tr>
<tr><td>very eager to please</td><td>obsequious</td></tr>
<tr><td>very calm</td><td>phlegmatic, unflappable</td></tr>
</table>

<h3>Hedging with precision</h3>
<p>Vague hedging weakens a claim. Precise hedging makes it more defensible.</p>
<table>
<tr><th>Vague</th><th>Precise</th></tr>
<tr><td>kind of true</td><td>true as far as it goes</td></tr>
<tr><td>maybe the reason</td><td>the ostensible reason</td></tr>
<tr><td>mostly a formality</td><td>nominal</td></tr>
<tr><td>I think it follows</td><td>the corollary would be</td></tr>
<tr><td>except for one thing</td><td>with one caveat</td></tr>
<tr><td>not the root cause</td><td>the proximate cause</td></tr>
</table>

<h3>Cutting the flab</h3>
<table>
<tr><th>Wordy</th><th>Tight</th></tr>
<tr><td>in order to</td><td>to</td></tr>
<tr><td>due to the fact that</td><td>because</td></tr>
<tr><td>at this point in time</td><td>now</td></tr>
<tr><td>has the ability to</td><td>can</td></tr>
<tr><td>in the event that</td><td>if</td></tr>
<tr><td>a large number of</td><td>many</td></tr>
<tr><td>it is often the case that</td><td>often</td></tr>
<tr><td>make a decision</td><td>decide</td></tr>
<tr><td>conduct an investigation</td><td>investigate</td></tr>
</table>
<div class="box blue"><b>The buried-verb rule</b>Most flab is a strong verb turned into a noun and propped up with a weak one. <i>Make a decision</i> hides <i>decide</i>. <i>Conduct an investigation</i> hides <i>investigate</i>. Find the noun, free the verb.</div>
`},

{id:"argument", title:"Naming Bad Arguments", sub:"The vocabulary that lets you say exactly what's wrong", tag:"Rhetoric", body:`
<h3>Why naming matters</h3>
<p>"That's not right" ends a conversation. "That's a strawman — I said X, not Y" moves it forward. Precision about the <i>type</i> of error is what makes disagreement productive.</p>

<h3>The named failures</h3>
<table>
<tr><th>Name</th><th>What it is</th><th>Example</th></tr>
<tr><td><b>strawman</b></td><td>attacking a distorted version of the claim</td><td>"So you want no rules at all?"</td></tr>
<tr><td><b>ad hominem</b></td><td>attacking the person, not the argument</td><td>"You would say that, you're a consultant."</td></tr>
<tr><td><b>begging the question</b></td><td>assuming the conclusion in the premise</td><td>"It's the best because nothing beats it."</td></tr>
<tr><td><b>non sequitur</b></td><td>the conclusion doesn't follow</td><td>"Sales rose, so the redesign worked."</td></tr>
<tr><td><b>false dichotomy</b></td><td>presenting two options as the only ones</td><td>"Either we cut costs or we fail."</td></tr>
<tr><td><b>specious</b></td><td>plausible on the surface, wrong underneath</td><td>Reasoning that survives a glance, not a look.</td></tr>
<tr><td><b>equivocation</b></td><td>shifting a word's meaning mid-argument</td><td>Using "free" two ways in one paragraph.</td></tr>
<tr><td><b>tautology</b></td><td>saying the same thing twice</td><td>"Free gift", "advance planning".</td></tr>
<tr><td><b>disingenuous</b></td><td>feigning more innocence than one has</td><td>"I was only asking a question."</td></tr>
<tr><td><b>moving the goalposts</b></td><td>raising the bar once it's met</td><td>Each answer prompts a new demand.</td></tr>
</table>

<h3>Language for conceding well</h3>
<p>Granting a point strengthens your position — it shows you're tracking the argument rather than defending a wall.</p>
<table>
<tr><td>I'll concede that much.</td><td>Grants one point, holds the rest.</td></tr>
<tr><td>That's fair, with one caveat.</td><td>Accepts, then qualifies.</td></tr>
<tr><td>Your premise holds; the corollary doesn't.</td><td>Accepts the start, rejects the finish.</td></tr>
<tr><td>I don't want to overstate this, but…</td><td>Pre-empts the accusation of exaggeration.</td></tr>
<tr><td>That position is untenable.</td><td>Says it cannot be defended, not merely that it's wrong.</td></tr>
<tr><td>Can you substantiate that?</td><td>Asks for evidence without calling it a lie.</td></tr>
</table>
`},

{id:"latin", title:"Latin &amp; French in English", sub:"The borrowed phrases that carry real weight, and how to say them", tag:"Reference", body:`
<h3>Latin</h3>
<table>
<tr><th>Phrase</th><th>Say it</th><th>Means</th></tr>
<tr><td><b>de facto</b></td><td>day FAK-toh</td><td>in fact, whether or not by right</td></tr>
<tr><td><b>de jure</b></td><td>day JOOR-ay</td><td>by law — the opposite of de facto</td></tr>
<tr><td><b>prima facie</b></td><td>PRY-mə FAY-shee</td><td>on first appearance, enough to proceed</td></tr>
<tr><td><b>ipso facto</b></td><td>IP-soh FAK-toh</td><td>by that very fact</td></tr>
<tr><td><b>sine qua non</b></td><td>sin-ay kwah NON</td><td>the indispensable condition</td></tr>
<tr><td><b>quid pro quo</b></td><td>kwid proh KWOH</td><td>this for that</td></tr>
<tr><td><b>non sequitur</b></td><td>non SEK-wi-ter</td><td>it does not follow</td></tr>
<tr><td><b>ad nauseam</b></td><td>ad NAW-zee-am</td><td>to a tedious degree</td></tr>
<tr><td><b>ad hominem</b></td><td>ad HOM-i-nem</td><td>at the person</td></tr>
<tr><td><b>bona fide</b></td><td>BOH-nə fyde</td><td>in good faith, genuine</td></tr>
<tr><td><b>caveat</b></td><td>KAV-ee-at</td><td>let him beware — a qualification</td></tr>
<tr><td><b>pro rata</b></td><td>proh RAH-tə</td><td>in proportion</td></tr>
<tr><td><b>modus operandi</b></td><td>MOH-dəs op-ə-RAN-dee</td><td>a characteristic method</td></tr>
<tr><td><b>status quo</b></td><td>STAY-təs KWOH</td><td>the existing state of things</td></tr>
</table>

<h3>French</h3>
<table>
<tr><th>Phrase</th><th>Say it</th><th>Means</th></tr>
<tr><td><b>carte blanche</b></td><td>kart BLONSH</td><td>complete freedom to act</td></tr>
<tr><td><b>fait accompli</b></td><td>fayt ə-kom-PLEE</td><td>already done, too late to argue</td></tr>
<tr><td><b>raison d'être</b></td><td>ray-zon DET-rə</td><td>the reason a thing exists</td></tr>
<tr><td><b>tour de force</b></td><td>toor də FORSS</td><td>a masterful performance</td></tr>
<tr><td><b>volte-face</b></td><td>volt FASS</td><td>a complete reversal of position</td></tr>
<tr><td><b>laissez-faire</b></td><td>less-ay FAIR</td><td>a hands-off approach</td></tr>
<tr><td><b>de rigueur</b></td><td>də ri-GUR</td><td>required by custom</td></tr>
<tr><td><b>coup de grâce</b></td><td>koo də GRAHSS</td><td>the finishing blow</td></tr>
</table>
<div class="box green"><b>Bonus: you're learning French</b>Every one of these French phrases is ordinary French. <span class="fr">Carte blanche</span> is a blank card. <span class="fr">Raison d'être</span> is a reason for being. Once your French gets going, these stop being memorised strings and start being sentences you can parse.</div>

<div class="box red"><b>Use sparingly</b>One well-placed Latin phrase sharpens a paragraph. Three make it insufferable. The test: would a plain English word do the same work? If yes, use the plain word.</div>
`},
];

/* ============================================================
   ENGLISH DRILL SETS
   ============================================================ */
const EN_SETS = [
 [1,"Precision Words","Sixteen words that replace a whole phrase."],
 [2,"Argument & Rhetoric","Naming exactly what's wrong with a bad argument."],
 [3,"Describing People","Fourteen precise character words."],
 [4,"Business & Professional","The vocabulary of contracts, risk and money."],
 [5,"Commonly Confused","The pairs that quietly cost credibility."],
 [6,"Latin & French","Borrowed phrases that carry weight."],
 [7,"Vivid Verbs","Fourteen verbs that do real work."],
];

const EN_LESSONS = {};

EN_LESSONS[1] = {
title:"Precision Words",
mins:20, goal:"Replace sixteen vague phrases with the single word that already means them.",
body:`
<h3>The principle</h3>
<p>Most weak writing is not missing vocabulary — it is reaching for two or three words where one exact word exists. The upgrade is shorter, stronger and more precise at the same time.</p>

<h3>The sixteen</h3>
<table>
<tr><th>Word</th><th>Means</th><th>Replaces</th></tr>
<tr><td><b>salient</b></td><td>most noticeable, standing out</td><td>the really important bit</td></tr>
<tr><td><b>ostensible</b></td><td>stated, but perhaps not the real one</td><td>the official reason, supposedly</td></tr>
<tr><td><b>tractable</b></td><td>yields to effort</td><td>actually solvable</td></tr>
<tr><td><b>tenuous</b></td><td>thin, barely holding</td><td>a pretty weak connection</td></tr>
<tr><td><b>nominal</b></td><td>in name only; or trivially small</td><td>basically just a formality</td></tr>
<tr><td><b>germane</b></td><td>relevant to this specific matter</td><td>actually relevant here</td></tr>
<tr><td><b>categorical</b></td><td>absolute, no exceptions</td><td>a flat, total denial</td></tr>
<tr><td><b>endemic</b></td><td>native to and constant in a place</td><td>just how it always is there</td></tr>
<tr><td><b>proximate</b></td><td>nearest in the causal chain</td><td>the immediate cause, not the root</td></tr>
<tr><td><b>commensurate</b></td><td>proportionate to</td><td>scaled in line with</td></tr>
<tr><td><b>ancillary</b></td><td>supporting, not core</td><td>the extra stuff around it</td></tr>
<tr><td><b>discrete</b></td><td>separate and distinct</td><td>separate individual ones</td></tr>
<tr><td><b>obviate</b></td><td>removes the need for</td><td>means you don't have to</td></tr>
<tr><td><b>cogent</b></td><td>clear and compelling</td><td>really quite convincing</td></tr>
<tr><td><b>attenuate</b></td><td>weakens gradually</td><td>gets weaker over time</td></tr>
<tr><td><b>nuance</b></td><td>a subtle distinction</td><td>a small but real difference</td></tr>
</table>

<h3>Three that get confused</h3>
<div class="box red"><b>discrete vs discreet</b><b>Discrete</b> = separate. <b>Discreet</b> = tactful. Same sound, unrelated meanings, and the wrong one in a document is noticed.</div>
<div class="box"><b>endemic vs epidemic</b><b>Endemic</b> = permanently present in a place. <b>Epidemic</b> = spreading rapidly. Corruption is endemic; cholera is epidemic.</div>
<div class="box"><b>obviate does not mean 'make obvious'</b>It means to remove the need for. <i>That obviates the second step</i> = step two is now unnecessary.</div>

<h3>Use them</h3>
<ol>
<li>The salient objection is cost; everything else is ancillary.</li>
<li>The ostensible reason was scheduling, but the link is tenuous.</li>
<li>A cogent argument obviates the need for a second meeting.</li>
<li>Pay should be commensurate with experience, not nominal.</li>
</ol>
`,
homework:[
 {t:"Rewrite an email", d:"Take something you wrote this week and replace every vague multi-word phrase with one precise word from this set. Read both versions — the second should be noticeably shorter."},
 {t:"Four a day", d:"Use four of these in real writing today. Not in a notebook — in an actual message, document or note someone else will read."},
 {t:"Nail the confusables", d:"Write one sentence each for discrete/discreet, endemic/epidemic and obviate. These three are where mistakes get noticed."},
 {t:"Hunt them in the wild", d:"Read one long article from a serious publication and mark every word from this set. Note the ones the writer chose where you'd have used three words."}
],
quiz:[
 {t:"mc", q:"<b>Ostensible</b> carries an implication that…", a:["the stated reason may not be the real one","the reason is obvious","the reason is complicated","the reason is legally binding"], c:0, why:"It always carries mild suspicion — it's the reason given, not necessarily the reason."},
 {t:"mc", q:"Which means <b>removes the need for</b>?", a:["obviate","obfuscate","obtrude","obviated by"], c:0, why:"<b>Obviate</b>. It does not mean 'make obvious', despite the resemblance."},
 {t:"mc", q:"Three separate, individually distinct stages are…", a:["discrete","discreet","discretionary","discursive"], c:0, why:"<b>Discrete</b> = separate. <b>Discreet</b> = tactful."},
 {t:"mc", q:"Corruption that is permanently built into a place is…", a:["endemic","epidemic","pandemic","systemic only"], c:0, why:"<b>Endemic</b> = native and constant. <b>Epidemic</b> = spreading fast."},
 {t:"mc", q:"<b>The proximate cause</b> means…", a:["the immediate cause in the chain","the root cause","the likely cause","the approximate cause"], c:0, why:"Proximate is nearest in the causal chain — deliberately distinguished from the ultimate or root cause."},
 {t:"mc", q:"<b>A nominal fee</b> is…", a:["a token amount","the full price","a negotiable price","a legally named price"], c:0, why:"Nominal has two senses: in name only, and trivially small. Both apply here."},
 {t:"mc", q:"Which word means <b>relevant to the matter at hand</b>?", a:["germane","genteel","germinal","generic"], c:0, why:"<b>Germane</b> is sharper than 'relevant' — it means relevant to this specific question."},
 {t:"mc", q:"<b>Commensurate</b> is followed by which word?", a:["with","to","for","of"], c:0, why:"Commensurate <b>with</b> experience. The preposition is fixed."},
 {t:"type", q:"Write the word meaning <b>clear, logical and convincing</b> (of an argument).", ans:["cogent"], why:"<b>Cogent</b> — an argument that compels agreement by its structure."},
 {t:"type", q:"Write the word meaning <b>thin, weak, barely holding</b> (of a connection).", ans:["tenuous"], why:"<b>Tenuous</b> — not to be confused with tenacious, which is nearly its opposite."},
 {t:"type", q:"Write the word meaning <b>supporting, subordinate, not core</b>.", ans:["ancillary"], why:"<b>Ancillary</b> — ancillary services are the ones around the main offering."},
 {t:"type", q:"Write the word meaning <b>absolute, without exception</b> (as in a denial).", ans:["categorical"], why:"<b>Categorical</b> — a categorical denial admits no qualification."}
]
};

EN_LESSONS[2] = {
title:"Argument & Rhetoric",
mins:20, goal:"Name precisely what's wrong with an argument, and concede well.",
body:`
<h3>Why naming beats objecting</h3>
<p>"That's not right" ends a conversation. "That's a strawman — I said X, not Y" moves it forward. Being able to name the <i>type</i> of failure is what turns disagreement into progress.</p>

<h3>The named failures</h3>
<table>
<tr><th>Name</th><th>What it is</th></tr>
<tr><td><b>strawman</b></td><td>attacking a distorted version of the claim</td></tr>
<tr><td><b>ad hominem</b></td><td>attacking the person rather than the argument</td></tr>
<tr><td><b>begging the question</b></td><td>assuming the conclusion inside the premise</td></tr>
<tr><td><b>non sequitur</b></td><td>a conclusion that doesn't follow from what came before</td></tr>
<tr><td><b>false dichotomy</b></td><td>presenting two options as though they were the only ones</td></tr>
<tr><td><b>specious</b></td><td>plausible at a glance, wrong on inspection</td></tr>
<tr><td><b>equivocation</b></td><td>shifting a word's meaning partway through</td></tr>
<tr><td><b>tautology</b></td><td>saying the same thing twice and calling it a reason</td></tr>
<tr><td><b>disingenuous</b></td><td>feigning more innocence than one actually has</td></tr>
</table>

<h3>The building blocks</h3>
<table>
<tr><td><b>premise</b></td><td>a claim the argument rests on — attack this, not the conclusion</td></tr>
<tr><td><b>corollary</b></td><td>what follows necessarily if the claim holds</td></tr>
<tr><td><b>caveat</b></td><td>a qualification attached to an agreement</td></tr>
<tr><td><b>untenable</b></td><td>cannot be defended, not merely wrong</td></tr>
<tr><td><b>substantiate</b></td><td>to back with evidence</td></tr>
<tr><td><b>repudiate</b></td><td>to reject formally and completely — stronger than deny</td></tr>
<tr><td><b>equivocate</b></td><td>to use ambiguity to avoid committing</td></tr>
</table>

<h3>Conceding is a strength move</h3>
<p>Granting a point signals you're tracking the argument rather than defending a wall — and it makes the ground you hold look considered rather than stubborn.</p>
<ul>
<li><b>I'll concede that much</b> — grants one point, keeps the rest.</li>
<li><b>That's fair, with one caveat</b> — accepts, then qualifies.</li>
<li><b>Your premise holds; the corollary doesn't</b> — accepts the start, rejects the finish.</li>
<li><b>I don't want to overstate this, but…</b> — pre-empts the charge of exaggeration.</li>
<li><b>Can you substantiate that?</b> — asks for evidence without calling it a lie.</li>
</ul>
<div class="box blue"><b>The most useful of the set</b><b>Disingenuous</b> is precise in a way "dishonest" isn't. It names a specific move: pretending not to understand something you understand perfectly well. "I was only asking a question" is its natural habitat.</div>
`,
homework:[
 {t:"Diagnose three arguments", d:"Find three arguments this week — news, a meeting, online — and name the failure precisely rather than just disagreeing. Write the name down."},
 {t:"Practise conceding", d:"In your next disagreement, deliberately concede one real point before making yours. Notice what it does to the other person's posture."},
 {t:"Premise vs conclusion", d:"Take an argument you disagree with and write out its premise and its corollary separately. Decide which one you actually reject — usually it's the premise."},
 {t:"Spot a strawman", d:"Write down a position you hold, then write the strawman version someone might attack. Being able to see it coming makes it easier to name."}
],
quiz:[
 {t:"mc", q:"<b>Begging the question</b> originally means…", a:["assuming the conclusion in the premise","raising an obvious question","avoiding a question","asking for clarification"], c:0, why:"A circular argument. The 'raises the question' usage is now common but loses the precise logical sense."},
 {t:"mc", q:"<b>Specious</b> reasoning is…", a:["superficially plausible but wrong","deliberately confusing","overly technical","unusually clever"], c:0, why:"It survives a glance but not a look — the key word for arguments that feel right and aren't."},
 {t:"mc", q:"<b>Disingenuous</b> names which specific move?", a:["feigning more innocence than one has","lying outright","changing the subject","exaggerating"], c:0, why:"'I was only asking a question' — pretending not to understand what you clearly understand."},
 {t:"mc", q:"Attacking a distorted version of someone's claim is a…", a:["strawman","non sequitur","tautology","false dichotomy"], c:0, why:"You knock down a version they never argued."},
 {t:"mc", q:"<b>Untenable</b> means a position…", a:["cannot be defended","is unpopular","is unproven","is illegal"], c:0, why:"Stronger and more specific than 'wrong' — it says the position can't be held at all."},
 {t:"mc", q:"A <b>corollary</b> is…", a:["something that follows necessarily","a supporting example","a counter-argument","an assumption"], c:0, why:"If the claim holds, the corollary holds with it."},
 {t:"mc", q:"<b>Repudiate</b> differs from <b>deny</b> because it is…", a:["formal and complete rejection","less certain","about facts only","about people only"], c:0, why:"You deny an accusation; you repudiate a claim, a doctrine or an agreement — publicly and wholly."},
 {t:"mc", q:"<b>Equivocate</b> means…", a:["to use ambiguity to avoid committing","to treat two things equally","to argue both sides fairly","to contradict oneself"], c:0, why:"Talking at length without landing anywhere. The noun equivocation also names the fallacy of shifting a word's meaning."},
 {t:"type", q:"Write the Latin phrase for <b>attacking the person, not the argument</b>.", ans:["ad hominem"], why:"<b>Ad hominem</b> — literally 'to the man'."},
 {t:"type", q:"Write the Latin phrase for <b>a conclusion that doesn't follow</b>.", ans:["non sequitur"], why:"<b>Non sequitur</b> — literally 'it does not follow'."},
 {t:"type", q:"Write the word for <b>a warning or qualification attached to an agreement</b>.", ans:["caveat"], why:"<b>Caveat</b> — Latin for 'let him beware'."},
 {t:"type", q:"Write the word meaning <b>to support with evidence</b>.", ans:["substantiate"], why:"<b>Substantiate</b> — asks for proof without accusing anyone of lying."}
]
};

EN_LESSONS[3] = {
title:"Describing People",
mins:20, goal:"Fourteen character words that say something specific instead of 'difficult' or 'nice'.",
body:`
<h3>The fourteen</h3>
<table>
<tr><th>Word</th><th>Means</th><th>Tone</th></tr>
<tr><td><b>laconic</b></td><td>using very few words</td><td>neutral to admiring</td></tr>
<tr><td><b>mercurial</b></td><td>liable to sudden mood swings</td><td>wary</td></tr>
<tr><td><b>punctilious</b></td><td>exacting about fine points of correctness</td><td>neutral</td></tr>
<tr><td><b>obsequious</b></td><td>excessively eager to please</td><td>always pejorative</td></tr>
<tr><td><b>phlegmatic</b></td><td>calm, unemotional under pressure</td><td>admiring</td></tr>
<tr><td><b>intransigent</b></td><td>refusing to compromise</td><td>critical</td></tr>
<tr><td><b>magnanimous</b></td><td>generous, especially toward a loser</td><td>admiring</td></tr>
<tr><td><b>pedantic</b></td><td>fussing over minor rules</td><td>critical</td></tr>
<tr><td><b>diffident</b></td><td>modest, short on confidence</td><td>sympathetic</td></tr>
<tr><td><b>astute</b></td><td>shrewd, quick to see advantage</td><td>admiring</td></tr>
<tr><td><b>dogged</b></td><td>persistent, won't quit</td><td>admiring</td></tr>
<tr><td><b>affable</b></td><td>easy to talk to</td><td>warm</td></tr>
<tr><td><b>circumspect</b></td><td>cautious, weighing consequences</td><td>neutral</td></tr>
<tr><td><b>truculent</b></td><td>aggressively defiant, spoiling for a fight</td><td>critical</td></tr>
</table>

<h3>The near-misses</h3>
<div class="box red"><b>diffident is not indifferent</b><b>Diffident</b> = shy, lacking confidence. <b>Indifferent</b> = not caring. A diffident person may care enormously.</div>
<div class="box"><b>punctilious vs pedantic</b>Both attend to detail. <b>Punctilious</b> is about correctness of form and is broadly neutral. <b>Pedantic</b> is about trivia and is an insult.</div>
<div class="box"><b>dogged has two syllables</b><b>DOG-id</b>, not 'dogd'. It's from a dog refusing to let go.</div>

<h3>Put them to work</h3>
<ol>
<li>Phlegmatic in a crisis, mercurial the rest of the time.</li>
<li>Magnanimous in victory and dogged in defeat.</li>
<li>He was punctilious about the contract and obsequious about the client.</li>
<li>An astute negotiator who stays circumspect until the last moment.</li>
</ol>
`,
homework:[
 {t:"Describe five people", d:"Pick five people you know and describe each in one precise word from this set instead of a sentence. If none fits, that tells you which word you still need."},
 {t:"Sort by tone", d:"Split the fourteen into admiring, neutral and critical. Using a pejorative by accident is the expensive mistake here."},
 {t:"The near-misses", d:"Write one sentence each for diffident vs indifferent and punctilious vs pedantic. These are the two pairs people get wrong."},
 {t:"Read a profile", d:"Read a long profile piece in a newspaper or magazine and mark every character adjective. Note which are doing real work and which are filler."}
],
quiz:[
 {t:"mc", q:"<b>Laconic</b> means…", a:["using very few words","speaking slowly","speaking harshly","speaking formally"], c:0, why:"From Laconia — the Spartans, famous for one-word replies."},
 {t:"mc", q:"<b>Diffident</b> means…", a:["modest, lacking confidence","not caring","disagreeing","different in outlook"], c:0, why:"Not to be confused with indifferent — a diffident person may care deeply."},
 {t:"mc", q:"Which is always an insult?", a:["obsequious","punctilious","circumspect","phlegmatic"], c:0, why:"<b>Obsequious</b> is fawning. Punctilious is broadly neutral."},
 {t:"mc", q:"<b>Phlegmatic</b> describes someone who is…", a:["calm and unemotional","sickly","slow-witted","talkative"], c:0, why:"One of the four classical humours — steady and unruffled."},
 {t:"mc", q:"<b>Magnanimous</b> is most often used about someone who has…", a:["won","lost","apologised","resigned"], c:0, why:"Magnanimous in victory — generosity toward the defeated is the classic use."},
 {t:"mc", q:"An <b>intransigent</b> negotiator…", a:["refuses to compromise","is dishonest","is inexperienced","is unpredictable"], c:0, why:"Immovable, whatever is offered."},
 {t:"mc", q:"<b>Truculent</b> means…", a:["aggressively defiant","exhausted","boastful","secretive"], c:0, why:"Spoiling for an argument."},
 {t:"mc", q:"What separates <b>punctilious</b> from <b>pedantic</b>?", a:["punctilious is about correct form and is neutral; pedantic is about trivia and is critical","they are synonyms","punctilious is stronger","pedantic is more formal"], c:0, why:"The difference is tone and whether the detail actually matters."},
 {t:"type", q:"Write the word meaning <b>shrewd, quick to see advantage</b>.", ans:["astute"], why:"<b>Astute</b> — practical sharpness rather than book intelligence."},
 {t:"type", q:"Write the word meaning <b>cautious, weighing consequences before acting</b>.", ans:["circumspect"], why:"<b>Circumspect</b> — literally 'looking around' before moving."}
]
};

EN_LESSONS[4] = {
title:"Business & Professional",
mins:20, goal:"The vocabulary of contracts, risk and money — used precisely rather than as jargon.",
body:`
<h3>The fourteen</h3>
<table>
<tr><th>Word</th><th>Means</th><th>Where it lives</th></tr>
<tr><td><b>remit</b></td><td>the scope of your responsibility</td><td>"outside my remit"</td></tr>
<tr><td><b>mandate</b></td><td>authority to act</td><td>"a clear mandate"</td></tr>
<tr><td><b>material</b></td><td>significant enough to matter</td><td>"a material change"</td></tr>
<tr><td><b>contingency</b></td><td>a provision for what might happen</td><td>budgets, plans</td></tr>
<tr><td><b>due diligence</b></td><td>proper investigation before committing</td><td>deals</td></tr>
<tr><td><b>indemnify</b></td><td>to shield from loss or liability</td><td>contracts</td></tr>
<tr><td><b>fiduciary</b></td><td>holding a duty of loyalty over another's assets</td><td>trusts, boards</td></tr>
<tr><td><b>in arrears</b></td><td>behind on payment, or paid after the period</td><td>rent, invoices</td></tr>
<tr><td><b>pro rata</b></td><td>in proportion</td><td>fees, shares</td></tr>
<tr><td><b>accrue</b></td><td>to build up over time</td><td>interest, leave</td></tr>
<tr><td><b>attrition</b></td><td>gradual natural loss of staff or customers</td><td>headcount</td></tr>
<tr><td><b>escalate</b></td><td>to refer upward for resolution</td><td>support, disputes</td></tr>
<tr><td><b>stakeholder</b></td><td>anyone with an interest in the outcome</td><td>projects</td></tr>
<tr><td><b>leverage</b></td><td>to use as a lever for advantage</td><td>strategy</td></tr>
</table>

<h3>The two that carry legal weight</h3>
<div class="box red"><b>material</b>In contracts and accounting, "material" is not a vague intensifier — it means significant enough to change a decision. A <i>material change</i> to terms may trigger rights that a minor change does not.</div>
<div class="box red"><b>fiduciary</b>A fiduciary duty is the highest duty of loyalty the law recognises. Using the word loosely about ordinary business relationships is a real error.</div>

<h3>In arrears — two senses worth separating</h3>
<ul>
<li><b>Behind on payments</b> — "the account is in arrears."</li>
<li><b>Paid after the period it covers</b> — "rent is paid in arrears" is neutral and normal, not a complaint.</li>
</ul>

<h3>A note on jargon</h3>
<p>Half these words are precise; half get used as noise. <b>Leverage</b> means using something as a lever — if you can substitute "use", use "use". <b>Stakeholder</b> is genuinely useful when the group is wider than "customer". The test is always whether the plain word does the same work.</p>
`,
homework:[
 {t:"Audit your own jargon", d:"Look at your last five work messages. Circle every business word. For each, ask whether a plain word would do the same job — replace the ones where it would."},
 {t:"Use the precise five", d:"Deliberately use remit, material, contingency, accrue and attrition correctly this week. These five are precise rather than decorative."},
 {t:"Read a real contract", d:"Open any contract you have and find indemnify, material and in arrears. Read the clauses around them — seeing them in situ fixes the meaning."},
 {t:"Two senses of arrears", d:"Write one sentence for each sense of 'in arrears'. Confusing a normal payment schedule with a default is an expensive mistake."}
],
quiz:[
 {t:"mc", q:"<b>Outside my remit</b> means…", a:["outside my area of responsibility","outside my budget","outside my working hours","outside my expertise"], c:0, why:"Remit is the defined scope of authority, not skill or budget."},
 {t:"mc", q:"In a contract, <b>material</b> means…", a:["significant enough to matter","physical","documented","expensive"], c:0, why:"A material change is one large enough to affect a decision — it can trigger legal rights."},
 {t:"mc", q:"<b>Rent is paid in arrears</b> means…", a:["paid after the period it covers","paid late","paid in instalments","paid in advance"], c:0, why:"A normal arrangement, not a complaint. The other sense — being behind on payments — is a different use."},
 {t:"mc", q:"<b>Indemnify</b> means…", a:["to protect against loss or liability","to compensate for damage already done","to insure a property","to identify a party"], c:0, why:"An indemnity clause shifts liability to the other party."},
 {t:"mc", q:"<b>Attrition</b> in a headcount context means…", a:["gradual natural loss of staff","redundancies","poor performance","recruitment freezes"], c:0, why:"Reducing headcount by attrition means letting it shrink through normal departures."},
 {t:"mc", q:"A <b>fiduciary</b> duty is…", a:["the highest duty of loyalty over another's assets","a duty to pay on time","a duty of confidentiality","a contractual warranty"], c:0, why:"It is a specific legal standard and shouldn't be used loosely."},
 {t:"mc", q:"<b>Accrue</b> means…", a:["to build up over time","to pay off","to calculate","to distribute"], c:0, why:"Interest and annual leave both accrue."},
 {t:"mc", q:"<b>Pro rata</b> means…", a:["in proportion","in advance","approximately","per person"], c:0, why:"Latin — charged in proportion to the share used or time elapsed."},
 {t:"type", q:"Write the phrase meaning <b>thorough investigation before committing to a deal</b>.", ans:["due diligence"], why:"<b>Due diligence</b> — the checking you're expected to do before signing."},
 {t:"type", q:"Write the word meaning <b>a provision set aside for something that might happen</b>.", ans:["contingency"], why:"<b>Contingency</b> — a buffer for the unexpected, in a budget or a plan."}
]
};

EN_LESSONS[5] = {
title:"Commonly Confused",
mins:20, goal:"Twelve pairs that quietly cost credibility in writing that gets read closely.",
body:`
<h3>The distinctions worth keeping</h3>
<table>
<tr><th>Pair</th><th>Rule</th><th>Example</th></tr>
<tr><td>affect / effect</td><td>affect acts, effect results</td><td>It affected me. The effect was clear.</td></tr>
<tr><td>imply / infer</td><td>speaker implies, listener infers</td><td>He implied it; I inferred it.</td></tr>
<tr><td>fewer / less</td><td>countable / uncountable</td><td>Fewer people, less water.</td></tr>
<tr><td>discreet / discrete</td><td>tactful / separate</td><td>Be discreet. Three discrete stages.</td></tr>
<tr><td>principal / principle</td><td>chief / a rule</td><td>The principal reason. A matter of principle.</td></tr>
<tr><td>flout / flaunt</td><td>defy / display</td><td>Flout rules, flaunt wealth.</td></tr>
<tr><td>mitigate / militate</td><td>lessen / work against</td><td>Mitigate risk. Militate against success.</td></tr>
<tr><td>proscribe / prescribe</td><td>forbid / recommend</td><td>Opposites, one letter apart.</td></tr>
<tr><td>comprise / compose</td><td>the whole comprises the parts</td><td>The set comprises six items.</td></tr>
<tr><td>disinterested / uninterested</td><td>impartial / bored</td><td>A disinterested judge.</td></tr>
<tr><td>nonplussed</td><td>bewildered, not unbothered</td><td>She was nonplussed by the question.</td></tr>
<tr><td>enormity</td><td>extreme wickedness, not size</td><td>The enormity of the crime.</td></tr>
</table>

<h3>The three that trip careful writers</h3>
<div class="box red"><b>comprise</b>The whole <b>comprises</b> the parts. "Is comprised of" is the construction to avoid. Either <i>the set comprises six items</i> or <i>the set is composed of six items</i>.</div>
<div class="box red"><b>effect as a verb</b>It exists, and it means to bring about. <i>To effect change</i> = to make it happen. <i>To affect change</i> = to influence a change already underway. Both are correct English but mean different things.</div>
<div class="box"><b>begs the question</b>Strictly: assumes what it sets out to prove. Loosely: raises the question. The loose sense has all but won, but in writing about logic the strict sense still matters.</div>

<h3>Where to hold the line</h3>
<p>Some of these have shifted so far that insisting on the older sense is itself a failure to communicate — <b>decimate</b> and <b>literally</b> are effectively lost. Others still carry real cost: <b>affect/effect</b>, <b>principal/principle</b> and <b>discreet/discrete</b> in a document look like carelessness.</p>
<p>The practical position: know the distinction, use the precise sense where the writing will be read closely, and don't correct people socially.</p>
`,
homework:[
 {t:"Write the pairs out", d:"Write one sentence for both halves of six pairs, from memory. Production is what fixes these — recognition is not enough."},
 {t:"Find one in your own writing", d:"Search old documents for 'is comprised of' and 'impacted'. Rewrite each. You will likely find several."},
 {t:"Decide your line", d:"Go through the twelve and mark which you will insist on and which you have conceded to usage. Having decided in advance stops you dithering mid-sentence."},
 {t:"Effect as a verb", d:"Write three sentences using effect as a verb — to effect change, to effect a settlement, to effect repairs. It is the use most people never make."}
],
quiz:[
 {t:"mc", q:"Which is correct?", a:["The set comprises six items","The set is comprised of six items","The set comprises of six items","Six items comprise into a set"], c:0, why:"The whole <b>comprises</b> the parts. 'Is comprised of' is the construction to avoid."},
 {t:"mc", q:"<b>Disinterested</b> means…", a:["impartial, having no stake","bored","uninformed","hostile"], c:0, why:"A disinterested judge is unbiased, not uninterested."},
 {t:"mc", q:"The speaker ___ ; the listener ___ .", a:["implies / infers","infers / implies","implies / implies","infers / infers"], c:0, why:"Two ends of the same act: one puts it in, the other takes it out."},
 {t:"mc", q:"<b>To effect change</b> means…", a:["to bring change about","to influence a change already underway","to resist change","to notice change"], c:0, why:"Effect as a verb means to cause. <b>Affect</b> means to influence."},
 {t:"mc", q:"Which is right?", a:["Fewer people, less water","Less people, fewer water","Fewer people, fewer water","Less people, less water"], c:0, why:"Fewer for countables, less for quantities you measure rather than count."},
 {t:"mc", q:"<b>Flout</b> means…", a:["to defy openly","to display showily","to hesitate","to praise"], c:0, why:"You flout a rule and flaunt your wealth. They are constantly swapped."},
 {t:"mc", q:"<b>Nonplussed</b> properly means…", a:["bewildered, at a loss","unbothered, calm","annoyed","pleasantly surprised"], c:0, why:"The American reversal to mean 'unfazed' has made the word genuinely ambiguous — often best avoided."},
 {t:"mc", q:"<b>Proscribe</b> means…", a:["to forbid","to recommend","to write down","to describe"], c:0, why:"Proscribe forbids; <b>prescribe</b> recommends. One letter, opposite meanings."},
 {t:"type", q:"Write the word meaning <b>separate and individually distinct</b> (not the tactful one).", ans:["discrete"], why:"<b>Discrete</b> = separate. <b>Discreet</b> = tactful."},
 {t:"type", q:"Write the word meaning <b>to work against</b> (not the one meaning to lessen).", ans:["militate"], why:"<b>Militate against.</b> <b>Mitigate</b> means to reduce severity."}
]
};

EN_LESSONS[6] = {
title:"Latin & French",
mins:20, goal:"Fourteen borrowed phrases, said correctly and used sparingly.",
body:`
<h3>Latin</h3>
<table>
<tr><th>Phrase</th><th>Say it</th><th>Means</th></tr>
<tr><td><b>de facto</b> / <b>de jure</b></td><td>day FAK-toh / day JOOR-ay</td><td>in practice / by law</td></tr>
<tr><td><b>prima facie</b></td><td>PRY-mə FAY-shee</td><td>enough on first look to proceed</td></tr>
<tr><td><b>ipso facto</b></td><td>IP-soh FAK-toh</td><td>by that very fact</td></tr>
<tr><td><b>sine qua non</b></td><td>sin-ay kwah NON</td><td>the indispensable condition</td></tr>
<tr><td><b>quid pro quo</b></td><td>kwid proh KWOH</td><td>this for that</td></tr>
<tr><td><b>ad nauseam</b></td><td>ad NAW-zee-am</td><td>to a tedious degree</td></tr>
<tr><td><b>bona fide</b></td><td>BOH-nə fyde</td><td>genuine, in good faith</td></tr>
<tr><td><b>modus operandi</b></td><td>MOH-dəs op-ə-RAN-dee</td><td>a characteristic method</td></tr>
</table>

<h3>French</h3>
<table>
<tr><th>Phrase</th><th>Say it</th><th>Means</th></tr>
<tr><td><b>carte blanche</b></td><td>kart BLONSH</td><td>complete freedom to act</td></tr>
<tr><td><b>fait accompli</b></td><td>fayt ə-kom-PLEE</td><td>already done, too late to argue</td></tr>
<tr><td><b>raison d'être</b></td><td>ray-zon DET-rə</td><td>the reason a thing exists</td></tr>
<tr><td><b>tour de force</b></td><td>toor də FORSS</td><td>a masterful performance</td></tr>
<tr><td><b>volte-face</b></td><td>volt FASS</td><td>a complete reversal</td></tr>
<tr><td><b>coup de grâce</b></td><td>koo də GRAHSS</td><td>the finishing blow</td></tr>
</table>

<div class="box green"><b>Your French is already paying off</b>Every French phrase here is ordinary French. <b>Carte blanche</b> is a blank card. <b>Raison d'être</b> is a reason for being. <b>Coup de grâce</b> is a blow of mercy. Once your French gets going these stop being memorised strings and become sentences you can read.</div>

<h3>The pronunciation traps</h3>
<ul>
<li><b>coup de grâce</b> — the final S <i>is</i> pronounced: koo-də-GRAHSS. Saying "koo də GRAH" accidentally means "blow of fat".</li>
<li><b>prima facie</b> — three syllables at the end: FAY-shee, not "fah-kee".</li>
<li><b>sine qua non</b> — SIN-ay, not "sign".</li>
<li><b>ad nauseam</b> — spelled -eam, not -eum.</li>
</ul>

<div class="box red"><b>Use sparingly</b>One well-placed Latin phrase sharpens a paragraph. Three make it insufferable. The test: would a plain English word do the same work? If yes, use the plain word.</div>
`,
homework:[
 {t:"Say them out loud", d:"Read all fourteen aloud twice. The Latin especially — most people have only ever read these, and the first time you say one in a meeting is the wrong time to discover you can't."},
 {t:"Use two, well", d:"Use exactly two of these in real writing this week. Two, not six. The restraint is the skill."},
 {t:"Translate the French literally", d:"Write the literal meaning of each French phrase. Carte blanche = blank card, and so on. This ties directly into your French course."},
 {t:"Find the plain alternative", d:"For each phrase, write the plain English that would do the same job. Where the plain version is just as good, that's a phrase to leave alone."}
],
quiz:[
 {t:"mc", q:"<b>De facto</b> means…", a:["in practice, whether or not by right","by law","in theory","by agreement"], c:0, why:"Its opposite is <b>de jure</b> — by law."},
 {t:"mc", q:"<b>Sine qua non</b> means…", a:["an absolutely essential condition","a formal exception","an unwritten rule","an outdated custom"], c:0, why:"Literally 'without which, not' — the thing the whole depends on."},
 {t:"mc", q:"How is the final word of <b>coup de grâce</b> pronounced?", a:["GRAHSS — the S is sounded","GRAH — silent S","GRAYS","GRASSY"], c:0, why:"Dropping the S turns grâce into gras — 'blow of fat'."},
 {t:"mc", q:"<b>Fait accompli</b> means…", a:["a thing already done, too late to contest","a formal agreement","a completed payment","a stated fact"], c:0, why:"Presented as a fait accompli — the decision was taken before you were asked."},
 {t:"mc", q:"<b>Prima facie</b> means…", a:["on first appearance, enough to proceed","proven beyond doubt","in the first instance of a court","at face value only, and therefore false"], c:0, why:"A prima facie case is strong enough to go forward, not yet proven."},
 {t:"mc", q:"<b>Volte-face</b> means…", a:["a complete reversal of position","a confrontation","a disguise","a rapid decision"], c:0, why:"French — literally to turn the face around."},
 {t:"mc", q:"<b>Bona fide</b> means…", a:["genuine, in good faith","legally binding","well known","paid in full"], c:0, why:"A bona fide offer is a sincere one."},
 {t:"mc", q:"<b>Raison d'être</b> means…", a:["the reason a thing exists","a reasonable explanation","a stated ambition","a founding document"], c:0, why:"Literally 'reason for being' — its whole purpose."},
 {t:"type", q:"Write the Latin phrase meaning <b>this for that</b> — something given for something received.", ans:["quid pro quo"], why:"<b>Quid pro quo.</b>"},
 {t:"type", q:"Write the French phrase meaning <b>complete freedom to act</b>.", ans:["carte blanche"], why:"<b>Carte blanche</b> — literally a blank card."}
]
};

EN_LESSONS[7] = {
title:"Vivid Verbs",
mins:20, goal:"Fourteen verbs that carry an image, replacing weak verb-plus-adverb constructions.",
body:`
<h3>Why verbs beat adverbs</h3>
<p>"Weaken gradually from below" is a phrase. <b>Undermine</b> is a word — and it carries the picture of digging beneath a wall. Strong verbs do the work that adjectives and adverbs are usually brought in to patch.</p>

<h3>The fourteen</h3>
<table>
<tr><th>Verb</th><th>Means</th><th>The image</th></tr>
<tr><td><b>galvanise</b></td><td>shock into action</td><td>an electric jolt</td></tr>
<tr><td><b>obfuscate</b></td><td>deliberately make unclear</td><td>fog</td></tr>
<tr><td><b>truncate</b></td><td>cut short</td><td>a lopped trunk</td></tr>
<tr><td><b>supplant</b></td><td>replace, often by force</td><td>uprooting and planting over</td></tr>
<tr><td><b>capitulate</b></td><td>surrender on terms</td><td>a negotiated white flag</td></tr>
<tr><td><b>proliferate</b></td><td>multiply rapidly</td><td>uncontrolled growth</td></tr>
<tr><td><b>undermine</b></td><td>weaken gradually from below</td><td>tunnelling under a wall</td></tr>
<tr><td><b>circumvent</b></td><td>find a way around</td><td>going around, not through</td></tr>
<tr><td><b>precipitate</b></td><td>cause to happen suddenly</td><td>a sudden fall</td></tr>
<tr><td><b>consolidate</b></td><td>combine into a stronger whole</td><td>packing loose things solid</td></tr>
<tr><td><b>mitigate</b></td><td>make less severe</td><td>softening a blow</td></tr>
<tr><td><b>delineate</b></td><td>mark out precisely</td><td>drawing the line</td></tr>
<tr><td><b>vacillate</b></td><td>waver between options</td><td>swinging back and forth</td></tr>
<tr><td><b>exacerbate</b></td><td>make worse</td><td>rubbing a sore</td></tr>
</table>

<h3>Two worth separating</h3>
<div class="box red"><b>mitigate vs exacerbate</b>They are opposites and they get swapped under pressure. <b>Mitigate</b> reduces; <b>exacerbate</b> worsens. And neither is <b>militate</b>, which means to work against.</div>
<div class="box"><b>precipitate has two lives</b>As a verb — to cause suddenly. As an adjective — rash, done in haste. <i>A precipitate decision precipitated the crisis.</i></div>

<h3>Replacements</h3>
<table>
<tr><th>Instead of</th><th>Use</th></tr>
<tr><td>made everyone suddenly get moving</td><td>galvanised</td></tr>
<tr><td>made the numbers hard to follow on purpose</td><td>obfuscated the numbers</td></tr>
<tr><td>slowly weakened people's trust</td><td>undermined trust</td></tr>
<tr><td>found a way around the rule</td><td>circumvented the rule</td></tr>
<tr><td>couldn't make up his mind for weeks</td><td>vacillated for weeks</td></tr>
<tr><td>made a bad situation worse</td><td>exacerbated it</td></tr>
</table>
`,
homework:[
 {t:"Replace six phrases", d:"Find six places in your recent writing where you used a weak verb plus an adverb or a whole clause. Replace each with one verb from this set."},
 {t:"Mitigate vs exacerbate", d:"Write three sentence pairs using both. Under pressure these two get swapped, and the swap reverses your meaning entirely."},
 {t:"Both senses of precipitate", d:"Write one sentence using it as a verb and one as an adjective. Most people only know the verb."},
 {t:"Read for verbs", d:"Take a page of good non-fiction and underline every verb. Notice how much of the writing's force sits in verb choice rather than in adjectives."}
],
quiz:[
 {t:"mc", q:"<b>Undermine</b> carries which image?", a:["tunnelling beneath a wall to weaken it","cutting something in half","covering something over","pulling something down from above"], c:0, why:"From siege warfare — digging under the foundations. That's why it means gradual weakening from below."},
 {t:"mc", q:"<b>Obfuscate</b> means…", a:["deliberately make unclear","summarise badly","refuse to answer","overcomplicate by accident"], c:0, why:"The deliberateness is the point — the report obfuscates the losses."},
 {t:"mc", q:"<b>Mitigate</b> means…", a:["to make less severe","to make worse","to work against","to prove wrong"], c:0, why:"Its opposite is exacerbate; the similar-sounding <b>militate</b> means to work against."},
 {t:"mc", q:"<b>Supplant</b> is stronger than 'replace' because it implies…", a:["displacement, often by force","a temporary change","an improvement","a legal process"], c:0, why:"Uprooting and planting over — the predecessor is pushed out."},
 {t:"mc", q:"<b>Precipitate</b> as an adjective means…", a:["rash, done in haste","sudden and welcome","heavy, like rainfall","carefully planned"], c:0, why:"A precipitate decision is a hasty one. As a verb it means to cause suddenly."},
 {t:"mc", q:"<b>Vacillate</b> means…", a:["to waver between options","to move quickly","to argue both sides","to delay deliberately"], c:0, why:"Swinging back and forth without settling."},
 {t:"mc", q:"<b>Circumvent</b> means…", a:["to find a way around","to break through","to prevent entirely","to surround"], c:0, why:"Around, not through — circumventing a restriction leaves it intact."},
 {t:"mc", q:"<b>Galvanise</b> comes from…", a:["electricity — a jolt into action","cavalry — a charge","metalwork — hardening","medicine — a stimulant"], c:0, why:"Galvanic current, which makes muscle twitch — hence shocking a group into motion."},
 {t:"type", q:"Write the verb meaning <b>to make a bad situation worse</b>.", ans:["exacerbate"], why:"<b>Exacerbate</b> — the opposite of mitigate."},
 {t:"type", q:"Write the verb meaning <b>to mark out or describe precisely</b>.", ans:["delineate"], why:"<b>Delineate</b> — from 'line', so literally to draw the lines."}
]
};
