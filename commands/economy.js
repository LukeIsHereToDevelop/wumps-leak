const Discord = require('discord.js');
 
module.exports = {
    name: "economy",
    async run (client, message, args) {
        console.log(`Ho eseguito il comando: economy.`)
        const help = new Discord.MessageEmbed()
        .setColor('f77fef')
        .setTitle('<:nitro:759764475355856896> **Economy:**')
        .setTimestamp()
        .addFields(
					{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!economy\`.`, inline: false},
					{name: `**c!work**`, value: `Worked.\n**OFFLINE**`, inline: true},
					{name: '**c!bal**', value: 'View your balance.\n**OFFLINE**', inline: true},
					{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
				)
      	.setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/discord.PNG?raw=true')
      	.setFooter(`- Service of Chill Castle.`)
 
      message.channel.send(help);
    }
}