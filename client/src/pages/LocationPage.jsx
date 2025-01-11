import React, { useState } from 'react';
import { MapPin, Plus, Search, Users, Ticket } from 'lucide-react';

// Mock data for demonstration
const mockLocations = [
  {
    id: 'LOC-001',
    name: 'Downtown Office',
    address: '123 Business Ave, New York, NY 10001',
    region: 'Northeast'
  },
  {
    id: 'LOC-002',
    name: 'Tech Campus',
    address: '456 Innovation Drive, San Francisco, CA 94105',
    region: 'West Coast'
  },
  {
    id: 'LOC-003',
    name: 'Support Center',
    address: '789 Service Road, Chicago, IL 60601',
    region: 'Midwest'
  }
];

const LocationCard = ({ location }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            {location.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{location.address}</p>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {location.region}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <Users className="w-5 h-5 text-gray-600 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-900">Teams</p>
            <p className="text-xs text-gray-600">3 Active Teams</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <Ticket className="w-5 h-5 text-gray-600 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-900">Tickets</p>
            <p className="text-xs text-gray-600">12 Open Tickets</p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm text-gray-500">ID: {location.id}</span>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default function LocationsPage() {
  const [locations] = useState(mockLocations);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'Northeast', 'West Coast', 'Midwest', 'Southeast', 'Southwest'];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = 
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = selectedRegion === 'All' || location.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Locations</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Add Location
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredLocations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}