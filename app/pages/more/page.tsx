import React from 'react';

export default function More() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5 pt-32 pb-32">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
        <h1 className="text-2xl font-semibold">Ukay Khing Marma</h1>
        <p className="text-gray-600">ID:2431993</p>
        <p className="text-gray-500">Computer Science and Engineering</p>
      </div>

      {/* Main Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="px-6 py-3 bg-white shadow rounded-lg font-semibold border border-gray-300 hover:bg-gray-200">Attendance</button>
        <button className="px-6 py-3 bg-white shadow rounded-lg font-semibold border border-gray-300 hover:bg-gray-200">Transcript</button>
      </div>

      {/* Tools Section */}
      <div className="w-full max-w-md mb-10">
        <h2 className="text-lg font-semibold mb-4">Tools</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow">
            <div className="w-20 h-20 bg-gray-300 rounded mb-2"></div>
            <span>CGPA Calculator</span>
          </button>
          <button className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow">
            <div className="w-20 h-20 bg-gray-300 rounded mb-2"></div>
            <span>Routine Maker</span>
          </button>
          <button className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow">
            <div className="w-20 h-20 bg-gray-300 rounded mb-2"></div>
            <span>Help Post</span>
          </button>
          <button className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow">
            <div className="w-20 h-20 bg-gray-300 rounded mb-2"></div>
            <span>All Contacts</span>
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <button className="px-6 py-3 bg-white shadow rounded-lg font-semibold border border-gray-300 hover:bg-gray-200">Logout</button>
    </div>
  );
}