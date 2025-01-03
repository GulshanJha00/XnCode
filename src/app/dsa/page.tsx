"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { RxUpload } from "react-icons/rx";
import ProtectedRoute from "@/components/ProtectedRoute";
import questions from "../data/questions";

const Page = () => {
  const quesData = questions[0];
  const [time, setTime] = useState(20000);
  const [selectedTestCase, setSelectedTestCase] = useState<{
    input: string;
    output: string;
  } | null>(null);

  const testCases = [
    { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
    { input: "head = [2,1], x = 2", output: "[1,2]" },
    { input: "head = [5,1,7,3], x = 4", output: "[1,3,5,7]" },
  ];

  useEffect(() => {
    if (time <= 0) return;
    const timer = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const formatTime = (timeInMs: number) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const clearTestCase = () => {
    setSelectedTestCase(null);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        {/* Header */}
        <header className="h-16 bg-purple-800 flex justify-between items-center px-6 shadow-lg">
          <h1 className="text-2xl font-bold tracking-wide">XnCode</h1>
          <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Help
          </button>
        </header>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Problem Statement Section */}
          <aside className="w-full md:w-1/2 bg-gray-800 p-6 overflow-y-auto border-r border-gray-700">
            <h2 className="text-3xl font-extrabold mb-4">{`${quesData.title}`}</h2>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-yellow-300 text-black px-3 py-1 rounded-full">{`${quesData.difficulty}`}</span>
              <span className="bg-gray-600 text-yellow-300 px-3 py-1 rounded-full">
                Avg Time: {`${quesData.avgTime}`}
              </span>
              <span className="bg-gray-600 text-yellow-300 px-3 py-1 rounded-full">
                Expected Complexity: {`${quesData.expectedComplexity}`}
              </span>
            </div>

            <p className="mb-6">
              {`${quesData.description}`}
            </p>

            <div className="mb-6">
              <h3 className="font-semibold">Example 1:</h3>
              <p>Input: {`${quesData.examples[0].input}`}</p>
              <p>Output: {`${quesData.examples[0].output}`}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold">Example 2:</h3>
              <p>Input: {`${quesData.examples[1].input}`}</p>
              <p>Output: {`${quesData.examples[1].output}`}</p>
            </div>

            <h3 className="font-semibold mb-3">Constraints:</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>The number of nodes in the list is in the range [0, 200].</li>
              <li>{`-100 <= Node.val <= 100`}</li>
              <li>{`-200 <= x <= 200`}</li>
            </ul>
          </aside>

          {/* Editor and Actions Section */}
          <main className="w-full md:w-1/2 flex flex-col">
            {/* Actions */}
            <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                <IoArrowBack /> Go Back
              </button>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
                  <LuAlarmClock className="text-yellow-400" />
                  <span
                    className={`font-bold ${
                      time <= 10000 ? "text-red-500 animate-pulse" : "text-green-400"
                    }`}
                  >
                    {formatTime(time)}
                  </span>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
                  <FaPlay /> Run
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                  <RxUpload /> Submit
                </button>
              </div>

              <select
                name="language"
                className="bg-gray-700 text-white px-3 py-2 rounded-md"
              >
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
              </select>
            </div>

            {/* Code Editor */}
            <Editor
              height="55vh"
              width="100%"
              defaultLanguage="cpp"
              defaultValue="// Write your code here"
              theme="vs-dark"
              options={{
                fontSize: 16,
                fontFamily: "'Source Code Pro', monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
              }}
            />

            {/* Test Cases */}
            <div className="bg-gray-800 p-4 h-64 overflow-y-auto">
              <h3 className="text-lg font-semibold mb-3">Test Cases</h3>
              <div className="flex gap-2 mb-4">
                {testCases.map((testCase, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTestCase(testCase)}
                    className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Test Case {index + 1}
                  </button>
                ))}
              </div>
              {selectedTestCase ? (
                <div className="p-4 bg-gray-700 rounded-lg">
                  <p>
                    <strong>Input:</strong> {selectedTestCase.input}
                  </p>
                  <p>
                    <strong>Output:</strong> {selectedTestCase.output}
                  </p>
                  <button
                    onClick={clearTestCase}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Clear
                  </button>
                </div>
              ) : (
                <p className="text-gray-400">Select a test case to view details.</p>
              )}
            </div>
          </main>
        </div>
      </div>
  );
};

export default Page;
