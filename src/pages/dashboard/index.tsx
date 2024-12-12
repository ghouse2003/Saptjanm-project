import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Heart, MessageCircle, Eye, Star } from 'lucide-react';
import { ProfileHeader } from '@/components/dashboard/profile-header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { StatsCard } from '@/components/dashboard/stats-card';
import { Profile } from './profile';
import { Matches } from './matches';

export function Dashboard() {
  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logging out...');
  };

  const stats = [
    { title: 'Profile Views', value: 245, icon: <Eye className="w-5 h-5" />, trend: { value: 12, isPositive: true } },
    { title: 'Matches', value: 48, icon: <Heart className="w-5 h-5" />, trend: { value: 8, isPositive: true } },
    { title: 'Messages', value: 128, icon: <MessageCircle className="w-5 h-5" />, trend: { value: 24, isPositive: true } },
    { title: 'Likes', value: 156, icon: <Star className="w-5 h-5" />, trend: { value: 5, isPositive: false } },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <ProfileHeader
            userName="John Doe"
            onLogout={handleLogout}
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="matches" element={<Matches />} />
              <Route path="*" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}