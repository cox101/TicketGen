import React from "react";
import { LayoutDashboard, Ticket, Users, MapPin, Settings } from "lucide-react";
import { NavItem } from "./NavItem";
import { MENU_ITEMS } from "../../constants/navigation";
import { useNavigate } from "react-router-dom";

const ICON_MAP = {
  dashboard: LayoutDashboard,
  tickets: Ticket,
  teams: Users,
  locations: MapPin,
  settings: Settings,
};

export function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="flex-1 px-4">
      {MENU_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          icon={ICON_MAP[item.id]}
          label={item.label}
          navigate={() => navigate(item.path)}
        />
      ))}
    </nav>
  );
}
