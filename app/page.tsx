'use client'

import { useState, useCallback } from 'react'
import { HackathonInput } from '@/components/hackathon-input'
import { ResultsView } from '@/components/results-view'
import type { Problem } from '@/lib/problems-db'

export default function Home() {
  const [problems, setProblems] = useState<Problem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [hackathonContext, setHackathonContext] = useState('')
  const [hasResults, setHasResults] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = useCallback(async () => {
    const context = inputValue.trim()
    if (!context || isLoading) return
    setIsLoading(true)
    setHackathonContext(context)
    setProblems([])
    setHasResults(true)
    setError(null)

    try {
      const response = await fetch('/api/problems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hackathonContext: context }),
      })

      if (!response.ok) {
        throw new Error('Failed to find problems')
      }

      const data = await response.json()
      setProblems(data.problems ?? [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, isLoading])

  const handleReset = useCallback(() => {
    setProblems([])
    setHasResults(false)
    setHackathonContext('')
    setError(null)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-sm">
              H
            </div>
            <span className="text-sm font-bold tracking-tight text-foreground">
              HackReal
            </span>
          </button>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Real problems. Real impact.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        {!hasResults ? (
          <HackathonInput
            input={inputValue}
            onInputChange={setInputValue}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        ) : (
          <>
            {error ? (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <p className="text-sm text-destructive">{error}</p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Try again
                </button>
              </div>
            ) : (
              <ResultsView
                problems={problems}
                isStreaming={isLoading}
                hackathonContext={hackathonContext}
                onReset={handleReset}
              />
            )}
          </>
        )}
      </main>

      <footer className="border-t border-border py-6">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-center text-xs text-muted-foreground">
            Problems sourced from bounty platforms, open-source issues, and
            grant programs across the internet.
          </p>
        </div>
      </footer>
    </div>
  )
}
