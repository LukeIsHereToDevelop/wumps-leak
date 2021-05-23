module.exports = async (client) => {
  console.log(`${client.user.username}#${client.user.discriminator} è online e operativo in ${client.guilds.cache.size} server con ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} utenti.`);
  

    let status = [
        {name: 'MAINTENANCE', type: 'PLAYING'},
				{name: 'MANUTENZIONE', type: 'PLAYING'},
				{name: 'BAKIM', type: 'PLAYING'},
				{name: 'INSTANDHALTUNG', type: 'PLAYING'},
				{name: 'ENTRETIEN', type: 'PLAYING'},
				{name: '维护', type: 'PLAYING'},
				{name: 'メンテナンス', type: 'PLAYING'},
				{name: 'поддержание', type: 'PLAYING'}
    ]
    function setStatus(){
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({activity: randomStatus})
    }
    setStatus();
    setInterval(() => setStatus(), 20000)
};
