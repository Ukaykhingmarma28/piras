'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';



export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="h-screen w-full top-bar-bg flex flex-col items-center px-8">
      {/* Logo */}
      <Image
        src="/images/logo.png"
        alt="IUB Logo"
        width={90}
        height={45}
        className=' mt-40 mb-20'
      />

      {/* Form */}
      <form className="w-full max-w-sm space-y-4" onSubmit={(e)=> e.preventDefault()}>
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
          onClick={() => router.push('/pages/home')}
          className="w-full bg-indigo-800 hover:bg-indigo-900 text-white py-3 rounded-full font-semibold transition duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
