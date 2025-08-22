import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <ul className="flex gap-8 justify-center py-4">
          <li>
            <Link href="/about/aboutCollege" className="text-blue-600 font-medium hover:text-blue-800">
              College
            </Link>
          </li>
          <li>
            <Link href="/about/aboutStudent" className="text-blue-600 font-medium hover:text-blue-800">
              Students
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="pt-20 px-4">{children}</main>
    </div>
  );
}

export default Layout;
