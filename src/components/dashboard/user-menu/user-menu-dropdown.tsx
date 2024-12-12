import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, HelpCircle, LogOut } from 'lucide-react';

interface UserMenuDropdownProps {
  onClose: () => void;
  onLogout: () => void;
}

export function UserMenuDropdown({ onClose, onLogout }: UserMenuDropdownProps) {
  const menuItems = [
    {
      icon: Settings,
      label: 'Settings',
      path: '/dashboard/settings',
    },
    {
      icon: HelpCircle,
      label: 'Help',
      path: '/dashboard/help',
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </Link>
        ))}
        
        <button
          className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          onClick={() => {
            onLogout();
            onClose();
          }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}