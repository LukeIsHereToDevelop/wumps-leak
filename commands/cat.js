const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "cat",
  usage: "[command]",
  run: async (client, message, args) => {
	console.log(`Ho eseguito il comando: cat.`)
  async function work() {
  let owo = (await neko.sfw.meow());

  const cat = new Discord.MessageEmbed()
  	.setTitle(`<:maceblush:726951470611824655> Cat!`)
  	.setImage(owo.url)
  	.setColor(`9b988c`)
		.setFooter(`- Service of Chill Castle.`)
		.setTimestamp();

  message.channel.send(cat);
	}
  work();
}};