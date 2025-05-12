// import React from 'react';
// import ScheduleCalendarComponent from '@/components/ScheduleCalendar';

// export default function SchedulePage() {
//   return (
//     <main className="pt-[95px] px-1">
//       <h1 className="text-3xl font-bold px-[13px] mb-2">Schedule</h1>
//       <ScheduleCalendarComponent />
//     </main>
//   );
// }
"use client";

import React from "react";
import { useState } from "react";
import ScheduleXMonthAgenda from "@/components/ScheduleCalendar";
import "react-datepicker/dist/react-datepicker.css";
import EventModal from "@/components/EventCard";

export default function SchedulePage() {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Stand-up Meeting",
      start: "2025-05-11 09:00",
      end: "2025-05-11 10:00",
    },
    {
      id: "2",
      title: "Team Sync",
      start: "2025-05-11 13:00",
      end: "2025-05-11 14:00",
    },
    {
      id: "3",
      title: "Product Demo",
      start: "2025-05-12 11:00",
      end: "2025-05-12 12:00",
    },
    {
      id: "4",
      title: "Client Call",
      start: "2025-05-13 15:00",
      end: "2025-05-13 16:00",
    },
    {
      id: "5",
      title: "Sprint Planning",
      start: "2025-05-14 10:00",
      end: "2025-05-14 11:30",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <main className="pt-[95px] px-1">
      <h1 className="text-3xl font-bold px-[13px] mb-4">Schedule</h1>

      {/* Add Event Button */}
      <div className="fixed bottom-24 right-8">
        <button
          onClick={() => setModalOpen(true)}
          className="w-14 h-14 flex items-center justify-center text-3xl shadow-xl bg-indigo-500 text-white rounded-full"
        >
          +
        </button>
      </div>

      {/* Schedule Calendar */}
      <ScheduleXMonthAgenda events={events} />

      {/* Add Event Modal */}
      {isModalOpen && (
        <EventModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
      )}
    </main>
  );
}
