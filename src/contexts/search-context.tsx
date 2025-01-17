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

  const handleEngineSelect = (engineId: string, query: string) => {
    const engine = searchEngines
      .flatMap(category => category.engines)
      .find(engine => engine.id === engineId)

    if (engine) {
      if (!query.trim()) {
        try {
          const url = new URL(engine.url)
          window.open(url.origin, '_blank')
        } catch (e) {
          console.error('Invalid URL:', engine.url, e)
        }
        return
      }else{
        const searchUrl = engine.url.replace('{query}', encodeURIComponent(query.trim()))
        window.open(searchUrl, '_blank')
      }
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

