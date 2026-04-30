export interface SubmitTo {
  platform: string
  type: 'Bounty' | 'Grant' | 'Open Source' | 'Competition' | 'Freelance'
  estimatedReward: string | null
  url: string
}

export interface Problem {
  title: string
  description: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  suggestedTech: string[]
  whyItMatters: string
  submitTo: SubmitTo[]
  tags: string[]
  inspiredBy: string
}

export const PROBLEMS_DB: Problem[] = [
  // ===== AI / ML =====
  {
    title: 'AI-Powered Medical Misinformation Detector',
    description:
      'Build a tool that uses LLMs to detect health misinformation in social media posts and news articles. Similar to HealthByte (Atlantic AI Summit 2025 winner), it should simulate public reactions to healthcare content and flag misleading claims with evidence-based corrections.',
    category: 'AI / ML',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'LangChain', 'OpenAI API', 'FastAPI'],
    whyItMatters:
      'Health misinformation causes an estimated 2,000+ preventable deaths per year in the US alone.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$5,000 - $10,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$2,500',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['ai', 'ml', 'healthcare', 'nlp', 'llm', 'python'],
    inspiredBy: 'HealthByte - Atlantic AI Summit 2025 Winner',
  },
  {
    title: 'Ambulatory Readmission Predictor',
    description:
      'Create an ML-based prediction model that forecasts hospital readmissions by analyzing patient records via FHIR APIs. Inspired by ReCure AI (Devpost winner), this helps hospitals identify at-risk patients before discharge and reduce costly readmission cycles.',
    category: 'Healthcare',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'scikit-learn', 'FHIR API', 'React'],
    whyItMatters:
      'Hospital readmissions cost the US healthcare system $26 billion annually — predictive models can cut this by 20%.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$3,000 - $5,000',
        url: 'https://devpost.com/software/recure-ai',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'ml', 'healthcare', 'python', 'data', 'fhir'],
    inspiredBy: 'ReCure AI - Devpost Hackathon Winner',
  },
  {
    title: 'Climate & Air Quality AI Assistant (Offline-Capable)',
    description:
      'Build an inclusive, offline-capable AI assistant that answers questions about climate, air quality, and health risks. Inspired by EcoVerse AI (Devpost winner), it should work in areas with poor connectivity and support accessibility features like screen readers.',
    category: 'Climate & Sustainability',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'TensorFlow.js', 'PWA', 'Web Speech API'],
    whyItMatters:
      'Over 3 billion people lack reliable internet — offline-first climate tools reach those most affected by environmental hazards.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$2,000 - $5,000',
        url: 'https://devpost.com/software/ecoverse-ai-climate-health-accessibility-assistant',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$2,000 - $8,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'climate', 'pwa', 'accessibility', 'offline', 'javascript', 'react'],
    inspiredBy: 'EcoVerse AI - Devpost Winner',
  },
  {
    title: 'AI ESG Reporting Platform for SMEs',
    description:
      'Create an AI-powered sustainability reporting tool that helps small businesses comply with regulations like the EU Green Deal. Inspired by SAM (AI Impact Mission Hackathon 1st place), it should auto-generate ESG reports from business data and suggest improvements.',
    category: 'Climate & Sustainability',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'OpenAI API', 'Next.js', 'PostgreSQL'],
    whyItMatters:
      'The EU now requires 50,000+ companies to report sustainability metrics — most SMEs have no tools to comply.',
    submitTo: [
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$5,000 - $15,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$3,000 - $10,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'climate', 'sustainability', 'enterprise', 'python', 'react', 'fullstack'],
    inspiredBy: 'SAM - AI Impact Mission Hackathon 1st Place Winner',
  },
  {
    title: 'Industrial Air Quality Monitor Using Satellite Data',
    description:
      'Automate industrial air quality management by combining NASA satellite data with AI-powered analysis. Inspired by AiRo (NASA Space Apps Challenge 2025 winner), build a dashboard that identifies pollution sources and suggests mitigation strategies.',
    category: 'Climate & Sustainability',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'NASA APIs', 'MapboxGL', 'TensorFlow'],
    whyItMatters:
      'Air pollution is responsible for 7 million deaths annually — satellite monitoring can catch violations 10x faster.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$2,000 - $10,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$5,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['ai', 'climate', 'data', 'satellite', 'python', 'maps'],
    inspiredBy: 'AiRo - NASA Space Apps Challenge 2025 Winner',
  },
  // ===== Web3 / Blockchain =====
  {
    title: 'Automated Toll Payments on Ethereum L2',
    description:
      'Build a smart contract system for automated, gasless toll payments using account abstraction. Inspired by AutoToll (ETHGlobal New York 2025 winner), create a seamless pay-as-you-go system where drivers never think about transactions.',
    category: 'Web3 / Blockchain',
    difficulty: 'Advanced',
    suggestedTech: ['Solidity', 'ERC-4337', 'Next.js', 'ethers.js'],
    whyItMatters:
      'Account abstraction removes the #1 barrier to crypto adoption — manual transaction signing.',
    submitTo: [
      {
        platform: 'Superteam Earn',
        type: 'Bounty',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://earn.superteam.fun',
      },
      {
        platform: 'ETHGlobal',
        type: 'Competition',
        estimatedReward: '$5,000 - $20,000',
        url: 'https://ethglobal.com',
      },
    ],
    tags: ['web3', 'blockchain', 'solidity', 'ethereum', 'defi', 'react', 'account-abstraction'],
    inspiredBy: 'AutoToll - ETHGlobal New York 2025 Winner',
  },
  {
    title: 'On-Chain Developer Reputation System',
    description:
      'Create a decentralized reputation protocol that tracks developer contributions across GitHub, on-chain activity, and hackathon results. Inspired by DevQuest (ETHOnline 2025 winner), let developers build a portable, verifiable reputation score.',
    category: 'Web3 / Blockchain',
    difficulty: 'Intermediate',
    suggestedTech: ['Solidity', 'The Graph', 'Next.js', 'GitHub API'],
    whyItMatters:
      'Developers waste hours proving credentials to every new project — a portable reputation eliminates this friction.',
    submitTo: [
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$2,000 - $10,000',
        url: 'https://gitcoin.co/grants',
      },
      {
        platform: 'Superteam Earn',
        type: 'Bounty',
        estimatedReward: '$500 - $2,000',
        url: 'https://earn.superteam.fun',
      },
    ],
    tags: ['web3', 'blockchain', 'ethereum', 'react', 'github', 'identity'],
    inspiredBy: 'DevQuest - ETHOnline 2025 Winner',
  },
  {
    title: 'Telegram Bot for Crypto Scam Detection',
    description:
      'Build a Telegram bot that detects and warns about scam links in crypto community groups in real-time. There is a real 500 USDC bounty on Superteam Earn for this exact problem — the Solana Ireland community needs it urgently.',
    category: 'Security',
    difficulty: 'Intermediate',
    suggestedTech: ['Node.js', 'Telegram Bot API', 'AI/ML classifier', 'Redis'],
    whyItMatters:
      'Crypto scams stole $5.6 billion in 2023 — community-level detection stops attacks where they start.',
    submitTo: [
      {
        platform: 'Superteam Earn',
        type: 'Bounty',
        estimatedReward: '500 USDC',
        url: 'https://superteam.fun/earn/listing/develop-telegram-bot-for-scam-link-detection-in-solana-ireland-group',
      },
    ],
    tags: ['web3', 'security', 'bot', 'telegram', 'node', 'solana'],
    inspiredBy: 'Active Superteam Earn Bounty (500 USDC)',
  },
  // ===== Developer Tools =====
  {
    title: 'CLI Tool for Finding Paid Open-Source Bounties',
    description:
      'Build a command-line tool that aggregates paid bounty issues from GitHub, Algora, IssueHunt, and other platforms into a single searchable feed. Developers should be able to filter by language, reward size, and difficulty right from their terminal.',
    category: 'Developer Tools',
    difficulty: 'Intermediate',
    suggestedTech: ['Node.js', 'GitHub API', 'Commander.js', 'Chalk'],
    whyItMatters:
      'Over $2M in open source bounties go unclaimed every year because developers simply cannot find them.',
    submitTo: [
      {
        platform: 'Algora',
        type: 'Open Source',
        estimatedReward: '$100 - $500',
        url: 'https://algora.io/bounties',
      },
      {
        platform: 'GitHub Sponsors',
        type: 'Open Source',
        estimatedReward: null,
        url: 'https://github.com/sponsors',
      },
    ],
    tags: ['devtools', 'cli', 'node', 'opensource', 'github'],
    inspiredBy: 'Community need - open-source bounty aggregation',
  },
  {
    title: 'Security Vulnerability Scanner for npm Packages',
    description:
      'Create a tool that deeply scans npm packages for supply-chain vulnerabilities beyond what npm audit catches — analyzing actual code patterns, dependency confusion risks, and typosquatting. GitHub pays $30,000+ for critical vulnerability discoveries.',
    category: 'Security',
    difficulty: 'Advanced',
    suggestedTech: ['Node.js', 'AST parsing', 'GitHub API', 'SQLite'],
    whyItMatters:
      'Supply chain attacks on npm increased 300% in 2024 — existing tools miss zero-day patterns.',
    submitTo: [
      {
        platform: 'GitHub Bug Bounty',
        type: 'Bounty',
        estimatedReward: '$5,000 - $30,000+',
        url: 'https://bounty.github.com/',
      },
      {
        platform: 'Algora',
        type: 'Bounty',
        estimatedReward: '$200 - $1,224',
        url: 'https://algora.io/bounties',
      },
    ],
    tags: ['security', 'devtools', 'node', 'npm', 'cli'],
    inspiredBy: 'GitHub Bug Bounty Program (pays $30k+ for critical finds)',
  },
  {
    title: 'Visual Git Conflict Resolver',
    description:
      'Build a browser-based tool that visualizes git merge conflicts as interactive flowcharts, letting developers resolve conflicts by clicking on the version they want. Think of it as a visual diff that actually makes sense to non-expert git users.',
    category: 'Developer Tools',
    difficulty: 'Intermediate',
    suggestedTech: ['React', 'Monaco Editor', 'D3.js', 'isomorphic-git'],
    whyItMatters:
      'Developers spend an average of 3.4 hours per week on merge conflicts — visual tools can cut this by 60%.',
    submitTo: [
      {
        platform: 'IssueHunt',
        type: 'Open Source',
        estimatedReward: '$100 - $300',
        url: 'https://issuehunt.io',
      },
      {
        platform: 'GitHub Sponsors',
        type: 'Open Source',
        estimatedReward: null,
        url: 'https://github.com/sponsors',
      },
    ],
    tags: ['devtools', 'git', 'react', 'javascript', 'visualization', 'frontend'],
    inspiredBy: 'Community need - developer productivity',
  },
  // ===== Data & Analytics =====
  {
    title: 'Building Energy Optimizer with AI Forecasting',
    description:
      'Optimize building energy consumption using AI-driven data analysis and predictive forecasting. Inspired by Connect (Net-Zero Challenge 1st place winner), the tool should analyze utility data, weather patterns, and occupancy to reduce energy costs by 20-40%.',
    category: 'Data & Analytics',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'scikit-learn', 'Streamlit', 'PostgreSQL'],
    whyItMatters:
      'Buildings consume 40% of global energy — AI optimization alone could prevent 2 gigatons of CO2 annually.',
    submitTo: [
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$5,000 - $25,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$2,000 - $5,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'data', 'climate', 'python', 'analytics', 'energy'],
    inspiredBy: 'Connect - Net-Zero Challenge 1st Place Winner',
  },
  {
    title: 'Real-Time Expense Tracker with Receipt Scanning',
    description:
      'Build an app that uses OCR and AI to automatically categorize expenses from receipt photos. Inspired by ExpenseAI (TreeHacks 2024 winner), it should work offline, support multiple currencies, and generate exportable reports for tax season.',
    category: 'Fintech',
    difficulty: 'Intermediate',
    suggestedTech: ['React Native', 'Tesseract.js', 'OpenAI API', 'SQLite'],
    whyItMatters:
      'Freelancers lose an average of $3,000/year in unclaimed deductions simply because expense tracking is painful.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'Replit Bounties',
        type: 'Bounty',
        estimatedReward: '$200 - $500',
        url: 'https://replit.com/bounties',
      },
    ],
    tags: ['fintech', 'ai', 'mobile', 'ocr', 'react', 'javascript'],
    inspiredBy: 'ExpenseAI - TreeHacks 2024 Winner',
  },
  // ===== Education =====
  {
    title: 'AI Tutor That Explains Code Like a Human',
    description:
      'Create an AI-powered code tutor that watches what a student types, detects confusion patterns, and explains concepts using analogies tailored to their background. Not another ChatGPT wrapper — this should understand pedagogical context.',
    category: 'Education',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'OpenAI API', 'Monaco Editor', 'WebSocket'],
    whyItMatters:
      'CS dropout rates are 30-40% at most universities — personalized AI tutoring can cut this in half.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$2,000 - $10,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['education', 'ai', 'llm', 'react', 'javascript', 'fullstack'],
    inspiredBy: 'FutureHacks 7 - Ethical AI in Education Theme',
  },
  {
    title: 'Multiplayer Coding Challenges Platform',
    description:
      'Build a real-time multiplayer platform where developers compete on algorithm challenges side-by-side, with live spectating, ELO rankings, and instant replays of solutions. Think chess.com but for competitive programming.',
    category: 'Education',
    difficulty: 'Advanced',
    suggestedTech: ['Next.js', 'WebSocket', 'Docker', 'Redis'],
    whyItMatters:
      'Competitive programming platforms have 10M+ users but zero social features — adding multiplayer makes practice addictive.',
    submitTo: [
      {
        platform: 'Replit Bounties',
        type: 'Bounty',
        estimatedReward: '$300 - $1,000',
        url: 'https://replit.com/bounties',
      },
      {
        platform: 'GitHub Sponsors',
        type: 'Open Source',
        estimatedReward: null,
        url: 'https://github.com/sponsors',
      },
    ],
    tags: ['education', 'fullstack', 'websocket', 'react', 'realtime', 'competitive'],
    inspiredBy: 'Community need - competitive programming',
  },
  // ===== Open Source =====
  {
    title: 'Accessible Component Library Audit Tool',
    description:
      'Build an automated tool that scans React component libraries for accessibility violations and generates fix suggestions. It should catch issues that axe-core misses — like keyboard trap patterns, focus management bugs, and missing ARIA live regions.',
    category: 'Accessibility',
    difficulty: 'Intermediate',
    suggestedTech: ['TypeScript', 'React', 'axe-core', 'Puppeteer'],
    whyItMatters:
      '97% of the top 1 million websites have accessibility failures — automated tools catch only 30% of real issues.',
    submitTo: [
      {
        platform: 'Algora',
        type: 'Open Source',
        estimatedReward: '$100 - $500',
        url: 'https://algora.io/bounties',
      },
      {
        platform: 'IssueHunt',
        type: 'Open Source',
        estimatedReward: '$50 - $200',
        url: 'https://issuehunt.io',
      },
    ],
    tags: ['accessibility', 'react', 'typescript', 'devtools', 'frontend', 'opensource'],
    inspiredBy: 'Community need - web accessibility gap',
  },
  {
    title: 'Nuclei Security Template Generator',
    description:
      'Build an AI-assisted tool that generates Nuclei security scanning templates from CVE descriptions. ProjectDiscovery has active bounties on Algora ($100-$1,224) for contributions to their security scanning ecosystem.',
    category: 'Security',
    difficulty: 'Intermediate',
    suggestedTech: ['Go', 'Python', 'YAML', 'OpenAI API'],
    whyItMatters:
      'New CVEs are published faster than security teams can write detection rules — AI can close this gap.',
    submitTo: [
      {
        platform: 'Algora',
        type: 'Bounty',
        estimatedReward: '$100 - $1,224',
        url: 'https://algora.io/projectdiscovery/home',
      },
      {
        platform: 'GitHub',
        type: 'Open Source',
        estimatedReward: null,
        url: 'https://github.com/projectdiscovery/nuclei',
      },
    ],
    tags: ['security', 'opensource', 'go', 'python', 'ai', 'devtools'],
    inspiredBy: 'Active Algora Bounty - ProjectDiscovery ($100-$1,224)',
  },
  // ===== Beginner-Friendly =====
  {
    title: 'Smart Waste Sorting Guide with Camera',
    description:
      'Build a mobile-first web app that uses the device camera to identify items and tell users which bin they go in (recycling, compost, or trash). Inspired by SortFree.AI (Hack This Fall 2024 winner), make waste sorting dead simple for anyone.',
    category: 'Climate & Sustainability',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'TensorFlow.js', 'MediaDevices API', 'Tailwind'],
    whyItMatters:
      'Contamination from wrong-bin sorting costs recycling facilities $300M+ per year in the US alone.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$500 - $2,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$500 - $1,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['climate', 'ai', 'mobile', 'beginner', 'react', 'javascript', 'camera'],
    inspiredBy: 'SortFree.AI - Hack This Fall 2024 Winner',
  },
  {
    title: 'Language Translation Chat for Refugees',
    description:
      'Build a simple, mobile-friendly chat interface that translates between languages in real-time using free APIs. Inspired by Found in Translation (Devpost winner), prioritize low-resource languages like Dari, Tigrinya, and Rohingya.',
    category: 'Social Impact',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'Google Translate API', 'WebSocket', 'Tailwind'],
    whyItMatters:
      'There are 108 million displaced people worldwide — language barriers prevent them from accessing basic services.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$500 - $3,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['social', 'beginner', 'translation', 'react', 'javascript', 'mobile'],
    inspiredBy: 'Found in Translation - Devpost Winner',
  },
  {
    title: 'Personal Carbon Footprint Dashboard',
    description:
      'Create a dashboard where users link their purchase history (via Plaid or manual entry) and see their estimated carbon footprint broken down by category. Suggest easy swaps and track progress over time with gamification.',
    category: 'Climate & Sustainability',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'Chart.js', 'Tailwind', 'Supabase'],
    whyItMatters:
      'Individual awareness drives collective action — people who track their footprint reduce emissions by 15% on average.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$500 - $2,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$500 - $2,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['climate', 'beginner', 'react', 'javascript', 'data', 'visualization', 'fullstack'],
    inspiredBy: 'Community need - personal sustainability',
  },
  // ===== Infrastructure =====
  {
    title: 'Serverless Database Migration Tool',
    description:
      'Build a zero-downtime database migration tool for serverless environments. It should handle schema changes, data transformations, and rollbacks for PostgreSQL and SQLite without requiring dedicated infrastructure or long-running processes.',
    category: 'Infrastructure',
    difficulty: 'Advanced',
    suggestedTech: ['TypeScript', 'PostgreSQL', 'SQLite', 'Vercel Functions'],
    whyItMatters:
      'Database migrations are the #1 cause of production outages — serverless-native tools barely exist.',
    submitTo: [
      {
        platform: 'Algora',
        type: 'Bounty',
        estimatedReward: '$200 - $800',
        url: 'https://algora.io/bounties',
      },
      {
        platform: 'GitHub Sponsors',
        type: 'Open Source',
        estimatedReward: null,
        url: 'https://github.com/sponsors',
      },
    ],
    tags: ['infrastructure', 'database', 'typescript', 'serverless', 'devtools'],
    inspiredBy: 'Community need - serverless infrastructure gaps',
  },
  // ===== Fintech =====
  {
    title: 'Decentralized Invoice Factoring Protocol',
    description:
      'Build a DeFi protocol where freelancers can tokenize unpaid invoices and receive instant payment from liquidity providers at a small discount. The invoice becomes an on-chain asset that settles when the client pays.',
    category: 'Fintech',
    difficulty: 'Advanced',
    suggestedTech: ['Solidity', 'Hardhat', 'Next.js', 'IPFS'],
    whyItMatters:
      'Freelancers wait an average of 35 days for payment — instant invoice factoring unlocks $3T in stuck capital.',
    submitTo: [
      {
        platform: 'Superteam Earn',
        type: 'Bounty',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://earn.superteam.fun',
      },
      {
        platform: 'ETHGlobal',
        type: 'Competition',
        estimatedReward: '$5,000 - $15,000',
        url: 'https://ethglobal.com',
      },
    ],
    tags: ['web3', 'fintech', 'defi', 'solidity', 'blockchain', 'ethereum'],
    inspiredBy: 'DeFi innovation - invoice factoring gap',
  },
  {
    title: 'Open Banking Budget Analyzer',
    description:
      'Create an app that connects to bank accounts via open banking APIs (Plaid) and uses AI to categorize spending, find subscription waste, and negotiate better rates on recurring bills automatically.',
    category: 'Fintech',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'Plaid API', 'OpenAI API', 'Tailwind'],
    whyItMatters:
      'The average person has $200/month in forgotten subscriptions — automated detection saves real money.',
    submitTo: [
      {
        platform: 'Replit Bounties',
        type: 'Bounty',
        estimatedReward: '$200 - $1,000',
        url: 'https://replit.com/bounties',
      },
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$1,000 - $3,000',
        url: 'https://devpost.com/hackathons',
      },
    ],
    tags: ['fintech', 'ai', 'fullstack', 'react', 'javascript', 'api'],
    inspiredBy: 'Community need - personal finance automation',
  },
  // ===== Productivity =====
  {
    title: 'AI Meeting Notes with Action Item Tracking',
    description:
      'Build a web app that transcribes meetings in real-time, auto-extracts action items with owners and deadlines, and syncs them to project management tools. Use browser audio capture so it works with any video call platform.',
    category: 'Productivity',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'Whisper API', 'OpenAI API', 'WebSocket'],
    whyItMatters:
      'Professionals attend 62 meetings per month on average — lost action items waste 31 hours per month.',
    submitTo: [
      {
        platform: 'Replit Bounties',
        type: 'Bounty',
        estimatedReward: '$300 - $1,000',
        url: 'https://replit.com/bounties',
      },
      {
        platform: 'IssueHunt',
        type: 'Open Source',
        estimatedReward: '$100 - $300',
        url: 'https://issuehunt.io',
      },
    ],
    tags: ['productivity', 'ai', 'fullstack', 'react', 'javascript', 'audio', 'llm'],
    inspiredBy: 'Community need - meeting productivity',
  },
  {
    title: 'GitHub PR Review Queue Dashboard',
    description:
      'Create a dashboard that shows pending code reviews across all your GitHub repos, prioritized by age, reviewer workload, and CI status. Reduce review bottlenecks that slow down entire engineering teams.',
    category: 'Developer Tools',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'GitHub API', 'Tailwind', 'SWR'],
    whyItMatters:
      'The average PR waits 4.4 days for review — visibility dashboards can cut this to under 24 hours.',
    submitTo: [
      {
        platform: 'Algora',
        type: 'Open Source',
        estimatedReward: '$50 - $200',
        url: 'https://algora.io/bounties',
      },
      {
        platform: 'GitHub Sponsors',
        type: 'Open Source',
        estimatedReward: null,
        url: 'https://github.com/sponsors',
      },
    ],
    tags: ['devtools', 'github', 'react', 'beginner', 'frontend', 'javascript', 'dashboard'],
    inspiredBy: 'Community need - engineering team productivity',
  },
  // ===== Social Impact =====
  {
    title: 'Disaster Relief Volunteer Coordinator',
    description:
      'Build a real-time coordination platform that matches disaster relief volunteers with specific needs — transportation, medical help, shelter — using location data and skill matching. Think Uber, but for disaster response.',
    category: 'Social Impact',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'Supabase', 'Mapbox', 'Twilio'],
    whyItMatters:
      'After natural disasters, 60% of volunteer efforts are misallocated — better coordination saves lives.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$2,000 - $10,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['social', 'fullstack', 'maps', 'realtime', 'react', 'javascript'],
    inspiredBy: 'Community need - disaster response',
  },
  {
    title: 'Autonomous Food Pantry Inventory System',
    description:
      'Build an inventory management system for food pantries that tracks stock levels, predicts demand using historical data, and auto-generates community alerts when specific items are needed or available.',
    category: 'Social Impact',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'Supabase', 'Tailwind', 'Twilio'],
    whyItMatters:
      '38 million Americans face food insecurity — better inventory systems reduce waste by 40% and serve more people.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$500 - $2,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'GitHub Sponsors',
        type: 'Open Source',
        estimatedReward: null,
        url: 'https://github.com/sponsors',
      },
    ],
    tags: ['social', 'beginner', 'fullstack', 'react', 'javascript', 'inventory'],
    inspiredBy: 'Community need - food security',
  },
  {
    title: 'MedRover - Rural Healthcare Navigation',
    description:
      'Build a mobile-first app that helps people in rural areas find the nearest healthcare providers, compare wait times, and get directions — even with limited connectivity. Inspired by MedRover (Devpost winner), focus on underserved communities.',
    category: 'Healthcare',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'Google Maps API', 'PWA', 'Tailwind'],
    whyItMatters:
      '46 million Americans live in healthcare deserts — a simple navigation tool can literally save lives.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$500 - $3,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$500 - $2,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['healthcare', 'beginner', 'mobile', 'maps', 'react', 'pwa'],
    inspiredBy: 'MedRover - Devpost Winner',
  },
  {
    title: 'Multi-Agent Sustainability Research Assistant',
    description:
      'Build a multi-tool AI agent that answers complex sustainability questions by pulling from SQL databases, corporate ESG reports, and public datasets simultaneously. Inspired by the Nightwalkers team (AIM Hackathon 1st place).',
    category: 'AI / ML',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'LangChain', 'SQL', 'Streamlit'],
    whyItMatters:
      'Sustainability researchers spend 70% of their time gathering data — AI agents can automate this entirely.',
    submitTo: [
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$2,000 - $10,000',
        url: 'https://gitcoin.co/grants',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$3,000 - $10,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['ai', 'agent', 'python', 'sustainability', 'data', 'llm', 'climate'],
    inspiredBy: 'Nightwalkers - AIM Hackathon 1st Place Winner',
  },
  {
    title: 'Comorbidity Risk Analysis for Doctors',
    description:
      'Create a context-smart medical risk analysis tool that integrates with LLMs to help doctors assess comorbidity risks during patient consultations. Inspired by the Comorbidity Analysis MCP (GenerationAI Hackathon 3rd place), it cross-references conditions and medications.',
    category: 'Healthcare',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'OpenAI API', 'FHIR', 'React'],
    whyItMatters:
      'Medical errors are the 3rd leading cause of death in the US — better decision support saves 250,000+ lives.',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$2,000 - $5,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
    ],
    tags: ['healthcare', 'ai', 'python', 'llm', 'medical'],
    inspiredBy: 'Comorbidity Analysis MCP - GenerationAI Hackathon 3rd Place',
  },
]

/**
 * Score and filter problems based on hackathon context.
 * Uses keyword matching against tags, categories, and descriptions.
 */
export function matchProblems(hackathonContext: string): Problem[] {
  const ctx = hackathonContext.toLowerCase()

  // Extract keywords from context
  const keywords: string[] = []

  // Tech keywords
  const techMap: Record<string, string[]> = {
    react: ['react', 'frontend', 'javascript'],
    'next.js': ['react', 'javascript', 'fullstack'],
    nextjs: ['react', 'javascript', 'fullstack'],
    python: ['python', 'ai', 'ml', 'data'],
    solidity: ['web3', 'blockchain', 'solidity', 'ethereum', 'defi'],
    rust: ['infrastructure', 'security'],
    typescript: ['typescript', 'devtools', 'fullstack'],
    node: ['node', 'javascript', 'fullstack', 'devtools'],
    javascript: ['javascript', 'react', 'frontend'],
  }

  // Theme keywords
  const themeMap: Record<string, string[]> = {
    ai: ['ai', 'ml', 'llm', 'agent'],
    'machine learning': ['ai', 'ml', 'python', 'data'],
    ml: ['ai', 'ml', 'python', 'data'],
    llm: ['ai', 'llm', 'agent'],
    web3: ['web3', 'blockchain', 'solidity', 'ethereum', 'defi'],
    blockchain: ['web3', 'blockchain', 'solidity', 'defi'],
    crypto: ['web3', 'blockchain', 'solidity', 'defi', 'solana'],
    defi: ['web3', 'defi', 'blockchain', 'fintech'],
    ethereum: ['web3', 'ethereum', 'solidity', 'defi'],
    eth: ['web3', 'ethereum', 'solidity', 'defi'],
    solana: ['web3', 'blockchain', 'solana'],
    climate: ['climate', 'sustainability', 'energy'],
    sustainability: ['climate', 'sustainability'],
    health: ['healthcare', 'medical', 'ai'],
    healthcare: ['healthcare', 'medical'],
    education: ['education', 'beginner'],
    fintech: ['fintech', 'finance'],
    finance: ['fintech', 'finance'],
    social: ['social', 'community'],
    'social impact': ['social', 'community'],
    'open source': ['opensource', 'github'],
    security: ['security', 'devtools'],
    devtools: ['devtools', 'developer'],
    'developer tools': ['devtools', 'developer'],
    accessibility: ['accessibility', 'frontend'],
    mobile: ['mobile', 'react', 'pwa'],
    data: ['data', 'analytics', 'python'],
    productivity: ['productivity', 'devtools'],
  }

  // Difficulty keywords
  const difficultyMap: Record<string, string[]> = {
    beginner: ['beginner'],
    'beginner-friendly': ['beginner'],
    easy: ['beginner'],
    intermediate: ['intermediate'],
    advanced: ['advanced'],
    hard: ['advanced'],
    expert: ['advanced'],
  }

  for (const [term, tags] of Object.entries(techMap)) {
    if (ctx.includes(term)) keywords.push(...tags)
  }
  for (const [term, tags] of Object.entries(themeMap)) {
    if (ctx.includes(term)) keywords.push(...tags)
  }

  let preferredDifficulty: string | null = null
  for (const [term, diffs] of Object.entries(difficultyMap)) {
    if (ctx.includes(term)) preferredDifficulty = diffs[0]
  }

  const uniqueKeywords = [...new Set(keywords)]

  // Score each problem
  const scored = PROBLEMS_DB.map((problem) => {
    let score = 0

    // Tag matching
    for (const tag of problem.tags) {
      if (uniqueKeywords.includes(tag)) score += 3
    }

    // Category matching
    const catLower = problem.category.toLowerCase()
    if (uniqueKeywords.some((kw) => catLower.includes(kw))) score += 5

    // Difficulty preference
    if (preferredDifficulty && problem.difficulty.toLowerCase() === preferredDifficulty) {
      score += 4
    }

    // Direct text mentions
    const titleLower = problem.title.toLowerCase()
    const descLower = problem.description.toLowerCase()
    for (const kw of uniqueKeywords) {
      if (titleLower.includes(kw)) score += 2
      if (descLower.includes(kw)) score += 1
    }

    // If no keywords matched at all, give a small base score to still show interesting problems
    if (score === 0) score = 1

    return { problem, score }
  })

  // Sort by score descending, then take top 8
  scored.sort((a, b) => b.score - a.score)

  return scored.slice(0, 8).map((s) => s.problem)
}
