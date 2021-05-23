const Discord = require('discord.js')

module.exports = {
  name: 'shipppp',
	async run (client, message, args) {
        console.log(`Ho eseguito il comando: Ship.`)
        let replies = ["######################------------------ 55%","######################################-- 96%","#######--------------------------------- 18%","###################--------------------- 48%","##########------------------------------ 26%","############################------------ 71%","##########------------------------------ 25%","#####################------------------- 53%","#############--------------------------- 34%","#########################--------------- 64%","####################-------------------- 50%","###################--------------------- 48%","#######--------------------------------- 19%","#####################------------------- 53%","######---------------------------------- 17%","########################---------------- 61%","###########################------------- 69%","###################################----- 88%","####################################---- 91%"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(' ')

        if(!question) return message.channel.send('non hai dato una coppia!')

        const shipembed = new Discord.MessageEmbed()
        .setColor('f3ad6a')
        .setTitle('<:innamorato:781065801960128523> Nuova coppia!')
        .setTimestamp()
        .addFields(
          { name: 'Ship:', value: (question)},
          { name: 'Esito:', value: (replies[result])}
        )
        .setFooter('- Servizio di ChillWumpusHouse Development.')

        message.channel.send(shipembed)

	}
}