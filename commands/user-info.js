const Discord = require('discord.js');
const moment = require("moment");
const ms = require("ms");

module.exports = {
	name: 'userinfo',
	async run (client, message, args) {
		console.log(`Ho eseguito il comando: userinfo.`)		
		let taggedUser = message.mentions.users.first();
		const user = message.mentions.users.first() || message.author;
  	const status = {
    	online: "Online",
	    idle: "Idle",
    	dnd: "Do not Disturb",
    	offline: "Offline"
  	}
		let member = message.guild.member(message.mentions.users.first()) || message.member;
		var game = "Not active";
  	if(!member.presence.game ){game = "No game is played."}
		else {game = member.presence.game.name}
		if (!message.mentions.users.size) {
            return message.reply('you have to mention someone.');
        }

		const userinfo = new Discord.MessageEmbed()
		.setColor('73e7a1')
		.setTitle(`📍 Here is the information.`)
		.setThumbnail(user.avatarURL())
		.addField("ℹ️ **Username:**", `${user.username}`, true)
		.addField("➰ **Username & Tag:**", `${user.tag}`, true)
		.addField("🆕 **Created:**", `${user.createdAt}`, false)
		.addField(":blush: Joined:", `${moment(member.user.joinedAt).format("dddd, MMMM Do YYYY, h:mm A" , Date.now())}`, true)
		.addField(":speech_balloon: **Last message:**", `${user.lastMessage}`, true)
		.addField("🆔 **ID:**", `${user.id}`, true)
		.addField("<:online:780354088801140738> **Status:**", `${status[member.user.presence.status]}`, true)
		.addField(":video_game: **Game:**", `${game}`, true)
		.setTimestamp()
    .setFooter('- Service of Chill Castle.')

    message.channel.send(userinfo);
    
	},
}