const express = require('express');
const indexController = require('../controllers/indexController');
const newController = require('../controllers/newController');
const router = express.Router();


router.get('/', indexController.showMessages);
router.get('/new', newController.renderForm);
router.post('/new', newController.createMessage);
router.get('/message/:index', indexController.selectMessage)

module.exports = router;