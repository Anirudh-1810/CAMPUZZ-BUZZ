import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

// You would need to install these: npm install @fortawesome/free-brands-svg-icons
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">ClubHub</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Connect with amazing communities and discover clubs that match your interests. Join thousands of members worldwide.
            </p>
            {/* <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="text-blue-400" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-400" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-400" />
              </button>
            </div>
            */}
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/clubs" className="text-gray-300 hover:text-white transition-colors">All Clubs</Link></li>
              <li><Link to="/clubs" className="text-gray-300 hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/clubs" className="text-gray-300 hover:text-white transition-colors">Trending</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Organizers</h4>
            <ul className="space-y-3">
              <li><Link to="/create-event" className="text-gray-300 hover:text-white transition-colors">Create Club</Link></li>
              <li><Link to="/create-event" className="text-gray-300 hover:text-white transition-colors">Organizer Tools</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Best Practices</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2024 CampusBuzz. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;