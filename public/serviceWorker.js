const cacheName = "dashboard-page";
const itemToCache = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/favicon.ico",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

async function installEventHandler() {
  let cachedVal = await caches.open(cacheName);
  return cachedVal.addAll(itemToCache);
}
// install event
self.addEventListener("install", async (installEvent) => {
  self.skipWaiting(); // Activate new SW immediately
  installEvent.waitUntil(installEventHandler());
});

self.addEventListener("fetch", (fetchEvent) => {
  console.log("url of the req", fetchEvent.request.url);
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return response || fetch(fetchEvent.request);
    })
  );
});
