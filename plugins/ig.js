
const { instagramdl } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*This command is for downloading ig/reel/tv posts, not for highlight/story!*\n\nexample:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
  if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Wrong link! This command is for downloading ig/reel/tv posts, not for highlights/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`

instagramdl(args[0]).then(async res => {
    let instagramdl = JSON.stringify(res)
    let json = JSON.parse(instagramdl)
    for (let { url, type } of json) {
      await delay(1500)
      conn.sendFile(m.chat, url, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*© Alice 🥀*', m, { thumbnail: Buffer.alloc(0) })
    }
  })
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.premium = false

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
