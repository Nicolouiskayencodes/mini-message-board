const renderForm = (req, res) => {

  res.render('form');
}
const createMessage = (pushMessage) => {



  return function (req, res) {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    pushMessage({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
  }
}

module.exports = {renderForm, createMessage}