export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-pop-reports',
    title: 'Understanding Pop Reports: How Scarcity Drives Graded Card Prices',
    excerpt: 'Master the metrics that matter. Learn why PSA 10 population counts are just the beginning—and how to calculate true scarcity that predicts price movements before they happen.',
    date: '2026-03-02',
    readTime: '17 min read',
    category: 'Education'
  },
  {
    slug: 'game-used-relic-cards',
    title: 'Game-Used Relic Cards: Do They Hold Value When Graded?',
    excerpt: 'The definitive analysis of graded relic cards: when grading adds 50-120% premiums, which relic types command respect, and why "player-worn" is the kiss of death for value retention.',
    date: '2026-03-02',
    readTime: '15 min read',
    category: 'Memorabilia'
  },
  {
    slug: '2026-market-report',
    title: '2026 Graded Card Market Report: Trends, Pop Reports, and Predictions',
    excerpt: 'Comprehensive analysis of the $15.2 billion graded card market. Junk wax gems lead the recovery, PSA processes 7.3 million cards, and we predict 20-38% growth for 2027.',
    date: '2026-03-02',
    readTime: '20 min read',
    category: 'Market Analysis'
  },
  {
    slug: 'pre-war-grading-guide',
    title: 'Pre-War Baseball Cards: Grading Challenges and Opportunities',
    excerpt: 'The ultimate guide to collecting T206, Goudey, and caramel cards. Navigate authentication pitfalls and uncover undervalued gems from baseball\'s golden age.',
    date: '2026-03-02',
    readTime: '16 min read',
    category: 'Vintage Guide'
  },
  {
    slug: 'junk-wax-hidden-gems',
    title: 'Most Underrated Graded Cards from the Junk Wax Era',
    excerpt: 'Think everything from 1986-1993 is worthless? These hidden gems have gained 300-600% since 2020, proving condition scarcity trumps production volume.',
    date: '2026-03-02',
    readTime: '14 min read',
    category: 'Vintage Guide'
  },
  {
    slug: '1952-mantle-millions',
    title: 'Why the 1952 Topps Mickey Mantle Commands Millions',
    excerpt: 'The anatomy of a $12.6 million baseball card. From a 25-cent pack pull to the most valuable sports card in history—exploring the perfect storm of scarcity.',
    date: '2026-03-02',
    readTime: '18 min read',
    category: 'Vintage Guide'
  },
  {
    slug: 'graded-cards-500-percent-gains',
    title: 'Graded Baseball Cards That Gained 500%+ in Value (And Why)',
    excerpt: 'The biggest winners of the sports card boom—and the exact factors that turned $100 cards into $5,000+ assets. Learn the patterns to spot the next breakout stars.',
    date: '2026-03-02',
    readTime: '15 min read',
    category: 'Investment Analysis'
  },
  {
    slug: 'submitting-cards-for-grading',
    title: 'How to Submit Cards for Grading: Step-by-Step Guide for First-Timers',
    excerpt: 'Master the submission process with our comprehensive walkthrough. From prep to profit, learn exactly how to get your baseball cards professionally graded.',
    date: '2026-02-28',
    readTime: '12 min read',
    category: "Beginner's Guide"
  },
  {
    slug: 'why-graded-cards-matter',
    title: 'Why Graded Cards Matter: The Complete Guide',
    excerpt: 'Understand the importance of PSA, BGS, and SGC grading and how it affects card value and liquidity.',
    date: '2026-02-28',
    readTime: '5 min read',
    category: 'Education'
  },
  {
    slug: 'investing-in-vintage-cards',
    title: 'Investing in Vintage Baseball Cards: 2026 Outlook',
    excerpt: 'A deep dive into the vintage card market, top performers, and what to watch in 2026.',
    date: '2026-02-25',
    readTime: '8 min read',
    category: 'Investing'
  },
  {
    slug: ' understanding-population-reports',
    title: 'Understanding Population Reports',
    excerpt: 'How to read and interpret PSA, BGS, and SGC population data to make smarter buys.',
    date: '2026-02-20',
    readTime: '4 min read',
    category: 'Education'
  },
  {
    slug: 'top-10-rookie-cards-2025',
    title: 'Top 10 Rookie Cards to Watch in 2025',
    excerpt: 'The hottest rookie cards from the 2025 season and their investment potential.',
    date: '2026-02-15',
    readTime: '6 min read',
    category: 'Market'
  }
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}