const Discord = require('discord.js');

module.exports = {
	name: "ascii",
	async run (client, message, args) {
		console.log(`Ho eseguito il comando: ascii.`)
  	const Discord = require('discord.js')
  	message.delete()
  	const figlet = require('figlet')
    	if(!args[0]) return message.channel.send(`Please, provide a text to transform.`);

    	let question = args.slice(0).join(' ')

    message.channel.send(`\`\`\`\n\n${question}\n\n\`\`\``).then(msg => msg.delete({timeout:5000}));
  }
}