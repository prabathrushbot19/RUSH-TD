const { cmd, commands } = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    react: "🎶",
    desc: "download song",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, reply }) => {
    try {
        if (!q) return reply("please give me url or title")
        const search = await yts(q)
        const data = search.videos[0]
        if (!data) return reply("Song not found!")

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
🎬 *title:* ${data.title}
⏱️ *description:* ${data.description}
📅 *time:* ${data.timestamp}
👀 *Views:* ${data.views}
─────────────────────────
🎼 Made with ❤️ by RAMESH DISSANAYAKA💫
        `
        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek })

        // download audio
        let down = await fg.yta(url)
        // Log response for debugging
        console.log("fg.yta output:", down)

        // Try all possible keys for the mp3 url
        let downloadUrl = down?.dl_url || down?.url || (down?.audio && down.audio.url)

        if (!downloadUrl || typeof downloadUrl !== "string") {
            return reply("Failed to download audio. Try another song/link. (No valid download URL returned!)")
        }

        // send audio message
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek })

    } catch (e) {
        console.log(e)
        reply("An error occurred: " + e.message)
    }
})
