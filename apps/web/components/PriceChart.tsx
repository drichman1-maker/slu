'use client'

interface PriceChartProps {
  data: number[]
  width?: number
  height?: number
}

export function PriceChart({ data, width = 300, height = 100 }: PriceChartProps) {
  if (!data || data.length === 0) return null

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  
  // Normalize data to fit in height
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width
    const y = height - ((value - min) / range) * (height - 20) - 10
    return `${x},${y}`
  }).join(' ')

  // Determine trend color
  const first = data[0]
  const last = data[data.length - 1]
  const color = last >= first ? '#22c55e' : '#ef4444'
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full h-auto"
        style={{ maxHeight: height }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Area under the line */}
        <polygon
          points={`0,${height} ${points} ${width},${height}`}
          fill={`url(#${gradientId})`}
        />
        
        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* First and last dots */}
        <circle
          cx={0}
          cy={height - ((first - min) / range) * (height - 20) - 10}
          r="3"
          fill={color}
        />
        <circle
          cx={width}
          cy={height - ((last - min) / range) * (height - 20) - 10}
          r="4"
          fill={color}
        />
      </svg>
      
      {/* Price labels */}
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>${first.toLocaleString()}</span>
        <span className={last >= first ? 'text-green-400' : 'text-red-400'}>
          {last >= first ? '+' : ''}{((last - first) / first * 100).toFixed(1)}%
        </span>
        <span>${last.toLocaleString()}</span>
      </div>
    </div>
  )
}