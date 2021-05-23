const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "tickled",
  usage: "[command]",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: tickled.`)
  async function work() {
  let owo = (await neko.sfw.tickle());
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {return message.reply(`you have to mention a user to use the command!`)}
  const tickled = new Discord.MessageEmbed()
  	.setTitle(`<:AttackedPandaRee:795021682226102282> Tickled.`)
		.setDescription(`${message.author} has trickled ${user}`)
  	.setImage(owo.url)
  	.setColor(`e6c381`)
		.setFooter(`- Service of Chill Castle.`)
		.setTimestamp();
	
  message.channel.send(tickled);
	}
  work();
}};