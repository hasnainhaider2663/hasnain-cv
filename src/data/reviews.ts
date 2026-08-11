export interface Review {
  quote: string
  author: string
  role: string
  company: string
  period: string
  source: string
  rating: number | null
}

export const reviews: Review[] = [
  {
    quote:
      'Hasnain combines solid full-stack capabilities with an excellent work ethic and a genuine commitment to teamwork. He would be a great addition to any team.',
    author: 'Claudio Teixeira',
    role: 'CTO',
    company: 'Altar.io',
    period: '2025',
    source: 'Letter of recommendation',
    rating: null,
  },
  {
    quote:
      'Hasnain consistently delivered high-quality code, meeting project deadlines with great attention to detail. His contributions played a vital role in the successful completion of several key projects.',
    author: 'Daniel Gerhard Trittenwein',
    role: 'CEO',
    company: 'Lobster Development GmbH',
    period: 'Aug 2021 – Aug 2022',
    source: 'Letter of recommendation',
    rating: null,
  },
  {
    quote:
      'Extraordinary professional! It has been an honor to work with Hasnain. He is proficient with front end and backend system implementation with great attention to every detail.',
    author: '',
    role: 'Remote Front end developer',
    company: 'Avantform',
    period: 'Jun 2019 – May 2020',
    source: '',
    rating: null,
  },
]
