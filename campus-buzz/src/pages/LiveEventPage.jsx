// This file is a copy of EventsPage.jsx, as your HTML files were identical.
// You can now customize this page to show *only* live events in the future.

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faList, faTableCellsLarge, faCalendar, faSort, faUsers, 
  faClock, faUserTie, faDollarSign, faShare, faBookmark,
  faFilterCircleXmark, faMagnifyingGlass, faChevronLeft, faChevronRight,
  faLaptopCode, faChartLine, faPalette, faGraduationCap, faHeart, faMusic
} from '@fortawesome/free-solid-svg-icons';

// --- Reusable EventCard Component ---
const EventCard = ({ event }) => {
  const [isBookmarked, setIsBookmarked] = useState(event.bookmarked);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      <div className="flex">
        <div className={`w-1/4 p-6 bg-gradient-to-br ${event.colorClass} flex flex-col items-center justify-center`}>
          <div className="text-center">
            <div className={`text-3xl font-bold ${event.textClass}`}>{event.date}</div>
            <div className="text-sm text-gray-600">{event.month}</div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-sm font-medium text-gray-700">{event.time}</div>
            <div className="text-xs text-gray-500">{event.tz}</div>
          </div>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {event.tags.map(tag => (
                  <span key={tag.name} className={`${tag.color} text-xs font-medium px-2 py-1 rounded`}>
                    {tag.name}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
            </div>
            <button onClick={() => setIsBookmarked(!isBookmarked)} className={isBookmarked ? 'text-yellow-400' : 'text-gray-400 hover:text-gray-600'}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faUsers} className="text-gray-400" />
              <span className="text-sm text-gray-600">{event.attending} attending</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faClock} className="text-gray-400" />
              <span className="text-sm text-gray-600">{event.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Avatars */}
              <div className="flex -space-x-2">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-gray-600">+5</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all">
                <FontAwesomeIcon icon={faShare} className="mr-2" />
                Share
              </button>
              <button className={`px-6 py-2 ${event.buttonColor} text-white rounded-lg hover:opacity-90 transition-all`}>
                {event.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mock Data for Events (from event.html) ---
const eventsData = [
  { 
    date: '25', month: 'OCT', time: '09:00 AM', tz: 'EST',
    colorClass: 'from-blue-50 to-purple-50', textClass: 'text-blue-600',
    tags: [
      { name: 'Technology', color: 'bg-blue-100 text-blue-800' },
      { name: 'Online', color: 'bg-green-100 text-green-800' }
    ],
    title: 'Future of AI in Business: Transformative Strategies',
    attending: '2,847', duration: '3 hours',
    price: 'Free', priceColor: 'text-green-600',
    buttonText: 'View Details', buttonColor: 'bg-blue-500', bookmarked: false
  },
  // ... (add other event objects here from event.html)
];

function LiveEventPage() {
  const [view, setView] = useState('list');

  return (
    <>
      {/* Hero Section */}
      <div id="hero-section" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 h-[320px] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Live Events <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">Now</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join events that are happening right now!
          </p>
        </div>
      </div>

      {/* Filter Controls */}
      <div id="filter-controls" className="bg-white border-b border-gray-200 sticky top-[89px] z-40">
        {/* ... Filter bar content ... */}
      </div>

      {/* Main Content */}
      <main id="main-content" className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div id="sidebar-filters" className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-[160px]">
              <h3 className="font-semibold text-gray-800 mb-4">Live Filters</h3>
              {/* ... Filters ... */}
            </div>
          </div>
          
          {/* Events Grid */}
          <div id="events-grid" className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Live Events</h2>
            </div>
            
            <div className="space-y-6">
              {/* We'll just show the same data for this demo */}
              {eventsData.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
            
            {/* ... Pagination ... */}
          </div>
        </div>
      </main>
    </>
  );
}

export default LiveEventPage;