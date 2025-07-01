// src/Services/db.js
// Simple client-side database service using localStorage

const SESSIONS_KEY = 'chainmind_sessions';
const MESSAGES_KEY_PREFIX = 'chainmind_messages_';

// --- Session Management ---

export function getSessions() {
  const sessions = localStorage.getItem(SESSIONS_KEY);
  return sessions ? JSON.parse(sessions) : [];
}

export function saveSessions(sessions) {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}

export function deleteSession(sessionId) {
  const sessions = getSessions().filter(s => s.id !== sessionId);
  saveSessions(sessions);
  localStorage.removeItem(MESSAGES_KEY_PREFIX + sessionId);
}

// --- Message Management ---

export function getMessages(sessionId) {
  const messages = localStorage.getItem(MESSAGES_KEY_PREFIX + sessionId);
  return messages ? JSON.parse(messages) : [];
}

export function saveMessages(sessionId, messages) {
  localStorage.setItem(MESSAGES_KEY_PREFIX + sessionId, JSON.stringify(messages));
}

export function deleteMessages(sessionId) {
  localStorage.removeItem(MESSAGES_KEY_PREFIX + sessionId);
}

// --- Utility ---

export function createSession(name) {
  const sessions = getSessions();
  const newSession = {
    id: Date.now().toString(),
    name,
    createdAt: new Date().toISOString(),
    active: false
  };
  sessions.push(newSession);
  saveSessions(sessions);
  return newSession;
}
