import React from "react";
import { TicketBadge } from "./TicketBadge";
import { TicketMeta } from "./TicketMeta";

export function TicketCard({ ticket, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">#{ticket.id}</h3>
          <p className="text-sm text-gray-600">{ticket.customerName}</p>
        </div>
        <div className="flex gap-2">
          <TicketBadge type="priority" value={ticket.priority} />
          <TicketBadge type="status" value={ticket.status} />
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-2">{ticket.description}</p>

      <TicketMeta createdAt={ticket.createdAt} ticketType={ticket.ticketType} />
    </div>
  );
}
