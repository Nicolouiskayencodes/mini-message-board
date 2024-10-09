const express = require('express');
const indexController = require('../controllers/indexController');
const newController = require('../controllers/newController');
const router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
const pushMessage = (message) => {
  messages.push(message);
}

router.get('/', indexController.showMessages(messages));
router.get('/new', newController.renderForm);
router.post('/new', newController.createMessage(pushMessage));

module.exports = router;