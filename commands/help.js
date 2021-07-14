 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Only Music  Commands**`)
    .setThumbnail("https://media.tenor.com/images/3145445a2c5bde03ac708c2c309fdbca/tenor.gif")
    .setAuthor("Prefix [ + ]","")
    .setDescription(` 
\`Help Commands\`

help
List of all commands
• ────── emoji_102 ────── •
☢◢User Commands
+invite - +ping 
+stats - +support
+hosting - +docs
+howtohost - +djs

• ────── RAES ────── •
☢◢Music Commands
+addprevious - +addsimilar 
+autoplay - +join
+jump - +loob 
+loobqueue - +lyrics
+move - +moveme 
+nowplaying - +pause
+play(p) - +playlist
+playsc - +play skip 
+queue - +radio
+search - +shuffle 
+stop - +volume 
────── Sixo ────── •
+8ball - +delete
+fact - +joke
+kiss - +meme
+rip - +shit
+say - +purge
• ────── RAES ────── •
+addbotchat - +adddj
+prefix - +removebotchat 
+reset - settings - +setup 
+toggledjoinly - +toggleplaymssnge

• ────── emoji_97 ────── •
☢◢Moderator Commands
+avatar - +botinfo - +help
+invite - +ping - +reactions
+serverinfo - +stats - +userinfo 
+uptime - +ban - +kick 
+embed - +slawmode
+unmute - +mute
+unwarn - +warn - +warnings 

• ────── FILTER────── •
☢◢Owner Commands
+bassboost - +cleareq 
+clearfilter - +equalizer 




     
**[ invite ](https://discord.com/api/oauth2/authorize?client_id=864798677783281724&permissions=8&scope=bot)** , **[ support ](https://discord.gg/8b6pF9CV)**                                                                      
 `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
