import React from 'react';
import { motion } from 'framer-motion';

interface InterestsSectionProps {
  interests: string[];
  isEditing: boolean;
  onInterestRemove?: (interest: string) => void;
  onInterestAdd?: (interest: string) => void;
}

export function InterestsSection({
  interests,
  isEditing,
  onInterestRemove,
  onInterestAdd,
}: InterestsSectionProps) {
  const [newInterest, setNewInterest] = React.useState('');

  const handleAddInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (newInterest.trim() && onInterestAdd) {
      onInterestAdd(newInterest.trim());
      setNewInterest('');
    }
  };

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <motion.span
            key={interest}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 flex items-center"
          >
            {interest}
            {isEditing && onInterestRemove && (
              <button
                onClick={() => onInterestRemove(interest)}
                className="ml-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            )}
          </motion.span>
        ))}
      </div>
      
      {isEditing && onInterestAdd && (
        <form onSubmit={handleAddInterest} className="mt-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              placeholder="Add new interest"
              className="flex-1 px-3 py-1 border rounded-md text-sm"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-primary text-white rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      )}
    </section>
  );
}