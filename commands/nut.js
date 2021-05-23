const Discord = require('discord.js');

module.exports = {
  name: "nut", 
  async run (client, message, args) {
    console.log(`Ho eseguito il comando: nut.`)
      message.delete()
      let array = [`1`, `2`, `3`, `4`, `5`, `6`];
 
      const index = Math.floor(Math.random() * (array.length - 1) + 1);
        
  	  message.channel.send(`<:d6:781099895745413120> **${array[index]}**`).then(msg => msg.delete({timeout:5000}))

    }
}