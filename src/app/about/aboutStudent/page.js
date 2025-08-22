"use client"

import React from "react";

function Page() {
  const students = [
    { name: "Aarav Sharma", rollNo: "101", intro: "A passionate coder who loves JavaScript and problem-solving." },
    { name: "Priya Singh", rollNo: "102", intro: "Enjoys designing user interfaces and exploring frontend development." },
    { name: "Rohan Patel", rollNo: "103", intro: "Aspiring data scientist with a keen interest in AI and ML." },
    { name: "Simran Kaur", rollNo: "104", intro: "Tech enthusiast who loves working on web development projects." },
    { name: "Vikram Verma", rollNo: "105", intro: "Enjoys competitive programming and backend development." },
    { name: "Neha Gupta", rollNo: "106", intro: "Creative thinker, loves UI/UX design and animations." },
    { name: "Aditya Raj", rollNo: "107", intro: "Full-stack learner passionate about building scalable applications." },
    { name: "Kriti Mehra", rollNo: "108", intro: "Enjoys writing blogs about tech and sharing knowledge." },
    { name: "Sahil Khan", rollNo: "109", intro: "Backend enthusiast with interest in Node.js and databases." },
    { name: "Ananya Mishra", rollNo: "110", intro: "Focused on mobile app development and cross-platform apps." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-teal-100 to-emerald-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Our Students
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {student.name}
            </h2>
            <p className="text-sm text-gray-500">Roll No: {student.rollNo}</p>
            <p className="mt-3 text-gray-600">{student.intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
