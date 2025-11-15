import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer
const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3001/events');
        if (response.ok) {
          const data = await response.json();
          const formattedEvents = data.map((event) => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
          }));
          setEvents(formattedEvents);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-8 bg-white my-12 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Calendar</h1>
      <div style={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}

export default CalendarPage;