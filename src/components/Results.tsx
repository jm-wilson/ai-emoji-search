import { copyToClipboard } from '@/lib/client/copy-to-clipboard';
import { Copy } from 'lucide-react';
import { Noto_Color_Emoji } from 'next/font/google';

interface ResultsProps {
  searchResults: string[];
}

const notoColorEmoji = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: '400',
});

export default function Results({ searchResults }: ResultsProps) {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:shadow-lg">
      {searchResults.length > 0 ? (
        <div className={'grid grid-cols-3 gap-4 ' + notoColorEmoji.className}>
          {searchResults.map((emoji, index) => (
            <div
              key={index}
              className="group relative text-center p-2 hover:bg-yellow-100 rounded-md cursor-pointer dark:hover:bg-gray-700"
              onClick={() => {
                copyToClipboard(emoji);
              }}
            >
              <div className="text-3xl mb-1">{emoji}</div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 backdrop-opacity-10 backdrop-blur-sm rounded-md transition-opacity">
                <Copy className="text-white w-6 h-6 " />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">No emojis found. Try another search!</p>
      )}
    </div>
  );
}
