"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { LuAlarmClock } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";

import ProtectedRoute from "@/components/ProtectedRoute";


const Page = () => {
  const [time, setTime] = useState(20000);

  useEffect(() => {
    if (time <= 0) return;
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const router = useRouter();
 

  

  const handleGoBack = () => {
    router.back();
  };
  const formatTime = (timeInMs: number) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <ProtectedRoute>
    <>
      <div className="h-12 w-full bg-red-600 flex justify-center items-center">
        <h1>Yaha kya dalna hai pata nahi abhi par dekhenge </h1>
      </div>

      <div className="flex bg-[#39324c] w-full h-max">
        <div className="w-1/2 p-5 h-[755px] text-white border-y-4 border-x-4 border-[#0F0420] bg-[#39324c] overflow-scroll ">
          <h1 className="text-3xl font-bold mb-2">86. Partition List</h1>
          <span className="text-yellow-300 mr-2 p-1 rounded-md bg-gray-400">
            Medium
          </span>
          <span className="text-yellow-300 mx-2  p-1 rounded-md bg-gray-400">
            Average Time:- 7 Min
          </span>
          <span className="text-yellow-300 mx-2  p-1 rounded-md bg-gray-400">
            Expected Complexity:- o(logn)
          </span>
          <p className="mt-8 mb-10">
            Given the head of a linked list and a value x, partition it such
            that all nodes less than x come before nodes greater than or equal
            to x. You should preserve the original relative order of the nodes
            in each of the two partitions.
          </p>

          <hr />
          <br />

          <h1 className="font-bold">Example 1:</h1>
          <p className="ml-4">Input: head = [1,4,3,2,5,2], x = 3</p>
          <p className="ml-4"> Output: [1,2,2,4,3,5]</p>
          <br />

          <hr />
          <br />

          <h1 className="font-bold">Example 2:</h1>
          <p className="ml-4">Input: head = [2,1], x = 2</p>
          <p className="ml-4"> Output: [1,2]</p>
          <br />

          <hr />

          <br />
          <br />
          <h1 className="font-bold">Constraints:</h1>
          <ul style={{ listStyleType: "circle", marginLeft: "40px" }}>
            <li>The number of nodes in the list is in the range [0, 200].</li>
            <li>{`-100 <= Node.val <= 100`}</li>
            <li>{`-200 <= x <= 200`}</li>
          </ul>
        </div>

        <div className="">
          <div
            className="w-full bg-[#39324c] flex justify-between items-center h-20 px-4 py-4"
            style={{ borderColor: "#0F0420", borderWidth: "4px" }}
          >
            <div
              className="flex cursor-pointer justify-center items-center p-3 py-2 gap-1 rounded-lg bg-[#745cee]"
              onClick={handleGoBack}
            >
              <IoArrowBack className="text-[#1cbd1c] h-5 w-5 font-bold" />
              <h1
                className="font-semibold"
                style={{
                  fontFamily: "Itim",
                  fontWeight: 700,
                }}
              >
                Go Back
              </h1>
            </div>

            <div className="flex justify-center items-center gap-1">
              <div className="flex justify-center bg-slate-300 p-3 py-1 gap-2 rounded-lg text-black items-center bg-">
                <LuAlarmClock />
                <div
                  className={`font-bold ${
                    time <= 10000
                      ? "text-red-500 animate-pulse"
                      : "text-green-700"
                  }`}
                >
                  {formatTime(time)}
                </div>
              </div>

              <div className="flex cursor-pointer justify-center items-center bg-slate-300 text-black p-3 py-1 gap-1 rounded-lg">
                <FaPlay />
                <h1>Run</h1>
              </div>
              <div
                className="flex cursor-pointer justify-center items-center p-2 py-1 gap-1 rounded-lg bg-[#1cbd1c]"
                onClick={handleGoBack}
              >
                <RxUpload className="h-5 w-5 font-bold" />
                <h1
                  className="font-semibold"
                  style={{ fontFamily: "Itim", fontWeight: 700 }}
                >
                  Submit
                </h1>
              </div>
            </div>
            <div>
              <select
                name="change"
                defaultValue={2}
                id="1"
                className="bg-slate-300 p-2 w-max rounded-md text-black"
              >
                <option value="1">C</option>
                <option value="2">C++</option>
                <option value="3">JavaScript</option>
                <option value="4">Java</option>
                <option value="5">Python</option>
              </select>
            </div>

            
          </div>

          <Editor
            height="50vh"
            width="100vh"
            defaultLanguage="cpp"
            defaultValue="//XnCode Is Ready To Serve You Master"
            theme="vs-dark"
            className="pt-3 pb-3 pl-4 pr-4 border-l-8 border-b-2 border-x-4 border-[#0F0420] mx-auto"
            options={{
              fontSize: 16, // Adjust font size for better readability
              fontFamily: "'Source Code Pro', monospace",
              lineNumbers: "on",
              renderWhitespace: "all",
              cursorStyle: "line",
              scrollBeyondLastLine: true,
              minimap: { enabled: false },
              wordWrap: "on",
              smoothScrolling: true,
            }}
          />
          <div
            className="pl-4 h-64"
            style={{ borderColor: "#0F0420", borderWidth: "4px" }}
          >
            <h1>Test Cases</h1>
          </div>
        </div>
      </div>
    </>
    </ProtectedRoute>
  );
};

export default Page;
