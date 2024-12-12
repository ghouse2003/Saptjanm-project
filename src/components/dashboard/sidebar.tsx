import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserCircle, Heart, Settings, HelpCircle, Bell, Search } from 'lucide-react';

const navItems = [
  { icon: UserCircle, label: 'Profile', path: '/dashboard/profile' },
  { icon: Heart, label: 'Matches', path: '/dashboard/matches' },
  { icon: Search, label: 'Search', path: '/dashboard/search' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: HelpCircle, label: 'Help', path: '/dashboard/help' },
];

export function Sidebar() {
  return (
    <nav className="bg-white rounded-lg shadow p-4 space-y-2">
      {navItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md transition-colors ${
              isActive
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}