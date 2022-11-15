import './src/interfaces/message.interface';

const TeleBot = require('telebot'); // https://github.com/mullwar/telebot
const dotenv = require('dotenv');
const cmds = require('./src/controllers/commands.controller');

dotenv.config();

const bot = new TeleBot({
  token: process.env.BOT_TOKEN,
});

bot.on('/hello', cmds.hello);

bot.start();
