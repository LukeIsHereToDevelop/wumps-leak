const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "boobs",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: boobs.`)
  var errMessage = `this channel does not have child protection (NSFW)! Enable the option to see this content.`;
  if (!message.channel.nsfw) {
    message.react(`💢`);
		return message.reply(errMessage)
	}
  async function work() {
  let owo = (await neko.nsfw.boobs());

  const boobs = new Discord.MessageEmbed()
  .setTitle(`💢 Boobs`)
  .setImage(owo.url)
  .setColor(`e25555`)
	.setFooter(`- Service of Chill Castle.`)
	.setTimestamp();
	
  message.channel.send(boobs);
	}
  work();
}};