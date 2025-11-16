import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // This line is now correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faPalette, faDumbbell, faMusic,
  faUsers, faCalendar, faStar, faInfoCircle,
  faCheckCircle, faGift, faGraduationCap, faNetworkWired,
  faBriefcase, faCalendarAlt, faUserTie,
  faUserPlus, faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

// Mock club data
const clubDatabase = {
  'tech': {
    name: 'Tech Club', icon: faCode, color: 'blue',
    tagline: 'Innovation • Collaboration • Technology',
    members: '250 Members', events: '15 Events/Year',
    description: 'The Tech Club is a vibrant community of students passionate about technology, coding, and innovation. We organize hackathons, coding workshops, tech talks, and collaborative projects to help members enhance their technical skills and stay updated with the latest technological trends.'
  },
  'arts': {
    name: 'Arts Society', icon: faPalette, color: 'pink',
    tagline: 'Creativity • Expression • Culture',
    members: '180 Members', events: '20 Events/Year',
    description: 'The Arts Society celebrates creativity in all its forms. From painting and sculpture to digital art and photography, we provide a platform for artists to showcase their work, learn new techniques, and connect with fellow creative minds through exhibitions and workshops.'
  },
  'fitness': {
    name: 'Fitness Club', icon: faDumbbell, color: 'green',
    tagline: 'Health • Wellness • Strength',
    members: '320 Members', events: '30 Events/Year',
    description: 'The Fitness Club promotes healthy living through group workouts, sports activities, and wellness programs. We organize fitness challenges, yoga sessions, nutrition workshops, and sports tournaments to help members achieve their fitness goals.'
  },
  'music': {
    name: 'Music Society', icon: faMusic, color: 'yellow',
    tagline: 'Rhythm • Harmony • Performance',
    members: '200 Members', events: '25 Events/Year',
    description: 'The Music Society brings together musicians, singers, and music enthusiasts. We organize concerts, jam sessions, music production workshops, and competitions, providing opportunities for members to perform, collaborate, and grow their musical talents.'
  }
};

function ClubDetailPage() {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [club, setClub] = useState(null);

  useEffect(() => {
    if (clubId && clubDatabase[clubId]) {
      setClub(clubDatabase[clubId]);
    } else {
      // Handle club not found, maybe redirect
      navigate('/clubs'); 
    }
  }, [clubId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 Application submitted successfully! You will receive a confirmation email shortly.');
    navigate('/clubs'); // Go back to clubs page
  };

  if (!club) {
    return <div>Loading club...</div>; // Show loading state
  }

  // Helper classes for dynamic styling
  const colorClass = `text-${club.color}-600`;
  const bgClass = `from-${club.color}-500 to-${club.color}-600`;
  const iconBgClass = `bg-${club.color}-100`;

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Club Header */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className={`bg-gradient-to-r ${bgClass} h-48 relative`}>
            <div className="absolute -bottom-16 left-8">
              <div className={`w-32 h-32 ${iconBgClass} rounded-2xl flex items-center justify-center border-4 border-white shadow-xl`}>
                <FontAwesomeIcon icon={club.icon} className={`${colorClass} text-5xl`} />
              </div>
            </div>
          </div>
          
          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="flex-1">
                <h1 id="clubName" className="text-4xl font-bold text-gray-800 mb-2">{club.name}</h1>
                <p id="clubTagline" className="text-xl text-gray-600 mb-4">{club.tagline}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FontAwesomeIcon icon={faUsers} />
                    <span id="memberCount">{club.members}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span id="eventCount">{club.events}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                    <span>4.8/5 Rating</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => document.getElementById('joinForm').scrollIntoView({ behavior: 'smooth' })} 
                className={`bg-gradient-to-r ${bgClass} hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all w-full md:w-auto mt-4 md:mt-0`}
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />Join This Club
              </button>
            </div>
          </div>
        </div>

        {/* About & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* About Club */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 mr-3" />About the Club
            </h2>
            <p id="clubDescription" className="text-gray-600 leading-relaxed mb-6">
              {club.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Weekly coding sessions and workshops</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Annual hackathons with prizes</p>
              </div>
            </div>
          </div>

          {/* Member Benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FontAwesomeIcon icon={faGift} className="text-purple-600 mr-3" />Member Benefits
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4 card-hover">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 mr-2" />Skill Development
                </h3>
                <p className="text-gray-600 text-sm">Access to exclusive workshops, courses, and mentorship programs</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 card-hover">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  <FontAwesomeIcon icon={faNetworkWired} className="text-purple-600 mr-2" />Networking
                </h3>
                <p className="text-gray-600 text-sm">Connect with like-minded peers and industry professionals</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 card-hover">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  <FontAwesomeIcon icon={faBriefcase} className="text-green-600 mr-2" />Career Opportunities
                </h3>
                <p className="text-gray-600 text-sm">Early access to internships and job opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 mr-3" />Upcoming Events
          </h2>
          {/* ... event cards ... */}
        </div>

        {/* Leadership Team */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FontAwesomeIcon icon={faUserTie} className="text-purple-600 mr-3" />Leadership Team
          </h2>
          {/* ... leadership profiles ... */}
        </div>

        {/* Join Form */}
        <div id="joinForm" className="bg-white rounded-2xl shadow-2xl p-8 scroll-mt-24">
          <div className="text-center mb-8">
            <div className={`w-20 h-20 bg-gradient-to-r ${bgClass} rounded-full mx-auto mb-4 flex items-center justify-center`}>
              <FontAwesomeIcon icon={faUserPlus} className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Join {club.name}</h2>
            <p className="text-gray-600">Fill out this form to become a member</p>
          </div>

          <form id="clubJoinForm" className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Student ID *</label>
                <input type="text" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors" placeholder="Enter your student ID" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input type="email" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors" placeholder="your.email@university.edu" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors" placeholder="+91 00000-0000" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join? *</label>
              <textarea required rows="4" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors" placeholder="Tell us why you're interested..."></textarea>
            </div>
            <div className="flex items-start space-x-3">
              <input type="checkbox" required className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500" />
              <label className="text-sm text-gray-700">I agree to the club's terms and conditions *</label>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button type="submit" className={`flex-1 bg-gradient-to-r ${bgClass} hover:opacity-90 text-white py-4 rounded-lg font-semibold shadow-lg transition-all`}>
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Submit Application
              </button>
              <button type="button" onClick={() => navigate(-1)} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-lg font-semibold transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

export default ClubDetailPage;