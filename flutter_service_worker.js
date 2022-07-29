'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f1951c612b1598c2818a6144f45cc70d",
"index.html": "a7e2949da06b64adeba9d2226b71e30f",
"/": "a7e2949da06b64adeba9d2226b71e30f",
"main.dart.js": "ab8e3279232236acaa8260110bdee34f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "c55bcc0c2a934c7d61272fe677e88e28",
"icons/icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d0b210fac30c90dedd831cafc4d6764",
".git/config": "a38d6076575c72c19e3ae41afb9b94c5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/ed47a68718625136dc6cadcf30831a0b917c91": "d19d2953d2e3929d47db946fdb2b93a4",
".git/objects/0c/92a21e1eb1ed8b4910e7b8a534c73cccf785d3": "2e4e632e17c1fc9436e3416d18c5533a",
".git/objects/57/6ca45d8ca4280fa041ab9f4b1f0b73194bb2de": "bb3687e640dec9aaee9e38e59da5933c",
".git/objects/3b/8b5c0a2bc0013edefbd4beee524eb88e68f242": "08e0f0f6586809254f9b347859b9aed8",
".git/objects/9b/4a17921e43f6a7d639e27d402a1d50890cc835": "1f49e232e4f2fc2436e45e8776976ffc",
".git/objects/6a/f6117665842275a6b71bf2ddcf223fc1dd269e": "146ff44456ae3a0dc421e0f9cea69826",
".git/objects/32/97eab0ec9ca4d1e999336629a0481347e9b68f": "563e6aefa985fe634f88c40fb18300a3",
".git/objects/58/967f46db002a381d3b3bf50d770473b7ec4f55": "6d3b34b1506797fb2b84197deae2257c",
".git/objects/93/57784b9c15fe19f58dd7058bbba7e917796e4f": "3d9ad299594b0ce0137b13d0d7f18f73",
".git/objects/60/e4f4ba89a0ed3b06068f9bf09461b02ac48dac": "bd452ac1861a8b18c660c09b3b450cab",
".git/objects/60/f9dc029f454eb15221f5715c6218993781c97d": "532dbe7b5401b2968a83130d4fc47d59",
".git/objects/d7/ede21962fbfc699b5cf70241a9f9e4145141a5": "55d712f2f021946c8f4af0dcc3ffe6f6",
".git/objects/d0/660480c77113c89dea6adc6cd20f3d7de6b8f5": "01e4890ac3dc4f4a35c35aa5b41bc37a",
".git/objects/b4/ddf5263e471be929d61483eaf3d89e5252d74f": "45df122c94a6860201f51facaad2a809",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c8ee0ff51081b9c285809eba860c3526bcc8aa": "b0d7c507199e70d319406788b11d49ad",
".git/objects/ab/57794fd48206786b29fea1ede3dbc7d46b97cd": "8fd60d34d735320f331753be942e5911",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/ac98decdd3d0bbe49af34062ef29509ddec160": "485fc273d97f7eaa72dbaf9862b412b7",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/e4/139df74044360323a967d1890f742c676786bd": "bce89d4d0c1ec28228d2444b7b8c8cef",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/11/df0874110ef7ce3ecca1bcf81f1937d42197cc": "ae6a898b135232ab8615a0e6286c2a3f",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/73/468ed511f26be1ad0f4b656356de617469a869": "531bb5b8eb820e8c3a873a16e3fc88b3",
".git/objects/1a/4343c0d0fd5d3b87824fce73978757df1189cf": "3a471d0af6932d534e09b7618c8f0cb4",
".git/objects/28/ec391c258ecbf4b233d7b03bae92cefcc98bf1": "f4840d0380f7517a4a7758e4c87eda9b",
".git/objects/8f/5d99bcb0ee26bb2dbfe76d9bec5002eb4b73d0": "103abaa17dddefba1f3f630b475240ba",
".git/objects/8f/d13df38905d19fcfbba9afea6e18e0fa1b1cbc": "75f92734a5b57d97312eccae60a9a966",
".git/objects/19/3e7056c336bde277baed9b35adf3602218bdeb": "5b0168e7392cae8ec96f170e8133f9f1",
".git/objects/2a/6fd08f3f2738d7bbb9b776179b24e0148d3f6b": "9f630116f652935838a532939ad9fa47",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/283d59947f72f984922fbcc148b97c90e3713c": "0bd384dce0a153a5b575157eb3b4ca0b",
".git/objects/62/3c83f6de35cb9233ca940bf99e09cb41458cf5": "a83ffbe71768936e8a2ddbec9a9d093c",
".git/objects/54/cd5bca904cbea8ebaf8577257a7bb3d07e1047": "158d169312ab7e0aab6771833c8eab82",
".git/objects/52/a512191e92fe01b0ed6cb993061b7c1152cbf8": "7f4777a8c90e88d49344176f4b378a44",
".git/objects/0a/0cb60f51d5ff320293349e420977a7c1612415": "1da640584d761fe40e862159964db6f5",
".git/objects/0a/69891585386e3fd54052ac5721c9abd5349659": "dd95d44fc3227bb328a9054fa8ec99e0",
".git/objects/aa/b4c1df1fe17be0afe8c7bc912fd8f65f4669cc": "fdd8e8a6836d7ffe497272ec460cc345",
".git/objects/af/9e9bbdd0c247bf4d00080e8144bfc15865b2bd": "5537bf471c69a7472814892f4f05b903",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/c125e4a70980caef4049099c39348ab6c1fb28": "2075306c16e89d38f0d5a279aa0ffc21",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/e3b93e8e4c81b0e22deee22aecc55a0bc8fc8c": "605b1639449ce3c2a9ecf81d29d3bef5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/5ee6a8b475fd05aef30f82f3aced47b1e9961b": "27972e1de7c063c647d7c86a3c942657",
".git/objects/e1/0501db6224a70908cc4f5d02695815f38d0a13": "c61f490c15e7ee0e354750334d9de67c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/c3bbde87420e41178b57aa8fb9edc1aeaa2818": "29755f173bd8c112a78b328485fe859c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/806c7a5023f558e6129bcf671517dffa7efa7e": "9a3a92f7823f537f0059355e1aeb8948",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e47bd5ea4445d713fb31120d3bc31a8748f20f": "420ae17387139e6a6c485c6bf20e7bc9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/e287d376e5a772eb09a7be6610111f452d5685": "8c2a4d7997aa0b0e0623db11e5b4b03d",
".git/objects/48/1a23fe6978676570009ad4de0f6f16d23e04d1": "1b2df30b38b3ceb98c8303be8c77d901",
".git/objects/4a/ef4a5dacd64dc3160a8bbb3588f319df3bac52": "784800dec5b70c7d5a199a43aadbc0da",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/1d/8286b2c5e6da1441e694658e5f59b07167d7a6": "bccb209e2f162ebed8d221eae6d6b27a",
".git/objects/71/ff27991400c457364c402b6ab72949573f561e": "1aeafdff93faa5c2cc9c19e7629644db",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/3901d1ef2f7152a4d21bd778c32fc0549efb97": "4aa84f24422de34be7d8195c14c47400",
".git/objects/49/349af658f2290195480b86f6da635619bdd758": "70c89d820bffb0483a6765eb75982425",
".git/objects/40/84d13d3b48192eb82dde408b1c8a66d89aba23": "e8a00da8fd4e9aaa7e03dabfd92883e8",
".git/objects/47/3da5a1685031c8107b997c754327bc2b9e4f91": "443d6b7eb64cd2b76658e1a8cad834d3",
".git/objects/47/4500d5e6d4a1cc07563a36ce72305638bfac6d": "3d3ebb37a35704024a73bb89fcb17838",
".git/objects/8b/7e2984df65323dadabed787e62b2a5cf3a96ed": "763f3cdb4085db5eb038c902ce6fbbd9",
".git/objects/8e/1a2a8d79759507e17c822760d8253fc056eee4": "773642d242d6587cca8c589e686abba4",
".git/objects/8e/d5fc54f3a9f7aeb442efcc15389867a900e894": "676934b152a1743e45b9c6a7af3c551e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2d94e677b459cf892b0b0dd3d382748",
".git/logs/refs/heads/main": "aee9071fec04fac703fe950905463f84",
".git/logs/refs/remotes/origin/main": "01bef9bac5e8c0f2ce130f3ed83e02e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b3e3c7b7bc48f720cad763f80e8d8dde",
".git/refs/remotes/origin/main": "b3e3c7b7bc48f720cad763f80e8d8dde",
".git/index": "c587d1d23a624773ce4e7f4c08437fbc",
".git/COMMIT_EDITMSG": "316e4b23d275bce8a86a439d31d576a7",
"assets/me.png": "00cc0eb8316da8a52e70f3d4dc065136",
"assets/telegram_icon.png": "0a37c6c2c5bde53fbc5e2a94d0c401f3",
"assets/me_mobile.png": "e88ab2200445a9f341cf2ef8527af278",
"assets/AssetManifest.json": "795cf08c50da0e113915eab82c572d76",
"assets/linkedin_icon.png": "f09eb147078e70884196578d11271362",
"assets/NOTICES": "0f1e6d0b938d6990b9040e9ef39269c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/insta_icon.png": "7f1ed2cb9f6ee758e66b4c51055dd8a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/me.png": "00cc0eb8316da8a52e70f3d4dc065136",
"assets/assets/telegram_icon.png": "0a37c6c2c5bde53fbc5e2a94d0c401f3",
"assets/assets/me_mobile.png": "e88ab2200445a9f341cf2ef8527af278",
"assets/assets/quotes.json": "054eab6cae00983ae74682eb86a2e165",
"assets/assets/linkedin_icon.png": "f09eb147078e70884196578d11271362",
"assets/assets/background.jpeg": "003652a68244e16eacd628c3158c7190",
"assets/assets/insta_icon.png": "7f1ed2cb9f6ee758e66b4c51055dd8a5",
"assets/assets/files/cv.pdf": "743b9d69fe48c376bb6b2befa4504c65",
"assets/assets/info.json": "dde81afef44b813d4993048a48fd2ecd",
"assets/assets/fb_icon.png": "aed4f22b912fdd313815fa61e517e3f8",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
