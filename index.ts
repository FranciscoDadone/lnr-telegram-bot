import './src/interfaces/message.interface';

const TeleBot = require('telebot'); // https://github.com/mullwar/telebot
const dotenv = require('dotenv');

dotenv.config();

const bot = new TeleBot({
  token: process.env.BOT_TOKEN,
});

bot.on('/hello', (msg: Message) => {
  return bot.sendMessage(msg.from.id, `Helao, ${msg.from.first_name}!`);
});

bot.start();
