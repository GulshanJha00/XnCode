"use client";
import React, { useState } from "react";
import ListCard from "@/components/ListCard";
import Link from "next/link";

const Home = () => {
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hi, Prasoon 👽</h2>
        <div className="flex items-center gap-1">
          <div className="inputBox w-[400px]">
            <input type="text" placeholder="Search here..." />
          </div>
          <button
            onClick={() => setIsCreateModelShow(true)}
            className="bg-gradient-to-b from-indigo-900 to-purple-900 w-14 h-10 text-white py-2 px-4 rounded-sm mb-3 text-[10px] text-xl"
          >
            +
          </button>
        </div>
      </div>

      <div className="cards">
        <div className="list px-[100px]">
          <Link href="/editor">
            <ListCard />
          </Link>

          <Link href="/editor">
            <ListCard />
          </Link>
        </div>
      </div>

      {isCreateModelShow ? (
        <div className="createModelCon fixed top-0 left-0 bottom-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex items-center justify-center">
          <div className="createModel w-[25vw] h-[30vh] shadow-lg shadow-black/50 bg-[#141414] rounded-[10px] p-[20px]">
            <h3 className="text-2xl">Create New Project</h3>
            <div className="relative group">
              <input
                className="w-full mt-2 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white peer"
                type="text"
                id="project title"
                placeholder="project title"
              />
            </div>

            <div className="flex items-center gap-[10px] w-full mt-2">
              <button className="btnBlue bg-blue-600 rounded-[5px] mb-4 w-[49%] !p-[5px] !px-[10px] !py-[10px]">
                Create
              </button>
              <button
                onClick={() => setIsCreateModelShow(false)}
                className="btnBlue !bg-[#1A1919] rounded-[5px] mb-4 w-[49%] !p-[5px] !px-[10px] !py-[10px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
