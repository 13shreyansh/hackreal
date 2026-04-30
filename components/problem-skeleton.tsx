export function ProblemSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 shrink-0 rounded-lg bg-muted animate-pulse" />
          <div className="flex-1">
            <div className="h-5 w-3/4 rounded bg-muted animate-pulse" />
            <div className="mt-2 h-3 w-1/4 rounded bg-muted animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full rounded bg-muted animate-pulse" />
          <div className="h-3 w-5/6 rounded bg-muted animate-pulse" />
        </div>
        <div className="h-10 rounded-lg bg-muted/50 animate-pulse" />
        <div className="flex gap-1.5">
          <div className="h-6 w-16 rounded-md bg-muted animate-pulse" />
          <div className="h-6 w-20 rounded-md bg-muted animate-pulse" />
          <div className="h-6 w-14 rounded-md bg-muted animate-pulse" />
        </div>
        <div className="border-t border-border pt-4">
          <div className="h-3 w-1/3 rounded bg-muted animate-pulse mb-3" />
          <div className="h-10 rounded-lg bg-muted/30 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
