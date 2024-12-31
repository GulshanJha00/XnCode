"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { LuAlarmClock } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";

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
    <div className="flex bg-[#1A1919] w-full h-max">
      <div className="w-1/2 h-screen bg-white">
        <h1 className="text-black">Yo</h1>
      </div>

      <div>
        <div className="w-full bg-[#1A1919] border-2 border-[#312f2f] flex justify-between items-center h-20 px-4 py-4">
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

          <div className="flex  justify-center items-center gap-1">
            <div className="flex justify-center bg-slate-300 p-3 py-1 gap-2 rounded-lg text-black items-center bg-">
              <LuAlarmClock />
              <div
                className={` font-bold ${
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
          </div>

          <div
            className="flex cursor-pointer justify-center items-center p-3 py-2  gap-1 rounded-lg bg-[#1cbd1c] "
            onClick={handleGoBack}
          >
            <RxUpload className=" h-5 w-5 font-bold" />
            <h1
              className="font-semibold "
              style={{
                fontFamily: "Itim",
                fontWeight: 700,
              }}
            >
              Submit
            </h1>
          </div>
        </div>

        <Editor
          height="40vh"
          width="100vh"
          defaultLanguage="cpp"
          defaultValue="//XnCode Is Ready To Serve You Master"
          theme="vs-dark"
          className=" pt-3 pb-3 pl-4 pr-4 border-2 border-[#312f2f] rounded-lg shadow-lg mx-auto"
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
      </div>
    </div>
  );
};

export default Page;
