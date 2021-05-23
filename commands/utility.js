const Discord = require('discord.js');
 
module.exports = {
    name: "utility",
    async run (client, message, args) {
        console.log(`Ho eseguito il comando: utility.`)
        const help = new Discord.MessageEmbed()
        .setColor('a852f0')
        .setTitle(':flashlight: **Utility:**')
        .setTimestamp()
        .addFields(
					{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!utility\`.`, inline: false},
					{name: `**c!announcement [text]**`, value: `Submit your ad in the channel where you ran the command.\n*You can use [text] (link) to embed a link in a word for exemple \`c!announcement Click [this link](https://www.discord.com)\` to do this: Click [this link](https://www.discord.com).*`, inline: false},
					{name: `**c!feed [text]**`, value: `Leave a review! It will be published on the official server.`, inline: true},
					{name: `**c!ping**`, value: `It shows the speed of the bot.`, inline: true},
					{name: `**c!social**`, value: `Show all useful bot links.`, inline: true},
					{name: `**c!invite**`, value: `Invite me with this link.`, inline: true},
					{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
				)
      	.setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/discord.PNG?raw=true')
      	.setFooter(`- Service of Chill Castle.`)
 
      message.channel.send(help);
    }
}