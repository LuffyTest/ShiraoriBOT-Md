let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
const defaultMenu = {
          before: `
┏━〔 %me 〕
┠ Hey, %name!
┃ 
┠ 📅 Date: *%week %date*
┠ 🔅 Time: *%time*
┃
┠ 🔰 UpTime : *%uptime*
┠ 🌿 DataBase : MongoDB
┠ 🔮 Web : Comming Soon
┗━━━━━━━━
%readmore`.trimStart(),
  header: '┏━━━❰･%category･❱━━━',
  body: '┠ %cmd %islimit %isPremium',
  footer: '┗━━━━━━\n',
  after: `
*Alice-Md🤍🥀@^%version*
`,
}

let handler = async (m, { conn, usedPrefix: _p, args, command, DevMode }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['main', 'anime', 'tools', 'group', 'internet', 'sticker', 'fun', 'game', 'xp', 'advanced', 'rpg', 'kerang', 'absen', 'github', 'grup', 'info', 'internet','downloader', 'tools', 'fun', 'database', 'nsfw', 'premium', 'jadibot', 'info', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
   'main': 'MENU UTAMA',
  'game': 'MENU GAME',
  'rpg': 'MENU RPG',
  'xp': 'MENU EXP',
  'premium': 'MENU PREMIUM',
  'group': 'MENU GROUP',
  'absen': 'MENU ABSEN',
  'vote': 'MENU VOTE',
  'owner': 'MENU OWNER',
  'fun': 'MENU FUN',
  'sticker': 'MENU CONVERT',
  'maker': 'MENU MAKER',
  'github': 'MENU GITHUB',
  'internet': 'INTERNET',
  'kerang': 'MENU KERANG',
  'anime': 'MENU ANIME',
  'jadibot': 'GET BOT'
  'downloader': 'DOWNLOADER',
  'nsfw': 'MENU NSFW',
  'tools': 'MENU TOOLS',
  'advanced': 'ADVANCED',
  'quotes': 'MENU QUOTES',
  'info': 'MENU INFO',
}
  if (teks == 'game') tags = {
    'game': 'GAME'
  }
  if (teks == 'anime') tags = {
    'anime': 'ANIME'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'EDUCATION'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'islamic') tags = {
    'islamic': 'Islamic'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'AUDIO'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'GET BOT'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'NSFW'
  }
  if (teks == 'update') tags = {
    'update': 'Update'
  }
 

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Colombo').format('HH:mm:ss')
    
    let aoa = `Kon\'nichiwa 💕 ${name}.`.trim()
    let anu = `★ ° . *　　　°　.　°☆ 　. * ● ¸ 
. 　　　★ 　° :. ★　 * • ○ ° ★　 
.　 * 　.　 　　　　　. 　 
° 　. ● . ★ ° . *　　　°　.　°☆ 
　. * ● ¸ . 　　　★ 　° :●. 　 * 
• ○ ° ★　 .　 * 　.　 　　　　　.
 　 ° 　. ● . ★ ° . *　　　°　.　
°☆ 　. * ● ¸ . 　　　★ ° :.☆
° :. 　 * • ○ ° ★　 .　 * 　.　 
　★　　　　. 　 ° 　.  . 　★★　 　　
° °☆ 　¸. ● . 　　★　★ ° °☆
         
hey ${ucapan()}
🔮 *NAME* : ${name}
🧭 *TIME* : ${time},
🎫 *DATE* : ${date},
🧬 *PREFIX* : Multi 
─────────────────⸙ \n\ `.trim()
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })
    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: aoa,
            description: anu,
            buttonText: 'SELECT',
            listType: 1,
            footerText: wm,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `━❰･ALL MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? all`
                  }],
                "title": `List Menu ${conn.user.name}`
              }, {
                "rows": [{
                  "title": `━❰･ANIME MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? anime`
                }],
                "title": "─────「 1 」"
              }, {
                "rows": [{
                  "title": `━❰･GROUP MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? admin`
                }],
                "title": "─────「 2 」"
              }, {
                "rows": [{
                  "title": `━❰･ANONYMOUS CHAT･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? anonymous`
                }],
                "title": "─────「 3 」"
              }, {
                "rows": [{
                  "title": `━❰･AUDIO MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? audio`
                }],
                "title": "─────「 4 」"
              }, {
                "rows": [{
                  "title": `━❰･DOWNLOADER MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? downloader`
                }],
                "title": "─────「 5 」"
              }, {
                "rows": [{
                  "title": `━❰･DATABASE･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? database`
                }],
                "title": "─────「 6 」"
              }, {
                "rows": [{
                  "title": `━❰･EDUCATION MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? edukasi`
                }],
                "title": "─────「 7 」"
              }, {
                "rows": [{
                  "title": `Menu Fun`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? fun`
                }],
                "title": "─────「 8 」"
              }, {
                "rows": [{
                  "title": `Menu Game`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? game`
                }],
                "title": "─────「 9 」"
              }, {
                "rows": [{
                  "title": `Menu Info`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? info`
                }],
                "title": "─────「 10 」"
              }, {
                "rows": [{
                  "title": `━❰･INTERNET MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? internet`
                 }],
                 "title": "─────「 11 」"
              }, {
                "rows": [{
                  "title": `Menu Islamic`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? islamic`
                }],
                "title": "─────「 12 」"
              }, {
                "rows": [{
                  "title": `━❰･GET BOT･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? jadibot`
                }],
                "title": "─────「 13 」"
              }, {
                "rows":[{
                  "title": `Menu Kerang Ajaib`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? kerangajaib`
                }],
                "title": "─────「 14 」"
              }, {
                "rows": [{
                  "title": `━❰･NEWS MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? news`
                }],
                "title": "─────「 15 」"
              }, {
                "rows": [{
                  "title": `━❰･LOGO & WRITING･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? nulis`
                }],
                "title": "─────「 16 」"
              }, {
                "rows": [{
                  "title": `━❰･NSFW MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? nsfw`
                }],
                "title": "─────「 17 」"
              }, {
                "rows": [{
                  "title": `━❰･PREMIUM MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? premium`
                }],
                "title": "─────「 18 」"
              }, {
                "rows": [{
                  "title": `━❰･QUOTES MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? quotes`
                }],
                "title": "─────「 19 」"
              }, {
                "rows": [{
                  "title":  `━❰･RPG MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? rpg`
                }],
                "title": "─────「 20 」"
              }, {
                "rows": [{
                  "title": `━❰･RANDOM MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? random`
                }],
                "title": "─────「 21 」"
              }, {
                "rows": [{
                  "title":  `━❰･STICKER MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? stiker`
                }],
                "title": "─────「 22 」"
              }, {
                "rows": [{
                  "title":  `━❰･TOOLS MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? tools`
                }],
                "title": "─────「 23 」"
              }, {
                "rows": [{
                  "title":  `━❰･UPDATE MENU･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? update`
                }],
                "title": "─────「 24 」"
              }, {
                "rows": [{
                  "title":  `━❰･VOTING & ABSENT･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍)",
                  "rowId": `${_p}? vote`
                }],
                "title": "─────「 25 」"
                }, {
                "rows": [{
                  "title":  `━❰･EXP & LIMIT･❱━`,
                  "description": "╍╍╍╍╍╍❀❀╍╍╍╍╍╍",
                  "rowId": `${_p}? xp`
                }],
                "title": "─────「 26 」"
                }, {
                "rows": [{
                  "title":  `━❰･OWNER MENU･❱━`,
                  "description": `╍╍╍╍╍╍❀❀╍╍╍╍╍╍`,
                  "rowId": `${_p}? update`
                }],
                "title": "─────「 27 」"
                }, {
                "rows": [{
                  "title":  `Shop`,
                  "description": "Coming Soon",
                  "rowId": `${_p}shop`
                }],
                "title": "Gunakan Dengan Bijak 🔥"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '```Limit```' : '')
                  .replace(/%isPremium/g, menu.premium ? '```Premium```' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      name, weton, week, date, dateIslamic, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    await conn.sendTemplateButtonLoc(m.chat, text.trim(), wm, await(await require('node-fetch')(img)).buffer(), `☰ BACK`, `.menu`, m)
    } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Colombo').format('HH')
  res = "jangan lupa mam yaah, lop yu<3"
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
