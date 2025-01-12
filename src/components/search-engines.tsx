'use client'

import Image from 'next/image'
import { useSearch } from '../contexts/search-context'
import { searchEngines } from '../config/search-engines'

export default function AllSearchEngines() {
  const { query, handleEngineSelect } = useSearch()

  return (
    <div className="space-y-4">
      {searchEngines.map((category) => (
        <div key={category.category} className="space-y-2">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <span>{category.icon}</span>
            <span>{category.category}</span>
          </h2>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {category.engines.map((engine) => (
              <button
                key={engine.id}
                onClick={() => handleEngineSelect(engine.id, query)}
                className="flex h-9 min-w-[100px] items-center justify-start gap-2 rounded-md border border-gray-200 px-3 transition-colors hover:border-[#FF6B3D] hover:bg-gray-50 overflow-hidden"
              >
                <Image
                  src={engine.icon}
                  alt={engine.name}
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] flex-shrink-0"
                />
                <span className="text-sm font-medium truncate">{engine.name}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

