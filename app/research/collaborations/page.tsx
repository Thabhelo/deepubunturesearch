import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Research Collaborations | Deep Ubuntu Research',
  description: 'Partner with Deep Ubuntu Research on AI for Africa. Explore our academic partnerships, joint research opportunities, and collaborative projects.',
  keywords: ['Research Partnerships', 'Academic Collaboration', 'AI Research', 'African Universities', 'Joint Research Projects'],
  openGraph: {
    title: 'Research Collaborations | Deep Ubuntu Research',
    description: 'Partner with Deep Ubuntu Research on AI for Africa. Explore our academic partnerships and collaborative opportunities.',
    type: 'website',
  },
}

export default function CollaborationsPage() {
  const partnerships = [
    {
      institution: "University of Cape Town",
      country: "South Africa",
      type: "Academic Partnership",
      focus: "Natural Language Processing",
      duration: "2023-2025",
      status: "Active",
      projects: [
        "African Language Foundation Models",
        "Cross-lingual Transfer Learning",
        "Cultural Bias in AI Systems"
      ],
      outcomes: ["3 joint publications", "2 PhD students funded", "1 workshop organized"],
      flag: "🇿🇦"
    },
    {
      institution: "University of Nairobi",
      country: "Kenya",
      type: "Research Collaboration",
      focus: "Agricultural AI",
      duration: "2023-2024",
      status: "Active",
      projects: [
        "Computer Vision for Crop Monitoring",
        "Pest Detection Systems",
        "Climate-Adaptive Agriculture"
      ],
      outcomes: ["2 joint publications", "1 deployed system", "4 MSc projects"],
      flag: "🇰🇪"
    },
    {
      institution: "Makerere University",
      country: "Uganda",
      type: "Joint Research Program",
      focus: "Healthcare AI",
      duration: "2024-2026",
      status: "Active",
      projects: [
        "Medical Text Processing",
        "Diagnostic Support Systems",
        "Health Data Privacy"
      ],
      outcomes: ["1 joint publication", "2 prototypes", "3 researchers trained"],
      flag: "🇺🇬"
    },
    {
      institution: "University of Ghana",
      country: "Ghana",
      type: "Academic Partnership",
      focus: "Language Technology",
      duration: "2023-2025",
      status: "Active",
      projects: [
        "Twi Language Models",
        "Speech Recognition Systems",
        "Educational AI Applications"
      ],
      outcomes: ["2 joint publications", "1 dataset released", "5 students trained"],
      flag: "🇬🇭"
    },
    {
      institution: "University of Lagos",
      country: "Nigeria",
      type: "Research Collaboration",
      focus: "Fintech AI",
      duration: "2024-2025",
      status: "Active",
      projects: [
        "Financial Inclusion AI",
        "Fraud Detection Systems",
        "Local Currency Processing"
      ],
      outcomes: ["1 joint publication", "2 pilot projects", "3 researchers trained"],
      flag: "🇳🇬"
    },
    {
      institution: "Kigali Institute of Science and Technology",
      country: "Rwanda",
      type: "Technology Transfer",
      focus: "Infrastructure AI",
      duration: "2023-2024",
      status: "Completed",
      projects: [
        "Smart City Solutions",
        "Transportation Optimization",
        "Energy Management Systems"
      ],
      outcomes: ["1 joint publication", "3 deployed systems", "2 patents filed"],
      flag: "🇷🇼"
    }
  ]

  const collaborationTypes = [
    {
      title: "Joint Research Projects",
      description: "Partner with us on cutting-edge AI research projects addressing African challenges.",
      icon: "🔬",
      benefits: [
        "Access to our expertise and resources",
        "Joint publication opportunities",
        "Funding support for students",
        "Access to proprietary datasets"
      ]
    },
    {
      title: "Academic Partnerships",
      description: "Long-term partnerships with universities for sustained research collaboration.",
      icon: "🏫",
      benefits: [
        "Faculty exchange programs",
        "Student mentorship opportunities",
        "Joint degree programs",
        "Shared research infrastructure"
      ]
    },
    {
      title: "Technology Transfer",
      description: "Collaborate on transferring our AI technologies to practical applications.",
      icon: "🚀",
      benefits: [
        "Access to our AI technologies",
        "Implementation support",
        "Training and workshops",
        "Commercialization guidance"
      ]
    },
    {
      title: "Data Partnerships",
      description: "Work together on collecting, curating, and sharing research datasets.",
      icon: "📊",
      benefits: [
        "Joint data collection projects",
        "Shared dataset access",
        "Ethical data practices",
        "Community impact measurement"
      ]
    }
  ]

  const researchAreas = [
    {
      area: "Natural Language Processing",
      description: "African language models, cross-lingual transfer, cultural bias mitigation",
      openProjects: 3,
      fundingAvailable: true
    },
    {
      area: "Computer Vision",
      description: "Agricultural AI, medical imaging, environmental monitoring",
      openProjects: 2,
      fundingAvailable: true
    },
    {
      area: "Speech Technology",
      description: "Multi-lingual ASR, TTS systems, accent adaptation",
      openProjects: 2,
      fundingAvailable: false
    },
    {
      area: "AI Ethics & Fairness",
      description: "Bias detection, cultural sensitivity, responsible AI deployment",
      openProjects: 1,
      fundingAvailable: true
    },
    {
      area: "Edge AI",
      description: "Offline deployment, resource optimization, mobile AI",
      openProjects: 2,
      fundingAvailable: false
    },
    {
      area: "Healthcare AI",
      description: "Medical text processing, diagnostic support, health data privacy",
      openProjects: 3,
      fundingAvailable: true
    }
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Research <span className="text-gradient">Collaborations</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            Partner with us to advance AI for Africa. Join our network of academic institutions, 
            research organizations, and industry partners working together to democratize AI.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">25+</div>
              <div className="text-dbu-fg-2">Partner Institutions</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-dbu-fg-2">Joint Projects</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">100+</div>
              <div className="text-dbu-fg-2">Researchers Trained</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">12</div>
              <div className="text-dbu-fg-2">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Collaboration <span className="text-gradient">Types</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Multiple ways to partner with us based on your institution&apos;s needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                  {type.title}
                </h3>
                <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-dbu-fg-2">
                      <span className="w-1.5 h-1.5 bg-dbu-grad-from rounded-full mt-2"></span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Current <span className="text-gradient">Partnerships</span>
          </h2>
          
          <div className="space-y-8">
            {partnerships.map((partnership, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{partnership.flag}</span>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-dbu-fg">
                          {partnership.institution}
                        </h3>
                        <p className="text-dbu-fg-2">{partnership.country}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-4">
                        <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm">
                          {partnership.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          partnership.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {partnership.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-dbu-fg font-medium mb-3">Focus Area:</h4>
                        <p className="text-dbu-fg-2 text-sm">{partnership.focus}</p>
                        <div className="mt-2 text-sm text-dbu-fg-2">
                          Duration: {partnership.duration}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-dbu-fg font-medium mb-3">Key Outcomes:</h4>
                        <div className="space-y-1">
                          {partnership.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-dbu-fg-2">
                              <span className="w-1.5 h-1.5 bg-dbu-grad-from rounded-full"></span>
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-dbu-fg font-medium mb-3">Active Projects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partnership.projects.map((project, i) => (
                          <span key={i} className="px-3 py-1 bg-dbu-gradient/10 text-dbu-fg-2 rounded-lg text-sm">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Open Research <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Current research areas where we&apos;re actively seeking collaboration partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, _) => (
              <div
                key={_}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-semibold text-dbu-fg">
                    {area.area}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-dbu-grad-from text-sm font-medium">
                      {area.openProjects} open
                    </span>
                    {area.fundingAvailable && (
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    )}
                  </div>
                </div>
                
                <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    area.fundingAvailable ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {area.fundingAvailable ? '💰 Funding Available' : '📋 Projects Only'}
                  </span>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 text-sm rounded-lg transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Partnership <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              How to start a research collaboration with Deep Ubuntu Research
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description: "Reach out with your research interests and institutional background"
              },
              {
                step: "2",
                title: "Proposal Development",
                description: "Work together to develop a detailed research proposal"
              },
              {
                step: "3",
                title: "Agreement & Funding",
                description: "Finalize partnership agreement and secure funding if needed"
              },
              {
                step: "4",
                title: "Project Launch",
                description: "Begin collaboration with regular progress reviews"
              }
            ].map((step, index) => (
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
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Collaborate?</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Join our growing network of research partners and contribute to 
            the advancement of AI for Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                Start a Partnership
              </Button>
            </Link>
            <Link href="/research/publications">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                View Our Research
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 