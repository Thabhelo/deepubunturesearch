import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, AnimatedCard } from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Custom Solutions | Deep Ubuntu Research',
  description: 'Tailored AI solutions designed for your specific needs. Expert consultation, custom development, and enterprise-grade implementations.',
  keywords: ['Custom AI Solutions', 'AI Consulting', 'Enterprise AI', 'Tailored Solutions', 'AI Development', 'Deep Ubuntu Research'],
  openGraph: {
    title: 'Custom Solutions | Deep Ubuntu Research',
    description: 'Tailored AI solutions designed for your specific needs. Expert consultation, custom development, and enterprise-grade implementations.',
  },
}

export default function CustomSolutionsPage() {
  return (
    <div className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-dbu-fg mb-6">
              Custom <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-dbu-fg-2 mb-8 max-w-3xl mx-auto">
              Tailored AI solutions designed for your specific needs. Expert consultation, custom development, and enterprise-grade implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dbu-gradient text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              >
                Start Your Project
              </Link>
              <Link
                href="/resources/documentation"
                className="border-2 border-dbu-grad-from text-dbu-grad-from px-8 py-4 rounded-lg hover:bg-dbu-grad-from hover:text-white transition-colors text-lg font-semibold"
              >
                View Portfolio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Solution Areas
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Our custom solutions span across multiple domains, each tailored to address
              specific industry challenges and organizational requirements.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={0.1} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">AI Strategy & Consulting</h3>
              <p className="text-dbu-fg-2">
                Comprehensive AI roadmap development, technology assessment, and strategic planning
                to align AI initiatives with business objectives.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Custom Model Development</h3>
              <p className="text-dbu-fg-2">
                End-to-end machine learning model development, from data collection and preprocessing
                to training, optimization, and deployment at scale.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">System Integration</h3>
              <p className="text-dbu-fg-2">
                Seamless integration of AI capabilities into existing enterprise systems,
                ensuring compatibility and minimal disruption to operations.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="bg-dbu-bg-2/50 rounded-xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors">
              <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbu-grad-from" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dbu-fg mb-3">Data Pipeline Engineering</h3>
              <p className="text-dbu-fg-2">
                Robust data infrastructure design and implementation, ensuring efficient
                data flow and processing for AI applications.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Development Process
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Our structured approach ensures successful delivery of custom AI solutions
              that meet your specific requirements and business objectives.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mr-4 font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-dbu-fg">Discovery & Analysis</h3>
              </div>
              <p className="text-dbu-fg-2">
                In-depth consultation to understand your business requirements, technical constraints,
                and success metrics. We analyze existing systems and identify optimization opportunities.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mr-4 font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-dbu-fg">Solution Architecture</h3>
              </div>
              <p className="text-dbu-fg-2">
                Design comprehensive solution architecture including data flows, model architecture,
                infrastructure requirements, and integration points with existing systems.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mr-4 font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-dbu-fg">Data Preparation</h3>
              </div>
              <p className="text-dbu-fg-2">
                Data collection, cleaning, preprocessing, and feature engineering to ensure
                high-quality training data that leads to optimal model performance.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mr-4 font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-dbu-fg">Model Development</h3>
              </div>
              <p className="text-dbu-fg-2">
                Custom model training, hyperparameter optimization, and validation using
                state-of-the-art techniques tailored to your specific use case.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.5} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mr-4 font-bold">
                  5
                </div>
                <h3 className="text-xl font-semibold text-dbu-fg">Testing & Validation</h3>
              </div>
              <p className="text-dbu-fg-2">
                Comprehensive testing including unit tests, integration tests, and performance
                validation to ensure reliability and accuracy in production environments.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.6} className="bg-dbu-bg rounded-xl p-6 shadow-lg border border-dbu-grad-from/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-dbu-gradient text-white rounded-lg flex items-center justify-center mr-4 font-bold">
                  6
                </div>
                <h3 className="text-xl font-semibold text-dbu-fg">Deployment & Support</h3>
              </div>
              <p className="text-dbu-fg-2">
                Production deployment with monitoring, maintenance, and ongoing support to ensure
                optimal performance and continuous improvement of your AI solution.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              Explore how our custom AI solutions have transformed businesses across different industries.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            <AnimatedCard delay={0.1} className="bg-dbu-bg-2/50 rounded-xl p-8 border border-dbu-grad-from/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium mr-4">
                      Healthcare
                    </span>
                    <span className="text-dbu-fg-2 text-sm">6 months • Enterprise</span>
                  </div>
                  <h3 className="text-3xl font-bold text-dbu-fg mb-4">
                    AI-Powered Diagnostic Assistant
                  </h3>
                  <p className="text-dbu-fg-2 mb-6">
                    Developed a custom diagnostic assistance system for a major hospital network,
                    improving diagnostic accuracy by 35% and reducing analysis time by 60%.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">35%</div>
                      <div className="text-sm text-dbu-fg-2">Accuracy Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">60%</div>
                      <div className="text-sm text-dbu-fg-2">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">500+</div>
                      <div className="text-sm text-dbu-fg-2">Daily Analyses</div>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="bg-dbu-gradient/10 rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <div className="text-lg font-semibold text-dbu-fg">Medical Imaging Analysis</div>
                  <div className="text-dbu-fg-2">Computer Vision • NLP • ML</div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg-2/50 rounded-xl p-8 border border-dbu-grad-from/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-dbu-gradient/10 rounded-lg p-6 text-center">
                    <div className="text-6xl mb-4">🏭</div>
                    <div className="text-lg font-semibold text-dbu-fg">Predictive Maintenance</div>
                    <div className="text-dbu-fg-2">IoT • Time Series • ML</div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium mr-4">
                      Manufacturing
                    </span>
                    <span className="text-dbu-fg-2 text-sm">8 months • Enterprise</span>
                  </div>
                  <h3 className="text-3xl font-bold text-dbu-fg mb-4">
                    Smart Factory Optimization
                  </h3>
                  <p className="text-dbu-fg-2 mb-6">
                    Implemented an intelligent manufacturing system that reduced equipment downtime
                    by 45% and increased overall equipment effectiveness by 28%.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">45%</div>
                      <div className="text-sm text-dbu-fg-2">Downtime Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">28%</div>
                      <div className="text-sm text-dbu-fg-2">OEE Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">$2.5M</div>
                      <div className="text-sm text-dbu-fg-2">Annual Savings</div>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg-2/50 rounded-xl p-8 border border-dbu-grad-from/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium mr-4">
                      Finance
                    </span>
                    <span className="text-dbu-fg-2 text-sm">4 months • Enterprise</span>
                  </div>
                  <h3 className="text-3xl font-bold text-dbu-fg mb-4">
                    Risk Assessment Platform
                  </h3>
                  <p className="text-dbu-fg-2 mb-6">
                    Built a comprehensive risk assessment platform for a financial institution,
                    improving fraud detection by 55% while reducing false positives by 40%.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">55%</div>
                      <div className="text-sm text-dbu-fg-2">Fraud Detection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">40%</div>
                      <div className="text-sm text-dbu-fg-2">Fewer False Positives</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">99.8%</div>
                      <div className="text-sm text-dbu-fg-2">Accuracy Rate</div>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="bg-dbu-gradient/10 rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">💳</div>
                  <div className="text-lg font-semibold text-dbu-fg">Fraud Detection</div>
                  <div className="text-dbu-fg-2">Real-time Analytics • ML • AI</div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dbu-fg mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-dbu-fg-2 text-center mb-16 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to deliver robust, scalable solutions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={0.1} className="bg-dbu-bg rounded-xl p-6 text-center border border-dbu-grad-from/20">
              <h3 className="text-lg font-semibold text-dbu-fg mb-4">Machine Learning</h3>
              <div className="space-y-2 text-dbu-fg-2">
                <div>TensorFlow • PyTorch</div>
                <div>Scikit-learn • XGBoost</div>
                <div>Hugging Face • JAX</div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-dbu-bg rounded-xl p-6 text-center border border-dbu-grad-from/20">
              <h3 className="text-lg font-semibold text-dbu-fg mb-4">Cloud Platforms</h3>
              <div className="space-y-2 text-dbu-fg-2">
                <div>AWS • Google Cloud</div>
                <div>Azure • Kubernetes</div>
                <div>Docker • Terraform</div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-dbu-bg rounded-xl p-6 text-center border border-dbu-grad-from/20">
              <h3 className="text-lg font-semibold text-dbu-fg mb-4">Data Engineering</h3>
              <div className="space-y-2 text-dbu-fg-2">
                <div>Apache Spark • Kafka</div>
                <div>PostgreSQL • MongoDB</div>
                <div>Airflow • dbt</div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="bg-dbu-bg rounded-xl p-6 text-center border border-dbu-grad-from/20">
              <h3 className="text-lg font-semibold text-dbu-fg mb-4">MLOps & Monitoring</h3>
              <div className="space-y-2 text-dbu-fg-2">
                <div>MLflow • Weights & Biases</div>
                <div>Prometheus • Grafana</div>
                <div>Kubeflow • Seldon</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dbu-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a tailored AI solution
              that drives real business value for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-dbu-fg px-8 py-4 rounded-lg hover:bg-white/90 transition-colors text-lg font-semibold"
              >
                Start Your Project
              </Link>
              <Link
                href="/resources/documentation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-dbu-fg transition-colors text-lg font-semibold"
              >
                View Portfolio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
} 