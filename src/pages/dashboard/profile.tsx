import React, { useState } from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CoverPhoto } from '@/components/dashboard/profile/cover-photo';
import { ProfilePicture } from '@/components/dashboard/profile/profile-picture';
import { InterestsSection } from '@/components/dashboard/profile/interests-section';

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    location: 'New York, USA',
    dateOfBirth: '1995-06-15',
    email: 'john.doe@example.com',
    bio: "I'm a passionate individual who loves traveling, trying new cuisines, and meeting new people. Looking for someone who shares similar interests and values. Let's create beautiful memories together!",
    interests: ['Travel', 'Cooking', 'Photography', 'Music', 'Hiking', 'Reading'],
    coverImage: '',
    profileImage: '',
  });

  const handleImageUpload = (type: 'cover' | 'profile') => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData(prev => ({
        ...prev,
        [type === 'cover' ? 'coverImage' : 'profileImage']: imageUrl
      }));
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Implement save logic
    console.log('Saving profile:', profileData);
  };

  const handleInterestRemove = (interest: string) => {
    setProfileData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleInterestAdd = (interest: string) => {
    setProfileData(prev => ({
      ...prev,
      interests: [...prev.interests, interest]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow"
    >
      <CoverPhoto
        coverImage={profileData.coverImage}
        onImageUpload={handleImageUpload('cover')}
      />

      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <ProfilePicture
            profileImage={profileData.profileImage}
            onImageUpload={handleImageUpload('profile')}
          />
          
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.div
                  key="editing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                    className="text-2xl font-bold mb-2"
                  />
                </motion.div>
              ) : (
                <motion.h1
                  key="display"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-2xl font-bold"
                >
                  {profileData.name}
                </motion.h1>
              )}
            </AnimatePresence>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-2">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {profileData.location}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date().getFullYear() - new Date(profileData.dateOfBirth).getFullYear()} years old
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                {profileData.email}
              </span>
            </div>
          </div>

          <Button
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className="transition-all duration-200 hover:scale-105"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.textarea
                key="editing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                value={profileData.bio}
                onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                className="w-full p-2 border rounded-md"
                rows={4}
              />
            ) : (
              <motion.p
                key="display"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-600"
              >
                {profileData.bio}
              </motion.p>
            )}
          </AnimatePresence>
        </section>

        <InterestsSection
          interests={profileData.interests}
          isEditing={isEditing}
          onInterestRemove={isEditing ? handleInterestRemove : undefined}
          onInterestAdd={isEditing ? handleInterestAdd : undefined}
        />
      </div>
    </motion.div>
  );
}