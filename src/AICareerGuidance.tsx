import React from 'react';
import { Rocket } from 'lucide-react';
import Navbar from './Navbar';
import ai from './assets/ai.avif'

const AICareerGuidance: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-900">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">AI Career Guidance</h1>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
            Deploy
          </button>
        </header>

        <main className="flex-1">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            AI-Powered Career Guidance System 
            <Rocket className="ml-2 text-gray-400" size={24} />
          </h2>
          <p className="mb-8 text-gray-300">
            Welcome to the AI Career Guidance System! Our system helps you find personalized career pathways that align with your aptitude, aspirations, abilities, and work experience.
          </p>
          <div className="flex justify-center items-center my-6">
  <img 
    src={ai} 
    alt="Career Guidance Illustration" 
    className="w-100 h-80 rounded-lg border-2 border-gray-600"
  />
</div>

        </main>
      </div>
    </div>
  );
};

export default AICareerGuidance;
