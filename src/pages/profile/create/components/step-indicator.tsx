import React from 'react';
import { Check } from 'lucide-react';
import type { ProfileFormStep } from '../types';

interface StepIndicatorProps {
  currentStep: ProfileFormStep;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'about', label: 'About Me' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'photos', label: 'Photos' },
    { id: 'review', label: 'Review' },
  ];

  return (
    <nav className="flex justify-between">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = steps.indexOf({ id: currentStep } as any) > index;

        return (
          <div
            key={step.id}
            className={`flex flex-col items-center ${
              index !== steps.length - 1 ? 'w-full' : ''
            }`}
          >
            <div className="relative flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive
                    ? 'bg-primary text-white'
                    : isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              {index !== steps.length - 1 && (
                <div
                  className={`h-0.5 w-full ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
            <span
              className={`mt-2 text-sm ${
                isActive ? 'text-primary font-medium' : 'text-gray-500'
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </nav>
  );
}