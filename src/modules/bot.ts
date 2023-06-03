import TelegramBot from 'node-telegram-bot-api';
import { tokenTest } from './variables/personal.js';

export const bot = new TelegramBot(tokenTest, { polling: true });
