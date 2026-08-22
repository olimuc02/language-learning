# Progress Log

> Claude reads this at the start of each session. The app tracks day-to-day numbers
> (streak, minutes, scores, homework); this file holds what must survive between chats.

Live: https://olimuc02.github.io/language-learning/

---

## 🇫🇷 French — 90-day beginner course

**Started:** 2026-08-12 · **Current day:** 1 · **Level:** absolute beginner · **20 min/day**

| | |
|---|---|
| Phase | 1 — Ears & Mouth (Days 1–21) |
| Week | 1 — Sounds and hellos |
| Lessons written | Days 1–7 (all of Week 1) |
| Next to write | Day 8 — Être in full |

| Day | Lesson | Test | HW |
|---|---|---|---|
| 1 | The four sounds English doesn't have | 12 q | 4 |
| 2 | Silent letters, and how to answer Ça va ? | 13 q | 4 |
| 3 | Je suis, tu es, il est — saying who you are | 13 q | 4 |
| 4 | Numbers 0 to 20, and how old you are | 13 q | 4 |
| 5 | Le, la, un, une — why every object has a gender | 13 q | 4 |
| 6 | Conversation — a first meeting, start to finish | 14 q | 4 |
| 7 | Review + **Checkpoint 1** | 25 q | 4 |

Pass marks: 80% on a normal day, 75% on a checkpoint. Below that, the day repeats.

**Weak spots:** _nothing yet_
**Checkpoints:** _none taken_

---

## 🇵🇱 Polish — maintenance & expansion

Oliver already speaks Polish. This track is **not** a beginner course — it targets
precision vocabulary, idiom, register, and the grammar fluent speakers still fumble.
9 sets written, 111 words, ~96 questions. Sets are independent; do them in any order.

### Placement test — 2026-08-21

**9/30 on the multiple choice, but that number is misleading.** The profile is a classic
heritage speaker: the spoken language is intact, the written norms and the expanded
register were never taught.

| Section | Score | Read |
|---|---|---|
| Aspekt | 3/5 | Instincts good; the "perfective has no present tense" rule was missing |
| Przypadki / liczebniki | 4/6 | Case system largely intact. Missed męskoosobowe (siedmiu) and na/na |
| **Ortografia** | **0/6** | The gap. Diacritics absent, prescriptive norms unknown |
| Słownictwo (advanced) | 1/6 | Precise/literary register never acquired |
| **Idiomy** | **0/4** | Suggests home/family register rather than media or literary Polish |
| Rejestr | 1/3 | Chose "Witam" — then correctly wrote "Dzień dobry" in the email |
| Produkcja | strong | Communicates fluently and naturally. Aspect task done correctly. |

**Estimated levels:** speaking ~B2/C1 · writing ~A2/B1 · advanced vocabulary ~A2.

**Set order to work through:** 9 (ortografia) → 7 (pułapki) → 2 (idiomy) → 1 (precyzja)
→ 5 (potoczny) → 3 (biznesowy) → 4 (aspekt) → 6 (łączniki) → 8 (literackie).

Recurring written errors to keep drilling: missing ł/ż/ó/ę/ą throughout ·
*wziąść* → wziąć · *w każdym bądź razie* → w każdym razie · *tą* for accusative *tę* ·
*mimo tego* → mimo to · *jest warto* → warto · missing comma before *że* ·
*jak chodzi o* → jeśli chodzi o · doubled *się*.

1. Precyzja — better words than "fajny"
2. Idiomy, które warto mieć w zapasie
3. Polski biznesowy
4. Aspekt w praktyce
5. Potoczny polski
6. Łączniki i spójniki
7. Pułapki i błędy
8. Słownictwo literackie

**Note:** no Polish voice installed on the Mac. Audio will sound wrong until
Zosia or Krzysztof is downloaded (System Settings → Accessibility → Spoken Content).

---

## 🇬🇧 English — vocabulary expansion

Native speaker, so this is precision vocabulary rather than ESL: exact words,
rhetoric, character adjectives, business terms, confusables, and Latin/French borrowings.
7 sets written, 98 words, 74 questions.

1. Precision Words
2. Argument & Rhetoric
3. Describing People
4. Business & Professional
5. Commonly Confused
6. Latin & French
7. Vivid Verbs

---

## Mixed practice

**Practice → 🌍 All languages** pools every word from every unlocked language into one deck
(426 cards: 226 French, 111 Polish, 89 English). Each card is spoken in its own language's
voice, quiz distractors are drawn from the same language as the answer, and marking a word
known writes to that language's own progress. Also reachable from the Today tab.

## Slang — standing instruction

Oliver asked (2026-08-21) that **every** language teach slang, colloquialisms and local
phrases alongside the formal register — not formalities alone. Applies to French,
Brazilian Portuguese and Polish especially.

- 🇫🇷 French: **Argot** study guide added (verlan, fillers, texting, swearing with register warnings)
- 🇵🇱 Polish: Set 5 *Potoczny polski* already covers this; expand as sets are added
- 🇧🇷 Portuguese: **done** — gíria set plus a slang study guide, contractions and né? taught early

## 🇧🇷 Brazilian Portuguese — from zero

Live as of 2026-08-21. Ordered drill sets rather than a 90-day plan, so it can run alongside
French. 119 words, 5 guides, 6 sets, 69 questions. Slang is built in from set 3, not deferred.
Voice: **Luciana** (pt_BR) is installed.

1. Sons do português — the five pronunciation rules (R=H, di/ti→ji/chi, final -o/-e, nasals, lh/nh)
2. O essencial — greetings, courtesy, introductions
3. Gíria brasileira — slang, contractions, né?, saudade
4. Comida e restaurante
5. Na rua — directions, money, emergencies
6. Ser, estar e os verbos

Nasal vowels overlap directly with French (pão / pain), so the two reinforce each other.

## Queued

Spanish and German are in the picker but unbuilt. Oliver picks what he works on — no gating.

---

## How to add material

Content lives in `french.js` + `lessons.js`, `polish.js`, `english.js`.
Each lesson: long `body`, 4 `homework` tasks, 12–14 mixed-type `quiz` questions
(`mc` / `type` / `listen`); 25 on French checkpoint days.
After writing: update this file, commit, push — the phone updates itself.
