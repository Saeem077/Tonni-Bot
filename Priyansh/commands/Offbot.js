module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "𝙎𝘼𝙀𝙀𝙈 𝙎𝙃𝙀𝙄𝙆𝙃",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61556537307728"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For Saeem Sheikh", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
