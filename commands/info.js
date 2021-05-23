const Discord = require('discord.js')

module.exports = {
  name: 'info',
	async run (client, message, args) {
    console.log(`Ho eseguito il comando: info.`)

    const infoembed = new Discord.MessageEmbed()
	  	.setColor('73e7a1')
    	.setTitle(`📌 Here are the info of the Bot.`)
    	.setTimestamp()
    	.addFields(
				{name: `🔑 Server`, value: `${client.guilds.cache.size}`, inline: true},
    		{name: `👤 Users`, value: `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, inline: true},
    		{name: `💬 Channels`, value: `${client.channels.cache.size}`, inline: true},
    		{name: `❕ Prefix:`, value: `c!`, inline: true},
    		{name: `⛓️ discord.js:`, value: `v12.0.0`, inline: true},
    		{name: `⛓️ node.js:`, value: `v12.6.2`, inline: true},
    		{name: `<:fixing:781065801598763019> Developer:`, value: `<@470373387609571339>`, inline: true},
				{name: `<:wumpusplus:716345263463202877> Support Contact:`, value: `botdiscord.davidcavallaro@gmail.com`, inline: true}
			)
    	.setThumbnail(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a9a4862-df68-40bf-8628-7cb3dfe0103c/dd6kejv-3cd2eb4e-7d3d-47c9-8e98-fba229216e88.png/v1/fill/w_400,h_400,strp/wumpus_by_inklessrambles_dd6kejv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MDAiLCJwYXRoIjoiXC9mXC8xYTlhNDg2Mi1kZjY4LTQwYmYtODYyOC03Y2IzZGZlMDEwM2NcL2RkNmtlanYtM2NkMmViNGUtN2QzZC00N2M5LThlOTgtZmJhMjI5MjE2ZTg4LnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Is5Ov-0rWzw6sbopQQZ0IKDjv3YFJIqLPW7BOyrj2Vo`)
    	.setFooter(`- Service of Chill Castle.`)
        
    message.channel.send(infoembed);
    }
}

//${client.guilds.cache.size}