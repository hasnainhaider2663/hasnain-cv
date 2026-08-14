export const profile = {
  name: 'Hasnain Haider',
  role: 'Full Stack Engineer / Software Architect',
  email: 'hasnainhaider2663@gmail.com',
  phone: '+351 911 098 589',
  location: 'Lisbon, Portugal',
  linkedin: 'https://www.linkedin.com/in/1stengineer/',
  github: 'https://github.com/hasnainataltar',
  upwork: 'https://www.upwork.com/freelancers/~01af2bec7f4082f911',
  experienceYears: 11,
  blurb:
    'Full stack engineer who ships responsive, performant platforms and mobile apps. Eleven years across Next.js, React, Angular and Node — from startup strategy to enterprise scale.',
}

export const highlights: { title: string; body: string }[] = [
  {
    title: '338 PRs · 435 tickets in the last year',
    body: 'Shipped 338 pull requests and completed 435 tickets in the last year.',
  },
  {
    title: 'Tech Lead',
    body: 'Served as Tech Lead at a US-based startup (2023–2025), owning technical strategy end to end.',
  },
  {
    title: 'Startup strategy',
    body: 'Provided technical leadership and strategy for multiple startups, working directly with leadership.',
  },
  {
    title: '11 years across web, mobile and backend',
    body: 'Expert in Next.js, React, Angular and Node.js with SQL and NoSQL databases across Azure, AWS and Firebase.',
  },
  {
    title: 'Can-do attitude',
    body: 'My biggest asset is my can-do attitude, which I\'ve always had since I got into the field.',
  },
]

export type Role = {
  company: string
  title: string
  period: string
  tag?: string
  points: string[]
}

export const roles: Role[] = [
  {
    company: 'Altar.io',
    title: 'Senior Full Stack Developer',
    period: 'Jul 2025 – Present',
    tag: 'Senior Full Stack',
    points: [
      'Played a key role in 5 projects: fintech, AI e-commerce, inventory management and healthcare social app. 338 pull requests and 435 tickets in 13 months, and code reviewer of record on 311 teammate PRs.',
      'Built a storefront-styling agent (OpenCode SDK) with structured JSON output; designed the per-session cost instrumentation adopted as the project’s go/no-go business metric.',
      'A controlled model evaluation cut projected inference costs by 41% while improving latency.',
      'Delivered 30+ data visualizations and a dynamic form engine that eliminated custom forms for 90 API endpoints, cutting development time significantly.',
      'Built backend services in Hono, Drizzle ORM and PostgreSQL with better-auth multi-tenant permissions, S3 file handling and Trigger.dev background ingestion jobs.',
      'Built mobile E2E test infrastructure from scratch (Appium + WebdriverIO, iOS/Android, EAS, CI) on two products and a Playwright suite on a third.',
      'Built a deterministic, reversible anonymization CLI (Python, PyInstaller, cross-platform CI) encrypting personal identifiers across five linked datasets; extracted into a standalone internal tool.',
      'Deployed infrastructure on AWS with Terraform; React Native/Expo mobile development; Terraform, Helm and AWS EKS.',
      'Published apps on the Apple App Store and Google Play Store, guiding clients through review approval. Practiced pair programming and regular teammate mentoring.',
    ],
  },
  {
    company: 'Sabeelee',
    title: 'Tech Lead',
    period: 'Dec 2023 – Jul 2025',
    tag: 'Startup · Team Lead',
    points: [
      'Led technical strategy and development for a community engagement platform using React/Next.js; listed the PWA on the iOS App Store.',
      'Processed 20k ticket sales in 8 hours and launched first web + mobile versions in 4 months.',
      'Deployed and maintained a distributed, scalable Azure architecture — message queues, container apps and CDNs.',
      'Built secure payment processing and a high-capacity ticket sales system in Next.js.',
      'Developed Node.js/TypeScript microservices for image and video processing: 300 images/sec and 1.5 hrs of video per minute.',
      'Built iOS + PWA push notification system, CI/CD pipelines, and modelled a 74-model Postgres/Prisma schema.',
      'Optimized cloud infrastructure for performance and cost-efficiency. Led a team of three developers.',
    ],
  },
  {
    company: '1stEngineer Ltd',
    title: 'Full Stack Developer',
    period: 'Dec 2022 – Dec 2023',
    tag: 'Personal Venture',
    points: [
      'Personal venture building web applications for international clients.',
      'Developed a shipment tracking tool and a digital invitations/RSVP platform in Angular.',
      'Built client dashboards and a marketing tool in Go/HTMX and Next.js (React) with MongoDB.',
    ],
  },
  {
    company: 'Lobster Development GmbH',
    title: 'Front End Developer',
    period: 'Jun 2021 – Aug 2022',
    tag: 'Enterprise · SEO',
    points: [
      'Built and optimized the frontend for herold.at (Yellowpages platform) using Next.js/React and GraphQL.',
      'Improved SEO and page load times by 40%, speeding up the site for millions of visitors.',
      'Shipped two music streaming SPAs (radioflamingo.at, antenne.at) in Angular within three months.',
    ],
  },
  {
    company: 'Avantform',
    title: 'Frontend Developer',
    period: 'Jun 2019 – Jun 2021',
    tag: 'Startup',
    points: [
      'Wrote the core business logic in Angular and TypeScript; launched the first platform version in under a month.',
      'Built a bulk upload system handling gigabytes of data, and a licensing/pricing system for artists.',
      'Designed the UX from scratch and integrated Stripe and Moneris payments.',
    ],
  },
  {
    company: 'HSA International Group',
    title: 'Full Stack Developer',
    period: 'Sep 2017 – Feb 2019',
    tag: 'Dubai, UAE',
    points: [
      'Created BrandBinary, a QR-code marketing and survey platform (Angular 12, Node/Express, MongoDB); generated a million QR codes in the backend in under 5 minutes.',
      'Built a university tool for issuing digitally verifiable degrees in Angular, Node and MongoDB.',
      'Developed business analytics and core logic presenting graphs and charts; set up CI/CD and deployed on AWS (load balancers, Route53).',
    ],
  },
  {
    company: 'Store Hunch LLC',
    title: 'Full Stack Developer & Co-Founder',
    period: 'Apr 2015 – Sep 2017',
    tag: 'Co-Founder',
    points: [
      'Co-founded a startup helping brick-and-mortar stores with tech solutions, reaching 300+ DAUs.',
      'Developed the Angular Point-of-Sale app and an Android app; built APIs and business logic in Node.js, MongoDB and Express.',
      'Led a team of four developers and handled customer-facing product development.',
    ],
  },
]

export const skillGroups: { name: string; accent: string; skills: string[] }[] = [
  {
    name: 'Frontend',
    accent: '#a5b4fc',
    skills: [
      'Next.js',
      'React 19',
      'Angular 2+',
      'TanStack Router/Query/Virtual',
      'TypeScript',
      'Tailwind CSS',
      'SCSS',
      'RxJS',
      'Radix UI',
      'Zustand',
      'React Hook Form + Zod',
      'ECharts',
      'Lexical',
      'jsPDF',
      'i18next',
      'AMP',
      'Stripe & PayPal',
      'TDD (Playwright, Vitest, Cypress)',
    ],
  },
  {
    name: 'Backend',
    accent: '#e879f9',
    skills: [
      'Node.js',
      'Hono',
      'Express',
      'Golang',
      'GoFiber',
      'Drizzle ORM',
      'Prisma',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'MSSQL',
      'Redis',
      'GraphQL',
      'Socket.IO',
      'better-auth',
      'Trigger.dev',
      'Python',
      'REST/OpenAPI',
      'TDD (Jest, pytest)',
    ],
  },
  {
    name: 'Cloud & Infra',
    accent: '#22d3ee',
    skills: [
      'Docker',
      'Terraform',
      'Helm',
      'AWS EKS',
      'AWS (EC2, S3, Lambda, Cognito, Route53, ELB, CodePipeline)',
      'Azure (Container Apps, Functions, Storage, Queues, App Service, Front Door, CDN)',
      'Firebase',
      'GitHub Actions',
      'OpenTelemetry',
      'Grafana Faro',
      'Serverless & Microservices',
    ],
  },
  {
    name: 'Mobile',
    accent: '#34d399',
    skills: ['React Native', 'Expo', 'EAS Build', 'Appium + WebdriverIO'],
  },
  {
    name: 'Additional',
    accent: '#f87171',
    skills: [
      'Scrum & Kanban (Trello, Jira)',
      'Figma',
      'Adobe XD',
      'Zeplin',
      'Pair Programming',
      'Mentoring',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'COMSATS University Islamabad',
  period: 'Sep 2011 – Feb 2016',
}

export const languages = ['English (Professional)', 'Urdu (Native)']

export const marqueeItems = [
  'Next.js',
  'React 19',
  'TypeScript',
  'Angular',
  'Node.js',
  'Hono',
  'PostgreSQL',
  'Go',
  'AWS',
  'Azure',
  'Terraform',
  'React Native',
  'GraphQL',
  'Docker',
  'Redis',
  'Tailwind',
]
