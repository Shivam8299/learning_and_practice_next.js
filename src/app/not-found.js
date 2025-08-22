import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <h1 className="text-9xl font-bold text-brown-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Oops! Page not found</h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Don’t worry, let’s get you back on track.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-amber-700 text-white rounded-2xl shadow hover:bg-brown-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
