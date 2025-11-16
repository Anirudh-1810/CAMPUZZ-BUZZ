import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- NEW: A mini-card for the profile page ---
const RegisteredEventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
    <div className={`w-24 p-4 bg-gradient-to-br ${event.colorClass} flex flex-col items-center justify-center`}>
      <div className={`text-3xl font-bold ${event.textClass}`}>{event.date}</div>
      <div className="text-sm text-gray-600">{event.month}</div>
    </div>
    <div className="p-4 flex-1 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-600">{event.time} {event.tz}</p>
        {/* THIS IS THE FIX: Check if event.tags is an array and has items */}
        {Array.isArray(event.tags) && event.tags.length > 0 && (
            <span className={`${event.tags[0].color} text-xs font-medium px-2 py-1 rounded mt-2 inline-block`}>
            {event.tags[0].name}
            </span>
        )}
      </div>
      <button className="text-sm text-red-500 hover:text-red-700">
        Cancel
      </button>
    </div>
  </div>
);

function ProfilePage() {
  const [myEvents, setMyEvents] = useState([]);
  const [user, setUser] = useState(null);

  // Load user info and registered events from localStorage when page loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('campusbuzz_user'));
    if (storedUser) {
      setUser(storedUser);
    }
    
    const storedEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
    setMyEvents(storedEvents);
  }, []); // Empty array means this runs only once

  if (!user) {
    return (
      // This is shown if the user is not logged in
      <div className="container mx-auto p-8 my-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Please log in to see your profile.</h1>
        <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
          Login or Sign Up
        </Link>
      </div>
    );
  }

  // This is shown if the user IS logged in
  return (
    <div className="container mx-auto p-8 my-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome, {user.name}!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Registered Events */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">My Registered Events</h2>
          <div className="space-y-6">
            {myEvents.length > 0 ? (
              myEvents.map(event => (
                <RegisteredEventCard key={event.id} event={event} />
              ))
            ) : (
              <p className="text-gray-600 bg-white p-6 rounded-lg shadow-sm">
                You haven't registered for any events yet. <Link to="/events" className="text-blue-600 font-medium">Find one!</Link>
              </p>
            )}
          </div>
        </div>
        
        {/* My Clubs */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">My Clubs</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600">(This feature is coming soon!)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;