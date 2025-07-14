"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Product } from '@/lib/mdx'

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'quickstart', label: 'Quickstart' },
    { id: 'pricing', label: 'Pricing' },
  ]

  return (
    <div className="bg-dbu-bg-2/30 rounded-2xl p-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-dbu-grad-from/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-t-lg font-medium transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'text-dbu-fg bg-dbu-grad-from/10 border-b-2 border-dbu-grad-from'
                : 'text-dbu-fg-2 hover:text-dbu-fg hover:bg-dbu-grad-from/5'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-dbu-gradient/10 rounded-t-lg -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-[400px]"
      >
        {activeTab === 'overview' && (
          <div>
            <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-6">
              Product Overview
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-dbu-fg mb-4">Key Benefits</h4>
                <ul className="space-y-3 text-dbu-fg-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dbu-gradient rounded-full mr-3 mt-2"></div>
                    High performance and reliability
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dbu-gradient rounded-full mr-3 mt-2"></div>
                    Easy integration and deployment
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dbu-gradient rounded-full mr-3 mt-2"></div>
                    Comprehensive documentation and support
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-dbu-fg mb-4">Technical Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {product.frontMatter.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-dbu-gradient/10 border border-dbu-grad-from/30 rounded-lg text-dbu-fg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-6">
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Advanced AI Models', description: 'State-of-the-art machine learning capabilities' },
                { title: 'Scalable Architecture', description: 'Built to handle enterprise-level workloads' },
                { title: 'Real-time Processing', description: 'Low-latency data processing and inference' },
                { title: 'Multi-platform Support', description: 'Works across different operating systems' },
                { title: 'API Integration', description: 'RESTful APIs for easy integration' },
                { title: '24/7 Monitoring', description: 'Comprehensive logging and monitoring tools' },
              ].map((feature, index) => (
                <div key={index} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20">
                  <h4 className="text-lg font-semibold text-dbu-fg mb-2">{feature.title}</h4>
                  <p className="text-dbu-fg-2 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div>
            <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-6">
              System Architecture
            </h3>
            <div className="bg-dbu-bg-2/50 rounded-xl p-8 border border-dbu-grad-from/20">
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold text-dbu-fg mb-4">Architecture Diagram</h4>
                <div className="bg-dbu-gradient/5 rounded-lg p-8 border border-dbu-grad-from/20">
                  <div className="space-y-4">
                    {['User Interface', 'API Gateway', 'Processing Engine', 'Data Storage'].map((layer, index) => (
                      <div key={layer} className="bg-dbu-gradient/10 rounded-lg p-4 text-center">
                        <span className="text-dbu-fg font-medium">{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quickstart' && (
          <div>
            <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-6">
              Quick Start Guide
            </h3>
            <div className="space-y-6">
              <div className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20">
                <h4 className="text-lg font-semibold text-dbu-fg mb-4">Installation</h4>
                <pre className="bg-dbu-bg rounded-lg p-4 text-dbu-fg font-mono text-sm overflow-x-auto">
                  <code>{`# Install via package manager
npm install ${product.slug}

# Or download binary
curl -sSf https://get.${product.slug}.dev | sh`}</code>
                </pre>
              </div>
              
              <div className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20">
                <h4 className="text-lg font-semibold text-dbu-fg mb-4">Basic Usage</h4>
                <pre className="bg-dbu-bg rounded-lg p-4 text-dbu-fg font-mono text-sm overflow-x-auto">
                  <code>{`import { ${product.frontMatter.title.replace(/\s+/g, '')} } from '${product.slug}'

// Initialize
const client = new ${product.frontMatter.title.replace(/\s+/g, '')}({
  apiKey: 'your-api-key'
})

// Use the service
const result = await client.process(data)`}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div>
            <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-6">
              Pricing Plans
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Starter',
                  price: 'Free',
                  description: 'Perfect for individual developers and small projects',
                  features: ['Up to 1K API calls/month', 'Community support', 'Basic features']
                },
                {
                  name: 'Pro',
                  price: '$99/month',
                  description: 'Ideal for growing teams and production applications',
                  features: ['Up to 100K API calls/month', 'Priority support', 'Advanced features', 'SLA guarantee']
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  description: 'For large organizations with specific requirements',
                  features: ['Unlimited API calls', 'Dedicated support', 'Custom integrations', 'On-premise deployment']
                }
              ].map((plan, index) => (
                <div key={index} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
                  <h4 className="text-xl font-semibold text-dbu-fg mb-2">{plan.name}</h4>
                  <div className="text-3xl font-bold text-gradient mb-4">{plan.price}</div>
                  <p className="text-dbu-fg-2 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-dbu-fg-2">
                        <div className="w-2 h-2 bg-dbu-gradient rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-dbu-gradient hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-opacity">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
} 