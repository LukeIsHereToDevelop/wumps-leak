const Discord = require('discord.js');

module.exports = {
    name: "kick",
    async run (client, message, args) {
        console.log(`Ho eseguito il comando: kick.`)

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`You cannot execute this command! You don\'t have the necessary permissions!`)
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`You cannot execute this command! You don\'t have the necessary permissions!`)

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(`${message.author}, please specify a user to perform the action on.`);

        if(!member) return message.channel.send(`I can\'t find this user. I\'m sorry.`);
        if(!member.kickable) return message.channel.send(`I cannot ban this user. He may have a higher role than mine or I may not have the necessary permissions.`);

        if(member.id === message.author.id) return message.channel.send(`You can\'t kick yourself!`);

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = `Not specified`;

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send(`:x: Something went wrong...`)
        })
				
				const toKick = message.mentions.members.first() || bot.users.cache.find(toBan => toBan.tag === args.slice(1).join(" "))|| await bot.fetchUser(args[1])
        
				const kickembedserver = new Discord.MessageEmbed()
					.setTitle('👢User Expelled.')
					.setColor(`dd5437`)
					.setThumbnail(member.user.displayAvatarURL())
			  	.addFields(
						{name: `User:`, value: member, inline: true},
    				{name: `Moderator:`, value: message.author, inline: true},
						{name: `Reason:`, value: reason, inline: true}
					)
					.setFooter(`- Service of Chill Castle.`)
        	.setTimestamp()
        const kickembedmod = new Discord.MessageEmbed()
        	.setTitle(`👢 Warning! You performed an action on ${message.guild.name}.`)
					.setColor(`dd5437`)
        	.setThumbnail(member.user.displayAvatarURL())
			  	.addFields(
						{name: `User:`, value: member, inline: true},
    				{name: `Moderator:`, value: message.author, inline: true},
						{name: `Reason:`, value: reason, inline: true}
					)
        	.setFooter('- Service of Chill Castle.')
        	.setTimestamp()
				toKick.send(`You are kicked from **${message.guild.name}** by **${message.author}** for **${reason}**.`)
        message.channel.send(kickembedserver);
        message.author.send(kickembedmod);
				message.guild.members.kick(toKick);
    }
}