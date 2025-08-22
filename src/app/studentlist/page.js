"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function StudentList() {
  const router = useRouter();
  const students = [
    {
      name: "Aarav Sharma",
      rollNo: 101,
      intro:
        "Aarav is passionate about coding and enjoys solving logical puzzles.",
    },
    {
      name: "Priya Verma",
      rollNo: 102,
      intro: "Priya loves painting and often participates in art competitions.",
    },
    {
      name: "Rahul Mehta",
      rollNo: 103,
      intro:
        "Rahul is a sports enthusiast and captain of the school football team.",
    },
    {
      name: "Sneha Kapoor",
      rollNo: 104,
      intro: "Sneha enjoys reading novels and writing short stories.",
    },
    {
      name: "Karan Singh",
      rollNo: 105,
      intro:
        "Karan is interested in robotics and has built several small projects.",
    },
    {
      name: "Ananya Gupta",
      rollNo: 106,
      intro: "Ananya is excellent at public speaking and debates.",
    },
    {
      name: "Rohit Malhotra",
      rollNo: 107,
      intro: "Rohit has a keen interest in astronomy and loves stargazing.",
    },
    {
      name: "Ishita Nair",
      rollNo: 108,
      intro: "Ishita is a classical dancer who performs at cultural events.",
    },
    {
      name: "Vikram Joshi",
      rollNo: 109,
      intro:
        "Vikram is good at mathematics and enjoys mentoring his classmates.",
    },
    {
      name: "Meera Iyer",
      rollNo: 110,
      intro:
        "Meera is passionate about environmental causes and leads eco-club activities.",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl text-center mt-4">List of All the Students</h1>
      {students.map((item) => (
        <ul key={item.rollNo} className="">
          <li className="text-center mt-3 text-lg text-gray-600">
            <Link href={"/studentlist/" + item.rollNo}>{item.name}</Link>
          </li>
        </ul>
      ))}
      <button
        className="mt-8 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:opacity-90 transition"
        onClick={() => router.push("/")}
      >
        ← Go Back
      </button>
    </div>
  );
}
