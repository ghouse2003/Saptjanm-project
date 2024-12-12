export interface ProfileFormData {
  // Basic Information
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  location: string;

  // About Me
  bio: string;
  occupation: string;
  education: string;

  // Preferences
  interestedIn: 'male' | 'female' | 'both';
  ageRange: {
    min: number;
    max: number;
  };
  lookingFor: string[];
  interests: string[];

  // Photos
  profilePhoto?: File;
  galleryPhotos: File[];
}

export type ProfileFormStep = 'basic' | 'about' | 'preferences' | 'photos' | 'review';