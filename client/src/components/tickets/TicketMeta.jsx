import React from "react";
import { Clock, AlertCircle } from "lucide-react";

export function TicketMeta({ createdAt, ticketType }) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500">
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-1" />
        {new Date(createdAt).toLocaleDateString()}
      </div>
      <div className="flex items-center">
        <AlertCircle className="w-4 h-4 mr-1" />
        {ticketType}
      </div>
    </div>
  );
}
