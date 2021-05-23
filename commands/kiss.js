const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "kiss",
  usage: "[command]",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: kiss.`)
  async function work() {
  let owo = (await neko.sfw.kiss());
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {return message.reply(`you have to mention a user to use the command!`)}

  const kiss = new Discord.MessageEmbed()
  .setTitle(`<a:kiss2:781269422983348286> Kiss!`)
	.setDescription(`${message.author} has kissed ${user}`)
  .setImage(owo.url)
  .setColor(`ff7070`)
	.setFooter(`- Service of Chill Castle.`)
	.setTimestamp();
	
  message.channel.send(kiss);
	}
  work();
}};