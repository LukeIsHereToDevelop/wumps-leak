const Discord = require('discord.js');
 
module.exports = {
    name: "animal",
    async run (client, message, args) {
        console.log(`Ho eseguito il comando: animal.`)
        const help = new Discord.MessageEmbed()
        .setColor('8a5e3f')
        .setTitle(':koala: **Animal**')
        .setTimestamp()
        .addFields(
					{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!animal\`.`, inline: false},
					{name: `**c!cat**`, value: `Show a random photo or gif of a cat.`, inline: true},
					{name: `**c!dog**`, value: `Show a random photo or gif of a dog.`, inline: true},
					{name: '**c!lizard**', value: 'Show a random photo or gif of lizard.', inline: true},
					{name: '**c!goose**', value: 'Show a random photo or gif of goose.', inline: true},
					{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
				)
      	.setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/discord.PNG?raw=true')
      	.setFooter(`- Service of Chill Castle.`)
 
      message.channel.send(help);
    }
}