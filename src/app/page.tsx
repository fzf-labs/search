import SearchBar from '@/components/search-bar'
import AllSearchEngines from '@/components/search-engines'
import { SearchProvider } from '@/contexts/search-context'

export default function HomePage() {
  return (
    <SearchProvider>
      <main className="min-h-screen bg-white p-4 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="text-center">
            <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#9333EA] inline-block text-transparent bg-clip-text">Search</h1>
          </div>
          <SearchBar />
          <AllSearchEngines />
        </div>
      </main>
    </SearchProvider>
  )
}

