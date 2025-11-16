import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    course: '',
    email: '',
    phone: '',
  });
  const [event, setEvent] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const eventId = new URLSearchParams(location.search).get('eventId');

  useEffect(() => {
    const fetchEvent = async () => {
      if (eventId) {
        try {
          const response = await fetch(`http://localhost:3001/events/${eventId}`);
          const eventData = await response.json();
          setEvent(eventData);
        } catch (error) {
          console.error('Failed to fetch event details:', error);
        }
      }
    };
    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = { ...formData, eventId: parseInt(eventId, 10) };
    try {
      const response = await fetch('http://localhost:3001/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        setShowSuccess(true);
        console.log(`Sending registration confirmation email to ${formData.email} for event: ${event.title}`);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
  };

  if (!event) {
    return (
      <div className="text-center p-20 min-h-screen">
        <h1 className="text-4xl font-bold">Loading event...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Register for: {event.title}</h2>
        <p className="text-center text-gray-600 mb-6">{event.description}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">Full Name</label>
              <input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange}
                     className="w-full border rounded-lg px-4 py-2" required />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Email Address</label>
              <input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}
                     className="w-full border rounded-lg px-4 py-2" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="year" className="block font-semibold text-gray-700 mb-2">Year</label>
              <input id="year" type="text" placeholder="e.g., 3rd Year" value={formData.year} onChange={handleChange}
                     className="w-full border rounded-lg px-4 py-2" required />
            </div>
            <div>
              <label htmlFor="course" className="block font-semibold text-gray-700 mb-2">Course</label>
              <input id="course" type="text" placeholder="e.g., Computer Science" value={formData.course} onChange={handleChange}
                     className="w-full border rounded-lg px-4 py-2" required />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold text-gray-700 mb-2">Phone Number</label>
            <input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange}
                   className="w-full border rounded-lg px-4 py-2" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-medium">Register for Event</button>
          </div>
        </form>
        {showSuccess && (
          <p className="text-center text-green-600 font-semibold mt-6">
            ✅ Registration successful! A confirmation email has been sent. Redirecting...
          </p>
        )}
      </section>
    </div>
  );
}

export default RegistrationPage;
