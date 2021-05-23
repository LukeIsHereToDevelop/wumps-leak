const Discord = require('discord.js');

module.exports = {
    name: "alert",
 
    async run (client, message, args) {
      console.log(`Ho eseguito il comando: alert.`)
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You cannot execute this command! You don't have the necessary permissions (administrator)!`)
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You cannot execute this command! You don't have the necessary permissions (administrator)!`)
      let question = args.slice(0).join(' ')
 
      const avvisoembed = new Discord.MessageEmbed()
      .setTitle(`<:annuncio:781065802777886740> New announcement by ${message.author.username}!`)
      .setColor(`e5e17a`)
			.setDescription(question)
			.setFooter(`- Service of Chill Castle.`)
			.setTimestamp();
        
      message.channel.send(avvisoembed)

    }
}