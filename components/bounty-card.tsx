import {
  ArrowUpRight,
  Clock,
  Signal,
  SignalLow,
  SignalMedium,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Bounty } from '@/lib/bounties'

function getSourceColor(source: string) {
  const colors: Record<string, string> = {
    'Superteam Earn': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    Algora: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    Gitcoin: 'bg-teal-500/15 text-teal-400 border-teal-500/20',
    'GitHub Issues': 'bg-gray-500/15 text-gray-400 border-gray-500/20',
    HeroX: 'bg-orange-500/15 text-orange-400 border-orange-500/20',
    BountyBoard: 'bg-pink-500/15 text-pink-400 border-pink-500/20',
  }
  return colors[source] || 'bg-secondary text-secondary-foreground'
}

function DifficultyIcon({ difficulty }: { difficulty: Bounty['difficulty'] }) {
  const iconClass = 'size-3.5'
  switch (difficulty) {
    case 'Beginner':
      return <SignalLow className={`${iconClass} text-emerald-400`} />
    case 'Intermediate':
      return <SignalMedium className={`${iconClass} text-amber-400`} />
    case 'Advanced':
      return <Signal className={`${iconClass} text-red-400`} />
  }
}

function formatReward(reward: number, currency: string) {
  if (currency === 'USD' || currency === 'USDC' || currency === 'DAI') {
    return `$${reward.toLocaleString()}`
  }
  return `${reward.toLocaleString()} ${currency}`
}

function getRelativeTime(dateStr: string) {
  const now = new Date()
  const date = new Date(dateStr)
  const diffDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  )
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`
  return `${Math.floor(diffDays / 30)}mo ago`
}

function getDaysUntilDeadline(dateStr: string | null) {
  if (!dateStr) return null
  const now = new Date()
  const deadline = new Date(dateStr)
  const diffDays = Math.ceil(
    (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  )
  if (diffDays < 0) return 'Expired'
  if (diffDays === 0) return 'Due today'
  if (diffDays === 1) return '1 day left'
  return `${diffDays}d left`
}

export function BountyCard({ bounty }: { bounty: Bounty }) {
  const deadlineText = getDaysUntilDeadline(bounty.deadline)
  const isUrgent = bounty.deadline
    ? Math.ceil(
        (new Date(bounty.deadline).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      ) <= 7
    : false

  return (
    <a
      href={bounty.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-card/80 md:p-5"
    >
      {/* Top row: source + reward */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${getSourceColor(bounty.source)}`}
          >
            {bounty.source}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <DifficultyIcon difficulty={bounty.difficulty} />
            {bounty.difficulty}
          </span>
        </div>
        <span className="shrink-0 text-lg font-bold text-reward md:text-xl">
          {formatReward(bounty.reward, bounty.currency)}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-2.5 text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors md:text-lg">
        {bounty.title}
        <ArrowUpRight className="ml-1 inline size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
      </h3>

      {/* Description */}
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {bounty.description}
      </p>

      {/* Tags + meta */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge variant="secondary" className="text-[11px] font-medium">
          {bounty.category}
        </Badge>
        {bounty.tags.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-[11px] font-normal text-muted-foreground"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Footer: posted + deadline */}
      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        <span>{getRelativeTime(bounty.postedAt)}</span>
        {deadlineText && (
          <>
            <span className="text-border">|</span>
            <span
              className={`flex items-center gap-1 ${isUrgent ? 'text-orange-400' : ''}`}
            >
              <Clock className="size-3" />
              {deadlineText}
            </span>
          </>
        )}
      </div>
    </a>
  )
}
