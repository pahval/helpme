const express = require('express');
const userController = require('../controllers/usercontroller');
const router = express.Router();
router.post('/form' ,  userController.postForm);
module.exports = router;