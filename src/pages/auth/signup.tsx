import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthCard } from '@/components/auth/auth-card';
import { GoogleAuthButton } from '@/components/auth/google-auth-button';
import { signUpSchema } from '@/lib/validations/auth';

type SignUpValues = z.infer<typeof signUpSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpValues) => {
    try {
      // TODO: Implement sign up logic
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSuccess = (response: any) => {
    // TODO: Implement Google sign up logic
    console.log('Google sign up success:', response);
  };

  const handleGoogleError = (error: any) => {
    console.error('Google sign up error:', error);
  };

  return (
    <AuthCard
      title="Create an account"
      subtitle="Start your journey to find love"
    >
      <div className="mt-8 space-y-6">
        <GoogleAuthButton
          text="Sign up with Google"
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register('email')}
                error={errors.email?.message}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                {...register('password')}
                error={errors.password?.message}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                {...register('confirmPassword')}
                error={errors.confirmPassword?.message}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              Create account
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="font-medium text-primary hover:text-primary/80">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthCard>
  );
}