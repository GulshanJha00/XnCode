// components/Logout.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Logout: React.FC = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      // Clear the user-related data from localStorage
      localStorage.removeItem("userId");
      localStorage.removeItem("token"); 
      localStorage.setItem("isLoggedIn", "false");

      
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        
        router.push('/');  
      } else {
        setError("Failed to log out. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during logout.");
      console.error("Logout error:", err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        disabled={isLoggingOut}
        className="bg-red-500 text-white py-2 px-4 rounded-sm text-xl"
      >
        {isLoggingOut ? 'Logging out...' : 'Logout'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Logout;
