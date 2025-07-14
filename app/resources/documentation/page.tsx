import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentation | Deep Ubuntu Research',
  description: 'Comprehensive technical documentation for Deep Ubuntu Research products and services. Get started with our APIs, tools, and platforms.',
  keywords: ['Deep Ubuntu Documentation', 'API Documentation', 'Technical Guides', 'Developer Resources', 'AI Tools Documentation'],
  openGraph: {
    title: 'Documentation | Deep Ubuntu Research',
    description: 'Comprehensive technical documentation for Deep Ubuntu Research products and services.',
    type: 'website',
  },
}

export default function DocumentationPage() {
  const docSections = [
    {
      category: "Getting Started",
      icon: "🚀",
      description: "Quick start guides and basic concepts",
      docs: [
        {
          title: "Introduction to Deep Ubuntu AI",
          description: "Overview of our foundation models and capabilities",
          level: "Beginner",
          readTime: "5 min",
          link: "#"
        },
        {
          title: "Setting Up Your Environment",
          description: "Installation and configuration guide",
          level: "Beginner",
          readTime: "10 min",
          link: "#"
        },
        {
          title: "First API Call",
          description: "Make your first request to our API",
          level: "Beginner",
          readTime: "15 min",
          link: "#"
        },
        {
          title: "Authentication Guide",
          description: "API keys, OAuth, and security best practices",
          level: "Intermediate",
          readTime: "12 min",
          link: "#"
        }
      ]
    },
    {
      category: "API Reference",
      icon: "📚",
      description: "Complete API documentation and examples",
      docs: [
        {
          title: "Foundation Models API",
          description: "Text generation, completion, and embeddings",
          level: "Intermediate",
          readTime: "20 min",
          link: "#"
        },
        {
          title: "Language Detection API",
          description: "Identify African languages in text",
          level: "Beginner",
          readTime: "8 min",
          link: "#"
        },
        {
          title: "Translation API",
          description: "Multi-lingual translation capabilities",
          level: "Intermediate",
          readTime: "15 min",
          link: "#"
        },
        {
          title: "Speech Recognition API",
          description: "Convert speech to text in African languages",
          level: "Advanced",
          readTime: "25 min",
          link: "#"
        }
      ]
    },
    {
      category: "Developer Tools",
      icon: "🛠️",
      description: "SDKs, libraries, and development tools",
      docs: [
        {
          title: "Python SDK",
          description: "Official Python library for Deep Ubuntu AI",
          level: "Intermediate",
          readTime: "18 min",
          link: "#"
        },
        {
          title: "JavaScript SDK",
          description: "Browser and Node.js integration",
          level: "Intermediate",
          readTime: "16 min",
          link: "#"
        },
        {
          title: "cowcow CLI Guide",
          description: "Command-line tool for offline AI applications",
          level: "Advanced",
          readTime: "30 min",
          link: "#"
        },
        {
          title: "Docker Integration",
          description: "Container deployment and orchestration",
          level: "Advanced",
          readTime: "22 min",
          link: "#"
        }
      ]
    },
    {
      category: "Tutorials",
      icon: "🎓",
      description: "Step-by-step tutorials and use cases",
      docs: [
        {
          title: "Building a Chatbot",
          description: "Create an AI chatbot for African languages",
          level: "Intermediate",
          readTime: "45 min",
          link: "#"
        },
        {
          title: "Document Classification",
          description: "Classify documents by language and content",
          level: "Intermediate",
          readTime: "35 min",
          link: "#"
        },
        {
          title: "Sentiment Analysis",
          description: "Analyze sentiment in African language texts",
          level: "Intermediate",
          readTime: "25 min",
          link: "#"
        },
        {
          title: "Speech-to-Text App",
          description: "Build a voice recognition application",
          level: "Advanced",
          readTime: "60 min",
          link: "#"
        }
      ]
    },
    {
      category: "Deployment",
      icon: "🚀",
      description: "Production deployment and scaling",
      docs: [
        {
          title: "Cloud Deployment",
          description: "Deploy models on AWS, GCP, and Azure",
          level: "Advanced",
          readTime: "40 min",
          link: "#"
        },
        {
          title: "Edge Deployment",
          description: "Run models on mobile and edge devices",
          level: "Advanced",
          readTime: "50 min",
          link: "#"
        },
        {
          title: "Scaling Guide",
          description: "Handle high-traffic production workloads",
          level: "Advanced",
          readTime: "35 min",
          link: "#"
        },
        {
          title: "Monitoring & Logging",
          description: "Track performance and debug issues",
          level: "Advanced",
          readTime: "28 min",
          link: "#"
        }
      ]
    },
    {
      category: "Best Practices",
      icon: "⭐",
      description: "Guidelines and recommendations",
      docs: [
        {
          title: "Model Selection Guide",
          description: "Choose the right model for your use case",
          level: "Intermediate",
          readTime: "20 min",
          link: "#"
        },
        {
          title: "Performance Optimization",
          description: "Optimize response times and costs",
          level: "Advanced",
          readTime: "30 min",
          link: "#"
        },
        {
          title: "Error Handling",
          description: "Robust error handling and recovery",
          level: "Intermediate",
          readTime: "18 min",
          link: "#"
        },
        {
          title: "Security Best Practices",
          description: "Secure your AI applications",
          level: "Advanced",
          readTime: "25 min",
          link: "#"
        }
      ]
    }
  ]

  const popularDocs = [
    {
      title: "Foundation Models API",
      description: "Complete guide to our text generation capabilities",
      views: "12.5K",
      category: "API Reference"
    },
    {
      title: "Python SDK",
      description: "Official Python library documentation",
      views: "8.2K",
      category: "Developer Tools"
    },
    {
      title: "Building a Chatbot",
      description: "Step-by-step tutorial for creating AI chatbots",
      views: "6.8K",
      category: "Tutorials"
    },
    {
      title: "Authentication Guide",
      description: "API authentication and security",
      views: "5.9K",
      category: "Getting Started"
    }
  ]

  const quickLinks = [
    { name: "API Status", url: "#", icon: "🟢" },
    { name: "Changelog", url: "#", icon: "📝" },
    { name: "GitHub", url: "#", icon: "💻" },
    { name: "Community", url: "/resources/community", icon: "👥" },
    { name: "Support", url: "/resources/support", icon: "🆘" },
    { name: "Playground", url: "#", icon: "🎮" }
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Documentation</span>
            </h1>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build with Deep Ubuntu Research. From quick start guides 
              to advanced deployment strategies.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 bg-dbu-bg-2/50 border border-dbu-grad-from/20 rounded-xl text-dbu-fg placeholder-dbu-fg-2 focus:border-dbu-grad-from focus:outline-none"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-dbu-fg-2">🔍</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                >
                  {link.icon} {link.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Popular <span className="text-gradient">Documentation</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {popularDocs.map((doc, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded text-xs">
                    {doc.category}
                  </span>
                  <span className="text-dbu-fg-2 text-xs">{doc.views} views</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-dbu-fg mb-2 hover:text-gradient transition-colors">
                  {doc.title}
                </h3>
                <p className="text-dbu-fg-2 text-sm leading-relaxed">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Browse <span className="text-gradient">Documentation</span>
          </h2>
          
          <div className="space-y-12">
            {docSections.map((section, index) => (
              <div key={index} className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{section.icon}</div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-dbu-fg">
                      {section.category}
                    </h3>
                    <p className="text-dbu-fg-2">{section.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {section.docs.map((doc, docIndex) => (
                    <div
                      key={docIndex}
                      className="bg-dbu-bg-2/30 rounded-xl p-6 border border-dbu-grad-from/10 hover:border-dbu-grad-from/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          doc.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          doc.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {doc.level}
                        </span>
                        <span className="text-dbu-fg-2 text-xs">{doc.readTime}</span>
                      </div>
                      
                      <h4 className="text-lg font-display font-semibold text-dbu-fg mb-2 hover:text-gradient transition-colors">
                        {doc.title}
                      </h4>
                      
                      <p className="text-dbu-fg-2 text-sm leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Developer <span className="text-gradient">Resources</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                API Playground
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                Interactive playground to test our APIs without writing code.
              </p>
              <Button 
                size="sm"
                className="bg-dbu-gradient hover:opacity-90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
              >
                Try Playground
              </Button>
            </div>
            
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Status Dashboard
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                Real-time status of our APIs and services.
              </p>
              <Button 
                size="sm"
                variant="outline"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
              >
                Check Status
              </Button>
            </div>
            
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Developer Forum
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                Connect with other developers and get help from our community.
              </p>
              <Link href="/resources/community">
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Build?</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Start building with Deep Ubuntu Research today. Our documentation 
            will guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              Get Started
            </Button>
            <Link href="/resources/api-reference">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                View API Reference
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 