const Discord = require('discord.js')

module.exports = {
  name: "coinflip",
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: coinflip.`)
	message.delete()
  let array = [`<:Coin:755809515965906974> Head.`, `<:Coin:755809515965906974> Tails.`, `<:Coin:755809515965906974> Head.`, `<:Coin:755809515965906974> Head.`, `<:Coin:755809515965906974> Tails.`];

  const index = Math.floor(Math.random() * (array.length - 1) + 1);
        
  message.channel.send(`**${array[index]}**`).then(msg => msg.delete({timeout:5000}));
  }
}