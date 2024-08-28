const {
  getUserStateByUserId,
  incrementCounter,
  createUserState,
} = require("../services/userService");

const userState = async (ctx) => {
  const userId = ctx.from.id;
  const username = ctx.from.username;
  const firstName = ctx.from.first_name;
  const lastName = ctx.from.last_name;
  const email = ctx.from.email; // Email не всегда доступен через Telegram API

  let userState = await getUserStateByUserId(userId);

  if (userState) {
    await incrementCounter(userId);
    return userState.counter + 1;
  } else {
    await createUserState(userId, username, firstName, lastName, email);
    return 1; // Первое использование команды
  }
};

module.exports = userState;
