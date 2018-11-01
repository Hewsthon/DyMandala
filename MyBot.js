const Discord = require("discord.js");
const  client = new Discord.Client();
client.on("ready", () => {
   console.log(`Estoy listo`);

   client.user.setPresence( {
       status: "online",
       game: {
           name: `server.samphub.com`,
           type: "PLAYING"
       }
   } );

});
client.on("Encendido", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("tarao")) {
    message.channel.send("Tarao e ");
  } else
  if (message.content.startsWith("hola")) {
    message.channel.send("Hola soy el bot de Hewsthon, a tus ordenes");
  } if (message.content.startsWith("robar")) {
    message.channel.send("¿Alguien dijo robar?");
  } else
  if (message.content.startsWith("bot quien eres")) {
     message.channel.send("Estoy hecho por un monton de codigos, preguntale a mi dios Hewsthon el me hizó de 0");
  }

  });
client.login("NTA2OTQ5MzIyNzg1Njg1NTIy.DrqH3g.YJVJvOjSHazXlP3_wCkp62cZTW0");
