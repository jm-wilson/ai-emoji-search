import { copyToClipboard } from '@/lib/client/copy-to-clipboard';

interface ResultsProps {
  searchResults: string[];
}

export default function Results({ searchResults }: ResultsProps) {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:shadow-lg">
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {searchResults.map((emoji, index) => (
            <div
              key={index}
              className="text-center p-2 hover:bg-yellow-100 rounded-md cursor-pointer dark:hover:bg-gray-700"
              onClick={() => {
                copyToClipboard(emoji);
              }}
            >
              <div className="text-3xl mb-1">{emoji}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No emojis found. Try another search!</p>
      )}
    </div>
  );
}
