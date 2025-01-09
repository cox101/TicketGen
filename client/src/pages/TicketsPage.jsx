import React, { useState } from 'react';
import { Clock, Plus, Search, AlertCircle } from 'lucide-react';
import {Link} from "react-router-dom"

const TICKET_STATUSES = {
  NEW: 'New',
  ASSIGNED: 'Assigned', 
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved',
  CLOSED: 'Closed',
  ESCALATED: 'Escalated'
};

const mockTickets = [
  {
    id: 'TIC-001',
    title: 'Network Connectivity Issue',
    description: 'Users unable to connect to the main server',
    status: TICKET_STATUSES.NEW,
    priority: 'High',
    createdAt: '2024-03-15T10:00:00Z',
    customer: 'Acme Corp',
    sla: '4h'
  },
  {
    id: 'TIC-002',
    title: 'Printer Setup Required',
    description: 'New printer installation in conference room',
    status: TICKET_STATUSES.ASSIGNED,
    priority: 'Medium',
    assignedTo: 'John Smith',
    createdAt: '2024-03-15T09:30:00Z',
    customer: 'TechStart Inc',
    sla: '24h'
  },
  {
    id: 'TIC-003',
    title: 'Software Update Required',
    description: 'System requires critical security update',
    status: TICKET_STATUSES.IN_PROGRESS,
    priority: 'High',
    assignedTo: 'Sarah Johnson',
    createdAt: '2024-03-15T08:45:00Z',
    customer: 'Global Solutions',
    sla: '12h'
  }
];

const statusColors = {
  [TICKET_STATUSES.NEW]: 'bg-purple-100 text-purple-800',
  [TICKET_STATUSES.ASSIGNED]: 'bg-blue-100 text-blue-800',
  [TICKET_STATUSES.IN_PROGRESS]: 'bg-yellow-100 text-yellow-800',
  [TICKET_STATUSES.RESOLVED]: 'bg-green-100 text-green-800',
  [TICKET_STATUSES.CLOSED]: 'bg-gray-100 text-gray-800',
  [TICKET_STATUSES.ESCALATED]: 'bg-red-100 text-red-800'
};

const priorityColors = {
  'Low': 'bg-blue-100 text-blue-800',
  'Medium': 'bg-yellow-100 text-yellow-800',
  'High': 'bg-red-100 text-red-800'
};

const TicketCard = ({ ticket, onStatusChange }) => {
  const nextStatus = {
    [TICKET_STATUSES.NEW]: TICKET_STATUSES.ASSIGNED,
    [TICKET_STATUSES.ASSIGNED]: TICKET_STATUSES.IN_PROGRESS,
    [TICKET_STATUSES.IN_PROGRESS]: TICKET_STATUSES.RESOLVED,
    [TICKET_STATUSES.RESOLVED]: TICKET_STATUSES.CLOSED,
    [TICKET_STATUSES.CLOSED]: TICKET_STATUSES.CLOSED,
    [TICKET_STATUSES.ESCALATED]: TICKET_STATUSES.IN_PROGRESS,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">#{ticket.id}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[ticket.priority]}`}>
              {ticket.priority}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{ticket.customer}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`}>
            {ticket.status}
          </span>
          {ticket.sla && (
            <span className="text-xs text-gray-500 flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              SLA: {ticket.sla}
            </span>
          )}
        </div>
      </div>
      
      <h4 className="font-medium text-gray-800 mb-2">{ticket.title}</h4>
      <p className="text-gray-700 mb-4 text-sm">{ticket.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {ticket.assignedTo ? (
            <span>Assigned to: {ticket.assignedTo}</span>
          ) : (
            <span className="text-yellow-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              Unassigned
            </span>
          )}
        </div>
        {ticket.status !== TICKET_STATUSES.CLOSED && (
          <button
            onClick={() => onStatusChange(ticket.id, nextStatus[ticket.status])}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Move to {nextStatus[ticket.status]}
          </button>
        )}
      </div>
    </div>
  );
};

export default function TicketsPage() {
  const [tickets, setTickets] = useState(mockTickets);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');

  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    ));
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = 
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'All' || ticket.status === selectedStatus;
    const matchesPriority = selectedPriority === 'All' || ticket.priority === selectedPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
          
          
            <Link to="/create-ticket">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            New Ticket
            </button>
            </Link>
          
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Statuses</option>
                {Object.values(TICKET_STATUSES).map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>

              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}