const Discord = require('discord.js');
const got = require("got");

module.exports = {
    name: "animeeeee",
    async run (client, message, args) {
        console.log(`Ho eseguito il comando: anime.`)
        const anime = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/anime/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        anime.setTitle(`<:anime:781070630257950731> Anime!`)
        anime.setURL(`${memeUrl}`)
        anime.setImage(memeImage)
        anime.setColor('ffffff')
				anime.setFooter(`- Service of Chill Castle.`)
				anime.setTimestamp();
        message.channel.send(anime);
    })
}}