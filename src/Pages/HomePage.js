import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <div className="welcome-content">
        <h1>Welcome to ChainMind-AI</h1>
        <p>Select a session from the sidebar to get started, or create a new one.</p>
        <div className="features-preview">
          <h3>Key Features:</h3>
          <ul>
            <li>User prompt input and step-by-step plan generation</li>
            <li>Sequential task execution with context passing</li>
            <li>System prompts for high-quality outputs</li>
            <li>Final output compilation</li>
            <li>Internet access for the model</li>
            <li>Session management (create, delete, rename)</li>
            <li>Task progress visualization</li>
            <li>API key management</li>
            <li>Ongoing interaction in chat</li>
            <li>Client-side data storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
