'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(username, name, email, password);
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
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Join the Community!</h1>
          <p className="text-lg lg:text-xl text-center mb-8 animate-fade-in">
            Create an account to start coding, creating, and conquering with us.
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
            Sign Up
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
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-sm transition-transform group-focus-within:translate-y-[-1rem] group-focus-within:scale-90 group-focus-within:text-blue-500">
                Username
              </span>
            </div>
            <div className="relative group">
              <input
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow text-black"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-sm transition-transform group-focus-within:translate-y-[-1rem] group-focus-within:scale-90 group-focus-within:text-blue-500">
                Name
              </span>
            </div>
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
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 font-bold hover:underline">
                Log In
              </Link>
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
