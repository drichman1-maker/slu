import Link from 'next/link'
import { ArrowLeft, TrendingUp, Gem, Target, ShoppingCart, Trophy } from 'lucide-react'

export default function JunkWaxHiddenGems() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-white mb-8 text-sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to blog
        </Link>
        
        <article>
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full flex items-center gap-1">
                <Gem className="h-3 w-3" />
                1986-1993 Era
              </span>
              <span className="text-gray-500 text-sm">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Most Underrated Graded Cards from the <span className="text-purple-400">Junk Wax Era</span>
            </h1>
            <p className="text-xl text-gray-400">
              Think everything from 1986-1993 is worthless? Think again. These hidden gems have gained 300-600% since 2020.
            </p>
            <p className="text-gray-500 text-sm mt-4">March 2, 2026</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">+608%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Top Gainer</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">3.2%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Lowest Gem Rate</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">8</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Hidden Gems</div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-purple-500/5 border-l-4 border-purple-500 pl-6 mb-12 rounded-r-lg py-4">
            <p className="text-lg text-gray-300">
              <strong className="text-purple-400">The Junk Wax Myth:</strong> Conventional wisdom says cards from 1986-1993 are worthless because of overproduction. But this narrative misses a critical point: while millions were printed, <em>gem mint examples are actually rare</em>. Poor quality control, thin card stock, and rough handling created condition scarcity that drives modern premiums.
            </p>
          </div>

          {/* Section 1: The Gainers */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">The 608% Club: Hidden Gems</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              While the broader junk wax market stagnated, these eight cards experienced explosive growth driven by Hall of Fame inductions, condition scarcity, and collector nostalgia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-green-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-green-500 text-black px-2 py-0.5 rounded font-bold">+608%</span>
                  <span className="text-gray-500 text-xs">1993 Upper Deck SP</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Derek Jeter RC</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-green-400">$8,500</span>
                  <span className="text-gray-500 text-sm">($1,200 in 2020)</span>
                </div>
                <ul className="space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-green-400">✓</span> HOF induction (2020)</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-green-400">✓</span> Only 180 PSA 10s exist</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-green-400">✓</span> Premium foil stock chips easily</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded font-bold">+522%</span>
                  <span className="text-gray-500 text-xs">1990 Topps</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Frank Thomas (No Name)</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-purple-400">$2,800</span>
                  <span className="text-gray-500 text-sm">($450 in 2020)</span>
                </div>
                <ul className="space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-purple-400">✓</span> Famous printing error</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-purple-400">✓</span> Only 95 PSA 10s exist</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-purple-400">✓</span> Big Hurt HOF status</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded font-bold">+392%</span>
                  <span className="text-gray-500 text-xs">1989 Upper Deck</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Ken Griffey Jr.</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-blue-400">$3,200</span>
                  <span className="text-gray-500 text-sm">($650 in 2020)</span>
                </div>
                <ul className="space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-blue-400">✓</span> The Kid's iconic status</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-blue-400">✓</span> First UD baseball set</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-blue-400">✓</span> 90s nostalgia driver</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded font-bold">+394%</span>
                  <span className="text-gray-500 text-xs">1989 Topps</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Randy Johnson</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-amber-400">$420</span>
                  <span className="text-gray-500 text-sm">($85 in 2020)</span>
                </div>
                <ul className="space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-amber-400">✓</span> 5,714 strikeouts (#2 all-time)</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-amber-400">✓</span> Big Unit HOF legend</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-amber-400">✓</span> Undervalued vs peers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Scarcity Paradox */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Gem className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">The Scarcity Paradox</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The junk wax era's reputation for overproduction obscures a critical truth: while millions were printed, gem mint examples are exponentially rarer than vintage cards due to quality control issues.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Card</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">PSA 10 Pop</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Gem Rate</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Why So Scarce?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626] bg-green-500/5">
                    <td className="p-3 font-medium text-white">1993 SP Jeter</td>
                    <td className="p-3 text-right text-green-400 font-bold">180</td>
                    <td className="p-3 text-right text-green-400 font-bold">3.2%</td>
                    <td className="p-3">Premium foil stock chips easily</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1990 Thomas No Name</td>
                    <td className="p-3 text-right font-semibold">95</td>
                    <td className="p-3 text-right font-semibold">4.5%</td>
                    <td className="p-3">Error variant; most damaged in packs</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1989 UD Griffey</td>
                    <td className="p-3 text-right">2,800</td>
                    <td className="p-3 text-right">12.5%</td>
                    <td className="p-3">High demand preserved more</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">1988 Topps Glavine</td>
                    <td className="p-3 text-right">8,900</td>
                    <td className="p-3 text-right">6.8%</td>
                    <td className="p-3">Pitcher discount; low initial interest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">🧮 The Math That Matters:</strong>
              <span className="text-gray-300 ml-2">A 1993 SP Jeter has a 3.2% gem rate vs 15-20% for modern cards. For every 100 submitted, only 3 achieve PSA 10. Despite millions printed, only ~180 PSA 10s exist—scarcity comparable to 1950s cards.</span>
            </div>
          </section>

          {/* Section 3: Myth Busting */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Myth Busting: Junk Wax Edition</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded font-bold text-sm">MYTH</span>
                  <div>
                    <h4 className="font-bold text-white mb-2">"Everything from 1986-1993 is worthless"</h4>
                    <p className="text-gray-400">False. While base commons are indeed abundant, star rookies in PSA 10 have outperformed the S&P 500 since 2020. The 1993 SP Jeter PSA 10 has gained 608%—beating virtually every traditional asset class.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded font-bold text-sm">MYTH</span>
                  <div>
                    <h4 className="font-bold text-white mb-2">"High population means no scarcity"</h4>
                    <p className="text-gray-400">False. Population reports show total graded, not total gem mint. A card with 180 PSA 10s (1993 SP Jeter) is genuinely scarce despite millions printed.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded font-bold text-sm">MYTH</span>
                  <div>
                    <h4 className="font-bold text-white mb-2">"Condition doesn't matter for junk wax"</h4>
                    <p className="text-gray-400">False. Condition matters MORE for junk wax because it's harder to achieve. The PSA 10 premium for 1993 SP Jeter is 608% vs 229% for 2011 Trout Update.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Gem Rates */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Gem Rate Analysis</h2>
            </div>
            
            <p className="text-gray-400 mb-6">Modern cards (2020+) have gem rates of 40%+. Junk wax era cards average 6-12%. This 4-6x difficulty multiplier creates scarcity.</p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Era</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Avg Gem Rate</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Why the Difference?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Current Era (2020+)</td>
                    <td className="p-3 text-right">40%</td>
                    <td className="p-3">Better cardstock, quality control, handling awareness</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Modern (2000-2019)</td>
                    <td className="p-3 text-right">15%</td>
                    <td className="p-3">Improved quality but still some issues</td>
                  </tr>
                  <tr className="border-b border-[#262626] bg-purple-500/5">
                    <td className="p-3 font-medium text-purple-400">Junk Wax (1986-1993)</td>
                    <td className="p-3 text-right text-purple-400 font-bold">6-12%</td>
                    <td className="p-3">Thin stock, poor QC, rough handling, foil issues</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Vintage (Pre-1980)</td>
                    <td className="p-3 text-right">3-8%</td>
                    <td className="p-3">Age, handling, printing limitations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Buyer's Guide */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Buyer's Guide: What to Look For</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-500/5 border border-green-500/30 rounded-xl p-5">
                <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">✓</span> Buy These
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2"><span className="text-green-400">→</span> PSA 10 population under 500</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">→</span> Hall of Fame or HOF trajectory</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">→</span> Gem rate under 10%</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">→</span> Iconic sets (1989 UD, 1993 SP)</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">→</span> Error variants</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">→</span> Current price under $1,000</li>
                </ul>
              </div>

              <div className="bg-red-500/5 border border-red-500/30 rounded-xl p-5">
                <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">✗</span> Avoid These
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2"><span className="text-red-400">→</span> PSA 10 population over 10,000</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">→</span> Base cards (non-rookies)</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">→</span> PSA 9 or below</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">→</span> Sets known for print defects</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">→</span> PED controversies</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">→</span> Recent spikes over 200%</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Find Your Own Hidden Gems</h3>
            <p className="text-purple-200 mb-6">
              Use Slugger's population data to identify undervalued PSA 10s with low populations and high gem difficulty.
            </p>
            <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Browse Junk Wax Cards
            </button>
            <p className="text-purple-300 text-sm mt-4">PSA pop data • Price alerts included</p>
          </div>
        </article>
      </div>
    </div>
  )
}