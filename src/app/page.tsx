"use client"

import { useState } from "react"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import Results from "@/components/Results"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setHasSearched(false)
      return
    }

    const results = [] as string[];

    setSearchResults(results)
    setHasSearched(true)
  }

  const handlePickRandom = () => {
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
          <Results searchResults={searchResults} />
        )}
      </div>
    </main>
  )
}
