const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "mYswxR5b#1PmpROp3WV2c-zp06nOuGLoftiDHHoPXau-FcczewFE",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/prabathrushbot19/RUSH-TD/blob/main/images/Alive.png?raw=true",
    ALIVE_MSG: process.env.ALIVE_MSG || "╭───〔 🤖 Bot Status 〕───⬣
│
│ 🔹 Bot Name: 🔮 RUSH-TD 🔮
│ 🔹 Status: ✅ Online & Active
│ 🔹 Ping: 0 ms
│ 🔹 Uptime: 00:02:25
│ 🔹 Platform: linux
│ 🔹 Owner: RAMESH DISSANAYAKA
│ 🔹 Version: 1.0.0
│
╰───────────────⬣


🚀 Powered By  RAMESH DISSANAYAKA 🔥"
};
