const Discord = require('discord.js')

module.exports = {
	name: 'feed',
	cooldown: '300000',
	async run (client, message, args) {
		console.log(`Ho eseguito il comando: feed.`)
		message.delete();
		let timeout = 300000;
		const feedembed = new Discord.MessageEmbed()
			.setColor('a17ff7')
    	.setTitle(`:thumbsup: Ehy!`)
    	.setTimestamp()
			.addFields(
				{name: `<:innamorato:781065801960128523> Thank You!`, value: `You ran a Wumps feed! If you want to continue helping us, visit the c! Social command. See you soon!`, inline: false}
			)
    	.setFooter(`- Service of Chill Castle.`);
		
		const feedback = args.slice(0).join(" ");
		const feedbackembed = new Discord.MessageEmbed()  
			.setTitle(`<:discordemoji:630378502327238656> Nuova Recensione!`)
			.setColor(`a17ff7`)
			.setTimestamp()
   		.setFooter(`- Service of Chill Castle. From ${message.author.username}#${client.user.discriminator} - ${message.guild.name}.`)
    	.setDescription(feedback);
        
			client.channels.cache.get(`743764706564767755`).send(feedbackembed)
      message.channel.send(feedembed);
      message.author.send(`Thank you for reviewing the bot! <:innamorato:781065801960128523>`);
	},
}