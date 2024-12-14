import React from "react";
import { Bell } from "lucide-react";

export function NotificationBell({ count = 0 }) {
  return (
    <button className="relative">
      <Bell className="w-6 h-6 text-gray-600" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
