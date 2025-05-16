import React from 'react';

const Class = () => {
  const courses = [
    { name: 'Spring-2025-CSE-201-2', codes: 'CSE101,CS202,EEE203', image: '/images/course1.png' },
    { name: 'Spring-2025-CSE-201-2', codes: 'CSE101,CS202,EEE203', image: '/images/course2.png' },
    { name: 'Spring-2025-CSE-201-2', codes: 'CSE101,CS202,EEE203', image: '/images/course3.png' }
  ];

  return (
    <div className="min-h-screen  px-[17px] pt-[95px]">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Classroom</h2>
        <div className="bg-white rounded-lg shadow p-4 mb-6 h-32 flex-col justify-between flex">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">This week</h3>
            <a href="#" className="text-blue-400 text-sm">View to-do list</a>
          </div>
          <p className="text-gray-400 text-sm">No work coming up immediately</p>
        </div>

        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <div className="relative">
              <img src={course.image} alt={course.name} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold">{course.name}</h3>
                  <p className="text-gray-300">{course.codes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
