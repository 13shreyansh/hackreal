'use client'

import { useState, useMemo } from 'react'
import { ListFilter, LayoutGrid } from 'lucide-react'
import { Filters } from '@/components/filters'
import { BountyCard } from '@/components/bounty-card'
import {
  bounties,
  REWARD_RANGES,
  type BountyCategory,
  type BountySource,
} from '@/lib/bounties'

type SortOption = 'reward-desc' | 'reward-asc' | 'newest' | 'deadline'

export function BountyFeed() {
  const [selectedCategories, setSelectedCategories] = useState<BountyCategory[]>([])
  const [selectedSources, setSelectedSources] = useState<BountySource[]>([])
  const [selectedRewardRange, setSelectedRewardRange] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('reward-desc')

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedSources.length > 0 ||
    selectedRewardRange !== 0 ||
    searchQuery.length > 0

  const filteredBounties = useMemo(() => {
    let filtered = bounties

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((b) => selectedCategories.includes(b.category))
    }

    // Source filter
    if (selectedSources.length > 0) {
      filtered = filtered.filter((b) => selectedSources.includes(b.source))
    }

    // Reward range
    if (selectedRewardRange !== 0) {
      const range = REWARD_RANGES[selectedRewardRange]
      filtered = filtered.filter(
        (b) => b.reward >= range.min && b.reward < range.max
      )
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'reward-desc':
          return b.reward - a.reward
        case 'reward-asc':
          return a.reward - b.reward
        case 'newest':
          return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        case 'deadline':
          if (!a.deadline) return 1
          if (!b.deadline) return -1
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategories, selectedSources, selectedRewardRange, searchQuery, sortBy])

  const totalValue = useMemo(() => {
    const total = bounties.reduce((sum, b) => sum + b.reward, 0)
    return `$${total.toLocaleString()}`
  }, [])

  const handleCategoryToggle = (category: BountyCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleSourceToggle = (source: BountySource) => {
    setSelectedSources((prev) =>
      prev.includes(source) ? prev.filter((s) => s !== source) : [...prev, source]
    )
  }

  const handleClearAll = () => {
    setSelectedCategories([])
    setSelectedSources([])
    setSelectedRewardRange(0)
    setSearchQuery('')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Sidebar filters */}
        <aside className="w-full shrink-0 lg:w-64">
          <div className="flex items-center gap-2 pb-4">
            <ListFilter className="size-4 text-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">Filters</span>
          </div>
          <Filters
            selectedCategories={selectedCategories}
            selectedSources={selectedSources}
            selectedRewardRange={selectedRewardRange}
            searchQuery={searchQuery}
            onCategoryToggle={handleCategoryToggle}
            onSourceToggle={handleSourceToggle}
            onRewardRangeChange={setSelectedRewardRange}
            onSearchChange={setSearchQuery}
            onClearAll={handleClearAll}
            hasActiveFilters={hasActiveFilters}
          />
        </aside>

        {/* Feed */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredBounties.length}
              </span>{' '}
              {filteredBounties.length === 1 ? 'bounty' : 'bounties'}
              {hasActiveFilters ? ' matched' : ' available'}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="hidden text-xs text-muted-foreground sm:inline">
                Sort by
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="h-8 rounded-md border border-border bg-secondary px-2 text-xs text-foreground outline-none focus:border-primary"
              >
                <option value="reward-desc">Highest Reward</option>
                <option value="reward-asc">Lowest Reward</option>
                <option value="newest">Newest First</option>
                <option value="deadline">Deadline Soon</option>
              </select>
            </div>
          </div>

          {/* Bounty list */}
          {filteredBounties.length > 0 ? (
            <div className="flex flex-col gap-3">
              {filteredBounties.map((bounty) => (
                <BountyCard key={bounty.id} bounty={bounty} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-20">
              <LayoutGrid className="size-10 text-muted-foreground/40" />
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                No bounties match your filters
              </p>
              <button
                onClick={handleClearAll}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
