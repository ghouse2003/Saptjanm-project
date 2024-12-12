import { useState } from 'react';
import type { Match } from '../types';

const MATCHES_PER_PAGE = 10;

const INITIAL_MATCHES: Match[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 26,
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Adventure seeker and coffee enthusiast. Looking for someone to share life\'s beautiful moments with.',
    interests: ['Travel', 'Photography', 'Coffee'],
    compatibility: 95,
    lastActive: '2 hours ago',
  },
  {
    id: '2',
    name: 'Emily Davis',
    age: 28,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Art lover and foodie. Passionate about exploring new cultures and meeting interesting people.',
    interests: ['Art', 'Food', 'Culture'],
    compatibility: 88,
    lastActive: '5 minutes ago',
  },
  {
    id: '3',
    name: 'Jessica Williams',
    age: 25,
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80',
    bio: 'Beach lover, yoga enthusiast, and aspiring chef. Looking for someone who appreciates good food and adventure.',
    interests: ['Yoga', 'Cooking', 'Beach'],
    compatibility: 92,
    lastActive: 'Just now',
  },
];

export function useMatches() {
  const [matches] = useState<Match[]>(INITIAL_MATCHES);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'compatibility' | 'age' | 'lastActive'>('compatibility');
  const [filterByInterest, setFilterByInterest] = useState<string | null>(null);

  const filteredMatches = filterByInterest
    ? matches.filter(match => match.interests.includes(filterByInterest))
    : matches;

  const sortedMatches = [...filteredMatches].sort((a, b) => {
    switch (sortBy) {
      case 'compatibility':
        return (b.compatibility || 0) - (a.compatibility || 0);
      case 'age':
        return a.age - b.age;
      case 'lastActive':
        return a.lastActive.localeCompare(b.lastActive);
      default:
        return 0;
    }
  });

  const paginatedMatches = sortedMatches.slice(
    (currentPage - 1) * MATCHES_PER_PAGE,
    currentPage * MATCHES_PER_PAGE
  );

  const totalPages = Math.ceil(sortedMatches.length / MATCHES_PER_PAGE);

  return {
    matches: paginatedMatches,
    currentPage,
    totalPages,
    setCurrentPage,
    sortBy,
    setSortBy,
    filterByInterest,
    setFilterByInterest,
  };
}