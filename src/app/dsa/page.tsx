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
    <>
    <div className="h-[755px] w-4 bg-slate-700 absolute left-[627px]"></div>
   
    <div className="flex bg-[#1A1919]    w-full h-max">
        <div className="w-1/2 p-5 h-[755px] text-white border-y-8 border-x-4 border-slate-700 bg-[#1E1E1E]">
          <h1 className="text-3xl font-bold">86. Partition List
          </h1>
        </div>

      <div className="">
          <div className="w-full bg-[#1A1919] border-x-4 border-b-4 border-t-8 border-slate-700 flex justify-between items-center h-20 px-4 py-4">
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
          height="50vh"
          width="100vh"
          defaultLanguage="cpp"
          defaultValue="//XnCode Is Ready To Serve You Master"
          theme="vs-dark"
          className=" pt-3 pb-3 pl-4 pr-4 border-l-8 border-b-8 border-x-4 border-slate-700 shadow-lg mx-auto"
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
        <div className="pl-4 h-64 border-b-8 border-x-4 border-slate-700  ">
          <h1>Test Cases</h1>
        </div>

      </div>


      
    </div>
    </>
  );
};

export default Page;
