import React from "react";
import ListCard from "@/components/ListCard";
import Link from "next/link";

const Home = () => {

  return (
    <>
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hi, Prasoon 👽</h2>
        <div className="flex items-center gap-1">
          <div className="inputBox w-[400px]">
            <input type="text" placeholder="Search here..." />
          </div>
          <button className="bg-gradient-to-b from-indigo-900 to-purple-900 w-14 h-10 text-white py-2 px-4 rounded-sm mb-3 text-[10px] text-xl">+</button>
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
    </>
  );
};

export default Home;
