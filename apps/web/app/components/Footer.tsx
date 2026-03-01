export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚾</span>
            <p className="text-sm text-muted-foreground">
              © 2026 Slugger. Track graded baseball cards.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span> PSA
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span> BGS
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span> SGC
            </span>
            <a href="/privacy" className="text-muted-foreground hover:text-[var(--accent)] transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}