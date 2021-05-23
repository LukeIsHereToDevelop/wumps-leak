const Discord = require('discord.js')
//\nServer Icon URL: ${message.guild.iconURL({ dynamic: 'true'})}
//\nAFK Channel: ${message.guild.afkChannel}
//\nAFK Timeout: ${message.guild.afkTimeout}ms

module.exports = {
  name: 'serverinfo',
  async run (client, message, args) {
		console.log(`Ho eseguito il comando: serverinfo.`)		
      const serverinfo = new Discord.MessageEmbed()
    	  .setColor('b373e7')
  	    .setTitle(`🔰 Here is the server information.`)
        .setThumbnail(message.guild.iconURL())
        .addFields(
					{name: '🖋️ **Name:**', value: `${message.guild.name}`, inline: true},
					{name: ':globe_with_meridians: **Region:**', value: `${message.guild.region.toUpperCase()}`, inline: true},
					{name: '🔠 **ID:**', value: `${message.guild.id}`, inline: true},
					{name: '👶 **Creation date:**', value: `${message.guild.createdAt}`, inline: false},
					{name: ':crown: **Owner:**', value: `<@${message.guild.ownerID}>`, inline: true},
      		{name: '👥 **Members:**', value: `${message.guild.memberCount}`, inline: true},
					{name: '💬 **Channels** *(including categories)*:', value: `${message.guild.channels.cache.size}`, inline: true},
					{name: '😀 **Emoji**:', value: `${message.guild.emojis.cache.size}`, inline: true},
					{name: '💫 **Roles:**', value: `${message.guild.roles.cache.size}`, inline: true},
					{name: ':sleeping: **AFK Channel:**', value: `${message.guild.afkChannel}`, inline: true},
					{name: '⛑️ **Security Level:**', value: `${message.guild.verificationLevel}`, inline: true},
				)
				.setTimestamp()
				.setFooter('- Service of Chill Castle.')
      message.reply(serverinfo);
    }
}