import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutSectionProps {
  bio: string;
  isEditing: boolean;
  onBioChange: (bio: string) => void;
}

export function AboutSection({ bio, isEditing, onBioChange }: AboutSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.textarea
            key="editing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            value={bio}
            onChange={(e) => onBioChange(e.target.value)}
            className="w-full p-4 border rounded-md min-h-[150px] text-gray-700"
            placeholder="Tell us about yourself..."
          />
        ) : (
          <motion.p
            key="display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-600 leading-relaxed"
          >
            {bio}
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}