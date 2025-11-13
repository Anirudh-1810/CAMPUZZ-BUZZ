import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { name: signupName, email: signupEmail, password: signupPassword };
    localStorage.setItem('campusbuzz_user', JSON.stringify(user));
    alert('Account created successfully! You can now log in.');
    setActiveTab('login'); // Switch to login tab
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('campusbuzz_user'));

    if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
      alert('Login successful!');
      navigate('/'); // Redirect to home page
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    // THE FIX IS HERE: This was <body>, now it is <div>
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen flex flex-col items-center justify-center">
      
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">🎓 Campus Buzz</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            id="loginTab"
            onClick={() => setActiveTab('login')}
            className={`px-6 py-2 rounded-l-lg ${activeTab === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Login
          </button>
          <button
            id="signupTab"
            onClick={() => setActiveTab('signup')}
            className={`px-6 py-2 rounded-r-lg ${activeTab === 'signup' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <form id="loginForm" className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="font-semibold block mb-1">Email</label>
              <input 
                type="email" 
                id="loginEmail" 
                className="border border-gray-300 rounded w-full p-2" 
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-semibold block mb-1">Password</label>
              <input 
                type="password" 
                id="loginPassword" 
                className="border border-gray-300 rounded w-full p-2" 
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">Login</button>
          </form>
        )}

        {/* Sign Up Form */}
        {activeTab === 'signup' && (
          <form id="signupForm" className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="font-semibold block mb-1">Full Name</label>
              <input 
                type="text" 
                id="signupName" 
                className="border border-gray-300 rounded w-full p-2" 
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
            </div>
            <div>
              <label className="font-semibold block mb-1">Email</label>
              <input 
                type="email" 
                id="signupEmail" 
                className="border border-gray-300 rounded w-full p-2" 
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-semibold block mb-1">Password</label>
              <input 
                type="password" 
                id="signupPassword" 
                className="border border-gray-300 rounded w-full p-2" 
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;