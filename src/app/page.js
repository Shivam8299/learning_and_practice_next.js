"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-100 px-6">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-emerald-700 drop-shadow-sm text-center">
        Welcome to Home Page
      </h1>
      <p className="text-gray-600 mt-4 text-lg text-center max-w-xl">
        Navigate through the app using the links below. Explore different pages
        and student details.
      </p>

      {/* Navigation Links */}
      <div className="flex gap-10 justify-center py-10">
        <Link
          className="text-lg text-emerald-700 font-medium hover:text-emerald-900 hover:underline transition"
          href="/login"
        >
          Go to Login Page
        </Link>
        <Link
          className="text-lg text-emerald-700 font-medium hover:text-emerald-900 hover:underline transition"
          href="/about"
        >
          Go to About Page
        </Link>
        <Link
          className="text-lg text-emerald-700 font-medium hover:text-emerald-900 hover:underline transition"
          href="/productlist"
        >
          Go to Product Page
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <button
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
          onClick={() => router.push("/login")}
        >
          Login Page
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
          onClick={() => router.push("/about")}
        >
          About Page
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
          onClick={() => router.push("/studentlist")}
        >
          Student Page
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
          onClick={() => router.push("/school")}
        >
          School Page
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
          onClick={() => router.push("/productlist")}
        >
          product page
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
          onClick={() => router.push("/users")}
        >
          users page
        </button>
      </div>
    </div>
  );
}

export default Page;
