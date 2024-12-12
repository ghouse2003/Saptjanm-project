import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-rose-500" />
          <span className="text-xl font-semibold">HeartMatch</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/success-stories" className="text-gray-600 hover:text-gray-900">Success Stories</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button>Join Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}