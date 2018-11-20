PMH Studio μBot
================
Official Discord μBot( Version 7.0 ) Github Repository.
--------------------------------------------------------------
[![Discord Server](https://discordapp.com/api/guilds/458629337264947221/widget.png?style=shield)](https://discord.io/PMHStudioBots)
[![AppVeyorCI Status](https://ci.appveyor.com/api/projects/status/h79vw2fwy198c98d/branch/μBot-ver7?svg=true)](https://ci.appveyor.com/project/PMHStudio/discordmubot/branch/μBot-ver7)
[![CircleCI Status](https://img.shields.io/circleci/project/github/PMHStudio/DiscordMuBot.svg)](https://circleci.com/gh/PMHStudio/DiscordMuBot)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e6865679220427c8504e6ae63d1a0ad)](https://www.codacy.com/app/kok4575/DiscordMuBot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PMHStudio/DiscordMuBot&amp;utm_campaign=Badge_Grade)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPMHStudio%2FDiscordMuBot.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FPMHStudio%2FDiscordMuBot?ref=badge_shield)
[![GitHub license](https://img.shields.io/github/license/PMHStudio/DiscordMuBot.svg)](https://github.com/PMHStudio/DiscordMuBot/blob/%CE%BCBot-ver7/LICENSE)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/PMHStudio/DiscordMuBot.svg)
![GitHub (pre-)release](https://img.shields.io/github/release/PMHStudio/DiscordMuBot/all.svg)
![Github All Releases](https://img.shields.io/github/downloads/PMHStudio/DiscordMuBot/total.svg)
[![GitHub forks](https://img.shields.io/github/forks/PMHStudio/DiscordMuBot.svg)](https://github.com/PMHStudio/DiscordMuBot/network)
[![GitHub issues](https://img.shields.io/github/issues/PMHStudio/DiscordMuBot.svg)](https://github.com/PMHStudio/DiscordMuBot/issues)
[![MuBot Language](https://img.shields.io/badge/language-javascript-yellow.svg)](https://www.javascript.com)
[![MuBot Using](https://img.shields.io/badge/using-node.js-green.svg)](https://nodejs.org)
[![MuBot Request](https://img.shields.io/badge/request-discord.js-blue.svg)](https://discord.js.org)

## 주의!
> 베타버전입니다! 더욱 안전한 정식버전을 이용하시는걸 추천드립니다!

- 안녕하세요! PMH Studio의 Studio장! PMH입니다! @PMHStudio
- 이 프로젝트는 [**Discord**](https://discordapp.com)에서 제공하는 [**Discord API**](https://discordapp.com/developers)기반으로 다용도 Bot을 만드는것을 목표로 하는 프로젝트입니다!
- **모든 Projects의 저작권은 특별히 명시되지 않는한 @PMHStudio에게 있습니다.**

## [**Bot Developers' Discord Server!**](https://discord.gg/kEnspqB)
[![Discord Server Invite](https://discordapp.com/api/guilds/458629337264947221/widget.png?style=banner3)](https://discord.io/PMHStudioBots)



### 뮤봇의 작동을 위한 값들입니다! 소스 수정시 참고하세요!
-----------------------------------------------------------
#### 기본요구값 - 뮤봇의 동작을 위하여 **꼭** 필요한 값들입니다 
**muto**
> 디스코드 API에 연결하기 위한 디스코드 에플리케이션 빌트인 봇 토큰입니다
>> https://discordapp.com/developers 에서 발급하실 수 있습니다

**muai**
> Google에서 제작한 Dialogflow에 인공지능 연결을 위한 토큰입니다
>> http://dialogflow.com/ 에서 발급하실 수 있습니다

**prefix, defaultPrefix**
> 프리픽스값과 기본값입니다
>> 프리픽스란, 봇을 호출할때 (프리픽스)(명령어)순으로 호출할때의 프리픽스 값입니다
>> 즉, mu!help에서 mu!는 프리픽스 help는 명령어입니다

#### 저장문서 호출 - 중요한 값을 저장하기위한 저장문서들을 호출합니다
**prefixes**
> 서버에서 커스터마이징한 프리픽스를 저장하기 위한 문서입니다
>> 문서의 경로 기본값은 (/Saved/ServersPrefix.json)입니다

**mute**
> 뮤트코인 사용자의 코인정보를 저장하기 위한 문서입니다
>> 문서의 경로 기본값은 (/Saved/UsersCoin.json)입니다 

#### 모듈호출 - 뮤봇을 동작을 보조하기 위한 모듈을 호출합니다
**API**
> 가장 중요한 모듈로서 디스코드 API에 접속하기 위한 모듈입니다
>> 저희 뮤봇은 API에 접속하기 위하여 Discord.js 모듈을 사용중입니다

**cmds**
> node.js의 파일시스템("fs")입니다.
>> 주로 커멘드 파일(/muc 디렉터리)를  불러오기위한 모듈입니다
>> 그 외에도 뮤트코인 저장문서 호출, 프리픽스 저장문서 호출등을 담당합니다

**apiai**
> Google에서 제작한 Dialogflow를 호출하여 muai값을 받아 ai값으로 넘깁니다
>> Dialogflow를 호출함으로서 인공지능을 사용하여 지능을 가진 메세징이 가능해 집니다
>> 그 외에도 mu!심심해, mu!안녕 등을 담당합니다

#### 명령어 호출 - 뮤봇의 뇌! 명령어를 호출합니다
**jsfile**
> (/muc/) 디렉토리에 존제하는 파일중 .js 확장자를 가진 파일만을 지칭합니다
>> 예시로 /muc/help.js가 있을때 help.js는 jsfile에 속합니다

**filename(s)**
> (/muc/) jsfile들의 이름중 .js를 뺀 이름값입니다
>> 예시로 /muc/help.js가 있을때 help가 filename에 속합니다

#### 클라이먼트 호출 - 뮤봇의 몸! 클라이먼트를 호출합니다
**mu**
> 뮤봇 자기 자신을 지칭하는 값입니다!
>> 당연히 가장 중요하겠죠?

#### 사용자 입력 정보 추출 - 사용자가 입력한 정보를 간추리고 추출합니다
**input**
> 입력값입니다! 이 값은 아무런 과정없이 입력된 그대로를 지칭합니다!

**msgAr**
> input값을 스페이스바(" ")로 나눈 값들입니다!
>> 예를 들어 mu!sayd Test가 input값일때 mu!sayd와 Test는 msgAr에 들어갑니다

**i**
> msgAr중 맨 앞 값을 말합니다
>> 즉, mu!sayd와 Test가 msgAr일때 mu!sayd는 i값 입니다

**pars**
> 이번엔 반대로 msgAr중 맨 앞 값이 아닌 모든 값을 말합니다
>> 즉, mu!sayd와 Test와 테스트와 ㅎㅇ가 msgAr일때 Test, 테스트, ㅎㅇ는 pars에 들어갑니다

**verify**
> 앞서 말한 i값에서 쩌어어 앞에서 말한 prefix를 제외한 값을 말합니다
>> 즉, mu!sayd가 i값일때 prefix인 mu!를 제외하여 sayd라는 값은 verify값입니다
>> 이렇게 하여 프리픽스와 pars를 제외한 명령어 부분을 알아넸네요!

#### 명령어 실행! - 음... 이건 행동이 되겠네요
**cmdFile**
> 앞서 말한 verify값을 가진 명령어를 실행합니다!
>> 정확하게는 cmdFile.run을 사용해서 실행하죠
>>> 물론 mu, input, pars 값들을 같이 보냅니다!

**aiRequest**
> 앞서 말한 verify값을 가지고 Google의 Dialogflow에 보냅니다!
>> 이로서 인공지능을 가지게 되어 input값의 대한 대답을 하게됩니다!

###### 여기까지 뮤봇의 값들을 알아봤습니다. 하지만, 이 글은 요약의 요약을 한 요약본일 뿐입니다!
> 사용된 소스들
>> [Discord.js](https://discord.js.org/#/): 대부분의 값들을 사용하였습니다
>> [npm:apiai](https://www.npmjs.com/package/apiai): 모든 값들을 사용하였습니다
>> [fs](https://www.npmjs.com/package/fs): 일부분의 값들을 사용하였습니다
> 생략된 값들
>> 뮤트코인 구성값
>> 임베드 이름값

--------------------------------------------------------------------------------------

# 3rd-Party Software for [DiscordMuBot](https://github.com/PMHStudio/DiscordMuBot)

The following 3rd-party software components may be used by or distributed with **DiscordMuBot**.  This document was automatically generated by [FOSSA](http://fossa.io) on 11/12/18; any information relevant to third-party vendors listed below are collected using common, reasonable means.




## Direct Dependencies


Library|Licenses
-------|--------
**[uws (99.0.0)](#uws)**|Zlib
**[text-to-mp3 (1.0.4)](#text-to-mp3)**|MIT
**[request (2.88.0)](#request)**|Apache-2.0
**[ffmpeg-binaries (4.0.0)](#ffmpeg-binaries)**|MIT
**[discord.js (11.4.2)](#discord.js)**|Apache-2.0
**[opusscript (0.0.6)](#opusscript)**|MIT
**[apiai (4.0.3)](#apiai)**|Apache-2.0
**[random-hex-color (1.0.1)](#random-hex-color)**|MIT
**[request (2.81.0)](#request)**|Apache-2.0
**[abbrev (1.1.1)](#abbrev)**|**Multi-license:** ISC *OR* MIT
**[ajv (4.11.8)](#ajv)**|MIT
**[ajv (6.5.5)](#ajv)**|MIT
**[ansi-regex (2.1.1)](#ansi-regex)**|MIT
**[aproba (1.2.0)](#aproba)**|**Multi-license:** MIT *OR* ISC
**[are-we-there-yet (1.1.4)](#are-we-there-yet)**|**Multi-license:** MIT *OR* ISC
**[asn1 (0.2.3)](#asn1)**|MIT
**[asn1 (0.2.4)](#asn1)**|MIT
**[assert-plus (0.2.0)](#assert-plus)**|MIT
**[assert-plus (1.0.0)](#assert-plus)**|MIT
**[asynckit (0.4.0)](#asynckit)**|MIT
**[async-limiter (1.0.0)](#async-limiter)**|MIT
**[aws4 (1.7.0)](#aws4)**|MIT
**[aws4 (1.8.0)](#aws4)**|MIT
**[aws-sign2 (0.6.0)](#aws-sign2)**|Apache-2.0
**[aws-sign2 (0.7.0)](#aws-sign2)**|Apache-2.0
**[balanced-match (1.0.0)](#balanced-match)**|MIT
**[base64-js (0.0.8)](#base64-js)**|MIT
**[bcrypt-pbkdf (1.0.1)](#bcrypt-pbkdf)**|BSD-3-Clause
**[bcrypt-pbkdf (1.0.2)](#bcrypt-pbkdf)**|**Multi-license:** BSD-2-Clause *OR* BSD-3-Clause *OR* MIT
**[bl (1.2.2)](#bl)**|MIT
**[block-stream (0.0.9)](#block-stream)**|**Multi-license:** MIT *OR* ISC *OR* BSD-2-Clause
**[boom (2.10.1)](#boom)**|BSD-3-Clause
**[brace-expansion (1.1.11)](#brace-expansion)**|MIT
**[buffer (3.6.0)](#buffer)**|MIT
**[buffer-alloc (1.2.0)](#buffer-alloc)**|MIT
**[buffer-alloc-unsafe (1.1.0)](#buffer-alloc-unsafe)**|MIT
**[buffer-crc32 (0.2.13)](#buffer-crc32)**|**Multi-license:** MIT *OR* https://github.com/brianloveswords/buffer-crc32/raw/master/LICENSE
**[buffer-fill (1.0.0)](#buffer-fill)**|MIT
**[caseless (0.12.0)](#caseless)**|Apache-2.0
**[co (4.6.0)](#co)**|MIT
**[code-point-at (1.1.0)](#code-point-at)**|MIT
**[combined-stream (1.0.6)](#combined-stream)**|MIT
**[combined-stream (1.0.7)](#combined-stream)**|MIT
**[commander (2.8.1)](#commander)**|MIT
**[concat-map (0.0.1)](#concat-map)**|MIT
**[console-control-strings (1.1.0)](#console-control-strings)**|**Multi-license:** MIT *OR* ISC
**[core-util-is (1.0.2)](#core-util-is)**|MIT
**[cryptiles (2.0.5)](#cryptiles)**|BSD-3-Clause
**[dashdash (1.14.1)](#dashdash)**|MIT
**[debug (2.6.9)](#debug)**|MIT
**[decompress (4.2.0)](#decompress)**|MIT
**[decompress-tar (4.1.1)](#decompress-tar)**|MIT
**[decompress-tarbz2 (4.1.1)](#decompress-tarbz2)**|MIT
**[decompress-targz (4.1.1)](#decompress-targz)**|MIT
**[decompress-tarxz (2.1.1)](#decompress-tarxz)**|MIT
**[decompress-unzip (4.0.1)](#decompress-unzip)**|MIT
**[deep-extend (0.5.1)](#deep-extend)**|**Multi-license:** https://raw.githubusercontent.com/unclechu/node-deep-extend/master/LICENSE *OR* MIT
**[delayed-stream (1.0.0)](#delayed-stream)**|MIT
**[delegates (1.0.0)](#delegates)**|MIT
**[detect-libc (1.0.3)](#detect-libc)**|Apache-2.0
**[ecc-jsbn (0.1.1)](#ecc-jsbn)**|MIT
**[ecc-jsbn (0.1.2)](#ecc-jsbn)**|MIT
**[end-of-stream (1.4.1)](#end-of-stream)**|MIT
**[extend (3.0.1)](#extend)**|MIT
**[extend (3.0.2)](#extend)**|MIT
**[extsprintf (1.3.0)](#extsprintf)**|MIT
**[fast-deep-equal (2.0.1)](#fast-deep-equal)**|MIT
**[fast-json-stable-stringify (2.0.0)](#fast-json-stable-stringify)**|MIT
**[fd-slicer (1.1.0)](#fd-slicer)**|MIT
**[file-type (3.9.0)](#file-type)**|MIT
**[file-type (5.2.0)](#file-type)**|MIT
**[file-type (6.2.0)](#file-type)**|MIT
**[forever-agent (0.6.1)](#forever-agent)**|Apache-2.0
**[form-data (2.1.4)](#form-data)**|MIT
**[form-data (2.3.3)](#form-data)**|MIT
**[fs-constants (1.0.0)](#fs-constants)**|MIT
**[fs.realpath (1.0.0)](#fs.realpath)**|**Multi-license:** MIT *OR* ISC
**[fstream (1.0.11)](#fstream)**|**Multi-license:** MIT *OR* ISC
**[fstream-ignore (1.0.5)](#fstream-ignore)**|**Multi-license:** MIT *OR* ISC
**[gauge (2.7.4)](#gauge)**|**Multi-license:** MIT *OR* ISC
**[getpass (0.1.7)](#getpass)**|MIT
**[get-stream (2.3.1)](#get-stream)**|MIT
**[glob (7.1.2)](#glob)**|**Multi-license:** MIT *OR* ISC
**[graceful-fs (4.1.11)](#graceful-fs)**|**Multi-license:** MIT *OR* ISC
**[graceful-fs (4.1.15)](#graceful-fs)**|MIT
**[graceful-readlink (1.0.1)](#graceful-readlink)**|MIT
**[har-schema (1.0.5)](#har-schema)**|**Multi-license:** MIT *OR* ISC
**[har-schema (2.0.0)](#har-schema)**|**Multi-license:** MIT *OR* ISC
**[har-validator (4.2.1)](#har-validator)**|**Multi-license:** MIT *OR* ISC
**[har-validator (5.1.3)](#har-validator)**|**Multi-license:** ISC *OR* MIT
**[has-unicode (2.0.1)](#has-unicode)**|**Multi-license:** MIT *OR* ISC
**[hawk (3.1.3)](#hawk)**|**Multi-license:** BSD-3-Clause *OR* ./LICENSE
**[hoek (2.16.3)](#hoek)**|BSD-3-Clause
**[http-signature (1.1.1)](#http-signature)**|MIT
**[http-signature (1.2.0)](#http-signature)**|MIT
**[ieee754 (1.1.12)](#ieee754)**|**Multi-license:** BSD-3-Clause *OR* BSD-2-Clause
**[inflight (1.0.6)](#inflight)**|**Multi-license:** MIT *OR* ISC
**[inherits (2.0.3)](#inherits)**|**Multi-license:** MIT *OR* ISC
**[ini (1.3.5)](#ini)**|**Multi-license:** MIT *OR* ISC
**[isarray (1.0.0)](#isarray)**|MIT
**[is-fullwidth-code-point (1.0.0)](#is-fullwidth-code-point)**|MIT
**[is-natural-number (4.0.1)](#is-natural-number)**|MIT
**[isstream (0.1.2)](#isstream)**|MIT
**[is-stream (1.1.0)](#is-stream)**|MIT
**[is-typedarray (1.0.0)](#is-typedarray)**|MIT
**[jsbn (0.1.1)](#jsbn)**|MIT
**[jsonify (0.0.0)](#jsonify)**|Public-Domain
**[json-schema (0.2.3)](#json-schema)**|http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L13, http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L43
**[json-schema-traverse (0.4.1)](#json-schema-traverse)**|MIT
**[json-stable-stringify (1.0.1)](#json-stable-stringify)**|MIT
**[json-stringify-safe (5.0.1)](#json-stringify-safe)**|**Multi-license:** MIT *OR* ISC
**[jsprim (1.4.1)](#jsprim)**|MIT
**[long (4.0.0)](#long)**|Apache-2.0
**[lzma-native (3.0.8)](#lzma-native)**|MIT
**[make-dir (1.3.0)](#make-dir)**|MIT
**[mime-db (1.33.0)](#mime-db)**|MIT
**[mime-db (1.37.0)](#mime-db)**|MIT
**[mime-types (2.1.18)](#mime-types)**|MIT
**[mime-types (2.1.21)](#mime-types)**|MIT
**[minimatch (3.0.4)](#minimatch)**|**Multi-license:** MIT *OR* ISC
**[minimist (0.0.8)](#minimist)**|MIT
**[minimist (1.2.0)](#minimist)**|MIT
**[mkdirp (0.5.1)](#mkdirp)**|MIT
**[ms (2.0.0)](#ms)**|MIT
**[nan (2.11.1)](#nan)**|MIT
**[node-pre-gyp (0.6.39)](#node-pre-gyp)**|BSD-3-Clause
**[nopt (4.0.1)](#nopt)**|ISC
**[npmlog (4.1.2)](#npmlog)**|ISC
**[number-is-nan (1.0.1)](#number-is-nan)**|MIT
**[oauth-sign (0.8.2)](#oauth-sign)**|Apache-2.0
**[oauth-sign (0.9.0)](#oauth-sign)**|Apache-2.0
**[object-assign (4.1.1)](#object-assign)**|MIT
**[once (1.4.0)](#once)**|**Multi-license:** MIT *OR* ISC
**[osenv (0.1.5)](#osenv)**|**Multi-license:** MIT *OR* ISC
**[os-homedir (1.0.2)](#os-homedir)**|MIT
**[os-tmpdir (1.0.2)](#os-tmpdir)**|MIT
**[path-is-absolute (1.0.1)](#path-is-absolute)**|MIT
**[pend (1.2.0)](#pend)**|MIT
**[performance-now (0.2.0)](#performance-now)**|MIT
**[performance-now (2.1.0)](#performance-now)**|MIT
**[pify (2.3.0)](#pify)**|MIT
**[pify (3.0.0)](#pify)**|MIT
**[pinkie (2.0.4)](#pinkie)**|MIT
**[pinkie-promise (2.0.1)](#pinkie-promise)**|MIT
**[prism-media (0.0.3)](#prism-media)**|Apache-2.0
**[process-nextick-args (2.0.0)](#process-nextick-args)**|MIT
**[psl (1.1.29)](#psl)**|MIT
**[punycode (1.4.1)](#punycode)**|MIT
**[punycode (2.1.1)](#punycode)**|MIT
**[qs (6.4.0)](#qs)**|BSD-3-Clause
**[qs (6.5.2)](#qs)**|BSD-3-Clause
**[rc (1.2.7)](#rc)**|BSD-3-Clause
**[readable-stream (2.3.6)](#readable-stream)**|MIT
**[rimraf (2.6.2)](#rimraf)**|**Multi-license:** MIT *OR* ISC
**[safe-buffer (5.1.2)](#safe-buffer)**|MIT
**[safer-buffer (2.1.2)](#safer-buffer)**|MIT
**[seek-bzip (1.0.5)](#seek-bzip)**|MIT
**[semver (5.5.0)](#semver)**|**Multi-license:** MIT *OR* ISC
**[set-blocking (2.0.0)](#set-blocking)**|ISC
**[signal-exit (3.0.2)](#signal-exit)**|ISC
**[snekfetch (3.6.4)](#snekfetch)**|MIT
**[sntp (1.0.9)](#sntp)**|http://github.com/hueniverse/sntp/raw/master/LICENSE
**[sshpk (1.14.1)](#sshpk)**|MIT
**[sshpk (1.15.2)](#sshpk)**|MIT
**[string_decoder (1.1.1)](#string_decoder)**|MIT
**[stringstream (0.0.5)](#stringstream)**|MIT
**[string-width (1.0.2)](#string-width)**|MIT
**[strip-ansi (3.0.1)](#strip-ansi)**|MIT
**[strip-dirs (2.1.0)](#strip-dirs)**|MIT
**[strip-json-comments (2.0.1)](#strip-json-comments)**|MIT
**[tar (2.2.1)](#tar)**|**Multi-license:** MIT *OR* ISC
**[tar-pack (3.4.1)](#tar-pack)**|**Multi-license:** BSD-2-Clause *OR* BSD-3-Clause
**[tar-stream (1.6.2)](#tar-stream)**|MIT
**[through (2.3.8)](#through)**|MIT
**[to-buffer (1.1.1)](#to-buffer)**|MIT
**[tough-cookie (2.3.4)](#tough-cookie)**|**Multi-license:** BSD-3-Clause *OR* MPL-2.0
**[tough-cookie (2.4.3)](#tough-cookie)**|**Multi-license:** BSD-3-Clause *OR* BSD-2-Clause
**[tunnel-agent (0.6.0)](#tunnel-agent)**|Apache-2.0
**[tweetnacl (0.14.5)](#tweetnacl)**|
**[tweetnacl (1.0.0)](#tweetnacl)**|Unlicense
**[uid-number (0.0.6)](#uid-number)**|**Multi-license:** MIT *OR* ISC
**[unbzip2-stream (1.3.1)](#unbzip2-stream)**|MIT
**[uri-js (4.2.2)](#uri-js)**|BSD-3-Clause
**[util-deprecate (1.0.2)](#util-deprecate)**|MIT
**[uuid (3.2.1)](#uuid)**|MIT
**[uuid (3.3.2)](#uuid)**|MIT
**[verror (1.10.0)](#verror)**|MIT
**[wide-align (1.1.2)](#wide-align)**|**Multi-license:** MIT *OR* ISC
**[wrappy (1.0.2)](#wrappy)**|**Multi-license:** MIT *OR* ISC, **Multi-license:** MIT *OR* ISC, **Multi-license:** MIT *OR* ISC
**[ws (4.1.0)](#ws)**|MIT
**[xtend (4.0.1)](#xtend)**|MIT
**[yauzl (2.10.0)](#yauzl)**|MIT




### Details


#### **uws (99.0.0)**


* Licenses
    * Zlib




* Other Licenses





#### **text-to-mp3 (1.0.4)**


* Licenses
    * MIT




* Other Licenses





#### **request (2.88.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **ffmpeg-binaries (4.0.0)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** LGPL-2.1-only *OR* GPL-2.0-only





#### **discord.js (11.4.2)**


* Licenses
    * Apache-2.0




* Other Licenses
    * MIT





#### **opusscript (0.0.6)**


* Licenses
    * MIT




* Other Licenses





#### **apiai (4.0.3)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **random-hex-color (1.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **request (2.81.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **abbrev (1.1.1)**


* Licenses
    * **Multi-license:** ISC *OR* MIT




* Other Licenses





#### **ajv (4.11.8)**


* Licenses
    * MIT




* Other Licenses





#### **ajv (6.5.5)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** MIT *OR* BSD-2-Clause





#### **ansi-regex (2.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **aproba (1.2.0)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **are-we-there-yet (1.1.4)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **asn1 (0.2.3)**


* Licenses
    * MIT




* Other Licenses





#### **asn1 (0.2.4)**


* Licenses
    * MIT




* Other Licenses





#### **assert-plus (0.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **assert-plus (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **asynckit (0.4.0)**


* Licenses
    * MIT




* Other Licenses





#### **async-limiter (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **aws4 (1.7.0)**


* Licenses
    * MIT




* Other Licenses





#### **aws4 (1.8.0)**


* Licenses
    * MIT




* Other Licenses





#### **aws-sign2 (0.6.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **aws-sign2 (0.7.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **balanced-match (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **base64-js (0.0.8)**


* Licenses
    * MIT




* Other Licenses





#### **bcrypt-pbkdf (1.0.1)**


* Licenses
    * BSD-3-Clause




* Other Licenses
    * **Multi-license:** MIT *OR* BSD-3-Clause





#### **bcrypt-pbkdf (1.0.2)**


* Licenses
    * **Multi-license:** BSD-2-Clause *OR* BSD-3-Clause *OR* MIT




* Other Licenses
    * **Multi-license:** BSD-3-Clause *OR* MIT
    * BSD-3-Clause





#### **bl (1.2.2)**


* Licenses
    * MIT




* Other Licenses





#### **block-stream (0.0.9)**


* Licenses
    * **Multi-license:** MIT *OR* ISC *OR* BSD-2-Clause




* Other Licenses





#### **boom (2.10.1)**


* Licenses
    * BSD-3-Clause




* Other Licenses





#### **brace-expansion (1.1.11)**


* Licenses
    * MIT




* Other Licenses





#### **buffer (3.6.0)**


* Licenses
    * MIT




* Other Licenses





#### **buffer-alloc (1.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **buffer-alloc-unsafe (1.1.0)**


* Licenses
    * MIT




* Other Licenses





#### **buffer-crc32 (0.2.13)**


* Licenses
    * **Multi-license:** MIT *OR* https://github.com/brianloveswords/buffer-crc32/raw/master/LICENSE




* Other Licenses
    * **Multi-license:** MIT *OR* X11





#### **buffer-fill (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **caseless (0.12.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **co (4.6.0)**


* Licenses
    * MIT




* Other Licenses





#### **code-point-at (1.1.0)**


* Licenses
    * MIT




* Other Licenses





#### **combined-stream (1.0.6)**


* Licenses
    * MIT




* Other Licenses





#### **combined-stream (1.0.7)**


* Licenses
    * MIT




* Other Licenses





#### **commander (2.8.1)**


* Licenses
    * MIT




* Other Licenses





#### **concat-map (0.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **console-control-strings (1.1.0)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **core-util-is (1.0.2)**


* Licenses
    * MIT




* Other Licenses





#### **cryptiles (2.0.5)**


* Licenses
    * BSD-3-Clause




* Other Licenses





#### **dashdash (1.14.1)**


* Licenses
    * MIT




* Other Licenses





#### **debug (2.6.9)**


* Licenses
    * MIT




* Other Licenses





#### **decompress (4.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **decompress-tar (4.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **decompress-tarbz2 (4.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **decompress-targz (4.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **decompress-tarxz (2.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **decompress-unzip (4.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **deep-extend (0.5.1)**


* Licenses
    * **Multi-license:** https://raw.githubusercontent.com/unclechu/node-deep-extend/master/LICENSE *OR* MIT




* Other Licenses
    * MIT





#### **delayed-stream (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **delegates (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **detect-libc (1.0.3)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **ecc-jsbn (0.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **ecc-jsbn (0.1.2)**


* Licenses
    * MIT




* Other Licenses





#### **end-of-stream (1.4.1)**


* Licenses
    * MIT




* Other Licenses





#### **extend (3.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **extend (3.0.2)**


* Licenses
    * MIT




* Other Licenses





#### **extsprintf (1.3.0)**


* Licenses
    * MIT




* Other Licenses





#### **fast-deep-equal (2.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **fast-json-stable-stringify (2.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **fd-slicer (1.1.0)**


* Licenses
    * MIT




* Other Licenses





#### **file-type (3.9.0)**


* Licenses
    * MIT




* Other Licenses





#### **file-type (5.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **file-type (6.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **forever-agent (0.6.1)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **form-data (2.1.4)**


* Licenses
    * MIT




* Other Licenses





#### **form-data (2.3.3)**


* Licenses
    * MIT




* Other Licenses





#### **fs-constants (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **fs.realpath (1.0.0)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses
    * MIT





#### **fstream (1.0.11)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **fstream-ignore (1.0.5)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **gauge (2.7.4)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **getpass (0.1.7)**


* Licenses
    * MIT




* Other Licenses





#### **get-stream (2.3.1)**


* Licenses
    * MIT




* Other Licenses





#### **glob (7.1.2)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses
    * ISC





#### **graceful-fs (4.1.11)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **graceful-fs (4.1.15)**


* Licenses
    * MIT




* Other Licenses
    * ISC





#### **graceful-readlink (1.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **har-schema (1.0.5)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses
    * ISC





#### **har-schema (2.0.0)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses
    * ISC





#### **har-validator (4.2.1)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses
    * ISC





#### **har-validator (5.1.3)**


* Licenses
    * **Multi-license:** ISC *OR* MIT




* Other Licenses
    * ISC
    * MIT





#### **has-unicode (2.0.1)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **hawk (3.1.3)**


* Licenses
    * **Multi-license:** BSD-3-Clause *OR* ./LICENSE




* Other Licenses
    * BSD-3-Clause





#### **hoek (2.16.3)**


* Licenses
    * BSD-3-Clause




* Other Licenses
    * MIT





#### **http-signature (1.1.1)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** MIT *OR* Public-Domain





#### **http-signature (1.2.0)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** MIT *OR* Public-Domain





#### **ieee754 (1.1.12)**


* Licenses
    * **Multi-license:** BSD-3-Clause *OR* BSD-2-Clause




* Other Licenses
    * BSD-3-Clause





#### **inflight (1.0.6)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **inherits (2.0.3)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **ini (1.3.5)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **isarray (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **is-fullwidth-code-point (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **is-natural-number (4.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **isstream (0.1.2)**


* Licenses
    * MIT




* Other Licenses





#### **is-stream (1.1.0)**


* Licenses
    * MIT




* Other Licenses





#### **is-typedarray (1.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **jsbn (0.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **jsonify (0.0.0)**


* Licenses
    * Public-Domain




* Other Licenses





#### **json-schema (0.2.3)**


* Licenses
    * http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L13, http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L43




* Other Licenses
    * MIT
    * **Multi-license:** BSD-3-Clause *OR* AFL-3.0





#### **json-schema-traverse (0.4.1)**


* Licenses
    * MIT




* Other Licenses





#### **json-stable-stringify (1.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **json-stringify-safe (5.0.1)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **jsprim (1.4.1)**


* Licenses
    * MIT




* Other Licenses





#### **long (4.0.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **lzma-native (3.0.8)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** public-domain *OR* MIT
    * public-domain





#### **make-dir (1.3.0)**


* Licenses
    * MIT




* Other Licenses





#### **mime-db (1.33.0)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** Apache-2.0 *OR* MS-PL *OR* MIT-CMU *OR* HP-possibility *OR* CPL-1.0 *OR* SPL-1.0





#### **mime-db (1.37.0)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** Apache-2.0 *OR* SPL-1.0 *OR* MIT-CMU *OR* MS-RL *OR* CPL-1.0





#### **mime-types (2.1.18)**


* Licenses
    * MIT




* Other Licenses





#### **mime-types (2.1.21)**


* Licenses
    * MIT




* Other Licenses





#### **minimatch (3.0.4)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **minimist (0.0.8)**


* Licenses
    * MIT




* Other Licenses





#### **minimist (1.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **mkdirp (0.5.1)**


* Licenses
    * MIT




* Other Licenses





#### **ms (2.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **nan (2.11.1)**


* Licenses
    * MIT




* Other Licenses





#### **node-pre-gyp (0.6.39)**


* Licenses
    * BSD-3-Clause




* Other Licenses





#### **nopt (4.0.1)**


* Licenses
    * ISC




* Other Licenses
    * MIT





#### **npmlog (4.1.2)**


* Licenses
    * ISC




* Other Licenses
    * MIT





#### **number-is-nan (1.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **oauth-sign (0.8.2)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **oauth-sign (0.9.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **object-assign (4.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **once (1.4.0)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **osenv (0.1.5)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **os-homedir (1.0.2)**


* Licenses
    * MIT




* Other Licenses





#### **os-tmpdir (1.0.2)**


* Licenses
    * MIT




* Other Licenses





#### **path-is-absolute (1.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **pend (1.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **performance-now (0.2.0)**


* Licenses
    * MIT




* Other Licenses





#### **performance-now (2.1.0)**


* Licenses
    * MIT




* Other Licenses





#### **pify (2.3.0)**


* Licenses
    * MIT




* Other Licenses





#### **pify (3.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **pinkie (2.0.4)**


* Licenses
    * MIT




* Other Licenses





#### **pinkie-promise (2.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **prism-media (0.0.3)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **process-nextick-args (2.0.0)**


* Licenses
    * MIT




* Other Licenses





#### **psl (1.1.29)**


* Licenses
    * MIT




* Other Licenses





#### **punycode (1.4.1)**


* Licenses
    * MIT




* Other Licenses





#### **punycode (2.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **qs (6.4.0)**


* Licenses
    * BSD-3-Clause




* Other Licenses





#### **qs (6.5.2)**


* Licenses
    * BSD-3-Clause




* Other Licenses





#### **rc (1.2.7)**


* Licenses
    * BSD-3-Clause




* Other Licenses
    * Apache-2.0
    * **Multi-license:** Apache-2.0 *OR* BSD-3-Clause *OR* MIT
    * MIT
    * BSD-2-Clause





#### **readable-stream (2.3.6)**


* Licenses
    * MIT




* Other Licenses





#### **rimraf (2.6.2)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **safe-buffer (5.1.2)**


* Licenses
    * MIT




* Other Licenses





#### **safer-buffer (2.1.2)**


* Licenses
    * MIT




* Other Licenses





#### **seek-bzip (1.0.5)**


* Licenses
    * MIT




* Other Licenses
    * LGPL-2.1-only





#### **semver (5.5.0)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **set-blocking (2.0.0)**


* Licenses
    * ISC




* Other Licenses
    * MIT





#### **signal-exit (3.0.2)**


* Licenses
    * ISC




* Other Licenses
    * MIT





#### **snekfetch (3.6.4)**


* Licenses
    * MIT




* Other Licenses





#### **sntp (1.0.9)**


* Licenses
    * http://github.com/hueniverse/sntp/raw/master/LICENSE




* Other Licenses
    * BSD-3-Clause





#### **sshpk (1.14.1)**


* Licenses
    * MIT




* Other Licenses
    * RSA-possibility





#### **sshpk (1.15.2)**


* Licenses
    * MIT




* Other Licenses





#### **string_decoder (1.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **stringstream (0.0.5)**


* Licenses
    * MIT




* Other Licenses





#### **string-width (1.0.2)**


* Licenses
    * MIT




* Other Licenses





#### **strip-ansi (3.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **strip-dirs (2.1.0)**


* Licenses
    * MIT




* Other Licenses





#### **strip-json-comments (2.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **tar (2.2.1)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **tar-pack (3.4.1)**


* Licenses
    * **Multi-license:** BSD-2-Clause *OR* BSD-3-Clause




* Other Licenses
    * BSD-3-Clause





#### **tar-stream (1.6.2)**


* Licenses
    * MIT




* Other Licenses





#### **through (2.3.8)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** Apache-2.0 *OR* MIT
    * Apache-2.0





#### **to-buffer (1.1.1)**


* Licenses
    * MIT




* Other Licenses





#### **tough-cookie (2.3.4)**


* Licenses
    * **Multi-license:** BSD-3-Clause *OR* MPL-2.0




* Other Licenses
    * BSD-3-Clause





#### **tough-cookie (2.4.3)**


* Licenses
    * **Multi-license:** BSD-3-Clause *OR* BSD-2-Clause




* Other Licenses
    * BSD-3-Clause
    * **Multi-license:** BSD-3-Clause *OR* MPL-1.1





#### **tunnel-agent (0.6.0)**


* Licenses
    * Apache-2.0




* Other Licenses





#### **tweetnacl (0.14.5)**


* Licenses




* Other Licenses
    * Public-Domain
    * Public-Domain





#### **tweetnacl (1.0.0)**


* Licenses
    * Unlicense




* Other Licenses
    * Public-Domain
    * MIT





#### **uid-number (0.0.6)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **unbzip2-stream (1.3.1)**


* Licenses
    * MIT




* Other Licenses





#### **uri-js (4.2.2)**


* Licenses
    * BSD-3-Clause




* Other Licenses
    * BSD-2-Clause





#### **util-deprecate (1.0.2)**


* Licenses
    * MIT




* Other Licenses





#### **uuid (3.2.1)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** MIT *OR* BSD-3-Clause





#### **uuid (3.3.2)**


* Licenses
    * MIT




* Other Licenses
    * **Multi-license:** MIT *OR* BSD-3-Clause





#### **verror (1.10.0)**


* Licenses
    * MIT




* Other Licenses





#### **wide-align (1.1.2)**


* Licenses
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **wrappy (1.0.2)**


* Licenses
    * **Multi-license:** MIT *OR* ISC
    * **Multi-license:** MIT *OR* ISC
    * **Multi-license:** MIT *OR* ISC




* Other Licenses





#### **ws (4.1.0)**


* Licenses
    * MIT




* Other Licenses





#### **xtend (4.0.1)**


* Licenses
    * MIT




* Other Licenses





#### **yauzl (2.10.0)**


* Licenses
    * MIT




* Other Licenses














[FOSSA]: # (Do not touch the comments below)

[FOSSA]: # (==depsig=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855==)




### Project Dir
> PMH Studio
>> Projects
>>> Programs
>>>> Discord bot
>>>>> proj-μBot
>>>>>> [Branch: Version 7.0](https://github.com/PMHStudio/DiscordMuBot/branches)

### Discord.js Included
### Node.js Included

-------------------------------------------------------------



- Copyright &copy; 2018. PMH Studio. [MIT Licensed.](https://github.com/PMHStudio/DiscordMuBot/blob/%CE%BCBot-ver5/LICENSE)
