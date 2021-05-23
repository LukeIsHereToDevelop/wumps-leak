const client = require('discord.js')
const Discord = require('discord.js')
const usedCommand = new Set()

module.exports = {
	name: 'ping',
	cooldown: "300000",
	async run(client, message, args) {
		console.log(`Ho eseguito il comando: ping.`)
		message.delete()
		let timeout = 300000;
		message.channel.send('Sto pingando...').then(sent => {
			sent.edit(`<:wumpusplus:716345263463202877> This is my ping: ${client.ws.ping}ms`).then(message => message.delete({timeout:5000}));
		});
	}
}