import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import { ProfileDropdown } from './profile-dropdown';

interface ProfileHeaderProps {
  profileImage?: string;
  userName: string;
  onLogout: () => void;
}

export function ProfileHeader({ profileImage, userName, onLogout }: ProfileHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <UserCircle className="w-10 h-10 text-gray-400" />
        )}
        <span className="text-sm font-medium text-gray-700">{userName}</span>
      </button>

      <ProfileDropdown
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
        onLogout={onLogout}
      />
    </div>
  );
}