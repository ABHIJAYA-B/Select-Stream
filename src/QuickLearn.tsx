import React, { useState } from 'react';
import Navbar from './Navbar';

const QuickLearn: React.FC = () => {
  const [topic, setTopic] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', topic);
    // Here you would typically call an API to search for videos
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 bg-gray-900 text-gray-100 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Quick Learn 🤖</h1>
          <p className="mb-6">
            Welcome to Quick Learn! This tool is designed to help you find the most informative and concise YouTube videos on any topic quickly and optimally.
          </p>
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl mb-2">What Do You Want to Learn Today? 🤔</h2>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 bg-gray-800 text-gray-200 p-2 rounded"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter your topic of interest"
              />
              <button
                type="submit"
                className="bg-gray-700 hover:bg-gray-800 text-gray-100 px-4 py-2 rounded flex items-center"
              >
                <span className="mr-2">🔍</span>
                Find Best Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickLearn;
