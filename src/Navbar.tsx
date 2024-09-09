import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const handleLogout = () => {
    // Clear user data from local storage or cookies
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // If using token-based authentication

    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <nav className="w-64 bg-black min-h-screen p-4">
      <h1 className="text-xl font-bold text-gray-200 mb-6">Career Guidance App</h1>
      <ul className="space-y-5">
        <li>
          <Link to="/" className="block text-gray-300 hover:bg-gray-800 px-4 py-2 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link to="/career-assessment" className="block text-gray-300 hover:bg-gray-800 px-4 py-2 rounded">
            Career Assessment
          </Link>
        </li>
        <li>
          <Link to="/ai-career-guidance" className="block text-gray-300 hover:bg-gray-800 px-4 py-2 rounded">
            AI Career Guidance
          </Link>
        </li>
        <li>
          <Link to="/quick-learn" className="block text-gray-300 hover:bg-gray-800 px-4 py-2 rounded">
            Quick Learn
          </Link>
        </li>
        <li>
          <Link to="/future-career-progression" className="block text-gray-300 hover:bg-gray-800 px-4 py-2 rounded">
            Future Career Progression
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
