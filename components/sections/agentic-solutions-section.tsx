"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function AgenticSolutionsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const solutions = [
    {
      title: "Intelligent Agents",
      description: "Autonomous AI agents that can reason, plan, and execute complex tasks",
      features: ["Multi-step reasoning", "Goal-oriented planning", "Adaptive learning"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Conversational AI",
      description: "Natural language interfaces that understand context and culture",
      features: ["Cultural awareness", "Multi-language support", "Emotional intelligence"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Automation Systems",
      description: "End-to-end workflow automation with human-in-the-loop capabilities",
      features: ["Process optimization", "Quality assurance", "Scalable deployment"],
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-dbu-bg-2/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dbu-fg mb-6">
            <span className="text-gradient">Agentic</span> AI Solutions
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            Next-generation AI agents that can think, plan, and act autonomously 
            while maintaining human oversight and control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300 hover:shadow-card-hover">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} mb-6 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-dbu-fg-2 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-dbu-fg-2">
                      <div className="w-2 h-2 bg-dbu-gradient rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 