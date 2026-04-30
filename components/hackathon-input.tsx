'use client'

import { useState } from 'react'
import { ArrowRight, Zap, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EXAMPLE_PROMPTS = [
  'ETH Global hackathon focused on DeFi and account abstraction, 36 hours, I know React and Solidity',
  'AI hackathon at my university, 24 hours, beginner-friendly, Python and JavaScript',
  'Climate tech hackathon, 48 hours, full-stack team of 3, looking for impactful projects',
  'Open source hackathon on Devpost, any stack, want to contribute to real projects',
]

interface HackathonInputProps {
  onSubmit: (context: string) => void
  isLoading: boolean
}

export function HackathonInput({ onSubmit, isLoading }: HackathonInputProps) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    onSubmit(input.trim())
  }

  const handleExampleClick = (example: string) => {
    setInput(example)
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <Zap className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium tracking-wide text-primary uppercase">
            Real problems, real impact
          </span>
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Stop building demos
          <span className="block text-muted-foreground">nobody needs.</span>
        </h1>
        <p className="max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          Tell us about your hackathon. {"We'll"} find real-world problems
          worth solving — and show you where to ship your solution afterward.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="group relative rounded-xl border border-border bg-card transition-colors focus-within:border-primary/40">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your hackathon — what's the theme? How long? What tech do you know? What are the tracks?"
            className="block w-full resize-none rounded-xl bg-transparent px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none sm:text-base"
            rows={4}
            disabled={isLoading}
          />
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
              <Sparkles className="h-3 w-3" />
              <span>AI-powered problem matching</span>
            </div>
            <Button
              type="submit"
              size="sm"
              disabled={!input.trim() || isLoading}
              className="gap-1.5 rounded-lg"
            >
              {isLoading ? (
                <>
                  <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Finding problems...
                </>
              ) : (
                <>
                  Find problems
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>

      <div className="w-full max-w-2xl">
        <p className="mb-3 text-xs font-medium text-muted-foreground/50 uppercase tracking-wider">
          Try an example
        </p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_PROMPTS.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => handleExampleClick(example)}
              disabled={isLoading}
              className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground disabled:opacity-50"
            >
              {example.length > 60 ? `${example.slice(0, 60)}...` : example}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
