const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.video[0];
const url = data.url

let desc = `
🌟 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 🌟    
════════════════════════     
🔮  R U S H - T D  🔮  
      🎧 𝙎𝙊𝙉𝙂 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 🎧  
════════════════════════   

🎼 Let the rhythm guide you... 🎼
🚀 Pow. By RAMESH DISSANAYAKA 🔥
─────────────────────────
🎬 *Title:* ${data.title}
⏱️ *Duration:* ${data.timestamp}
📅 *Uploaded:* ${data.ago}
👀 *Views:* ${data.views.toLocaleString()}
🔗 *Watch Here:* ${data.url}
─────────────────────────
🎼 Made with ❤️ by RAMESH DISSANAYAKA💫
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
// download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send message
 await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio?mpeg"},{quoted:mek})


    

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
