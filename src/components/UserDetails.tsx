import React, { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  // [key: string]: any; 
}

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
       
        const userId = localStorage.getItem("userId");
    
        if (!userId) {
          throw new Error("No userId found in localStorage");
        }
    
        // Fetch user details using the userId
        const response = await fetch(`/api/getUserDetails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      }
    };
    

    fetchUserDetails();
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return <h2 className="text-2xl">Hi, {user.name} 👽</h2>;
};

export default UserDetails;
