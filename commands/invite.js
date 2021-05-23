const Discord = require('discord.js');

module.exports = {
  name: 'invite',
  guildOnly: 'true',
	async run (client, message, args) {
		console.log(`Ho eseguito il comando: invite.`)
  	const embed = new Discord.MessageEmbed()
  		.setTitle('**Inviti**')
			.setColor('WHITE')
  		.setTimestamp()
  		.addFields(
				{name: 'Wumps:', value: `*Invite me with [this](https://discord.com/oauth2/authorize?client_id=729701120854982706&scope=bot&permissions=2081291511) link!*`, inline: true},
				{name: 'Help:', value: `*If you need help go to the [Support Server](https://discord.gg/jxh2qxu)*.`, inline: true},
				{name: '<:devicon:744944199673315368> Developer', value: `*[david.cavallaro](https://discord.bio/p/CavallaroDavid03)*.`, inline: true},
			)
			.setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a9a4862-df68-40bf-8628-7cb3dfe0103c/dd6kejv-3cd2eb4e-7d3d-47c9-8e98-fba229216e88.png/v1/fill/w_400,h_400,strp/wumpus_by_inklessrambles_dd6kejv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MDAiLCJwYXRoIjoiXC9mXC8xYTlhNDg2Mi1kZjY4LTQwYmYtODYyOC03Y2IzZGZlMDEwM2NcL2RkNmtlanYtM2NkMmViNGUtN2QzZC00N2M5LThlOTgtZmJhMjI5MjE2ZTg4LnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Is5Ov-0rWzw6sbopQQZ0IKDjv3YFJIqLPW7BOyrj2Vo')
			.setFooter('- Service of Chill Castle.')

	  message.channel.send(embed);

}}