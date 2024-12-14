import React from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { TicketList } from "./components/tickets/TicketList";

// Mock data moved to a separate file in a real application
const mockTickets = [
  {
    id: "TIC-001",
    ticketType: "Location Support",
    priority: "High",
    description: "Network connectivity issues at main office",
    customerName: "Acme Corp",
    locationId: "LOC-001",
    teamAssignedId: "TEAM-001",
    status: "In Progress",
    createdAt: "2024-03-10T10:00:00Z",
    updatedAt: "2024-03-10T11:30:00Z",
  },
  {
    id: "TIC-002",
    ticketType: "Installation",
    priority: "Medium",
    description: "New equipment setup required for conference room",
    customerName: "TechStart Inc",
    locationId: "LOC-002",
    teamAssignedId: "TEAM-002",
    status: "New",
    installationDate: "2024-03-15T09:00:00Z",
    createdAt: "2024-03-10T09:00:00Z",
    updatedAt: "2024-03-10T09:00:00Z",
  },
  {
    id: "TIC-003",
    ticketType: "Location Support",
    priority: "Low",
    description: "Printer configuration update needed",
    customerName: "Global Solutions",
    locationId: "LOC-003",
    teamAssignedId: "TEAM-001",
    status: "Resolved",
    createdAt: "2024-03-09T14:00:00Z",
    updatedAt: "2024-03-10T10:15:00Z",
  },
];

export default function HomePage() {
  const handleTicketClick = (ticket) => {
    console.log("Ticket clicked:", ticket);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="pt-24 px-6 pb-8">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create Ticket
            </button>
          </div>
          <TicketList tickets={mockTickets} onTicketClick={handleTicketClick} />
        </main>
      </div>
    </div>
  );
}
