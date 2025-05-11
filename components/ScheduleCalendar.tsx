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


'use client';

import React, { useState } from 'react';
import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
import { createViewWeek, createViewDay } from '@/lib/schedule-x/calendar';
import "@/lib/schedule-x/theme-shadcn/dist/index.css";
import * as Dialog from '@radix-ui/react-dialog';
import { FaPlus } from "react-icons/fa";

export default function ScheduleXCalendarComponent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Event');

  const calendarApp = useCalendarApp({
    theme: 'shadcn',
    selectedDate: new Date().toISOString().split('T')[0],
    views: [createViewWeek(), createViewDay()],
    defaultView: 'week',
    events: [
      {
        id: '1',
        title: 'Stand-up Meeting',
        start: '2025-05-11 09:00',
        end: '2025-05-11 12:30',
      },
      {
        id: '2',
        title: 'Stand-up Meeting',
        start: '2025-05-11 10:00',
        end: '2025-05-11 12:30',
      },
      {
        id: '3',
        title: 'Product Demo',
        start: '2025-05-12 11:00',
        end: '2025-05-12 12:00',
      },
      {
        id: '4',
        title: 'Product Demo',
        start: '2025-05-10 11:00',
        end: '2025-05-10 12:00',
      },
    ],
  });

  return (
    <div className="h-screen relative">
      <ScheduleXCalendar calendarApp={calendarApp} />
      
      {/* Floating Add Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-24 right-8 bg-indigo-400 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg hover:bg-blue-700 transition"
      >
        <FaPlus className=' h-6'/>
      </button>

      {/* Modal Dialog */}
      <Dialog.Root open={isModalOpen} onOpenChange={setModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Dialog.Content className="fixed z-50 bg-white rounded-lg shadow-lg w-[350px] max-w-[90%] p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            
            {/* Title Input */}
            <Dialog.Title className="text-lg font-semibold mb-4">Add title</Dialog.Title>
            <input 
              type="text" 
              placeholder="Add title" 
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            
            {/* Tab Selector */}
            <div className="flex mb-4">
              <button 
                onClick={() => setActiveTab('Event')}
                className={`flex-1 py-2 rounded-l-md ${activeTab === 'Event' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition`}
              >
                Event
              </button>
              <button 
                onClick={() => setActiveTab('Task')}
                className={`flex-1 py-2 rounded-r-md ${activeTab === 'Task' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition`}
              >
                Task
              </button>
            </div>

            {/* All-day Toggle */}
            <div className="flex items-center mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>All-day</span>
              </label>
            </div>

            {/* Date and Time Picker Placeholder */}
            <div className="flex justify-between mb-6">
              <span>Monday, May 19</span>
              <span>3 PM</span>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-between">
              <button 
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
