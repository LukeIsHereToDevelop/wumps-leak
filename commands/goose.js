const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "goose",
  usage: "[command]",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: goose.`)
  async function work() {
  let owo = (await neko.sfw.goose());

  const goose = new Discord.MessageEmbed()
  	.setTitle(`:duck: goose!`)
  	.setImage(owo.url)
  	.setColor(`288a52`)
		.setFooter(`- Service of Chill Castle.`)
		.setTimestamp();

  message.channel.send(goose);
	}
  work();
}};