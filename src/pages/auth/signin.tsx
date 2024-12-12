import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthCard } from '@/components/auth/auth-card';
import { GoogleAuthButton } from '@/components/auth/google-auth-button';
import { signInSchema } from '@/lib/validations/auth';

type SignInValues = z.infer<typeof signInSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInValues) => {
    try {
      // TODO: Implement sign in logic
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSuccess = (response: any) => {
    // TODO: Implement Google sign in logic
    console.log('Google sign in success:', response);
  };

  const handleGoogleError = (error: any) => {
    console.error('Google sign in error:', error);
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <div className="mt-8 space-y-6">
        <GoogleAuthButton
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
                autoComplete="current-password"
                {...register('password')}
                error={errors.password?.message}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-primary hover:text-primary/80">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-primary hover:text-primary/80">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthCard>
  );
}