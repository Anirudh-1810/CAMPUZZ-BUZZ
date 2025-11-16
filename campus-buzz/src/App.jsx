import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// Import all your page components
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ClubsPage from './pages/ClubsPage';
import ClubDetailPage from './pages/ClubDetailPage';
import LiveEventPage from './pages/LiveEventPage';
import CreateEventPage from './pages/CreateEventPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import CalendarPage from './pages/CalendarPage';
import EventDetailPage from './pages/EventDetailPage';
import RegistrationPage from './pages/RegistrationPage';

// Import your reusable components
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const AppLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    <ChatBot />
  </>
);

const NotFoundPage = () => (
  <div className="text-center p-20 min-h-screen">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
    <Link to="/" className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium">
      Go Home
    </Link>
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:eventId" element={<EventDetailPage />} /> 
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/club/:clubId" element={<ClubDetailPage />} />
        <Route path="/live-event" element={<LiveEventPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;