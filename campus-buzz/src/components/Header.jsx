import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDays, faClock, faPlus, 
  faMagnifyingGlass, faBell 
} from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/photos/CUB4-Top-10-reasons-why-Chitkara-University-is-the-best-University-in-North-India.jpg';

function Header() {
  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors ${isActive ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faCalendarDays} className="text-white text-sm" />
          </div>
          <span className="font-bold text-xl text-gray-800">CAMPUS BUZZ</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/events" className={navLinkClass}>Events</NavLink>
          <NavLink to="/clubs" className={navLinkClass}>Clubs</NavLink>
          <NavLink to="/live-event" className={navLinkClass}>Live Event</NavLink>
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
          <FontAwesomeIcon icon={faClock} className="text-gray-500 text-sm" />
          <span className="text-gray-600 text-sm font-medium">11:34 AM GMT+7</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/create-event" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all inline-flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Create Event
          </Link>
          
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600" />
            </button>
            
            <div className="relative">
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all">
                <FontAwesomeIcon icon={faBell} className="text-gray-600" />
              </button>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
            </div>
            
            <Link to="/profile" className="w-10 h-10 rounded-lg overflow-hidden">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;