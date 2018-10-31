const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("Hola")) {
    message.channel.send("¡Hola! soy DyMandala y fuí programado de 0 por mi dios Hewsthon para cuídar el servidor.");
  }
});
client.login("NTA2OTQ5MzIyNzg1Njg1NTIy.DrqH3g.YJVJvOjSHazXlP3_wCkp62cZTW0");
