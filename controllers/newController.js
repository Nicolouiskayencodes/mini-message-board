const db = require('../db/queries')

const renderForm = (req, res) => {

  res.render('form');
}
async function createMessage (req, res) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  await db.addMessage(messageUser, messageText);
  res.redirect('/');
}

module.exports = {renderForm, createMessage}