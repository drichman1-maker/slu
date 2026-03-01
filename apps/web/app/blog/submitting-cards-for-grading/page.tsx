import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SubmittingCardsForGrading() {
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
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full">
                Beginner's Guide
              </span>
              <span className="text-gray-500 text-sm">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How to Submit Cards for Grading: Step-by-Step Guide for First-Timers
            </h1>
            <p className="text-xl text-gray-400">
              Master the submission process with our comprehensive walkthrough. From prep to profit, learn exactly how to get your baseball cards professionally graded.
            </p>
            <p className="text-gray-500 text-sm mt-4">February 28, 2026</p>
          </header>

          {/* Intro */}
          <div className="border-l-4 border-blue-500 pl-6 mb-12">
            <p className="text-lg text-gray-300">
              Submitting your first card for professional grading can feel overwhelming. With multiple companies, varying costs, and the fear of damaging valuable cards, many collectors procrastinate for months. This guide eliminates the guesswork with actionable steps, real cost breakdowns, and insider tips from experienced submitters.
            </p>
          </div>

          {/* Step 1 */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Choose Your Grading Company</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Before touching your cards, you need to select a grading service. Each company has different strengths, turnaround times, and market perceptions. For baseball cards, PSA remains the gold standard for resale value, but alternatives like SGC offer faster turnaround at lower costs.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-blue-900/30">
                    <th className="border border-[#262626] p-4 text-left text-white font-semibold">Company</th>
                    <th className="border border-[#262626] p-4 text-left text-white font-semibold">Best For</th>
                    <th className="border border-[#262626] p-4 text-left text-white font-semibold">Turnaround</th>
                    <th className="border border-[#262626] p-4 text-left text-white font-semibold">Base Cost</th>
                    <th className="border border-[#262626] p-4 text-left text-white font-semibold">Market Preference</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="bg-blue-500/5">
                    <td className="border border-[#262626] p-4 font-semibold text-white">PSA</td>
                    <td className="border border-[#262626] p-4">Pre-1970 cards, investment pieces</td>
                    <td className="border border-[#262626] p-4">90 days</td>
                    <td className="border border-[#262626] p-4"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">$25</span></td>
                    <td className="border border-[#262626] p-4">Highest resale value</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-4 font-semibold text-white">SGC</td>
                    <td className="border border-[#262626] p-4">Modern cards, quick flips</td>
                    <td className="border border-[#262626] p-4">30 days</td>
                    <td className="border border-[#262626] p-4"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">$15</span></td>
                    <td className="border border-[#262626] p-4">Strong for vintage</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-4 font-semibold text-white">BGS</td>
                    <td className="border border-[#262626] p-4">Modern high-end, sub-grades</td>
                    <td className="border border-[#262626] p-4">60 days</td>
                    <td className="border border-[#262626] p-4"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">$35</span></td>
                    <td className="border border-[#262626] p-4">Preferred for Chrome</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-4 font-semibold text-white">CGC</td>
                    <td className="border border-[#262626] p-4">Non-sports crossover</td>
                    <td className="border border-[#262626] p-4">45 days</td>
                    <td className="border border-[#262626] p-4"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">$20</span></td>
                    <td className="border border-[#262626] p-4">Growing acceptance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
              <strong className="text-blue-400">💡 Pro Tip:</strong>
              <span className="text-gray-300 ml-2">For your first submission, choose PSA if you plan to sell, or SGC if you want cards back quickly for your personal collection. The $10 difference in grading fee often pays for itself in resale premium.</span>
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">Inspect and Pre-Grade Your Cards</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Professional grading costs $15-35 per card. Submitting cards that will grade below PSA 8 is often not economically viable. Learn to pre-grade using the same criteria professionals use:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Centering:</strong> Borders should be even. Use a centering tool or app. 60/40 or better for PSA 9+, 55/45 for PSA 10.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Corners:</strong> Check under magnification. Any whitening or fraying drops you below PSA 9.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Edges:</strong> Run your finger along edges (wear gloves!). Chips or roughness are deductions.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Surface:</strong> Check for scratches, print lines, or wax stains under good lighting.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Authenticity:</strong> Ensure it's not a reprint. Check card stock, copyright lines, and font consistency.</span>
              </li>
            </ul>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">⚠️ Warning:</strong>
              <span className="text-gray-300 ml-2">Cards with creases, paper loss, or stains will grade PSA 4 or below. These are rarely worth grading unless they're rare pre-war cards. The cost ($70 total) often exceeds the graded value.</span>
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                3
              </div>
              <h2 className="text-2xl font-bold text-white">Prepare Your Cards for Shipment</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Proper preparation prevents damage during transit—the most common cause of disappointing grades. One fingerprint or corner bump can drop a PSA 10 to a PSA 8, costing you hundreds in value.
            </p>

            <h3 className="text-lg font-semibold text-white mb-4">Required Materials:</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-blue-900/30">
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Item</th>
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Purpose</th>
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Cost</th>
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Where to Buy</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 text-sm">
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Card Saver 1</td>
                    <td className="border border-[#262626] p-3">Rigid semi-flexible holder</td>
                    <td className="border border-[#262626] p-3">$0.50 each</td>
                    <td className="border border-[#262626] p-3">BCW Supplies, Amazon</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Penny Sleeves</td>
                    <td className="border border-[#262626] p-3">Inner protection</td>
                    <td className="border border-[#262626] p-3">$0.02 each</td>
                    <td className="border border-[#262626] p-3">Any card shop</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Team Bags</td>
                    <td className="border border-[#262626] p-3">Seal Card Savers</td>
                    <td className="border border-[#262626] p-3">$0.10 each</td>
                    <td className="border border-[#262626] p-3">BCW Supplies</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Blue Painter's Tape</td>
                    <td className="border border-[#262626] p-3">Secure without residue</td>
                    <td className="border border-[#262626] p-3">$5 roll</td>
                    <td className="border border-[#262626] p-3">Hardware store</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Bubble Mailer/Box</td>
                    <td className="border border-[#262626] p-3">Outer protection</td>
                    <td className="border border-[#262626] p-3">$8-15</td>
                    <td className="border border-[#262626] p-3">USPS, UPS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] p-4 rounded-xl">
              <strong className="text-white">📝 Preparation Process:</strong>
              <ol className="text-gray-400 mt-3 ml-5 list-decimal space-y-1">
                <li>Wash hands thoroughly (no lotion). Wear cotton gloves if possible.</li>
                <li>Place card in penny sleeve.</li>
                <li>Insert sleeved card into Card Saver 1 (not a toploader—graders hate them).</li>
                <li>Place Card Saver in team bag.</li>
                <li>Secure with blue painter's tape (easy to remove).</li>
                <li>Place between cardboard in bubble mailer.</li>
              </ol>
            </div>
          </section>

          {/* Step 4 */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                4
              </div>
              <h2 className="text-2xl font-bold text-white">Create Your Submission</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Online submission portals vary by company, but the process is similar. For PSA (the most common choice):
            </p>

            <ol className="space-y-3 text-gray-400 mb-6 ml-4">
              <li className="pl-2"><strong className="text-white">Create Account:</strong> Visit PSAcard.com and register. Membership ($99/year) gives discounts and bulk submission privileges.</li>
              <li className="pl-2"><strong className="text-white">Select Service Level:</strong> Choose Regular ($25/card, 90 days) or Economy ($18/card, 120 days) for modern cards.</li>
              <li className="pl-2"><strong className="text-white">Enter Card Details:</strong> Use the PSA Cert Lookup for exact card names. Incorrect descriptions delay processing.</li>
              <li className="pl-2"><strong className="text-white">Declare Value:</strong> Be honest. Under-declaring risks insurance issues; over-declaring triggers upcharges.</li>
              <li className="pl-2"><strong className="text-white">Print Submission Form:</strong> Include inside package. Print shipping labels separately.</li>
            </ol>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong className="text-amber-400">⚠️ Common Mistake:</strong>
              <span className="text-gray-300 ml-2">Don't guess the card year or set. A "1987 Topps" card might actually be 1987 Topps Tiffany (worth 10x more). Use Trading Card Database (TCDB.com) to verify exact variant.</span>
            </div>
          </section>

          {/* Step 5 */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                5
              </div>
              <h2 className="text-2xl font-bold text-white">Ship Your Cards Securely</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Shipping is where most first-timers make costly errors. Your cards are uninsured by the grading company until received, and USPS has lost countless submissions.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Use USPS Priority Mail Express or FedEx:</strong> Signature required. Avoid regular Priority Mail (no signature).</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Double Box:</strong> Inner box with cards, outer box with padding. Label inner box "Collectible Cards - Handle with Care."</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Insurance:</strong> Insure for declared value. PSA requires minimum $100/card insurance.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Tracking:</strong> Save tracking number. PSA emails confirmation within 5 business days of receipt.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-green-400 text-xl">✓</span>
                <span><strong className="text-white">Hold for Pickup:</strong> Consider "Hold at Post Office" to prevent porch piracy.</span>
              </li>
            </ul>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <strong className="text-blue-400">💡 Money-Saving Tip:</strong>
              <span className="text-gray-300 ml-2">Submit 10+ cards at once to spread the $30 shipping/insurance cost across your batch. Single-card submissions cost $70 total; 10-card submissions average $45/card.</span>
            </div>
          </section>

          {/* Step 6 */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                6
              </div>
              <h2 className="text-2xl font-bold text-white">Track and Receive Your Grades</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The waiting game begins. Use this time to research potential values and prepare your sales strategy.
            </p>

            <h3 className="text-lg font-semibold text-white mb-4">What Happens During Grading:</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-blue-900/30">
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Stage</th>
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Duration</th>
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">What Happens</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 text-sm">
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Received</td>
                    <td className="border border-[#262626] p-3">Day 0-5</td>
                    <td className="border border-[#262626] p-3">Package opened, cards counted, submission form verified</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Research</td>
                    <td className="border border-[#262626] p-3">Day 5-15</td>
                    <td className="border border-[#262626] p-3">Cards authenticated, correct set/year verified</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Grading</td>
                    <td className="border border-[#262626] p-3">Day 15-75</td>
                    <td className="border border-[#262626] p-3">Two independent graders evaluate, senior grader resolves discrepancies</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Encapsulation</td>
                    <td className="border border-[#262626] p-3">Day 75-85</td>
                    <td className="border border-[#262626] p-3">Cards sealed in tamper-evident cases with labels</td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] p-3 text-white">Shipping</td>
                    <td className="border border-[#262626] p-3">Day 85-95</td>
                    <td className="border border-[#262626] p-3">Insured return shipping with tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] p-4 rounded-xl">
              <strong className="text-white">📧 Email Notifications:</strong>
              <span className="text-gray-400 ml-2">PSA sends updates at "Arrived," "Grading," and "Shipped" stages. Check spam folders—PSA emails often filter incorrectly.</span>
            </div>
          </section>

          {/* Step 7 */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                7
              </div>
              <h2 className="text-2xl font-bold text-white">Review Results and Next Steps</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Your cards have returned. Now what?
            </p>

            <h3 className="text-lg font-semibold text-white mb-4">Grade Distribution Reality Check:</h3>
            <p className="text-gray-400 mb-4">Modern cards (1980-present) in pack-fresh condition typically grade:</p>
            
            <ul className="space-y-2 text-gray-400 mb-6 ml-4">
              <li><strong className="text-white">PSA 10:</strong> 10-20% of submissions (Gem Mint)</li>
              <li><strong className="text-white">PSA 9:</strong> 30-40% of submissions (Mint)</li>
              <li><strong className="text-white">PSA 8:</strong> 25-35% of submissions (NM-MT)</li>
              <li><strong className="text-white">PSA 7 or below:</strong> 15-25% of submissions</li>
            </ul>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
              <strong className="text-amber-400">⚠️ Reality Check:</strong>
              <span className="text-gray-300 ml-2">If you submitted 10 cards expecting all PSA 10s, you'll likely be disappointed. Even pack-pulled cards often grade PSA 9 due to factory defects or handling before you owned them.</span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Your Options by Grade:</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900/30">
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Grade</th>
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Recommendation</th>
                    <th className="border border-[#262626] p-3 text-left text-white font-semibold">Expected ROI</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="bg-green-500/10">
                    <td className="border border-[#262626] p-3 font-semibold text-green-400">PSA 10</td>
                    <td className="border border-[#262626] p-3">Sell immediately or hold for appreciation</td>
                    <td className="border border-[#262626] p-3">200-1000%+</td>
                  </tr>
                  <tr className="bg-yellow-500/10">
                    <td className="border border-[#262626] p-3 font-semibold text-yellow-400">PSA 9</td>
                    <td className="border border-[#262626] p-3">Sell if modern; hold if vintage</td>
                    <td className="border border-[#262626] p-3">50-200%</td>
                  </tr>
                  <tr className="bg-red-500/10">
                    <td className="border border-[#262626] p-3 font-semibold text-red-400">PSA 8</td>
                    <td className="border border-[#262626] p-3">Sell only if premium rookie; otherwise PC</td>
                    <td className="border border-[#262626] p-3">Break-even to 50%</td>
                  </tr>
                  <tr className="bg-gray-500/10">
                    <td className="border border-[#262626] p-3 font-semibold text-gray-400">PSA 7 or below</td>
                    <td className="border border-[#262626] p-3">Personal collection or reholder as "authentic"</td>
                    <td className="border border-[#262626] p-3">Loss likely</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Submit Your First Card?</h3>
            <p className="text-blue-200 mb-6">
              Download our free Pre-Grade Checklist PDF to ensure you only submit cards worthy of professional grading.
            </p>
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3 rounded-xl transition-colors">
              Download Free Checklist
            </button>
            <p className="text-blue-300 text-sm mt-4">Join 15,000+ collectors who've improved their grading success rate by 40%</p>
          </div>
        </article>
      </div>
    </div>
  )
}