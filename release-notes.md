:robot: I have created a release *beep* *boop*
---


<details><summary>all-settled: 3.1.5</summary>

## [3.1.5](https://github.com/Xelson/reatom/compare/all-settled-v3.1.4...all-settled-v3.1.5) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>async: 3.17.0</summary>

## [3.17.0](https://github.com/Xelson/reatom/compare/async-v3.16.9...async-v3.17.0) (2025-10-12)


### Features

* **async:** add to cache setWithParams and deleteWithParams [#796](https://github.com/Xelson/reatom/issues/796) ([b53fe98](https://github.com/Xelson/reatom/commit/b53fe98b37e178735240b274336c29de6e3be1c5))
* **async:** reset for resource ([852ba1e](https://github.com/Xelson/reatom/commit/852ba1e3a327ce7114f7c6f4cb13ae233e82a05b))
* **primitives:** add withAssign, deprecate withReducers ([3ac66fc](https://github.com/Xelson/reatom/commit/3ac66fc76fffa4ef05e9782d93c982020188196f))


### Bug Fixes

* **async:** abort message format ([bb10f43](https://github.com/Xelson/reatom/commit/bb10f43892a87f3c4ba3c8878b483304e5f76066))
* **async:** add AsyncStatusesAbortedSettle ([bd03669](https://github.com/Xelson/reatom/commit/bd03669bfa1814e1ce4cd28387c8de70a5d0b4d7))
* **async:** add AsyncStatusesFirstAborted and AsyncStatusesAbortedPending ([f653bb2](https://github.com/Xelson/reatom/commit/f653bb2cd2a07eef9c062aa9477de91b06716e69))
* **async:** cache cause handling ([be96aa1](https://github.com/Xelson/reatom/commit/be96aa1c64f5596163537bd5c8524f8cb9674490))
* **async:** change type of dataAtom in withDataAtom operator without initState ([#785](https://github.com/Xelson/reatom/issues/785)) ([ecf44a6](https://github.com/Xelson/reatom/commit/ecf44a6039e3217cb2d45c465564a67bd21f095c))
* **async:** cleanup garbage timeouts ([1b85d07](https://github.com/Xelson/reatom/commit/1b85d0746febbd557fb061f70898fc4fafac15b2))
* **async:** exports ([14c81ee](https://github.com/Xelson/reatom/commit/14c81ee94c049dd79862499ab8212692b6d8648f))
* **async:** first-in-win pending ([15c6d75](https://github.com/Xelson/reatom/commit/15c6d75d57d8d25a623181e38ac4812bf1cd3d24))
* **async:** ignore abort in resource if a subscribers exists ([67bfdad](https://github.com/Xelson/reatom/commit/67bfdad05ddc7852bb781f811a39107296662154))
* **async:** invalidation for resource cache ([8de89a3](https://github.com/Xelson/reatom/commit/8de89a382ec47de005b74a0ca211877befce9250))
* **async:** reatomResource recursion ([6d45161](https://github.com/Xelson/reatom/commit/6d45161bfd271f9b75332da4d1eda9fa8a00adab))
* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **async:** retry concurrency ([6a43188](https://github.com/Xelson/reatom/commit/6a4318899354267d7b37b378fcf8a912cf6c7292))
* **async:** status AsyncStatusesAbortedPending [#985](https://github.com/Xelson/reatom/issues/985) ([85e60ef](https://github.com/Xelson/reatom/commit/85e60efcd8e64df6476ee5ad13d15454307bd439))
* **async:** use setTimeout with toJSON ([8c2ed7b](https://github.com/Xelson/reatom/commit/8c2ed7b2f5f52da6fbc1993b1253043928961f1d))
* **async:** withAbort strategy first-in-win ([#898](https://github.com/Xelson/reatom/issues/898)) ([0875cbb](https://github.com/Xelson/reatom/commit/0875cbb79d64551d09051bbc6e39c41ef4b4af85))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* **effects:** concurrent abort [#1003](https://github.com/Xelson/reatom/issues/1003) ([469b0d4](https://github.com/Xelson/reatom/commit/469b0d44193b09953721db9072bc75e29b42a4c8))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** createMemStorage reactivity ([96c2e46](https://github.com/Xelson/reatom/commit/96c2e461487349a0ee63450af7cdaaf11289b690))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>core: 3.11.0</summary>

## [3.11.0](https://github.com/Xelson/reatom/compare/core-v3.10.2...core-v3.11.0) (2025-10-12)


### Features

* **core:** add batch method ([2e082b6](https://github.com/Xelson/reatom/commit/2e082b6296d933ca24046f60ad31b11098027af2))
* **core:** add restrictMultipleContexts option and warning ([99e0e3c](https://github.com/Xelson/reatom/commit/99e0e3c723a529effc43f0e2a4908806064d30af))
* **core:** extra log for init update ([d26d615](https://github.com/Xelson/reatom/commit/d26d615cc12df427162b23ada77ccff92f58f93b))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** complex connection logic ([f8f3e25](https://github.com/Xelson/reatom/commit/f8f3e25324f55fdc01a214d7d3b783ce77f6f68e))
* **core:** disconnect of the last version of pubs [#996](https://github.com/Xelson/reatom/issues/996) ([52b6593](https://github.com/Xelson/reatom/commit/52b6593d0485f825110524dcbeeb401d3f9309d4))
* **core:** isBrowser test ([60c7e8f](https://github.com/Xelson/reatom/commit/60c7e8fc2fe346960cc2b5d71db1f7cb0d3312c1))
* **core:** mem leak for recursion ([e84e7f6](https://github.com/Xelson/reatom/commit/e84e7f634f37e93ac88d8eea0a13f0e727e5fd72))
* **core:** more accurate pubs handling ([b94dc8f](https://github.com/Xelson/reatom/commit/b94dc8f6e16b1105560bda2572f87cdd1da5c36b))
* **core:** remove extra computation ([6e3d86d](https://github.com/Xelson/reatom/commit/6e3d86dc9d8de9dd78a9c10ce4cb3a899e407093))
* **core:** rename initState to computed in atom overload ([#822](https://github.com/Xelson/reatom/issues/822)) ([b96bf36](https://github.com/Xelson/reatom/commit/b96bf364bbb2c851513d20e70bbb60d29267a2ef))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* **docs:** fixed links to Reatom handbook ([#855](https://github.com/Xelson/reatom/issues/855)) ([c9e6a56](https://github.com/Xelson/reatom/commit/c9e6a56201c9a496664cd9409fe0fa5dff67606e))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>core-v1: 3.1.10</summary>

## [3.1.10](https://github.com/Xelson/reatom/compare/core-v1-v3.1.9...core-v1-v3.1.10) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>core-v2: 3.1.5</summary>

## [3.1.5](https://github.com/Xelson/reatom/compare/core-v2-v3.1.4...core-v2-v3.1.5) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>effects: 3.12.0</summary>

## [3.12.0](https://github.com/Xelson/reatom/compare/effects-v3.11.3...effects-v3.12.0) (2025-10-12)


### Features

* **effects:** add optional logging for the take [#987](https://github.com/Xelson/reatom/issues/987) ([c57b83a](https://github.com/Xelson/reatom/commit/c57b83a15d704ac715562cb2b143d6d908c9af41))
* **effects:** add reaction API ([4c9d589](https://github.com/Xelson/reatom/commit/4c9d5892f733e04e575937133eca3ec51424759f))
* **effects:** concurrent strategies ([426aedc](https://github.com/Xelson/reatom/commit/426aedcefb1b22bda21433a3dd04cb235d49af9d))
* **effects:** explicit spawn action ([578186b](https://github.com/Xelson/reatom/commit/578186b544723ed64ff1294d558d5162d463d4b9))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* **effects:** abort message format ([41c8b77](https://github.com/Xelson/reatom/commit/41c8b770a10e265ef9cbc24e953fd5f728ff1996))
* **effects:** allow to use "concurrent" with CtxSpy ([4da1ab0](https://github.com/Xelson/reatom/commit/4da1ab04ecbd1de66d783c2bad2da6671981905a))
* **effects:** concurrent abort [#1003](https://github.com/Xelson/reatom/issues/1003) ([469b0d4](https://github.com/Xelson/reatom/commit/469b0d44193b09953721db9072bc75e29b42a4c8))
* **effects:** concurrent ctx types ([799485f](https://github.com/Xelson/reatom/commit/799485fcf4aa9096b504cc52426cec74424e0515))
* **effects:** concurrent outdated abort handling ([23f177e](https://github.com/Xelson/reatom/commit/23f177e804546a8d43530a4c0dc764c162737513))
* **effects:** concurrent recursion ([0ced206](https://github.com/Xelson/reatom/commit/0ced206e450de0830c138c055da00cad99d0b851))
* **effects:** missed abort... ([66d2afd](https://github.com/Xelson/reatom/commit/66d2afd9bb6cfc1ababdffb7b547b7cee3e9425b))
* **effects:** small refactoring ([0bc0f0b](https://github.com/Xelson/reatom/commit/0bc0f0b2cf2a1b6593019a2f8ef175f15bc81284))
* **effects:** unable to specify CtxSpy for concurrent ([#981](https://github.com/Xelson/reatom/issues/981)) ([01af2b6](https://github.com/Xelson/reatom/commit/01af2b615b4c4c3f9ba231764c2630acfde66fa5))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>eslint-plugin: 3.9.0</summary>

## [3.9.0](https://github.com/Xelson/reatom/compare/eslint-plugin-v3.8.0...eslint-plugin-v3.9.0) (2025-10-12)


### Features

* **eslint-plugin:** complete unit-naming-rule ([#523](https://github.com/Xelson/reatom/issues/523)) ([#920](https://github.com/Xelson/reatom/issues/920)) ([590ebbf](https://github.com/Xelson/reatom/commit/590ebbf4fe14c649304b77b7815766779c19a078))
* **eslint-plugin:** schedule-import-rule ([#930](https://github.com/Xelson/reatom/issues/930)) ([89d63d0](https://github.com/Xelson/reatom/commit/89d63d06dd4018ef6aeed8db6daf6928f3ffd24a))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* **eslint-plugin:** false-negative for `name` as prop and invalid derivation for objects inside a named factory ([#1021](https://github.com/Xelson/reatom/issues/1021)) ([6b15f13](https://github.com/Xelson/reatom/commit/6b15f131682d88373e6a0f9f1bb75af60a989d8a))
* **eslint-plugin:** fix eslint build [#1027](https://github.com/Xelson/reatom/issues/1027) ([#1030](https://github.com/Xelson/reatom/issues/1030)) ([8dd2669](https://github.com/Xelson/reatom/commit/8dd266971ed1c81938eda91fe4f7b8bf5cc10762))
* **eslint-plugin:** typeError in reatom/unit-naming-rule ([#968](https://github.com/Xelson/reatom/issues/968)) ([8392593](https://github.com/Xelson/reatom/commit/8392593d6caab3136acbe1e77cb28129630d41e4))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>form: 3.6.0</summary>

## [3.6.0](https://github.com/Xelson/reatom/compare/form-v3.5.0...form-v3.6.0) (2025-10-12)


### Features

* **form:** add centralized fields initialization, add support for array fields, add `withField` ([#1038](https://github.com/Xelson/reatom/issues/1038)) ([3da17df](https://github.com/Xelson/reatom/commit/3da17df7c91c5ab8a5b17bd5a2cadd4792df340a))
* **form:** add support for validation.trigger to reatomFieldSet (v3) ([#1130](https://github.com/Xelson/reatom/issues/1130)) ([3041bd4](https://github.com/Xelson/reatom/commit/3041bd4119f8f8dc1998a145b18084f62481e680))
* **form:** make forms and fieldsets as atoms ([54ff92c](https://github.com/Xelson/reatom/commit/54ff92ce41bf152e9c6bbfb609ed5fb550fc252a))
* **form:** support cross-errors from schema (v3) ([#1140](https://github.com/Xelson/reatom/issues/1140)) ([486793a](https://github.com/Xelson/reatom/commit/486793a246ef8bc09ad0f8623ff9c1da5ff51022))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** fieldsList with empty deps ([245d44e](https://github.com/Xelson/reatom/commit/245d44eef65a48b19f54db28a8fe8e8db56057f4))
* **form:** invalid test hierarchy ([6178c0d](https://github.com/Xelson/reatom/commit/6178c0d401c4868ac80b4a704b49f167e90e6a73))
* **form:** invalid trigger state after schema validation ([93d5131](https://github.com/Xelson/reatom/commit/93d51310fd444b0ea21f924ecf4b24d6a2622828))
* **form:** overlaping of errors from different sources ([4a12081](https://github.com/Xelson/reatom/commit/4a120817fd4067486edeee24c9c5ae00bf909666))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **form:** triple submit!!! ([15b5c2d](https://github.com/Xelson/reatom/commit/15b5c2de2b559a2e41f498aabd467b8c5798bbde))
* **form:** typo ([3d602f2](https://github.com/Xelson/reatom/commit/3d602f23f73a23fbdf41fcb27d0a64d7bed64fd2))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>form-web: 3.2.3</summary>

## [3.2.3](https://github.com/Xelson/reatom/compare/form-web-v3.2.2...form-web-v3.2.3) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>hooks: 3.7.0</summary>

## [3.7.0](https://github.com/Xelson/reatom/compare/hooks-v3.6.1...hooks-v3.7.0) (2025-10-12)


### Features

* **hooks:** onConnect abortable schedule ([bffd735](https://github.com/Xelson/reatom/commit/bffd7351eaa9d4025a4edc7f31fcfd5510811d9a))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **hooks:** abort message format ([bd0d248](https://github.com/Xelson/reatom/commit/bd0d24830ae97ff7aefacd1208f9a4eb807e08bd))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>jsx: 3.19.0</summary>

## [3.19.0](https://github.com/Xelson/reatom/compare/jsx-v3.18.2...jsx-v3.19.0) (2025-10-12)


### Features

* **jsx:** add automatic input type def for a model ([e906142](https://github.com/Xelson/reatom/commit/e90614230ded105812ef9e06cdb3af833852cd33))
* **jsx:** add Bind component ([ea4617e](https://github.com/Xelson/reatom/commit/ea4617e3d9f8bd680b1fc8b1ef2d28eb00ea0cb6))
* **jsx:** add FC type ([2d3e1b3](https://github.com/Xelson/reatom/commit/2d3e1b3a3efef815e9ba1ed677e7b0a6edcd66f0))
* **jsx:** add MouseEventHandler type ([4c9ea78](https://github.com/Xelson/reatom/commit/4c9ea783c83ac6c425d4215f5372d3e4abda5b3c))
* **jsx:** add ref cleanup callback ([73111a0](https://github.com/Xelson/reatom/commit/73111a0e290ed698eeed0d35e5a9e5bb8eda95c7))
* **jsx:** add stylesheetContainer option ([dcf0ed9](https://github.com/Xelson/reatom/commit/dcf0ed9263afebaf1a2bc9a9a67155039e4b94d2))
* **jsx:** class name normalization helper ([#942](https://github.com/Xelson/reatom/issues/942)) ([2803165](https://github.com/Xelson/reatom/commit/2803165ccf21100c3bd37b371d680481474874f1))
* **jsx:** handle falsy like React ([#861](https://github.com/Xelson/reatom/issues/861)) ([ad52a74](https://github.com/Xelson/reatom/commit/ad52a74b8104301b702d503f050b31754c2816d4))
* **jsx:** huge refactor, add css support ([8e0019e](https://github.com/Xelson/reatom/commit/8e0019e17299eba58d897eda18affb56c5de8b71))
* **jsx:** style property helper ([#1011](https://github.com/Xelson/reatom/issues/1011)) ([2fe6f85](https://github.com/Xelson/reatom/commit/2fe6f850b781c1f75120fb1623b1cdb68ebbaf70))
* **jsx:** support array children ([c555206](https://github.com/Xelson/reatom/commit/c555206b4349494912cc278b5157d9b167cc54a0))
* **jsx:** support reatomLinkedList ([0e027e8](https://github.com/Xelson/reatom/commit/0e027e8317e10a59b9f65b0ec1070e3a5637aeca))
* **jsx:** use component name in class name ([5eb91bb](https://github.com/Xelson/reatom/commit/5eb91bbf02e0e11ac49a47c0b36254c26786a96f))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **jsx:** batch elements creation ([56e3eae](https://github.com/Xelson/reatom/commit/56e3eaed08db253471ec50ee567e8398b87892ae))
* **jsx:** better ref unmount hook ([#906](https://github.com/Xelson/reatom/issues/906)) ([cbcc564](https://github.com/Xelson/reatom/commit/cbcc564cad4e1084c5953d92dd02d15ac1a0ee31))
* **jsx:** bool attribute ([0e1ca0f](https://github.com/Xelson/reatom/commit/0e1ca0f08e464b4bfd040450b71f8a1ee9aa91d8))
* **jsx:** class name generator ([f61f1c2](https://github.com/Xelson/reatom/commit/f61f1c2bbce907c1d00dff3d579838e6c500df98))
* **jsx:** do not restrictMultipleContexts ([c981346](https://github.com/Xelson/reatom/commit/c98134642d8853d86bee1d8f313abe2ed4b06bb2))
* **jsx:** fix replace css property ([#908](https://github.com/Xelson/reatom/issues/908)) ([15e2dc7](https://github.com/Xelson/reatom/commit/15e2dc79cc412fb9cb0e1887334a6a18e3fd9ccf))
* **jsx:** fragment better support ([5c984cd](https://github.com/Xelson/reatom/commit/5c984cde6a514ff2b36f25d94c3be04797bb6285))
* **jsx:** fragment for LL ([4bb3529](https://github.com/Xelson/reatom/commit/4bb35293d01344b7f5dad9b3d09a93b1a594e9e0))
* **jsx:** fragments for LL ([32f387f](https://github.com/Xelson/reatom/commit/32f387f2215465770daa59dd5ed0acd9cc103856))
* **jsx:** mount fragment as child ([#782](https://github.com/Xelson/reatom/issues/782)) ([33a0fda](https://github.com/Xelson/reatom/commit/33a0fda91bd1ed5a384d8214baa08f0b295861f2))
* **jsx:** remove wrong capture types ([7cd9984](https://github.com/Xelson/reatom/commit/7cd99848e22eb6d307fc4e6ee04cc6cab68585c2))
* **jsx:** render a factory returning an atom ([#874](https://github.com/Xelson/reatom/issues/874)) ([c6d8ac9](https://github.com/Xelson/reatom/commit/c6d8ac975dc16b6b1cb4c58cafb03a44c381d16e))
* **jsx:** render Atom&lt;SVGElement&gt; ([#869](https://github.com/Xelson/reatom/issues/869)) ([3db6ce8](https://github.com/Xelson/reatom/commit/3db6ce87dd0af2395f127561a7b098a7f64f34c0))
* **jsx:** run browser tests ([#1070](https://github.com/Xelson/reatom/issues/1070)) ([179cea3](https://github.com/Xelson/reatom/commit/179cea37fa958f33c434e8bb9ac72396e4709ef9))
* **jsx:** stylesheetContainer types ([2e92e98](https://github.com/Xelson/reatom/commit/2e92e981e32480762d2446b3d3c53834a329c075))
* **jsx:** types ([f2dc64b](https://github.com/Xelson/reatom/commit/f2dc64b04dcc8393cdcf45390ad352e97477a522))
* **jsx:** unsubscribe when removing a parent element ([#919](https://github.com/Xelson/reatom/issues/919)) ([ec71d33](https://github.com/Xelson/reatom/commit/ec71d337be35ed2e9fd0bf6da6b13317238636e3))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>lens: 3.13.0</summary>

## [3.13.0](https://github.com/Xelson/reatom/compare/lens-v3.12.0...lens-v3.13.0) (2025-10-12)


### Features

* **form:** add centralized fields initialization, add support for array fields, add `withField` ([#1038](https://github.com/Xelson/reatom/issues/1038)) ([3da17df](https://github.com/Xelson/reatom/commit/3da17df7c91c5ab8a5b17bd5a2cadd4792df340a))
* **lens:** allow to call select multiple times ([6ea0223](https://github.com/Xelson/reatom/commit/6ea022382ace846f5bb15abdf41bc35783764555))
* **lens:** support linked list in parseAtoms ([534d745](https://github.com/Xelson/reatom/commit/534d74583af3890fe9ac18baf08b11c25dd1f957))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **lens:** better matched expression type ([#914](https://github.com/Xelson/reatom/issues/914)) ([2ea51cd](https://github.com/Xelson/reatom/commit/2ea51cd509760fa8ecb6530dc51c602a93e08a13))
* **lens:** do not perform actions in parseAtoms ([cff48d0](https://github.com/Xelson/reatom/commit/cff48d060ae2a6a0afab4612353bac1926f39c21))
* **lens:** match ctx instead of cause in select ([3f1fd8e](https://github.com/Xelson/reatom/commit/3f1fd8e21d457cc9f78d2a71ef9f8caa585fcf99))
* **lens:** migrate to vitest, fix parseAtom type ([#1048](https://github.com/Xelson/reatom/issues/1048)) ([b00054a](https://github.com/Xelson/reatom/commit/b00054a54906c94c032b70e717f7e572a4b62bb7))
* **lens:** parseAtoms types ([50bbb2c](https://github.com/Xelson/reatom/commit/50bbb2cdfff0867105135f0810b46959bc000dd4))
* **lens:** parseAtoms types ([e284d32](https://github.com/Xelson/reatom/commit/e284d32158caf7233ca36670c345ed4626fec1d9))
* **lens:** reactive match ([#973](https://github.com/Xelson/reatom/issues/973)) ([659b78d](https://github.com/Xelson/reatom/commit/659b78dbe650a2e6747e8f1918210054cf369940))
* **lens:** select equal callback ([ce87fbf](https://github.com/Xelson/reatom/commit/ce87fbfd0e7ef953e6c5156645c0aac77b20a952))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>logger: 3.9.0</summary>

## [3.9.0](https://github.com/Xelson/reatom/compare/logger-v3.8.4...logger-v3.9.0) (2025-10-12)


### Features

* **logger:** add experimental_reatomInspector ([f1de3db](https://github.com/Xelson/reatom/commit/f1de3db5eafb1822d974e43325b73f1f606591b5))
* **logger:** use discoveryjs ([eef7808](https://github.com/Xelson/reatom/commit/eef7808cff6e36f16dfd97396e95f230f6dc4bda))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **logger:** cause infinity loop ([a8af2b8](https://github.com/Xelson/reatom/commit/a8af2b824e4772e64eb6c85695eba494856e52cf))
* **logger:** discoveryjs bundle ([0200114](https://github.com/Xelson/reatom/commit/020011447a3f379a182f4b9dbb4dc754b46a4a85))
* **logger:** remove devtools ([613c2dc](https://github.com/Xelson/reatom/commit/613c2dcb8eb894ad49a7de71d852ed9f86ee6834))
* **logger:** wrap nullish atom name ([#878](https://github.com/Xelson/reatom/issues/878)) ([65c90ed](https://github.com/Xelson/reatom/commit/65c90ed75c88d737a32c1e459d127980df1e4161))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-cookie-baker: 3.1.6</summary>

## [3.1.6](https://github.com/Xelson/reatom/compare/npm-cookie-baker-v3.1.5...npm-cookie-baker-v3.1.6) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-history: 3.1.9</summary>

## [3.1.9](https://github.com/Xelson/reatom/compare/npm-history-v3.1.8...npm-history-v3.1.9) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-lit: 3.1.4</summary>

## [3.1.4](https://github.com/Xelson/reatom/compare/npm-lit-v3.1.3...npm-lit-v3.1.4) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-react: 3.11.0</summary>

## [3.11.0](https://github.com/Xelson/reatom/compare/npm-react-v3.10.6...npm-react-v3.11.0) (2025-10-12)


### Features

* **npm-react:** add getComponentDebugName export ([e13ea3b](https://github.com/Xelson/reatom/commit/e13ea3bab108e60d4575a0054e7355a182f26553))
* **npm-react:** add support for generic components ([#926](https://github.com/Xelson/reatom/issues/926)) ([8901e76](https://github.com/Xelson/reatom/commit/8901e76e479aed4f3b021536f822d1ef22d6739d))
* **npm-react:** add suspense support for reatomComponent ([50075bd](https://github.com/Xelson/reatom/commit/50075bd38604e378a7200d12abb6efb77c71f525))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-react:** abort message format ([f671738](https://github.com/Xelson/reatom/commit/f671738a4d6848d4ff405f933fa9bb5f1b7d8b14))
* **npm-react:** add withAbortableSchedule to reatomComponent ([4aadfb5](https://github.com/Xelson/reatom/commit/4aadfb5c5e48193d5b3b1cddb0c148141ea8c7df))
* **npm-react:** concurrent react ([ebb4e85](https://github.com/Xelson/reatom/commit/ebb4e852a72346093cfb4a92abaf840268ae1767))
* **npm-react:** getComponentDebugName internals ([4c22ee5](https://github.com/Xelson/reatom/commit/4c22ee57e0f3c67487fa08f5831b4d85f1a2ddc1))
* **npm-react:** name should contain Component word ([94e1367](https://github.com/Xelson/reatom/commit/94e1367d454cb7000115ba679dc2f424ec863a2f))
* **npm-react:** reatomComponent hmr ([43abda7](https://github.com/Xelson/reatom/commit/43abda79f34526fb3329be96c4bb80ec64cf2881))
* **npm-react:** remove console.log ([#927](https://github.com/Xelson/reatom/issues/927)) ([be53c6c](https://github.com/Xelson/reatom/commit/be53c6c92200f35ff2611ab84099a8459aeeee37))
* **npm-react:** support react19 debug name ([65914e4](https://github.com/Xelson/reatom/commit/65914e4ac3cd4b75b3d22d3d6829b1931f7bd034))
* **npm-react:** use named function in reatomComponent ([13d4be3](https://github.com/Xelson/reatom/commit/13d4be3d7a5627c961f431408db5eaa8be420707))
* **npm-react:** webpack bug ([ee4b9cc](https://github.com/Xelson/reatom/commit/ee4b9cc5f4a54622a62974b18cc19ff71ee021dc))
* **npm-react:** wrong bundle ([7ac1d74](https://github.com/Xelson/reatom/commit/7ac1d749425cf7d33890a1e9ff036b4553693a94))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-solid-js: 3.6.3</summary>

## [3.6.3](https://github.com/Xelson/reatom/compare/npm-solid-js-v3.6.2...npm-solid-js-v3.6.3) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-svelte: 3.1.5</summary>

## [3.1.5](https://github.com/Xelson/reatom/compare/npm-svelte-v3.1.4...npm-svelte-v3.1.5) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-vue: 3.6.2</summary>

## [3.6.2](https://github.com/Xelson/reatom/compare/npm-vue-v3.6.1...npm-vue-v3.6.2) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>npm-zod: 3.12.0</summary>

## [3.12.0](https://github.com/Xelson/reatom/compare/npm-zod-v3.11.0...npm-zod-v3.12.0) (2025-10-12)


### Features

* **npm-zod:** add vitest, add support for catches, brands, pipelines, effects and etc  ([#1051](https://github.com/Xelson/reatom/issues/1051)) ([a990907](https://github.com/Xelson/reatom/commit/a990907495f9ea0eae7ca8377e26d306d69ad8e8))
* **npm-zod:** first release ([c664b12](https://github.com/Xelson/reatom/commit/c664b123f7f28d93f530644eb476feb8d85ff3a9))
* **npm-zod:** handle discriminatedUnion ([881f0e3](https://github.com/Xelson/reatom/commit/881f0e328a7101c8faa4f2adb2239e6552745061))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **npm-zod:** deps bundling ([557a570](https://github.com/Xelson/reatom/commit/557a5700fa13603221d14a563b4e9c7334f9c35e))
* **npm-zod:** types for ZodDiscriminatedUnion ([3c73f8f](https://github.com/Xelson/reatom/commit/3c73f8feed1dd4345027a1d91032ad85d87c674e))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>persist: 3.5.0</summary>

## [3.5.0](https://github.com/Xelson/reatom/compare/persist-v3.4.2...persist-v3.5.0) (2025-10-12)


### Features

* **persist:** add __persistRecordAtom ([89d6e6f](https://github.com/Xelson/reatom/commit/89d6e6f98587c45bc5c77f241298ffd16f340489))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** computed handling ([6d747cb](https://github.com/Xelson/reatom/commit/6d747cb07a3f857876abdb39afa91e8d9a36f4f0))
* **persist:** createMemStorage reactivity ([96c2e46](https://github.com/Xelson/reatom/commit/96c2e461487349a0ee63450af7cdaaf11289b690))
* **persist:** do not accept an action ([f6b3028](https://github.com/Xelson/reatom/commit/f6b3028982bec514158ce85474f116627ada3ab2))
* **persist:** prevent extra computed calls ([65de325](https://github.com/Xelson/reatom/commit/65de32501fa22841747069f6056f0d37c43b4ec4))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
* **persist:** rm extra cache for transactions ([5efcd57](https://github.com/Xelson/reatom/commit/5efcd5746e9e208e46b0b6b6692b823d950bc1b6))
* **persist:** snapshotAtom init state [#885](https://github.com/Xelson/reatom/issues/885) ([209613f](https://github.com/Xelson/reatom/commit/209613f425ee06e5cd81ebddb84b25accb1c5861))
</details>

<details><summary>persist-web-storage: 3.5.0</summary>

## [3.5.0](https://github.com/Xelson/reatom/compare/persist-web-storage-v3.4.6...persist-web-storage-v3.5.0) (2025-10-12)


### Features

* **persist-web-storage:** add withCookie ([#830](https://github.com/Xelson/reatom/issues/830)) ([25a865e](https://github.com/Xelson/reatom/commit/25a865e58ca67ea230a5001a973132d3f76fc207))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* **devtools:** build with vite ([#1062](https://github.com/Xelson/reatom/issues/1062)) ([cc3a99d](https://github.com/Xelson/reatom/commit/cc3a99ded95499b731fd497aae3a2c8dc8701a14))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist-web-storage:** availability of BroadcastChannel ([199d69a](https://github.com/Xelson/reatom/commit/199d69a13a3b2b0eabc22bb5ffaaa8e025f40041))
* **persist-web-storage:** fix cookie availability check ([#836](https://github.com/Xelson/reatom/issues/836)) ([8da6fe3](https://github.com/Xelson/reatom/commit/8da6fe364ff61403f4e6dd6239eb7923520d5143))
* **persist-web-storage:** missing export reatomPersistIndexedDb ([#876](https://github.com/Xelson/reatom/issues/876)) ([e007b7f](https://github.com/Xelson/reatom/commit/e007b7f11136b358e3f6452ecd9b3f7ffb73d48d))
* **persist-web-storage:** types bundling ([971aed4](https://github.com/Xelson/reatom/commit/971aed424c778e9fe82da8dbd71e5a6bf779ec1c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>primitives: 3.12.0</summary>

## [3.12.0](https://github.com/Xelson/reatom/compare/primitives-v3.11.0...primitives-v3.12.0) (2025-10-12)


### Features

* **form:** add centralized fields initialization, add support for array fields, add `withField` ([#1038](https://github.com/Xelson/reatom/issues/1038)) ([3da17df](https://github.com/Xelson/reatom/commit/3da17df7c91c5ab8a5b17bd5a2cadd4792df340a))
* **primitives:** add `push`, `pop`, `shift`, `unshift`, `slice` for `reatomArray` ([#1034](https://github.com/Xelson/reatom/issues/1034)) ([47fc530](https://github.com/Xelson/reatom/commit/47fc530990449fdeffcc605ca6c07e8d18bce4b9))
* **primitives:** add `sizeAtom` to `reatomMap` ([#1035](https://github.com/Xelson/reatom/issues/1035)) ([2b416b3](https://github.com/Xelson/reatom/commit/2b416b3d0d498ab353993d2d7803dd683001add3))
* **primitives:** add getOrCreate to reatomMap ([a6f9d48](https://github.com/Xelson/reatom/commit/a6f9d4843e7e983d1a37b0c3a85214642a4d0925))
* **primitives:** add map atom to LinkedListAtom ([fc58024](https://github.com/Xelson/reatom/commit/fc580241e3867040a4513690a6b976d39f3ac6c0))
* **primitives:** add new set methods and tests for reatomSet ([#866](https://github.com/Xelson/reatom/issues/866)) ([a8ae20f](https://github.com/Xelson/reatom/commit/a8ae20f9abe8adbde4e4c44247578a00b227e5e3))
* **primitives:** add reatomLinkedList ([0987d83](https://github.com/Xelson/reatom/commit/0987d83df0aec36996ce16a8890012773358c7ac))
* **primitives:** add sizeAtom for reatomSet ([0e552d7](https://github.com/Xelson/reatom/commit/0e552d7e5be1c050c308a23940c922eecbb3f368))
* **primitives:** add static `LinkedList` factory for `reatomLinkedList` ([#1055](https://github.com/Xelson/reatom/issues/1055)) ([2634b6f](https://github.com/Xelson/reatom/commit/2634b6f460b735ef5916947274e93a8b655c0aff))
* **primitives:** add withAssign, deprecate withReducers ([3ac66fc](https://github.com/Xelson/reatom/commit/3ac66fc76fffa4ef05e9782d93c982020188196f))
* **primitives:** add withComputed ([055a5a7](https://github.com/Xelson/reatom/commit/055a5a72524a5ce147ebbb1d7cbb4af7c9d88ca3))
* **primitives:** constructor as initializer for primitives ([#1049](https://github.com/Xelson/reatom/issues/1049)) ([5657158](https://github.com/Xelson/reatom/commit/5657158aebbc0f7cbe03caa1cf97bb6df9a1af1f))


### Bug Fixes

* add the 'size' prop to reatomSet ([#892](https://github.com/Xelson/reatom/issues/892)) ([76d9a98](https://github.com/Xelson/reatom/commit/76d9a986e2e897119a3708a117cc849ccd65f234))
* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
* **primitives:** linked list batch ([1fd859c](https://github.com/Xelson/reatom/commit/1fd859c7309e4e398a578a1b278fdded434c026b))
* **primitives:** remove in ll ([e78a049](https://github.com/Xelson/reatom/commit/e78a049faf52e6924f74acc2907d16701517423c))
* **primitives:** swap in ll ([315df22](https://github.com/Xelson/reatom/commit/315df224f9a17203905e7a10f5f0082812415244))
</details>

<details><summary>react-v1: 3.1.8</summary>

## [3.1.8](https://github.com/Xelson/reatom/compare/react-v1-v3.1.7...react-v1-v3.1.8) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>react-v2: 3.1.3</summary>

## [3.1.3](https://github.com/Xelson/reatom/compare/react-v2-v3.1.2...react-v2-v3.1.3) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>testing: 3.4.10</summary>

## [3.4.10](https://github.com/Xelson/reatom/compare/testing-v3.4.9...testing-v3.4.10) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
* **testing:** callSafelySilent ([d80f013](https://github.com/Xelson/reatom/commit/d80f0132542b5dad732228e0c49bf807dfc916ae))
* **testing:** prevent first computed reading of mocked atom [#995](https://github.com/Xelson/reatom/issues/995) ([5231d20](https://github.com/Xelson/reatom/commit/5231d20cbbbc2ffeefb52e574f9f281273e0e8e1))
* **testing:** restrictMultipleContexts ([7abb8db](https://github.com/Xelson/reatom/commit/7abb8dbf470b57c2a7ffc4333add6fab9a0d193a))
</details>

<details><summary>timer: 3.6.3</summary>

## [3.6.3](https://github.com/Xelson/reatom/compare/timer-v3.6.2...timer-v3.6.3) (2025-10-12)


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>undo: 3.5.0</summary>

## [3.5.0](https://github.com/Xelson/reatom/compare/undo-v3.4.2...undo-v3.5.0) (2025-10-12)


### Features

* **undo:** add withPersist option ([f76d0fc](https://github.com/Xelson/reatom/commit/f76d0fc4c7c0fe655de56f79f3c3b5ca874c8640))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
* **undo:** adding initial state in historyAtom ([#828](https://github.com/Xelson/reatom/issues/828)) ([4006e44](https://github.com/Xelson/reatom/commit/4006e44ad408f9daf7680cd65e86a0fc8521eade))
* **undo:** correct shouldUpdate ([f94d5b9](https://github.com/Xelson/reatom/commit/f94d5b9489b0c0d0798eb258941af7dbc9b90a7c))
</details>

<details><summary>url: 3.10.0</summary>

## [3.10.0](https://github.com/Xelson/reatom/compare/url-v3.9.0...url-v3.10.0) (2025-10-12)


### Features

* **url:** add subpath parameter ([#945](https://github.com/Xelson/reatom/issues/945)) ([e9d882d](https://github.com/Xelson/reatom/commit/e9d882d0749b5aa82a4732d3d02fbd8d65254883))
* **url:** path instead of path ([526f9a7](https://github.com/Xelson/reatom/commit/526f9a73d4f5a4b738a6cb049f616ca4ce79fc03))
* **url:** remove umd build ([2516fd4](https://github.com/Xelson/reatom/commit/2516fd4bb932837ebadd4ae88789b8df25eca287))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
* **url:** computed handling ([80bb777](https://github.com/Xelson/reatom/commit/80bb777215842684cefbf0cc5bbbd5bd2ab791e0))
* **url:** searchParamsAtom memoization ([ea1c575](https://github.com/Xelson/reatom/commit/ea1c5750971067786bd046723da7a3b7a657a955))
* **url:** setting reinitialization ([742b303](https://github.com/Xelson/reatom/commit/742b30370ba86bed048ecbd9fddf4c02242cd2fe))
* **url:** some bug ([c824199](https://github.com/Xelson/reatom/commit/c8241998cc36cf60b7786efbca0fd5b4b53a4ae3))
* **url:** subpath ([fcb62d0](https://github.com/Xelson/reatom/commit/fcb62d0fb31adadd8f1d6043d40f5394049048cf))
* **url:** subpath handling ([6f4ad7d](https://github.com/Xelson/reatom/commit/6f4ad7d247fbc788c17c8711a9ddf97c92c87767))
</details>

<details><summary>utils: 3.12.0</summary>

## [3.12.0](https://github.com/Xelson/reatom/compare/utils-v3.11.3...utils-v3.12.0) (2025-10-12)


### Features

* **devtools:** graph view ([95b55f8](https://github.com/Xelson/reatom/commit/95b55f8133c14d68c43707361caa0c5c0174b564))
* **utils:** add setTimeout ([b979284](https://github.com/Xelson/reatom/commit/b9792842c45409da53448272d593a327ab306b0c))
* **utils:** improve toStringKey ([9f9a7e8](https://github.com/Xelson/reatom/commit/9f9a7e8cebd9d6229d3e9a50cdb2a03bd59d1a6b))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
* **utils:** abort message uniqueness ([879777b](https://github.com/Xelson/reatom/commit/879777b643bca8fb1427a44412f3c1f3fb479587))
* **utils:** prettify toStringKey output ([f7f9189](https://github.com/Xelson/reatom/commit/f7f9189f2108165caca2f9d227f7c7054e582ca9))
* **utils:** setTimeout types [#1002](https://github.com/Xelson/reatom/issues/1002) ([3201541](https://github.com/Xelson/reatom/commit/3201541b0df9c90cdfb1dc5eafe1183042804d80))
* **utils:** setTimeout types [#983](https://github.com/Xelson/reatom/issues/983) ([a81e9a3](https://github.com/Xelson/reatom/commit/a81e9a3506315d3ff3d442a8a7b79484b70eeae3))
* **utils:** toStringKey for Symbol.for ([a0a985b](https://github.com/Xelson/reatom/commit/a0a985b9cfcf0c5d6538d55992a4c79150811cd8))
</details>

<details><summary>web: 3.7.0</summary>

## [3.7.0](https://github.com/Xelson/reatom/compare/web-v3.6.0...web-v3.7.0) (2025-10-12)


### Features

* **web:** add online atom ([#940](https://github.com/Xelson/reatom/issues/940)) ([6413696](https://github.com/Xelson/reatom/commit/6413696fc13ae8f10fc6c6a0616b12e8b31c5127))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

<details><summary>devtools: 0.14.0</summary>

## [0.14.0](https://github.com/Xelson/reatom/compare/devtools-v0.13.1...devtools-v0.14.0) (2025-10-12)


### Features

* **devtools:** add ability to edit atoms states ([f22bce8](https://github.com/Xelson/reatom/commit/f22bce8f3a047f09e6e96bbbd22b2a59c13a011d))
* **devtools:** add graph view ([3b5a3d7](https://github.com/Xelson/reatom/commit/3b5a3d71f8e98ea0760399935deae1f93c6fa973))
* **devtools:** add pause checkbox ([968ef72](https://github.com/Xelson/reatom/commit/968ef72c1655af59e5bfadaa2bbd1a73f5fd289d))
* **devtools:** add size limit ([d4045a5](https://github.com/Xelson/reatom/commit/d4045a5bcda25b17ec00f2e298d6534af973419e))
* **devtools:** add visual diff, shadow root, and many more small improvements ([24080cc](https://github.com/Xelson/reatom/commit/24080cc45b9998de20f99aeafe0fac09f7ed68d8))
* **devtools:** connectDevtools returns log function ([ea8194b](https://github.com/Xelson/reatom/commit/ea8194b0d865677357272b9273434be490dce039))
* **devtools:** createDevtools and state logs ([6315923](https://github.com/Xelson/reatom/commit/63159230fa210bd7bba87ca12b1f78930caec1c2))
* **devtools:** exclude filters ([873df31](https://github.com/Xelson/reatom/commit/873df31389050a2f160733a42b87bf31988c78a0))
* **devtools:** filters redesign [#1010](https://github.com/Xelson/reatom/issues/1010) ([0e3c655](https://github.com/Xelson/reatom/commit/0e3c6555f8d71bcbb7bfe9bbcbc3a2f9dcaea356))
* **devtools:** foldable actions and filters ([9442e27](https://github.com/Xelson/reatom/commit/9442e27b73bc6e50919b019d5bf9abca4e7986fb))
* **devtools:** foldable actions and filters ([fc76711](https://github.com/Xelson/reatom/commit/fc76711714f6a8e729712fdb81b9fbf5f844842d))
* **devtools:** graph view ([95b55f8](https://github.com/Xelson/reatom/commit/95b55f8133c14d68c43707361caa0c5c0174b564))
* **devtools:** highlight color selector ([eacdb02](https://github.com/Xelson/reatom/commit/eacdb020f7fbd2b37ebdfe6606ff4d4d6166090f))
* **devtools:** init ([7c38d65](https://github.com/Xelson/reatom/commit/7c38d65ea8b0a76589dec7423c17a63b7822fa9e))
* **devtools:** search box ([6d0fc98](https://github.com/Xelson/reatom/commit/6d0fc98b8c34c3d1b07f647d7a81b9ebb3fc367a))
* **devtools:** stack rendering and UI improvements ([526be58](https://github.com/Xelson/reatom/commit/526be58ba1137741daca142dc00bf86993559af2))
* **devtools:** support separator function ([563ce6e](https://github.com/Xelson/reatom/commit/563ce6effc0f3ccd7dfe925ebab10a846e3df2b9))
* refactor and new features ([a6a06a0](https://github.com/Xelson/reatom/commit/a6a06a010a151df5c1b3ab0fed905618d37893d9))


### Bug Fixes

* **async:** republish package ([557e544](https://github.com/Xelson/reatom/commit/557e544713710dc5a57351d00fd65be7a076e8af))
* **core:** republish package ([f8d5358](https://github.com/Xelson/reatom/commit/f8d535878d702becf31eb227f540d6056a9e3dc3))
* **devtools:** action log ([56e6380](https://github.com/Xelson/reatom/commit/56e6380fb0efa42c18fcfc1cfddccab0f5dd9daf))
* **devtools:** actions handling ([f04397a](https://github.com/Xelson/reatom/commit/f04397accfdffa8f227f291d484be5e64087191d))
* **devtools:** another huge refactoring ([308a70b](https://github.com/Xelson/reatom/commit/308a70bcf5e8c038acfb5c85083a5f1480a85b2a))
* **devtools:** atom creation ([09d720f](https://github.com/Xelson/reatom/commit/09d720fb623a9e89179dd42f1527d9ba23a51534))
* **devtools:** autoscroll after elements removing ([90e25ae](https://github.com/Xelson/reatom/commit/90e25ae9b5bfc02413f9d85168181836eaf160fb))
* **devtools:** build with vite ([#1062](https://github.com/Xelson/reatom/issues/1062)) ([cc3a99d](https://github.com/Xelson/reatom/commit/cc3a99ded95499b731fd497aae3a2c8dc8701a14))
* **devtools:** callback state ([12e2ea2](https://github.com/Xelson/reatom/commit/12e2ea2b1aa01dc1ecf683a8fe3665b9aa2fb9a6))
* **devtools:** cause lines dependencies ([0d46dd0](https://github.com/Xelson/reatom/commit/0d46dd07491bd724900322811eb58c0f2c179bd2))
* **devtools:** defaults ([280beb3](https://github.com/Xelson/reatom/commit/280beb398cb7e0a778a14eea195ce81dc4be9b3d))
* **devtools:** deps ([72dc64f](https://github.com/Xelson/reatom/commit/72dc64fb9e68116bdc0d986bc9d7806c1dcd042e))
* **devtools:** do not restrictMultipleContexts ([f549ef6](https://github.com/Xelson/reatom/commit/f549ef64a7b5bd416214da28b17ff6ee6543ad9b))
* **devtools:** filters enum ([0604a16](https://github.com/Xelson/reatom/commit/0604a166c8cc0905a1c0538606784f3660692878))
* **devtools:** filters highlight ([9968f31](https://github.com/Xelson/reatom/commit/9968f31fdf85154d87858ef39310428dc03340c8))
* **devtools:** filters icons ([d45517b](https://github.com/Xelson/reatom/commit/d45517ba5856bcd6940150e9478447b52b2cf9a2))
* **devtools:** functions in state diff ([e7a7af9](https://github.com/Xelson/reatom/commit/e7a7af909abb1b13098e27e6d945736bbbab89a6))
* **devtools:** functions in state diff ([cd61155](https://github.com/Xelson/reatom/commit/cd611552703e5c1acbd2a121fe30f018b122bbc2))
* **devtools:** graph view filters ([1149751](https://github.com/Xelson/reatom/commit/114975115687f355b96eef35308e2c799050f2c6))
* **devtools:** icons restyle ([116138f](https://github.com/Xelson/reatom/commit/116138f348b9590dcb517aaf27634711545febfb))
* **devtools:** improve filters design ([d9ad7e8](https://github.com/Xelson/reatom/commit/d9ad7e8a8c832702cd6d5df7220704a5ba34db43))
* **devtools:** improve styles and small other fixes ([eea2edb](https://github.com/Xelson/reatom/commit/eea2edb64e1e50dfc73ba950f0bca8ef38fb135e))
* **devtools:** increase lines gap ([dc8407d](https://github.com/Xelson/reatom/commit/dc8407d85c464ec845b5d25fdfdbfaa013a29bc1))
* **devtools:** init state handling, better color, scroll fix ([8cd5de2](https://github.com/Xelson/reatom/commit/8cd5de29e158c4289588a7616935339159dec990))
* **devtools:** lines drawing ([d5a6283](https://github.com/Xelson/reatom/commit/d5a62838ee7861a07c2a3554e37c0fe5b58a416e))
* **devtools:** log URL ([069fe1c](https://github.com/Xelson/reatom/commit/069fe1c85bdd01d9220ab45273c190ca120c2818))
* **devtools:** logs subscription ([78eefeb](https://github.com/Xelson/reatom/commit/78eefeb53f92d46f809d2f12f4af2a871d994dae))
* **devtools:** optimize regexp pattern ([#1050](https://github.com/Xelson/reatom/issues/1050)) ([270fbac](https://github.com/Xelson/reatom/commit/270fbacb1ca5eee5db30acb3b2686429b3a6476a))
* **devtools:** perf optimizations ([042a77c](https://github.com/Xelson/reatom/commit/042a77cc1399bf0abc32489371c1ee2cd7ca5027))
* **devtools:** refactor model ([d596ba3](https://github.com/Xelson/reatom/commit/d596ba3ff1da18669279a5cd14c764eb7d0ec8b4))
* **devtools:** remove log ([24d6146](https://github.com/Xelson/reatom/commit/24d61463a329e343ab467dc20f92539933853a66))
* **devtools:** reset styles on root ([1c36410](https://github.com/Xelson/reatom/commit/1c36410962bcc075927319e6f5e3cffcca591f4c))
* **devtools:** restore missed styles ([4e81a31](https://github.com/Xelson/reatom/commit/4e81a318d7cea0fd01c1d770edd720db4c2c5ace))
* **devtools:** search matching ([eedb14d](https://github.com/Xelson/reatom/commit/eedb14dd1404a60c38aeae5e7a1ca1a5e1f038dd))
* **devtools:** show the amount of loaded logs ([38101dd](https://github.com/Xelson/reatom/commit/38101dd2d9802f12c9042bc8edaca6c235abaa67))
* **devtools:** styles ([e0b9cf8](https://github.com/Xelson/reatom/commit/e0b9cf8f3d781676cd4bed8266896f24ee06b9ca))
* **devtools:** styles and logs improvements ([5e6428a](https://github.com/Xelson/reatom/commit/5e6428a79dfcfd8b07d1ad892b8d4153f651cf7d))
* **devtools:** styles improvements ([92b534e](https://github.com/Xelson/reatom/commit/92b534ea48f1c5d05df6dde4adc92921c9beb489))
* **devtools:** support functions in state diff ([7960a71](https://github.com/Xelson/reatom/commit/7960a71131401133d4dd0d9330f4f70eb4844e31))
* **devtools:** timestamps and sticky scroll ([631d096](https://github.com/Xelson/reatom/commit/631d096a6740acc8ce5958a5ccf8dcb445ef8cdd))
* **devtools:** types declarations ([e98e758](https://github.com/Xelson/reatom/commit/e98e7583cc86b4f7019ccf182843ca12023f5174))
* **devtools:** ui fixes ([494c065](https://github.com/Xelson/reatom/commit/494c0659adc197aa5f17ccd5df2dc51c78436775))
* **devtools:** url handling ([fe7aeba](https://github.com/Xelson/reatom/commit/fe7aebad2e6c4a8525aee5518d4d7fcde19905cf))
* esm module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **form:** republish package ([6f2aa4f](https://github.com/Xelson/reatom/commit/6f2aa4f94e00d571b10619e6b9c1a7bbfb3d4f25))
* **new-package-template:** use mjs in module export ([1011671](https://github.com/Xelson/reatom/commit/10116719dd92d8102352a39e4ed772b8173d8668))
* **npm-svelte:** republish without tag ([93c7f7f](https://github.com/Xelson/reatom/commit/93c7f7f5ec58247b1b3aec854cd83b0a0ecd6a6c))
* **persist:** republish package ([8bf9b6d](https://github.com/Xelson/reatom/commit/8bf9b6d5d5e7c4bb51a5161e9c7cf7036f5938f5))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).