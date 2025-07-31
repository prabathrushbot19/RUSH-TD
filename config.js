const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "mYswxR5b#1PmpROp3WV2c-zp06nOuGLoftiDHHoPXau-FcczewFE",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/prabathrushbot19/RUSH-TD/blob/main/images/Alive.png?raw=true",
    ALIVE_MSG: process.env.ALIVE_MSG || `
╔═══◉ *🟢 STATUS: ONLINE* ◉═══╗
║  𝙷𝚎𝚢 𝙳𝚞𝚍𝚎, 𝙸’𝚖 𝚑𝚎𝚛𝚎 𝚝𝚘 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞.  
║  𝙰𝚜𝚔 𝚖𝚎 𝚊𝚗𝚢𝚝𝚑𝚒𝚗𝚐! 💬
╚══════════════════════╝

🧾 *PROFILE INFORMATION*
┌──────── ⋆⋅☆⋅⋆ ────────┐
│ 🔐 *Owner:* Ramesh Dissanayaka  
│ 👤 *Botname:* RUSH-TD  
│ ⚡ *Bio:* Powerful WhatsApp Bot  
│ 🧩 *Role:* Wizard Lord 🧙‍♂️  
└──────── ⋆⋅☆⋅⋆ ────────┘

🚀 Powered By *RAMESH*
*DISSANAYAKA* 🔥
`,  
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",

    
};
