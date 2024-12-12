import React from 'react';
import { Filter, SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MatchFiltersProps {
  sortBy: 'compatibility' | 'age' | 'lastActive';
  onSortChange: (sort: 'compatibility' | 'age' | 'lastActive') => void;
  onFilterChange: (interest: string | null) => void;
}

export function MatchFilters({ sortBy, onSortChange, onFilterChange }: MatchFiltersProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Button variant="outline" className="flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </Button>
      </div>
      
      <div className="relative">
        <Button variant="outline" className="flex items-center space-x-2">
          <SortAsc className="w-4 h-4" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="bg-transparent border-none focus:outline-none"
          >
            <option value="compatibility">Compatibility</option>
            <option value="age">Age</option>
            <option value="lastActive">Last Active</option>
          </select>
        </Button>
      </div>
    </div>
  );
}