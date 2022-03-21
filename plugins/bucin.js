let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.reply(m.chat, `“${pickRandom(global.bucin)}”`, '', '', m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "I choose to be alone, not because I'm waiting for the perfect one, but need someone who never gives up.",
  "A single person is created with a partner he has not found.",
  "Singles. Maybe that\'s God's way of saying \'Rest from wrong love\'.",
  "Singles are young people who prioritize their personal development for a classier love later.",
  "I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect because of my strengths.",
  "People\'s boyfriends are our pending soul mates.",
  "Singles must pass. Everything has a time, when all loneliness becomes a togetherness with a halal lover. Be patient.",
  "Romeo was willing to die for juliet, Jack died because he saved Rose. The point is, if you want to live, be single.",
  "I look for people not from their strengths but I look for people from their sincerity.",
  "Madmates are not flip-flops, which are often confused. So continue to be in the proper struggle.",
  "If you become the guitar strings, I don't want to be the guitarist. Because I don't want to dump you.",
  "If loving you is an illusion, then let me imagine forever.",
  "Honey... My job is only to love you, not to fight fate.",
  "When I\'m with you it feels like 1 hour is only 1 second, but when I\'m away from you it feels like 1 day becomes 1 year.",
  "Kolak bananas know sumedang, even though the distance stretches my love will never disappear.",
  "I want to be the only one, not the one.",
  "I can't promise to be good. But I promise to always be by your side.",
  "If I become a representative of the people I will definitely fail, how can I think about the people if the only thing on my mind is you.",
  "Look at my garden, full of flowers. Look at your eyes, my heart is blooming.",
]
