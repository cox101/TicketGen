const Ticket = require('../models/Ticket');
const Team = require('../models/Team');

exports.createTicket = async (req, res) => {
  try {
    const { type, priority, description, location, requesterName } = req.body;

    // Find the appropriate team based on ticket type
    const assignedTeam = await Team.findOne({ ticketTypes: type });
    if (!assignedTeam) {
      return res.status(404).json({ message: 'No team available for this ticket type' });
    }

    const ticket = await Ticket.create({
      type,
      priority,
      description,
      location,
      requesterName,
      assignedTeam: assignedTeam._id,
      status: 'New',
    });

    res.status(201).json({ message: 'Ticket created successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: 'Error creating ticket', error: error.message });
  }
};

exports.updateTicketStatus = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;

    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.status = status;
    await ticket.save();

    res.status(200).json({ message: 'Ticket status updated successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: 'Error updating ticket status', error: error.message });
  }
};
