module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "𝙎𝘼𝙀𝙀𝙈 𝙎𝙃𝙀𝙄𝙆𝙃",
    description: "",
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}
