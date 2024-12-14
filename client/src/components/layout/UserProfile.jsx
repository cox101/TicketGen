import React from "react";

export function UserProfile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User"
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="text-sm font-medium text-gray-700">John Doe</p>
        <p className="text-xs text-gray-500">Admin</p>
      </div>
    </div>
  );
}
