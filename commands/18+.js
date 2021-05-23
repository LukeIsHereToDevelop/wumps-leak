const Discord = require('discord.js');
 
module.exports = {
    name: "18+",
    async run (client, message, args) {
        console.log(`Ho eseguito il comando: 18+.`)
        const help = new Discord.MessageEmbed()
        .setColor('e25555')
        .setTitle('💢 **18+:**')
        .setTimestamp()
        .addFields(
					{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!18+\`.`, inline: false},
					{name: `**c!boobs**`, value: `Submit an image or gif of a hentai boobs.`, inline: false},
					{name: `**c!hentai**`, value: `Submit an image of a hentai.`, inline: true},
					{name: `**c!hentaigif**`, value: `Submit an gif of a hentai.`, inline: true},
					{name: `**c!nsfw**`, value: `Submit an image or gif of a classic hentai nsfw.`, inline: true},
					{name: `**c!pussy**`, value: `Submit a picture or gif of a pussy.`, inline: true},
					{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
				)
      	.setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/discord.PNG?raw=true')
      	.setFooter(`- Service of Chill Castle.`)
 
      message.channel.send(help);
    }
}