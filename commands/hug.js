const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "hug",
  usage: "[command]",
  run: async (client, message, args) => {
	console.log(`Ho eseguito il comando: hug.`)
  async function work() {
  let owo = (await neko.sfw.hug());
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {return message.reply(`you have to mention a user to use the command!`)}

  const hug = new Discord.MessageEmbed()
  .setTitle(`<:AttackedPandaRee:795021682226102282> Hug!`)
	.setDescription(`${message.author} has hugged ${user}`)
  .setImage(owo.url)
  .setColor(`ff7070`)
	.setFooter(`- Service of Chill Castle.`)
	.setTimestamp();
	
  message.channel.send(hug);
	}
  work();
}};