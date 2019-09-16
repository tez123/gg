const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603599757138591780")
setInterval(function() {
channel.send(`COMING SOON `);
}, 30)
})

client.login(process.env.BOT_TOKEN);