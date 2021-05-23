const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "nsfw",
  usage: "[command]",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: nsfw.`)
	var errMessage = `this channel does not have child protection (NSFW)! Enable the option to see this content.`;
  if (!message.channel.nsfw) {
    message.react('💢');
    return message.reply(errMessage).then(msg => {msg.delete({ timeout: 3000 })})
	}

  async function work() {
  let owo = (await neko.nsfw.classic());
  const nsfw = new Discord.MessageEmbed()
  	.setTitle(`💢 NSFW.`)
  	.setImage(owo.url)
  	.setColor(`e25555`)
		.setFooter(`- Service of Chill Castle.`)
		.setTimestamp();
	
  message.channel.send(nsfw);
	}
  work();
}};