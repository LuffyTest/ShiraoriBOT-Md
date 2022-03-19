const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let rules = `*Privacy Policy,Terms and Conditions and Q & A of Bot*
━❰･Q & A･❱━*
🔹 Q : How to add Alice bot To to Your Group?
🔸 A : Send The Group Invite link to owners DM.
(type .owner to get owner\'s number)
🔹 Q : How Can I Deploy Alice Bot?
🔸 A : Sorry can't deploy alice wa bot.this is not a opensource project..
(but you can deploy Other bot..This Bot Is also Edited Version Of Other WAbot)
🔹 Q : Why Bot dosen\'t have a lot of commands?
🔸 A : Thisbot is under under developing so plz understand that..
(if you want add command type .report [your questions]
*━❰･Privacy Policy･❱━*
1. BOT will not record user chat history data.
2. BOT will not share user numbers.
3. BOT will not save media sent by users.
4. BOT will not misuse user data.
5. BOT owners have the right to view chat history data from users.
6. The BOT owner has the right to see the status of users.
7. BOT owners can view chat history, and media sent by users.
*━❰･Bot Rules･❱━*
1. Users are prohibited from calling or video calling bot numbers.
2. Users are prohibited from sending various bugs, virtexes, etc. to the bot number.
3. Users are expected not to spam in the use of bots.
4. Users are prohibited from adding bot numbers illegally, to add please contact the owner.
5. Users are expected not to abuse the bot features.
6. Users are prohibited from including bots in important groups (there are teachers, etc.).
*━❰･Bot Terms and Conditions･❱━*
1. The bot will leave the group when it's time to leave.
2. BOT can ban users unilaterally regardless of the wrong users or not.
3. BOT *will not be responsible for anything users do to the bot feature.*
4. BOT will impose penalties: block or ban on users who violate the rules.
5. BOT is responsible for fatal errors in programming and owner.
\`\`\`Alice Bot Multi-Device\`\`\`
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: rules,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/crush.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 Telegram Group',
               url: 'https://t.me/whatsappgang'
             }

           },
           {
             quickReplyButton: {
               displayText: '🎐 sᴘᴇᴇᴅ ᴛᴇsᴛ 🎐',
               id: '.speedtest',
             }
           },     
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|qa|info)$/i

module.exports = handler
