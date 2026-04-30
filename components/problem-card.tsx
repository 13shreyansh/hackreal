import {
  ExternalLink,
  Lightbulb,
  DollarSign,
  GitBranch,
  Trophy,
  Briefcase,
  Award,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

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

interface ProblemCardProps {
  problem: Problem
  index: number
}

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Advanced: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}

const typeIcon: Record<string, typeof DollarSign> = {
  Bounty: DollarSign,
  Grant: Award,
  'Open Source': GitBranch,
  Competition: Trophy,
  Freelance: Briefcase,
}

const typeColor: Record<string, string> = {
  Bounty: 'text-emerald-400',
  Grant: 'text-sky-400',
  'Open Source': 'text-violet-400',
  Competition: 'text-amber-400',
  Freelance: 'text-orange-400',
}

export function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <div
      className="animate-fade-up group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/20 sm:p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Lightbulb className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground leading-snug text-balance">
                {problem.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {problem.category}
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className={`shrink-0 text-[10px] font-medium ${difficultyColor[problem.difficulty]}`}
          >
            {problem.difficulty}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {problem.description}
        </p>

        {/* Why it matters */}
        <div className="rounded-lg bg-primary/5 px-4 py-2.5 border border-primary/10">
          <p className="text-xs font-medium text-primary">
            {problem.whyItMatters}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {problem.suggestedTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Where to submit */}
        <div className="border-t border-border pt-4">
          <p className="mb-2.5 text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
            Where to submit your solution
          </p>
          <div className="flex flex-col gap-2">
            {problem.submitTo.map((s) => {
              const Icon = typeIcon[s.type] || ExternalLink
              return (
                <a
                  key={`${s.platform}-${s.type}`}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2.5 transition-colors hover:border-primary/20 hover:bg-secondary/60"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`h-3.5 w-3.5 ${typeColor[s.type] || 'text-muted-foreground'}`} />
                    <span className="text-xs font-medium text-foreground">
                      {s.platform}
                    </span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                      {s.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {s.estimatedReward && (
                      <span className="text-xs font-semibold text-emerald-400">
                        {s.estimatedReward}
                      </span>
                    )}
                    <ExternalLink className="h-3 w-3 text-muted-foreground/40 transition-colors group-hover/link:text-primary" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
