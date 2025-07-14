import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers at Deep Ubuntu Research | Join Our AI Mission',
  description: 'Join Deep Ubuntu Research and help democratize AI for Africa and beyond. Explore open positions, benefits, and be part of building the future of inclusive artificial intelligence.',
  keywords: ['Deep Ubuntu Research Jobs', 'AI Careers', 'Machine Learning Jobs', 'Research Positions', 'Africa AI Jobs', 'Tech Careers'],
  openGraph: {
    title: 'Careers at Deep Ubuntu Research | Join Our AI Mission',
    description: 'Join Deep Ubuntu Research and help democratize AI for Africa and beyond.',
    type: 'website',
  },
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior ML Engineer",
      department: "Engineering",
      location: "Remote / Cape Town",
      type: "Full-time",
      description: "Lead development of foundation models for African languages and contexts.",
      requirements: [
        "5+ years ML/DL experience",
        "PyTorch/TensorFlow expertise",
        "Experience with large-scale model training",
        "Knowledge of African languages (preferred)"
      ],
      link: "#apply"
    },
    {
      title: "Research Scientist - NLP",
      department: "Research",
      location: "Remote / Nairobi",
      type: "Full-time",
      description: "Advance the state of low-resource language processing for African languages.",
      requirements: [
        "PhD in NLP/CL/ML",
        "Publication record in top-tier venues",
        "Experience with multilingual models",
        "African language expertise"
      ],
      link: "#apply"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Lagos",
      type: "Full-time",
      description: "Build and maintain offline-first AI infrastructure for emerging markets.",
      requirements: [
        "Kubernetes/Docker experience",
        "CI/CD pipeline expertise",
        "Cloud infrastructure (AWS/GCP)",
        "Experience with edge computing"
      ],
      link: "#apply"
    },
    {
      title: "Product Manager - AI Tools",
      department: "Product",
      location: "Remote / Johannesburg",
      type: "Full-time",
      description: "Drive product strategy for developer tools and AI platforms.",
      requirements: [
        "5+ years product management",
        "Technical background in AI/ML",
        "Experience with developer tools",
        "Understanding of African markets"
      ],
      link: "#apply"
    },
    {
      title: "Data Scientist",
      department: "Research",
      location: "Remote / Accra",
      type: "Full-time",
      description: "Analyze and curate datasets for African language and vision models.",
      requirements: [
        "MS in Data Science/Statistics",
        "Python/R expertise",
        "Experience with large datasets",
        "Knowledge of data privacy/ethics"
      ],
      link: "#apply"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Kigali",
      type: "Full-time",
      description: "Design intuitive interfaces for AI tools and platforms.",
      requirements: [
        "5+ years UI/UX design",
        "Figma/Adobe Creative Suite",
        "Experience with technical products",
        "Understanding of accessibility"
      ],
      link: "#apply"
    },
  ]

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Market-leading salaries with equity participation in our mission."
    },
    {
      icon: "🏥",
      title: "Comprehensive Health",
      description: "Full health, dental, and vision coverage for you and your family."
    },
    {
      icon: "🌍",
      title: "Remote-First Culture",
      description: "Work from anywhere in Africa with flexible hours and async communication."
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and research sabbaticals."
    },
    {
      icon: "🏖️",
      title: "Unlimited PTO",
      description: "Take the time you need to rest and recharge with unlimited paid time off."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Support",
      description: "Parental leave, childcare support, and family-friendly policies."
    },
  ]

  const values = [
    {
      title: "Ubuntu Philosophy",
      description: "We believe in collective intelligence and shared humanity.",
      icon: "🤝"
    },
    {
      title: "Inclusive Innovation",
      description: "Building AI that works for everyone, especially the underserved.",
      icon: "🌈"
    },
    {
      title: "Open Source",
      description: "Contributing to the global commons while building sustainable business.",
      icon: "🔓"
    },
    {
      title: "Impact Focus",
      description: "Every decision is measured against our mission to democratize AI.",
      icon: "🎯"
    },
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Join Our <span className="text-gradient">Mission</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed mb-8">
            Help us democratize artificial intelligence for Africa and beyond. 
            Build the future of inclusive AI with a world-class team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <a href="#positions">View Open Positions</a>
            </Button>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              We&apos;re building more than just AI - we&apos;re creating a movement for inclusive technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, _) => (
              <div
                key={value.title}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                  {value.title}
                </h3>
                <p className="text-dbu-fg-2 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Why Join <span className="text-gradient">Deep Ubuntu</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              We offer competitive benefits and a mission-driven environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, _) => (
              <div
                key={benefit.title}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dbu-fg-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Find your perfect role in our growing team
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, _) => (
              <div
                key={position.title}
                className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-display font-semibold text-dbu-fg">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-dbu-fg-2">
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>💼</span>
                        <span>{position.type}</span>
                      </div>
                    </div>

                    <p className="text-dbu-fg-2 mb-4 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-dbu-fg font-semibold mb-2">Requirements:</h4>
                      <ul className="text-dbu-fg-2 text-sm space-y-1">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-dbu-grad-from mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Button 
                      size="lg"
                      className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Application <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Our hiring process is designed to be thorough yet respectful of your time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Submit your application with resume and cover letter"
              },
              {
                step: "2",
                title: "Screen",
                description: "Initial phone/video call with our talent team"
              },
              {
                step: "3",
                title: "Interview",
                description: "Technical and cultural fit interviews with the team"
              },
              {
                step: "4",
                title: "Offer",
                description: "Reference checks and offer discussion"
              }
            ].map((step, _) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-dbu-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-2">
                  {step.title}
                </h3>
                <p className="text-dbu-fg-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Make an Impact?</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Join us in building the future of AI for Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <a href="#positions">Browse Positions</a>
            </Button>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Questions? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 