import { streamText, Output } from 'ai'
import { z } from 'zod'

export const problemSchema = z.object({
  problems: z.array(
    z.object({
      title: z.string().describe('A clear, concise title for the problem (5-10 words)'),
      description: z.string().describe('2-3 sentence description of the real-world problem and why it matters'),
      category: z.enum([
        'Developer Tools',
        'AI / ML',
        'Web3 / Blockchain',
        'Data & Analytics',
        'Healthcare',
        'Education',
        'Climate & Sustainability',
        'Accessibility',
        'Open Source',
        'Fintech',
        'Social Impact',
        'Infrastructure',
        'Security',
        'Productivity',
      ]),
      difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
      suggestedTech: z.array(z.string()).describe('2-4 specific technologies or frameworks that would help solve this'),
      whyItMatters: z.string().describe('One punchy sentence on the real-world impact'),
      submitTo: z.array(
        z.object({
          platform: z.string().describe('Name of the platform where a solution can be submitted'),
          type: z.enum(['Bounty', 'Grant', 'Open Source', 'Competition', 'Freelance']),
          estimatedReward: z.string().nullable().describe('Estimated reward range like "$200-$500" or null if unpaid open source'),
          url: z.string().url().describe('A plausible URL for the platform'),
        })
      ).describe('1-3 places where the builder can submit or monetize their solution'),
    })
  ),
})

export async function POST(req: Request) {
  const { hackathonContext } = await req.json()

  const result = streamText({
    model: 'anthropic/claude-sonnet-4-20250514',
    system: `You are a hackathon problem advisor. Your job is to find REAL, specific problems that exist in the world right now that match a given hackathon's theme and constraints.

These should NOT be vague ideas like "build a todo app." They should be specific, real problems that real people or organizations are facing — the kind of thing someone would post as a bounty, file as an issue, or offer a grant for.

For each problem, suggest real platforms where the solution could be submitted or monetized. Use actual platforms like:
- Superteam Earn (Solana ecosystem bounties)
- Algora (open source bounties)
- Gitcoin (web3 grants)
- GitHub Issues / GitHub Sponsors (open source contributions)
- HeroX (innovation challenges)
- Replit Bounties (code bounties)
- IssueHunt (open source bounties)
- Devpost (hackathon submissions)

Give realistic estimated rewards based on difficulty and type. Not every problem needs a paid bounty — some are valuable open source contributions.

Generate exactly 8 problems. Make them diverse in difficulty and category. Be specific and concrete, not generic.`,
    prompt: `Here's what I know about my hackathon:

${hackathonContext}

Find me 8 real problems I could solve at this hackathon. Make them specific, actionable, and matched to this hackathon's theme and constraints. For each one, tell me exactly where I can submit or continue the project after the hackathon.`,
    output: Output.object({ schema: problemSchema }),
  })

  return result.toUIMessageStreamResponse()
}
