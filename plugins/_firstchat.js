let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (m.chat.endsWith('broadcast') || m.fromMe || isBlocked || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    let anu = `
Hi ${await this.getName(m.sender)}, ${ucapan()}
I am ${botname}, one of the multi-device whatsapp bots, can I help you? 

Before using a bot, read the rules of the bot first by typing *#peraturan* or *#rules*.

Want to chat with simi(bot)?  type *#on simi*
`
await conn.sendTemplateButtonLoc(m.chat, anu.trim(), wm, await(await fetch(img)).buffer(), `Menu`, `#menu`, m)
user.pc = new Date * 1
}

module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Colombo').format('HH')
  res = "don't forget to sleep, lov yu<3"
  if (time >= 4) {
    res = "Good morning ☀"
  }
  if (time > 10) {
    res = "Good afternoon 🌞"
  }
  if (time >= 15) {
    res = "Good afternoon 🌝"
  }
  if (time >= 18) {
    res = "Good night 🌚"
  }
  return res
}
