const express = require('express');
const { createTeam, getTeams } = require('../controllers/teamController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/teams', authenticateUser, authorizeAdmin, createTeam);
router.get('/teams', authenticateUser, getTeams);

module.exports = router;
