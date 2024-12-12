import React from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CoverPhotoProps {
  coverImage?: string;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CoverPhoto({ coverImage, onImageUpload }: CoverPhotoProps) {
  return (
    <div className="h-48 rounded-t-lg relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full ${
          coverImage
            ? ''
            : 'bg-gradient-to-r from-rose-500 to-purple-500'
        }`}
      >
        {coverImage && (
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
      
      <motion.label
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-4 right-4 cursor-pointer"
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageUpload}
        />
        <Button variant="outline" className="bg-white">
          <Camera className="w-4 h-4 mr-2" />
          Change Cover
        </Button>
      </motion.label>
    </div>
  );
}