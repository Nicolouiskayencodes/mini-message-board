const db = require('../db/queries')

async function showMessages(req, res) {
  const messages = await db.getAllMessages()
  console.log(messages)
  res.render('index', {messages: messages})
}
async function selectMessage (req, res) {
  const index = parseInt(req.params.index);
  const message = await db.getMessage(index)
  console.log(message)
  const title = 'Message ' + req.params.index;
  res.render('open', {title: title, user: message[0].name, text: message[0].text, added: message[0].added})

}



module.exports = {showMessages, selectMessage}