import React from "react";
import { LayoutDashboard, Ticket, Users, MapPin, Settings } from "lucide-react";
import { NavItem } from "./NavItem";
import { MENU_ITEMS } from "../../constants/navigation";

const ICON_MAP = {
  dashboard: LayoutDashboard,
  tickets: Ticket,
  teams: Users,
  locations: MapPin,
  settings: Settings,
};

export function Navigation() {
  return (
    <nav className="flex-1 px-4">
      {MENU_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          icon={ICON_MAP[item.id]}
          label={item.label}
          onClick={() => console.log(`Navigating to ${item.path}`)}
        />
      ))}
    </nav>
  );
}
