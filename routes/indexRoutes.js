const express = require('express');
const indexController = require('../controllers/indexController');
const newController = require('../controllers/newController');
const router = express.Router();
const messages = [
  {
    text: "Hi I made this site!",
    user: "Nico",
    added: new Date()
  },
  {
    text: "Feel free to add your own messages!",
    user: "Nico",
    added: new Date()
  }
];
const pushMessage = (message) => {
  messages.push(message);
}

router.get('/', indexController.showMessages(messages));
router.get('/new', newController.renderForm);
router.post('/new', newController.createMessage(pushMessage));
router.get('/message/:index', indexController.selectMessage(messages))

module.exports = router;