const Discord = require('discord.js');
const moment = require("moment");
require('moment-duration-format')


module.exports = {
  name: 'uptime',
    async run (client, message, args) {
			console.log(`Ho eseguito il comando: uptime.`)
      let uptime = moment.duration(client.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

      const duration = moment.duration(client.uptime)
   		message.channel.send(`**Wumps** has been active for \`${uptime}\`.`);
    }
}