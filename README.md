# HackReal

**Stop building demos nobody needs.**

HackReal helps hackathon participants find real-world problems worth solving. Describe your hackathon -- the theme, your tech stack, and how long you have -- and HackReal instantly surfaces problems that real people and organizations need solved, complete with impact data and places to submit your solution for bounties, grants, and open-source contributions.

> "What should I build at this hackathon?" answered by "Here are problems the world actually needs solved, and someone's already put money behind them."

---

## The Problem

Every hackathon starts the same way: teams scramble to think of project ideas, build throwaway demos, and never touch the code again. Meanwhile, hundreds of open bounties sit on platforms like Superteam Earn, Algora, Gitcoin, HeroX, and Devpost -- real organizations posting real problems with real money attached.

Nobody is connecting the two.

## The Solution

HackReal bridges that gap. Type in your hackathon context and get back a curated feed of high-impact problems matched to your skills, each showing:

- **Impact at a glance** -- how many people this problem affects (e.g. "500M smallholder farmers", "3B people without reliable internet")
- **Why it matters** -- a single punchy stat that makes the problem undeniable
- **Suggested tech stack** -- matched to what you already know
- **Difficulty level** -- Beginner, Intermediate, or Advanced
- **Where to submit** -- direct links to bounty platforms, grants, and competitions with estimated reward ranges

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
app/
  page.tsx              # Main client page -- input form + results
  api/problems/route.ts # API endpoint -- matches problems to hackathon context
  layout.tsx            # Root layout with dark theme + fonts
  globals.css           # Design tokens + animations

components/
  hackathon-input.tsx   # Hackathon description form with example prompts
  results-view.tsx      # Results header with filters + problem grid
  problem-card.tsx      # Individual problem card with impact banner
  problem-skeleton.tsx  # Loading skeleton for streaming effect

lib/
  problems-db.ts        # Curated problem database + keyword matching engine
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/13shreyansh/hackreal.git
cd hackreal

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see HackReal.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F13shreyansh%2Fhackreal)

---

## How It Works

1. **Describe your hackathon** -- theme, duration, your tech stack, what tracks interest you
2. **Keyword matching engine** extracts tech keywords, themes, and categories from your input
3. **Scoring algorithm** ranks 27 curated problems against your context, weighted by keyword relevance
4. **Top 8 results** are returned with full impact data, tech suggestions, and submission links

### Example Input

> "AI and climate hackathon, 48 hours, our team knows Python and React, we want to build something with real-world impact"

### Example Results

| Problem | Impact | Difficulty | Reward Range |
|---------|--------|------------|--------------|
| AI Crop Disease Detection System | 500M farmers worldwide | Intermediate | $2,000 - $8,000 |
| Building Energy Consumption Optimizer | 2Gt CO2 reduction potential | Advanced | $3,000 - $15,000 |
| AI-Powered Wildfire Prediction System | 70M people in fire-prone zones | Advanced | $5,000 - $20,000 |
| Climate & Air Quality AI Assistant | 3B people without reliable internet | Intermediate | $2,000 - $8,000 |

---

## Bounty Platforms

HackReal aggregates submission opportunities from:

- [Superteam Earn](https://earn.superteam.fun/) -- Solana ecosystem bounties
- [Algora](https://algora.io/) -- Open-source bounties
- [Gitcoin](https://gitcoin.co/) -- Web3 grants and funding
- [HeroX](https://herox.com/) -- Innovation challenges
- [Devpost](https://devpost.com/) -- Hackathon competitions
- [GitHub Issues](https://github.com/) -- Open-source contributions
- [CodeBounty](https://codebounty.co/) -- Developer bounties

---

## Contributing

We welcome contributions. If you'd like to add more problems to the database, improve the matching algorithm, or add real-time bounty scraping:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-problems`)
3. Commit your changes (`git commit -m 'Add new problem set for fintech'`)
4. Push to the branch (`git push origin feature/new-problems`)
5. Open a Pull Request

---

## License

MIT

---

Built with care by [Shreyansh](https://github.com/13shreyansh) -- because hackathons should solve problems that matter.
