"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";

const page = () => {
  return (
    <div className="flex bg-black w-full h-max">
      <div className="w-1/2 h-screen bg-white">
        
        <h1 className="text-black">Yo</h1>
      </div>
      <div>
        <div className="w-full flex justify-between items-center h-20 p-2 py-4">
          <div className="flex justify-center items-center p-3 gap-1 rounded-lg bg-[#3F1186]">
            <IoArrowBack className="text-green-700 h-5 w-5 font-bold" />
            <h1 className="font-semibold">Go Back</h1>
          </div>

          <div className="flex">
            <button>
              <LuAlarmClock />
            </button>

            <FaPlay />
          </div>

          <h1>Submit</h1>
        </div>

        <Editor
          height="40vh"
          width="100vh"
          defaultLanguage="cpp"
          defaultValue="//XnCode Is Ready To Serve You Master"
          theme="vs-dark"
          className=""
        />
      </div>
    </div>
  );
};

export default page;
