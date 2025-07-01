import React from 'react';
import { useParams } from 'react-router-dom';
import ApiKeyInput from '../Components/ApiKeyInput';
import TaskProgress from '../Components/TaskProgress';
import ChatWindow from '../Components/ChatWindow';

function SessionPage() {
  const { sessionId } = useParams();

  return (
    <div className="session-page">
      <header className="header">
        <ApiKeyInput />
      </header>
      <TaskProgress sessionId={sessionId} />
      <ChatWindow sessionId={sessionId} />
    </div>
  );
}

export default SessionPage;
