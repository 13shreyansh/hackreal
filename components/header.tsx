import { Zap } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="size-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            BountyBoard
          </span>
        </div>
        <p className="hidden text-sm text-muted-foreground md:block">
          Real bounties. Real money. Build something that matters.
        </p>
      </div>
    </header>
  )
}
