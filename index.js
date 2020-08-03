const Discord = require('discord.js');
const client = new Discord.client();

client.on("ready" () => {
    console.log("Je suis prêt !");
}

client.on("message", message => {
    if (message.content.startWith("Salut")) message.channel.send("Salut à tous !")
})

client.login(process.env.TOKEN);