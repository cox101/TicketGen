import React from "react";
import { SearchBar } from "./SearchBar";
import { NotificationBell } from "./NotificationBell";
import { UserProfile } from "./UserProfile";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10">
      <div className="px-6 flex items-center justify-between">
        <SearchBar />
        
        <div className="flex items-center gap-4">
          <NotificationBell count={3} />
          <Link to={"/profile"} className="no-underline">
          <UserProfile />
          </Link>
        </div>
        
        
      </div>
    </header>
  );
}
