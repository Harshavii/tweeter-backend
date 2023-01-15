const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatController');
const authverifytoken = require('../middleware/authveriftoken');

router.get('/chat/:userId',authverifytoken,chatController.userchat);
router.get('/mychats',authverifytoken,chatController.mychat);

module.exports = router;