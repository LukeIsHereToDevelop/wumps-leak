const Discord = require('discord.js');
const got = require("got");

module.exports = {
  name: "meme-ita",
  async run (client, message, args) {
    console.log(`Ho eseguito il comando: meme-ita.`)
			const embed = new Discord.MessageEmbed()
			got('https://www.reddit.com/r/memesITA/random/.json').then(response => {
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let memeUrl = `https://reddit.com${permalink}`;
			let memeImage = content[0].data.children[0].data.url;
			let memeTitle = content[0].data.children[0].data.title;
			let memeUpvotes = content[0].data.children[0].data.ups;
			let memeDownvotes = content[0].data.children[0].data.downs;
			let memeNumComments = content[0].data.children[0].data.num_comments;
				embed.setTitle(`<:CoolPandaRee:795021656397053983> Meme!`)
				embed.setImage(memeImage)
				embed.setColor('e07e1a')
				embed.setTimestamp()
				embed.setFooter(`- Service of Chill Castle.`)
    	message.channel.send(embed);
    })
}}