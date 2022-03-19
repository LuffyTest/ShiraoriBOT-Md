let fetch = require("node-fetch")
let axios = require("axios")
let kntl = require("../src/kntl.json")
let handler = async (m, { conn, text }) => {
  let api = (kntl.lolkey)
  let chat = global.DATABASE.data.chats[m.chat]
     try {
      let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=711994c4ea9aa5a0ec39f7f2&query=${text}`) 
      let json = res.data
      //let ress = json.result
      let hsl = `*WELCOME TO THE DARKNESS 👽*\n\n`
      for (let i = 0; i < json.result.length; i++) {
           hsl += `*Title:* ${json.result[i].title}\n`
           hsl += `*Views:* ${json.result[i].views}\n`
           hsl += `*Duration:* ${json.result[i].duration}\n`
           hsl += `*Use the command:*\n`
           hsl += `#xnxx ${json.result[i].link}\n`
           hsl += `*- To download the video*\n\n`
         }
           hsl += '*© Alice 🥀*'
        conn.reply(m.chat, hsl, m)
    }catch(e){
        m.reply("*Something went wrong... please try again*")
        console.log(e)
     }
   }
handler.command = /^(xnxxsearch|searchxnxx)$/
handler.premium = false
handler.limit = true
handler.tags = ['downloader']
module.exports = handler

