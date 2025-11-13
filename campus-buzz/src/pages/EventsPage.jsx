import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faList, faTableCellsLarge, faCalendar, faSort, faUsers, 
    faClock, faUserTie, faDollarSign, faShare, faBookmark,
    faFilterCircleXmark, faMagnifyingGlass, faChevronLeft, faChevronRight,
    faLaptopCode, faChartLine, faPalette, faGraduationCap, faHeart, faMusic,
    faMapPin  // <-- ADD THIS ICON
  } from '@fortawesome/free-solid-svg-icons';

// --- Mock Data (This is now a FALLBACK) ---
const mockEventsList = [
  { 
    id: 1, date: '25', month: 'OCT', time: '09:00 AM', tz: 'EST',
    category: 'Technology',
    colorClass: 'from-blue-50 to-purple-50', textClass: 'text-blue-600',
    tags: [ { name: 'Technology', color: 'bg-blue-100 text-blue-800' } ],
    title: 'Future of AI in Business: Transformative Strategies',
    description: 'Join industry leaders to discuss AI...',
    location: 'Online',
    attending: '2,847', duration: '3 hours',
    buttonText: 'View Details', buttonColor: 'bg-blue-500', bookmarked: false
  },
  // ... (you can add more mock events here if you want)
];

// --- Reusable EventCard Component ---
// We added 'onRegister' and the event 'id' for the link
const EventCard = ({ event, onRegister }) => {
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
            {/* THIS IS THE FIX: Check if event.tags is an array before mapping */}
                {Array.isArray(event.tags) && event.tags.map(tag => (
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
              <FontAwesomeIcon icon={faMapPin} className="text-gray-400" />
              <span className="text-sm text-gray-600">{event.location}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            {/* ... avatars ... */}
            <div/> 
            <div className="flex items-center space-x-2">
              <button onClick={onRegister} className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all">
                Register
              </button>
              
              {/* --- THIS BUTTON IS NOW A LINK --- */}
              <Link 
                to={`/event/${event.id}`}
                className={`px-6 py-2 ${event.buttonColor} text-white rounded-lg hover:opacity-90 transition-all`}
              >
                {event.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main EventsPage Component ---
function EventsPage() {
  const [view, setView] = useState('list');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchFilter, setSearchFilter] = useState('');
  
  // --- NEW: State for all events ---
  const [allEvents, setAllEvents] = useState([]);

  // --- NEW: Load events from localStorage on mount ---
  useEffect(() => {
    let events = JSON.parse(localStorage.getItem('eventsList'));
    if (!events || events.length === 0) {
      // If localStorage is empty, fill it with the mock data
      localStorage.setItem('eventsList', JSON.stringify(mockEventsList));
      events = mockEventsList;
    }
    setAllEvents(events.reverse()); // Show newest events first
  }, []); // Empty array runs this only once

  // --- NEW: Memoized/Filtered Events ---
  const filteredEvents = useMemo(() => {
    return allEvents
      .filter(event => {
        // Category Filter
        return categoryFilter === 'All' || event.category === categoryFilter;
      })
      .filter(event => {
        // Search Filter (checks title and description)
        const searchLower = searchFilter.toLowerCase();
        return (
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower)
        );
      });
  }, [allEvents, categoryFilter, searchFilter]); // Re-runs when these change

  // --- NEW: Registration Handler ---
  const handleRegister = (eventToRegister) => {
    alert(`✅ You are now registered for: ${eventToRegister.title}!`);
    const myRegistrations = JSON.parse(localStorage.getItem('myEvents')) || [];
    const isAlreadyRegistered = myRegistrations.find(event => event.id === eventToRegister.id);
    
    if (!isAlreadyRegistered) {
      localStorage.setItem('myEvents', JSON.stringify([...myRegistrations, eventToRegister]));
    }
  };

  return (
    <>
      <div id="hero-section" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 h-[320px] flex items-center justify-center">
        {/* ... hero content ... */}
      </div>

      {/* --- MODIFIED: Filter Controls --- */}
      <div id="filter-controls" className="bg-white border-b border-gray-200 sticky top-[89px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Filter:</span>
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All</option>
                <option>Academic Workshop</option>
                <option>Cultural Festival</option>
                <option>Sports Event</option>
                <option>Technical Meetup</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {/* --- THIS SEARCH BAR NOW WORKS --- */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search events..." 
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64" 
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {/* ... view toggle buttons ... */}
          </div>
        </div>
      </div>

      {/* --- MODIFIED: Main Content --- */}
      <main id="main-content" className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ... Sidebar ... */}
          <div id="sidebar-filters" className="lg:col-span-1">
             {/* ... */}
          </div>
          
          <div id="events-grid" className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{filteredEvents.length} Upcoming Events</h2>
              {/* ... Sort dropdown ... */}
            </div>
            
            <div className="space-y-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    onRegister={() => handleRegister(event)} 
                  />
                ))
              ) : (
                <p className="text-gray-600 bg-white p-6 rounded-lg shadow-sm">
                  No events match your filters. <a href="#" onClick={() => setSearchFilter('')} className="text-blue-600">Clear search?</a>
                </p>
              )}
            </div>
            
            {/* ... Pagination ... */}
          </div>
        </div>
      </main>
    </>
  );
}

export default EventsPage;