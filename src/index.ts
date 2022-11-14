import './interfaces/message.interface';

const TeleBot = require('telebot');
const dotenv = require('dotenv');

dotenv.config();

const bot = new TeleBot({
  token: process.env.BOT_TOKEN,
});

bot.on('/hello', (msg: Message) => {
  return bot.sendMessage(msg.from.id, `Hello, ${msg.from.first_name}!`);
});

bot.start();
