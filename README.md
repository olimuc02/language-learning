# French Tutor — Oliver

Everything for the 90-day French course lives here.

## The app

Open **`index.html`** in your browser. That's the whole thing — no server, nothing to install.

Seven tabs:

| Tab | What's in it |
|---|---|
| **Today** | Your current lesson, this week's goal, and the 20-minute breakdown |
| **The Plan** | All 90 days, grouped by phase and week, with goals and how each is measured |
| **Lessons** | Every lesson you've been taught, saved in full, re-readable and printable |
| **Study Guides** | 9 reference sheets — pronunciation, verbs, gender, questions, numbers, false friends, survival phrases, conversation scripts. All printable. |
| **Vocabulary** | 200+ words by situation, with pronunciation, example sentences and memory hooks. Tap to mark known. |
| **Practice** | Flashcards, multiple-choice quiz, speaking drills |
| **Progress** | Streak, word count, can-do checklist, checkpoint scores, backup/export |

**Audio:** tap any blue French text anywhere in the app to hear it spoken by a French voice.
Works offline, no account, no cost — it uses the voices built into macOS. Voice, speed and
auto-play are under **Progress → Audio**. For a more natural voice than the default, go to
*System Settings → Accessibility → Spoken Content → Manage Voices* and download a French
**(Enhanced)** voice, then restart the browser.

**The 20-minute timer** lives in the bottom-right corner of every screen. It chimes at each
block change (warm-up → new words → grammar → out loud → test), logs the session when you
finish, and tracks your total study minutes.

**On your phone:** tap *Put this on my phone* on the Today tab for the install steps.
Once installed it opens full-screen like a real app and works with no signal.
Progress is per-device — use Export/Import in the Progress tab to move it across.

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
| `lessons.js` | All lesson content — body, homework, and test questions. This is the file that grows. |
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

Same structure, in this order: Brazilian Portuguese → Spanish → German.
(Portuguese and Spanish get much faster because French does the heavy lifting —
the three are cousins. German is a fresh start and gets a full 90 days.)
