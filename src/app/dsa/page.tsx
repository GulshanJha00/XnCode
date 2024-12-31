"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/navigation'; 
import { LuAlarmClock } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";

const Page = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }
  return (
    <div className="flex bg-black w-full h-max">
      <div className="w-1/2 h-screen bg-white">
        
        <h1 className="text-black">Yo</h1>
      </div>
      <div>
        <div className="w-full flex justify-between items-center h-20 p-2 py-4">
          <div className="flex cursor-pointer justify-center items-center p-3 py-2 gap-1 rounded-lg bg-[#745cee]" onClick={handleGoBack}>
            <IoArrowBack className="text-[#1cbd1c] h-5 w-5 font-bold" />
            <h1 className="font-semibold"
            style={{
              fontFamily: "Itim",
              fontWeight: 700,
             }}>Go Back</h1>
          </div>

          <div className="flex">
            <button>
              <LuAlarmClock />
            </button>

            <FaPlay />
          </div>

          <div className="flex cursor-pointer justify-center items-center p-3 py-2  gap-1 rounded-lg bg-[#1cbd1c] " onClick={handleGoBack}>
            <RxUpload className=" h-5 w-5 font-bold" />
            <h1 className="font-semibold "
            style={{
              fontFamily: "Itim",
              fontWeight: 700,
             }}>Submit</h1>
          </div>
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

export default Page;