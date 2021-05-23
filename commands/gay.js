const Discord = require('discord.js')

module.exports = {
  name: 'gay',
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: gay.`)

  const user = message.mentions.users.first() || message.author;
        
	if(!user) return message.channel.send(`You have not tagged anyone!`)

  var randomNumberRow = (Math.floor(Math.random() * 100))

  message.channel.send(`${user.username} is gay positive with a percentage of: ${randomNumberRow}%. <:pride:781123303267237889>`);
  }
}