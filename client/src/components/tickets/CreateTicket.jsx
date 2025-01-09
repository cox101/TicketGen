import React, { useState } from 'react';
import { AlertCircle, MapPin, Users, Clock } from 'lucide-react';

const TICKET_TYPES = ['Location Support', 'Installation'];
const PRIORITY_LEVELS = ['Low', 'Medium', 'High'];

// Mock data for demonstration - replace with actual data from your backend
const MOCK_LOCATIONS = [
  { id: 'loc1', name: 'Downtown Office' },
  { id: 'loc2', name: 'Tech Campus' },
  { id: 'loc3', name: 'Support Center' }
];

const MOCK_TEAMS = [
  { id: 'team1', name: 'Network Support Team' },
  { id: 'team2', name: 'Installation Team' },
  { id: 'team3', name: 'Technical Support' }
];

export function CreateTicket({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    type: '',
    priority: '',
    description: '',
    location: '',
    requesterName: '',
    assignedTeam: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = 'Ticket type is required';
    if (!formData.priority) newErrors.priority = 'Priority level is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.requesterName) newErrors.requesterName = 'Requester name is required';
    if (!formData.assignedTeam) newErrors.assignedTeam = 'Assigned team is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Ticket</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ticket Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ticket Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.type ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Type</option>
              {TICKET_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.type}
              </p>
            )}
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority Level
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.priority ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Priority</option>
              {PRIORITY_LEVELS.map(priority => (
                <option key={priority} value={priority}>{priority}</option>
              ))}
            </select>
            {errors.priority && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.priority}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Location</option>
                {MOCK_LOCATIONS.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.location}
              </p>
            )}
          </div>

          {/* Assigned Team */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assigned Team
            </label>
            <div className="relative">
              <Users className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                name="assignedTeam"
                value={formData.assignedTeam}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  errors.assignedTeam ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Team</option>
                {MOCK_TEAMS.map(team => (
                  <option key={team.id} value={team.id}>{team.name}</option>
                ))}
              </select>
            </div>
            {errors.assignedTeam && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.assignedTeam}
              </p>
            )}
          </div>
        </div>

        {/* Requester Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Requester Name
          </label>
          <input
            type="text"
            name="requesterName"
            value={formData.requesterName}
            onChange={handleChange}
            placeholder="Enter requester name"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.requesterName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.requesterName && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.requesterName}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Describe the issue or request..."
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.description}
            </p>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Ticket
          </button>
        </div>
      </form>
    </div>
  );
}