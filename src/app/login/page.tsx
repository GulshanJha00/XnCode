'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#0F0420] to-[#3F1186] flex items-center justify-center px-6">
      <div
        className="container w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform duration-500 hover:scale-105"
        style={{
          fontFamily: 'Itim',
        }}
      >
        {/* Left Section */}
        <div className="left w-full md:w-1/2 bg-gradient-to-b from-blue-600 to-blue-400 text-white flex flex-col justify-center items-center p-8 lg:p-12">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome Back!</h1>
          <p className="text-lg lg:text-xl text-center mb-8 animate-fade-in">
            Log in to access your account and continue your journey with us.
          </p>
          <Image
            className="w-[80%] object-cover rounded-xl shadow-lg animate-slide-up"
            src="/xnc.jpg"
            alt="Logo"
            width={500}
            height={300}
          />
        </div>

        {/* Right Section */}
        <div className="right w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 animate-slide-right">
            Log In
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6"
            style={{ animation: 'fade-in 0.5s ease-in' }}
          >
            <div className="relative group">
              <input
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow text-black"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-sm transition-transform group-focus-within:translate-y-[-1rem] group-focus-within:scale-90 group-focus-within:text-blue-500">
                Email
              </span>
            </div>
            <div className="relative group">
              <input
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow text-black"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-sm transition-transform group-focus-within:translate-y-[-1rem] group-focus-within:scale-90 group-focus-within:text-blue-500">
                Password
              </span>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Create an account?{' '}
              <Link href="/signup" className="text-blue-600 font-bold hover:underline">
                Sign Up
              </Link>
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
