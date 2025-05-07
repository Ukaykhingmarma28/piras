'use client';

import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center px-8">
      {/* Logo */}
      <Image
        src="/assets/logo.png"
        alt="IUB Logo"
        width={200}
        height={100}
        className="mb-10 mt-32"
      />

      {/* Form */}
      <form className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Student ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-800 hover:bg-indigo-900 text-white py-3 rounded-full font-semibold transition duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
