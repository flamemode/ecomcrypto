'use client';

import Link from 'next/link';
import { AuthForm } from '@/components/AuthForm';
import { SocialProviders } from '@/components/SocialProviders';

export default function SignUpPage() {
  const handleFormSubmit = (data: any) => {
    console.log('Sign up form submitted:', data);
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
  };

  const handleAppleSignUp = () => {
    console.log('Apple sign up clicked');
  };

  return (
    <div className="space-y-8">
      <div className="text-right">
        <span className="text-body text-dark-500">Already have an account? </span>
        <Link 
          href="/sign-in" 
          className="text-body-medium font-medium text-dark-900 hover:text-dark-700 transition-colors underline"
        >
          Sign In
        </Link>
      </div>
      
      <div className="text-center">
        <h1 className="text-heading-2 font-jost text-dark-900 mb-4">
          Join EcomCrypto Today!
        </h1>
        <p className="text-body text-dark-500">
          Create your account to start your fitness journey
        </p>
      </div>
      
      <SocialProviders 
        onGoogleClick={handleGoogleSignUp}
        onAppleClick={handleAppleSignUp}
      />
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-light-400" />
        </div>
        <div className="relative flex justify-center text-caption">
          <span className="bg-light-100 px-4 text-dark-500">Or sign up with</span>
        </div>
      </div>
      
      <AuthForm type="signup" onSubmit={handleFormSubmit} />
      
      <div className="text-center text-caption text-dark-500">
        By signing up, you agree to our{' '}
        <Link href="/terms-of-use" className="text-dark-900 hover:text-dark-700 transition-colors underline">
          Terms of Service
        </Link>
        {' '}and{' '}
        <Link href="/privacy-policy" className="text-dark-900 hover:text-dark-700 transition-colors underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
