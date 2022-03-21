<p align="center">
<img src="https://telegra.ph/file/0fe8713f9ccb499a25346.jpg" alt="ALICE BOT" width="500"/>


</p>
<p align="center">
<a href="#"><img title="ALICE BOT MULTI DEVICE" src="https://img.shields.io/badge/ALICE BOT MULTI DEVICE-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/ilmanhdyt/ShiraoriBOT-Md"><img title="Author" src="https://img.shields.io/badge/Author-Aisu-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/ilmanhdyt/ShiraoriBOT-Md"><img title="Followers" src="https://img.shields.io/github/followers/ilmanhdyt?color=blue&style=flat-square"></a>
<a href="https://github.com/ilmanhdyt/ShiraoriBOT-Md"><img title="Stars" src="https://img.shields.io/github/stars/ilmanhdyt/ShiraoriBOT-Md?color=red&style=flat-square"></a>
<a href="https://github.com/ilmanhdyt/ShiraoriBOT-Md/network/members"><img title="Forks" src="https://img.shields.io/github/forks/ilmanhdyt/ShiraoriBOT-Md?color=red&style=flat-square"></a>
<a href="https://github.com/ilmanhdyt/ShiraoriBOT-Md/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/ilmanhdyt/ShiraoriBOT-Md?label=Watchers&color=blue&style=flat-square"></a>
</p>

---

<h1 align="center">ALICE BOT WHATSAPP</h1>

## Information ✼
> AliceBot whatsapp using a Baileys library.
> If you find some kind of bug, please forgive temporarily
>
> • NOTE: Make sure your network is smooth and your device is good :v,
> 
> •  using termux it might take a long time to respond, I suggest using heroku
> 

## Testing Bot
* If you find a bug, don't forget to open Issues

## How To Change Menu Display
----
### Gif Menu Display ✼
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Image Menu Display ✼
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/shiraori.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Location Menu Display ✼
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/shiraori.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Video Menu Display ✼
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


### `• Get QR Code Using Repl.it`
> Need a **PC** for get qr and need a **PHONE** to scan the qr.

[![Run on Repl.it](https://repl.it/badge/github/LuffyCloud/Alice-MD-Session)](https://replit.com/@LuffyCloud/Alice-MD-Session)

## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'mongodb+srv://ilman:<password>@cluster0.iiede.mongodb.net/ShiraoriBOT?retryWrites=true&w=majority'`

## FOR HEROKU USERS

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## FOR WINDOWS/VPS/RDP USERS

* Unduh & Instal Git [`Click here`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Click here`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Click here`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Click here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/ilmanhdyt/ShiraoriBOT-Md
cd ShiraoriBOT-Md
npm install
npm update
npm index
```

---------

## FOR TERMUX USERS
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/ilmanhdyt/ShiraoriBOT-Md
cd ShiraoriBOT-Md
yarn
npm i -g typescript
tsc -p ./node_modules/@adiwajshing/baileys
node .
```

## Installing the FFmpeg for Windows
* Download any of the available FFmpeg versions by clicking [`Click here`](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run the following command::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
If successful, it will give you a message like: `SUCCESS: specified value was saved`.
* Now that you have FFmpeg installed, verify that it worked by running this command to see the version:
```cmd
> ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![Ilman](https://github.com/ilmanhdyt.png?size=150)](https://github.com/ilmanhdyt) | [![Arisu](https://github.com/ArisuXd.png?size=150)](https://github.com/ArisuXD)
----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ilman](https://github.com/ilmanhdyt) | [Istikmal](https://github.com/BochilGaming)| [Arisu](https://github.com/AtisuXD)
Author | which adds features | Editor

## Donate
- [Saweria](https://saweria.co/ilmanhdyt)
