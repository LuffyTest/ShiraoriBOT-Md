const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;ZeroXD;;;'
                    + 'FN:Zero Two\n' // full name
                    + 'ORG:Zero Two;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=94711392491:+94 71 139 2491\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Zero Two 🔮', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
