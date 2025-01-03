import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { RxUpload } from "react-icons/rx";
import questions from "../data/questions";

interface questions{
  title : string,
  testCases: string,
  timeInMs: string,
  difficulty: string,
  avgTime: string,
  expectedComplexity: string,


}
const Page = () => {
  const [quesData, setQuesData] = useState(null);
  const [time, setTime] = useState(20000);

  // Set the random question once on component mount
  useEffect(() => {
    const i = Math.floor(Math.random() * 41);
    console.log(i); // For debugging
    setQuesData(questions[i]);
  }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

  const testCases = [
    {
      input: quesData?.testCases[0]?.input,
      output: quesData?.testCases[0]?.output,
    },
    quesData?.testCases[1]
      ? {
          input: quesData.testCases[1]?.input,
          output: quesData.testCases[1]?.output,
        }
      : null,
    quesData?.testCases[2]
      ? {
          input: quesData.testCases[2]?.input,
          output: quesData.testCases[2]?.output,
        }
      : null,
  ].filter(Boolean); // Filter out null values

  // Default to the first test case or null if no valid test cases exist
  const [selectedTestCase, setSelectedTestCase] = useState(
    testCases.length > 0 ? testCases[0] : null
  );

  useEffect(() => {
    if (time <= 0) return;
    const timer = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const formatTime = (timeInMs) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!quesData) return <div>Loading...</div>; // Display a loading message until quesData is available

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="h-16 flex justify-between items-center px-6 bg-black text-white border-b border-gray-700">
        {/* Left side: Your info */}
        <div className="flex items-center space-x-4">
          <img
            src="your-avatar.jpg"
            alt="Your Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col text-left">
            <span className="text-xl font-mono font-semibold">YourName</span>
            <span className="text-sm text-gray-400">Rating: 120</span>
          </div>
        </div>

        {/* Center: Timer */}
        <div className="text-2xl font-mono font-bold text-purple-500">
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
        </div>

        {/* Right side: Opponent info */}
        <div className="flex items-center space-x-4">
          <img
            src="opponent-avatar.jpg"
            alt="Opponent Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col text-right">
            <span className="text-xl font-mono font-semibold">
              OpponentName
            </span>
            <span className="text-sm text-gray-400">Rating: 110</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Problem Statement Section */}
        <aside className="w-full md:w-1/2 bg-gray-800 p-6 overflow-y-auto border-r border-gray-700">
          <h2 className="text-3xl font-extrabold mb-4">{quesData.title}</h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-300 text-black px-3 py-1 rounded-full">
              {quesData.difficulty}
            </span>
            <span className="bg-gray-600 text-yellow-300 px-3 py-1 rounded-full">
              Avg Time: {quesData.avgTime}
            </span>
            <span className="bg-gray-600 text-yellow-300 px-3 py-1 rounded-full">
              Expected Complexity: {quesData.expectedComplexity}
            </span>
          </div>

          <p className="mb-6">{quesData.description}</p>

          <div>
            {quesData.examples.map((example, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-semibold mb-2">Example {index + 1}:</h3>
                <p>Input: {example.input}</p>
                <p>Output: {example.output}</p>
              </div>
            ))}
          </div>

          <h3 className="font-semibold mb-3">Constraints:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {quesData.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
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
            {selectedTestCase && (
              <div className="p-4 bg-gray-700 rounded-lg">
                <p>
                  <strong>Input:</strong> {selectedTestCase.input}
                </p>
                <p>
                  <strong>Output:</strong> {selectedTestCase.output}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
