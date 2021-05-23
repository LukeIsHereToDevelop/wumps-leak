const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "hentaigif",
  async run (client, message, args) {
	console.log(`Ho eseguito il comando: hentaigif.`)
  var errMessage = `this channel does not have child protection (NSFW)! Enable the option to see this content.`;
  if (!message.channel.nsfw) {
    message.react(`💢`);
		return message.reply(errMessage)
	}
  async function work() {
  let owo = (await neko.nsfw.randomHentaiGif());

  const hentaigif = new Discord.MessageEmbed()
  .setTitle(`:sweat_drops: Hentai!`)
  .setImage(owo.url)
  .setColor(`e25555`)
	.setFooter(`- Service of Chill Castle.`)
	.setTimestamp();
	
  message.channel.send(hentaigif);
	}
  work();
}};