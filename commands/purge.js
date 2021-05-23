module.exports = {
  name: "clear",
  async run (client, message, args) {
	const clearargs = args[0]
  const amount = args.join(" ");

  if(!amount) return message.reply('provide a number of messages to delete! <:bravery:781065802018193439>')

  if(amount > 100) return message.reply(`I can delete a maximum of 100 messages! <:bravery:781065802018193439>`)

  if(amount < 1) return message.reply(`you must specify a sum of at least one message! <:bravery:781065802018193439>`)

  await message.channel.messages.fetch({limit: amount}).then(messages => {message.channel.bulkDelete(messages)});
  message.channel.send(`<:brilliance:781065801552887861> I deleted ${clearargs} messages`).then(msg => msg.delete({timeout:5000}));
  }
}