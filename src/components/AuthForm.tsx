'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  type: 'signin' | 'signup';
  onSubmit: (data: any) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'signup' && (
        <div>
          <label htmlFor="fullName" className="block text-body-medium font-medium text-dark-900 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-light-400 rounded-lg text-body text-dark-900 placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-colors"
            required
          />
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-body-medium font-medium text-dark-900 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="johndoe@gmail.com"
          className="w-full px-4 py-3 border border-light-400 rounded-lg text-body text-dark-900 placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-colors"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-body-medium font-medium text-dark-900 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="minimum 8 characters"
            className="w-full px-4 py-3 pr-12 border border-light-400 rounded-lg text-body text-dark-900 placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-colors"
            required
            minLength={8}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-500 hover:text-dark-900 transition-colors"
          >
            <span className="sr-only">
              {showPassword ? 'Hide password' : 'Show password'}
            </span>
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full bg-dark-900 text-light-100 py-3 px-4 rounded-full text-body-medium font-medium hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-dark-900 focus:ring-offset-2 transition-colors"
      >
        {type === 'signin' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}
