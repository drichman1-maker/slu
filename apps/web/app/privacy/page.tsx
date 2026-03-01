import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Slugger',
  description: 'Privacy policy for Slugger - Graded Baseball Card Tracker',
}

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: March 1, 2026</p>
      </div>

      {/* Content */}
      <div className="glass-card p-8 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Slugger (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our graded baseball card tracking service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Information We Collect</h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Information you provide directly (watchlists, preferences)</li>
            <li>Usage data and analytics to improve our service</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">How We Use Your Information</h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>To provide and maintain our card tracking service</li>
            <li>To send price alerts and notifications you request</li>
            <li>To analyze market trends and improve our data</li>
            <li>To communicate updates about our service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may use third-party analytics tools to understand how our service is used. These services may collect information about your visit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy, please contact us through our website.
          </p>
        </section>
      </div>

      {/* Back Link */}
      <div className="text-center">
        <Link href="/" className="text-[var(--accent)] hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}