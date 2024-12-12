import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCircle } from 'lucide-react';
import { UserMenuDropdown } from './user-menu-dropdown';

interface UserMenuProps {
  userName: string;
  profileImage?: string;
  onLogout: () => void;
}

export function UserMenu({ userName, profileImage, onLogout }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden">
          {profileImage ? (
            <img
              src={profileImage}
              alt={userName}
              className="w-full h-full object-cover"
            />
          ) : (
            <UserCircle className="w-full h-full text-gray-400" />
          )}
        </div>
        <span className="text-sm font-medium text-gray-700">{userName}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <UserMenuDropdown onClose={() => setIsOpen(false)} onLogout={onLogout} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}