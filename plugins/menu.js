const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
downlod: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.legth; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.{commands[i].pattern}\n`;
 }
}

let madeMenu = `*Hello ${pushname}*
➤ 📥 *DOWNLOAD*

${menu.download}

➤ 💠 *MAIN*

${menu.main}

➤ 👥 *GROUP*

${menu.groups}

➤ 👑 *OWNER*

${menu.owner}

➤ 🔄 *CONVERT*

${menu.convert}

➤ 🔍 *SEARCH*

${menu.search}

┃━━━━━━━━━━━━━━━━━━━━━✦
┃ ⚙️ Made with ❤️ by
╰─🔥 *_RAMESH DISSANAYAKA_* 🔥
`
  
await conn.sendMessage(from,{image:{url: "https://github.com/prabathrushbot19/RUSH-TD/blob/main/images/main-menu.png?raw=true"},caption:madeMenu},{quoted:mek})

  
  
}catch(e){
console.log(e)
reply(`${e}`)
