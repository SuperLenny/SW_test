const PRECACHE='precache-v1';
const PRECACHE_URLS=[
	'my.html',
	'my.css'
	];
self.addEventListener('install',event=>{
	event.waitUntil(
		caches.open(PRECACHE)
		.then(cache => cache.addAll(PRECACHE_URLS))
		.then(self.skipWaiting())
	);
});