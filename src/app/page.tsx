'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Results from '@/components/Results';
import { searchEmoji } from '@/api/search-emoji';
import { copyToClipboard } from '@/lib/client/copy-to-clipboard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const validateQuery = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return false;
    }
    return true;
  };

  const handleSearch = async () => {
    if (!validateQuery()) return;

    setIsFetching(true);
    const results = await searchEmoji(searchQuery)
      .catch(() => setIsError(true))
      .finally(() => setIsFetching(false));
    if (!results) return;

    setSearchResults(results);
  };

  const handlePickRandom = async () => {
    if (!validateQuery()) return;

    setIsFetching(true);
    const results = await searchEmoji(searchQuery)
      .catch(() => setIsError(true))
      .finally(() => setIsFetching(false));
    if (!results) return;

    const randomIndex = Math.floor(Math.random() * results.length);
    const randomEmoji = results[randomIndex];
    copyToClipboard(randomEmoji);

    setSearchResults([randomEmoji]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-yellow-100 to-yellow-200 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        <Header />
        {isFetching ? (
          <LoadingSpinner />
        ) : isError ? (
          <Alert variant="destructive">
            <AlertTitle className="">Whoops!</AlertTitle>
            <AlertDescription className="justify-center">
              Something went wrong. Blame the AI and try again later!
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              handlePickRandom={handlePickRandom}
              handleKeyDown={handleKeyDown}
            />
            {searchResults && <Results searchResults={searchResults} />}
          </>
        )}
      </div>
    </main>
  );
}
