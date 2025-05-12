// 'use client';

// import React from 'react';
// import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
// import { createViewWeek, createViewDay } from '@/lib/schedule-x/calendar';
// import "@/lib/schedule-x/theme-shadcn/dist/index.css"

// export default function ScheduleXCalendarComponent() {
//   const calendarApp = useCalendarApp({
//     theme: 'shadcn',
//     selectedDate: new Date().toISOString().split('T')[0],
//     views: [createViewWeek(), createViewDay()],
//     defaultView: 'week',
//     events: [
//       {
//         id: '1',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 09:00',
//         end: '2025-05-11 12:30',
//       },
//       {
//         id: '2',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 10:00',
//         end: '2025-05-11 12:30',
//       },
//       {
//         id: '3',
//         title: 'Product Demo',
//         start: '2025-05-12 11:00',
//         end: '2025-05-12 12:00',
//       },
//       {
//         id: '4',
//         title: 'Product Demo',
//         start: '2025-05-10 11:00',
//         end: '2025-05-10 12:00',
//       },
//     ],
//   });

//   return (
//     <div style={{ height: '100vh' }}>
//       <ScheduleXCalendar calendarApp={calendarApp}/>
//     </div>
//   );
// }

// 'use client';

// import React, { useState } from 'react';
// import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
// import { createViewWeek, createViewDay } from '@/lib/schedule-x/calendar';
// import "@/lib/schedule-x/theme-shadcn/dist/index.css";
// import * as Dialog from '@radix-ui/react-dialog';
// import { FaPlus } from "react-icons/fa";

// export default function ScheduleXCalendarComponent() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('Event');

//   const calendarApp = useCalendarApp({
//     theme: 'shadcn',
//     selectedDate: new Date().toISOString().split('T')[0],
//     views: [createViewWeek(), createViewDay()],
//     defaultView: 'week',
//     events: [
//       {
//         id: '1',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 09:00',
//         end: '2025-05-11 12:30',
//       },
//       {
//         id: '2',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 10:00',
//         end: '2025-05-11 12:30',
//       },
//       {
//         id: '3',
//         title: 'Product Demo',
//         start: '2025-05-12 11:00',
//         end: '2025-05-12 12:00',
//       },
//       {
//         id: '4',
//         title: 'Product Demo',
//         start: '2025-05-10 11:00',
//         end: '2025-05-10 12:00',
//       },
//     ],
//   });

//   return (
//     <div className="h-screen relative">
//       <ScheduleXCalendar calendarApp={calendarApp} />

//       {/* Floating Add Button */}
//       <button
//         onClick={() => setModalOpen(true)}
//         className="fixed bottom-24 right-8 bg-indigo-400 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg hover:bg-blue-700 transition"
//       >
//         <FaPlus className=' h-6'/>
//       </button>

//       {/* Modal Dialog */}
//       <Dialog.Root open={isModalOpen} onOpenChange={setModalOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
//           <Dialog.Content className="fixed z-50 bg-white rounded-lg shadow-lg w-[350px] max-w-[90%] p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

//             {/* Title Input */}
//             <Dialog.Title className="text-lg font-semibold mb-4">Add title</Dialog.Title>
//             <input
//               type="text"
//               placeholder="Add title"
//               className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />

//             {/* Tab Selector */}
//             <div className="flex mb-4">
//               <button
//                 onClick={() => setActiveTab('Event')}
//                 className={`flex-1 py-2 rounded-l-md ${activeTab === 'Event' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition`}
//               >
//                 Event
//               </button>
//               <button
//                 onClick={() => setActiveTab('Task')}
//                 className={`flex-1 py-2 rounded-r-md ${activeTab === 'Task' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition`}
//               >
//                 Task
//               </button>
//             </div>

//             {/* All-day Toggle */}
//             <div className="flex items-center mb-4">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <span>All-day</span>
//               </label>
//             </div>

//             {/* Date and Time Picker Placeholder */}
//             <div className="flex justify-between mb-6">
//               <span>Monday, May 19</span>
//               <span>3 PM</span>
//             </div>

//             {/* Modal Actions */}
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               >
//                 Save
//               </button>
//             </div>

//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>
//     </div>
//   );
// }

// 'use client';

// import React, { useMemo } from 'react';
// import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
// import { createViewWeek, createViewDay } from '@/lib/schedule-x/calendar';
// import "@/lib/schedule-x/theme-shadcn/dist/index.css";
// import dayjs from 'dayjs';

// // Define the Event Type
// interface CalendarEvent {
//   id: string;
//   title: string;
//   start: string;
//   end: string;
// }

// // Main Component
// export default function ScheduleXAgenda() {
//   // Initialize Calendar App
//   const calendarApp = useCalendarApp({
//     theme: 'shadcn',
//     selectedDate: new Date().toISOString().split('T')[0],
//     views: [createViewWeek(), createViewDay()],
//     defaultView: 'year',
//     events: [
//       {
//         id: '1',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 09:00',
//         end: '2025-05-11 10:00',
//       },
//       {
//         id: '2',
//         title: 'Team Sync',
//         start: '2025-05-11 13:00',
//         end: '2025-05-11 14:00',
//       },
//       {
//         id: '3',
//         title: 'Product Demo',
//         start: '2025-05-12 11:00',
//         end: '2025-05-12 12:00',
//       },
//       {
//         id: '4',
//         title: 'Client Call',
//         start: '2025-05-13 15:00',
//         end: '2025-05-13 16:00',
//       },
//       {
//         id: '5',
//         title: 'Sprint Planning',
//         start: '2025-05-14 10:00',
//         end: '2025-05-14 11:30',
//       },
//     ] as CalendarEvent[],
//   });

//   // Extract Events Safely
//   const events = useMemo(() => {
//     if (!calendarApp || !calendarApp.events || typeof calendarApp.events.getAll !== 'function') {
//       return [] as CalendarEvent[];
//     }

//     // Use getAll to extract the raw events
//     const rawEvents = calendarApp.events.getAll() as CalendarEvent[];
//     return rawEvents;
//   }, [calendarApp]);

//   // Group Events by Date
//   const groupedEvents = useMemo(() => {
//     return events.reduce((acc, event) => {
//       const dateKey = dayjs(event.start).format('YYYY-MM-DD');
//       if (!acc[dateKey]) acc[dateKey] = [];
//       acc[dateKey].push(event);
//       return acc;
//     }, {} as Record<string, CalendarEvent[]>);
//   }, [events]);

//   // Generate a range of dates for the next 7 days
//   const daysInView = Array.from({ length: 7 }, (_, i) =>
//     dayjs().add(i, 'day').format('YYYY-MM-DD')
//   );

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Agenda</h2>
//       <div className="space-y-8">
//         {daysInView.map((date) => {
//           const dayEvents = groupedEvents[date] || [];
//           return (
//             <div key={date} className="border-b border-gray-200 pb-4">
//               {/* Date Header */}
//               <h3 className="text-lg font-semibold mb-2 text-gray-700">
//                 {dayjs(date).format('dddd, MMMM D')}
//               </h3>

//               {/* Event List */}
//               {dayEvents.length > 0 ? (
//                 <ul>
//                   {dayEvents.map((event: CalendarEvent) => (
//                     <li
//                       key={event.id}
//                       className="bg-blue-100 text-blue-700 rounded-md p-3 mb-2 shadow-sm"
//                     >
//                       <h4 className="font-medium">{event.title}</h4>
//                       <p className="text-sm">
//                         {dayjs(event.start).format('h:mm A')} - {dayjs(event.end).format('h:mm A')}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 italic">No events</p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useMemo } from 'react';
// import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
// import { createViewMonthAgenda } from '@/lib/schedule-x/calendar';
// import "@/lib/schedule-x/theme-shadcn/dist/index.css";
// import dayjs from 'dayjs';

// // Define the Event Type
// interface CalendarEvent {
//   id: string;
//   title: string;
//   start: string;
//   end: string;
// }

// // Main Component
// export default function ScheduleXMonthAgenda() {
//   // Initialize Calendar App with Month Agenda View
//   const calendarApp = useCalendarApp({
//     theme: 'shadcn',
//     selectedDate: new Date().toISOString().split('T')[0],
//     views: [createViewMonthAgenda()],
//     defaultView: 'monthAgenda',  // Set the default view to 'monthAgenda'
//     events: [
//       {
//         id: '1',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 09:00',
//         end: '2025-05-11 10:00',
//       },
//       {
//         id: '2',
//         title: 'Team Sync',
//         start: '2025-05-11 13:00',
//         end: '2025-05-11 14:00',
//       },
//       {
//         id: '3',
//         title: 'Product Demo',
//         start: '2025-05-12 11:00',
//         end: '2025-05-12 12:00',
//       },
//       {
//         id: '4',
//         title: 'Client Call',
//         start: '2025-05-13 15:00',
//         end: '2025-05-13 16:00',
//       },
//       {
//         id: '5',
//         title: 'Sprint Planning',
//         start: '2025-05-14 10:00',
//         end: '2025-05-14 11:30',
//       },
//     ] as CalendarEvent[],
//   });

//   return (
//     <div className="h-screen">
//       {calendarApp && <ScheduleXCalendar calendarApp={calendarApp} />}
//     </div>
//   );
// }

// 'use client';

// import React, { useMemo, useState } from 'react';
// import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
// import { createViewMonthAgenda } from '@/lib/schedule-x/calendar';
// import "@/lib/schedule-x/theme-shadcn/dist/index.css";
// import dayjs from 'dayjs';
// import isBetween from 'dayjs/plugin/isBetween';

// // Extend dayjs with the isBetween plugin
// dayjs.extend(isBetween);

// // Define the Event Type
// interface CalendarEvent {
//   id: string;
//   title: string;
//   start: string;
//   end: string;
// }

// // Main Component
// export default function ScheduleXMonthAgenda() {
//   const [selectedMonth, setSelectedMonth] = useState(dayjs());

//   // Initialize Calendar App
//   const calendarApp = useCalendarApp({
//     theme: 'shadcn',
//     selectedDate: selectedMonth.startOf('month').toISOString().split('T')[0],
//     views: [createViewMonthAgenda()],
//     defaultView: 'monthAgenda',
//     events: [
//       {
//         id: '1',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 09:00',
//         end: '2025-05-11 10:00',
//       },
//       {
//         id: '2',
//         title: 'Team Sync',
//         start: '2025-05-11 13:00',
//         end: '2025-05-11 14:00',
//       },
//       {
//         id: '3',
//         title: 'Product Demo',
//         start: '2025-05-12 11:00',
//         end: '2025-05-12 12:00',
//       },
//       {
//         id: '4',
//         title: 'Client Call',
//         start: '2025-05-13 15:00',
//         end: '2025-05-13 16:00',
//       },
//       {
//         id: '5',
//         title: 'Sprint Planning',
//         start: '2025-05-14 10:00',
//         end: '2025-05-14 11:30',
//       },
//     ] as CalendarEvent[],
//   });

//   // Extract Events
//   const events = useMemo(() => {
//     if (!calendarApp || !calendarApp.events || typeof calendarApp.events.getAll !== 'function') {
//       return [] as CalendarEvent[];
//     }

//     return calendarApp.events.getAll() as CalendarEvent[];
//   }, [calendarApp]);

//   // Group Events by Date within the Selected Month
//   const groupedEvents = useMemo(() => {
//     const startOfMonth = selectedMonth.startOf('month');
//     const endOfMonth = selectedMonth.endOf('month');

//     return events
//       .filter(event => dayjs(event.start).isBetween(startOfMonth, endOfMonth, 'day', '[]'))
//       .reduce((acc, event) => {
//         const dateKey = dayjs(event.start).format('YYYY-MM-DD');
//         if (!acc[dateKey]) acc[dateKey] = [];
//         acc[dateKey].push(event);
//         return acc;
//       }, {} as Record<string, CalendarEvent[]>);
//   }, [events, selectedMonth]);

//   // Generate Date Range for the Current Month
//   const daysInMonth = selectedMonth.daysInMonth();
//   const daysInView = Array.from({ length: daysInMonth }, (_, i) =>
//     selectedMonth.startOf('month').add(i, 'day').format('YYYY-MM-DD')
//   );

//   // Handle Month Change
//   const handleMonthChange = (direction: 'prev' | 'next') => {
//     setSelectedMonth(selectedMonth.add(direction === 'next' ? 1 : -1, 'month'));
//   };

//   return (
//     <div className="h-screen p-4 max-w-3xl mx-auto">
//       {/* Month Navigation */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => handleMonthChange('prev')}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
//         >
//           Previous
//         </button>
//         <h2 className="text-2xl font-bold">
//           {selectedMonth.format('MMMM YYYY')}
//         </h2>
//         <button
//           onClick={() => handleMonthChange('next')}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
//         >
//           Next
//         </button>
//       </div>

//       {/* Event List */}
//       <div className="space-y-8">
//         {daysInView.map((date) => {
//           const dayEvents = groupedEvents[date] || [];
//           return (
//             <div key={date} className="border-b border-gray-200 pb-4">
//               {/* Date Header */}
//               <h3 className="text-lg font-semibold mb-2 text-gray-700">
//                 {dayjs(date).format('dddd, MMMM D')}
//               </h3>

//               {/* Event List */}
//               {dayEvents.length > 0 ? (
//                 <ul>
//                   {dayEvents.map((event: CalendarEvent) => (
//                     <li
//                       key={event.id}
//                       className="bg-blue-100 text-blue-700 rounded-md p-4 mb-2 shadow-sm"
//                     >
//                       <h4 className="font-medium">{event.title}</h4>
//                       <p className="text-sm">
//                         {dayjs(event.start).format('h:mm A')} - {dayjs(event.end).format('h:mm A')}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 italic">No events</p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useMemo, useState } from 'react';
// import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
// import { createViewMonthAgenda } from '@/lib/schedule-x/calendar';
// import "@/lib/schedule-x/theme-shadcn/dist/index.css";
// import dayjs from 'dayjs';
// import isBetween from 'dayjs/plugin/isBetween';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { AiOutlineCalendar } from 'react-icons/ai';

// // Extend dayjs with the isBetween plugin
// dayjs.extend(isBetween);

// // Define the Event Type
// interface CalendarEvent {
//   id: string;
//   title: string;
//   start: string;
//   end: string;
// }

// // Main Component
// export default function ScheduleXMonthAgenda() {
//   const [selectedMonth, setSelectedMonth] = useState<Date>(dayjs().toDate());
//   const [isDatePickerOpen, setDatePickerOpen] = useState(false);

//   // Initialize Calendar App
//   const calendarApp = useCalendarApp({
//     theme: 'shadcn',
//     selectedDate: dayjs(selectedMonth).startOf('month').toISOString().split('T')[0],
//     views: [createViewMonthAgenda()],
//     defaultView: 'monthAgenda',
//     events: [
//       {
//         id: '1',
//         title: 'Stand-up Meeting',
//         start: '2025-05-11 09:00',
//         end: '2025-05-11 10:00',
//       },
//       {
//         id: '2',
//         title: 'Team Sync',
//         start: '2025-05-11 13:00',
//         end: '2025-05-11 14:00',
//       },
//       {
//         id: '3',
//         title: 'Product Demo',
//         start: '2025-05-12 11:00',
//         end: '2025-05-12 12:00',
//       },
//       {
//         id: '4',
//         title: 'Client Call',
//         start: '2025-05-13 15:00',
//         end: '2025-05-13 16:00',
//       },
//       {
//         id: '5',
//         title: 'Sprint Planning',
//         start: '2025-05-14 10:00',
//         end: '2025-05-14 11:30',
//       },
//     ] as CalendarEvent[],
//   });

//   // Extract Events
//   const events = useMemo(() => {
//     if (!calendarApp || !calendarApp.events || typeof calendarApp.events.getAll !== 'function') {
//       return [] as CalendarEvent[];
//     }

//     return calendarApp.events.getAll() as CalendarEvent[];
//   }, [calendarApp]);

//   // Group Events by Date within the Selected Month
//   const groupedEvents = useMemo(() => {
//     const startOfMonth = dayjs(selectedMonth).startOf('month');
//     const endOfMonth = dayjs(selectedMonth).endOf('month');

//     return events
//       .filter(event => dayjs(event.start).isBetween(startOfMonth, endOfMonth, 'day', '[]'))
//       .reduce((acc, event) => {
//         const dateKey = dayjs(event.start).format('YYYY-MM-DD');
//         if (!acc[dateKey]) acc[dateKey] = [];
//         acc[dateKey].push(event);
//         return acc;
//       }, {} as Record<string, CalendarEvent[]>);
//   }, [events, selectedMonth]);

//   // Generate Date Range for the Current Month
//   const daysInMonth = dayjs(selectedMonth).daysInMonth();
//   const daysInView = Array.from({ length: daysInMonth }, (_, i) =>
//     dayjs(selectedMonth).startOf('month').add(i, 'day').format('YYYY-MM-DD')
//   );

//   // Handle Month Change
//   const handleMonthChange = (direction: 'prev' | 'next') => {
//     setSelectedMonth(
//       dayjs(selectedMonth)
//         .add(direction === 'next' ? 1 : -1, 'month')
//         .toDate()
//     );
//   };

//   // Handle Date Selection
//   const handleDateChange = (date: Date | null) => {
//     if (date) {
//       setSelectedMonth(date);
//       setDatePickerOpen(false);
//     }
//   };

//   return (
//     <div className="h-screen p-4 max-w-3xl mx-auto">
//       {/* Month Navigation */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => handleMonthChange('prev')}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
//         >
//           Previous
//         </button>

//         {/* Date Picker Trigger */}
//         <div className="relative">
//           <button
//             onClick={() => setDatePickerOpen(!isDatePickerOpen)}
//             className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
//           >
//             <AiOutlineCalendar size={20} />
//             {dayjs(selectedMonth).format('MMMM YYYY')}
//           </button>

//           {/* Date Picker Popup */}
//           {isDatePickerOpen && (
//             <div className="absolute z-50 mt-2 bg-white rounded-md shadow-lg">
//               <DatePicker
//                 selected={selectedMonth}
//                 onChange={handleDateChange}
//                 showMonthYearPicker
//                 inline
//               />
//             </div>
//           )}
//         </div>

//         <button
//           onClick={() => handleMonthChange('next')}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
//         >
//           Next
//         </button>
//       </div>

//       {/* Event List */}
//       <div className="space-y-8">
//         {daysInView.map((date) => {
//           const dayEvents = groupedEvents[date] || [];
//           return (
//             <div key={date} className="border-b border-gray-200 pb-4">
//               {/* Date Header */}
//               <h3 className="text-lg font-semibold mb-2 text-gray-700">
//                 {dayjs(date).format('dddd, MMMM D')}
//               </h3>

//               {/* Event List */}
//               {dayEvents.length > 0 ? (
//                 <ul>
//                   {dayEvents.map((event: CalendarEvent) => (
//                     <li
//                       key={event.id}
//                       className="bg-blue-100 text-blue-700 rounded-md p-4 mb-2 shadow-sm"
//                     >
//                       <h4 className="font-medium">{event.title}</h4>
//                       <p className="text-sm">
//                         {dayjs(event.start).format('h:mm A')} - {dayjs(event.end).format('h:mm A')}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 italic">No events</p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useMemo, useState } from "react";
import { useCalendarApp } from "@/lib/schedule-x/react";
import { createViewMonthAgenda } from "@/lib/schedule-x/calendar";
import "@/lib/schedule-x/theme-shadcn/dist/index.css";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegCaretSquareLeft, FaRegCaretSquareRight } from "react-icons/fa";
import { FaC, FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";

// Extend dayjs with the isBetween plugin
dayjs.extend(isBetween);

// Define the Event Type
interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
}


interface ScheduleCalendarProps {
  events: CalendarEvent[];
}


// Main Component
export default function ScheduleXMonthAgenda({events}:ScheduleCalendarProps) {
  const [selectedMonth, setSelectedMonth] = useState<Date>(dayjs().toDate());
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  // Initialize Calendar App
  const calendarApp = useCalendarApp({
    theme: "shadcn",
    selectedDate: dayjs(selectedMonth)
      .startOf("month")
      .toISOString()
      .split("T")[0],
    views: [createViewMonthAgenda()],
    defaultView: "monthAgenda",
    events,
  });

  // Group Events by Date within the Selected Month
  const groupedEvents = useMemo(() => {
    const startOfMonth = dayjs(selectedMonth).startOf("month");
    const endOfMonth = dayjs(selectedMonth).endOf("month");

    return events
      .filter((event) =>
        dayjs(event.start).isBetween(startOfMonth, endOfMonth, "day", "[]")
      )
      .reduce((acc, event) => {
        const dateKey = dayjs(event.start).format("YYYY-MM-DD");
        if (!acc[dateKey]) acc[dateKey] = [];
        acc[dateKey].push(event);
        return acc;
      }, {} as Record<string, CalendarEvent[]>);
  }, [events, selectedMonth]);

  // Handle Month Change
  const handleMonthChange = (direction: "prev" | "next") => {
    setSelectedMonth(
      dayjs(selectedMonth)
        .add(direction === "next" ? 1 : -1, "month")
        .toDate()
    );
  };

  // Handle Date Selection
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedMonth(date);
      setDatePickerOpen(false);
    }
  };

  return (
    <div className="h-screen p-4 max-w-3xl mx-auto mb-28">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => handleMonthChange("prev")}
          className="px-4 py-2 bg-white border border-gray-300 text-xl text-gray-700 rounded-md hover:bg-gray-200 transition"
        >
          <FaCaretLeft/>
        </button>
        {/* Date Picker Trigger */}
        <div className="relative">
          <button
            onClick={() => setDatePickerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md transition"
          >
            <AiOutlineCalendar size={20} />
            {dayjs(selectedMonth).format("MMMM YYYY")}
          </button>

          {/* Popup Date Picker */}
          {isDatePickerOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl">
              <div className="bg-white rounded-2xl border border-gray-300 shadow-xl p-6 w-full max-w-md mx-4 relative">
                {/* Close Button */}
                <button
                  onClick={() => setDatePickerOpen(false)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition text-2xl"
                >
                  <ImCancelCircle />
                </button>

                {/* Month and Year Picker */}
                <div className="text-center mt-12">
                  

                  {/* Month Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const month = dayjs().month(i).format("MMM");
                      const isSelected = dayjs(selectedMonth).month() === i;

                      return (
                        <button
                          key={month}
                          onClick={() =>
                            setSelectedMonth(
                              dayjs(selectedMonth).month(i).toDate()
                            )
                          }
                          className={`py-2 px-4 rounded-lg font-semibold transition ${
                            isSelected
                              ? "bg-indigo-300 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {month}
                        </button>
                      );
                    })}
                  </div>

                  {/* Year Selector */}
                  <div className="mt-6 flex items-center justify-center gap-6">
                    <button
                      onClick={() =>
                        setSelectedMonth(
                          dayjs(selectedMonth).subtract(1, "year").toDate()
                        )
                      }
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      <FaRegCaretSquareLeft/>
                    </button>
                    <span className="text-2xl font-semibold text-gray-700">
                      {dayjs(selectedMonth).format("YYYY")}
                    </span>
                    <button
                      onClick={() =>
                        setSelectedMonth(
                          dayjs(selectedMonth).add(1, "year").toDate()
                        )
                      }
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      <FaRegCaretSquareRight/>
                    </button>
                  </div>
                </div>

                {/* Done Button */}
                <button
                  onClick={() => setDatePickerOpen(false)}
                  className="w-full bg-indigo-400 text-white rounded-lg py-2 mt-6 hover:bg-blue-700 transition"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => handleMonthChange("next")}
          className="px-4 py-2 bg-white border border-gray-300 text-xl text-gray-700 rounded-md hover:bg-gray-200 transition"
        >
          <FaCaretRight/>
        </button>
      </div>

      {/* Event List */}
      <div className="space-y-8">
        {Object.entries(groupedEvents).map(([date, events]) => {
          if (events.length === 0) return null; // Skip empty dates

          return (
            <div key={date} className="border-b border-gray-200 pb-4">
              {/* Date Header */}
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                {dayjs(date).format("dddd, MMMM D")}
              </h3>

              {/* Event List */}
              <ul>
                {events.map((event: CalendarEvent) => (
                  <li
                    key={event.id}
                    className="bg-blue-100 text-blue-700 rounded-md p-4 mb-2 shadow-sm"
                  >
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm">
                      {dayjs(event.start).format("h:mm A")} -{" "}
                      {dayjs(event.end).format("h:mm A")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* No Events Message */}
        {Object.keys(groupedEvents).length === 0 && (
          <p className="text-gray-500 italic text-center">
            No events this month
          </p>
        )}
      </div>
    </div>
  );
}


