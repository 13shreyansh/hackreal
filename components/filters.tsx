'use client'

import { Search, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  CATEGORIES,
  SOURCES,
  REWARD_RANGES,
  type BountyCategory,
  type BountySource,
} from '@/lib/bounties'

interface FiltersProps {
  selectedCategories: BountyCategory[]
  selectedSources: BountySource[]
  selectedRewardRange: number
  searchQuery: string
  onCategoryToggle: (category: BountyCategory) => void
  onSourceToggle: (source: BountySource) => void
  onRewardRangeChange: (index: number) => void
  onSearchChange: (query: string) => void
  onClearAll: () => void
  hasActiveFilters: boolean
}

export function Filters({
  selectedCategories,
  selectedSources,
  selectedRewardRange,
  searchQuery,
  onCategoryToggle,
  onSourceToggle,
  onRewardRangeChange,
  onSearchChange,
  onClearAll,
  hasActiveFilters,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search bounties..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 w-full rounded-lg border border-border bg-secondary/50 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Category
        </span>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategories.includes(category)
            return (
              <button
                key={category}
                onClick={() => onCategoryToggle(category)}
                className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      {/* Reward range */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Reward
        </span>
        <div className="flex flex-wrap gap-1.5">
          {REWARD_RANGES.map((range, index) => {
            const isActive = selectedRewardRange === index
            return (
              <button
                key={range.label}
                onClick={() => onRewardRangeChange(index)}
                className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {range.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Source filters */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Source
        </span>
        <div className="flex flex-wrap gap-1.5">
          {SOURCES.map((source) => {
            const isActive = selectedSources.includes(source)
            return (
              <button
                key={source}
                onClick={() => onSourceToggle(source)}
                className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {source}
              </button>
            )
          })}
        </div>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          className="w-fit text-muted-foreground hover:text-foreground"
        >
          <X className="size-3" />
          Clear all filters
        </Button>
      )}
    </div>
  )
}
