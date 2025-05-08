"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type AttendanceItem = {
  code: string;
  status: string;
  attended: number;
  total: number;
  bgColor: string;
  textColor: string;
};

export default function Slider({
  attendanceData,
}: {
  attendanceData: AttendanceItem[];
}) {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {attendanceData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-auto !h-[150px] flex-shrink-0 border rounded-xl overflow-hidden"
          >
            <div className="flex flex-col h-full">
              <div
                className={`${item.bgColor} text-md font-semibold text-right py-1 px-3 ${item.textColor}`}
              >
                {item.status}
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <p className="text-3xl font-semibold text-gray-800">
                  {item.code}
                </p>
                <p className="text-2xl text-gray-700">
                  {item.attended}/{item.total}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-custom mt-6 gap-2 flex justify-center" />
    </div>
  );
}
