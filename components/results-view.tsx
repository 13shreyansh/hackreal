'use client'

import { useState } from 'react'
import { ArrowLeft, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProblemCard } from './problem-card'
import { ProblemSkeleton } from './problem-skeleton'
import type { Problem } from '@/lib/problems-db'

interface ResultsViewProps {
  problems: Problem[]
  isStreaming: boolean
  hackathonContext: string
  onReset: () => void
}

export function ResultsView({
  problems,
  isStreaming,
  hackathonContext,
  onReset,
}: ResultsViewProps) {
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)

  const categories = Array.from(new Set(problems.map((p) => p.category)))
  const difficulties = ['Beginner', 'Intermediate', 'Advanced']

  const filtered = problems.filter((p) => {
    if (difficultyFilter && p.difficulty !== difficultyFilter) return false
    if (categoryFilter && p.category !== categoryFilter) return false
    return true
  })

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            New search
          </Button>
          <div className="h-4 w-px bg-border" />
          <p className="text-sm text-muted-foreground">
            {isStreaming ? (
              <span className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
                Finding problems...
              </span>
            ) : (
              <>
                <span className="font-medium text-foreground">
                  {problems.length}
                </span>{' '}
                problems found
              </>
            )}
          </p>
        </div>
      </div>

      {/* Context summary */}
      <div className="rounded-lg border border-border bg-secondary/30 px-4 py-3">
        <p className="text-[10px] font-medium text-muted-foreground/50 uppercase tracking-wider mb-1">
          Your hackathon
        </p>
        <p className="text-sm text-foreground/80 line-clamp-2">
          {hackathonContext}
        </p>
      </div>

      {/* Filters */}
      {problems.length > 0 && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
            <Filter className="h-3 w-3" />
            <span>Filter</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setDifficultyFilter(null)}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                !difficultyFilter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              All levels
            </button>
            {difficulties.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() =>
                  setDifficultyFilter(difficultyFilter === d ? null : d)
                }
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  difficultyFilter === d
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          {categories.length > 1 && (
            <>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setCategoryFilter(null)}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    !categoryFilter
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  All categories
                </button>
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() =>
                      setCategoryFilter(categoryFilter === c ? null : c)
                    }
                    className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      categoryFilter === c
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Problem grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((problem, i) => (
          <ProblemCard key={problem.title} problem={problem} index={i} />
        ))}
        {isStreaming &&
          Array.from({ length: Math.max(0, 4 - problems.length) }).map(
            (_, i) => <ProblemSkeleton key={`skeleton-${i}`} />
          )}
      </div>

      {!isStreaming && filtered.length === 0 && problems.length > 0 && (
        <div className="flex flex-col items-center gap-2 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            No problems match the current filters.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setDifficultyFilter(null)
              setCategoryFilter(null)
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
