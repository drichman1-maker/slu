'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 group-hover:scale-105 transition-all duration-300">
              <span className="text-xl">⚾</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-white tracking-tight group-hover:text-[var(--accent)] transition-colors">
                Slugger
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Card Tracker</p>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/cards"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              Cards
            </Link>
            <Link
              href="/players"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              Players
            </Link>
            <Link
              href="/grade-advisor"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Grade
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/cards"
                className="px-4 py-3 text-muted-foreground hover:text-white hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cards
              </Link>
              <Link
                href="/players"
                className="px-4 py-3 text-muted-foreground hover:text-white hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Players
              </Link>
              <Link
                href="/grade-advisor"
                className="px-4 py-3 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Grade Advisor
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-muted-foreground hover:text-white hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}