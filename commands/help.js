const Discord = require('discord.js');
 
module.exports = {
  name: "help",
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: help.`)
  const help = new Discord.MessageEmbed()
  .setColor('7fe0f7')
  .setTitle('**Commands List**')
  .setTimestamp()
  .addFields(
		{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!moderation\`.`, inline: false},
		{name: `:shield: **Moderation:**`, value: `Keep your server safe with these moderation commands.\n**2 commands**`, inline: true},
		{name: `<:wumpusplus:716345263463202877> **Fun:**`, value: `Spend time with these commands and have fun with your friends!\n**14 commands.**`, inline: true},
		{name: `:flashlight: **Utility:**`, value: `Use these commands useful for you and your server.\n**3 commands**`, inline: true},
		{name: `🔎 **Information:**`, value: `Type these commands to receive information.\n**5 commands.**`, inline: true},
		{name: `:moneybag: **Economy:**`, value: `Build an economy with these commands!\n**2 commands.**`, inline: true},
		{name: `:headphones: **Music:**`, value: `Play your favorite songs by listening to them through these commands.\n**8 commands**`, inline: true},
		{name: `💢 **18+:**`, value: `Have fun with these hentai! Don't use too many!\n**5 commands.**`, inline: true},
		{name: `:koala: **Animal:**`, value: `Show photos and gifs of animals.\n**4 commands.**`, inline: true},
		{name: `<:fixing:781065801598763019> **Developer:**`, value: `[david.cavallaro](https://discord.bio/p/CavallaroDavid03)`, inline: true},
		{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
	)
  .setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/IMG_20210127_142013.jpg?raw=true')
  .setFooter(`- Service of Chill Castle.`)

  message.channel.send(help);
	}
}