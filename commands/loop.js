const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  name: "loop",
  usage: "loop",
  aliases: ["l"],
  async run (client, message, args) {
		console.log(`Ho eseguito il comando: loop.`)
    const serverQueue = message.client.queue.get(message.guild.id);
      if (serverQueue) {
        serverQueue.loop = !serverQueue.loop;
        return message.channel.send(`🔁 Loop is: **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**.`);
      };
    return sendError("There is nothing playing in this server.", message.channel);
  },
};
