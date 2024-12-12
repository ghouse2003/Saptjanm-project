import React from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { formatAge } from '@/lib/utils';

interface BasicInfoSectionProps {
  name: string;
  location: string;
  dateOfBirth: string;
  email: string;
  isEditing: boolean;
  onNameChange: (name: string) => void;
  onLocationChange: (location: string) => void;
}

export function BasicInfoSection({
  name,
  location,
  dateOfBirth,
  email,
  isEditing,
  onNameChange,
  onLocationChange,
}: BasicInfoSectionProps) {
  return (
    <div className="flex-1">
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <Input
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              className="text-2xl font-bold"
              placeholder="Your Name"
            />
            <Input
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              placeholder="Your Location"
              className="text-gray-600"
            />
          </motion.div>
        ) : (
          <motion.div
            key="display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-2">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatAge(dateOfBirth)} years old
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                {email}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}