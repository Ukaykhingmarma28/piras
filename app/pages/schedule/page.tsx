import React from 'react';
import ScheduleCalendarComponent from '@/components/ScheduleCalendar';

export default function SchedulePage() {
  return (
    <main className="pt-[95px] px-1">
      <h1 className="text-3xl font-bold px-[13px] mb-2">Schedule</h1>
      <ScheduleCalendarComponent />
    </main>
  );
}
