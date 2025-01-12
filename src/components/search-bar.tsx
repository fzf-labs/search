'use client'

import { useSearch } from '../contexts/search-context'

export default function SearchBar() {
  const { query, setQuery, searchInputRef } = useSearch()

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative">
        <input
          ref={searchInputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="输入关键词开始搜索..."
          className="w-full h-12 rounded-lg border border-gray-300 px-6 text-base focus:border-[#FF6B3D] focus:outline-none focus:ring-1 focus:ring-[#FF6B3D] transition-all duration-200 [&.animate-shake]:ring-2 [&.animate-shake]:ring-red-500"
        />
      </div>
    </div>
  )
}

