import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SessionList from './Components/SessionList';
import HomePage from './Pages/HomePage';
import SessionPage from './Pages/SessionPage'; 
import NotFoundPage from './Pages/NotFoundPage';
import './Styles/main.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <SessionList />
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/session/:sessionId" element={<SessionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;