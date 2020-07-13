/*
 *
 *  SunBible
 *  Copyright 2020 The SunShining All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

const version = "0.1.40";
const cacheName = 'SunBible-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/SunBible/',
        '/SunBible/index.html',
        '/SunBible/BibleStyle',
        '/SunBible/BibleStyle/StudyBibleInStyle.css.css',
        '/SunBible/Photos/',
        '/SunBible/Photos/SNBible.png',

        '/SunBible/BibleScript',
        '/SunBible/BibleScript/SunBibleScript-main.js',
        '/SunBible/BibleScript/jquery-3.4.1.js',
        '/SunBible/BibleScript/MoreHomeScript.js',
        '/SunBible/BibleScript/NEWtestamentBOOKchapters.js',
        '/SunBible/BibleScript/RevOvercomerScript.js',
        '/SunBible/BibleScript/SHOWorHIDEbookCHAPTERS.js',
        '/SunBible/BibleScript/scrollToTop.js',
        '/SunBible/BibleScript/SunBibleMemorization',
        '/SunBible/BibleScript/SunBibleMemorization/SunOnJamesMemoryScript.js',
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});