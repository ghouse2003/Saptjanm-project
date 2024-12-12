import React from 'react';
import type { ProfileFormData } from '../types';

interface AboutStepProps {
  formData: ProfileFormData;
  onUpdate: <K extends keyof ProfileFormData>(field: K, value: ProfileFormData[K]) => void;
}

export function AboutStep({ formData, onUpdate }: AboutStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          About Me
        </label>
        <textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => onUpdate('bio', e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div>
        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
          Occupation
        </label>
        <input
          id="occupation"
          value={formData.occupation}
          onChange={(e) => onUpdate('occupation', e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="education" className="block text-sm font-medium text-gray-700">
          Education
        </label>
        <input
          id="education"
          value={formData.education}
          onChange={(e) => onUpdate('education', e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>
    </div>
  );
}