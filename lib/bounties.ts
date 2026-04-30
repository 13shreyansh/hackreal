export type BountySource =
  | 'Superteam Earn'
  | 'Algora'
  | 'Gitcoin'
  | 'GitHub Issues'
  | 'HeroX'
  | 'BountyBoard'

export type BountyCategory =
  | 'Frontend'
  | 'Backend'
  | 'Smart Contracts'
  | 'AI / ML'
  | 'DevTools'
  | 'Design'
  | 'Data'
  | 'Mobile'
  | 'Security'
  | 'Infrastructure'

export interface Bounty {
  id: string
  title: string
  description: string
  reward: number
  currency: string
  source: BountySource
  category: BountyCategory
  tags: string[]
  url: string
  deadline: string | null
  postedAt: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

export const CATEGORIES: BountyCategory[] = [
  'Frontend',
  'Backend',
  'Smart Contracts',
  'AI / ML',
  'DevTools',
  'Design',
  'Data',
  'Mobile',
  'Security',
  'Infrastructure',
]

export const SOURCES: BountySource[] = [
  'Superteam Earn',
  'Algora',
  'Gitcoin',
  'GitHub Issues',
  'HeroX',
  'BountyBoard',
]

export const REWARD_RANGES = [
  { label: 'Any amount', min: 0, max: Infinity },
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 – $500', min: 100, max: 500 },
  { label: '$500 – $2,000', min: 500, max: 2000 },
  { label: '$2,000 – $5,000', min: 2000, max: 5000 },
  { label: '$5,000+', min: 5000, max: Infinity },
]

// Realistic bounty data seeded from real platforms
export const bounties: Bounty[] = [
  {
    id: '1',
    title: 'Build a Token-Gated Content Platform',
    description:
      'Create a Next.js app that lets creators gate content behind NFT or token ownership. Integrate Solana wallet adapter and on-chain verification.',
    reward: 2000,
    currency: 'USDC',
    source: 'Superteam Earn',
    category: 'Frontend',
    tags: ['Solana', 'Next.js', 'Web3'],
    url: '#',
    deadline: '2026-05-15',
    postedAt: '2026-04-25',
    difficulty: 'Intermediate',
  },
  {
    id: '2',
    title: 'VS Code Extension for AI Code Review',
    description:
      'Build a VS Code extension that uses LLMs to review pull requests inline, highlight potential bugs, and suggest improvements with explanations.',
    reward: 3500,
    currency: 'USD',
    source: 'Algora',
    category: 'DevTools',
    tags: ['VS Code', 'TypeScript', 'LLM'],
    url: '#',
    deadline: '2026-05-20',
    postedAt: '2026-04-28',
    difficulty: 'Advanced',
  },
  {
    id: '3',
    title: 'Quadratic Funding Calculator Widget',
    description:
      'Design and implement an embeddable React widget that visualizes quadratic funding mechanics. Should be interactive and educate users on matching pools.',
    reward: 800,
    currency: 'DAI',
    source: 'Gitcoin',
    category: 'Frontend',
    tags: ['React', 'DeFi', 'Education'],
    url: '#',
    deadline: '2026-05-10',
    postedAt: '2026-04-22',
    difficulty: 'Intermediate',
  },
  {
    id: '4',
    title: 'Add WebSocket Support to REST SDK',
    description:
      'Extend our Node.js SDK to support real-time WebSocket connections alongside the existing REST API. Must include reconnection logic and typed events.',
    reward: 500,
    currency: 'USD',
    source: 'GitHub Issues',
    category: 'Backend',
    tags: ['Node.js', 'WebSocket', 'SDK'],
    url: '#',
    deadline: null,
    postedAt: '2026-04-27',
    difficulty: 'Intermediate',
  },
  {
    id: '5',
    title: 'AI-Powered Resume Screener',
    description:
      'Build a tool that uses NLP to parse resumes, extract key skills, and rank candidates against a job description. Must handle PDF and DOCX formats.',
    reward: 5000,
    currency: 'USD',
    source: 'HeroX',
    category: 'AI / ML',
    tags: ['NLP', 'Python', 'Document Parsing'],
    url: '#',
    deadline: '2026-06-01',
    postedAt: '2026-04-20',
    difficulty: 'Advanced',
  },
  {
    id: '6',
    title: 'Mobile Wallet Transaction History UI',
    description:
      'Design and build a beautiful transaction history screen for a crypto wallet app. Must support infinite scroll, filtering, and transaction details modal.',
    reward: 1200,
    currency: 'USDC',
    source: 'Superteam Earn',
    category: 'Mobile',
    tags: ['React Native', 'Crypto', 'UI/UX'],
    url: '#',
    deadline: '2026-05-18',
    postedAt: '2026-04-26',
    difficulty: 'Intermediate',
  },
  {
    id: '7',
    title: 'Smart Contract Fuzzer Tool',
    description:
      'Create an automated fuzzing tool for Solidity smart contracts. Should generate random inputs, detect invariant violations, and produce minimal reproducible test cases.',
    reward: 4000,
    currency: 'USD',
    source: 'Algora',
    category: 'Security',
    tags: ['Solidity', 'Security', 'Testing'],
    url: '#',
    deadline: '2026-05-30',
    postedAt: '2026-04-24',
    difficulty: 'Advanced',
  },
  {
    id: '8',
    title: 'Dashboard for Open Source Metrics',
    description:
      'Build a dashboard that aggregates GitHub stars, forks, issues, and contributor activity for an org. Must include charts, trends, and CSV export.',
    reward: 750,
    currency: 'USD',
    source: 'BountyBoard',
    category: 'Data',
    tags: ['React', 'Charts', 'GitHub API'],
    url: '#',
    deadline: '2026-05-12',
    postedAt: '2026-04-29',
    difficulty: 'Beginner',
  },
  {
    id: '9',
    title: 'Solana Program for Escrow Payments',
    description:
      'Write and deploy a Solana program (Anchor framework) for escrow-based payments. Buyer deposits funds, seller delivers, arbiter resolves disputes.',
    reward: 3000,
    currency: 'USDC',
    source: 'Superteam Earn',
    category: 'Smart Contracts',
    tags: ['Solana', 'Anchor', 'Rust'],
    url: '#',
    deadline: '2026-05-25',
    postedAt: '2026-04-23',
    difficulty: 'Advanced',
  },
  {
    id: '10',
    title: 'CLI Tool for Database Migrations',
    description:
      'Build a lightweight CLI that manages SQL migrations with up/down support, dry-run mode, and status tracking. Should work with PostgreSQL and SQLite.',
    reward: 400,
    currency: 'USD',
    source: 'GitHub Issues',
    category: 'DevTools',
    tags: ['CLI', 'SQL', 'Node.js'],
    url: '#',
    deadline: null,
    postedAt: '2026-04-28',
    difficulty: 'Beginner',
  },
  {
    id: '11',
    title: 'Design System Component Library',
    description:
      'Create a Figma-to-code design system with 20+ accessible React components. Must include dark mode, Storybook documentation, and keyboard navigation.',
    reward: 2500,
    currency: 'USD',
    source: 'BountyBoard',
    category: 'Design',
    tags: ['React', 'Storybook', 'Accessibility'],
    url: '#',
    deadline: '2026-05-22',
    postedAt: '2026-04-21',
    difficulty: 'Intermediate',
  },
  {
    id: '12',
    title: 'Real-time Collaborative Markdown Editor',
    description:
      'Build a multiplayer markdown editor using CRDTs. Should support real-time cursors, user presence, and conflict-free editing with markdown preview.',
    reward: 1800,
    currency: 'USD',
    source: 'Algora',
    category: 'Frontend',
    tags: ['CRDTs', 'WebSocket', 'React'],
    url: '#',
    deadline: '2026-05-28',
    postedAt: '2026-04-26',
    difficulty: 'Advanced',
  },
  {
    id: '13',
    title: 'Kubernetes Health Monitor Dashboard',
    description:
      'Create a web-based dashboard that monitors K8s cluster health, pod status, resource usage, and alerts. Must use the Kubernetes API directly.',
    reward: 3200,
    currency: 'USD',
    source: 'HeroX',
    category: 'Infrastructure',
    tags: ['Kubernetes', 'React', 'DevOps'],
    url: '#',
    deadline: '2026-06-05',
    postedAt: '2026-04-19',
    difficulty: 'Advanced',
  },
  {
    id: '14',
    title: 'GraphQL API Gateway for Microservices',
    description:
      'Build a GraphQL gateway that federates multiple REST microservices into a unified schema. Must include caching, rate limiting, and auth middleware.',
    reward: 1500,
    currency: 'USD',
    source: 'GitHub Issues',
    category: 'Backend',
    tags: ['GraphQL', 'Node.js', 'Federation'],
    url: '#',
    deadline: '2026-05-14',
    postedAt: '2026-04-25',
    difficulty: 'Intermediate',
  },
  {
    id: '15',
    title: 'Image Classification API with Edge Deployment',
    description:
      'Train a lightweight image classifier and deploy it as a serverless function on the edge. Should classify common objects with under 100ms latency.',
    reward: 2200,
    currency: 'USD',
    source: 'Gitcoin',
    category: 'AI / ML',
    tags: ['TensorFlow', 'Edge Computing', 'API'],
    url: '#',
    deadline: '2026-05-20',
    postedAt: '2026-04-27',
    difficulty: 'Advanced',
  },
  {
    id: '16',
    title: 'Implement Dark Mode for Documentation Site',
    description:
      'Add a polished dark mode toggle to an existing Nextra-based docs site. Must persist preference, support system defaults, and handle all custom components.',
    reward: 200,
    currency: 'USD',
    source: 'GitHub Issues',
    category: 'Frontend',
    tags: ['Nextra', 'CSS', 'Accessibility'],
    url: '#',
    deadline: null,
    postedAt: '2026-04-30',
    difficulty: 'Beginner',
  },
  {
    id: '17',
    title: 'Cross-chain Bridge Interface',
    description:
      'Build a frontend for a cross-chain token bridge. Users should be able to select source/destination chains, input amounts, and track bridge transactions.',
    reward: 4500,
    currency: 'USDC',
    source: 'Superteam Earn',
    category: 'Smart Contracts',
    tags: ['Cross-chain', 'React', 'Web3'],
    url: '#',
    deadline: '2026-06-10',
    postedAt: '2026-04-18',
    difficulty: 'Advanced',
  },
  {
    id: '18',
    title: 'Automated API Documentation Generator',
    description:
      'Create a tool that reads Express/Fastify route definitions and auto-generates OpenAPI specs. Should support JSDoc annotations and output Swagger UI.',
    reward: 900,
    currency: 'USD',
    source: 'Algora',
    category: 'DevTools',
    tags: ['OpenAPI', 'Node.js', 'Documentation'],
    url: '#',
    deadline: '2026-05-16',
    postedAt: '2026-04-29',
    difficulty: 'Intermediate',
  },
  {
    id: '19',
    title: 'ETL Pipeline for Social Media Analytics',
    description:
      'Build a data pipeline that ingests data from Twitter/X and Reddit APIs, transforms it, and loads into a PostgreSQL warehouse. Include sentiment analysis.',
    reward: 1600,
    currency: 'USD',
    source: 'BountyBoard',
    category: 'Data',
    tags: ['Python', 'ETL', 'PostgreSQL'],
    url: '#',
    deadline: '2026-05-24',
    postedAt: '2026-04-22',
    difficulty: 'Intermediate',
  },
  {
    id: '20',
    title: 'iOS Widget for Crypto Portfolio',
    description:
      'Build a native iOS widget using SwiftUI that displays real-time crypto portfolio values, 24h change, and top holdings. Must support multiple widget sizes.',
    reward: 1100,
    currency: 'USD',
    source: 'HeroX',
    category: 'Mobile',
    tags: ['SwiftUI', 'iOS', 'Crypto'],
    url: '#',
    deadline: '2026-05-19',
    postedAt: '2026-04-24',
    difficulty: 'Intermediate',
  },
  {
    id: '21',
    title: 'Penetration Testing Report Generator',
    description:
      'Build a tool that takes raw pen-test findings (Nmap, Burp, etc.) and generates professional PDF reports with severity ratings, remediation steps, and executive summaries.',
    reward: 2800,
    currency: 'USD',
    source: 'HeroX',
    category: 'Security',
    tags: ['Security', 'Python', 'PDF Generation'],
    url: '#',
    deadline: '2026-06-08',
    postedAt: '2026-04-20',
    difficulty: 'Advanced',
  },
  {
    id: '22',
    title: 'Accessible Form Builder with Drag and Drop',
    description:
      'Create a visual form builder where users can drag-and-drop fields, configure validation, and export form schemas. Must meet WCAG 2.1 AA standards.',
    reward: 1400,
    currency: 'USD',
    source: 'BountyBoard',
    category: 'Design',
    tags: ['React', 'DnD', 'WCAG'],
    url: '#',
    deadline: '2026-05-26',
    postedAt: '2026-04-23',
    difficulty: 'Intermediate',
  },
  {
    id: '23',
    title: 'Terraform Module for Multi-Cloud VPCs',
    description:
      'Write a reusable Terraform module that provisions VPCs/VNets across AWS, GCP, and Azure with consistent naming, tagging, and peering support.',
    reward: 3500,
    currency: 'USD',
    source: 'Algora',
    category: 'Infrastructure',
    tags: ['Terraform', 'Multi-cloud', 'IaC'],
    url: '#',
    deadline: '2026-06-02',
    postedAt: '2026-04-21',
    difficulty: 'Advanced',
  },
  {
    id: '24',
    title: 'Chatbot with RAG over Company Docs',
    description:
      'Build a chatbot that answers questions using Retrieval-Augmented Generation over a corpus of company documentation. Must support PDF, Markdown, and HTML ingestion.',
    reward: 2500,
    currency: 'USD',
    source: 'Gitcoin',
    category: 'AI / ML',
    tags: ['RAG', 'LLM', 'Vector DB'],
    url: '#',
    deadline: '2026-05-30',
    postedAt: '2026-04-26',
    difficulty: 'Intermediate',
  },
]
