import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import AIStoryVisualizedPage from './pages/AIStoryVisualizedPage/AIStoryVisualizedPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AIPage" element={<AIStoryVisualizedPage />} />

    </Routes>
  );
};

export default App;