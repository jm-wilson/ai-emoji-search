'use server';

import { Groq } from 'groq-sdk';

const groq = new Groq();
export async function searchEmoji(query: string): Promise<string[]> {
  if (!process.env.GROQ_MODEL_NAME) {
    console.error('GROQ_MODEL_NAME is not set');
    throw 'GROQ_MODEL_NAME is not set';
  }

  if (query.length > 50) {
    console.error('Query too long');
    throw 'Query too long';
  }

  const safeQuery = query.trim().replace(/[^a-zA-Z0-9\s]/g, '');

  if (!safeQuery) {
    console.error('Empty query');
    throw 'Empty query';
  }

  let message;
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: process.env.GROQ_SYSTEM_PROMPT ||
            "Provide 5-10 relevant emojis based on the main idea of the user's message. Do not respond with anything besides the emojis",
        },
        {
          role: 'user',
          content: safeQuery,
        },
      ],
      model: process.env.GROQ_MODEL_NAME,
      temperature: 1,
      max_completion_tokens: 128,
      top_p: 1,
      stream: false,
      stop: null,
    });

    message = response.choices[0].message.content;
  } catch (error) {
    console.error('Error query', { error, query, input: safeQuery });
    throw 'Error communicating with LLM';
  }

  console.log('Successful query', { query, input: safeQuery, output: message });

  return message ? extractEmojis(message) : [];
}

/**
 * This function is returns an array of emojis contained in a string
 */
function extractEmojis(str: string): string[] {
  const emojiRegex = /((\p{Emoji})(\p{Emoji_Modifier})?|\p{Extended_Pictographic})/gu;
  const emojis = str.match(emojiRegex);
  return emojis ? emojis : [];
}
