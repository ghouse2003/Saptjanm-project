import React, { useState } from 'react';
import { ProfileHeaderSection } from './sections/profile-header-section';
import { AboutSection } from './sections/about-section';
import { InterestsSection } from '@/components/dashboard/profile/interests-section';
import { useProfileData } from './hooks/useProfileData';

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const {
    profileData,
    updateProfileField,
    handleImageUpload,
    handleInterestRemove,
    handleInterestAdd,
  } = useProfileData();

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Implement save logic
    console.log('Saving profile:', profileData);
  };

  return (
    <div className="space-y-6">
      <ProfileHeaderSection
        profileData={profileData}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onProfileImageUpload={handleImageUpload('profile')}
        onCoverImageUpload={handleImageUpload('cover')}
        onNameChange={(name) => updateProfileField('name', name)}
        onLocationChange={(location) => updateProfileField('location', location)}
      />

      <div className="bg-white rounded-lg shadow p-6">
        <AboutSection
          bio={profileData.bio}
          isEditing={isEditing}
          onBioChange={(bio) => updateProfileField('bio', bio)}
        />

        <InterestsSection
          interests={profileData.interests}
          isEditing={isEditing}
          onInterestRemove={isEditing ? handleInterestRemove : undefined}
          onInterestAdd={isEditing ? handleInterestAdd : undefined}
        />
      </div>
    </div>
  );
}