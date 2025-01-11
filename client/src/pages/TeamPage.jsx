import React, { useState } from 'react';
import { Users, MapPin, Plus, Search, UserPlus, Building2, Phone } from 'lucide-react';

// Mock data for demonstration
const MOCK_TEAMS = [
  {
    id: 'TEAM-001',
    name: 'Network Support Team',
    members: [
      { id: 1, name: 'John Doe', role: 'Team Lead', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { id: 2, name: 'Sarah Smith', role: 'Senior Technician', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { id: 3, name: 'Mike Johnson', role: 'Support Engineer', avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
    ],
    location: { id: 'LOC-001', name: 'Downtown Office', address: '123 Tech Street, NY' },
    activeTickets: 5,
    completedTickets: 28
  },
  {
    id: 'TEAM-002',
    name: 'Installation Specialists',
    members: [
      { id: 4, name: 'Emily Brown', role: 'Installation Lead', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { id: 5, name: 'David Wilson', role: 'Field Technician', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
    ],
    location: { id: 'LOC-002', name: 'Tech Campus', address: '456 Innovation Drive, SF' },
    activeTickets: 3,
    completedTickets: 15
  }
];

const TeamCard = ({ team }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            {team.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1 flex items-center">
            <Building2 className="w-4 h-4 mr-1" />
            {team.location.name}
          </p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors">
          <UserPlus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Team Members */}
        <div className="space-y-3">
          {team.members.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-600">Active Tickets</p>
            <p className="text-2xl font-semibold text-blue-700">{team.activeTickets}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-600">Completed</p>
            <p className="text-2xl font-semibold text-green-700">{team.completedTickets}</p>
          </div>
        </div>

        {/* Location Details */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            {team.location.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TeamsPage() {
  const [teams, setTeams] = useState(MOCK_TEAMS);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.members.some(member => 
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    team.location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6  mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Teams</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Create Team
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search teams, members, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTeams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
}