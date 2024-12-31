"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./pages/Navbar";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      {/* Conditionally render Navbar */}
      {pathname !== "/dsa" && <Navbar />}
      {children}
    </div>
  );
};

export default Provider;
