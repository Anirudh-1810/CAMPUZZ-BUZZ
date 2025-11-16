import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faCode, faPalette, faDumbbell, faMusic 
} from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [latestEvents, setLatestEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestEvents = async () => {
      try {
        const response = await fetch('http://localhost:3001/events?_sort=id&_order=desc&_limit=4');
        const events = await response.json();
        setLatestEvents(events);
      } catch (error) {
        console.error('Failed to fetch latest events:', error);
      }
    };

    fetchLatestEvents();
  }, []);

  const joinClub = (clubId) => {
    navigate(`/club/${clubId}`);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section id="hero-intro" className="gradient-bg h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Discover Amazing College Events
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Welcome to Campus Events Hub - the ultimate platform where college clubs showcase their exciting events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('upcoming-events')} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Explore Events
                </button>
                <button onClick={() => scrollToSection('featured-clubs')} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Join as Club
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5ab8ef1bfa-c345dcbcc4e4ac2fc26f.png" alt="college students at campus event" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUsers} className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">500+ Active Students</p>
                    <p className="text-sm text-gray-600">Join the community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE EVENTS */}
      <section id="live-events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">LIVE NOW</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Events Happening Right Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Live Event Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-red-200">
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1b2b006502-3aebb2febf10405b561b.png" alt="hackathon" />
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">48-Hour Hackathon Challenge</h3>
                <p className="text-gray-600 mb-4">Build innovative solutions for campus problems.</p>
                <Link to="/live-event" className="w-full text-center block bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Join Live Stream
                </Link>
              </div>
            </div>
            {/* Add more live cards as needed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-red-200">
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1b2b006502-3aebb2febf10405b561b.png" alt="hackathon" />
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">48-Hour Hackathon Challenge</h3>
                <p className="text-gray-600 mb-4">Build innovative solutions for campus problems.</p>
                <Link to="/live-event" className="w-full text-center block bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Join Live Stream
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-red-200">
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1b2b006502-3aebb2febf10405b561b.png" alt="hackathon" />
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">48-Hour Hackathon Challenge</h3>
                <p className="text-gray-600 mb-4">Build innovative solutions for campus problems.</p>
                <Link to="/live-event" className="w-full text-center block bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Join Live Stream
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section id="upcoming-events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <img src={event.imageUrl || 'https://via.placeholder.com/300x200.png?text=Event'} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  <Link to={`/register?eventId=${event.id}`} className="w-full text-center block bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CLUBS */}
      <section id="featured-clubs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Clubs & Organizations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Tech Club */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCode} className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Club</h3>
              <p className="text-gray-600 mb-4">Coding workshops, hackathons, and tech talks</p>
              <button onClick={() => joinClub('tech')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Join Club
              </button>
            </div>
            {/* Arts Society */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPalette} className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Arts Society</h3>
              <p className="text-gray-600 mb-4">Painting, sculpture, and creative exhibitions</p>
              <button onClick={() => joinClub('arts')} className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Join Club
              </button>
            </div>
            {/* Fitness Club */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faDumbbell} className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fitness Club</h3>
              <p className="text-gray-600 mb-4">Group workouts, sports, and wellness programs</p>
              <button onClick={() => joinClub('fitness')} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Join Club
              </button>
            </div>
            {/* Music Society */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMusic} className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Music Society</h3>
              <p className="text-gray-600 mb-4">Concerts, jam sessions, and music competitions</p>
              <button onClick={() => joinClub('music')} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Join Club
              </button>
            </div>
          </div>
          <div className="text-center">
            <Link to="/clubs" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Clubs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
