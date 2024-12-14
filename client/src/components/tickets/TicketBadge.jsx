import React from "react";
import { PRIORITY_COLORS, STATUS_COLORS } from "../../constants/statusConfig";

export function TicketBadge({ type, value }) {
  const colorMap = type === "priority" ? PRIORITY_COLORS : STATUS_COLORS;

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${colorMap[value]}`}
    >
      {value}
    </span>
  );
}
