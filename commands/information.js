const Discord = require('discord.js');
 
module.exports = {
  name: "information",
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: information.`)
  const help = new Discord.MessageEmbed()
  .setColor('f77fa1')
  .setTitle('🔎 **Information:**')
  .setTimestamp()
  .addFields(
		{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!information\`.`, inline: false},
		{name: `**c!discord**`, value: `Support contact for the creation of a Discord bot or server. Support contact for the creation of a Discord bot or server. ONLY FOR ITALIANs.`, inline: false},
		{name: `**c!info**`, value: `Show bot statistics.`, inline: true},
		{name: `**c!searchanime [name]**`, value: `Find information about the anime you want.`, inline: true},
		{name: `**c!serverinfo**`, value: `Show server information.`, inline: true},
		{name: `**c!userinfo [@user]**`, value: `Show the information of the mentioned user.`, inline: true},
		{name: `**c!social**`, value: `Show all useful bot links.`, inline: true},
		{name: `**c!infofeed**`, value: `Learn how to do a bot review.`, inline: true},
		{name: `**c!uptime**`, value: `Show how long the bot has been online.`, inline: true},
		{name: `**c!invite**`, value: `Invite me with this link.`, inline: true},
		{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
	)
  .setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/discord.PNG?raw=true')
  .setFooter(`- Service of Chill Castle.`)
 
  message.channel.send(help);
  }
}