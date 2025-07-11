import { Bot, InlineKeyboard } from "grammy";
import { config } from "dotenv";
import { envConfig } from "./env";
config();

const bot = new Bot(envConfig.BOT_TOKEN);

bot.command("start", async (ctx) => {
  const username = ctx.from?.username || "Гость";

  const webAppUrl = envConfig.WEB_APP_URL;

  const keyboard = new InlineKeyboard().webApp("Открыть приложение", webAppUrl);

  await ctx.reply(
    `👋 Привет, @${username}!\n\nНажми на кнопку ниже, чтобы открыть приложение.`,
    {
      reply_markup: keyboard,
    }
  );
});

bot.catch((err) => {
  console.error("❌ Ошибка в боте:", err);
});

bot.start();
