const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  name: "pause",
  async run (client, message, args) {
		console.log(`Ho eseguito il comando: pause.`)
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: The player has stopped and the queue has been cleared: ${error}`, message.channel);
      }	    
      return message.channel.send(`⏸ Music has been paused!`);
    }
    return sendError(`There is nothing playing in this server.`, message.channel);
  },
};
