module.exports.config = {
    name: "info",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "nazrul",
    description: "",
    commandCategory: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/8RnuTWw.jpeg",];
  
var callback = () => api.sendMessage({body:` —͟͞͞★𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡 𝙎𝘼𝙀𝙀𝙈亗
==============================
𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: ${global.config.PREFIX}
𝗕𝗢𝗧 𝗡𝗔𝗠𝗘:${global.config.BOTNAME}
𝗔𝗗𝗠𝗜𝗡:𝙎𝘼𝙀𝙀𝙈 𝙎𝙃𝙀𝙄𝙆𝙃 (𝙀𝘿𝙄𝙏𝙊𝙍)
𝗔𝗗𝗗𝗥𝗘𝗦𝗦:𝘿𝙃𝘼𝙆𝘼,𝙈𝙐𝙉𝙎𝙃𝙄𝙂𝘼𝙉𝙅
=========𝗖𝗢𝗡𝗡𝗧𝗔𝗖𝗧==========
==============================
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞:https://www.facebook.com/editor.saeem077
𝗠𝗔𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗟𝗜𝗡𝗞:https://m.me/editor.saeem077
==============================
—͟͞͞★𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙄𝙉𝙂 𝙈𝙔 𝘽𝙊𝙏
==============================`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
