import { bot } from './modules/bot.js';
import { idAl } from './modules/variables/personal.js';
bot.on('text', (e) => {
  const { text } = e;

  bot.sendMessage(idAl, text ? text : '');
});
