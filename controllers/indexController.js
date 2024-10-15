const db = require('../db/queries')

async function showMessages(req, res) {
  const messages = await db.getAllMessages()
  console.log(messages)
  res.render('index', {messages: messages})
}
const selectMessage = (messages) => {

  return (req, res) => {
    const message = messages[req.params.index]
    const title = 'Message ' + req.params.index;
    res.render('open', {title: title, user: message.user, text: message.text, added: message.added})
  }
}



module.exports = {showMessages, selectMessage}