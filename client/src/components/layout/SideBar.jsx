import React from "react";
import { LogOut } from "lucide-react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { NavItem } from "./NavItem";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 h-screen fixed left-0 top-0 flex flex-col">
      <Logo />
      <Navigation />
      <div className="p-4 border-t border-gray-800">
        <NavItem
          icon={LogOut}
          label="Logout"
          onClick={() => console.log("Logging out")}
        />
      </div>
    </aside>
  );
}
