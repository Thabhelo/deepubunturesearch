import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, AnimatedCard } from '@/components/ui/animated-section'

// Server-safe motion component replacement
const motion = {
  div: ({ children, className, ...props }: any) => <div className={className}>{children}</div>
}

export const metadata: Metadata = {
  title: 'Community | Deep Ubuntu Research',
  description: 'Join the Deep Ubuntu Research community. Connect with developers, researchers, and AI enthusiasts building the future of African AI.',
  keywords: ['Community', 'Developers', 'AI Community', 'African AI', 'Open Source', 'Deep Ubuntu Research'],
  openGraph: {
    title: 'Community | Deep Ubuntu Research',
    description: 'Join the Deep Ubuntu Research community. Connect with developers, researchers, and AI enthusiasts building the future of African AI.',
    url: 'https://deepubuntu.com/resources/community',
  },
}

export default function CommunityPage() {
  const communityStats = [
    { label: "Community Members", value: "12,000+", icon: "👥" },
    { label: "Countries Represented", value: "54", icon: "🌍" },
    { label: "Open Source Projects", value: "150+", icon: "🔧" },
    { label: "Monthly Events", value: "25+", icon: "📅" }
  ]

  const communityChannels = [
    {
      name: "Discord Server",
      description: "Real-time chat with developers and researchers",
      members: "8,500+",
      icon: "💬",
      link: "https://discord.gg/deepubuntu",
      features: [
        "Technical discussions",
        "Code sharing",
        "Live support",
        "Community events"
      ]
    },
    {
      name: "GitHub Organization",
      description: "Contribute to our open source projects",
      members: "2,800+",
      icon: "🐙",
      link: "https://github.com/deepubuntu",
      features: [
        "Source code access",
        "Issue tracking",
        "Pull requests",
        "Code reviews"
      ]
    },
    {
      name: "Forum",
      description: "In-depth discussions and Q&A",
      members: "5,200+",
      icon: "💭",
      link: "https://forum.deepubuntu.com",
      features: [
        "Technical questions",
        "Project showcases",
        "Best practices",
        "Career advice"
      ]
    },
    {
      name: "LinkedIn Group",
      description: "Professional networking and opportunities",
      members: "3,400+",
      icon: "💼",
      link: "https://linkedin.com/groups/deepubuntu",
      features: [
        "Job postings",
        "Industry news",
        "Professional networking",
        "Career development"
      ]
    }
  ]

  const upcomingEvents = [
    {
      title: "African AI Summit 2024",
      date: "March 15-17, 2024",
      location: "Cape Town, South Africa",
      type: "Conference",
      description: "The largest AI conference in Africa, featuring keynotes, workshops, and networking opportunities.",
      attendees: "2,000+",
      registration: "https://africanaai.summit.com"
    },
    {
      title: "Deep Ubuntu Developer Workshop",
      date: "March 28, 2024",
      location: "Online",
      type: "Workshop",
      description: "Hands-on workshop covering advanced features of Deep Ubuntu AI models and APIs.",
      attendees: "500+",
      registration: "https://workshop.deepubuntu.com"
    },
    {
      title: "Open Source Contribution Day",
      date: "April 5, 2024",
      location: "Nairobi, Kenya",
      type: "Hackathon",
      description: "A day dedicated to contributing to open source projects in the African AI ecosystem.",
      attendees: "300+",
      registration: "https://hackathon.deepubuntu.com"
    },
    {
      title: "AI for Good: Healthcare Edition",
      date: "April 12, 2024",
      location: "Lagos, Nigeria",
      type: "Conference",
      description: "Focus on AI applications in healthcare across Africa, with case studies and demos.",
      attendees: "800+",
      registration: "https://healthcare.deepubuntu.com"
    }
  ]

  const communityProjects = [
    {
      title: "Ubuntu Language Models",
      description: "Community-driven development of language models for African languages",
      contributors: "120+",
      languages: "24 languages",
      status: "Active",
      github: "https://github.com/deepubuntu/ubuntu-language-models"
    },
    {
      title: "African Voice Dataset",
      description: "Collaborative effort to create comprehensive voice datasets for African languages",
      contributors: "85+",
      languages: "18 languages",
      status: "Active",
      github: "https://github.com/deepubuntu/african-voice-dataset"
    },
    {
      title: "Education AI Platform",
      description: "Open source platform for AI-powered education tools",
      contributors: "65+",
      languages: "12 languages",
      status: "Beta",
      github: "https://github.com/deepubuntu/education-ai-platform"
    },
    {
      title: "Agricultural AI Toolkit",
      description: "Tools and models for AI applications in African agriculture",
      contributors: "45+",
      languages: "8 languages",
      status: "Alpha",
      github: "https://github.com/deepubuntu/agricultural-ai-toolkit"
    }
  ]

  const ambassadorProgram = {
    benefits: [
      "Early access to new features",
      "Direct line to our research team",
      "Speaker opportunities at events",
      "Co-marketing opportunities",
      "Exclusive ambassador merchandise",
      "Annual ambassador summit"
    ],
    requirements: [
      "Active community participation",
      "Technical expertise in AI/ML",
      "Content creation (blogs, tutorials)",
      "Event speaking experience",
      "Strong communication skills",
      "Commitment to African AI development"
    ]
  }

  const contributionAreas = [
    {
      area: "Code Contributions",
      description: "Contribute to our open source projects",
      skills: ["Python", "JavaScript", "Rust", "Go"],
      icon: "💻"
    },
    {
      area: "Documentation",
      description: "Help improve our documentation and guides",
      skills: ["Technical writing", "Markdown", "API documentation"],
      icon: "📚"
    },
    {
      area: "Community Support",
      description: "Help answer questions and support other users",
      skills: ["Communication", "Problem-solving", "Mentoring"],
      icon: "🤝"
    },
    {
      area: "Research",
      description: "Collaborate on research projects and papers",
      skills: ["Machine Learning", "NLP", "Research methodology"],
      icon: "🔬"
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
              Join Our <span className="text-gradient">Community</span>
            </h1>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
              Connect with developers, researchers, and AI enthusiasts who are building 
              the future of African artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-dbu-fg-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Community <span className="text-gradient">Channels</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Choose your preferred way to connect with the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{channel.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-display font-bold">{channel.name}</h3>
                      <span className="text-sm text-dbu-fg-2">{channel.members}</span>
                    </div>
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 inline-block"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Join us at conferences, workshops, and community events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm font-medium text-dbu-grad-from bg-dbu-gradient/10 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-dbu-fg-2">{event.date}</div>
                    <div className="text-xs text-dbu-fg-2">{event.location}</div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{event.title}</h3>
                <p className="text-dbu-fg-2 mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-dbu-fg-2">
                    Expected: {event.attendees} attendees
                  </div>
                  <Link 
                    href={event.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors font-medium"
                  >
                    Register →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Community <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Collaborative projects driving AI innovation in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-bold">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Beta' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-dbu-fg-2 mb-4">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-dbu-fg-2">Contributors</div>
                    <div className="font-semibold text-dbu-fg">{project.contributors}</div>
                  </div>
                  <div>
                    <div className="text-sm text-dbu-fg-2">Languages</div>
                    <div className="font-semibold text-dbu-fg">{project.languages}</div>
                  </div>
                </div>
                <Link 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors font-medium"
                >
                  View on GitHub →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              How to <span className="text-gradient">Contribute</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              There are many ways to contribute to the Deep Ubuntu community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributionAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-display font-bold mb-3">{area.area}</h3>
                <p className="text-dbu-fg-2 mb-4">{area.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-dbu-fg">Skills needed:</div>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs bg-dbu-gradient/10 text-dbu-grad-from px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ambassador <span className="text-gradient">Program</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Become a Deep Ubuntu Ambassador and help shape the future of AI in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dbu-bg rounded-2xl p-8 border border-dbu-grad-from/20"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-gradient">
                Benefits
              </h3>
              <ul className="space-y-4">
                {ambassadorProgram.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-dbu-fg-2">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dbu-bg rounded-2xl p-8 border border-dbu-grad-from/20"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-gradient">
                Requirements
              </h3>
              <ul className="space-y-4">
                {ambassadorProgram.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-dbu-grad-from mt-1">•</span>
                    <span className="text-dbu-fg-2">{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 inline-block"
            >
              Apply to be an Ambassador
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to <span className="text-gradient">Get Involved?</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and researchers building the future of AI in Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://discord.gg/deepubuntu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 inline-block"
              >
                Join Discord
              </Link>
              <Link 
                href="https://github.com/deepubuntu"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-4 text-lg rounded-xl transition-all duration-300 inline-block"
              >
                View GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 