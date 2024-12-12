import React from 'react';
import { MatchCard } from '@/components/dashboard/match-card';
import { Pagination } from '@/components/dashboard/pagination';
import { MatchFilters } from './components/match-filters';
import { useMatches } from './hooks/useMatches';

export function Matches() {
  const {
    matches,
    currentPage,
    totalPages,
    setCurrentPage,
    sortBy,
    setSortBy,
    setFilterByInterest,
  } = useMatches();

  const handleLike = (id: string) => {
    console.log('Liked profile:', id);
  };

  const handleMessage = (id: string) => {
    console.log('Messaging profile:', id);
  };

  const handleDismiss = (id: string) => {
    console.log('Dismissed profile:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Matches</h1>
        <MatchFilters
          sortBy={sortBy}
          onSortChange={setSortBy}
          onFilterChange={setFilterByInterest}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match) => (
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
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}