import { Bot, InlineKeyboard } from "grammy";
import { config } from "dotenv";
config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", async (ctx) => {
  const username = ctx.from?.username || "друг";

  const webAppUrl = "https://your-tma-url.com";

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
