const express = require('express');
const { createTicket, updateTicketStatus } = require('../controllers/ticketController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/tickets', authenticateUser, createTicket);
router.patch('/tickets/:ticketId', authenticateUser, updateTicketStatus);

module.exports = router;
