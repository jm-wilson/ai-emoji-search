import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Copy, Search } from "lucide-react"

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  handleSearch: () => void
  handlePickRandom: () => void
  handleKeyDown: (e: React.KeyboardEvent) => void
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handlePickRandom,
  handleKeyDown,
}: SearchBarProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input
          autoFocus
          maxLength={50}
          type="text"
          placeholder="Search for an emoji..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border-2 border-yellow-400 focus-visible:ring-yellow-500 dark:border-gray-700 dark:focus-visible:ring-gray-500"
        />
      </div>
      <div className="flex space-x-2 justify-center">
        <Button onClick={handleSearch} className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white dark:bg-yellow-600 dark:hover:bg-yellow-700">
          <Search className="mr-0.5 h-4 w-4" />
          Search
        </Button>
        <Button
          onClick={handlePickRandom}
          variant="outline"
          className="cursor-pointer border-yellow-600 text-yellow-600 hover:bg-yellow-200 hover:text-yellow-700 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-yellow-300"
        >
          <Copy className="mr-0.5 h-4 w-4" />
          Pick for me
        </Button>
      </div>
    </div>
  )
}
