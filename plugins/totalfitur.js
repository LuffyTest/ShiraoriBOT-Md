let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `Total Features at this time: ${totalf}`,m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler
