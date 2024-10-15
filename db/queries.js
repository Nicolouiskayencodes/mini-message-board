const pool = require('./pool')

async function getAllMessages(){
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(index) {
  const {rows} = await pool.query(`SELECT * FROM messages WHERE id=${index}`)
  return rows;
  
}

async function addMessage(name, text) {
  await pool.query(`INSERT INTO messages (name, text) VALUES ('${name}', '${text}');`)
}

module.exports = {
  getAllMessages,
  getMessage,
  addMessage
}