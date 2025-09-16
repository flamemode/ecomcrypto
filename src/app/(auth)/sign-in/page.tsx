'use client';

import Link from 'next/link';
import { AuthForm } from '@/components/AuthForm';
import { SocialProviders } from '@/components/SocialProviders';

export default function SignInPage() {
  const handleFormSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    
    const { signIn } = await import('@/lib/auth/actions');
    const result = await signIn(formData);
    
    if (result.error) {
      console.error('Sign in error:', result.error);
    } else {
      console.log('Sign in successful:', result.user);
      window.location.href = '/';
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
  };

  const handleAppleSignIn = () => {
    console.log('Apple sign in clicked');
  };

  return (
    <div className="space-y-8">
      <div className="text-right">
        <span className="text-body text-dark-500">Don't have an account? </span>
        <Link 
          href="/sign-up" 
          className="text-body-medium font-medium text-dark-900 hover:text-dark-700 transition-colors underline"
        >
          Sign Up
        </Link>
      </div>
      
      <div className="text-center">
        <h1 className="text-heading-2 font-jost text-dark-900 mb-4">
          Welcome Back!
        </h1>
        <p className="text-body text-dark-500">
          Sign in to your account to continue your fitness journey
        </p>
      </div>
      
      <SocialProviders 
        onGoogleClick={handleGoogleSignIn}
        onAppleClick={handleAppleSignIn}
      />
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-light-400" />
        </div>
        <div className="relative flex justify-center text-caption">
          <span className="bg-light-100 px-4 text-dark-500">Or sign in with</span>
        </div>
      </div>
      
      <AuthForm type="signin" onSubmit={handleFormSubmit} />
    </div>
  );
}
