"use client"

import { useState } from "react"
import { Search, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import Results from "@/components/Results"

// Sample emoji data
const emojis = [
  { emoji: "😀", name: "grinning face" },
  { emoji: "😂", name: "face with tears of joy" },
  { emoji: "🥰", name: "smiling face with hearts" },
  { emoji: "😎", name: "smiling face with sunglasses" },
  { emoji: "🙄", name: "face with rolling eyes" },
  { emoji: "🤔", name: "thinking face" },
  { emoji: "🥳", name: "partying face" },
  { emoji: "😴", name: "sleeping face" },
  { emoji: "🤯", name: "exploding head" },
  { emoji: "🥺", name: "pleading face" },
  { emoji: "❤️", name: "red heart" },
  { emoji: "🔥", name: "fire" },
  { emoji: "🌈", name: "rainbow" },
  { emoji: "🍕", name: "pizza" },
  { emoji: "🚀", name: "rocket" },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof emojis>([])
  const [randomEmoji, setRandomEmoji] = useState<(typeof emojis)[0] | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setRandomEmoji(null)
      setHasSearched(false)
      return
    }

    const results = emojis.filter(
      (emoji) => emoji.name.toLowerCase().includes(searchQuery.toLowerCase()) || emoji.emoji.includes(searchQuery),
    )

    setSearchResults(results)
    setRandomEmoji(null)
    setHasSearched(true)
  }

  const handlePickRandom = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length)
    setRandomEmoji(emojis[randomIndex])
    setSearchResults([])
    setHasSearched(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-yellow-100 to-yellow-200 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        <Header />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          handlePickRandom={handlePickRandom}
          handleKeyDown={handleKeyDown}
        />
        {hasSearched && (
          <Results randomEmoji={randomEmoji} searchResults={searchResults} />
        )}
      </div>
    </main>
  )
}
