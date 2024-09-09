import React, { useState } from 'react';
import Navbar from './Navbar';

const FutureCareerProgression: React.FC = () => {
  const [skills, setSkills] = useState('');
  const [careerOpportunities, setCareerOpportunities] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where you'd typically call an API to get career opportunities
    // For this example, we'll just set some static data
    setCareerOpportunities([
      "Data Scientist: With the increasing demand for data-driven decision making, Data Scientists who can analyze and interpret complex data using ML algorithms will be in high demand.",
      "Machine Learning Engineer: As companies continue to adopt ML, the need for skilled ML Engineers who can design, develop, and deploy ML models will rise.",
      "Artificial Intelligence (AI) Researcher: AI research is expanding rapidly, and researchers who can develop new ML models, algorithms, and applications will be sought after.",
      "Natural Language Processing (NLP) Specialist: With the growth of voice assistants, chatbots, and language translation, NLP Specialists who can develop intelligent language processing systems will be in high demand.",
      "Computer Vision Engineer: As computer vision technology advances, Computer Vision Engineers who can develop applications like self-driving cars, facial recognition, and image recognition will be highly sought after.",
      "Predictive Analytics Specialist: Companies will need Predictive Analytics Specialists who can develop ML models to forecast sales, customer behavior, and market trends."
    ]);
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 ml-64 p-8 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Future Career Progression</h1>
        <p className="mb-6">
          Predicting future trends and skill gaps in your industry can help you stay ahead.
        </p>
        <form onSubmit={handleSubmit} className="mb-8">
          <h2 className="text-xl mb-2">List the key skills you're interested in learning or improving:</h2>
          <textarea
            className="w-full bg-gray-800 p-2 rounded mb-4"
            rows={3}
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g., Machine Learning, Data Analysis, Python"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
          >
            Predict Future Career Opportunities
          </button>
        </form>

        {careerOpportunities.length > 0 && (
          <div>
            <h2 className="text-2xl mb-4">Future Career Opportunities:</h2>
            <ul className="list-disc pl-5 space-y-2">
              {careerOpportunities.map((opportunity, index) => (
                <li key={index}>{opportunity}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default FutureCareerProgression;
