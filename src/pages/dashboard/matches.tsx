import React, { useState } from 'react';
import { MatchCard } from '@/components/dashboard/match-card';
import { Pagination } from '@/components/dashboard/pagination';
import { Button } from '@/components/ui/button';

const MATCHES_PER_PAGE = 10;

const matches = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 26,
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Adventure seeker and coffee enthusiast. Looking for someone to share life\'s beautiful moments with.',
    interests: ['Travel', 'Photography', 'Coffee'],
  },
  {
    id: '2',
    name: 'Emily Davis',
    age: 28,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Art lover and foodie. Passionate about exploring new cultures and meeting interesting people.',
    interests: ['Art', 'Food', 'Culture'],
  },
  // Add more matches as needed
];

export function Matches() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(matches.length / MATCHES_PER_PAGE);

  const handleLike = (id: string) => {
    console.log('Liked profile:', id);
  };

  const handleMessage = (id: string) => {
    console.log('Messaging profile:', id);
  };

  const handleDismiss = (id: string) => {
    console.log('Dismissed profile:', id);
  };

  const paginatedMatches = matches.slice(
    (currentPage - 1) * MATCHES_PER_PAGE,
    currentPage * MATCHES_PER_PAGE
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Matches</h1>
        <div className="flex space-x-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onLike={handleLike}
            onMessage={handleMessage}
            onDismiss={handleDismiss}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}