// backend/api.js

import axios from 'axios';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

export const callGeminiAPI = async (prompt) => {
  const url = 'https://generativelanguage.googleapis.com/v1/models/text-bison:generateText';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };
  const data = {
    "prompt": prompt,
    "temperature": 0.7
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.generated_text;
  } catch (error) {
    console.error(error);
    return null;
  }
};