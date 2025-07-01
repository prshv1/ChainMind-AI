import React from 'react';
import SessionList from './Components/SessionList';
import ApiKeyInput from './Components/ApiKeyInput';
import TaskProgress from './Components/TaskProgress';
import ChatWindow from './Components/ChatWindow';
import './Styles/main.css';

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <SessionList />
      </aside>
      <main className="main-content">
        <header className="header">
          <ApiKeyInput />
        </header>
        <TaskProgress />
        <ChatWindow />
      </main>
    </div>
  );
}

export default App;