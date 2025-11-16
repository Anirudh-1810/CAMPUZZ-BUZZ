import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer
const localizer = momentLocalizer(moment);

// Mock event data (you would fetch this from your database)
const myEventsList = [
  {
    id: 1,
    title: 'Future of AI in Business',
    start: new Date(2025, 10, 25, 9, 0, 0), // Note: Months are 0-indexed (10 = Nov)
    end: new Date(2025, 10, 25, 12, 0, 0),
  },
  {
    id: 2,
    title: 'Digital Marketing Masterclass',
    start: new Date(2025, 10, 28, 14, 0, 0),
    end: new Date(2025, 10, 28, 20, 0, 0),
  },
  {
    id: 3,
    title: 'Jazz Under the Stars',
    start: new Date(2025, 11, 2, 19, 0, 0), // 11 = Dec
    end: new Date(2025, 11, 2, 23, 0, 0),
  },
];

function CalendarPage() {
  return (
    <div className="container mx-auto p-8 bg-white my-12 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Calendar</h1>
      <div style={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}

export default CalendarPage;