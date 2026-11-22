/* Reminder timer for the language app.
   GitHub's own schedule runs hours late, so this Cloudflare Worker wakes up
   every 5 minutes and asks GitHub to run the "Practice reminders" job right away.
   The job (reminders/send.mjs) decides whether anyone actually gets a notification. */
const REPO = "olimuc02/language-learning";
const WORKFLOW = "reminders.yml";

async function kick(env) {
  const r = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GH_TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "language-reminder-timer",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ ref: "main" }),
  });
  if (r.status !== 204) console.log("GitHub said", r.status, await r.text());
  return r.status;
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(kick(env));
  },
  async fetch() {
    return new Response("Language app reminder timer — runs on its own every 5 minutes.");
  },
};
