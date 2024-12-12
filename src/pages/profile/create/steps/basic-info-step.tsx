import React from 'react';
import { Input } from '@/components/ui/input';
import type { ProfileFormData } from '../types';

interface BasicInfoStepProps {
  formData: ProfileFormData;
  onUpdate: <K extends keyof ProfileFormData>(field: K, value: ProfileFormData[K]) => void;
}

export function BasicInfoStep({ formData, onUpdate }: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onUpdate('firstName', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onUpdate('lastName', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onUpdate('email', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <Input
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => onUpdate('dateOfBirth', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          value={formData.gender}
          onChange={(e) => onUpdate('gender', e.target.value as any)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => onUpdate('location', e.target.value)}
          placeholder="City, Country"
        />
      </div>
    </div>
  );
}