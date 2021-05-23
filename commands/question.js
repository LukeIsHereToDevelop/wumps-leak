const Discord = require('discord.js');

module.exports = {
  name: "question",
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: question.`)
  let replies = ["Yes.", "No.", "My sources say yes.", "Likely.", "I Don't Know.", "Maybe yes.", "Maybe no.", "The signs say yes.", "Definitely yes.", "Absolutely yes", "Nope.", "Absolutely no.", "Definitely no.", "Be sure.", "Don't be sure.", "My sources say no."];
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(' ')

  if(!question) return message.channel.send('Non hai chiesto nulla!')
  const ballcommand = new Discord.MessageEmbed()
    .setColor('f3ad6a')
    .setTitle('<:question:781108974035796008> Question!')
    .setTimestamp()
    .addFields(
      { name: 'Question:', value: (question)},
      { name: 'Answer:', value: (replies[result])}
    )
    .setFooter('Servizio di ChillWumpusHouse Development.');
        
    message.channel.send(ballcommand);
  }
}