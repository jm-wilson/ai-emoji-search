'use server';

import { Groq } from 'groq-sdk';

const groq = new Groq();
export async function searchEmoji(query: string): Promise<string[]> {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          "Provide 5-10 relevant emojis based on the main idea of the user's message. Do not respond with anything besides the emojis",
      },
      {
        role: 'user',
        content: query,
      },
    ],
    model: 'llama3-8b-8192',
    temperature: 1,
    max_completion_tokens: 128,
    top_p: 1,
    stream: false,
    stop: null,
  });

  const message = response.choices[0].message.content;

  console.log({ input: query, output: message });

  return message ? extractEmojis(message) : [];
}

/**
 * This function is returns an array of emojis contained in a string
 */
function extractEmojis(str: string): string[] {
  const emojiRegex = /(\p{Emoji}|\p{Extended_Pictographic})/gu;
  const emojis = str.match(emojiRegex);
  return emojis ? emojis : [];
}
