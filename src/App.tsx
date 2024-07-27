import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Components
import DummyPage from './components/dummy/Dummy';
import Layout from './components/layout/Layout';
import LearningPathDetail from './components/learning-path/LearningPathDetail';

// Pages
import LearningPathPage from './pages/LearningPath';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Schedule from './pages/Schedule';

const App: React.FC = () => {
  return (
    <>
      {/* Toaster component for notifications */}
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
        }}
      />

      {/* Router for managing application routes */}
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            {/* Dashboard Page */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Schedule Page */}
            <Route path="/schedule" element={<Schedule />} />
            {/* Learning Paths Listing Page */}
            <Route path="/learning-paths" element={<LearningPathPage />} />
            {/* Learning Path Detail Page */}
            <Route path="/learning-path/:id" element={<LearningPathDetail />} />
            {/* Catch-all route for undefined paths , currently showing dummy page but ideally 404 page */}
            <Route path="*" element={<DummyPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
