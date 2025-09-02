self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('skyrise-cache-v1').then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      try {
        const response = await fetch(event.request);
        if (event.request.method === 'GET' && response && response.status === 200) {
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (e) {
        return cached || Response.error();
      }
    })
  );
});


