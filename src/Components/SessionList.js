import React, { useState } from 'react';

function SessionList() {
  const [sessions, setSessions] = useState([
    { id: 1, name: 'Project Planning', active: true },
    { id: 2, name: 'Code Review', active: false },
    { id: 3, name: 'Bug Fixes', active: false }
  ]);

  // Placeholder handlers for session management
  const handleCreateSession = () => {
    // TODO: Add logic to create new session
    console.log('Create new session');
  };

  const handleDeleteSession = (sessionId) => {
    // TODO: Add logic to delete session
    console.log('Delete session:', sessionId);
  };

  const handleRenameSession = (sessionId) => {
    // TODO: Add logic to rename session
    console.log('Rename session:', sessionId);
  };

  const handleSelectSession = (sessionId) => {
    // TODO: Add logic to select/activate session
    console.log('Select session:', sessionId);
  };

  return (
    <div className="session-list">
      <div className="session-header">
        <h3>Sessions</h3>
        <button 
          className="create-session-button"
          onClick={handleCreateSession}
        >
          + New
        </button>
      </div>
      <div className="session-items">
        {sessions.map(session => (
          <div 
            key={session.id} 
            className={`session-item ${session.active ? 'active' : ''}`}
            onClick={() => handleSelectSession(session.id)}
          >
            <span className="session-name">{session.name}</span>
            <div className="session-actions">
              <button 
                className="rename-session-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRenameSession(session.id);
                }}
              >
                ✏️
              </button>
              <button 
                className="delete-session-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteSession(session.id);
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessionList;
