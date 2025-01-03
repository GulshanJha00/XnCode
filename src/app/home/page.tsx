import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-6xl bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden">
        <div className="w-full p-8 lg:p-12 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Code Like a Pro
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the mode that matches your goals. Whether it's{" "}
              <span className="text-green-400 font-bold">
                mastering challenges
              </span>{" "}
              or{" "}
              <span className="text-blue-400 font-bold">building projects</span>
              , we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Battle Mode */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <Link href="/dsa">
                <div className="relative p-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 space-y-4">
                  <h2 className="text-2xl font-semibold text-green-400">
                    Battle Mode
                  </h2>
                  <p className="text-gray-400">
                    Challenge yourself with DSA-focused problems, perfect for
                    interview prep and coding competitions.
                  </p>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-green-400">&#8226;</span>
                      Competitive coding challenges
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-400">&#8226;</span>
                      Time-based contests
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-400">&#8226;</span>
                      Real-time performance tracking
                    </li>
                  </ul>
                </div>
              </Link>
            </div>

            {/* Development Mode */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <Link href="/projects">
                <div className="relative p-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 space-y-4">
                  <h2 className="text-2xl font-semibold text-blue-400">
                    Development Mode
                  </h2>
                  <p className="text-gray-400">
                    Build real-world projects with step-by-step guidance and
                    feedback.
                  </p>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-400">&#8226;</span>
                      Project-based learning
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-400">&#8226;</span>
                      Best coding practices
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-400">&#8226;</span>
                      Personalized code reviews
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
