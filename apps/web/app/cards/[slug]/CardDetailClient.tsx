'use client'

import { useToast } from '../../../components/Toast'

interface CardDetailClientProps {
  cardName: string
}

export function CardDetailClient({ cardName }: CardDetailClientProps) {
  const { showToast } = useToast()

  const handleAddToWatchlist = () => {
    showToast(`Added ${cardName} to watchlist`, 'success')
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    showToast('Link copied to clipboard', 'success')
  }

  return (
    <div className="flex gap-3">
      <button 
        onClick={handleAddToWatchlist}
        className="flex-1 px-6 py-3 bg-[var(--accent)] text-black font-semibold rounded-xl hover:bg-[var(--accent-dark)] transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Add to Watchlist
      </button>
      <button 
        onClick={handleShare}
        className="px-6 py-3 border border-border text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
    </div>
  )
}
