const Client = require('discord.js');

module.exports = {
  name: 'create-role',
	cooldown: '300000',
	async run (client, message, args) {
	let timeout = 300000;
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`${message.author.username} Non hai il permesso di usare il comando __**crea-ruolo**__.`)

  if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send('Non ho il permesso per creare ruoli.')
	let question = args.slice(0).join(' ')
	if(!question) return message.channel.send('You did not enter the name of the role!')

  message.guild.roles.create({ data: { name: (question)} });

  message.channel.send(`Il ruolo "${question}" è stato creato.`)
	}
}