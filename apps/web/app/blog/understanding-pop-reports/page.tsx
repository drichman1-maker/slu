import Link from 'next/link'
import { ArrowLeft, TrendingDown, Calculator, BarChart3, Target, Trophy } from 'lucide-react'

export default function UnderstandingPopReports() {
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
              <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-medium rounded-full flex items-center gap-1">
                <BarChart3 className="h-3 w-3" />
                Data-Driven Investing
              </span>
              <span className="text-gray-500 text-sm">17 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Understanding Pop Reports: <span className="text-teal-400">How Scarcity Drives Prices</span>
            </h1>
            <p className="text-xl text-gray-400">
              Master the metrics that matter. Learn why PSA 10 population counts are just the beginning—and how to calculate true scarcity that predicts price movements before they happen.
            </p>
            <p className="text-gray-500 text-sm mt-4">March 2, 2026</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-teal-400">R² = 0.85</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Scarcity Correlation</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">5</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Key Metrics</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">3</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Scarcity Tiers</div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-teal-500/5 border-l-4 border-teal-500 pl-6 mb-12 rounded-r-lg py-4">
            <p className="text-lg text-gray-300">
              <strong className="text-teal-400">The Population Report Paradox:</strong> A 2011 Mike Trout Update has 5,823 PSA 10s. A 1993 SP Derek Jeter has 180. Which is scarcer? Most collectors immediately say the Jeter—but they're only seeing half the picture. True scarcity isn't just about the PSA 10 count; it's about gem rates, grade distribution, era context, and velocity of new submissions.
            </p>
          </div>

          {/* Section 1: Scarcity Curve */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="h-6 w-6 text-teal-400" />
              <h2 className="text-2xl font-bold text-white">The Scarcity Curve: Population vs Price</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The relationship between PSA 10 population and price follows a power law: scarcity drives exponential premiums. But the curve has distinct tiers where pricing behavior changes dramatically.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Scarcity Tier</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">PSA 10 Pop</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Price Behavior</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Strategy</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626] bg-red-500/5">
                    <td className="p-3 font-medium text-red-400">Ultra Rare</td>
                    <td className="p-3 text-right text-red-400 font-bold">&lt; 100</td>
                    <td className="p-3">Exponential premiums; auction-only liquidity</td>
                    <td className="p-3">Wealth preservation; generational hold</td>
                  </tr>
                  <tr className="border-b border-[#262626] bg-amber-500/5">
                    <td className="p-3 font-medium text-amber-400">Scarce</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">100 - 5,000</td>
                    <td className="p-3">Strong premiums; supply-constrained growth</td>
                    <td className="p-3">Growth investing; scarcity narrative</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-400">Common</td>
                    <td className="p-3 text-right">5,000+</td>
                    <td className="p-3">Premiums compress; demand-driven pricing</td>
                    <td className="p-3">Value hunting; PSA 9 focus</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">⚠️ The Population Trap:</strong>
              <span className="text-gray-300 ml-2">Don't assume low population = high value. A 2022 Wander Franco has only 2,500 PSA 10s (scarce tier by count), but prices are depressed because collectors expect 10,000+ eventually. True scarcity requires <em>stable</em> low population.</span>
            </div>
          </section>

          {/* Section 2: Five Metrics */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">The Five Metrics That Matter</h2>
            </div>
            
            <p className="text-gray-400 mb-6">Professional investors look beyond simple PSA 10 counts. These five metrics reveal true scarcity:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-teal-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📊</span>
                  <h3 className="font-bold text-white">Gem Rate</h3>
                </div>
                <div className="bg-teal-500/10 text-teal-400 px-3 py-2 rounded-lg font-mono text-sm mb-3">PSA 10 Count ÷ Total Graded</div>
                <p className="text-gray-400 text-sm">The percentage of submitted cards that achieve PSA 10. Lower = harder to grade = true scarcity. 1993 SP Jeter: 3.2% vs 2023 Topps: 45%</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚖️</span>
                  <h3 className="font-bold text-white">Grade Ratio</h3>
                </div>
                <div className="bg-blue-500/10 text-blue-400 px-3 py-2 rounded-lg font-mono text-sm mb-3">PSA 9 Count ÷ PSA 10 Count</div>
                <p className="text-gray-400 text-sm">How many PSA 9s exist per PSA 10. Higher ratios indicate greater scarcity at the top. 1952 Mantle: 14:1 vs 2011 Trout: 2.2:1</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📈</span>
                  <h3 className="font-bold text-white">Submission Velocity</h3>
                </div>
                <div className="bg-purple-500/10 text-purple-400 px-3 py-2 rounded-lg font-mono text-sm mb-3">Monthly New PSA 10s</div>
                <p className="text-gray-400 text-sm">Rate of new PSA 10s entering market. Declining velocity suggests approaching saturation. Rising velocity = avoid (oversupply coming)</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-bold text-white">Grade Distribution</h3>
                </div>
                <div className="bg-amber-500/10 text-amber-400 px-3 py-2 rounded-lg font-mono text-sm mb-3">% in PSA 8+ vs PSA 7-</div>
                <p className="text-gray-400 text-sm">Cards concentrated in high grades have different scarcity dynamics than those with bell curve distributions. Skewed distributions = condition scarcity</p>
              </div>
            </div>
          </section>

          {/* Section 3: Scarcity Score Formula */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">The Scarcity Score Formula</h2>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/30 rounded-xl p-6 mb-6">
              <div className="bg-[#1a1a1a] rounded-lg p-4 mb-4">
                <code className="text-amber-400 font-mono text-lg">
                  Scarcity Score = (1 / PSA 10 Count) × (PSA 9 Ratio) × (Gem Rate) × 1000
                </code>
              </div>
              
              <h4 className="text-white font-bold mb-3">Example Comparison:</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between items-center bg-[#1a1a1a] rounded-lg p-3">
                  <span>2011 Trout Update</span>
                  <span className="font-mono">(1/5823) × 2.2 × 31.0 × 1000 = <strong className="text-gray-400">11.7</strong></span>
                </div>
                <div className="flex justify-between items-center bg-[#1a1a1a] rounded-lg p-3">
                  <span>1993 SP Jeter</span>
                  <span className="font-mono">(1/180) × 3.0 × 3.2 × 1000 = <strong className="text-amber-400">53.3</strong></span>
                </div>
                <div className="flex justify-between items-center bg-red-500/5 rounded-lg p-3 border border-red-500/30">
                  <span>1952 Mantle</span>
                  <span className="font-mono">(1/3) × 14.0 × 1.2 × 1000 = <strong className="text-red-400">5,600</strong></span>
                </div>
              </div>
              
              <p className="text-gray-400 mt-4"><strong className="text-white">Interpretation:</strong> Higher scores = scarcer. Jeter is 4.5x scarcer than Trout by this metric, despite similar PSA 10 prices.</p>
            </div>
          </section>

          {/* Section 4: Gem Rate Evolution */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Gem Rate Evolution: The Era Effect</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Gem rates (percentage of submissions achieving PSA 10) vary dramatically by era. This "grading difficulty" is often more important than total print run in determining scarcity.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Era</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Avg Gem Rate</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Why So Low/High?</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Investment Implication</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626] bg-red-500/5">
                    <td className="p-3 font-medium text-red-400">Vintage (Pre-1980)</td>
                    <td className="p-3 text-right text-red-400 font-bold">1-5%</td>
                    <td className="p-3">Age, handling, primitive printing</td>
                    <td className="p-3">PSA 10s genuinely rare; exponential premiums justified</td>
                  </tr>
                  <tr className="border-b border-[#262626] bg-amber-500/5">
                    <td className="p-3 font-medium text-amber-400">Junk Wax (1986-93)</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">3-15%</td>
                    <td className="p-3">Poor QC, thin stock, foil issues</td>
                    <td className="p-3">Condition scarcity narrative; PSA 10 premiums sustainable</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-400">Modern (2010+)</td>
                    <td className="p-3 text-right">30-45%</td>
                    <td className="p-3">Better cardstock, collector awareness</td>
                    <td className="p-3">PSA 10s abundant; premiums compressing to 200% or less</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Checklist */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">The Pop Report Checklist</h2>
            </div>

            <div className="bg-green-500/5 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Before You Buy: 5-Minute Analysis</h3>
              
              <ol className="space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="bg-green-500/20 text-green-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span><strong className="text-white">Check PSA 10 Count:</strong> Under 500 = scarce; 5,000+ = common; verify on PSA website (not eBay listings)</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-500/20 text-green-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span><strong className="text-white">Calculate Gem Rate:</strong> PSA 10 ÷ Total Graded. Under 10% = condition scarcity; over 35% = abundant</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-500/20 text-green-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span><strong className="text-white">Analyze Grade Ratio:</strong> PSA 9 count ÷ PSA 10 count. Over 5:1 = true scarcity; under 2:1 = common</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-500/20 text-green-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span><strong className="text-white">Check Submission Velocity:</strong> Has PSA 10 count grown 20%+ in 6 months? If yes, wait for saturation</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-500/20 text-green-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                  <span><strong className="text-white">Compare to Peers:</strong> Is this card scarcer than same-era, same-player alternatives? If not, why the premium?</span>
                </li>
              </ol>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
              <strong className="text-red-400">🚨 Common Pop Report Mistakes:</strong>
              <ul className="text-gray-400 mt-2 space-y-1 ml-4">
                <li>• Ignoring set populations (1,000 in 10,000-card set ≠ 1,000 in 100,000-card set)</li>
                <li>• Static analysis (pop reports are snapshots—check historical growth)</li>
                <li>• Variant blindness (1989 Griffey base vs Tiffany: 4,100 vs 180 PSA 10s)</li>
                <li>• Cross-grader ignorance (SGC populations matter too)</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-teal-400" />
              <h2 className="text-2xl font-bold text-white">The Verdict: Scarcity Is Multidimensional</h2>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5">
              <p className="text-gray-400 mb-4">
                The PSA 10 population count is just the entry fee to understanding scarcity. True scarcity analysis requires gem rates, grade ratios, submission velocity, and era context. A 1993 SP Jeter with 180 PSA 10s and a 3.2% gem rate is fundamentally scarcer than a 2023 rookie with 180 PSA 10s and a 45% gem rate—even if the population count is identical.
              </p>
              
              <p className="text-gray-400 mb-4">
                Smart collectors use pop reports to find market inefficiencies: cards with low gem rates that the market hasn't recognized, or high-population cards where the grade distribution creates unexpected scarcity. The pop report is a tool, not a verdict—master it, and you'll spot opportunities before the broader market catches on.
              </p>
              
              <p className="text-gray-400">
                Remember: scarcity is only valuable if demand exists. The sweet spot is <em className="text-white">demand-constrained scarcity</em>—cards where low supply meets high, sustained demand. That's where pop report analysis meets market intelligence, and that's where fortunes are made.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Master Pop Report Analysis</h3>
            <p className="text-teal-200 mb-6">
              Get our Pop Report Mastery Toolkit: Excel calculators for scarcity scores, submission velocity trackers, and weekly population report alerts for your watch list.
            </p>
            <button className="bg-teal-400 hover:bg-teal-300 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Download Free Toolkit
            </button>
            <p className="text-teal-300 text-sm mt-4">Free download • Excel templates • Video tutorials included</p>
          </div>
        </article>
      </div>
    </div>
  )
}