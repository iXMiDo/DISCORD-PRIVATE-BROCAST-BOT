const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
__Xenon Develepoment Coder__

مرحبا بكم .. في Xenon 
سيرفر تعليم برمجه .. [ اكواد - تعليم - مساعده ..] السيرفر جديد من نوعه .. يبدا كل تعاليمه من الصفر .. و مساعده فوق المستطاع ... فقط كل ما نريده تحقيق اهدافنا .. و تعليم البرمجه للكل .. و كيفية حل مشاكلهم .. كل ما عليكم اتباع كل مهو صحيح .. 
نعتذر لما حدث من اخطاء .. 
 في حال وصولنا الي الهدف المحقق .. 
سوف ننشر الاكواد التاليه .. : 
- Javascript [ Discord + Websites + Somegames ] 
- Phython [ Checkers + Discord + Website Tools ] 
- PHP [ Websites ]
- HTML [ Websites ] 
- XML [ Websites ] 
- WordPress [ Websites ] 
- Lua [ Games Progamming ] 
- Eris [ Discord ] 
- CSS [ Websites + Discord + Themes ] 
 - C# [ Checkers + Generators ] 
- VB.net [ Checkers ]
-  Hosts For Uploading
و  اشياء اخري ناريه نرجو التفاعل حتي ننشر و نتشجع .،  انتظرونا  و اوصولنا الي الهدف ، سوف نبدأ بثلاث لغات ف حال اقبال علي السيرفر .سوف نبدا بالنشر ف كل اللغات ..
#دمتم_اوفياء
https://media.discordapp.net/attachments/586133469424254988/586936352914931712/giphy_2.gif
https://discord.gg/cBpdNwG
**`) 
}).catch(console.error)
})
    client.login(process.env.TOKEN);
