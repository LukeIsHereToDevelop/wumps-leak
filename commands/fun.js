const Discord = require('discord.js');
 
module.exports = {
  name: "fun",
  async run (client, message, args){
  console.log(`Ho eseguito il comando: fun.`)
  const help = new Discord.MessageEmbed()
  .setColor('f77fef')
  .setTitle('<:wumpusplus:716345263463202877> **Fun:**')
  .setTimestamp()
  .addFields(
		{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!fun\`.`, inline: false},
		{name: `**c!ascii [text]**`, value: `Transform a sentence.`, inline: true},
		{name: `**c!avatar [@user]**`, value: `Show a user's profile picture or gif.`, inline: true},
		{name: `**c!coinflip**`, value: `Flip a coin.`, inline: true},
		{name: `**c!gay [@user]**`, value: `How homosexual is this person?`, inline: true},
		{name: `**c!kill [@user]**`, value: `Kill a user.`, inline: true},
		{name: `**c!kiss [@user]**`, value: `Kiss a user.`, inline: true},
		{name: `**c!slap [@user]**`, value: `Slap a user.`, inline: true},
		{name: `**c!smug [@user]**`, value: `Smug a user.`, inline: true},
		{name: `**c!tickled [@user]**`, value: `Tickled a user.`, inline: true},
		{name: `**c!hug [@user]**`, value: `Hug a user.`, inline: true},
		{name: `**c!meme-eng**`, value: `Send a meme in English.`, inline: true},
		{name: `**c!meme-ita**`, value: `Send a meme in Italian.`, inline: true},
		{name: `**c!nut**`, value: `Roll a nut.`, inline: true},
		{name: `**c!question [question]**`, value: `Ask the bot a question.`, inline: true}
	)
  .setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/unknown.png?raw=true')
  .setFooter(`- Service of Chill Castle.`)

	message.channel.send(help);
  }
}