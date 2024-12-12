import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProfilePicture } from '@/components/dashboard/profile/profile-picture';
import { CoverPhoto } from '@/components/dashboard/profile/cover-photo';
import { BasicInfoSection } from './basic-info-section';

interface ProfileHeaderSectionProps {
  profileData: {
    name: string;
    location: string;
    dateOfBirth: string;
    email: string;
    coverImage: string;
    profileImage: string;
  };
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onProfileImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCoverImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNameChange: (name: string) => void;
  onLocationChange: (location: string) => void;
}

export function ProfileHeaderSection({
  profileData,
  isEditing,
  onEdit,
  onSave,
  onProfileImageUpload,
  onCoverImageUpload,
  onNameChange,
  onLocationChange,
}: ProfileHeaderSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow overflow-hidden"
    >
      <CoverPhoto
        coverImage={profileData.coverImage}
        onImageUpload={onCoverImageUpload}
      />

      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <ProfilePicture
            profileImage={profileData.profileImage}
            onImageUpload={onProfileImageUpload}
          />
          
          <BasicInfoSection
            name={profileData.name}
            location={profileData.location}
            dateOfBirth={profileData.dateOfBirth}
            email={profileData.email}
            isEditing={isEditing}
            onNameChange={onNameChange}
            onLocationChange={onLocationChange}
          />

          <Button
            onClick={isEditing ? onSave : onEdit}
            className="transition-all duration-200 hover:scale-105"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}