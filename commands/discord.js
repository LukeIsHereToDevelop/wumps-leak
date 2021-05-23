const Discord = require('discord.js')

module.exports = {
	name: 'discord',
	guildOnly: 'true',
	async run (client, message, args) {
		console.log(`Ho eseguito il comando: discord-help.`)
		const discord = new Discord.MessageEmbed()
      .setTitle(`Supporto!`)
		  .setColor(`e57452`)
		  .setDescription(`───✱.｡:｡✱.:｡✧.｡✰.:｡✧.｡:｡.｡✱ ───\n :part_alternation_mark: __Problemi con Discord?__ :part_alternation_mark: \n ───✱.｡:｡✱.:｡✧.｡✰.:｡✧.｡:｡.｡✱ ───\n⤷ ⁞ <:attenzione:728931668198424576> *ChillWumpusHouse offre assistenza 24/7 all’intera utenza di Discord.*\n⤷ ⁞ <:wumpusmago:716345263748415579> *<@470373387609571339> e <@648069312548044809> sono qualificati e sicuri. Contrari a ogni tipo di minaccia, grieff/raid/flood/spam, sono disposti sempre ad aiutare.*\n⤷ ⁞ <:HypeSquad:714948509803085824> *Aiutano nel settings di Bot adibiti alla Moderazione e/o qualsiasi altro scopo.*\n⤷ ⁞ <:attenzione:728931668198424576> **NON SONO MEMBRI DELLO STAFF UFFICIALE DI DISCORD.**\n-> [david.cavallaro](https://discord.bio/p/CavallaroDavid03)\n\n__For convenience this is only available for Italian users.__`)
      .setFooter(`- Service of Chill Castle.`)
			.setTimestamp();

    message.channel.send(discord);
	},
}