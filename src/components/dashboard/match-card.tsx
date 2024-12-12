import React from 'react';
import { Heart, MessageCircle, X, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface MatchCardProps {
  match: {
    id: string;
    name: string;
    age: number;
    location: string;
    bio: string;
    image?: string;
    interests: string[];
    compatibility?: number;
    lastActive?: string;
  };
  onLike: (id: string) => void;
  onMessage: (id: string) => void;
  onDismiss: (id: string) => void;
}

export function MatchCard({ match, onLike, onMessage, onDismiss }: MatchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
    >
      <div className="aspect-w-3 aspect-h-4 relative">
        {match.image ? (
          <img
            src={match.image}
            alt={match.name}
            className="w-full h-64 object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        {match.compatibility && (
          <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-rose-500">
            {match.compatibility}% Match
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold group-hover:text-rose-500 transition-colors">
              {match.name}
            </h3>
            <p className="text-gray-500">
              {match.age} • {match.location}
            </p>
            {match.lastActive && (
              <p className="text-sm text-gray-400">
                Active {match.lastActive}
              </p>
            )}
          </div>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onLike(match.id)}
              className="p-2 rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onMessage(match.id)}
              className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onDismiss(match.id)}
              className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{match.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {match.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {interest}
            </span>
          ))}
        </div>
        <Button variant="outline" className="w-full group">
          <span>View Full Profile</span>
          <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>
    </motion.div>
  );
}