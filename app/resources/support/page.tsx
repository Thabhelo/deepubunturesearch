import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, AnimatedCard } from '@/components/ui/animated-section'

// Server-safe motion component replacement
const motion = {
  div: ({ children, className, ...props }: any) => <div className={className}>{children}</div>
}

export const metadata: Metadata = {
  title: 'Support | Deep Ubuntu Research',
  description: 'Get help with Deep Ubuntu Research products and services. Documentation, troubleshooting, and technical support resources.',
  keywords: ['Support', 'Help', 'Troubleshooting', 'Technical Support', 'Documentation', 'Deep Ubuntu Research'],
  openGraph: {
    title: 'Support | Deep Ubuntu Research',
    description: 'Get help with Deep Ubuntu Research products and services. Documentation, troubleshooting, and technical support resources.',
    url: 'https://deepubuntu.com/resources/support',
  },
}

export default function SupportPage() {
  const supportChannels = [
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: "📚",
      link: "/resources/documentation",
      features: [
        "Getting started guides",
        "API documentation",
        "Integration tutorials",
        "Best practices"
      ]
    },
    {
      title: "Community Forum",
      description: "Connect with other developers",
      icon: "💬",
      link: "/resources/community",
      features: [
        "Ask questions",
        "Share experiences",
        "Code examples",
        "Community support"
      ]
    },
    {
      title: "Technical Support",
      description: "Direct help from our team",
      icon: "🔧",
      link: "/contact",
      features: [
        "Bug reports",
        "Feature requests",
        "Integration assistance",
        "Performance optimization"
      ]
    },
    {
      title: "Status Page",
      description: "Real-time system status",
      icon: "📊",
      link: "#",
      features: [
        "API uptime monitoring",
        "Incident reports",
        "Maintenance schedules",
        "Performance metrics"
      ]
    }
  ]

  const faqItems = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I get API access?",
          answer: "Sign up for an account on our platform, then navigate to the API section in your dashboard to generate your API keys. Free tier includes 1,000 requests per month."
        },
        {
          question: "Which programming languages are supported?",
          answer: "We provide official SDKs for Python, JavaScript/Node.js, Go, and Rust. You can also use our REST API directly with any language that supports HTTP requests."
        },
        {
          question: "Is there a free tier available?",
          answer: "Yes, we offer a free tier with 1,000 API calls per month, access to basic models, and community support. Perfect for testing and small projects."
        }
      ]
    },
    {
      category: "API Usage",
      questions: [
        {
          question: "What are the rate limits?",
          answer: "Rate limits depend on your plan: Free (10/min), Developer (100/min), Professional (1,000/min), Enterprise (custom). All plans include burst allowances."
        },
        {
          question: "How do I handle authentication?",
          answer: "Use OAuth 2.0 with client credentials flow. Include your access token in the Authorization header: 'Bearer your_token'. Tokens expire after 24 hours."
        },
        {
          question: "What data formats are supported?",
          answer: "We support JSON for all API requests and responses. File uploads accept CSV, JSON, TXT, and JSONL formats up to 100MB per file."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          question: "Why am I getting 429 errors?",
          answer: "This indicates you've exceeded your rate limit. Wait for the rate limit to reset or upgrade your plan for higher limits. Check the 'Retry-After' header for timing."
        },
        {
          question: "My API requests are timing out",
          answer: "Request timeouts may occur due to complex queries or high load. Try reducing payload size, using simpler prompts, or implementing retry logic with exponential backoff."
        },
        {
          question: "How do I report a bug?",
          answer: "Use our GitHub issues page or contact technical support. Include your API key (last 4 characters), request/response examples, and steps to reproduce the issue."
        }
      ]
    }
  ]

  const troubleshootingGuides = [
    {
      title: "Authentication Issues",
      description: "Common authentication problems and solutions",
      topics: [
        "Invalid token errors",
        "Token expiration handling",
        "Scope and permissions",
        "Client credentials setup"
      ]
    },
    {
      title: "API Integration",
      description: "Best practices for API integration",
      topics: [
        "Error handling patterns",
        "Retry mechanisms",
        "Caching strategies",
        "Performance optimization"
      ]
    },
    {
      title: "Model Performance",
      description: "Optimizing model performance and accuracy",
      topics: [
        "Prompt engineering",
        "Parameter tuning",
        "Language detection",
        "Response formatting"
      ]
    },
    {
      title: "Data Processing",
      description: "Working with datasets and file uploads",
      topics: [
        "Data format requirements",
        "Batch processing",
        "Large file handling",
        "Data validation"
      ]
    }
  ]

  const supportTiers = [
    {
      tier: "Community",
      price: "Free",
      description: "Community-driven support",
      features: [
        "Community forum access",
        "Documentation and guides",
        "Basic troubleshooting",
        "Email support (48h response)"
      ],
      sla: "No SLA"
    },
    {
      tier: "Developer",
      price: "$29/month",
      description: "Enhanced support for developers",
      features: [
        "Priority forum support",
        "Email support (24h response)",
        "Bug report priority",
        "Feature request consideration"
      ],
      sla: "24h response"
    },
    {
      tier: "Professional",
      price: "$99/month",
      description: "Professional support with SLA",
      features: [
        "Priority email support (4h response)",
        "Phone support (business hours)",
        "Dedicated Slack channel",
        "Custom integration assistance"
      ],
      sla: "4h response"
    },
    {
      tier: "Enterprise",
      price: "Custom",
      description: "24/7 dedicated support",
      features: [
        "24/7 phone and email support",
        "Dedicated account manager",
        "Custom SLA agreements",
        "On-site training available"
      ],
      sla: "1h response"
    }
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get <span className="text-gradient">Support</span>
            </h1>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
              We're here to help you succeed with Deep Ubuntu Research. 
              Find answers, get assistance, and connect with our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Support <span className="text-gradient">Channels</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Choose the support channel that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3">{channel.title}</h3>
                <p className="text-dbu-fg-2 mb-4">{channel.description}</p>
                <ul className="space-y-2 mb-6">
                  {channel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-dbu-grad-from">•</span>
                      <span className="text-dbu-fg-2 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={channel.link}
                  className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 inline-block"
                >
                  Access Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-12">
            {faqItems.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-gradient">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.questions.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-dbu-bg rounded-xl p-6 border border-dbu-grad-from/20"
                    >
                      <h4 className="text-lg font-semibold text-dbu-fg mb-3">
                        {item.question}
                      </h4>
                      <p className="text-dbu-fg-2 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Troubleshooting <span className="text-gradient">Guides</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Detailed guides to solve common technical issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {troubleshootingGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/30 transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold mb-3">{guide.title}</h3>
                <p className="text-dbu-fg-2 mb-4">{guide.description}</p>
                <ul className="space-y-2 mb-6">
                  {guide.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center space-x-2">
                      <span className="text-dbu-grad-from">•</span>
                      <span className="text-dbu-fg-2">{topic}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/resources/documentation"
                  className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors font-medium"
                >
                  Read Guide →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Support <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Choose the level of support that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-dbu-bg rounded-2xl p-6 border transition-all duration-300 ${
                  tier.tier === 'Professional' 
                    ? 'border-dbu-grad-from/50 shadow-card' 
                    : 'border-dbu-grad-from/20 hover:border-dbu-grad-from/30'
                }`}
              >
                {tier.tier === 'Professional' && (
                  <div className="text-center mb-4">
                    <span className="bg-dbu-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-gradient mb-2">{tier.price}</div>
                  <p className="text-dbu-fg-2 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-dbu-fg-2 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <div className="text-sm text-dbu-fg-2 mb-1">SLA Response Time</div>
                  <div className="text-sm font-medium text-dbu-fg">{tier.sla}</div>
                </div>
                <Link
                  href="/contact"
                  className={`w-full py-3 text-center font-semibold rounded-xl transition-all duration-300 block ${
                    tier.tier === 'Professional'
                      ? 'bg-dbu-gradient hover:opacity-90 text-white'
                      : 'border border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:bg-dbu-gradient/10'
                  }`}
                >
                  {tier.tier === 'Community' ? 'Get Started' : 'Contact Sales'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Still Need <span className="text-gradient">Help?</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 inline-block"
              >
                Contact Support
              </Link>
              <Link 
                href="/resources/community"
                className="border border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-4 text-lg rounded-xl transition-all duration-300 inline-block"
              >
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 