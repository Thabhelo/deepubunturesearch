import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & Research Updates | Deep Ubuntu Research',
  description: 'Stay updated with the latest research, insights, and developments from Deep Ubuntu Research. Discover our work in AI for Africa, foundation models, and inclusive technology.',
  keywords: ['Deep Ubuntu Research Blog', 'AI Research', 'African AI', 'Machine Learning', 'Research Updates', 'Technology News'],
  openGraph: {
    title: 'Blog & Research Updates | Deep Ubuntu Research',
    description: 'Stay updated with the latest research, insights, and developments from Deep Ubuntu Research.',
    type: 'website',
  },
}

export default function BlogPage() {
  // Mock blog posts - in a real app, these would come from a CMS or database
  const featuredPost = {
    title: "Advancing African Language Models: Our Journey to 12+ Languages",
    excerpt: "Deep dive into our latest research on developing foundation models for African languages, the challenges we faced, and the breakthroughs we achieved.",
    author: "Dr. Amara Okafor",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Research",
    slug: "advancing-african-language-models",
    image: "🌍",
  }

  const recentPosts = [
    {
      title: "Building Offline-First AI: Lessons from cowcow CLI",
      excerpt: "How we designed cowcow CLI to work seamlessly offline, enabling AI applications in low-connectivity environments across Africa.",
      author: "Dr. Fatima Al-Rashid",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Engineering",
      slug: "building-offline-first-ai",
      image: "🛠️",
    },
    {
      title: "The Ubuntu Philosophy in AI Development",
      excerpt: "Exploring how the African philosophy of Ubuntu shapes our approach to artificial intelligence and community-driven development.",
      author: "Prof. Kwame Asante",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Philosophy",
      slug: "ubuntu-philosophy-ai",
      image: "🤝",
    },
    {
      title: "Computer Vision for African Agriculture",
      excerpt: "Our latest research on applying computer vision to agricultural challenges unique to African farming environments.",
      author: "Dr. Thabo Mthembu",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Research",
      slug: "computer-vision-agriculture",
      image: "🌾",
    },
    {
      title: "Open Source AI: Our Commitment to Community",
      excerpt: "Why we choose to open-source our core technologies and how the community can contribute to democratizing AI.",
      author: "Deep Ubuntu Team",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Community",
      slug: "open-source-ai-commitment",
      image: "🔓",
    },
    {
      title: "Scaling AI Infrastructure for Emerging Markets",
      excerpt: "Technical insights into building robust, scalable AI infrastructure that works reliably in challenging environments.",
      author: "Dr. Fatima Al-Rashid",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Engineering",
      slug: "scaling-ai-infrastructure",
      image: "🏗️",
    },
    {
      title: "Cultural Sensitivity in AI: More Than Just Translation",
      excerpt: "How we ensure our AI models understand and respect cultural nuances beyond simple language translation.",
      author: "Dr. Amara Okafor",
      date: "2023-12-10",
      readTime: "6 min read",
      category: "Research",
      slug: "cultural-sensitivity-ai",
      image: "🏛️",
    },
  ]

  const categories = [
    { name: "All", count: 24, slug: "all" },
    { name: "Research", count: 8, slug: "research" },
    { name: "Engineering", count: 6, slug: "engineering" },
    { name: "Community", count: 4, slug: "community" },
    { name: "Philosophy", count: 3, slug: "philosophy" },
    { name: "Updates", count: 3, slug: "updates" },
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Research & <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest research, technical insights, and developments 
            in democratizing AI for Africa and beyond.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Featured <span className="text-gradient">Article</span>
          </h2>
          
          <div className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-dbu-fg-2 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-dbu-fg mb-4 hover:text-gradient transition-colors cursor-pointer">
                  {featuredPost.title}
                </h3>
                
                <p className="text-dbu-fg-2 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dbu-gradient/20 rounded-full flex items-center justify-center">
                      <span className="text-dbu-fg">👩🏿‍🔬</span>
                    </div>
                    <div>
                      <p className="text-dbu-fg font-medium">{featuredPost.author}</p>
                      <p className="text-dbu-fg-2 text-sm">{featuredPost.date}</p>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg"
                    className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    Read Article
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-1 flex justify-center">
                <div className="w-48 h-48 bg-dbu-gradient/10 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">{featuredPost.image}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                  category.slug === 'all'
                    ? 'bg-dbu-gradient text-white border-dbu-grad-from'
                    : 'bg-dbu-bg-2/50 text-dbu-fg border-dbu-grad-from/20 hover:border-dbu-grad-from/40'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Latest <span className="text-gradient">Posts</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div
                key={post.slug}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-dbu-gradient/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">{post.image}</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-dbu-fg-2 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3 group-hover:text-gradient transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-dbu-gradient/20 rounded-full flex items-center justify-center">
                      <span className="text-dbu-fg text-sm">👤</span>
                    </div>
                    <div>
                      <p className="text-dbu-fg text-sm font-medium">{post.author}</p>
                      <p className="text-dbu-fg-2 text-xs">{post.date}</p>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 text-sm rounded-lg transition-all duration-300"
                  >
                    Read
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Stay <span className="text-gradient">Updated</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-2xl mx-auto mb-8">
            Get our latest research insights, product updates, and technical deep-dives 
            delivered directly to your inbox.
          </p>
          
          <div className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-dbu-bg rounded-xl border border-dbu-grad-from/30 focus:border-dbu-grad-from focus:outline-none text-dbu-fg placeholder-dbu-fg-2"
              />
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-dbu-gradient hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                Subscribe to Newsletter
              </Button>
            </form>
            <p className="text-dbu-fg-2 text-sm mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Collaborate?</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Join our community of researchers, developers, and innovators building the future of AI for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/research/open-source">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                View Open Source
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 