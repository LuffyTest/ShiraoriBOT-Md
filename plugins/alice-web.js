let handler = async m => m.reply(`
☕ *Alice Whatsapp bot* \n\n🍂 *URL :* www.alicebot.tk
`.trim()) // repository
handler.help = ['web']
handler.tags = ['info']
handler.command = /^web|web$/i

module.exports = handler
