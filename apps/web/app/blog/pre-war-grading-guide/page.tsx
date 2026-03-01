import Link from 'next/link'
import { ArrowLeft, Clock, AlertTriangle, Gem, Search, BookOpen, Trophy } from 'lucide-react'

export default function PreWarGradingGuide() {
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
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Pre-1945 Era
              </span>
              <span className="text-gray-500 text-sm">16 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pre-War Baseball Cards: <span className="text-amber-400">Grading Challenges</span> and Opportunities
            </h1>
            <p className="text-xl text-gray-400">
              The ultimate guide to collecting T206, Goudey, and caramel cards. Navigate authentication pitfalls and uncover undervalued gems from baseball's golden age.
            </p>
            <p className="text-gray-500 text-sm mt-4">March 2, 2026</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">1909-1945</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Golden Era</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400">2-5%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Gem Rate</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">40%+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Replicas</div>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-amber-500/5 border-l-4 border-amber-500 pl-6 mb-12 rounded-r-lg py-4">
            <p className="text-lg text-gray-300">
              <strong className="text-amber-400">The Authentication Minefield:</strong> Pre-war baseball cards (1909-1945) represent the holy grail of sports collecting—but they're also the most dangerous market for newcomers. With reprints dating back to the 1960s, sophisticated counterfeits, and grading challenges unique to century-old cardboard, collectors need specialized knowledge. This guide covers authentication, grading nuances, and the hidden opportunities others miss.
            </p>
          </div>

          {/* Section 1: The Landscape */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">The Pre-War Landscape: Sets That Matter</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Not all pre-war cards are created equal. Five sets dominate the market, each with unique characteristics, scarcity profiles, and grading challenges.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Set</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Year</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Cards</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Key Challenge</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">T206 (White Border)</td>
                    <td className="p-3 text-right">1909-1911</td>
                    <td className="p-3 text-right">524</td>
                    <td className="p-3">Piedmont vs. Sweet Caporal backs</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1933 Goudey</td>
                    <td className="p-3 text-right">1933</td>
                    <td className="p-3 text-right">240</td>
                    <td className="p-3">Color lithography wear</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1914/15 Cracker Jack</td>
                    <td className="p-3 text-right">1914-15</td>
                    <td className="p-3 text-right">264</td>
                    <td className="p-3">Caramel staining endemic</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1909 E90 (American Caramel)</td>
                    <td className="p-3 text-right">1909</td>
                    <td className="p-3 text-right">100</td>
                    <td className="p-3">Extreme scarcity</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">1915 Sporting News</td>
                    <td className="p-3 text-right">1915</td>
                    <td className="p-3 text-right">208</td>
                    <td className="p-3">Babe Ruth rookie (M101-4/5)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">💡 Insider Tip:</strong>
              <span className="text-gray-300 ml-2">T206 cards with rare backs (Drum, Uzit, Broadleaf) command 2-5x premiums over common Piedmont backs, even for the same player and grade. Always check the back before buying.</span>
            </div>
          </section>

          {/* Section 2: Authentication */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-6 w-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Authentication: Spotting Fakes</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              An estimated 40% of "raw" (ungraded) pre-war cards sold online are reprints or counterfeits. Here's how to protect yourself.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-red-400">🚩</span> Red Flag #1: Wrong Card Stock
                </h4>
                <p className="text-gray-400 mb-2">Pre-war cards used specific cardstock that's difficult to replicate:</p>
                <ul className="text-gray-500 text-sm space-y-1 ml-4">
                  <li>• T206: Grayish, rough-textured stock (not white or glossy)</li>
                  <li>• Goudey: Thicker, cream-colored stock with distinct feel</li>
                  <li>• Cracker Jack: Thin, almost translucent caramel card stock</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-red-400">🚩</span> Red Flag #2: Modern Printing
                </h4>
                <p className="text-gray-400 mb-2">Lithography vs. modern printing under magnification:</p>
                <ul className="text-gray-500 text-sm space-y-1 ml-4">
                  <li>• Pre-war: Dot patterns visible under 10x loupe</li>
                  <li>• Reprints: Solid ink or modern halftone patterns</li>
                  <li>• Check borders: Authentic cards have slightly imperfect edges</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-red-400">🚩</span> Red Flag #3: Too Good to Be True
                </h4>
                <p className="text-gray-400">A T206 Wagner for under $1,000 is fake. A PSA 6 Cobb for $200 is fake. Pre-war Hall of Famers in any grade command premiums. "Barn finds" and "estate sales" are favorite cover stories for counterfeiters.</p>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
              <h4 className="font-bold text-white mb-3">✅ Authentication Best Practices</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-sm">
                <div>
                  <strong className="text-green-400 block mb-2">Buy From:</strong>
                  <ul className="space-y-1">
                    <li>• PSA/BGS/SGC graded only (no exceptions)</li>
                    <li>• Established dealers (20+ years)</li>
                    <li>• Major auction houses (Heritage, Goldin, REA)</li>
                    <li>• Collector forums with references</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-red-400 block mb-2">Avoid:</strong>
                  <ul className="space-y-1">
                    <li>• eBay sellers with <100 feedback</li>
                    <li>• "Ungraded gem mint" claims</li>
                    <li>• Stock photos (demand actual card images)</li>
                    <li>• Sellers refusing escrow for high-value</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Grading Challenges */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Grading Challenges: What PSA Looks For</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Pre-war cards face unique grading hurdles that don't apply to modern cards. Understanding these helps set realistic expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border-l-4 border-amber-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🦊</span>
                  <h3 className="font-bold text-white">Foxing</h3>
                </div>
                <p className="text-gray-400 text-sm mb-2">Brown spots caused by humidity and oxidation. Common on T206s stored in attics/basements.</p>
                <span className="inline-block bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-medium">Grade Impact: -2 to -4 points</span>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-red-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🍬</span>
                  <h3 className="font-bold text-white">Caramel Stains</h3>
                </div>
                <p className="text-gray-400 text-sm mb-2">Endemic on E90 caramel cards and Cracker Jacks. Sugar seeped through paper wrappers.</p>
                <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">Grade Impact: -1 to -3 points</span>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-blue-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📏</span>
                  <h3 className="font-bold text-white">Trimmed Edges</h3>
                </div>
                <p className="text-gray-400 text-sm mb-2">Common issue—cards were often trimmed to fit albums or remove damage. PSA flags as "A" (Altered).</p>
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">Grade Impact: Authentic only</span>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-purple-500 rounded-r-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎨</span>
                  <h3 className="font-bold text-white">Color Touching</h3>
                </div>
                <p className="text-gray-400 text-sm mb-2">Vintage repair attempts using markers or paint to cover wear. Detected under UV light and magnification.</p>
                <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">Grade Impact: Authentic only</span>
              </div>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
              <strong className="text-red-400">⚠️ PSA 10 Pre-War Reality Check:</strong>
              <span className="text-gray-300 ml-2">Only 0.3% of pre-war cards submitted achieve PSA 10. For T206 Wagner, it's 0 of 3,000+ submissions. A "PSA 8" pre-war card is effectively gem mint by modern standards.</span>
            </div>
          </section>

          {/* Section 4: Opportunities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Gem className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Hidden Opportunities: Undervalued Segments</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              While Wagner, Cobb, and Ruth command headlines, smart collectors target overlooked segments with strong fundamentals.
            </p>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-green-900/20">
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Opportunity</th>
                    <th className="border-b border-[#262626] p-3 text-right text-white font-semibold">Entry Price</th>
                    <th className="border-b border-[#262626] p-3 text-left text-white font-semibold">Why Undervalued?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">T206 Commons (PSA 4-6)</td>
                    <td className="p-3 text-right text-green-400">$50-150</td>
                    <td className="p-3">100+ years old, historically significant, affordable history</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1933 Goudey Non-HOF</td>
                    <td className="p-3 text-right text-green-400">$200-500</td>
                    <td className="p-3">Beautiful color art, iconic set, overlooked vs. Ruth/Gehrig</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="p-3 font-medium text-white">1914 Cracker Jack (PSA 3-5)</td>
                    <td className="p-3 text-right text-green-400">$300-800</td>
                    <td className="p-3">Scarcer than T206, lower population, strong eye appeal</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">E90 Caramel (Any Grade)</td>
                    <td className="p-3 text-right text-green-400">$150-400</td>
                    <td className="p-3">Extremely low population, underappreciated caramel issue</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-green-400">💎</span> The Smart Play: T206 Commons
              </h4>
              <p className="text-gray-400 mb-3">For $50-150, you can own a PSA-graded card from 1909-1911—older than any living person. These cards:</p>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>• Represent the dawn of modern baseball cards</li>
                <li>• Have documented scarcity (PSA pop reports)</li>
                <li>• Are liquid (easy to sell when graded)</li>
                <li>• Offer tangible connection to the deadball era</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Pre-War Collection</h3>
            <p className="text-amber-200 mb-6">
              Browse authenticated, graded pre-war cards on Slugger. Every card verified, every grade guaranteed.
            </p>
            <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Explore Pre-War Cards
            </button>
            <p className="text-amber-300 text-sm mt-4">PSA/BGS/SGC graded only • No raw cards • Authentication guaranteed</p>
          </div>
        </article>
      </div>
    </div>
  )
}