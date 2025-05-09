import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Slider from "@/components/Slider";

const HomePage = () => {
  const attendanceData = [
    {
      code: "CSE203",
      status: "CHILL",
      attended: 10,
      total: 12,
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      code: "PHY102",
      status: "COOKED",
      attended: 5,
      total: 15,
      bgColor: "bg-red-100",
      textColor: "text-red-700",
    },
    {
        code: "PHY102",
        status: "COOKED",
        attended: 5,
        total: 15,
        bgColor: "bg-red-100",
        textColor: "text-red-700",
      },
      {
        code: "PHY102",
        status: "COOKED",
        attended: 5,
        total: 15,
        bgColor: "bg-red-100",
        textColor: "text-red-700",
      },    
    // You can add more subjects here
  ];

  return (
    <div className="ps-[17px] pe-[17px] pt-[95px]">
      <div className="border-[1px] rounded-2xl h-[140px] bg-yellow-my w-full mb-8"></div>
      <div className="flex justify-between items-center w-full h-[140px] rounded-xl border p-4 mb-8">
        {/* Left Section */}
        <div>
          <p className="text-gray-700 font-semibold">Next Class</p>
          <h2 className="text-2xl font-bold text-black">ENG105</h2>
          <p className="text-gray-600">DMK Building</p>
          <p className="text-gray-600">Room No. 5004</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between items-end h-full">
          <div className="bg-green-100 text-green-900 text-xl font-bold px-4 py-2 rounded-bl-xl">
            13/15
          </div>
          <p className="text-gray-700 font-medium text-sm mt-auto">
            9:40 AM - 11:10 AM
          </p>
        </div>
      </div>
      <div className="flex gap-4 mb-8">
        {/* CGPA Card */}
        <div className="bg-gray-50 border rounded-xl p-4 w-32">
          <p className="text-gray-600 font-semibold">CGPA</p>
          <p className="text-4xl font-bold text-black">3.5</p>
        </div>

        {/* Advisor Card */}
        <div className="bg-gray-50 border rounded-xl p-4 flex-1">
          <p className="text-gray-600 font-semibold">Advisor</p>
          <p className="text-xl font-bold text-black">Zaid Fahad</p>
          <p className="text-gray-700 text-sm">zfahad@iub.edu.bd</p>
        </div>
      </div>
      <div className="mb-8">
        <Slider attendanceData={attendanceData} />
      </div>
      <div className="h-28 w-full">

      </div>
    </div>
  );
};

export default HomePage;
