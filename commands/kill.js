const Discord = require('discord.js');

module.exports = {
    name: "kill",
    async run (client, message, args) {
      console.log(`Ho eseguito il comando: kill.`)
      let list = [`https://media2.giphy.com/media/Pm4ZMaevvoGhXlm714/giphy.gif`,`https://forum.cfx.re/uploads/default/original/4X/4/0/6/4061d6a243874c6209cc73930f61bec355dcc6d4.gif`,`https://media1.giphy.com/media/j6ZlX8ghxNFRknObVk/200.gif`,`https://media2.giphy.com/media/3oFzmrqh43AvYwn9Cw/giphy.gif`, `https://media.tenor.com/images/7450bdc7a78afe8986b986875764d861/tenor.gif`, `https://media4.giphy.com/media/PnhOSPReBR4F5NT5so/source.gif`, `https://38.media.tumblr.com/tumblr_m3udtmhqav1r9j5e4o2_500.gif`, `https://data.whicdn.com/images/128238272/original.gif`, `https://64.media.tumblr.com/04dd3f2fff12994c6228211c819332b5/tumblr_mo57oiYdgv1ri2cu0o4_500.gif`, `https://i.imgur.com/nBA09Ox.gif`, `http://oheykelly.tumblr.com/post/45790483471/same`];
      var rand = list[Math.floor(Math.random() * list.length)];
      let user = message.mentions.users.first() || client.users.cache.get(args[0]);
      if (!user) {return message.reply(`you have to mention a user to use the command!`)}
      let avatar = message.author.displayAvatarURL({format: `png`});
      const killembed = new Discord.MessageEmbed()
      	.setTitle(`<a:among:781644199153369139> Kill!`)
        .setColor(`000000`)
        .setDescription(`${message.author} has killed ${user}`)
        .setImage(rand)
        .setAuthor(message.author.tag, avatar)
        .setFooter(`- Service of Chill Castle.`)
				.setTimestamp();
        
        message.channel.send(killembed);

    }
}