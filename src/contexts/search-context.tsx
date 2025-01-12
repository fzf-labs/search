'use client'

import { createContext, useContext, useState, useRef } from 'react'
import { searchEngines } from '../config/search-engines'

interface SearchContextType {
  query: string
  setQuery: (query: string) => void
  handleEngineSelect: (engineId: string, query: string) => void
  searchInputRef: React.RefObject<HTMLInputElement | null>
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null!)

  const highlightSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.classList.remove('animate-shake')
      void searchInputRef.current.offsetWidth
      searchInputRef.current.classList.add('animate-shake')
      setTimeout(() => {
        searchInputRef.current?.classList.remove('animate-shake')
      }, 600)
    }
  }

  const handleEngineSelect = (engineId: string, query: string) => {
    if (!query.trim()) {
      highlightSearchInput()
      return
    }

    const engine = searchEngines
      .flatMap(category => category.engines)
      .find(engine => engine.id === engineId)

    if (engine) {
      const searchUrl = engine.url.replace('{query}', encodeURIComponent(query.trim()))
      window.open(searchUrl, '_blank')
    }
  }

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        handleEngineSelect,
        searchInputRef,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

