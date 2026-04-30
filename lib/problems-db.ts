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
  impactNumber: string
  impactLabel: string
  submitTo: SubmitTo[]
  tags: string[]
}

export const PROBLEMS_DB: Problem[] = [
  // ===== AI / ML =====
  {
    title: 'AI-Powered Medical Misinformation Detector',
    description:
      'Build a tool that uses LLMs to detect health misinformation in social media posts and news articles. It should simulate public reactions to healthcare content and flag misleading claims with evidence-based corrections in real time.',
    category: 'AI / ML',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'LangChain', 'OpenAI API', 'FastAPI'],
    whyItMatters:
      'Health misinformation causes an estimated 2,000+ preventable deaths per year in the US alone.',
    impactNumber: '2,000+',
    impactLabel: 'preventable deaths caused by health misinformation each year',
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
  },
  {
    title: 'Ambulatory Readmission Predictor',
    description:
      'Create an ML-based prediction model that forecasts hospital readmissions by analyzing patient records via FHIR APIs. This helps hospitals identify at-risk patients before discharge and reduce costly readmission cycles.',
    category: 'Healthcare',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'scikit-learn', 'FHIR API', 'React'],
    whyItMatters:
      'Hospital readmissions cost the US healthcare system $26 billion annually — predictive models can cut this by 20%.',
    impactNumber: '$26B',
    impactLabel: 'wasted annually on preventable hospital readmissions in the US',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$3,000 - $5,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'ml', 'healthcare', 'python', 'data', 'fhir'],
  },
  {
    title: 'Climate & Air Quality AI Assistant (Offline-Capable)',
    description:
      'Build an inclusive, offline-capable AI assistant that answers questions about climate, air quality, and health risks. It should work in areas with poor connectivity and support accessibility features like screen readers and voice navigation.',
    category: 'Climate & Sustainability',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'TensorFlow.js', 'PWA', 'Web Speech API'],
    whyItMatters:
      'Over 3 billion people lack reliable internet — offline-first climate tools reach those most affected by environmental hazards.',
    impactNumber: '3B',
    impactLabel: 'people without reliable internet who need accessible climate information',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$2,000 - $5,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$2,000 - $8,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'climate', 'pwa', 'accessibility', 'offline', 'javascript', 'react'],
  },
  {
    title: 'AI ESG Reporting Platform for SMEs',
    description:
      'Create an AI-powered sustainability reporting tool that helps small businesses comply with emerging regulations like the EU Green Deal. It should auto-generate ESG reports from business data and suggest actionable improvements.',
    category: 'Climate & Sustainability',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'OpenAI API', 'Next.js', 'PostgreSQL'],
    whyItMatters:
      'The EU now requires 50,000+ companies to report sustainability metrics — most SMEs have no tools to comply.',
    impactNumber: '50K+',
    impactLabel: 'companies now required to report sustainability metrics with no tools to do it',
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
  },
  {
    title: 'Industrial Air Quality Monitor Using Satellite Data',
    description:
      'Automate industrial air quality management by combining NASA satellite data with AI-powered analysis. Build a dashboard that identifies pollution sources, tracks air quality trends, and suggests mitigation strategies for communities and regulators.',
    category: 'Climate & Sustainability',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'NASA APIs', 'MapboxGL', 'TensorFlow'],
    whyItMatters:
      'Air pollution is responsible for 7 million deaths annually — satellite monitoring can catch violations 10x faster.',
    impactNumber: '7M',
    impactLabel: 'deaths caused by air pollution every year worldwide',
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
  },
  // ===== Web3 / Blockchain =====
  {
    title: 'Automated Toll Payments on Ethereum L2',
    description:
      'Build a smart contract system for automated, gasless toll payments using account abstraction. Create a seamless pay-as-you-go system where drivers never need to think about transactions or manual wallet interactions.',
    category: 'Web3 / Blockchain',
    difficulty: 'Advanced',
    suggestedTech: ['Solidity', 'ERC-4337', 'Next.js', 'ethers.js'],
    whyItMatters:
      'Account abstraction removes the #1 barrier to crypto adoption — manual transaction signing.',
    impactNumber: '420M',
    impactLabel: 'crypto wallet users struggling with manual transaction complexity',
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
  },
  {
    title: 'On-Chain Developer Reputation System',
    description:
      'Create a decentralized reputation protocol that tracks developer contributions across GitHub, on-chain activity, and open source projects. Let developers build a portable, verifiable reputation score they can take anywhere.',
    category: 'Web3 / Blockchain',
    difficulty: 'Intermediate',
    suggestedTech: ['Solidity', 'The Graph', 'Next.js', 'GitHub API'],
    whyItMatters:
      'Developers waste hours proving credentials to every new project — a portable reputation eliminates this friction.',
    impactNumber: '30M+',
    impactLabel: 'developers on GitHub who lack a portable proof of their work',
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
  },
  {
    title: 'Telegram Bot for Crypto Scam Detection',
    description:
      'Build a Telegram bot that detects and warns about scam links in crypto community groups in real-time. This addresses a massive ongoing problem in the Solana ecosystem, and there is an active 500 USDC bounty on Superteam Earn for this exact tool.',
    category: 'Security',
    difficulty: 'Intermediate',
    suggestedTech: ['Node.js', 'Telegram Bot API', 'AI/ML classifier', 'Redis'],
    whyItMatters:
      'Crypto scams stole $5.6 billion in 2023 — community-level detection stops attacks where they start.',
    impactNumber: '$5.6B',
    impactLabel: 'stolen by crypto scams in a single year — most preventable at the community level',
    submitTo: [
      {
        platform: 'Superteam Earn',
        type: 'Bounty',
        estimatedReward: '500 USDC',
        url: 'https://superteam.fun/earn/listing/develop-telegram-bot-for-scam-link-detection-in-solana-ireland-group',
      },
    ],
    tags: ['web3', 'security', 'bot', 'telegram', 'node', 'solana'],
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
    impactNumber: '$2M+',
    impactLabel: 'in open-source bounties going unclaimed every year because they are hard to find',
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
    impactNumber: '2.1M',
    impactLabel: 'npm packages in the ecosystem vulnerable to undetected supply-chain attacks',
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
  },
  {
    title: 'Visual Git Conflict Resolver',
    description:
      'Build a browser-based tool that visualizes git merge conflicts as interactive flowcharts, letting developers resolve conflicts by clicking on the version they want. A visual diff tool that makes sense even to non-expert git users.',
    category: 'Developer Tools',
    difficulty: 'Intermediate',
    suggestedTech: ['React', 'Monaco Editor', 'D3.js', 'isomorphic-git'],
    whyItMatters:
      'Developers spend an average of 3.4 hours per week on merge conflicts — visual tools can cut this by 60%.',
    impactNumber: '30M+',
    impactLabel: 'developers losing 3.4 hours weekly to merge conflict confusion',
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
  },
  // ===== Data & Analytics =====
  {
    title: 'Building Energy Optimizer with AI Forecasting',
    description:
      'Optimize building energy consumption using AI-driven data analysis and predictive forecasting. Analyze utility data, weather patterns, and occupancy to reduce energy costs by 20-40% and generate actionable retrofit recommendations.',
    category: 'Data & Analytics',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'scikit-learn', 'Streamlit', 'PostgreSQL'],
    whyItMatters:
      'Buildings consume 40% of global energy — AI optimization alone could prevent 2 gigatons of CO2 annually.',
    impactNumber: '2Gt',
    impactLabel: 'of CO2 emissions preventable annually through smarter building energy management',
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
  },
  {
    title: 'Real-Time Expense Tracker with Receipt Scanning',
    description:
      'Build an app that uses OCR and AI to automatically categorize expenses from receipt photos. It should work offline, support multiple currencies, and generate exportable reports for tax season.',
    category: 'Fintech',
    difficulty: 'Intermediate',
    suggestedTech: ['React Native', 'Tesseract.js', 'OpenAI API', 'SQLite'],
    whyItMatters:
      'Freelancers lose an average of $3,000/year in unclaimed deductions simply because expense tracking is painful.',
    impactNumber: '70M',
    impactLabel: 'freelancers worldwide losing money to poor expense tracking',
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
  },
  // ===== Education =====
  {
    title: 'AI Tutor That Explains Code Like a Human',
    description:
      'Create an AI-powered code tutor that watches what a student types, detects confusion patterns, and explains concepts using analogies tailored to their background. Not another ChatGPT wrapper — this should understand pedagogical context and adapt in real time.',
    category: 'Education',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'OpenAI API', 'Monaco Editor', 'WebSocket'],
    whyItMatters:
      'CS dropout rates are 30-40% at most universities — personalized AI tutoring can cut this in half.',
    impactNumber: '40%',
    impactLabel: 'of CS students drop out because they lack personalized support at critical moments',
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
    impactNumber: '10M+',
    impactLabel: 'competitive programming users with no social or real-time multiplayer features',
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
    impactNumber: '1.3B',
    impactLabel: 'people with disabilities excluded by inaccessible web experiences',
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
    impactNumber: '25K+',
    impactLabel: 'new CVEs published yearly with detection rules written too slowly to protect users',
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
  },
  // ===== Beginner-Friendly =====
  {
    title: 'Smart Waste Sorting Guide with Camera',
    description:
      'Build a mobile-first web app that uses the device camera to identify items and tell users which bin they go in (recycling, compost, or trash). Make waste sorting dead simple for anyone, anywhere.',
    category: 'Climate & Sustainability',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'TensorFlow.js', 'MediaDevices API', 'Tailwind'],
    whyItMatters:
      'Contamination from wrong-bin sorting costs recycling facilities $300M+ per year in the US alone.',
    impactNumber: '$300M',
    impactLabel: 'wasted annually because people put the wrong items in recycling bins',
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
  },
  {
    title: 'Language Translation Chat for Refugees',
    description:
      'Build a simple, mobile-friendly chat interface that translates between languages in real-time using free APIs. Prioritize low-resource languages like Dari, Tigrinya, and Rohingya that major translation tools largely ignore.',
    category: 'Social Impact',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'Google Translate API', 'WebSocket', 'Tailwind'],
    whyItMatters:
      'There are 108 million displaced people worldwide — language barriers prevent them from accessing basic services.',
    impactNumber: '108M',
    impactLabel: 'displaced people worldwide blocked from basic services by language barriers',
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
  },
  {
    title: 'Personal Carbon Footprint Dashboard',
    description:
      'Create a dashboard where users link their purchase history (via Plaid or manual entry) and see their estimated carbon footprint broken down by category. Suggest easy swaps and track progress over time with gamification elements.',
    category: 'Climate & Sustainability',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'Chart.js', 'Tailwind', 'Supabase'],
    whyItMatters:
      'Individual awareness drives collective action — people who track their footprint reduce emissions by 15% on average.',
    impactNumber: '4.7T kg',
    impactLabel: 'of individual CO2 emissions that could be reduced through awareness and tracking',
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
    impactNumber: '10M+',
    impactLabel: 'applications running on serverless platforms with no proper migration tooling',
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
    impactNumber: '$3T',
    impactLabel: 'in global invoices stuck in payment limbo, hurting freelancers and small businesses',
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
    impactNumber: '$200/mo',
    impactLabel: 'wasted per person on average through forgotten and unused subscriptions',
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
    impactNumber: '31hrs',
    impactLabel: 'wasted per professional per month on lost meeting action items',
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
    impactNumber: '4.4 days',
    impactLabel: 'average wait time for a PR review — slowing down millions of engineering teams',
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
    impactNumber: '250M',
    impactLabel: 'people affected by natural disasters annually who need better-coordinated relief',
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
    impactNumber: '38M',
    impactLabel: 'Americans facing food insecurity who depend on better-managed pantry systems',
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
  },
  {
    title: 'Rural Healthcare Navigation App',
    description:
      'Build a mobile-first app that helps people in rural areas find the nearest healthcare providers, compare wait times, and get directions — even with limited connectivity. Focus on underserved communities with sparse medical infrastructure.',
    category: 'Healthcare',
    difficulty: 'Beginner',
    suggestedTech: ['Next.js', 'Google Maps API', 'PWA', 'Tailwind'],
    whyItMatters:
      '46 million Americans live in healthcare deserts — a simple navigation tool can literally save lives.',
    impactNumber: '46M',
    impactLabel: 'Americans living in healthcare deserts with no easy way to find nearby providers',
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
  },
  {
    title: 'Multi-Agent Sustainability Research Assistant',
    description:
      'Build a multi-tool AI agent that answers complex sustainability questions by pulling from SQL databases, corporate ESG reports, and public datasets simultaneously. It should synthesize conflicting sources and present balanced, cited answers.',
    category: 'AI / ML',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'LangChain', 'SQL', 'Streamlit'],
    whyItMatters:
      'Sustainability researchers spend 70% of their time gathering data — AI agents can automate this entirely.',
    impactNumber: '195',
    impactLabel: 'countries committed to Paris Agreement climate goals with insufficient research tools',
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
  },
  {
    title: 'Comorbidity Risk Analysis for Doctors',
    description:
      'Create a context-smart medical risk analysis tool that integrates with LLMs to help doctors assess comorbidity risks during patient consultations. It should cross-reference conditions, medications, and patient history to flag dangerous interactions.',
    category: 'Healthcare',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'OpenAI API', 'FHIR', 'React'],
    whyItMatters:
      'Medical errors are the 3rd leading cause of death in the US — better decision support saves 250,000+ lives.',
    impactNumber: '250K+',
    impactLabel: 'lives lost annually to medical errors that better decision-support tools could prevent',
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
  },
  // ===== Additional Climate =====
  {
    title: 'AI Wildfire Prediction & Alert System',
    description:
      'Build a system that combines weather data, satellite imagery, and historical fire data to predict wildfire risk areas and send early warnings to at-risk communities via SMS and push notifications.',
    category: 'Climate & Sustainability',
    difficulty: 'Advanced',
    suggestedTech: ['Python', 'TensorFlow', 'NASA APIs', 'Twilio'],
    whyItMatters:
      'Wildfires burned 7.7 million acres in the US in 2024 — earlier prediction could save thousands of homes and lives.',
    impactNumber: '70M',
    impactLabel: 'people living in wildfire-prone regions who need earlier warning systems',
    submitTo: [
      {
        platform: 'HeroX',
        type: 'Competition',
        estimatedReward: '$5,000 - $20,000',
        url: 'https://www.herox.com/crowdsourcing-projects/active',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$2,000 - $8,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'climate', 'python', 'satellite', 'data', 'social'],
  },
  {
    title: 'AI Crop Disease Detector from Phone Photos',
    description:
      'Build a mobile-first tool where farmers can photograph a diseased plant leaf and instantly get a diagnosis plus treatment recommendations. Support offline mode for rural areas without connectivity.',
    category: 'Climate & Sustainability',
    difficulty: 'Intermediate',
    suggestedTech: ['Next.js', 'TensorFlow.js', 'PWA', 'React'],
    whyItMatters:
      'Crop diseases destroy 40% of global food production annually — early detection can save up to $220 billion per year.',
    impactNumber: '500M',
    impactLabel: 'smallholder farmers worldwide who lose crops to diseases they could detect earlier',
    submitTo: [
      {
        platform: 'Devpost',
        type: 'Competition',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://devpost.com/hackathons',
      },
      {
        platform: 'Gitcoin',
        type: 'Grant',
        estimatedReward: '$1,000 - $5,000',
        url: 'https://gitcoin.co/grants',
      },
    ],
    tags: ['ai', 'climate', 'mobile', 'react', 'javascript', 'pwa', 'agriculture'],
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
    impact: ['social', 'climate', 'healthcare'],
    'real-world': ['social', 'climate', 'healthcare'],
    'real world': ['social', 'climate', 'healthcare'],
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
