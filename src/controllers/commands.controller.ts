const dbConn = require('../database/databaseConnection');

export const hello = async (msg: Message) => {
  const [result] = await dbConn.pool.query('SELECT "Pong"');
  console.log(result[0].Pong);
  return msg.reply.text(result[0].Pong);
};
