import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getBlogPosts } from '../../../lib/blog-data'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Slugger Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  // Get related posts
  const allPosts = getBlogPosts()
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/blog" className="hover:text-[var(--accent)] transition-colors">Blog</Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-foreground truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Article Header */}
      <article className="glass-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full">
            {post.category}
          </span>
          <span className="text-muted-foreground text-sm">{post.readTime}</span>
          <span className="text-muted-foreground text-sm">
            {new Date(post.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {post.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          {post.excerpt}
        </p>

        {/* Article Content Placeholder */}
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">
            Full article content coming soon. This is a placeholder for the blog post content.
          </p>
          <p className="text-muted-foreground mt-4">
            Stay tuned for in-depth analysis and insights about {post.category.toLowerCase()} in the graded card market.
          </p>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group glass-card p-6 hover:border-[var(--accent)]/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded">
                    {relatedPost.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}