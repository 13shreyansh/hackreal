export function Hero({ totalBounties, totalValue }: { totalBounties: number; totalValue: string }) {
  return (
    <section className="border-b border-border py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Don&apos;t build another todo app.
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          {totalBounties} open bounties worth {totalValue} from across the internet.
          Find a real problem someone will pay you to solve — then go build it at your hackathon.
        </p>
        <div className="mt-6 flex flex-wrap gap-6">
          <Stat label="Open Bounties" value={totalBounties.toString()} />
          <Stat label="Total Value" value={totalValue} />
          <Stat label="Sources" value="6 platforms" />
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-foreground md:text-3xl">{value}</span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  )
}
