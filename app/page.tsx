import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { BountyFeed } from '@/components/bounty-feed'
import { bounties } from '@/lib/bounties'

export default function Home() {
  const totalBounties = bounties.length
  const totalValue = `$${bounties.reduce((sum, b) => sum + b.reward, 0).toLocaleString()}`

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero totalBounties={totalBounties} totalValue={totalValue} />
      <BountyFeed />
      <footer className="border-t border-border py-6">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              Aggregating bounties from Superteam Earn, Algora, Gitcoin, GitHub Issues, HeroX, and BountyBoard.
            </p>
            <p className="text-xs text-muted-foreground">
              Built for hackathon builders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
