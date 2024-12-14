import React from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search tickets, teams..."
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
      />
    </div>
  );
}
