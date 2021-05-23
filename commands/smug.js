const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "smug",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: smug.`)
  async function work() {
  let owo = (await neko.sfw.smug());

  const smug = new Discord.MessageEmbed()
  .setTitle(`<:emoji_77:800319690257072128> Smug!`)
  .setImage(owo.url)
  .setColor(`75b2da`)
	.setFooter(`- Service of Chill Castle.`)
	.setTimestamp();
	
  message.channel.send(smug);
	}
  work();
}};