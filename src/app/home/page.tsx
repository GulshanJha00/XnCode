import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-0a0a0a flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="w-full p-8 lg:p-12">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
              How is your mood shaping today?
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select the mode that best suits your learning journey. Whether you want to challenge yourself or focus on development, we have got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <Link href="/dsa">
                <div className="relative h-full p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-gray-600 hover:border-indigo-500 transition-all duration-200 space-y-4">
                  <div className="text-2xl font-bold text-white">Battle Mode</div>
                  <p className="text-gray-300">
                    Challenge yourself with data structures and algorithms. Perfect for interview preparation and competitive programming.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">&#8226;</span>
                      Practice coding challenges
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Time-based competitions
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Performance tracking
                    </li>
                  </ul>
                </div>
              </Link>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <Link href="/projects">
                <div className="relative h-full p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-gray-600 hover:border-indigo-500 transition-all duration-200 space-y-4">
                  <div className="text-2xl font-bold text-white">Development Mode</div>
                  <p className="text-gray-300">
                    Focus on building real-world projects and improving your development skills at your own pace.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Project-based learning
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Best practices guidance
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Code reviews & feedback
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Home;