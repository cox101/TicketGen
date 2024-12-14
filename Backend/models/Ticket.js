const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  type: { type: String, enum: ['Location Support', 'Installation'], required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  requesterName: { type: String, required: true },
  assignedTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  status: { type: String, enum: ['New', 'Assigned', 'In Progress', 'On Hold', 'Resolved', 'Closed', 'Escalated'], default: 'New' },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
