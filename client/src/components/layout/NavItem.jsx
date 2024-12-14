import React from "react";

export function NavItem({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg w-full mb-2 transition-colors"
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </button>
  );
}
