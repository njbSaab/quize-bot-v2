//bot.js
const { Telegraf, session } = require("telegraf");
const config = require("./config/config");
const startStopCommands = require("./commands/startStopCommands");
const bot = new Telegraf(config.botToken);

// Используем сессии для хранения данных пользователей (например, индекса вопросов)
bot.use(session());

// Обработка команд
startStopCommands(bot);

// Запуск бота
async function startBot() {
  try {
    await bot.launch();
    console.log("Бот запущен...");
  } catch (err) {
    console.error("Ошибка при запуске бота:", err);
  }
}

startBot();

// bot.js или другой файл, где вы обрабатываете команды
const { getQuestions } = require("./services/questionsService");

getQuestions()
  .then((questions) => {
    console.log("Вопросы из базы данных:", questions);
    // Здесь можно обработать вопросы и отправить их пользователю
  })
  .catch((error) => {
    console.error("Ошибка получения вопросов:", error);
  });
