import React, { useState } from 'react';
import Navbar from './Navbar'; // Make sure this path is correct

const CareerAssessment: React.FC = () => {
  const [aptitudeAnswers, setAptitudeAnswers] = useState({
    problemSolving: false,
    workingWithData: false,
    creativeThinking: false,
  });
  const [careerAspirations, setCareerAspirations] = useState<string>('');
  const [passionsAndInterests, setPassionsAndInterests] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [showLectures, setShowLectures] = useState<boolean>(false);

  const handleAptitudeChange = (question: keyof typeof aptitudeAnswers) => {
    setAptitudeAnswers((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  const handleSubmitAssessment = () => {
    console.log('Assessment submitted:', { aptitudeAnswers, careerAspirations, passionsAndInterests });
    // You can include any logic for assessment submission if needed
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setShowLectures(true); // Show lecture pop-ups after feedback is submitted
  };

  const closeLectures = () => {
    setShowLectures(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <Navbar />
      <nav className="w-1/4 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-8 text-gray-300">Navigation</h2>
        <ul className="space-y-4">
          <li>
            <a href="#assessment" className="text-gray-400 hover:text-white">Assessment</a>
          </li>
          <li>
            <a href="#aspirations" className="text-gray-400 hover:text-white">Aspirations</a>
          </li>
          <li>
            <a href="#feedback" className="text-gray-400 hover:text-white">Feedback</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-navy-200">Career Assessment</h1>
          <p className="mb-8">Let's assess your aptitude, interests, abilities, and experiences to recommend the best career paths.</p>

          <div className="mb-12" id="assessment">
            <h2 className="text-2xl font-semibold mb-4 text-navy-100">Aptitude Assessment</h2>
            <p className="mb-4">Complete this cognitive test to evaluate your strengths:</p>

            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={aptitudeAnswers.problemSolving}
                    onChange={() => handleAptitudeChange('problemSolving')}
                    className="form-checkbox h-5 w-5 text-navy-300"
                  />
                  <span>Do you enjoy solving complex problems?</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={aptitudeAnswers.workingWithData}
                    onChange={() => handleAptitudeChange('workingWithData')}
                    className="form-checkbox h-5 w-5 text-navy-300"
                  />
                  <span>Do you like working with data and numbers?</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={aptitudeAnswers.creativeThinking}
                    onChange={() => handleAptitudeChange('creativeThinking')}
                    className="form-checkbox h-5 w-5 text-navy-300"
                  />
                  <span>Are you inclined towards creative thinking and activities?</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleSubmitAssessment}
              className="mt-6 bg-navy-700 hover:bg-navy-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit Assessment
            </button>
          </div>

          <div className="mb-12" id="aspirations">
            <h2 className="text-2xl font-semibold mb-4 text-navy-100">Aspirations and Interests</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">What are your career aspirations?</label>
                <textarea
                  value={careerAspirations}
                  onChange={(e) => setCareerAspirations(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 bg-gray-800"
                  rows={4}
                />
              </div>
              <div>
                <label className="block mb-2">What are your passions and interests?</label>
                <textarea
                  value={passionsAndInterests}
                  onChange={(e) => setPassionsAndInterests(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 bg-gray-800"
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div id="feedback">
            <h2 className="text-2xl font-semibold mb-4 text-navy-100">Leave Your Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 bg-gray-800"
              rows={4}
              placeholder="Your Comment:"
            />
            <button
              onClick={handleSubmitFeedback}
              className="mt-4 bg-navy-700 hover:bg-navy-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit Comment
            </button>
          </div>
        </div>
      </div>

      {/* Lecture Pop-ups */}
      {showLectures && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-gray-800 p-8 rounded-lg w-3/4 max-w-3xl relative">
            <button
              onClick={closeLectures}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-navy-100">Recommended Lectures</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-200">Machine Learning</h3>
                <p className="text-gray-400 mb-2">Description of Lecture 1 related to your interest.</p>
                <a href="#" className="text-navy-500 hover:text-navy-400">Watch Video</a>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-200">Ai & Ml in everyday</h3>
                <p className="text-gray-400 mb-2">Description of Lecture 2 related to your interest.</p>
                <a href="#" className="text-navy-500 hover:text-navy-400">Watch Video</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerAssessment;
