const Discord = require('discord.js');
 
module.exports = {
  name: "music",
  async run (client, message, args) {
  console.log(`Ho eseguito il comando: music.`)
  const help = new Discord.MessageEmbed()
  .setColor('e01a42')
  .setTitle(':headphones: **Music**')
  .setTimestamp()
  .addFields(
		{name: `Wumps Commands:`, value: `To check a section use \`c![section]\` for exemple \`c!music\`.`, inline: false},
		{name: `**c!play [song link/name]**`, value: `Play a song with a link or name.`, inline: true},
		{name: `**c!loop**`, value: `Make the song you are listening to repeat.`, inline: true},
		{name: `**c!pause**`, value: `Pause the song you are listening to.`, inline: true},
		{name: `**c!resume**`, value: `Resume the song you are listening to.`, inline: true},
		{name: `**c!stop**`, value: `Stop the playlist.`, inline: true},
		{name: '**c!leave**', value: `Leaves the room.`, inline: true},
		{name: `**c!skip**`, value: `Skip the song that is playing and go to the next one.`, inline: true},
		{name: `**c!lyrics**`, value: `Shows the lyrics of the song that is playing.`, inline: true},
		{name: `**c!now**`, value: `Shows the song being played.`, inline: true},
		{name: `**c!queue**`, value: `Show the playlist.`, inline: true},
		{name: `**c!remove [track number]**`, value: `Remove a song from the playlist.`, inline: true},
		{name: ':new: **Forum:**', value: 'Click [here](https://forum.evostack.cloud/public/) to go to the developer forum!'}
	)
  .setImage('https://github.com/DavidCavallaro/wumpus-immagine/blob/main/discord.PNG?raw=true')
  .setFooter(`- Service of Chill Castle.`) 
  message.channel.send(help);
  }
}