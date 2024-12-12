import React from 'react';
import { UserCircle, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProfilePictureProps {
  profileImage?: string;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ProfilePicture({ profileImage, onImageUpload }: ProfilePictureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative -mt-16"
    >
      <div className="w-32 h-32 bg-white rounded-full border-4 border-white overflow-hidden">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <UserCircle className="w-full h-full text-gray-400" />
        )}
      </div>
      <label className="absolute bottom-0 right-0 cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageUpload}
        />
        <Button size="sm" className="rounded-full">
          <Camera className="w-4 h-4" />
        </Button>
      </label>
    </motion.div>
  );
}