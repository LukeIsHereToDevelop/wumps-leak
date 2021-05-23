require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const fetch = require('node-fetch');
const got = require('got');
const { RichEmbed  } = require('discord.js');

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX
}


fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Carico il comando: "+commandName)
  });
});

client.on("guildCreate", guild => {
	console.log("Sono entrato in: " + guild.name);
	const joinEmbed = new Discord.MessageEmbed()
		.setTitle('EHY!')
		.setDescription(`Sono stato aggiunto a un nuovo server! Ora gestisco **${guild.memberCount}** membri in più!`)
		.setFooter(`- Service of Chill Castle.`)
		.setColor('WHITE');
	client.channels.cache.get("707324440752685106").send(joinEmbed);
});
//chillcastle
client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("503190685118103574");
  let channel = await client.channels.cache.get("707324440752685106");
  if (guild != member.guild) { }
  else {

    channel.send(`Benvenuto/a su **Chill Castle** ${member.user}! Vai in <#713071877282725939> per abbellire il tuo profilo! Corri in <#715301048650170449> per vedere l'ultimo evento disponibile! Puoi andare in <#707143154297602108> per saperne di più sul server. Buona permanenza! <a:wel:804839830029991936><a:come:804839830290825266>`);

  }
});
//hokuri
client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("742500462061813843");
  let channel = await client.channels.cache.get("742644838012289045");
  if (guild != member.guild) { }
  else {

    channel.send(`Benvenuto/a su **Hoitsu** ${member.user}! Vai in <#742644856681267200> per abbellire il tuo profilo! Corri in <#806841516353912864> per vedere l'ultimo evento disponibile! Puoi andare in <#742644851648233542> per saperne di più sul server. Buona permanenza! <a:wel:804839830029991936><a:come:804839830290825266>`);

  }
});
client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("742500462061813843");
  let channel = await client.channels.cache.get("743591393376600164");
  if (guild != member.guild) { }
  else {

    channel.send(`${member.user} è appena approdato sul server. Augurategli una buona permanenza! <a:wel:804839830029991936><a:come:804839830290825266>`);

  }
});
client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("742500462061813843");
  let channel = await client.channels.cache.get("742644839447003167");
  if (guild != member.guild) { }
  else {

    channel.send(`${member.user} è uscito da **Hoitsu**! Addio a te.`);

  }
});

const keepAlive = require('./server.js');
keepAlive();

//Logging in to discord
client.login(process.env.TOKEN)
