import React, { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { BackToTop } from './components';
import { ThemeContext } from './contexts/ThemeContext';
import { BlogPage, Main, ProjectPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  console.log('%cDEVELOPER PORTFOLIO', `color:${theme.primary}; font-size:50px`);
  console.log('%chttps://github.com/hhhrrrttt222111/developer-portfolio', `color:${theme.tertiary}; font-size:20px`);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
