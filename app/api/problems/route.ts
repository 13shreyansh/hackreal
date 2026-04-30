import { matchProblems } from '@/lib/problems-db'

export async function POST(req: Request) {
  const { hackathonContext } = await req.json()

  if (!hackathonContext || typeof hackathonContext !== 'string') {
    return Response.json({ error: 'Missing hackathon context' }, { status: 400 })
  }

  // Small delay to simulate processing
  await new Promise((resolve) => setTimeout(resolve, 800))

  const problems = matchProblems(hackathonContext)

  return Response.json({ problems })
}
