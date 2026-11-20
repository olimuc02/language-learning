/* Offline cache so the course works on a plane, on the metro, anywhere. */
const CACHE = "lang-v24";
const FILES = ["./", "./index.html", "./french.js", "./lessons.js", "./polish.js", "./polish_examples.js", "./english.js",
               "./portuguese.js", "./hawaiian.js", "./roadmap.js", "./talk.js", "./sync.js", "./reminders.js", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // never cache the sync backend
  if (e.request.url.indexOf("firestore.googleapis.com") > -1) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});

/* practice reminders, sent by .github/workflows/reminders.yml */
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Time to practice 🌺", {
    body: d.body || "Your 20 minutes are waiting.",
    icon: "icon-192.png", badge: "icon-192.png",
    tag: d.tag || "lt-remind", renotify: true,
    data: { url: d.url || "./" }
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => {
    for (const c of cs) { if (c.url.startsWith(self.registration.scope) && "focus" in c) return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
