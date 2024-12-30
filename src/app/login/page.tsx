'use client';
import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    
    console.log(email, password);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-0a0a0a flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl h-132 bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-500 hover:shadow-indigo-500/25">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-indigo-900 to-purple-900 text-white flex flex-col justify-center items-center p-8 lg:p-12">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
              Welcome Back!
            </h1>
            <p className="text-lg text-center text-gray-300">
              Log in to access your account and continue your journey with us.
            </p>
            {/* <div className="relative w-full mt-8">
              <Image
                className="object-cover rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                src="/xnc.jpg"
                alt="Logo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-lg">
          <div className="max-w-md mx-auto w-full space-y-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Log In
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-transparent peer"
                    required
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-sm text-gray-400 transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 
                    peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>

                <div className="relative group">
                  <input
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-transparent peer"
                    required
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-4 top-1 text-sm text-gray-400 transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 
                    peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-white/10" />
                  <span className="ml-2">Remember me</span>
                </label>
                <Link href="/#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg 
                font-medium transition-all duration-200 transform hover:translate-y-[-2px] 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  'Log In'
                )}
              </button>

              <p className="text-center text-gray-400">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
