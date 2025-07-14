import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, AnimatedCard } from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'AI Agents | Deep Ubuntu Research',
  description: 'Intelligent automation solutions powered by Deep Ubuntu Research. Deploy autonomous AI agents for complex workflows, decision-making, and task automation.',
  keywords: ['AI Agents', 'Automation', 'Intelligent Systems', 'Autonomous AI', 'Workflow Automation', 'Deep Ubuntu Research'],
  openGraph: {
    title: 'AI Agents | Deep Ubuntu Research',
    description: 'Intelligent automation solutions powered by Deep Ubuntu Research. Deploy autonomous AI agents for complex workflows, decision-making, and task automation.',
  },
}

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-dbu-fg mb-6">
              AI <span className="text-gradient">Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-dbu-fg-2 mb-8 max-w-3xl mx-auto">
              Intelligent automation solutions that think, learn, and act autonomously. Deploy AI agents for complex workflows, decision-making, and task automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dbu-gradient text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              >
                Deploy AI Agents
              </Link>
              <Link
                href="/resources/documentation"
                className="border-2 border-dbu-grad-from text-dbu-grad-from px-8 py-4 rounded-lg hover:bg-dbu-grad-from hover:text-white transition-colors text-lg font-semibold"
              >
                View Documentation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Autonomous Capabilities
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Our AI agents possess advanced capabilities that enable them to operate independently
              and efficiently in complex environments.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <AnimatedCard delay={0.1} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Autonomous Decision Making</h3>
              <p className="text-dbu-fg-2">
                Advanced reasoning capabilities enable agents to make complex decisions without human intervention,
                adapting to changing conditions in real-time.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Natural Language Processing</h3>
              <p className="text-dbu-fg-2">
                Sophisticated language understanding enables agents to communicate naturally,
                interpret instructions, and generate human-like responses.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Workflow Integration</h3>
              <p className="text-dbu-fg-2">
                Seamlessly integrate with existing systems and workflows, automating complex processes
                while maintaining compatibility with your infrastructure.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Learning & Adaptation</h3>
              <p className="text-dbu-fg-2">
                Continuous learning from experience and feedback allows agents to improve performance
                and adapt to new challenges over time.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Discover how AI agents are transforming industries through intelligent automation
              and autonomous decision-making.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedCard delay={0.1} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-dbu-fg">Healthcare Assistant</h3>
              </div>
              <p className="text-dbu-fg-2 mb-4">
                AI agents assist healthcare professionals by monitoring patient data, scheduling appointments,
                managing medical records, and providing clinical decision support in real-time.
              </p>
              <ul className="space-y-2 text-dbu-fg-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 patient monitoring and alerts
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated appointment scheduling
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Clinical decision support
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-dbu-fg">Financial Advisor</h3>
              </div>
              <p className="text-dbu-fg-2 mb-4">
                Intelligent financial agents analyze market data, manage portfolios, detect fraud,
                and provide personalized investment recommendations based on risk profiles.
              </p>
              <ul className="space-y-2 text-dbu-fg-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time market analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated portfolio rebalancing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fraud detection and prevention
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-dbu-fg">Education Tutor</h3>
              </div>
              <p className="text-dbu-fg-2 mb-4">
                Personalized AI tutors adapt to individual learning styles, provide real-time feedback,
                track progress, and create customized learning paths for optimal educational outcomes.
              </p>
              <ul className="space-y-2 text-dbu-fg-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Adaptive learning algorithms
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time performance feedback
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personalized curriculum design
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-dbu-fg">Agricultural Optimizer</h3>
              </div>
              <p className="text-dbu-fg-2 mb-4">
                Smart farming agents monitor crop health, optimize irrigation, predict weather impacts,
                and automate farming operations for maximum yield and sustainability.
              </p>
              <ul className="space-y-2 text-dbu-fg-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Precision irrigation management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Crop health monitoring
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weather prediction and adaptation
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Choose the AI agent solution that best fits your needs, from small-scale automation
              to enterprise-wide intelligent systems.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-2xl font-bold text-dbu-fg mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gradient mb-2">$99<span className="text-lg text-dbu-fg-2">/month</span></div>
              <p className="text-dbu-fg-2 mb-6">Perfect for small teams exploring AI automation</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 5 AI agents
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic analytics dashboard
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email support
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pre-built templates
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-dbu-gradient/20 text-dbu-grad-from py-3 px-6 rounded-lg hover:bg-dbu-gradient hover:text-white transition-colors text-center font-semibold block"
              >
                Get Started
              </Link>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg rounded-xl p-8 shadow-xl border-2 border-dbu-grad-from relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-dbu-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-dbu-fg mb-4">Professional</h3>
              <div className="text-4xl font-bold text-gradient mb-2">$299<span className="text-lg text-dbu-fg-2">/month</span></div>
              <p className="text-dbu-fg-2 mb-6">Ideal for growing businesses and departments</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 25 AI agents
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics & insights
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support (24/7)
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API access
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-dbu-gradient text-white py-3 px-6 rounded-lg hover:opacity-90 transition-colors text-center font-semibold block"
              >
                Choose Professional
              </Link>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg rounded-xl p-8 shadow-lg border border-dbu-grad-from/20">
              <h3 className="text-2xl font-bold text-dbu-fg mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gradient mb-2">Custom</div>
              <p className="text-dbu-fg-2 mb-6">Tailored solutions for large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited AI agents
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  White-label solutions
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  On-premise deployment
                </li>
                <li className="flex items-center text-dbu-fg-2">
                  <svg className="w-5 h-5 text-dbu-grad-from mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SLA guarantees
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-dbu-gradient/20 text-dbu-grad-from py-3 px-6 rounded-lg hover:bg-dbu-gradient hover:text-white transition-colors text-center font-semibold block"
              >
                Contact Sales
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Deploy AI Agents?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your workflows with intelligent automation. Start building your AI agent ecosystem
              today and experience the future of autonomous operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-dbu-fg px-8 py-4 rounded-lg hover:bg-white/90 transition-colors text-lg font-semibold"
              >
                Get Started Now
              </Link>
              <Link
                href="/resources/documentation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-dbu-fg transition-colors text-lg font-semibold"
              >
                View Documentation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
} 