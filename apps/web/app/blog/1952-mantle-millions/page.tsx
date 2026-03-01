import Link from 'next/link'
import { ArrowLeft, TrendingUp, DollarSign, Award, Scale, Sparkles, Trophy } from 'lucide-react'

export default function MantleMillions() {
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
              <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-full flex items-center gap-1">
                <Award className="h-3 w-3" />
                The Holy Grail of Cards
              </span>
              <span className="text-gray-500 text-sm">18 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why the 1952 Topps Mickey Mantle <span className="text-amber-400">Commands Millions</span>
            </h1>
            <p className="text-xl text-gray-400">
              The anatomy of a $12.6 million baseball card. From a 25-cent pack pull to the most valuable sports card in history.
            </p>
            <p className="text-gray-500 text-sm mt-4">March 2, 2026</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">$12.6M</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Record Sale (2022)</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400">3</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">PSA 10s Exist</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">360,000x</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Return Since 1952</div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-red-500/5 border-l-4 border-red-500 pl-6 mb-12 rounded-r-lg py-4">
            <p className="text-lg text-gray-300">
              <strong className="text-red-400">The $12.6 Million Question:</strong> In August 2022, a 1952 Topps Mickey Mantle PSA 10 sold for $12.6 million, shattering the record for most valuable sports card ever sold. But why this card? Why not the T206 Wagner, or a 1914 Baltimore News Babe Ruth? The answer lies in a unique convergence of six factors that created the perfect investment storm.
            </p>
          </div>

          {/* Section 1: Price Landscape */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">The Price Landscape: By The Numbers</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The 1952 Mantle exists on a pricing spectrum that defies conventional collectibles logic. While a PSA 1 (Poor) costs $45,000, a PSA 10 (Gem Mint) commands $12.6 million—a 280x multiplier for nine grade points.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Grade</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">2026 Price</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Population</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">% of Total</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">PSA 1 (Poor)</td>
                    <td className="p-3 text-right text-red-400 font-semibold">$45,000</td>
                    <td className="p-3 text-right">325</td>
                    <td className="p-3 text-right">45.2%</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">PSA 4 (VG-EX)</td>
                    <td className="p-3 text-right text-red-400 font-semibold">$220,000</td>
                    <td className="p-3 text-right">124</td>
                    <td className="p-3 text-right">17.2%</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">PSA 6 (EX-MT)</td>
                    <td className="p-3 text-right text-red-400 font-semibold">$650,000</td>
                    <td className="p-3 text-right">76</td>
                    <td className="p-3 text-right">10.6%</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">PSA 8 (NM-MT)</td>
                    <td className="p-3 text-right text-red-400 font-semibold">$1.8M</td>
                    <td className="p-3 text-right">32</td>
                    <td className="p-3 text-right">4.4%</td>
                  </tr>
                  <tr className="border-b border-[#262626] bg-red-500/5">
                    <td className="p-3 font-medium text-white">PSA 9 (Mint)</td>
                    <td className="p-3 text-right text-red-400 font-semibold">$3.2M</td>
                    <td className="p-3 text-right">8</td>
                    <td className="p-3 text-right">1.1%</td>
                  </tr>
                  <tr className="bg-red-500/10">
                    <td className="p-3 font-medium text-red-400">PSA 10 (Gem Mint)</td>
                    <td className="p-3 text-right text-amber-400 font-bold">$12.6M</td>
                    <td className="p-3 text-right font-bold">3</td>
                    <td className="p-3 text-right font-bold">0.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
              <div className="text-6xl font-bold text-red-400 mb-2">3</div>
              <div className="text-lg font-semibold text-white mb-2">PSA 10s Exist in the World</div>
              <p className="text-gray-400 text-sm">Of 1,759 total 1952 Mantle cards graded by PSA, only 3 achieved Gem Mint 10 status. That's a 0.17% gem rate—compared to 15-20% for modern cards.</p>
            </div>
          </section>

          {/* Section 2: Historical Journey */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">40-Year Price Journey</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The Mantle's price history reads like a masterclass in alternative asset appreciation. Unlike stocks, which compound steadily, the Mantle experienced step-function jumps driven by cultural moments.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-24 text-right text-amber-400 font-bold">1985</div>
                <div className="flex-1 bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                  <div className="text-xl font-bold text-white mb-1">$3,500</div>
                  <p className="text-gray-400 text-sm">The hobby boom begins. Baby boomers with disposable income start collecting childhood memories.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-right text-amber-400 font-bold">1995</div>
                <div className="flex-1 bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                  <div className="text-xl font-bold text-white mb-1">$12,000</div>
                  <p className="text-gray-400 text-sm">First major auction houses (Christie's, Sotheby's) enter the sports card market.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-right text-amber-400 font-bold">2005</div>
                <div className="flex-1 bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                  <div className="text-xl font-bold text-white mb-1">$95,000</div>
                  <p className="text-gray-400 text-sm">ESPN documentaries and retro culture drive nostalgia. PSA grading standardizes condition.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-right text-amber-400 font-bold">2018</div>
                <div className="flex-1 bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                  <div className="text-xl font-bold text-white mb-1">$2.88 Million</div>
                  <p className="text-gray-400 text-sm">First PSA 10 sale shatters records. Wealthy collectors enter as "passion investments."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-right text-amber-400 font-bold">2022</div>
                <div className="flex-1 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="text-xl font-bold text-amber-400 mb-1">$12.6 Million</div>
                  <p className="text-gray-400 text-sm">Anthony Giordano's sale to anonymous buyer sets all-time record. Crypto wealth meets tangible assets.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Six Factors */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">The Six Success Factors</h2>
            </div>
            
            <p className="text-gray-400 mb-6">Every aspect of the 1952 Mantle contributes to its premium:</p>

            <div className="space-y-4">
              <div className="bg-[#1a1a1a] border-l-4 border-red-500 rounded-r-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">1. Extreme Scarcity</h3>
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">30% Impact</span>
                </div>
                <p className="text-gray-400">Only 3 PSA 10s exist. The 1952 Topps high series was released late in the season, and unsold inventory was famously dumped into the Atlantic Ocean by Topps.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-blue-500 rounded-r-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">2. Player Legacy</h3>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">25% Impact</span>
                </div>
                <p className="text-gray-400">Mantle is widely considered the greatest switch hitter in baseball history. His 536 home runs, 3 MVPs, and 7 World Series titles with the Yankees created American mythology.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-amber-500 rounded-r-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">3. Set Prestige</h3>
                  <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">20% Impact</span>
                </div>
                <p className="text-gray-400">The 1952 Topps set is the Mona Lisa of baseball cards. It was the first major color set, the first with player portraits, and established Topps' dominance.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-green-500 rounded-r-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">4. Condition Sensitivity</h3>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">10% Impact</span>
                </div>
                <p className="text-gray-400">The 1952 Topps set is notoriously difficult to grade. Centering issues, print defects, and the card's large size make PSA 10s nearly impossible.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-purple-500 rounded-r-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">5. Historical Moment</h3>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">8% Impact</span>
                </div>
                <p className="text-gray-400">1952 marked the post-war boom and the golden age of baseball. Television was bringing the game into living rooms. The Mantle represents America's pastime at its peak.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-cyan-500 rounded-r-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">6. Investment Demand</h3>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">7% Impact</span>
                </div>
                <p className="text-gray-400">Wealthy collectors view the Mantle as a store of value comparable to fine art. It's inflation-resistant, tangible, and carries cultural cachet.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Market Comparison */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Market Comparison: Mantle vs. Competition</h2>
            </div>
            
            <p className="text-gray-400 mb-6">How does the 1952 Mantle stack against other legendary cards?</p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Card</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Price</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Why It Trails Mantle</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">T206 Wagner PSA 5</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$3.75M</td>
                    <td className="p-3">More PSA 5s exist; tobacco card niche appeal</td>
                  </tr>
                  <tr className="border-b border-[#262626] bg-amber-500/5">
                    <td className="p-3 font-medium text-amber-400">1952 Mantle PSA 9</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">$3.2M</td>
                    <td className="p-3">The benchmark; 8 exist vs Wagner's 50+</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1914 Baltimore Ruth PSA 6</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$1.2M</td>
                    <td className="p-3">Minor league card; less mainstream recognition</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">1951 Bowman Mantle PSA 9</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$850K</td>
                    <td className="p-3">True rookie, but color photography less iconic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
              <strong className="text-amber-400">⚠️ The Wagner Myth:</strong>
              <span className="text-gray-300 ml-2">While the T206 Wagner is historically significant as the "Holy Grail," it has 50+ examples in various grades. The 1952 Mantle PSA 9 has only 8 examples—true scarcity that justifies comparable prices.</span>
            </div>
          </section>

          {/* Section 5: Future */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">The Future: Will the Mantle Hit $50 Million?</h2>
            </div>
            
            <p className="text-gray-400 mb-6">Extrapolating from historical growth rates, the 1952 Mantle PSA 10 could reach $25-50 million by 2035.</p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Scenario</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Annual Growth</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">2030 Price</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">2035 Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Conservative</td>
                    <td className="p-3 text-right">15%</td>
                    <td className="p-3 text-right">$25.4M</td>
                    <td className="p-3 text-right">$51.2M</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Moderate</td>
                    <td className="p-3 text-right">20%</td>
                    <td className="p-3 text-right">$31.4M</td>
                    <td className="p-3 text-right">$78.1M</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Aggressive</td>
                    <td className="p-3 text-right">25%</td>
                    <td className="p-3 text-right">$38.5M</td>
                    <td className="p-3 text-right">$117.8M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">⚠️ Counterarguments:</strong>
              <span className="text-gray-300 ml-2">Demographic risk exists: Baby boomers are aging. Will Gen Z value physical cards as much as digital assets? However, global wealth creation may offset domestic demographic shifts.</span>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Own a Piece of History</h3>
            <p className="text-red-200 mb-6">
              While PSA 10s require millions, lower-grade 1952 Mantles offer accessible entry points. Explore authenticated examples on Slugger.
            </p>
            <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Browse 1952 Mantle Listings
            </button>
            <p className="text-red-300 text-sm mt-4">PSA-certified dealers only • Authentication guarantee</p>
          </div>
        </article>
      </div>
    </div>
  )
}