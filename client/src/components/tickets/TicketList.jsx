import React from "react";
import { TicketCard } from "./TicketCard";

export function TicketList({ tickets, onTicketClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onClick={() => onTicketClick?.(ticket)}
        />
      ))}
    </div>
  );
}
