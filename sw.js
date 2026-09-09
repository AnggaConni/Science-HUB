const CACHE_NAME = 'psl-cache-v1';

// Daftar file awal yang wajib didownload pertama kali
const URLS_TO_CACHE = [
  './',
  './manifest.json',
  // Masukkan nama file HTML kamu di bawah ini (misal jika namanya index.html):
  './index.html' 
];

// 1. Proses Install: Menyimpan file inti ke dalam Cache (Memori Browser)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting(); // Langsung aktif tanpa menunggu browser ditutup
});

// 2. Proses Activate: Membersihkan cache versi lama jika ada update
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Proses Fetch: Strategi Cache First, fall back to Network
// Termasuk menyimpan CDN luar (Font, Tailwind, Leaflet) otomatis saat pertama kali diakses
self.addEventListener('fetch', (event) => {
  // Abaikan request dari ekstensi chrome atau yang bukan GET
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Jika file sudah ada di memori offline, langsung pakai itu (Super Cepat!)
      if (cachedResponse) {
        // Ambil versi terbarunya di latar belakang untuk akses berikutnya (Stale-While-Revalidate)
        fetch(event.request).then((networkResponse) => {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }).catch(() => {}); // Abaikan error jika sedang offline
        
        return cachedResponse;
      }

      // Jika belum ada di memori, ambil dari internet, lalu simpan ke memori
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
