const Discord = require('discord.js');

module.exports = {
  name: "ban",
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: ban.`)
  	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You cannot execute this command! You don\'t have the necessary permissions!`)
  	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`You cannot execute this command! You don\'t have the necessary permissions!`)
  	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  	if(!args[0]) return message.channel.send(`${message.author}, please, specify a user to perform the action on.`);
    if(!member) return message.channel.send(`I can\'t find this user. I\'m sorry.`);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`I cannot ban this user. He may have a higher role than mine or I may not have the necessary permissions.`);
    if(member.id === message.author.id) return message.channel.send(`You cannot ban yourself!`);
    let reason = args.slice(1).join(" ");
    if(reason === undefined) reason = `Not specified`;
    member.ban(reason)
		const toBan = message.mentions.members.first() || bot.users.cache.find(toBan => toBan.tag === args.slice(1).join(" "))|| await bot.fetchUser(args[1])
    const banembedserver = new Discord.MessageEmbed()
    	.setTitle(`<a:ban:781065804279709706> Banned User.`)
			.setColor(`dd5437`)
    	.setThumbnail(member.user.displayAvatarURL())
    	.addField(`User:`, member, true)
    	.addField(`Moderator:`, message.author, true)
      .addField(`Reason:`, reason, true)
    	.setFooter(`- Service of Chill Castle.`)
    	.setTimestamp()
    const banembedmod = new Discord.MessageEmbed()
	    .setTitle(`<a:ban:781065804279709706> Warning! You performed an action on ${message.guild.name}.`)
			.setColor(`dd5437`)
      .setThumbnail(member.user.displayAvatarURL())
  	  .addField(`User:`, member, true)
      .addField(`Moderator:`, message.author, true)
    	.addField(`Reason:`, reason, true)
	    .setFooter(`- Service of Chill Castle.`)
	    .setTimestamp()
		toBan.send(`You are banned from **${message.guild.name}** by **${message.author}** for **${reason}**.`)
    message.channel.send(banembedserver);
    message.author.send(banembedmod);
		message.guild.members.ban(toBan)
  }
}