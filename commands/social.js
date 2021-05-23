const Discord = require('discord.js')

module.exports = {
	name: 'social',
	async run (client, message, args) {
		console.log(`Ho eseguito il comando: social.`)
		const socialembed = new Discord.MessageEmbed()
		.setColor('eb8bcd')
		.setTitle(`<:devicon:744944199673315368> Here's where you can find me.`)
		.setThumbnail(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a9a4862-df68-40bf-8628-7cb3dfe0103c/dd6kejv-3cd2eb4e-7d3d-47c9-8e98-fba229216e88.png/v1/fill/w_400,h_400,strp/wumpus_by_inklessrambles_dd6kejv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MDAiLCJwYXRoIjoiXC9mXC8xYTlhNDg2Mi1kZjY4LTQwYmYtODYyOC03Y2IzZGZlMDEwM2NcL2RkNmtlanYtM2NkMmViNGUtN2QzZC00N2M5LThlOTgtZmJhMjI5MjE2ZTg4LnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Is5Ov-0rWzw6sbopQQZ0IKDjv3YFJIqLPW7BOyrj2Vo`)
		.addFields(
			{name: '**top.gg:**', value: `Vote me on [top.gg](https://top.gg/bot/729701120854982706/vote).`, inline: true},
			{name: '**dbots:**', value: `Vote me on [dbots](https://dbots.co/bots/729701120854982706).`, inline: true},
			{name: '**discordbotlist:**', value: 'Vote me on [discordbotlist](https://discordbotlist.com/bots/wumps).', inline: true},
			{name: '**discord.bots.gg:**', value: 'Vote me on [discord.bots.gg](https://discord.bots.gg/bots/729701120854982706).', inline: true},
			{name: '**Maiar.ml:**', value: 'Vote me on [maiar.ml](https://maiar.ml/bots/729701120854982706).', inline: true},
			{name: '**bots.ondiscord:**', value: 'Vote me on [bots.ondiscord](https://bots.ondiscord.xyz/bots/729701120854982706)', value: true},
			{name: '**Instagram:**', value: `[This](https://www.instagram.com/chillcastle_/) is my instagram.`, inline: true},
			{name: '**Support Server:**', value: `[This](https://discord.gg/jxh2qxu) is Support Server.`, inline: true},
			{name: '**Contact Dev:**', value: `[david.cavallaro](https://discord.bio/p/CavallaroDavid03)`, inline: true}
		)
		.setTimestamp()
		.setFooter('- Service of Chill Castle.')
		
		message.channel.send(socialembed);
		
	}
}