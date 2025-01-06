import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

    </Routes>
  );
};

export default App;