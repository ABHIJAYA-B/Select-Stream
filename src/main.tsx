import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import CareerAssessment from './CareerAssessment';
import AICareerGuidance from './AICareerGuidance';
import QuickLearn from './QuickLearn';
import FutureCareerProgression from './FutureCareerProgression';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="career-assessment" element={<CareerAssessment />} />
          <Route path="ai-career-guidance" element={<AICareerGuidance />} />
          <Route path="quick-learn" element={<QuickLearn />} />
          <Route path="future-career-progression" element={<FutureCareerProgression />} />
          
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
