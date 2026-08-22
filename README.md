# Language Learning — Oliver

Three language tracks in one app, each with its own progress, words and streak.
Tap the flag in the top-left to switch.

| Track | Mode | What it is |
|---|---|---|
| 🇫🇷 **French** | 90-day course | From zero. Structured plan, phases, checkpoints. |
| 🇧🇷 **Portuguese** | training sets | Brazilian, from zero. Sounds first, slang from set three. |
| 🇵🇱 **Polish** | training sets | You already speak it — precision, idiom, register, and the grammar fluent speakers fumble. |
| 🇬🇧 **English** | training sets | Precision vocabulary, rhetoric, confusables, Latin and French borrowings. |
| 🇪🇸🇩🇪 | not built | Say "start Spanish" or "start German" and the track gets written. |

## The app

**Built phone-first.** The iPhone is the primary device: bottom tab bar, full-screen sheets
with a Done button, and every table reflowed into readable cards. The Mac gets the wider
desktop layout automatically.

Open **`index.html`** in your browser. That's the whole thing — no server, nothing to install.

Seven tabs:

| Tab | What's in it |
|---|---|
| **Today** | Your current lesson, this week's goal, and the 20-minute breakdown |
| **The Plan** | All 90 days, grouped by phase and week, with goals and how each is measured |
| **Lessons** | Every lesson you've been taught, saved in full, re-readable and printable |
| **Study Guides** | 9 reference sheets — pronunciation, verbs, gender, questions, numbers, false friends, survival phrases, conversation scripts. All printable. |
| **Vocabulary** | 200+ words by situation, with pronunciation, example sentences and memory hooks. Tap to mark known. |
| **Practice** | Flashcards, quiz, speaking drills — plus **🌍 All languages**, which shuffles French, Polish and English into one deck, each word spoken in its own voice |
| **Progress** | Streak, word count, can-do checklist, checkpoint scores, backup/export |

**Audio:** tap any blue French text anywhere in the app to hear it spoken by a French voice.
Works offline, no account, no cost — it uses the voices built into macOS. Voice, speed and
auto-play are under **Progress → Audio**. For a more natural voice than the default, go to
*System Settings → Accessibility → Spoken Content → Manage Voices* and download a French
**(Enhanced)** voice, then restart the browser.

**Daily tracking:** *Progress → Your 20 minutes a day* shows today's minutes against the
20-minute goal, your current and best streak, days hit this month, and an 8-week grid.
It counts **across all languages** — 10 minutes of Polish plus 10 of French is a day hit.
The Today tab carries a compact version of the same bar.

**The 20-minute timer starts by itself** the moment you open a lesson — you never set it.
It lives in the bottom-right corner, chimes at each block change (warm-up → new words →
grammar → out loud → test), logs the session when the 20 minutes are up, and tracks your
total study minutes. Tap it to expand and see which block you're in.

**On your phone:** open https://olimuc02.github.io/language-learning/ in Safari,
tap **Share → Add to Home Screen**. It then opens full-screen like a real app and works
with no signal. The layout switches to a bottom tab bar on phones.

**Sync:** the Mac and the iPhone stay identical automatically — lessons, scores, homework,
words, study time. Each device shares a **sync code** (shown in *Progress → Sync across
devices*); enter the Mac's code on the phone once and they're linked. Merging is additive,
so a lesson done on the phone and homework ticked on the Mac both survive. Voice and speed
stay per-device on purpose. Storage is the existing `tasks-oj` Firebase project, collection
`french_progress`.

Progress saves in your browser. **Export a backup from the Progress tab now and then** —
clearing your browser data would otherwise wipe it.

## How to use this

Start any session by opening Claude Code in this folder and saying:

> **"Continue my French course."**

Claude reads `PROGRESS.md`, sees what day you're on, and picks up there.

Other things you can say:
- "Review Day 7" → re-teaches an old lesson from `lessons/`
- "Quiz me on everything so far"
- "Just conversation today" → free practice, no new material
- "I'm lost, go back a step"
- "Where am I at?" → progress summary

## Files

| File | What it is |
|---|---|
| `PLAN-90-DAYS.md` | The full 13-week roadmap, week-by-week goals, how progress is measured |
| `PROGRESS.md` | Running log — what day you're on, quiz scores, mistakes to drill, checkpoint results |
| `french.js` | French plan, vocabulary and study guides |
| `lessons.js` | French lessons — body, homework, test questions |
| `polish.js` | Polish words, guides and training sets |
| `english.js` | English words, guides and training sets |
| `portuguese.js` | Brazilian Portuguese words, guides and training sets |
| `sync.js` | Cross-device sync — the sync code, and the additive merge |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | Make it installable on a phone and usable offline |

## The rules of this course

1. **20 minutes a day.** That's the whole design. Don't do more.
2. **No moving forward until you've got it.** If a quiz goes badly, the next day is a repeat, not a new lesson.
3. **Say everything out loud.** Reading French silently teaches you almost nothing.
4. **Mistakes get corrected every single time**, with the reason why and how a French person would actually say it.
5. **Every lesson has homework.** The lesson teaches; the homework installs. Tick them off in the app.
6. **English fades out on purpose.** Weeks 1–4 mostly English, weeks 5–8 mixed, weeks 9–13 mostly French.
7. **Tests are 12–14 questions** (25 on a checkpoint) and mix multiple choice, listening, and writing it out from memory. Question order and answer order shuffle every attempt, so you cannot pattern-match your way through.

## After French

Portuguese is live. Spanish and German sit in the picker unbuilt — ask and they get written.
(Portuguese and Spanish get much faster because French does the heavy lifting —
the three are cousins. German is a fresh start and gets a full 90 days.)
