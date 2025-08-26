import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Teacher Login
        </h1>
        <form className="flex flex-col space-y-4">
          <input
            className="outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Name"
          />
          <input
            type="email"
            className="outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Email"
          />
          <input
            className="outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Roll Number"
          />
          <input
            type="password"
            className="outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Password"
          />
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold shadow-md transition">
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  )
}

export default page