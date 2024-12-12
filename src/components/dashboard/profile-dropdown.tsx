import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, HelpCircle, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function ProfileDropdown({ isOpen, onClose, onLogout }: ProfileDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu">
        <Link
          to="/dashboard/profile"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          <UserCircle className="w-4 h-4 mr-2" />
          Profile
        </Link>
        <Link
          to="/dashboard/settings"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Link>
        <Link
          to="/dashboard/help"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          <HelpCircle className="w-4 h-4 mr-2" />
          Help
        </Link>
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