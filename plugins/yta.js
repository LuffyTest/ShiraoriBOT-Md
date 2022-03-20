let limit = 40
const { servers, yta } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return m.reply('Uhm... where is the url?')
    let chat = global.db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*🔮 Title:* ${title}
*🔖 Filesize:* ${filesizeF}
 ${isLimit ? 'This File Is Above Upload limit use this link and download your self  ${dl_link}': ''}
`.trim(), m)
    if (!isLimit) await sock.sendMessage(m.chat, { document: { url: dl_link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^(yta|ytmp3|mp3)$/i
handler.owner = false
handler.mods = false
handler.limit = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
