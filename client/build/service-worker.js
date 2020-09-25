importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

importScripts("/precache-manifest.20ca6f9f50aaae435f722b1f7be718ea.js");

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

workbox.core.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL("/index.html"),
    {
        blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
    }
);
