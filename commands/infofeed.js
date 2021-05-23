const Discord = require('discord.js')

module.exports = {
	name: 'infofeed',
	async run(client, message, args) {
		console.log(`Ho eseguito il comando: infofeed.`)
		const infofeedembed = new Discord.MessageEmbed()
			.setColor('e8f77f')
			.setTimestamp()
			.setTitle(`:bookmark_tabs: How to give feedback:`)
    	.addFields(
				{name: `What's this?`, value: `A feedback is a review. If you liked the bot, or you like it, please leave us feedback via this command. Advice is also welcome.`, inline: false},
    		{name: `c!feed <text>`, value: `Run this command by substituting "text" for your criticism, advice or other (even the things you like). Thank you!`, inline: true}
			)
    	.setFooter(`- Service of Chill Castle.`);


      message.channel.send(infofeedembed);
	},
}