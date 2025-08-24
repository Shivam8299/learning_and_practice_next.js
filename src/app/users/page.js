import Link from "next/link";
import allUsers from "./userData"

export default async function Page() {
  let users = await allUsers();

  let top10 = users.slice(0, 10)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-6">
      <div className="flex pt-4 mb-6 justify-center items-center gap-8 bg-white">
        <Link className="text-2xl font-bold text-center text-green-400 mb-10 drop-shadow-sm" href={'/'} > Home</Link>
        <h1 className="text-2xl font-bold text-center text-orange-400 mb-10 drop-shadow-sm">
        Users List (Server Side)
      </h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {top10.map((user) => (
          <div
            key={user.id}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center text-center"
          >
            {/* User Image */}
            <img
              src="https://media.istockphoto.com/id/636985112/photo/happy-toon-kid-with-his-alien-friends.webp?a=1&b=1&s=612x612&w=0&k=20&c=oOT6baFR6J6xVQGkC8HnQ9tMGs8FIMwHGSd6PvWFiBA="
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 object-cover rounded-full border-4 border-indigo-200 mb-4"
            />

            {/* User Name */}
            <h2 className="text-lg font-semibold text-gray-700">
              {user.firstName} {user.lastName}
            </h2>

            {/* Extra Info */}
            <p className="text-sm text-gray-500 mt-1">
              {user.age} years | {user.gender}
            </p>
            <p className="text-sm text-gray-500 truncate w-40">
              📧 {user.email}
            </p>

            {/* Button */}
            <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
