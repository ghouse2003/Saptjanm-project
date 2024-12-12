import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProgressBar } from './components/progress-bar';
import { StepIndicator } from './components/step-indicator';
import { BasicInfoStep } from './steps/basic-info-step';
import { AboutStep } from './steps/about-step';
import { useProfileCreation } from './hooks/useProfileCreation';

export function CreateProfile() {
  const {
    formData,
    currentStep,
    progress,
    updateFormData,
    handleNext,
    handleBack,
    handleSubmit,
  } = useProfileCreation();

  const renderStep = () => {
    switch (currentStep) {
      case 'basic':
        return <BasicInfoStep formData={formData} onUpdate={updateFormData} />;
      case 'about':
        return <AboutStep formData={formData} onUpdate={updateFormData} />;
      // Add other steps here
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8">
              Create Your Profile
            </h1>

            <div className="mb-8">
              <StepIndicator currentStep={currentStep} />
            </div>

            <div className="mb-6">
              <ProgressBar progress={progress} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 'basic'}
              >
                Back
              </Button>

              <Button onClick={currentStep === 'review' ? handleSubmit : handleNext}>
                {currentStep === 'review' ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}