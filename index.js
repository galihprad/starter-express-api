// const express = require("express");
// const app = express();

const { Telegraf } = require("telegraf");

const bot = new Telegraf("5793524297:AAHrdBqsfFAZU95RScWVRghlslZIu9eW4Ow");
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// app.all("/", (req, res) => {
//   console.log("Just got a request!");
//   res.send("Yo!");
// });
// app.listen(process.env.PORT || 3000);

const port = 3000;
