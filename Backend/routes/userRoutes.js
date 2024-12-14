const express = require('express');
const { getUserProfile, updateUserRole } = require('../controllers/userController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authenticateUser, getUserProfile);
router.patch('/users/:userId/role', authenticateUser, authorizeAdmin, updateUserRole);

module.exports = router;
