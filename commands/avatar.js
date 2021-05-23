const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
	async run (client, message, args) {
        console.log(`Ho eseguito il comando: Avatar.`)

        const user = message.mentions.users.first() || message.author;
        const avatarembed = new Discord.MessageEmbed()
        .setTitle('Avatar')
        .setColor('#ffffff')
        .setDescription(`Here is the avatar of ${user} (${user.id}).\n**Formats:** [**.webp**](${user.displayAvatarURL({ format: 'webp' })}) - [**.png**](${user.displayAvatarURL({ format: 'png' })}) - [**.jpg**](${user.displayAvatarURL({ format: 'jpg' })}) - [**.gif**](${user.displayAvatarURL({ format: 'gif' })})`)
        .setFooter('- Service of Chill Castle.')
        .setImage(user.displayAvatarURL());

        message.channel.send(avatarembed)
    }
}