self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  const isStatic = url.pathname.startsWith('/_next/') || url.pathname.startsWith('/public/');

  if (!isStatic) return; // Let HTML/Data requests go to network to avoid stale layout on mobile

  event.respondWith(
    caches.open('skyrise-cache-v1').then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;
      const response = await fetch(req);
      if (req.method === 'GET' && response && response.status === 200) {
        cache.put(req, response.clone());
      }
      return response;
    })
  );
});


