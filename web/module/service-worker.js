const timestamp = 1653312332732;
const build = [
  "/_app/start-ff67b3b6.js",
  "/_app/assets/start-dcc79729.css",
  "/_app/pages/__layout.svelte-f2269d39.js",
  "/_app/assets/pages/__layout.svelte-471e83fe.css",
  "/_app/assets/Loading.svelte_svelte_type_style_lang-79ecefa5.css",
  "/_app/error.svelte-2386c539.js",
  "/_app/pages/index.svelte-9064e9bd.js",
  "/_app/pages/agent-service.svelte-a410ac3f.js",
  "/_app/pages/withdrawals.svelte-b3d93a4b.js",
  "/_app/pages/highscores.svelte-415f2e11.js",
  "/_app/pages/alliances.svelte-eb3f7bb6.js",
  "/_app/pages/freetoken.svelte-aa7a8ab3.js",
  "/_app/pages/external/basic-alliances.svelte-cbff5d3b.js",
  "/_app/pages/qr_verso.svelte-0cea02b9.js",
  "/_app/assets/pages/qr_verso.svelte-4ee12c09.css",
  "/_app/pages/settings.svelte-c59e6b32.js",
  "/_app/pages/cashout.svelte-4ff0c580.js",
  "/_app/pages/plugins.svelte-b1c95b42.js",
  "/_app/pages/recover.svelte-43d4dba6.js",
  "/_app/pages/debug.svelte-f0485da2.js",
  "/_app/pages/stats.svelte-e775d18c.js",
  "/_app/pages/help.svelte-f4a51440.js",
  "/_app/pages/logs.svelte-b65c1725.js",
  "/_app/assets/pages/logs.svelte-21c71c7d.css",
  "/_app/pages/qr.svelte-433b74af.js",
  "/_app/assets/pages/qr.svelte-a606be47.css",
  "/_app/chunks/vendor-e78c39f1.js",
  "/_app/assets/vendor-4751242d.css",
  "/_app/chunks/paths-28a87002.js",
  "/_app/chunks/url-09d70f02.js",
  "/_app/chunks/logo-8502b062.js",
  "/_app/chunks/stores-2f0e30ab.js",
  "/_app/chunks/wallet-c826be1b.js",
  "/_app/chunks/account-c0a26acd.js",
  "/_app/chunks/config-af7f3a10.js",
  "/_app/chunks/base-652be6d9.js",
  "/_app/chunks/privateWallet-7a0cfca0.js",
  "/_app/chunks/contracts-69d01f63.js",
  "/_app/chunks/WalletAccess-ec429ef9.js",
  "/_app/chunks/spaceInfo-b394211b.js",
  "/_app/chunks/tokenClaim-d54d7ab7.js",
  "/_app/assets/tokenClaim-9310d53a.css",
  "/_app/chunks/myplanets-2a339ebc.js",
  "/_app/chunks/NavButton-b22b61c0.js",
  "/_app/chunks/PanelButton-b24a8fdb.js",
  "/_app/chunks/Modal-a8884379.js",
  "/_app/chunks/ConnectPanel-c0ecdc11.js",
  "/_app/chunks/myprofile-37a6a38f.js",
  "/_app/chunks/PlayCoin-69d24b1d.js",
  "/_app/chunks/optimisticSpace-8b3fc51e.js",
  "/_app/chunks/MessageFlow-30f15648.js",
  "/_app/chunks/fleets-86e67def.js",
  "/_app/chunks/Blockie-6a051512.js",
  "/_app/assets/Blockie-861a6711.css",
  "/_app/chunks/plugins-94e9a3e2.js",
  "/_app/chunks/planets-78a3d361.js",
  "/_app/chunks/token-c96bed7f.js",
  "/_app/chunks/Help-b968899e.js",
  "/_app/chunks/playersQuery-3a795d59.js",
  "/_app/chunks/subgraph-aa394bde.js",
  "/_app/chunks/Copiable-f9ca3aee.js",
  "/_app/chunks/graphql-582eebcc.js",
  "/_app/chunks/Coord-ca78105f.js",
  "/_app/chunks/EventDetails-d65d00d0.js",
  "/_app/chunks/qrs-ad47a527.js"
];
const URLS_TO_PRE_CACHE = build.concat(["/agent-service/","/alliances/","/cashout/","/charts/","/debug/","/external/basic-alliances/","/freetoken/","/help/","/highscores/","/","/logs/","/plugins/","/qr/","/qr_verso/","/recover/","/settings/","/stats/","/withdrawals/"]).filter((v) => !v.startsWith("/_app/pages/chart.svelte") && !v.startsWith("/_app/pages/charts.svelte")).filter((v) => v != "/chart/" && v != "/charts/");
const CACHE_NAME = "cache-name" + timestamp;
let _logEnabled = true;
function log(...args) {
  if (_logEnabled) {
    console.debug(...args);
  }
}
self.addEventListener("message", function(event) {
  if (event.data && event.data.type === "debug") {
    _logEnabled = event.data.enabled && event.data.level >= 5;
  } else if (event.data === "skipWaiting") {
    log(`skipWaiting received`);
    self.skipWaiting();
  }
});
const pathname = self.location.pathname;
const base = pathname.substr(0, pathname.length - 18);
const urlsToPreCache = URLS_TO_PRE_CACHE.map((v) => base + v);
const regexesOnlineFirst = [];
{
  regexesOnlineFirst.push("localhost");
}
const regexesOnlineOnly = [];
const regexesCacheFirst = [self.location.origin, "https://rsms.me/inter/", "cdn", ".*\\.png$", ".*\\.svg$"];
const regexesCacheOnly = [];
log(`[Service Worker] Origin: ${self.location.origin}`);
self.addEventListener("install", (event) => {
  log("[Service Worker] Install");
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    log(`[Service Worker] Creating cache: ${CACHE_NAME}`);
    return cache.addAll(urlsToPreCache);
  }).then(() => {
    log(`cache fully fetched!`);
  }));
});
self.addEventListener("activate", (event) => {
  log("[Service Worker] Activate");
  event.waitUntil(caches.keys().then((cacheNames) => {
    return Promise.all(cacheNames.map((thisCacheName) => {
      if (thisCacheName !== CACHE_NAME) {
        log(`[Service Worker] Deleting: ${thisCacheName}`);
        return caches.delete(thisCacheName);
      }
    })).then(() => self.clients.claim());
  }));
});
const update = (request, cache) => {
  return fetch(request).then((response) => {
    return caches.open(CACHE_NAME).then((cache2) => {
      if (request.method === "GET" && request.url.startsWith("http")) {
        cache2.put(request, response.clone());
      }
      return response;
    });
  }).catch(() => {
    return cache;
  });
};
const cacheFirst = {
  method: (request, cache) => {
    log(`[Service Worker] Cache first: ${request.url}`);
    const fun = update(request, cache);
    return cache || fun;
  },
  regexes: regexesCacheFirst
};
const cacheOnly = {
  method: (request, cache) => {
    log(`[Service Worker] Cache only: ${request.url}`);
    return cache || update(request, cache);
  },
  regexes: regexesCacheOnly
};
const onlineFirst = {
  method: (request, cache) => {
    log(`[Service Worker] Online first: ${request.url}`);
    return update(request, cache);
  },
  regexes: regexesOnlineFirst
};
const onlineOnly = {
  method: (request) => {
    log(`[Service Worker] Online only: ${request.url}`);
    return fetch(request);
  },
  regexes: regexesOnlineOnly
};
async function getResponse(event) {
  const request = event.request;
  const registration = self.registration;
  if (event.request.mode === "navigate" && event.request.method === "GET" && registration.waiting && (await self.clients.matchAll()).length < 2) {
    log("only one client, skipWaiting as we navigate the page");
    registration.waiting.postMessage("skipWaiting");
    const response2 = new Response("", { headers: { Refresh: "0" } });
    return response2;
  }
  const response = await caches.match(request).then((cache) => {
    const patterns = [onlineFirst, onlineOnly, cacheFirst, cacheOnly];
    for (const pattern of patterns) {
      for (const regex of pattern.regexes) {
        if (RegExp(regex).test(request.url)) {
          return pattern.method(request, cache);
        }
      }
    }
    return onlineFirst.method(request, cache);
  });
  return response;
}
self.addEventListener("fetch", (event) => {
  event.respondWith(getResponse(event));
});
//# sourceMappingURL=service-worker.js.map
