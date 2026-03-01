export interface Player {
  id: string
  name: string
  slug: string
  position: string
  team?: string
  careerStats?: {
    hits?: number
    homeRuns?: number
    battingAverage?: number
    years?: string
  }
}

export interface Set {
  name: string
  year: number
  brand: string
}

export interface GradedCard {
  id: string
  grader: string
  grade: string
  population?: number
}

export interface Sale {
  id: string
  date: string
  price: number
  grader: string
  grade: string
  platform: string
}

export interface Card {
  id: string
  slug: string
  number?: string
  player: Player
  set: Set
  gradedCards: GradedCard[]
  fairValueScore?: number
  liquidityIndex?: number
  momentumScore?: number
  volatilityScore?: number
  imageUrl?: string
  recentSales?: Sale[]
}

export const players: Player[] = [
  {
    id: '1',
    name: 'Mickey Mantle',
    slug: 'mickey-mantle',
    position: 'OF',
    team: 'New York Yankees',
    careerStats: { hits: 2415, homeRuns: 536, battingAverage: 0.298, years: '1951-1968' }
  },
  {
    id: '2',
    name: 'Derek Jeter',
    slug: 'derek-jeter',
    position: 'SS',
    team: 'New York Yankees',
    careerStats: { hits: 3465, homeRuns: 260, battingAverage: 0.310, years: '1995-2014' }
  },
  {
    id: '3',
    name: 'Hank Aaron',
    slug: 'hank-aaron',
    position: 'OF',
    team: 'Atlanta Braves',
    careerStats: { hits: 3771, homeRuns: 755, battingAverage: 0.305, years: '1954-1976' }
  },
  {
    id: '4',
    name: 'Mike Trout',
    slug: 'mike-trout',
    position: 'OF',
    team: 'Los Angeles Angels',
    careerStats: { hits: 1500, homeRuns: 350, battingAverage: 0.303, years: '2011-Present' }
  },
  {
    id: '5',
    name: 'Ken Griffey Jr.',
    slug: 'ken-griffey-jr',
    position: 'OF',
    team: 'Seattle Mariners',
    careerStats: { hits: 2781, homeRuns: 630, battingAverage: 0.284, years: '1989-2010' }
  },
  {
    id: '6',
    name: 'Babe Ruth',
    slug: 'babe-ruth',
    position: 'OF/P',
    team: 'New York Yankees',
    careerStats: { hits: 2873, homeRuns: 714, battingAverage: 0.342, years: '1914-1935' }
  },
  {
    id: '7',
    name: 'Ty Cobb',
    slug: 'ty-cobb',
    position: 'OF',
    team: 'Detroit Tigers',
    careerStats: { hits: 4189, homeRuns: 117, battingAverage: 0.366, years: '1905-1928' }
  },
  {
    id: '8',
    name: 'Willie Mays',
    slug: 'willie-mays',
    position: 'OF',
    team: 'San Francisco Giants',
    careerStats: { hits: 3283, homeRuns: 660, battingAverage: 0.301, years: '1951-1973' }
  },
  {
    id: '9',
    name: 'Ted Williams',
    slug: 'ted-williams',
    position: 'OF',
    team: 'Boston Red Sox',
    careerStats: { hits: 2654, homeRuns: 521, battingAverage: 0.344, years: '1939-1960' }
  },
  {
    id: '10',
    name: 'Jackie Robinson',
    slug: 'jackie-robinson',
    position: '2B',
    team: 'Brooklyn Dodgers',
    careerStats: { hits: 1518, homeRuns: 137, battingAverage: 0.311, years: '1947-1956' }
  },
  {
    id: '11',
    name: 'Lou Gehrig',
    slug: 'lou-gehrig',
    position: '1B',
    team: 'New York Yankees',
    careerStats: { hits: 2721, homeRuns: 493, battingAverage: 0.340, years: '1923-1939' }
  },
  {
    id: '12',
    name: 'Stan Musial',
    slug: 'stan-musial',
    position: 'OF/1B',
    team: 'St. Louis Cardinals',
    careerStats: { hits: 3630, homeRuns: 475, battingAverage: 0.331, years: '1941-1963' }
  },
  {
    id: '13',
    name: 'Roberto Clemente',
    slug: 'roberto-clemente',
    position: 'OF',
    team: 'Pittsburgh Pirates',
    careerStats: { hits: 3000, homeRuns: 240, battingAverage: 0.317, years: '1955-1972' }
  },
  {
    id: '14',
    name: 'Joe DiMaggio',
    slug: 'joe-dimaggio',
    position: 'OF',
    team: 'New York Yankees',
    careerStats: { hits: 2214, homeRuns: 361, battingAverage: 0.325, years: '1936-1951' }
  },
  {
    id: '15',
    name: 'Sandy Koufax',
    slug: 'sandy-koufax',
    position: 'P',
    team: 'Los Angeles Dodgers',
    careerStats: { hits: 40, homeRuns: 0, battingAverage: 0.097, years: '1955-1966' }
  },
  // 10 NEW PLAYERS
  {
    id: '16',
    name: 'Shohei Ohtani',
    slug: 'shohei-ohtani',
    position: 'DH/P',
    team: 'Los Angeles Dodgers',
    careerStats: { hits: 800, homeRuns: 200, battingAverage: 0.280, years: '2018-Present' }
  },
  {
    id: '17',
    name: 'Ronald Acuña Jr.',
    slug: 'ronald-acuna-jr',
    position: 'OF',
    team: 'Atlanta Braves',
    careerStats: { hits: 900, homeRuns: 160, battingAverage: 0.290, years: '2018-Present' }
  },
  {
    id: '18',
    name: 'Juan Soto',
    slug: 'juan-soto',
    position: 'OF',
    team: 'New York Mets',
    careerStats: { hits: 950, homeRuns: 170, battingAverage: 0.285, years: '2018-Present' }
  },
  {
    id: '19',
    name: 'Nolan Ryan',
    slug: 'nolan-ryan',
    position: 'P',
    team: 'Texas Rangers',
    careerStats: { hits: 0, homeRuns: 0, battingAverage: 0, years: '1966-1993' }
  },
  {
    id: '20',
    name: 'Cal Ripken Jr.',
    slug: 'cal-ripken-jr',
    position: 'SS',
    team: 'Baltimore Orioles',
    careerStats: { hits: 3184, homeRuns: 431, battingAverage: 0.276, years: '1981-2001' }
  },
  {
    id: '21',
    name: 'Tony Gwynn',
    slug: 'tony-gwynn',
    position: 'OF',
    team: 'San Diego Padres',
    careerStats: { hits: 3141, homeRuns: 135, battingAverage: 0.338, years: '1982-2001' }
  },
  {
    id: '22',
    name: 'Ichiro Suzuki',
    slug: 'ichiro-suzuki',
    position: 'OF',
    team: 'Seattle Mariners',
    careerStats: { hits: 3089, homeRuns: 117, battingAverage: 0.311, years: '2001-2019' }
  },
  {
    id: '23',
    name: 'Albert Pujols',
    slug: 'albert-pujols',
    position: '1B',
    team: 'St. Louis Cardinals',
    careerStats: { hits: 3384, homeRuns: 703, battingAverage: 0.296, years: '2001-2022' }
  },
  {
    id: '24',
    name: 'Reggie Jackson',
    slug: 'reggie-jackson',
    position: 'OF',
    team: 'New York Yankees',
    careerStats: { hits: 2584, homeRuns: 563, battingAverage: 0.262, years: '1967-1987' }
  },
  {
    id: '25',
    name: 'Pete Rose',
    slug: 'pete-rose',
    position: 'OF/1B',
    team: 'Cincinnati Reds',
    careerStats: { hits: 4256, homeRuns: 160, battingAverage: 0.303, years: '1963-1986' }
  }
]

// Helper function to generate recent sales mock data
function generateRecentSales(cardId: string, basePrice: number): Sale[] {
  const platforms = ['eBay', 'PWCC', 'Goldin', 'Heritage']
  const graders = ['PSA', 'BGS', 'SGC']
  const sales: Sale[] = []
  
  for (let i = 0; i < 5; i++) {
    const daysAgo = [3, 7, 14, 21, 30][i]
    const variance = (Math.random() - 0.5) * 0.2 // ±10% variance
    sales.push({
      id: `${cardId}-sale-${i}`,
      date: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: Math.round(basePrice * (1 + variance)),
      grader: graders[Math.floor(Math.random() * graders.length)],
      grade: ['8', '8.5', '9', '9.5', '10'][Math.floor(Math.random() * 5)],
      platform: platforms[Math.floor(Math.random() * platforms.length)]
    })
  }
  return sales
}

// Better variety of card images - each card gets a unique image
const cardImages = [
  'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=600&fit=crop', // vintage card 1
  'https://images.unsplash.com/photo-1631190984954-aa22c28a7f8a?w=400&h=600&fit=crop', // vintage card 2
  'https://images.unsplash.com/photo-1629121923575-5f2f01d3d468?w=400&h=600&fit=crop', // card back
  'https://images.unsplash.com/photo-1565104551429-27e11273da96?w=400&h=600&fit=crop', // baseball closeup
  'https://images.unsplash.com/photo-1544298621-a28c0051ef04?w=400&h=600&fit=crop', // old baseball
  'https://images.unsplash.com/photo-1508349083404-7d7f989f37f3?w=400&h=600&fit=crop', // retro baseball
  'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=400&h=600&fit=crop', // baseball field
  'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=400&h=600&fit=crop', // baseball glove
  'https://images.unsplash.com/photo-1562077981-4d7e8c6c9c0b?w=400&h=600&fit=crop', // baseball bat
  'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=600&fit=crop', // stadium lights
  'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=600&fit=crop', // baseball equipment
  'https://images.unsplash.com/photo-1533561052669-63c481a72ea4?w=400&h=600&fit=crop', // ball dirt
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=600&fit=crop', // baseball grass
  'https://images.unsplash.com/photo-1584735422524-1c9c4c99f8c1?w=400&h=600&fit=crop', // baseball diamond
  'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=400&h=600&fit=crop', // pitcher
]

export const cards: Card[] = [
  {
    id: '1',
    slug: 'mickey-mantle-1952-topps-311',
    number: '311',
    player: players[0],
    set: { name: 'Topps', year: 1952, brand: 'Topps' },
    gradedCards: [
      { id: '1', grader: 'PSA', grade: '7', population: 1800 },
      { id: '2', grader: 'PSA', grade: '5', population: 2500 }
    ],
    fairValueScore: 95,
    liquidityIndex: 8.5,
    momentumScore: 12,
    volatilityScore: 25,
    imageUrl: cardImages[0],
    recentSales: generateRecentSales('1', 45000)
  },
  {
    id: '2',
    slug: 'derek-jeter-1993-sp-279',
    number: '279',
    player: players[1],
    set: { name: 'SP', year: 1993, brand: 'Upper Deck' },
    gradedCards: [
      { id: '3', grader: 'PSA', grade: '9', population: 3500 },
      { id: '4', grader: 'BGS', grade: '9', population: 2100 }
    ],
    fairValueScore: 88,
    liquidityIndex: 7.2,
    momentumScore: 5,
    volatilityScore: 18,
    imageUrl: cardImages[1],
    recentSales: generateRecentSales('2', 850)
  },
  {
    id: '3',
    slug: 'hank-aaron-1954-topps-128',
    number: '128',
    player: players[2],
    set: { name: 'Topps', year: 1954, brand: 'Topps' },
    gradedCards: [
      { id: '5', grader: 'PSA', grade: '6', population: 850 },
      { id: '5a', grader: 'PSA', grade: '8', population: 320 }
    ],
    fairValueScore: 82,
    liquidityIndex: 6.0,
    momentumScore: -3,
    volatilityScore: 22,
    imageUrl: cardImages[2],
    recentSales: generateRecentSales('3', 1200)
  },
  {
    id: '4',
    slug: 'mike-trout-2011-topps-update-us175',
    number: 'US175',
    player: players[3],
    set: { name: 'Topps Update', year: 2011, brand: 'Topps' },
    gradedCards: [
      { id: '6', grader: 'PSA', grade: '10', population: 8900 },
      { id: '6a', grader: 'BGS', grade: '9.5', population: 4200 }
    ],
    fairValueScore: 75,
    liquidityIndex: 9.2,
    momentumScore: 8,
    volatilityScore: 15,
    imageUrl: cardImages[3],
    recentSales: generateRecentSales('4', 3200)
  },
  {
    id: '5',
    slug: 'ken-griffey-jr-1989-upper-deck-1',
    number: '1',
    player: players[4],
    set: { name: 'Upper Deck', year: 1989, brand: 'Upper Deck' },
    gradedCards: [
      { id: '7', grader: 'PSA', grade: '10', population: 12000 },
      { id: '7a', grader: 'BGS', grade: '9.5', population: 6800 }
    ],
    fairValueScore: 70,
    liquidityIndex: 8.8,
    momentumScore: 15,
    volatilityScore: 20,
    imageUrl: cardImages[4],
    recentSales: generateRecentSales('5', 450)
  },
  {
    id: '6',
    slug: 'babe-ruth-1933-goudey-53',
    number: '53',
    player: players[5],
    set: { name: 'Goudey', year: 1933, brand: 'Goudey' },
    gradedCards: [
      { id: '8', grader: 'PSA', grade: '5', population: 180 },
      { id: '8a', grader: 'SGC', grade: '4', population: 95 }
    ],
    fairValueScore: 98,
    liquidityIndex: 5.5,
    momentumScore: 18,
    volatilityScore: 35,
    imageUrl: cardImages[5],
    recentSales: generateRecentSales('6', 18000)
  },
  {
    id: '7',
    slug: 'ty-cobb-1909-t206',
    number: '',
    player: players[6],
    set: { name: 'T206', year: 1909, brand: 'Piedmont' },
    gradedCards: [
      { id: '9', grader: 'PSA', grade: '4', population: 65 },
      { id: '9a', grader: 'SGC', grade: '3', population: 42 }
    ],
    fairValueScore: 96,
    liquidityIndex: 4.8,
    momentumScore: 22,
    volatilityScore: 40,
    imageUrl: cardImages[6],
    recentSales: generateRecentSales('7', 22000)
  },
  {
    id: '8',
    slug: 'willie-mays-1951-bowman-305',
    number: '305',
    player: players[7],
    set: { name: 'Bowman', year: 1951, brand: 'Bowman' },
    gradedCards: [
      { id: '10', grader: 'PSA', grade: '6', population: 420 },
      { id: '10a', grader: 'BGS', grade: '7', population: 280 }
    ],
    fairValueScore: 91,
    liquidityIndex: 6.2,
    momentumScore: 8,
    volatilityScore: 28,
    imageUrl: cardImages[7],
    recentSales: generateRecentSales('8', 6500)
  },
  {
    id: '9',
    slug: 'ted-williams-1939-play-ball-92',
    number: '92',
    player: players[8],
    set: { name: 'Play Ball', year: 1939, brand: 'Gum Inc.' },
    gradedCards: [
      { id: '11', grader: 'PSA', grade: '5', population: 280 },
      { id: '11a', grader: 'SGC', grade: '6', population: 150 }
    ],
    fairValueScore: 89,
    liquidityIndex: 5.8,
    momentumScore: 12,
    volatilityScore: 30,
    imageUrl: cardImages[8],
    recentSales: generateRecentSales('9', 4800)
  },
  {
    id: '10',
    slug: 'jackie-robinson-1948-leaf-79',
    number: '79',
    player: players[9],
    set: { name: 'Leaf', year: 1948, brand: 'Leaf' },
    gradedCards: [
      { id: '12', grader: 'PSA', grade: '7', population: 120 },
      { id: '12a', grader: 'BGS', grade: '7.5', population: 45 }
    ],
    fairValueScore: 94,
    liquidityIndex: 6.5,
    momentumScore: 15,
    volatilityScore: 32,
    imageUrl: cardImages[9],
    recentSales: generateRecentSales('10', 8500)
  },
  {
    id: '11',
    slug: 'lou-gehrig-1933-goudey-92',
    number: '92',
    player: players[10],
    set: { name: 'Goudey', year: 1933, brand: 'Goudey' },
    gradedCards: [
      { id: '13', grader: 'PSA', grade: '6', population: 220 },
      { id: '13a', grader: 'SGC', grade: '5', population: 130 }
    ],
    fairValueScore: 87,
    liquidityIndex: 5.5,
    momentumScore: 10,
    volatilityScore: 28,
    imageUrl: cardImages[10],
    recentSales: generateRecentSales('11', 3800)
  },
  {
    id: '12',
    slug: 'stan-musial-1948-bowman-36',
    number: '36',
    player: players[11],
    set: { name: 'Bowman', year: 1948, brand: 'Bowman' },
    gradedCards: [
      { id: '14', grader: 'PSA', grade: '7', population: 380 },
      { id: '14a', grader: 'BGS', grade: '8', population: 210 }
    ],
    fairValueScore: 83,
    liquidityIndex: 6.0,
    momentumScore: 5,
    volatilityScore: 24,
    imageUrl: cardImages[11],
    recentSales: generateRecentSales('12', 2200)
  },
  {
    id: '13',
    slug: 'roberto-clemente-1955-topps-164',
    number: '164',
    player: players[12],
    set: { name: 'Topps', year: 1955, brand: 'Topps' },
    gradedCards: [
      { id: '15', grader: 'PSA', grade: '8', population: 650 },
      { id: '15a', grader: 'PSA', grade: '9', population: 180 }
    ],
    fairValueScore: 85,
    liquidityIndex: 6.8,
    momentumScore: 14,
    volatilityScore: 26,
    imageUrl: cardImages[12],
    recentSales: generateRecentSales('13', 3200)
  },
  {
    id: '14',
    slug: 'joe-dimaggio-1938-goudey-250',
    number: '250',
    player: players[13],
    set: { name: 'Goudey', year: 1938, brand: 'Goudey' },
    gradedCards: [
      { id: '16', grader: 'PSA', grade: '6', population: 290 },
      { id: '16a', grader: 'SGC', grade: '7', population: 140 }
    ],
    fairValueScore: 90,
    liquidityIndex: 5.8,
    momentumScore: 9,
    volatilityScore: 27,
    imageUrl: cardImages[13],
    recentSales: generateRecentSales('14', 5500)
  },
  {
    id: '15',
    slug: 'sandy-koufax-1955-topps-123',
    number: '123',
    player: players[14],
    set: { name: 'Topps', year: 1955, brand: 'Topps' },
    gradedCards: [
      { id: '17', grader: 'PSA', grade: '8', population: 520 },
      { id: '17a', grader: 'BGS', grade: '8.5', population: 280 }
    ],
    fairValueScore: 84,
    liquidityIndex: 7.0,
    momentumScore: 11,
    volatilityScore: 23,
    imageUrl: cardImages[14],
    recentSales: generateRecentSales('15', 2800)
  },
  // NEW CARDS 16-25
  {
    id: '16',
    slug: 'shohei-ohtani-2018-topps-update-us203',
    number: 'US203',
    player: players[15],
    set: { name: 'Topps Update', year: 2018, brand: 'Topps' },
    gradedCards: [
      { id: '16a', grader: 'PSA', grade: '10', population: 1200 },
      { id: '16b', grader: 'BGS', grade: '9.5', population: 800 }
    ],
    fairValueScore: 68,
    liquidityIndex: 8.5,
    momentumScore: 20,
    volatilityScore: 18,
    imageUrl: cardImages[0],
    recentSales: generateRecentSales('16', 1500)
  },
  {
    id: '17',
    slug: 'ronald-acuna-jr-2018-topps-update-us175',
    number: 'US175',
    player: players[16],
    set: { name: 'Topps Update', year: 2018, brand: 'Topps' },
    gradedCards: [
      { id: '17a', grader: 'PSA', grade: '10', population: 2100 },
      { id: '17b', grader: 'BGS', grade: '9.5', population: 1500 }
    ],
    fairValueScore: 65,
    liquidityIndex: 9.0,
    momentumScore: 18,
    volatilityScore: 16,
    imageUrl: cardImages[1],
    recentSales: generateRecentSales('17', 1200)
  },
  {
    id: '18',
    slug: 'juan-soto-2019-topps-chrome-s1',
    number: 'S1',
    player: players[17],
    set: { name: 'Topps Chrome', year: 2019, brand: 'Topps' },
    gradedCards: [
      { id: '18a', grader: 'PSA', grade: '10', population: 3200 },
      { id: '18b', grader: 'BGS', grade: '9.5', population: 1800 }
    ],
    fairValueScore: 62,
    liquidityIndex: 8.8,
    momentumScore: 15,
    volatilityScore: 14,
    imageUrl: cardImages[2],
    recentSales: generateRecentSales('18', 900)
  },
  {
    id: '19',
    slug: 'nolan-ryan-1973-topps-400',
    number: '400',
    player: players[18],
    set: { name: 'Topps', year: 1973, brand: 'Topps' },
    gradedCards: [
      { id: '19a', grader: 'PSA', grade: '8', population: 450 },
      { id: '19b', grader: 'PSA', grade: '9', population: 180 }
    ],
    fairValueScore: 79,
    liquidityIndex: 6.5,
    momentumScore: 8,
    volatilityScore: 22,
    imageUrl: cardImages[3],
    recentSales: generateRecentSales('19', 4500)
  },
  {
    id: '20',
    slug: 'cal-ripken-jr-1982-topps-100',
    number: '100',
    player: players[19],
    set: { name: 'Topps', year: 1982, brand: 'Topps' },
    gradedCards: [
      { id: '20a', grader: 'PSA', grade: '9', population: 2800 },
      { id: '20b', grader: 'BGS', grade: '9', population: 1600 }
    ],
    fairValueScore: 72,
    liquidityIndex: 7.5,
    momentumScore: 10,
    volatilityScore: 20,
    imageUrl: cardImages[4],
    recentSales: generateRecentSales('20', 1800)
  },
  {
    id: '21',
    slug: 'tony-gwynn-1984-topps-82',
    number: '82',
    player: players[20],
    set: { name: 'Topps', year: 1984, brand: 'Topps' },
    gradedCards: [
      { id: '21a', grader: 'PSA', grade: '9', population: 2200 },
      { id: '21b', grader: 'BGS', grade: '9.5', population: 1200 }
    ],
    fairValueScore: 74,
    liquidityIndex: 7.2,
    momentumScore: 12,
    volatilityScore: 18,
    imageUrl: cardImages[5],
    recentSales: generateRecentSales('21', 2200)
  },
  {
    id: '22',
    slug: 'ichiro-suzuki-2001-topps-traded-t206',
    number: 'T206',
    player: players[21],
    set: { name: 'Topps Traded', year: 2001, brand: 'Topps' },
    gradedCards: [
      { id: '22a', grader: 'PSA', grade: '10', population: 5500 },
      { id: '22b', grader: 'BGS', grade: '9.5', population: 3200 }
    ],
    fairValueScore: 58,
    liquidityIndex: 8.2,
    momentumScore: 6,
    volatilityScore: 15,
    imageUrl: cardImages[6],
    recentSales: generateRecentSales('22', 650)
  },
  {
    id: '23',
    slug: 'albert-pujols-2001-topps-update-u130',
    number: 'U130',
    player: players[22],
    set: { name: 'Topps Update', year: 2001, brand: 'Topps' },
    gradedCards: [
      { id: '23a', grader: 'PSA', grade: '10', population: 7800 },
      { id: '23b', grader: 'BGS', grade: '9.5', population: 4100 }
    ],
    fairValueScore: 55,
    liquidityIndex: 8.8,
    momentumScore: 4,
    volatilityScore: 12,
    imageUrl: cardImages[7],
    recentSales: generateRecentSales('23', 480)
  },
  {
    id: '24',
    slug: 'reggie-jackson-1977-topps-300',
    number: '300',
    player: players[23],
    set: { name: 'Topps', year: 1977, brand: 'Topps' },
    gradedCards: [
      { id: '24a', grader: 'PSA', grade: '9', population: 1100 },
      { id: '24b', grader: 'PSA', grade: '8', population: 2400 }
    ],
    fairValueScore: 81,
    liquidityIndex: 7.0,
    momentumScore: 9,
    volatilityScore: 21,
    imageUrl: cardImages[8],
    recentSales: generateRecentSales('24', 3200)
  },
  {
    id: '25',
    slug: 'pete-rose-1979-topps-350',
    number: '350',
    player: players[24],
    set: { name: 'Topps', year: 1979, brand: 'Topps' },
    gradedCards: [
      { id: '25a', grader: 'PSA', grade: '8', population: 1800 },
      { id: '25b', grader: 'PSA', grade: '9', population: 920 }
    ],
    fairValueScore: 77,
    liquidityIndex: 6.8,
    momentumScore: 7,
    volatilityScore: 19,
    imageUrl: cardImages[9],
    recentSales: generateRecentSales('25', 2800)
  }
]

export function getCards(): Card[] {
  return cards
}

export function getCard(slug: string): Card | undefined {
  return cards.find(c => c.slug === slug)
}

export function getPlayers(): Player[] {
  return players
}

export function getPlayer(slug: string): Player | undefined {
  return players.find(p => p.slug === slug)
}

// Search/filter functions
export function searchCards(query: string): Card[] {
  const lowerQuery = query.toLowerCase()
  return cards.filter(card => 
    card.player.name.toLowerCase().includes(lowerQuery) ||
    card.set.year.toString().includes(lowerQuery) ||
    card.set.brand.toLowerCase().includes(lowerQuery) ||
    card.number?.includes(lowerQuery)
  )
}

export function filterCardsByGrader(grader: string): Card[] {
  return cards.filter(card => 
    card.gradedCards.some(gc => gc.grader === grader)
  )
}

export function filterCardsByGrade(grade: string): Card[] {
  return cards.filter(card => 
    card.gradedCards.some(gc => gc.grade === grade)
  )
}