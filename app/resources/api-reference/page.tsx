import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, AnimatedCard } from '@/components/ui/animated-section'

// Server-safe motion component replacement
const motion = {
  div: ({ children, className, ...props }: any) => <div className={className}>{children}</div>
}

export const metadata: Metadata = {
  title: 'API Reference | Deep Ubuntu Research',
  description: 'Complete API documentation for Deep Ubuntu Research services. Authentication, endpoints, examples, and SDKs for developers.',
  keywords: ['API Reference', 'Developer Documentation', 'REST API', 'SDKs', 'Authentication', 'Deep Ubuntu Research'],
  openGraph: {
    title: 'API Reference | Deep Ubuntu Research',
    description: 'Complete API documentation for Deep Ubuntu Research services. Authentication, endpoints, examples, and SDKs for developers.',
  },
}

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-dbu-fg mb-6">
              API <span className="text-gradient">Reference</span>
            </h1>
            <p className="text-xl md:text-2xl text-dbu-fg-2 mb-8 max-w-3xl mx-auto">
              Complete API documentation for Deep Ubuntu Research services.
              Authentication, endpoints, examples, and SDKs for developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#getting-started"
                className="bg-dbu-gradient text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="#examples"
                className="border-2 border-dbu-grad-from text-dbu-grad-from px-8 py-4 rounded-lg hover:bg-dbu-grad-from hover:text-white transition-colors text-lg font-semibold"
              >
                View Examples
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Quick setup guide to start using our APIs in minutes.
              All you need is an API key and your favorite programming language.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20">
              <div className="w-12 h-12 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Get API Key</h3>
              <p className="text-dbu-fg-2 mb-4">
                Sign up for an account and generate your API key from the dashboard.
              </p>
              <Link href="/contact" className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors">
                Get Your Key →
              </Link>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20">
              <div className="w-12 h-12 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Make First Call</h3>
              <p className="text-dbu-fg-2 mb-4">
                Use our authentication endpoint to verify your API key and get started.
              </p>
              <Link href="#authentication" className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors">
                View Auth Docs →
              </Link>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20">
              <div className="w-12 h-12 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Build & Deploy</h3>
              <p className="text-dbu-fg-2 mb-4">
                Integrate our APIs into your applications and deploy with confidence.
              </p>
              <Link href="#sdks" className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors">
                Download SDKs →
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Comprehensive API endpoints organized by functionality.
              Each endpoint includes detailed documentation and code examples.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.1} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-2xl font-semibold text-dbu-fg mb-4">Authentication</h3>
              <p className="text-dbu-fg-2 mb-6">
                Secure authentication and authorization endpoints for API access management.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">POST /auth/login</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Public</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">POST /auth/refresh</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Auth</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono text-sm">POST /auth/logout</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Auth</span>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-2xl font-semibold text-dbu-fg mb-4">Deep Ubuntu AI</h3>
              <p className="text-dbu-fg-2 mb-6">
                Core AI processing endpoints for text analysis, generation, and understanding.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">POST /ai/analyze</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Premium</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">POST /ai/generate</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Premium</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono text-sm">GET /ai/models</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Public</span>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-2xl font-semibold text-dbu-fg mb-4">Data Management</h3>
              <p className="text-dbu-fg-2 mb-6">
                Endpoints for managing datasets, training data, and custom model configurations.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">GET /data/datasets</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Auth</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">POST /data/upload</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Auth</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono text-sm">DELETE /data/&#123;id&#125;</span>
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">Owner</span>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-2xl font-semibold text-dbu-fg mb-4">Analytics</h3>
              <p className="text-dbu-fg-2 mb-6">
                Usage analytics, performance metrics, and reporting endpoints.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">GET /analytics/usage</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Auth</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dbu-grad-from/10">
                  <span className="font-mono text-sm">GET /analytics/metrics</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Premium</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono text-sm">POST /analytics/report</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Premium</span>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Code Examples
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Ready-to-use code examples in popular programming languages.
              Copy, paste, and start building immediately.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-lg font-semibold text-dbu-fg mb-4">Python</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm">
                <pre className="text-green-400">
{`import requests

url = "https://api.deepubuntu.com/ai/analyze"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "text": "Hello Ubuntu",
    "language": "en"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
                </pre>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-lg font-semibold text-dbu-fg mb-4">JavaScript</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm">
                <pre className="text-blue-400">
{`const response = await fetch('https://api.deepubuntu.com/ai/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'Hello Ubuntu',
    language: 'en'
  })
});

const data = await response.json();
console.log(data);`}
                </pre>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-lg font-semibold text-dbu-fg mb-4">cURL</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm">
                <pre className="text-yellow-400">
{`curl -X POST \\
  https://api.deepubuntu.com/ai/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello Ubuntu",
    "language": "en"
  }'`}
                </pre>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* SDKs and Rate Limits */}
      <section id="sdks" className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-dbu-fg mb-6">Official SDKs</h2>
              <p className="text-dbu-fg-2 mb-8">
                Use our official SDKs for faster integration and better developer experience.
              </p>
              <div className="space-y-4">
                <AnimatedCard delay={0.1} className="bg-dbu-bg rounded-lg p-4 border border-dbu-grad-from/20 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-dbu-fg">Python SDK</h3>
                    <p className="text-sm text-dbu-fg-2">Full-featured Python library</p>
                  </div>
                  <Link href="#" className="bg-dbu-gradient text-white px-4 py-2 rounded hover:opacity-90 transition-colors">
                    Download
                  </Link>
                </AnimatedCard>
                <AnimatedCard delay={0.2} className="bg-dbu-bg rounded-lg p-4 border border-dbu-grad-from/20 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-dbu-fg">Node.js SDK</h3>
                    <p className="text-sm text-dbu-fg-2">JavaScript/TypeScript support</p>
                  </div>
                  <Link href="#" className="bg-dbu-gradient text-white px-4 py-2 rounded hover:opacity-90 transition-colors">
                    Download
                  </Link>
                </AnimatedCard>
                <AnimatedCard delay={0.3} className="bg-dbu-bg rounded-lg p-4 border border-dbu-grad-from/20 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-dbu-fg">Go SDK</h3>
                    <p className="text-sm text-dbu-fg-2">Lightweight Go implementation</p>
                  </div>
                  <Link href="#" className="bg-dbu-gradient text-white px-4 py-2 rounded hover:opacity-90 transition-colors">
                    Download
                  </Link>
                </AnimatedCard>
                <AnimatedCard delay={0.4} className="bg-dbu-bg rounded-lg p-4 border border-dbu-grad-from/20 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-dbu-fg">Java SDK</h3>
                    <p className="text-sm text-dbu-fg-2">Enterprise Java integration</p>
                  </div>
                  <Link href="#" className="bg-dbu-gradient text-white px-4 py-2 rounded hover:opacity-90 transition-colors">
                    Download
                  </Link>
                </AnimatedCard>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-bold text-dbu-fg mb-6">Rate Limits</h2>
              <p className="text-dbu-fg-2 mb-8">
                API rate limits based on your subscription plan. All limits are per API key.
              </p>
              <div className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dbu-grad-from/20">
                      <th className="text-left py-2 text-dbu-fg">Plan</th>
                      <th className="text-right py-2 text-dbu-fg">Requests/Min</th>
                      <th className="text-right py-2 text-dbu-fg">Requests/Day</th>
                    </tr>
                  </thead>
                  <tbody className="text-dbu-fg-2">
                    <tr className="border-b border-dbu-grad-from/10">
                      <td className="py-2">Free</td>
                      <td className="text-right py-2">10</td>
                      <td className="text-right py-2">1,000</td>
                    </tr>
                    <tr className="border-b border-dbu-grad-from/10">
                      <td className="py-2">Starter</td>
                      <td className="text-right py-2">100</td>
                      <td className="text-right py-2">10,000</td>
                    </tr>
                    <tr className="border-b border-dbu-grad-from/10">
                      <td className="py-2">Professional</td>
                      <td className="text-right py-2">1,000</td>
                      <td className="text-right py-2">100,000</td>
                    </tr>
                    <tr>
                      <td className="py-2">Enterprise</td>
                      <td className="text-right py-2">Custom</td>
                      <td className="text-right py-2">Custom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* API Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-dbu-fg mb-6">API Status</h2>
            <p className="text-xl text-dbu-fg-2 mb-8">
              Real-time status of our API services and infrastructure.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
                <h3 className="font-semibold text-dbu-fg">API Gateway</h3>
                <p className="text-sm text-dbu-fg-2">Operational</p>
                <p className="text-xs text-dbu-fg-2 mt-2">99.99% uptime</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
                <h3 className="font-semibold text-dbu-fg">AI Services</h3>
                <p className="text-sm text-dbu-fg-2">Operational</p>
                <p className="text-xs text-dbu-fg-2 mt-2">99.95% uptime</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
                <h3 className="font-semibold text-dbu-fg">Database</h3>
                <p className="text-sm text-dbu-fg-2">Operational</p>
                <p className="text-xs text-dbu-fg-2 mt-2">99.98% uptime</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your API key today and start integrating powerful AI capabilities
              into your applications in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-dbu-fg px-8 py-4 rounded-lg hover:bg-white/90 transition-colors text-lg font-semibold"
              >
                Get API Key
              </Link>
              <Link
                href="/resources/documentation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-dbu-fg transition-colors text-lg font-semibold"
              >
                Full Documentation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
} 