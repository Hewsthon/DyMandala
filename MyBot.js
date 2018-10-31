const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "tarao")) {
    message.channel.send("Tarao e 🖕");
  } else
  if (message.content.startsWith(prefix +"hola")) {
    message.channel.send("Hola que tal? 👁");
  }
});
client.login("NTA2OTQ5MzIyNzg1Njg1NTIy.DrqH3g.YJVJvOjSHazXlP3_wCkp62cZTW0");
