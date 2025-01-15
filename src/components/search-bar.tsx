'use client'

import { useSearch } from '../contexts/search-context'
import { useState, useEffect, useCallback } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Suggestion {
  q: string
  p: boolean
  s: string[]
}

type BaiduCallback = (data: Suggestion) => void

// 扩展全局 Window 接口
declare global {
  interface Window {
    [key: string]: BaiduCallback | undefined | Window[keyof Window]
  }
}

export default function SearchBar() {
  const { query, setQuery, searchInputRef } = useSearch()
  const [showClear, setShowClear] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  const fetchSuggestions = useCallback(async (value: string) => {
    if (!value.trim()) {
      setSuggestions([])
      return
    }

    // 通过 chrome.runtime.sendMessage 发送请求
    if (chrome?.runtime?.sendMessage) {
      chrome.runtime.sendMessage(
        { type: 'GET_SUGGESTIONS', query: value },
        (response) => {
          if (response.success && response.data?.s) {
            setSuggestions(response.data.s)
          } else {
            setSuggestions([])
          }
        }
      )
    }
  }, [])

  // 防抖处理
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions(query)
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [query, fetchSuggestions])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setShowClear(value.length > 0)
    setShowSuggestions(true)
  }

  const clearInput = () => {
    setQuery('')
    setShowClear(false)
    setSuggestions([])
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    setShowSuggestions(false)
    setSuggestions([])
  }

  // 键盘导航处理
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (selectedIndex >= 0 && suggestions.length > 0) {
        // 如果有选中的建议，使用选中的建议
        handleSuggestionClick(suggestions[selectedIndex])
      }
      // 无论是否选中建议，都关闭下拉框
      setShowSuggestions(false)
      setSelectedIndex(-1)
      return
    }

    if (!suggestions.length) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Escape':
        setShowSuggestions(false)
        setSelectedIndex(-1)
        break
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative">
        <input
          ref={searchInputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setShowSuggestions(true)
            setSelectedIndex(-1)
          }}
          onBlur={() => {
            setTimeout(() => {
              setShowSuggestions(false)
              setSelectedIndex(-1)
            }, 200)
          }}
          placeholder="输入关键词开始搜索..."
          className="w-full h-12 rounded-lg border border-gray-300 px-6 text-base focus:border-[#9333EA] focus:outline-none focus:ring-1 focus:ring-[#9333EA] transition-all duration-200 [&.animate-shake]:ring-2 [&.animate-shake]:ring-[#9333EA]"
        />
        {showClear && (
          <XMarkIcon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
            onClick={clearInput}
          />
        )}
        
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 
                  ${selectedIndex === index ? 'bg-gray-100' : ''}`}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

