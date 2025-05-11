import React from 'react';
import dayjs from 'dayjs';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
}

interface EventCardProps {
  event: CalendarEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md p-4 mb-3 transition-transform hover:scale-105">
      <h4 className="font-semibold text-lg">{event.title}</h4>
      <p className="text-sm">
        {dayjs(event.start).format('dddd, MMM D, h:mm A')} - {dayjs(event.end).format('h:mm A')}
      </p>
    </div>
  );
};

export default EventCard;
