import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- THE FIX IS HERE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, faCompass, faChevronLeft, faChevronRight, 
  faTableCellsLarge, faList, faCode, faPersonRunning, 
  faBook, faUtensils, faCamera, faBriefcase, faMusic, 
  faGamepad, faHeart, faUsers, faCalendar, faLocationDot
} from '@fortawesome/free-solid-svg-icons';

// Data for club cards
const clubData = [
  { id: 'tech', name: 'Python Developers', icon: faCode, color: 'blue', members: 1234, events: 8, location: 'Seattle, WA' },
  { id: 'fitness', name: 'Morning Runners', icon: faPersonRunning, color: 'green', members: 567, events: 15, location: 'Central Park, NY' },
  { id: 'books', name: 'Sci-Fi Book Club', icon: faBook, color: 'purple', members: 342, events: 6, location: 'Chicago, IL' },
  { id: 'food', name: 'Foodie Adventures', icon: faUtensils, color: 'orange', members: 789, events: 12, location: 'Miami, FL' },
  { id: 'photo', name: 'Photography Club', icon: faCamera, color: 'red', members: 456, events: 9, location: 'Portland, OR' },
  { id: 'biz', name: 'Entrepreneurs Network', icon: faBriefcase, color: 'indigo', members: 923, events: 18, location: 'Austin, TX' },
  { id: 'music', name: 'Jazz Enthusiasts', icon: faMusic, color: 'pink', members: 234, events: 7, location: 'New Orleans, LA' },
  { id: 'games', name: 'Board Game Society', icon: faGamepad, color: 'teal', members: 678, events: 14, location: 'Denver, CO' },
];

// Reusable Club Card Component
const ClubCard = ({ club }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate(); // This line was causing the crash

  const colorClasses = {
    blue: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', gradient: 'from-blue-500 to-blue-600' },
    green: { bg: 'bg-green-600', hover: 'hover:bg-green-700', gradient: 'from-green-500 to-green-600' },
    purple: { bg: 'bg-purple-600', hover: 'hover:bg-purple-700', gradient: 'from-purple-500 to-purple-600' },
    orange: { bg: 'bg-orange-600', hover: 'hover:bg-orange-700', gradient: 'from-orange-500 to-orange-600' },
    red: { bg: 'bg-red-600', hover: 'hover:bg-red-700', gradient: 'from-red-500 to-red-600' },
    indigo: { bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700', gradient: 'from-indigo-500 to-indigo-600' },
    pink: { bg: 'bg-pink-600', hover: 'hover:bg-pink-700', gradient: 'from-pink-500 to-pink-600' },
    teal: { bg: 'bg-teal-600', hover: 'hover:bg-teal-700', gradient: 'from-teal-500 to-teal-600' },
  };
  
  const colors = colorClasses[club.color] || colorClasses.blue;

  // Function to navigate to club detail page
  const handleJoinClub = () => {
    navigate(`/club/${club.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center`}>
          <FontAwesomeIcon icon={club.icon} className="text-white" />
        </div>
        <button onClick={() => setIsLiked(!isLiked)} className="p-1 hover:bg-gray-100 rounded">
          <FontAwesomeIcon icon={faHeart} className={isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} />
        </button>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{club.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">Description placeholder for {club.name}...</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
        <span>{club.location}</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="flex items-center text-sm text-gray-600">
            <FontAwesomeIcon icon={faUsers} className="mr-1" />
            {club.members}
          </span>
          <span className="flex items-center text-sm text-gray-600">
            <FontAwesomeIcon icon={faCalendar} className="mr-1" />
            {club.events}
          </span>
        </div>
      </div>
      <button 
        onClick={handleJoinClub} 
        className={`w-full text-center ${colors.bg} ${colors.hover} text-white py-2 px-4 rounded-lg transition-colors text-sm font-semibold`}
      >
        Join Club
      </button>
    </div>
  );
};


function ClubsPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-section" className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white h-[400px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">Discover Amazing Clubs</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Find your perfect match and connect with like-minded people.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section id="stats-banner" className="bg-white py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-gray-600">Active Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">89,432</div>
              <div className="text-gray-600">Total Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2,845</div>
              <div className="text-gray-600">Events This Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtering Section - Add useState for real filtering */}
      <section id="filtering-section" className="bg-white py-8 border-b">
        <div className="container mx-auto px-6">
          {/* Add filtering logic here */}
        </div>
      </section>

      {/* All Clubs Grid Section */}
      <section id="all-clubs-grid" className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">All Clubs</h2>
              <p className="text-gray-600">Showing 1-8 of 1,247 clubs</p>
            </div>
            {/* ... view toggle buttons ... */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clubData.map(club => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
          
          {/* ... pagination ... */}
        </div>
      </section>

      {/* Club Creation CTA Section */}
      <section id="create-club-cta" className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Can't Find Your Perfect Club?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Create your own community and bring together people who share your passion.
            </p>
            <Link to="/create-event" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Create New Club
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClubsPage;