import Link from 'next/link'
import { getBlogPosts } from '../../lib/blog-data'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Slugger Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Insights, guides, and market analysis for graded baseball card collectors and investors.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group glass-card p-6 hover:border-[var(--accent)]/30 transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="text-[var(--accent)] text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}