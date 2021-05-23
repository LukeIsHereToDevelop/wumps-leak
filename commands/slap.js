const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "slap",
  usage: "[command]",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: slap.`)
  async function work() {
  let owo = (await neko.sfw.slap());
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {return message.reply(`you have to mention a user to use the command!`)}
  const slap = new Discord.MessageEmbed()
  	.setTitle(`<:slap:781638006951641108> Slap.`)
		.setDescription(`${message.author} has slapped ${user}`)
  	.setImage(owo.url)
  	.setColor(`e6c381`)
		.setFooter(`- Service of Chill Castle.`)
		.setTimestamp();
	
  message.channel.send(slap);
	}
  work();
}};