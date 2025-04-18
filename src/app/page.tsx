"use client"

import type React from "react"

import { useState } from "react"
import { Search, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-orange-500">
            Emoji<span className="text-yellow-500">Finder</span>
          </h1>
          <p className="text-gray-600">Find the perfect emoji for any occasion</p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input
              type="text"
              placeholder="Search for an emoji..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border-2 border-orange-200 focus-visible:ring-orange-300"
            />
          </div>

          <div className="flex space-x-2 justify-center">
            <Button onClick={handleSearch} className="bg-orange-500 hover:bg-orange-600">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button
              onClick={handlePickRandom}
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-100 hover:text-orange-600"
            >
              <Shuffle className="mr-2 h-4 w-4" />
              Pick for me
            </Button>
          </div>
        </div>

        {hasSearched && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            {randomEmoji ? (
              <div className="text-center">
                <div className="text-6xl mb-2">{randomEmoji.emoji}</div>
                <p className="text-gray-700">{randomEmoji.name}</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {searchResults.map((emoji, index) => (
                  <div key={index} className="text-center p-2 hover:bg-orange-50 rounded-md cursor-pointer">
                    <div className="text-3xl mb-1">{emoji.emoji}</div>
                    <p className="text-xs text-gray-600 truncate">{emoji.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No emojis found. Try another search!</p>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
