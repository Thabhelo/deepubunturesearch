import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Deep Ubuntu Research | Get in Touch',
  description: 'Get in touch with Deep Ubuntu Research for partnerships, collaborations, support, or general inquiries. We\'re here to help democratize AI for Africa and beyond.',
  keywords: ['Deep Ubuntu Research Contact', 'AI Partnership', 'Collaboration', 'Support', 'Africa AI'],
  openGraph: {
    title: 'Contact Deep Ubuntu Research | Get in Touch',
    description: 'Get in touch with Deep Ubuntu Research for partnerships, collaborations, support, or general inquiries.',
    type: 'website',
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Questions about our products, services, or company",
      email: "hello@deepubuntu.com",
      icon: "💬"
    },
    {
      title: "Partnerships",
      description: "Interested in collaborating or integrating our solutions",
      email: "partnerships@deepubuntu.com",
      icon: "🤝"
    },
    {
      title: "Research Collaboration",
      description: "Academic partnerships and research opportunities",
      email: "research@deepubuntu.com",
      icon: "🔬"
    },
    {
      title: "Technical Support",
      description: "Need help with our products or APIs",
      email: "support@deepubuntu.com",
      icon: "🛠️"
    },
    {
      title: "Media & Press",
      description: "Press inquiries and media requests",
      email: "press@deepubuntu.com",
      icon: "📰"
    },
    {
      title: "Careers",
      description: "Join our team and help build the future of AI",
      email: "careers@deepubuntu.com",
      icon: "💼"
    }
  ]

  const offices = [
    {
      city: "Cape Town",
      country: "South Africa",
      address: "123 Innovation Drive, Waterfront, Cape Town 8001",
      phone: "+27 21 123 4567",
      timezone: "SAST (UTC+2)",
      flag: "🇿🇦"
    },
    {
      city: "Nairobi",
      country: "Kenya",
      address: "456 Tech Hub Street, Westlands, Nairobi 00100",
      phone: "+254 20 123 4567",
      timezone: "EAT (UTC+3)",
      flag: "🇰🇪"
    },
    {
      city: "Lagos",
      country: "Nigeria",
      address: "789 Silicon Valley, Victoria Island, Lagos 101241",
      phone: "+234 1 234 5678",
      timezone: "WAT (UTC+1)",
      flag: "🇳🇬"
    },
    {
      city: "Accra",
      country: "Ghana",
      address: "321 Digital Avenue, Airport City, Accra GA-123",
      phone: "+233 30 123 4567",
      timezone: "GMT (UTC+0)",
      flag: "🇬🇭"
    }
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Whether you&apos;re interested in partnerships, 
            need support, or want to learn more about our mission, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              How Can We <span className="text-gradient">Help?</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Choose the right contact method for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, _) => (
              <div
                key={method.title}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                  {method.title}
                </h3>
                <p className="text-dbu-fg-2 mb-4 leading-relaxed text-sm">
                  {method.description}
                </p>
                <a
                  href={`mailto:${method.email}`}
                  className="text-dbu-grad-from hover:text-dbu-grad-to transition-colors font-medium"
                >
                  {method.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Send Us a <span className="text-gradient">Message</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-dbu-fg font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 bg-dbu-bg rounded-xl border border-dbu-grad-from/30 focus:border-dbu-grad-from focus:outline-none text-dbu-fg placeholder-dbu-fg-2"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-dbu-fg font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 bg-dbu-bg rounded-xl border border-dbu-grad-from/30 focus:border-dbu-grad-from focus:outline-none text-dbu-fg placeholder-dbu-fg-2"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-dbu-fg font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-dbu-bg rounded-xl border border-dbu-grad-from/30 focus:border-dbu-grad-from focus:outline-none text-dbu-fg placeholder-dbu-fg-2"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-dbu-fg font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-dbu-bg rounded-xl border border-dbu-grad-from/30 focus:border-dbu-grad-from focus:outline-none text-dbu-fg placeholder-dbu-fg-2"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-dbu-fg font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-dbu-bg rounded-xl border border-dbu-grad-from/30 focus:border-dbu-grad-from focus:outline-none text-dbu-fg"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="research">Research Collaboration</option>
                  <option value="support">Technical Support</option>
                  <option value="press">Media/Press Inquiry</option>
                  <option value="careers">Career Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-dbu-fg font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dbu-bg rounded-xl border border-dbu-grad-from/30 focus:border-dbu-grad-from focus:outline-none text-dbu-fg placeholder-dbu-fg-2 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="w-5 h-5 accent-dbu-grad-from"
                />
                <label htmlFor="newsletter" className="text-dbu-fg-2 text-sm">
                  I&apos;d like to receive updates about Deep Ubuntu Research&apos;s latest developments
                </label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-dbu-gradient hover:opacity-90 text-white font-semibold py-4 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                Send Message
              </Button>

              <p className="text-dbu-fg-2 text-sm text-center">
                By submitting this form, you agree to our{' '}
                <Link href="/privacy" className="text-dbu-grad-from hover:text-dbu-grad-to">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              We have offices across Africa to better serve our communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, _) => (
              <div
                key={office.city}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{office.flag}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-2">
                  {office.city}
                </h3>
                <p className="text-dbu-grad-from font-medium mb-4">
                  {office.country}
                </p>
                
                <div className="space-y-3 text-sm text-dbu-fg-2">
                  <div className="flex items-start gap-2">
                    <span className="text-dbu-grad-from mt-1">📍</span>
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-dbu-grad-from">📞</span>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-dbu-grad-from">🌍</span>
                    <span>{office.timezone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How can I integrate Deep Ubuntu AI into my application?",
                answer: "You can integrate our AI models through our REST API or SDK. Check our documentation for detailed integration guides and examples."
              },
              {
                question: "Do you offer enterprise support and consulting?",
                answer: "Yes, we provide comprehensive enterprise support including consulting, custom model training, and dedicated technical support. Contact our partnerships team for more details."
              },
              {
                question: "What African languages do your models support?",
                answer: "Our models currently support 12+ African languages including Swahili, Yoruba, Zulu, Amharic, and more. We're continuously expanding language support based on community needs."
              },
              {
                question: "How do I contribute to your open-source projects?",
                answer: "We welcome contributions! Visit our GitHub repositories, check our contribution guidelines, and join our community discussions. All skill levels are welcome."
              },
              {
                question: "What's your approach to data privacy and security?",
                answer: "We prioritize data privacy and security with encryption, minimal data collection, and compliance with international standards. Read our privacy policy for full details."
              }
            ].map((faq, _) => (
              <div
                key={faq.question}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20"
              >
                <h3 className="text-lg font-display font-semibold text-dbu-fg mb-3">
                  {faq.question}
                </h3>
                <p className="text-dbu-fg-2 leading-relaxed">
                  {faq.answer}
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
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Join thousands of developers and organizations building the future of AI for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                Explore Our Products
              </Button>
            </Link>
            <Link href="/resources/documentation">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 