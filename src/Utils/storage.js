// src/Utils/storage.js
// Utility for safe localStorage access

/**
 * Get a value from localStorage and parse as JSON.
 * @param {string} key
 * @returns {any|null}
 */
export function getItem(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('storage.getItem error:', error);
    return null;
  }
}

/**
 * Set a value in localStorage as JSON.
 * @param {string} key
 * @param {any} value
 */
export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('storage.setItem error:', error);
  }
}

/**
 * Remove a value from localStorage.
 * @param {string} key
 */
export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('storage.removeItem error:', error);
  }
}
