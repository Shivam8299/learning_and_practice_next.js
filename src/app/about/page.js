"use client"

import React from "react";
import { useRouter } from "next/navigation";

function AboutPage() {
  const navigate = useRouter();

  const route = (name) => {
    navigate.push(`/about/${name}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Page</h1>
      
      <div className="flex gap-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white py-2 px-6 rounded-xl shadow-md"
          onClick={() => navigate.push("/")}
        >
          Home Page
        </button>
        
        <button
          className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white py-2 px-6 rounded-xl shadow-md"
          onClick={() => route("aboutCollege")}
        >
          About College
        </button>
        
        <button
          className="bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-white py-2 px-6 rounded-xl shadow-md"
          onClick={() => route("aboutStudent")}
        >
          About Student
        </button>
      </div>
    </div>
  );
}

export default AboutPage;
