'use client';

import React from 'react';
import { useCalendarApp, ScheduleXCalendar } from '@/lib/schedule-x/react';
import { createViewWeek, createViewDay } from '@/lib/schedule-x/calendar';
import '@schedule-x/theme-shadcn/dist/index.css';

export default function ScheduleXCalendarComponent() {
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
    <div style={{ height: '100vh' }}>
      <ScheduleXCalendar calendarApp={calendarApp}/>
    </div>
  );
}
