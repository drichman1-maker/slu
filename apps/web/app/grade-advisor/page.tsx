'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useToast } from '../../components/Toast'
import { PageHeader } from '../../components/PageHeader'

export default function GradeAdvisorPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const { showToast } = useToast()

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setScanComplete(true)
    }, 2500)
  }

  useEffect(() => {
    if (scanComplete) {
      showToast('Card scan complete — estimated PSA 8', 'success')
    }
  }, [scanComplete, showToast])

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader 
        items={[
          { label: 'Home', href: '/' },
          { label: 'AI Grade Advisor' }
        ]}
      />

      {/* Header */}
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          AI Powered
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Grade Advisor
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Scan your card and get an instant AI-powered grade estimate. 
          Our model analyzes centering, corners, edges, and surface condition.
        </p>
      </div>

      {/* Scan Interface */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left: Upload/Scan Area */}
        <div className="glass-card p-8 text-center">
          {!scanComplete ? (
            <div className="space-y-6">
              <div 
                className={`border-2 border-dashed rounded-xl p-12 transition-all ${
                  isScanning 
                    ? 'border-cyan-500/50 bg-cyan-500/5' 
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {isScanning ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto relative">
                      <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-ping" />
                      <div className="absolute inset-2 border-2 border-cyan-500/50 rounded-full animate-pulse" />
                      <div className="absolute inset-4 bg-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-cyan-400 font-medium">Analyzing card...</p>
                    <p className="text-sm text-muted-foreground">Checking centering, corners, edges, surface</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Upload card photo</p>
                      <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
                    </div>
                    <button 
                      onClick={handleScan}
                      className="btn-primary"
                    >
                      Scan Card
                    </button>
                  </div>
                )}
              </div>
              
              <p className="text-xs text-muted-foreground">
                Supported: JPG, PNG, HEIC • Max 10MB
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Scanned Card Preview */}
              <div className="relative">
                <div className="aspect-[2/3] bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">⚾</span>
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                  Scan Complete
                </div>
              </div>
              
              <button 
                onClick={() => setScanComplete(false)}
                className="btn-secondary w-full"
              >
                Scan Another Card
              </button>
            </div>
          )}
        </div>

        {/* Right: Results */}
        <div className="space-y-4">
          {scanComplete ? (
            <>
              {/* Grade Estimate */}
              <div className="glass-card p-6">
                <h3 className="text-sm text-muted-foreground mb-2">AI Grade Estimate</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">PSA 8</span>
                  <span className="text-lg text-cyan-400">±0.5</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Based on centering, corners, and surface analysis
                </p>
              </div>

              {/* Breakdown */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-semibold text-white">Condition Breakdown</h3>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Centering</span>
                      <span className="text-green-400">9.0</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-green-500 rounded-full" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Corners</span>
                      <span className="text-yellow-400">7.5</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[75%] bg-yellow-500 rounded-full" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Edges</span>
                      <span className="text-green-400">8.5</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-green-500 rounded-full" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Surface</span>
                      <span className="text-green-400">8.0</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="glass-card p-6">
                <h3 className="font-semibold text-white mb-3">AI Recommendations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span className="text-muted-foreground">Minor corner wear detected on bottom left</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span className="text-muted-foreground">Excellent centering within 55/45</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span className="text-muted-foreground">Clean surface, no scratches visible</span>
                  </li>
                </ul>
              </div>

              {/* Estimated Value */}
              <div className="glass-card p-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Value</p>
                  <p className="text-2xl font-bold text-white">$2,400 - $2,800</p>
                </div>
                <Link href="/cards" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  View similar →
                </Link>
              </div>
            </>
          ) : (
            <div className="glass-card p-8 text-center h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-white font-medium mb-2">Scan a card to begin</p>
              <p className="text-sm text-muted-foreground">
                Our AI will analyze the image and provide a detailed grade estimate
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}