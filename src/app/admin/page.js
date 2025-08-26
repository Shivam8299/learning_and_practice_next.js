"use client";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-3">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Users</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Products</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Orders</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome, Admin!</h1>
        <p className="mb-6">This is your dummy admin dashboard page.</p>

        {/* Example cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Users</h2>
            <p className="text-gray-600">120 Registered</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Products</h2>
            <p className="text-gray-600">58 Listed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Orders</h2>
            <p className="text-gray-600">34 Pending</p>
          </div>
        </div>
      </main>
    </div>
  );
}
