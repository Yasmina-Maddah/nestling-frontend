import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AIStoryVisualizedPage from './pages/AIStoryVisualizedPage/AIStoryVisualizedPage';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import SkillSuggestionPage from './pages/SkillSuggestionPage/SkillSuggestionPage';
import ReportPage from './pages/ReportPage/ReportPage';
import ArticlesList from './components/Articles/ArticlesList';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path ="/SignUp" element={<SignUpPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/AIPage" element={<AIStoryVisualizedPage />} />
      <Route path="/Resources" element={<ResourcesPage />} />
      <Route path="/Skills" element={<SkillSuggestionPage />} />
      <Route path="/Reports" element={<ReportPage />} />
      <Route path="/Articles" element={<ArticlesList />} />
      <Route path="/admin" element={<AdminDashboard />} />


    </Routes>
  );
};

export default App;