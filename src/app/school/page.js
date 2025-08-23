"use client";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter()
  const schools = [
    { name: "Springfield Public School", location: "Delhi, India" },
    { name: "St. Xavier’s High School", location: "Mumbai, India" },
    { name: "Green Valley International School", location: "Bangalore, India" },
    { name: "Sunrise Convent School", location: "Chennai, India" },
    { name: "Hilltop Academy", location: "Pune, India" }
  ];

  return (
    <div className="px-6 py-10 bg-gradient-to-bl from-teal-100 to-emerald-100">
      <h1 className="text-2xl font-bold text-center mb-6">
        All the Schools
      </h1>
      <ul className="space-y-4 max-w-lg mx-auto">
        {schools.map((school, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{school.name}</h2>
            <p className="text-gray-600">{school.location}</p>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button onClick={()=>router.push('/')} className="px-6 py-1 bg-blue-400 text-white rounded my-4">Go Back</button>
      </div>
    </div>
  );
}

export default Page;
