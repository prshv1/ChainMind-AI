import React, { useState } from 'react';

function ApiKeyInput() {
  const [apiKey, setApiKey] = useState('');

  // Placeholder for future handler (e.g., lifting state up or saving to storage)
  const handleChange = (e) => {
    setApiKey(e.target.value);
    // TODO: Add logic to save API key or notify parent component
  };

  return (
    <div className="api-key-input">
      <label htmlFor="openrouter-api-key">OpenRouter API Key:</label>
      <input
        id="openrouter-api-key"
        type="password"
        value={apiKey}
        onChange={handleChange}
        placeholder="Enter your OpenRouter API key"
        className="api-key-input-field"
        autoComplete="off"
      />
    </div>
  );
}

export default ApiKeyInput;
