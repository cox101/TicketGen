const Team = require('../models/Team');

exports.createTeam = async (req, res) => {
  try {
    const { name, members, ticketTypes } = req.body;

    const team = await Team.create({ name, members, ticketTypes });

    res.status(201).json({ message: 'Team created successfully', team });
  } catch (error) {
    res.status(500).json({ message: 'Error creating team', error: error.message });
  }
};

exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find();

    res.status(200).json({ message: 'Teams retrieved successfully', teams });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving teams', error: error.message });
  }
};
