import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faMapPin, faUsers, faTag } from '@fortawesome/free-solid-svg-icons';

function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch all events from localStorage
    const allEvents = JSON.parse(localStorage.getItem('eventsList')) || [];
    
    // Find the specific event by its ID
    const foundEvent = allEvents.find(e => e.id.toString() === eventId);
    
    if (foundEvent) {
      setEvent(foundEvent);
      // Check if user is already registered
      const myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
      if (myEvents.some(e => e.id === foundEvent.id)) {
        setIsRegistered(true);
      }
    }
    setIsLoading(false);
  }, [eventId]);

  const handleRegister = async () => {
    const user = JSON.parse(localStorage.getItem('campusbuzz_user'));
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          eventId: event.id,
        }),
      });
      if (response.ok) {
        setIsRegistered(true);
        setMessage('Successfully registered! A confirmation has been logged to the console.');
        // SIMULATED: In a real application, you would send a confirmation email here.
        console.log(
          `Event registration confirmation sent to ${user.email} for event ${event.title}`
        );
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  if (isLoading) {
    return <div className="text-center p-12">Loading event...</div>;
  }

  if (!event) {
    return (
      <div className="text-center p-12">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <Link to="/events" className="text-blue-600">Back to all events</Link>
      </div>
    );
  }

  // Event exists, render its details
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className={`h-64 bg-gradient-to-r ${event.colorClass} w-full`}></div>
      <div className="container mx-auto -mt-32 px-6">
        <div className="bg-white rounded-lg shadow-xl p-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <span className={`${event.tags[0].color} text-sm font-medium px-3 py-1 rounded-full`}>
                {event.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">{event.title}</h1>
            </div>
            <div className="text-right">
              <button
                onClick={handleRegister}
                disabled={isRegistered}
                className={`px-8 py-3 text-white rounded-lg font-semibold transition-all ${
                  isRegistered
                    ? 'bg-gray-400 cursor-not-allowed'
                    : `bg-${event.buttonColor.split('-')[1]}-500 hover:opacity-90`
                }`}
              >
                {isRegistered ? 'Registered' : 'Register for this Event'}
              </button>
              {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8 border-y py-6">
            <div>
              <h4 className="text-sm text-gray-500 font-medium">Date</h4>
              <p className="text-lg font-semibold text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="text-blue-500 mr-2" />
                {event.month} {event.date}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 font-medium">Time</h4>
              <p className="text-lg font-semibold text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-blue-500 mr-2" />
                {event.time} {event.tz}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 font-medium">Location</h4>
              <p className="text-lg font-semibold text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faMapPin} className="text-blue-500 mr-2" />
                {event.location}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 font-medium">Attending</h4>
              <p className="text-lg font-semibold text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faUsers} className="text-blue-500 mr-2" />
                {event.attending}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About this Event</h2>
            <p className="text-gray-600 leading-relaxed">
              {event.description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;