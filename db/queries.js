const pool = require('./pool');

async function getAllMessages() {
  const SQL = 'SELECT * FROM messages';
  const { rows } = await pool.query(SQL);
  return rows;
}

async function getMessage(id) {
  const SQL = 'SELECT * from messages WHERE id = ($1)';
  const { rows } = await pool.query(SQL, [id]);
  return rows;
}

async function insertMessage(message, username) {
  const SQL = 'INSERT INTO messages (message, username) VALUES ($1, $2)';
  const arr = [message, username];
  await pool.query(SQL, arr);
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};
