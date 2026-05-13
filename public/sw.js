const CACHE = 'eloqaura-v1';
const STATIC_ASSETS = [
  '/',
  '/assets/index-Ce06Pv-2.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
    return;
  }

  if (url.pathname === '/' || url.pathname.startsWith('/our-') || url.pathname.startsWith('/programs-') || url.pathname.startsWith('/individual-')) {
    event.respondWith(
      caches.match('/').then((cached) => cached || fetch(request))
    );
    return;
  }

  event.respondWith(
    fetch(request).catch(() => caches.match('/'))
  );
});
