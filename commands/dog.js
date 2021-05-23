const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "dog",
  usage: "[command]",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: dog.`)
  async function work() {
  let owo = (await neko.sfw.woof());

  const dog = new Discord.MessageEmbed()
  	.setTitle(`:dog: dog!`)
  	.setImage(owo.url)
  	.setColor(`8b5c2d`)
		.setFooter(`- Service of Chill Castle.`)
		.setTimestamp();

  message.channel.send(dog);
	}
  work();
}};