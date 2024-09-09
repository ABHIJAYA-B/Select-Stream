import React from 'react';
import Navbar from './Navbar';
import UserProfile from './assets/UserProfile.jpeg';
import authorPic1 from './assets/authorPic1.jpg';
import authorPic2 from './assets/authorPic2.jpg';
import authorPic3 from './assets/authorPic3.jpeg';
import postPic1 from './assets/postPic1.jpg';
import postPic2 from './assets/postPic2.webp';
import postPic3 from './assets/postPic3.jpeg';

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* User Information - Left Side */}
          <section className="col-span-1 bg-gray-800 p-6 rounded">
            <h2 className="text-xl font-bold mb-4">User Information</h2>
            <img
              src={UserProfile}
              alt="User Profile"
              className="w-18 h-18 rounded-full mb-2" // Reduced margin-bottom
            />
            <p className="text-gray-300 mb-2">Username: John Doe</p>
            <p className="text-gray-300 mb-2">Streak: 5 days</p>
            <p className="text-gray-300 mb-2">Current Level: Beginner</p>
            <p className="text-gray-300">Activity: Career Assessment completed</p>
          </section>

          {/* Popular Feed - Right Side */}
          <section className="col-span-2 space-y-6">
            <h2 className="text-xl font-bold mb-4">Popular Topics</h2>

            {/* Popular Feed Items */}
            <div className="grid grid-cols-2 gap-6">
              {/* Popular Feed Item 1 */}
              <div className="bg-gray-800 p-4 rounded-lg flex space-x-4">
                <img
                  src={authorPic1}
                  alt="Author 1"
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200">Author Name 1</h3>
                  <p className="text-gray-400 mb-2">500 likes</p>
                  <img
                    src={postPic1}
                    alt="Post 1"
                    className="w-full h-32 object-cover rounded-lg border-2 border-gray-700"
                  />
                </div>
              </div>

              {/* Popular Feed Item 2 */}
              <div className="bg-gray-800 p-4 rounded-lg flex space-x-4">
                <img
                  src={authorPic2}
                  alt="Author 2"
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200">Author Name 2</h3>
                  <p className="text-gray-400 mb-2">300 likes</p>
                  <img
                    src={postPic2}
                    alt="Post 2"
                    className="w-full h-32 object-cover rounded-lg border-2 border-gray-700"
                  />
                </div>
              </div>

              {/* Popular Feed Item 3 */}
              <div className="bg-gray-800 p-4 rounded-lg flex space-x-4">
                <img
                  src={authorPic3}
                  alt="Author 3"
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200">Author Name 3</h3>
                  <p className="text-gray-400 mb-2">250 likes</p>
                  <img
                    src={postPic3}
                    alt="Post 3"
                    className="w-full h-32 object-cover rounded-lg border-2 border-gray-700"
                  />
                </div>
              </div>

                          {/* Popular Feed Item 4 */}
            <div className="bg-gray-800 p-4 rounded-lg flex space-x-4">
              <img
                src={authorPic1}
                alt="Author 4"
                className="w-12 h-12 rounded-full border-2 border-gray-700"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-200">Author Name 4</h3>
                <p className="text-gray-400 mb-2">450 likes</p>
                <img
                  src={postPic1}
                  alt="Post 4"
                  className="w-full h-32 object-cover rounded-lg border-2 border-gray-700"
                />
              </div>
            </div>

            {/* Popular Feed Item 5 */}
            <div className="bg-gray-800 p-4 rounded-lg flex space-x-4">
              <img
                src={authorPic2}
                alt="Author 5"
                className="w-12 h-12 rounded-full border-2 border-gray-700"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-200">Author Name 5</h3>
                <p className="text-gray-400 mb-2">320 likes</p>
                <img
                  src={postPic2}
                  alt="Post 5"
                  className="w-full h-32 object-cover rounded-lg border-2 border-gray-700"
                />
              </div>
            </div>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
