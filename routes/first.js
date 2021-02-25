const express = require('express')
const userController = require('../controllers/first')
const router = express.Router()
router.get('/' ,userController.getForm) 
module.exports = router