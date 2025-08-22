"use client";

import { use } from "react";
import { useRouter } from "next/navigation";

export default function Studentdetails({ params }) {
  const router = useRouter();

  const students = [
    { name: "Aarav Sharma", rollNo: 101, intro: "Aarav is passionate about coding and enjoys solving logical puzzles." },
    { name: "Priya Verma", rollNo: 102, intro: "Priya loves painting and often participates in art competitions." },
    { name: "Rahul Mehta", rollNo: 103, intro: "Rahul is a sports enthusiast and captain of the school football team." },
    { name: "Sneha Kapoor", rollNo: 104, intro: "Sneha enjoys reading novels and writing short stories." },
    { name: "Karan Singh", rollNo: 105, intro: "Karan is interested in robotics and has built several small projects." },
    { name: "Ananya Gupta", rollNo: 106, intro: "Ananya is excellent at public speaking and debates." },
    { name: "Rohit Malhotra", rollNo: 107, intro: "Rohit has a keen interest in astronomy and loves stargazing." },
    { name: "Ishita Nair", rollNo: 108, intro: "Ishita is a classical dancer who performs at cultural events." },
    { name: "Vikram Joshi", rollNo: 109, intro: "Vikram is good at mathematics and enjoys mentoring his classmates." },
    { name: "Meera Iyer", rollNo: 110, intro: "Meera is passionate about environmental causes and leads eco-club activities." }
  ];

  const path = use(params);
  let rollNum = Number(path.studentdetails);

  let student = students.filter((item) => item.rollNo === rollNum);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 p-6">
      <h1 className="text-4xl font-bold text-emerald-700 mt-6 drop-shadow-sm">
        Student Details
      </h1>

      {student.map((item, index) => (
        <div
          key={index}
          className="w-full md:w-2/3 lg:w-1/2 bg-white rounded-2xl shadow-lg mt-10 p-8 transition transform hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
            {item.name}
          </h2>
          <p className="text-lg mb-2">
            <span className="font-semibold text-gray-700">Roll Number:</span>{" "}
            {item.rollNo}
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-700">About:</span>{" "}
            {item.intro}
          </p>
        </div>
      ))}

      <button
        className="mt-8 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
        onClick={() => router.push("/studentlist")}
      >
        ← Go Back
      </button>
    </div>
  );
}
