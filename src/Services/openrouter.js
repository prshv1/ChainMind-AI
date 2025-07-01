// src/Services/openrouter.js
// Service for interacting with the OpenRouter DeepSeek-R1 API

const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'deepseek-r1-distill-llama-70b:free';

/**
 * Send a prompt to the OpenRouter DeepSeek-R1 model.
 * @param {string} apiKey - The user's OpenRouter API key.
 * @param {string} prompt - The user prompt to send.
 * @param {Array} [context=[]] - Optional array of previous messages for context.
 * @returns {Promise<string>} - The model's response text.
 */
export async function sendPrompt(apiKey, prompt, context = []) {
  try {
    const messages = [
      ...context,
      { role: 'user', content: prompt }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch from OpenRouter API');
    }

    const data = await response.json();
    // Assuming the response structure has choices[0].message.content
    return data.choices?.[0]?.message?.content || '';
  } catch (error) {
    console.error('OpenRouter API error:', error);
    throw error;
  }
}
