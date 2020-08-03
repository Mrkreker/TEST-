const Discord = require('discord.js');
const bot = new Discord.Client();
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;

bot.on('ready', () => {
  console.log(`Бот запущен ${bot.user.username}!`);
});

bot.on('message', msg => {

});
bot.login(token);