const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');


module.exports = {
	name: "afk",	
  async run (client, message, args) {
		console.log(`Ho eseguito il comando: afk.`)
		message.delete()
    let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
       if (!afk[message.guild.id]) afk[message.guild.id] = {
        afk: false,
    };
    var serverQueue = afk[message.guild.id]
       if (serverQueue) {
            serverQueue.afk = !serverQueue.afk;
             message.channel.send(`💤 AFK is **\`${serverQueue.afk === true ? "enabled" : "disabled"}\`**`).then(msg => msg.delete({timeout:5000}));
            return  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
        if (err) console.error(err);
    });
        };
    return sendError(`There is nothing playing in this server.`, message.channel);
  },
};