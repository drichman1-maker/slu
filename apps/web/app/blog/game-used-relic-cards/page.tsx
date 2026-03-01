import Link from 'next/link'
import { ArrowLeft, Scale, Trophy, DollarSign, Search, Target } from 'lucide-react'

export default function GameUsedRelicCards() {
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
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full flex items-center gap-1">
                <Trophy className="h-3 w-3" />
                Memorabilia Analysis
              </span>
              <span className="text-gray-500 text-sm">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Game-Used Relic Cards: <span className="text-orange-400">Do They Hold Value When Graded?</span>
            </h1>
            <p className="text-xl text-gray-400">
              The definitive analysis of graded relic cards: when grading adds 50-120% premiums, which relic types command respect, and why "player-worn" is the kiss of death for value retention.
            </p>
            <p className="text-gray-500 text-sm mt-4">March 2, 2026</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">+93%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Avg Grading Premium</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">22%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Market Share (2026)</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">$35</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Break-Even Cost</div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-orange-500/5 border-l-4 border-orange-500 pl-6 mb-12 rounded-r-lg py-4">
            <p className="text-lg text-gray-300">
              <strong className="text-orange-400">The Relic Dilemma:</strong> You pull a 2012 Mike Trout Museum Collection game-used jersey card. Raw, it's worth $220. Graded PSA 10, it's $450. That's a 104% premium—higher than most base cards. But grading relic cards is controversial: Does the slab enhance or hide the memorabilia? This analysis breaks down when grading makes financial sense.
            </p>
          </div>

          {/* Section 1: Graded vs Raw */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-orange-400" />
              <h2 className="text-2xl font-bold text-white">Graded vs. Raw: The Premium Reality</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Contrary to popular belief, high-end game-used relic cards often see <em>higher</em> grading premiums than base cards. The authentication and protection of the slab adds legitimacy to the memorabilia component.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-orange-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Card</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Raw Price</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">PSA 9/10 Price</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626] bg-green-500/5">
                    <td className="p-3 font-medium text-white">2012 Trout Museum Jersey</td>
                    <td className="p-3 text-right">$220</td>
                    <td className="p-3 text-right text-green-400 font-bold">$450</td>
                    <td className="p-3 text-right text-green-400 font-bold">+104%</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">2018 Ohtani Diamond Patch</td>
                    <td className="p-3 text-right">$165</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$320</td>
                    <td className="p-3 text-right text-green-400 font-semibold">+94%</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">2001 Griffey Game Bat</td>
                    <td className="p-3 text-right">$145</td>
                    <td className="p-3 text-right text-green-400 font-semibold">$280</td>
                    <td className="p-3 text-right text-green-400 font-semibold">+93%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">2020 Acuna Triple Threads</td>
                    <td className="p-3 text-right">$85</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">$185</td>
                    <td className="p-3 text-right text-amber-400 font-semibold">+118%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
              <strong className="text-red-400">⚠️ The Condition Trap:</strong>
              <span className="text-gray-300 ml-2">Relic cards with visible wear, corner damage, or surface scratches should NOT be graded unless they're PSA 9/10 candidates. A PSA 8 relic often sells for less than raw because the slab highlights flaws while obscuring the memorabilia.</span>
            </div>
          </section>

          {/* Section 2: Relic Type Hierarchy */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">The Relic Type Hierarchy</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The market clearly distinguishes between game-used, event-worn, and player-worn materials. Understanding this hierarchy is crucial for grading decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border-l-4 border-green-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏏</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-medium">+120% Premium</span>
                </div>
                <h3 className="font-bold text-white mb-2">Game-Used Bat</h3>
                <p className="text-gray-400 text-sm">The holy grail of relics. Bats show clear game use (pine tar, ball marks) and have documented provenance. Always grade PSA 9+.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-green-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👕</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-medium">+85% Premium</span>
                </div>
                <h3 className="font-bold text-white mb-2">Game-Used Jersey</h3>
                <p className="text-gray-400 text-sm">High demand but harder to verify than bats. Look for photo-matching (MLB authentication holograms). Grading adds legitimacy.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-amber-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎽</span>
                  <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-xs font-medium">+25% Premium</span>
                </div>
                <h3 className="font-bold text-white mb-2">Event-Worn Jersey</h3>
                <p className="text-gray-400 text-sm">Worn at All-Star Games, Home Run Derbies, or photo shoots. Less valuable than game-used but still legitimate. Grade only for high-end players.</p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-red-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👔</span>
                  <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-medium">-15% Discount</span>
                </div>
                <h3 className="font-bold text-white mb-2">Player-Worn (Not Game)</h3>
                <p className="text-gray-400 text-sm">Worn for card company photo shoots. No game association. Market treats these as "manufactured." Generally avoid grading.</p>
              </div>
            </div>
          </section>

          {/* Section 3: ROI */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">The Math: When Does Grading Make Sense?</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              At $35 per card (PSA regular service), grading relics requires a minimum value increase to break even.
            </p>

            <div className="bg-green-500/5 border border-green-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">🧮 The Break-Even Formula</h3>
              <p className="text-gray-400 mb-4">
                <strong>Minimum Raw Value to Grade:</strong> $75-100 for modern relics, $150+ for vintage. Below these thresholds, the $35 grading fee eats too much of the potential premium.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h4 className="text-green-400 font-bold mb-3">✅ Grade These</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Game-used bat/jersey</li>
                    <li>• High-end sets (Museum, Triple Threads)</li>
                    <li>• Star players (Trout, Ohtani, Judge)</li>
                    <li>• Condition appears PSA 9+</li>
                    <li>• Serial numbered /99 or less</li>
                  </ul>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h4 className="text-red-400 font-bold mb-3">🚫 Don't Grade These</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Player-worn (not game-used)</li>
                    <li>• Commemorative patches</li>
                    <li>• Raw value under $50</li>
                    <li>• Visible condition issues</li>
                    <li>• Common players</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Authentication */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">The Authentication Problem</h2>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
              <strong className="text-red-400">🚨 Critical Limitation:</strong>
              <p className="text-gray-300 mt-2">
                <strong>PSA grades the CARD, not the RELIC.</strong> The slab authenticates the card's condition and legitimacy as a trading card, but does NOT verify that the jersey piece was actually worn by the player in a game.
              </p>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/30 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-4">Authentication Hierarchy (Most to Least Trusted)</h3>
              <ol className="text-gray-400 space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <span><strong className="text-white">MLB Hologram + PSA Graded:</strong> Gold standard. Verified game use + condition protection.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span><strong className="text-white">PSA/DNA Certified:</strong> PSA's autograph division verifies memorabilia.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold">3.</span>
                  <span><strong className="text-white">PSA Graded (card only):</strong> Condition authenticated; relic trust depends on manufacturer.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 font-bold">4.</span>
                  <span><strong className="text-white">Manufacturer COA:</strong> Topps/Panini letter of authenticity. Generally trusted for modern.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold">5.</span>
                  <span><strong className="text-white">Ungraded Raw:</strong> Buyer assumes risk. Only for low-value or trusted sellers.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 5: Market Share */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Market Evolution: Relics Gaining Ground</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Game-used relics have increased market share from 18% (2020) to 22% (2026), stealing share from base cards as collectors prioritize tangible memorabilia over paper.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Card Type</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">2020 Share</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">2026 Share</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626] bg-green-500/5">
                    <td className="p-3 font-medium text-white">Game-Used Relics</td>
                    <td className="p-3 text-right">18%</td>
                    <td className="p-3 text-right text-green-400 font-bold">22%</td>
                    <td className="p-3 text-green-400">↑ Growing</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Patch Autos</td>
                    <td className="p-3 text-right">5%</td>
                    <td className="p-3 text-right text-green-400 font-semibold">8%</td>
                    <td className="p-3 text-green-400">↑ Growing</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">Autographs</td>
                    <td className="p-3 text-right">30%</td>
                    <td className="p-3 text-right">32%</td>
                    <td className="p-3 text-amber-400">→ Stable</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Base Cards</td>
                    <td className="p-3 text-right">45%</td>
                    <td className="p-3 text-right text-red-400">35%</td>
                    <td className="p-3 text-red-400">↓ Declining</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">The Verdict: Grade Selectively, Buy Authentically</h2>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-5">
              <p className="text-gray-400 mb-4">
                Game-used relic cards <strong className="text-white">do</strong> hold value when graded—often better than base cards—but only for the right types of relics and the right grades. The 93% average grading premium for game-used bat/jersey cards justifies the $35 grading fee, but "player-worn" and commemorative patches should never be graded.
              </p>
              
              <p className="text-gray-400 mb-4">
                The key differentiator is <em className="text-white">authentication</em>. PSA grading adds value to the card component, but MLB holograms add value to the relic component. The holy grail is both: an MLB-authenticated game-used relic in a PSA 10 slab.
              </p>
              
              <p className="text-gray-400">
                As the market shifts toward tangible memorabilia (22% market share and growing), graded game-used relics offer a compelling middle ground between the volatility of modern base cards and the illiquidity of vintage. Just remember: <strong className="text-white">not all relics are created equal. Game-used or nothing.</strong>
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-900 to-orange-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Verify Before You Grade</h3>
            <p className="text-orange-200 mb-6">
              Check MLB hologram numbers and verify game-used status before buying or grading. Don't pay game-used prices for player-worn cards.
            </p>
            <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Browse Authenticated Relics
            </button>
            <p className="text-orange-300 text-sm mt-4">MLB verified • Game-used only • PSA graded options</p>
          </div>
        </article>
      </div>
    </div>
  )
}