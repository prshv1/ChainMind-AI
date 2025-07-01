// src/Utils/contextManager.js
// Utility for managing and formatting context for the OpenRouter API

/**
 * Build a message array for the OpenRouter API from chat history.
 * @param {Array} history - Array of {role, content} objects.
 * @param {number} [maxMessages] - Optional max number of messages to include.
 * @returns {Array} - Array of message objects for the API.
 */
export function buildContext(history, maxMessages) {
  if (!Array.isArray(history)) return [];
  if (typeof maxMessages === 'number') {
    return history.slice(-maxMessages);
  }
  return [...history];
}

/**
 * Add a system message to the context.
 * @param {Array} context - Existing context array.
 * @param {string} content - System message content.
 * @returns {Array} - New context array with system message prepended.
 */
export function addSystemMessage(context, content) {
  return [{ role: 'system', content }, ...context];
}

/**
 * Add a user message to the context.
 * @param {Array} context - Existing context array.
 * @param {string} content - User message content.
 * @returns {Array} - New context array with user message appended.
 */
export function addUserMessage(context, content) {
  return [...context, { role: 'user', content }];
}

/**
 * Add an assistant message to the context.
 * @param {Array} context - Existing context array.
 * @param {string} content - Assistant message content.
 * @returns {Array} - New context array with assistant message appended.
 */
export function addAssistantMessage(context, content) {
  return [...context, { role: 'assistant', content }];
}
