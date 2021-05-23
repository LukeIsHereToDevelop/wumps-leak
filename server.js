const express = require('express');
const server = express();


server.all('/', (req, res)=>{
    res.send(`Bot Status : \nonline`)
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Uptime Host Bot ready!")});
}
module.exports = keepAlive;