const Discord = require('discord.js');
 
module.exports = {
  name: "moderation",
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: moderation.`)
  const help = new Discord.MessageEmbed()
  .setColor('e06f86')
  .setTitle(':shield: **Moderation:**')
  .setTimestamp()
  .addFields(
		{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!moderation\`.`, inline: false},
		{name: `**c!kick [@user] [reason]**`, value: `Kick users form the server.`, inline: true},
		{name: `**c!ban [@user] [reason]**`, value: `Ban users from the server.`, inline: true},
		{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
	)
  .setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/discord.PNG?raw=true')
  .setFooter(`- Service of Chill Castle.`)
 
  message.channel.send(help);
  }
}