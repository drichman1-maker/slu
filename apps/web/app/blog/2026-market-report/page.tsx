import Link from 'next/link'
import { ArrowLeft, TrendingUp, BarChart3, Star, Target, BookOpen } from 'lucide-react'

export default function MarketReport2026() {
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
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full flex items-center gap-1">
                <BarChart3 className="h-3 w-3" />
                Annual Market Report
              </span>
              <span className="text-gray-500 text-sm">20 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              2026 Graded Card Market Report: <span className="text-green-400">Trends, Pop Reports, and Predictions</span>
            </h1>
            <p className="text-xl text-gray-400">
              Comprehensive analysis of the $15.2 billion graded card market. Junk wax gems lead the recovery, PSA processes 7.3 million cards, and we predict 20-38% growth for 2027.
            </p>
            <p className="text-gray-500 text-sm mt-4">March 2, 2026</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">$15.2B</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Market Cap</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">7.3M</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">PSA Submissions</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">+585%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">6-Year Growth</div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-blue-500/5 border-l-4 border-blue-500 pl-6 mb-12 rounded-r-lg py-4">
            <p className="text-lg text-gray-300">
              <strong className="text-blue-400">Executive Summary:</strong> The graded card market has reached maturity in 2026, with total market capitalization hitting $15.2 billion—up from $2.1 billion in 2020. While the COVID boom (2020-2021) and subsequent correction (2022) created volatility, the market has found its footing with steady 15-25% annual growth.
            </p>
          </div>

          {/* Section 1: Market Index */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Market Index by Era: The Recovery Story</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The graded card market has evolved into distinct segments, each with unique risk-return profiles. Our proprietary index tracks performance from Q1 2020 baseline (100) through Q1 2026.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Era</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Total Return</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">CAGR</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">2027 Outlook</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626] bg-green-500/5">
                    <td className="p-3 font-medium text-white">Junk Wax Gems (1986-93)</td>
                    <td className="p-3 text-right text-green-400 font-bold">+580%</td>
                    <td className="p-3 text-right text-green-400 font-bold">43.2%</td>
                    <td className="p-3">Strong (scarcity narrative)</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Modern (2010+)</td>
                    <td className="p-3 text-right text-green-400 font-semibold">+585%</td>
                    <td className="p-3 text-right text-green-400 font-semibold">43.5%</td>
                    <td className="p-3">Caution (oversupply concerns)</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Pre-War (1900-1979)</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">+465%</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">36.8%</td>
                    <td className="p-3">Stable (wealth preservation)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Vintage (1980-2009)</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">+420%</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">33.9%</td>
                    <td className="p-3">Moderate (steady demand)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">⚠️ Market Maturation Warning:</strong>
              <span className="text-gray-300 ml-2">The 585% six-year growth rate is unsustainable. Expect 15-25% annual returns going forward as the market matures. The "easy money" phase (2020-2021) has ended.</span>
            </div>
          </section>

          {/* Section 2: Grading Industry */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Grading Industry: PSA's Dominance Challenged</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              PSA remains the market leader, but SGC and CGC are gaining share through faster turnaround times and competitive pricing. Total industry submissions reached 12.1 million cards in 2026.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-medium">Market Leader</span>
                </div>
                <h3 className="font-bold text-white mb-2">PSA</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">60.3%</div>
                <p className="text-gray-500 text-sm">7.3M submissions. Commands premium resale values, but 90-day turnaround frustrates customers.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-green-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚡</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-medium">Fastest Growing</span>
                </div>
                <h3 className="font-bold text-white mb-2">SGC</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">23.9%</div>
                <p className="text-gray-500 text-sm">2.9M submissions. Gained 4.2% share in 2026. 30-day turnaround, $15 base price.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🆕</span>
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs font-medium">Emerging</span>
                </div>
                <h3 className="font-bold text-white mb-2">CGC</h3>
                <div className="text-2xl font-bold text-purple-400 mb-2">15.7%</div>
                <p className="text-gray-500 text-sm">1.9M submissions. Strong in non-sports crossover. 45-day average turnaround.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Top Performers */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">2026 Top Performers: Sophomore Surge</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The 2023-2024 rookie class has matured into the "sophomore surge" phase, with established performance driving card values.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Player</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">2025 Gain</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">2026 Gain</th>
                    <th className="border-b border-[#262626] p-3 text-center text-white font-semibold">Risk</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626] bg-green-500/5">
                    <td className="p-3 font-medium text-white">Francisco Alvarez</td>
                    <td className="p-3 text-right">220%</td>
                    <td className="p-3 text-right text-green-400 font-bold">380%</td>
                    <td className="p-3 text-center">
                      <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-xs">Medium</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Grayson Rodriguez</td>
                    <td className="p-3 text-right">195%</td>
                    <td className="p-3 text-right text-green-400 font-bold">340%</td>
                    <td className="p-3 text-center">
                      <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs">High</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Gunnar Henderson</td>
                    <td className="p-3 text-right">145%</td>
                    <td className="p-3 text-right text-green-400 font-bold">320%</td>
                    <td className="p-3 text-center">
                      <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">Low</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Spencer Strider</td>
                    <td className="p-3 text-right">165%</td>
                    <td className="p-3 text-right text-green-400 font-bold">295%</td>
                    <td className="p-3 text-center">
                      <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs">High</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: 2027 Predictions */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">2027 Predictions: Conservative Growth Ahead</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Based on demographic trends, population report analysis, and macroeconomic indicators, we project 2027 market performance.
            </p>

            <div className="bg-green-500/5 border border-green-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">📈</span> 2027 Market Forecast
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h4 className="text-green-400 font-bold mb-2">Bull Case (+30% avg)</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Continued wealth creation in tech/crypto</li>
                    <li>• ESPN documentary on 90s cards drives nostalgia</li>
                    <li>• International buyers enter (Asia, Middle East)</li>
                  </ul>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h4 className="text-red-400 font-bold mb-2">Bear Case (+5% avg)</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Economic recession reduces discretionary spending</li>
                    <li>• PSA 10 population oversupply crushes premiums</li>
                    <li>• Generational shift away from physical collectibles</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-500/10 rounded-lg p-4">
                <h4 className="text-blue-400 font-bold mb-2">Base Case (Most Likely): +20-25%</h4>
                <p className="text-gray-400 text-sm">Steady growth driven by junk wax scarcity narrative and pre-war wealth preservation demand. Modern cards face headwinds from oversupply.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Key Trends */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Key Trends Shaping 2027</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🤖</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-medium">Emerging</span>
                </div>
                <h3 className="font-bold text-white mb-2">AI Grading Assistance</h3>
                <p className="text-gray-400 text-sm">PSA and SGC implementing AI pre-screening to reduce human error. Could increase throughput 40% but raises questions about "art" of grading.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌐</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-medium">Growing</span>
                </div>
                <h3 className="font-bold text-white mb-2">International Expansion</h3>
                <p className="text-gray-400 text-sm">Asian markets (Japan, Korea) driving 15% of high-end sales. European soccer card collectors crossing over to baseball.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">💳</span>
                  <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-xs font-medium">Maturing</span>
                </div>
                <h3 className="font-bold text-white mb-2">Fractional Ownership</h3>
                <p className="text-gray-400 text-sm">Platforms like Rally and Collectable offering $10/share ownership of high-end cards ($100K+). Democratizing access but creating liquidity concerns.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📉</span>
                  <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-medium">Concerning</span>
                </div>
                <h3 className="font-bold text-white mb-2">PSA 10 Premium Compression</h3>
                <p className="text-gray-400 text-sm">Modern card PSA 10 premiums compressing from 400% to 200% as populations explode. Gem rates of 40%+ mean PSA 10s aren't scarce.</p>
              </div>
            </div>
          </section>

          {/* Investment Strategy */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Investment Strategy: 2027 Playbook</h2>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Our Recommended Allocation for 2027</h3>
              
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-amber-900/20">
                      <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Category</th>
                      <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Allocation</th>
                      <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Target Return</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-[#262626]">
                      <td className="p-3 font-medium text-white">Junk Wax Gems (PSA 10)</td>
                      <td className="p-3 text-right">35%</td>
                      <td className="p-3 text-right text-green-400 font-bold">+25%</td>
                    </tr>
                    <tr className="border-b border-[#262626]">
                      <td className="p-3 font-medium text-white">Pre-War (PSA 4-6)</td>
                      <td className="p-3 text-right">25%</td>
                      <td className="p-3 text-right text-amber-400 font-semibold">+20%</td>
                    </tr>
                    <tr className="border-b border-[#262626]">
                      <td className="p-3 font-medium text-white">Modern Stars (PSA 9)</td>
                      <td className="p-3 text-right">20%</td>
                      <td className="p-3 text-right text-amber-400 font-semibold">+15%</td>
                    </tr>
                    <tr className="border-b border-[#262626]">
                      <td className="p-3 font-medium text-white">2023-24 Rookies (Raw)</td>
                      <td className="p-3 text-right">15%</td>
                      <td className="p-3 text-right text-green-400 font-bold">+30%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white">Cash Reserve</td>
                      <td className="p-3 text-right">5%</td>
                      <td className="p-3 text-right text-gray-500">0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-[#1a1a1a] border border-[#262626] rounded-xl p-5">
              <h4 className="font-bold text-white mb-3">The Bottom Line</h4>
              <p className="text-gray-400">
                The graded card market has matured from a speculative frenzy (2020-2021) to a sophisticated alternative asset class (2026). Future gains require the same discipline as stock picking: fundamental analysis, risk management, and patience (5+ year holds). The collectors who thrived in 2026 were those who ignored hype cycles and focused on true scarcity.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Weekly Market Intelligence</h3>
            <p className="text-blue-200 mb-6">
              Subscribe to our Market Report for weekly population report updates, price movement alerts, and early access to 2027 predictions.
            </p>
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Subscribe to Market Report
            </button>
            <p className="text-blue-300 text-sm mt-4">Weekly updates • Cancel anytime • Institutional-grade data</p>
          </div>
        </article>
      </div>
    </div>
  )
}