"use client"

import React from 'react'

function page() {
  const collegeData = {
    name: "Greenfield Institute of Technology",
    established: 1998,
    location: "Bangalore, Karnataka, India",
    type: "Private Engineering College",
    description:
      "Greenfield Institute of Technology is a leading private institution offering undergraduate and postgraduate programs in engineering, computer science, and management. The college focuses on practical learning, industry exposure, and research-driven education.",
    departments: [
      "Computer Science & Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Business Administration"
    ],
    facilities: [
      "Central Library with 50,000+ books",
      "State-of-the-art computer labs",
      "Modern sports complex",
      "On-campus hostel",
      "Cafeteria & health center"
    ],
    website: "https://www.greenfieldtech.edu",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* College Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">{collegeData.name}</h1>
        <p className="text-gray-600">Established in {collegeData.established}</p>
        <p className="text-gray-600 italic">{collegeData.type}</p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">About</h2>
        <p className="text-gray-700 mt-2">{collegeData.description}</p>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Location</h2>
        <p className="text-gray-700 mt-2">{collegeData.location}</p>
      </div>

      {/* Departments */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Departments</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {collegeData.departments.map((dept, index) => (
            <li key={index}>{dept}</li>
          ))}
        </ul>
      </div>

      {/* Facilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Facilities</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {collegeData.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </div>

      {/* Website */}
      <div className="text-center">
        <a
          href={collegeData.website}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Visit Website
        </a>
      </div>
    </div>
  )
}

export default page
