import React, { useState } from 'react';

function ChatWindow() {
  const [message, setMessage] = useState('');

  // Placeholder for future send handler
  const handleSend = (e) => {
    e.preventDefault();
    // TODO: Add logic to send message and update chat history
    setMessage('');
  };

  return (
    <div className="chat-window">
      <div className="chat-history">
        {/* TODO: Render chat messages here */}
        <div className="chat-placeholder">Chat history will appear here.</div>
      </div>
      <form className="chat-input-form" onSubmit={handleSend}>
        <input
          type="text"
          className="chat-input-field"
          placeholder="Type your message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" className="chat-send-button">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
