const showMessages = (messages) => {

  return function (req, res)  {
    res.render('index', {messages: messages});
  }
}
const selectMessage = (messages) => {

  return (req, res) => {
    const message = messages[req.params.index]
    const title = 'Message ' + req.params.index;
    res.render('open', {title: title, user: message.user, text: message.text, added: message.added})
  }
}



module.exports = {showMessages, selectMessage}