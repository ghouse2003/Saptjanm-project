import { useState } from 'react';
import type { ProfileFormData, ProfileFormStep } from '../types';

const INITIAL_FORM_DATA: ProfileFormData = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  gender: 'male',
  location: '',
  bio: '',
  occupation: '',
  education: '',
  interestedIn: 'both',
  ageRange: { min: 18, max: 50 },
  lookingFor: [],
  interests: [],
  galleryPhotos: [],
};

export function useProfileCreation() {
  const [formData, setFormData] = useState<ProfileFormData>(INITIAL_FORM_DATA);
  const [currentStep, setCurrentStep] = useState<ProfileFormStep>('basic');
  const [progress, setProgress] = useState(0);

  const updateFormData = <K extends keyof ProfileFormData>(
    field: K,
    value: ProfileFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    const steps: ProfileFormStep[] = ['basic', 'about', 'preferences', 'photos', 'review'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
      setProgress(((currentIndex + 2) / steps.length) * 100);
    }
  };

  const handleBack = () => {
    const steps: ProfileFormStep[] = ['basic', 'about', 'preferences', 'photos', 'review'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
      setProgress(((currentIndex) / steps.length) * 100);
    }
  };

  const handleSubmit = async () => {
    try {
      // TODO: Implement API call to save profile
      console.log('Submitting profile:', formData);
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  return {
    formData,
    currentStep,
    progress,
    updateFormData,
    handleNext,
    handleBack,
    handleSubmit,
  };
}