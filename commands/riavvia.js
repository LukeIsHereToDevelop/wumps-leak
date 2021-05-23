const Discord = require('discord.js')

module.exports = {
	name: 'riavvia',
	args: true,
	usage: '[Nome del Comando]',
	async run (client, message, args) {
		console.log(`Ho eseguito il comando: riavvia.`)
		message.delete()
		if (!message.author.id === '') return message.channel.send(`${message.author.username} Non puoi usare il comando __**riavvio**__.`)
                               
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`Nessun comando con questo nome o alias: \`${commandName}\`, ${message.author}!`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Reload: \'${command.name}\'. Status: success. By: ${message.author}.`);
		} catch (error) {
			console.log(error);
			message.channel.send(`Reload: \`${command.name}\`. Status: aborted. Error:\`${error.message}\`. By: ${message.author}.`);
		}
	},
};