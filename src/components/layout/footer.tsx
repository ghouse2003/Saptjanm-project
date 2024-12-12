import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-rose-500" />
              <span className="text-xl font-semibold">HeartMatch</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Finding your perfect match has never been easier.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-gray-900">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
              <li><Link to="/safety" className="text-gray-600 hover:text-gray-900">Safety Tips</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-gray-900">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} HeartMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}