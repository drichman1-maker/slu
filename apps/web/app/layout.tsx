import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { MobileNav } from './components/MobileNav'
import { ToastProvider } from '../components/Toast'

export const metadata: Metadata = {
  title: 'Slugger — Graded Baseball Card Tracker | PSA BGS SGC',
  description: 'Track PSA, BGS, and SGC graded baseball cards. Fair value scores, market momentum, and recent sales data for collectors and investors.',
  keywords: 'graded cards, PSA, BGS, SGC, baseball cards, card investing, sports cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <ToastProvider>
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">{children}</main>
          <Footer />
          <MobileNav />
        </ToastProvider>
      </body>
    </html>
  )
}
