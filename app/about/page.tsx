"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Amara Okafor",
      role: "Founder & CEO",
      bio: "Former Google AI researcher specializing in African language models and ethical AI development.",
      image: "👩🏿‍🔬",
    },
    {
      name: "Prof. Kwame Asante",
      role: "Chief Research Officer",
      bio: "Leading expert in computational linguistics and low-resource language processing.",
      image: "👨🏿‍🏫",
    },
    {
      name: "Dr. Fatima Al-Rashid",
      role: "Head of Engineering",
      bio: "Distributed systems architect with expertise in offline-first AI infrastructure.",
      image: "👩🏽‍💻",
    },
    {
      name: "Dr. Thabo Mthembu",
      role: "Lead Data Scientist",
      bio: "Computer vision specialist focused on African environmental and agricultural applications.",
      image: "👨🏾‍🔬",
    },
  ]

  const values = [
    {
      title: "Ubuntu Philosophy",
      description: "\"I am because we are\" - Our approach to AI development emphasizes collective intelligence and shared humanity.",
      icon: "🤝",
    },
    {
      title: "Open Innovation",
      description: "We believe in transparent research and open-source contributions to advance AI for all.",
      icon: "🔓",
    },
    {
      title: "Cultural Preservation",
      description: "Protecting and celebrating African languages, traditions, and knowledge systems through technology.",
      icon: "🏛️",
    },
    {
      title: "Ethical AI",
      description: "Responsible development with bias mitigation, fairness, and human-centric design at the core.",
      icon: "⚖️",
    },
  ]

  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "Deep Ubuntu Research founded with seed funding from leading African tech investors.",
    },
    {
      year: "2023",
      title: "First Model",
      description: "Released initial Deep Ubuntu AI foundation model supporting 12 African languages.",
    },
    {
      year: "2024",
      title: "Enterprise Launch",
      description: "Launched enterprise solutions with major partnerships across government and private sector.",
    },
    {
      year: "2024",
      title: "Open Source",
      description: "Released cowcow CLI and core libraries as open-source tools for the global community.",
    },
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            About <span className="text-gradient">Deep Ubuntu Research</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;re building the future of artificial intelligence for Africa and beyond, 
            grounded in the Ubuntu philosophy of collective intelligence and shared humanity.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-dbu-fg-2 text-lg leading-relaxed mb-8">
                To democratize artificial intelligence for Africa and the Global South, 
                creating inclusive technologies that preserve cultural heritage while 
                solving real-world challenges. We believe AI should amplify human potential, 
                not replace it.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-dbu-gradient rounded-full"></div>
                  <span className="text-dbu-fg-2">Culturally-aware AI systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-dbu-gradient rounded-full"></div>
                  <span className="text-dbu-fg-2">Offline-first infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-dbu-gradient rounded-full"></div>
                  <span className="text-dbu-fg-2">Open-source contributions</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20"
            >
              <h3 className="text-2xl font-display font-semibold mb-4">
                Our <span className="text-gradient">Vision</span>
              </h3>
              <p className="text-dbu-fg-2 leading-relaxed">
                A world where artificial intelligence serves as a bridge between cultures, 
                languages, and communities. Where every person, regardless of their geographic 
                location or linguistic background, can benefit from the transformative power 
                of AI while maintaining their unique identity and cultural heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                  {value.title}
                </h3>
                <p className="text-dbu-fg-2 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              World-class researchers and engineers building the future of AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-2">
                  {member.name}
                </h3>
                <p className="text-dbu-grad-from font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-dbu-fg-2 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Key milestones in our mission to democratize AI
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-dbu-gradient"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
                      <div className="text-dbu-grad-from font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-dbu-fg-2 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-dbu-gradient rounded-full border-4 border-dbu-bg"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Join Us in <span className="text-gradient">Building the Future</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
              Whether you&apos;re a researcher, developer, or organization, 
              there are many ways to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/careers">
                <Button 
                  size="lg" 
                  className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  View Open Positions
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 