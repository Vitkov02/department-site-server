const express = require('express');
const { registration, login, check } = require('../controllers/UserController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', registration);
router.post('/login', login );
router.get('/auth', authMiddleware, check );

module.exports = router