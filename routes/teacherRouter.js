const express = require('express');
const router = express.Router();
const { getAll, create } = require('../controllers/TeacherController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', getAll)
router.post('/', checkRole('ADMIN'), create)

module.exports = router