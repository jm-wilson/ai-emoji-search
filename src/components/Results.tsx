interface ResultsProps {
  randomEmoji: { emoji: string; name: string } | null
  searchResults: { emoji: string; name: string }[]
}

export default function Results({ randomEmoji, searchResults }: ResultsProps) {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:shadow-lg">
      {randomEmoji ? (
        <div className="text-center">
          <div className="text-6xl mb-2">{randomEmoji.emoji}</div>
          <p className="text-gray-700 dark:text-gray-300">{randomEmoji.name}</p>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {searchResults.map((emoji, index) => (
            <div
              key={index}
              className="text-center p-2 hover:bg-yellow-100 rounded-md cursor-pointer dark:hover:bg-gray-700"
            >
              <div className="text-3xl mb-1">{emoji.emoji}</div>
              <p className="text-xs text-gray-600 truncate dark:text-gray-400">{emoji.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No emojis found. Try another search!</p>
      )}
    </div>
  )
}
