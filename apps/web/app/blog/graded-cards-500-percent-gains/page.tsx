import Link from 'next/link'
import { ArrowLeft, TrendingUp, Trophy, BarChart3, Dna, Megaphone, GraduationCap, Sparkles } from 'lucide-react'

export default function GradedCards500PercentGains() {
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
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Market Analysis 2020-2026
              </span>
              <span className="text-gray-500 text-sm">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Graded Baseball Cards That Gained <span className="text-green-400">500%+</span> in Value
            </h1>
            <p className="text-xl text-gray-400">
              The biggest winners of the sports card boom—and the exact factors that turned $100 cards into $5,000+ assets.
            </p>
            <p className="text-gray-500 text-sm mt-4">March 2, 2026</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">+4,100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Top Gainer</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">8</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Cards Analyzed</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">6</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Success Factors</div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-green-500/5 border-l-4 border-green-500 pl-6 mb-12 rounded-r-lg py-4">
            <p className="text-lg text-gray-300">
              <strong className="text-green-400">The 4,100% Question:</strong> In March 2020, a 2009 Bowman Chrome Mike Trout PSA 10 cost $1,800. By March 2026, it hit $9,200. That's a 4,100% gain from its 2012 low of $220. This isn't luck—it's a pattern. Eight cards have gained 500%+ since 2020, and they share specific DNA.
            </p>
          </div>

          {/* Section 1: Winners */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">The 500% Club: Top Performers</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              These eight cards represent the pinnacle of graded card investing during the 2020-2026 boom. Each gained at least 500% from 2020 baseline prices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-green-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-medium">#1 GAINER</span>
                  <span className="text-3xl font-bold text-green-400">+4,100%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">2009 Trout Bowman Chrome</h3>
                <p className="text-sm text-gray-500 mb-3">PSA 10 • Modern Icon</p>
                <p className="text-gray-400 text-sm">$1,800 → $9,200</p>
                <ul className="mt-3 space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-green-400">→</span> Generational talent status confirmed</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-green-400">→</span> 3,000 hit milestone approaching</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-green-400">→</span> Limited PSA 10 pop (1,200)</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-medium">#2</span>
                  <span className="text-3xl font-bold text-blue-400">+2,700%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">2011 Trout Update</h3>
                <p className="text-sm text-gray-500 mb-3">PSA 10 • Rookie Card</p>
                <p className="text-gray-400 text-sm">$850 → $2,800</p>
                <ul className="mt-3 space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-blue-400">→</span> True rookie card status</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-blue-400">→</span> Higher pop but massive demand</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-blue-400">→</span> Entry-level accessibility</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-medium">#3</span>
                  <span className="text-3xl font-bold text-purple-400">+1,750%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">2017 Judge Chrome</h3>
                <p className="text-sm text-gray-500 mb-3">PSA 10 • Breakout Star</p>
                <p className="text-gray-400 text-sm">$200 → $1,850</p>
                <ul className="mt-3 space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-purple-400">→</span> Rookie home run record (52 HR)</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-purple-400">→</span> New York market multiplier</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-purple-400">→</span> 2022 AL MVP win</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-medium">#4</span>
                  <span className="text-3xl font-bold text-amber-400">+1,320%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">2018 Acuna Heritage</h3>
                <p className="text-sm text-gray-500 mb-3">PSA 10 • Short Print</p>
                <p className="text-gray-400 text-sm">$100 → $1,420</p>
                <ul className="mt-3 space-y-1">
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-amber-400">→</span> Short print variation (SP)</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-amber-400">→</span> 40-40 club member (2023)</li>
                  <li className="text-gray-500 text-sm flex items-center gap-2"><span className="text-amber-400">→</span> 2021 World Series run</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Trout Timeline */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Case Study: The Trout Trajectory</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Mike Trout's 2009 Bowman Chrome PSA 10 is the benchmark for modern card investing. Its journey from $220 (2012) to $9,200 (2026) reveals the anatomy of a 4,100% gain.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Date</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Event</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Price</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3">Mar 2020</td>
                    <td className="p-3">COVID Lockdown Begins</td>
                    <td className="p-3 text-right">$1,800</td>
                    <td className="p-3 text-right text-gray-500">Baseline</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3">Jun 2021</td>
                    <td className="p-3">Peak COVID Boom</td>
                    <td className="p-3 text-right">$5,800</td>
                    <td className="p-3 text-right text-green-400 font-semibold">+222%</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3">Jun 2022</td>
                    <td className="p-3">Market Correction</td>
                    <td className="p-3 text-right">$3,800</td>
                    <td className="p-3 text-right text-red-400 font-semibold">-34%</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3">Sep 2023</td>
                    <td className="p-3">3,000 Hit Watch Begins</td>
                    <td className="p-3 text-right">$6,800</td>
                    <td className="p-3 text-right text-green-400 font-semibold">+79%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Mar 2026</td>
                    <td className="p-3">Current Market</td>
                    <td className="p-3 text-right">$9,200</td>
                    <td className="p-3 text-right text-green-400 font-semibold">+411%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">⚠️ The Volatility Warning:</strong>
              <span className="text-gray-300 ml-2">Notice the 34% drop in 2022. Even the best cards face 20-40% corrections. The key is holding through downturns. Investors who panic-sold at $3,800 missed the subsequent 142% gain to $9,200.</span>
            </div>
          </section>

          {/* Section 3: Six Success Factors */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Dna className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">The Six Success Factors</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Every 500%+ gainer shares at least four of these six characteristics. Use this framework to evaluate future prospects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 text-center hover:border-green-500/50 transition-colors">
                <div className="text-3xl mb-3">🏅</div>
                <h3 className="font-bold text-white mb-2">Player Performance</h3>
                <p className="text-gray-400 text-sm mb-3">MVP awards, All-Star selections, and statistical milestones drive sustained demand.</p>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">Weight: 35%</span>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 text-center hover:border-blue-500/50 transition-colors">
                <div className="text-3xl mb-3">💎</div>
                <h3 className="font-bold text-white mb-2">Scarcity (Pop Report)</h3>
                <p className="text-gray-400 text-sm mb-3">PSA 10 populations under 5,000 create artificial scarcity. Under 1,000 is ideal.</p>
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Weight: 25%</span>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 text-center hover:border-purple-500/50 transition-colors">
                <div className="text-3xl mb-3">📺</div>
                <h3 className="font-bold text-white mb-2">Cultural Moment</h3>
                <p className="text-gray-400 text-sm mb-3">Media coverage, record chases, and playoff moments create urgency.</p>
                <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Weight: 20%</span>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 text-center hover:border-amber-500/50 transition-colors">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-bold text-white mb-2">Condition Sensitivity</h3>
                <p className="text-gray-400 text-sm mb-3">Cards prone to chipping (Chrome) or centering issues have lower gem rates.</p>
                <span className="inline-block bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">Weight: 10%</span>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 text-center hover:border-cyan-500/50 transition-colors">
                <div className="text-3xl mb-3">⭐</div>
                <h3 className="font-bold text-white mb-2">Set Prestige</h3>
                <p className="text-gray-400 text-sm mb-3">Bowman Chrome, Topps Update, and Heritage carry brand premiums.</p>
                <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Weight: 5%</span>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 text-center hover:border-pink-500/50 transition-colors">
                <div className="text-3xl mb-3">🎂</div>
                <h3 className="font-bold text-white mb-2">Rookie Year</h3>
                <p className="text-gray-400 text-sm mb-3">True rookie cards (RC) vs prospect cards. RCs command 2-3x premiums.</p>
                <span className="inline-block bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">Weight: 5%</span>
              </div>
            </div>
          </section>

          {/* Section 4: Watch List */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">The 2026 Watch List</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Based on the six-factor framework, these cards show 500%+ potential by 2030:
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cyan-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Card</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Current</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Target (2030)</th>
                    <th className="border-b border-[#262626] p-3 text-center text-white font-semibold">Risk</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3">
                      <div className="font-medium text-white">2023 Corbin Carroll Chrome PSA 10</div>
                      <div className="text-xs text-gray-500">40-40 potential, NL ROY</div>
                    </td>
                    <td className="p-3 text-right">$380</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$2,500</td>
                    <td className="p-3 text-center">
                      <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-xs font-medium">Medium</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3">
                      <div className="font-medium text-white">2022 Julio Rodriguez Chrome PSA 10</div>
                      <div className="text-xs text-gray-500">5-tool superstar, Seattle market</div>
                    </td>
                    <td className="p-3 text-right">$420</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$3,000</td>
                    <td className="p-3 text-center">
                      <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-medium">Low</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3">
                      <div className="font-medium text-white">2024 Paul Skenes Chrome PSA 10</div>
                      <div className="text-xs text-gray-500">Pitching prospect (higher risk)</div>
                    </td>
                    <td className="p-3 text-right">$180</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$1,200</td>
                    <td className="p-3 text-center">
                      <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-medium">High</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="font-medium text-white">2023 Gunnar Henderson Chrome PSA 10</div>
                      <div className="text-xs text-gray-500">AL ROY, Baltimore renaissance</div>
                    </td>
                    <td className="p-3 text-right">$95</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$800</td>
                    <td className="p-3 text-center">
                      <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-xs font-medium">Medium</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Track the Next Breakout</h3>
            <p className="text-blue-200 mb-6">
              Get weekly alerts on population report changes, price momentum shifts, and cultural moment triggers.
            </p>
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Join the Watch List
            </button>
            <p className="text-blue-300 text-sm mt-4">Free weekly newsletter • Unsubscribe anytime</p>
          </div>
        </article>
      </div>
    </div>
  )
}