import { useState } from 'react';

interface ProfileData {
  name: string;
  location: string;
  dateOfBirth: string;
  email: string;
  bio: string;
  interests: string[];
  coverImage: string;
  profileImage: string;
}

export function useProfileData() {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    location: 'New York, USA',
    dateOfBirth: '1995-06-15',
    email: 'john.doe@example.com',
    bio: "I'm a passionate individual who loves traveling, trying new cuisines, and meeting new people. Looking for someone who shares similar interests and values. Let's create beautiful memories together!",
    interests: ['Travel', 'Cooking', 'Photography', 'Music', 'Hiking', 'Reading'],
    coverImage: '',
    profileImage: '',
  });

  const updateProfileField = <K extends keyof ProfileData>(
    field: K,
    value: ProfileData[K]
  ) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (type: 'cover' | 'profile') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateProfileField(
        type === 'cover' ? 'coverImage' : 'profileImage',
        imageUrl
      );
    }
  };

  const handleInterestRemove = (interest: string) => {
    updateProfileField(
      'interests',
      profileData.interests.filter((i) => i !== interest)
    );
  };

  const handleInterestAdd = (interest: string) => {
    updateProfileField('interests', [...profileData.interests, interest]);
  };

  return {
    profileData,
    updateProfileField,
    handleImageUpload,
    handleInterestRemove,
    handleInterestAdd,
  };
}