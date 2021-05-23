const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  name: "now",
	async run (client, message, args) {
	console.log(`Ho eseguito il comando: now.`)
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
  let song = serverQueue.songs[0]
  let thing = new MessageEmbed()
    .setAuthor("Now Playing")
    .setThumbnail(song.img)
    .setColor("89e7a5")
    .addFields(
			{name: `Name`, value: song.title, inline: false},
      {name: `Requested by`, value: song.req.tag, inline: false}
		)
    .setFooter(`- Service of Chill Castle`)
  return message.channel.send(thing)
  },
};
