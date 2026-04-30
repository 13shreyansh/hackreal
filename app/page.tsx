'use client'

import { useState, useCallback } from 'react'
import { HackathonInput } from '@/components/hackathon-input'
import { ResultsView } from '@/components/results-view'

interface SubmitTo {
  platform: string
  type: 'Bounty' | 'Grant' | 'Open Source' | 'Competition' | 'Freelance'
  estimatedReward: string | null
  url: string
}

interface Problem {
  title: string
  description: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  suggestedTech: string[]
  whyItMatters: string
  submitTo: SubmitTo[]
}

export default function Home() {
  const [problems, setProblems] = useState<Problem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hackathonContext, setHackathonContext] = useState('')
  const [hasResults, setHasResults] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = useCallback(async (context: string) => {
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
        throw new Error('Failed to generate problems')
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        fullText += decoder.decode(value, { stream: true })

        // Try to extract complete problem objects from the stream
        // The AI returns structured JSON — we try to parse partial results
        try {
          const parsed = extractProblems(fullText)
          if (parsed.length > 0) {
            setProblems(parsed)
          }
        } catch {
          // Still accumulating, continue
        }
      }

      // Final parse
      const finalProblems = extractProblems(fullText)
      if (finalProblems.length > 0) {
        setProblems(finalProblems)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }, [])

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
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-sm">
              H
            </div>
            <span className="text-sm font-bold tracking-tight text-foreground">
              HackReal
            </span>
          </div>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Real problems. Real impact.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        {!hasResults ? (
          <HackathonInput onSubmit={handleSubmit} isLoading={isLoading} />
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

/**
 * Extracts complete Problem objects from a partial SSE / text stream.
 * The AI SDK streams SSE events with `data:` lines containing JSON chunks.
 * We try to find and parse the structured output from these events.
 */
function extractProblems(raw: string): Problem[] {
  // The stream from toUIMessageStreamResponse is SSE-encoded
  // Extract all data lines
  const lines = raw.split('\n')
  let structuredText = ''

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed.startsWith('data:')) continue

    const data = trimmed.slice(5).trim()
    if (data === '[DONE]') continue

    try {
      const parsed = JSON.parse(data)
      // AI SDK UIMessage stream sends text-delta events
      if (parsed.type === 'text-delta' && parsed.textDelta) {
        structuredText += parsed.textDelta
      }
    } catch {
      // Not valid JSON yet, skip
    }
  }

  if (!structuredText) return []

  // The structured output is JSON — try to extract complete problem objects
  try {
    const obj = JSON.parse(structuredText)
    if (obj?.problems && Array.isArray(obj.problems)) {
      return obj.problems
    }
  } catch {
    // JSON is still incomplete — try to extract individual problem objects
    return extractPartialProblems(structuredText)
  }

  return []
}

/**
 * When the full JSON isn't complete yet, try to extract individual complete problem objects
 * by finding balanced brace pairs within the problems array.
 */
function extractPartialProblems(text: string): Problem[] {
  const problems: Problem[] = []

  // Find the start of the problems array
  const arrayStart = text.indexOf('"problems"')
  if (arrayStart === -1) return []

  const bracketStart = text.indexOf('[', arrayStart)
  if (bracketStart === -1) return []

  const content = text.slice(bracketStart + 1)

  // Extract complete objects by tracking brace depth
  let depth = 0
  let objectStart = -1

  for (let i = 0; i < content.length; i++) {
    const char = content[i]
    if (char === '{') {
      if (depth === 0) objectStart = i
      depth++
    } else if (char === '}') {
      depth--
      if (depth === 0 && objectStart !== -1) {
        const objectStr = content.slice(objectStart, i + 1)
        try {
          const obj = JSON.parse(objectStr)
          if (obj.title && obj.description) {
            problems.push(obj)
          }
        } catch {
          // Incomplete object, skip
        }
        objectStart = -1
      }
    }
  }

  return problems
}
