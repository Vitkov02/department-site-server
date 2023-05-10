const express = require('express');
const router = express.Router();
const { getAll, create, getOne } = require('../controllers/AudienceController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/', getAll)
router.post('/', checkRole('ADMIN'), create)
router.get('/:id', getOne)

module.exports = router