import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">

      {/* 404 Title */}
      <h1 className="text-6xl font-bold text-gray-800 mb-4">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
      >
        Go to Home
      </Link>

    </div>
  );
}