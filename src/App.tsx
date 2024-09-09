import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to determine active link styling
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-gray-900' : '';
  };

  // Logout handler
  const handleLogout = () => {
    // Clear user data (if any)
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // Remove token if using token-based authentication

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Main Content */}
      <div className="flex-1">
        <nav className="bg-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Title or logo can be added here if needed */}
            <div className="space-x-4 flex items-center">
              <Link
                to="/"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
              >
                
              </Link>
              <Link
                to="/career-assessment"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${isActive('/career-assessment')}`}
              >
                
              </Link>
              <Link
                to="/ai-career-guidance"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${isActive('/ai-career-guidance')}`}
              >
               
              </Link>
              <Link
                to="/quick-learn"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${isActive('/quick-learn')}`}
              >
                
              </Link>
              <Link
                to="/future-career-progression"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${isActive('/future-career-progression')}`}
              >
               
              </Link>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                
              >
                
              </button>
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-4 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
