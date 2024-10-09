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

router.get('/', indexController.showMessages(messages));
router.get('/new', newController.renderForm);

module.exports = router;