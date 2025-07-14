import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Publications & Research Papers | Deep Ubuntu Research',
  description: 'Explore our published research in AI for Africa, foundation models, and inclusive technology. Access papers, preprints, and conference presentations.',
  keywords: ['Deep Ubuntu Research Papers', 'AI Research Publications', 'African AI Research', 'Machine Learning Papers', 'Foundation Models Research'],
  openGraph: {
    title: 'Publications & Research Papers | Deep Ubuntu Research',
    description: 'Explore our published research in AI for Africa, foundation models, and inclusive technology.',
    type: 'website',
  },
}

export default function PublicationsPage() {
  const publications = [
    {
      title: "Deep Ubuntu: Foundation Models for African Languages",
      authors: ["Dr. Amara Okafor", "Prof. Kwame Asante", "Dr. Fatima Al-Rashid"],
      venue: "NeurIPS 2024",
      type: "Conference Paper",
      year: "2024",
      abstract: "We present Deep Ubuntu, a family of foundation models specifically designed for African languages, addressing the linguistic diversity and cultural nuances of the continent.",
      status: "Published",
      links: {
        paper: "#",
        arxiv: "#",
        code: "#",
        dataset: "#"
      },
      citations: 45,
      category: "Foundation Models"
    },
    {
      title: "Offline-First AI Infrastructure for Emerging Markets",
      authors: ["Dr. Fatima Al-Rashid", "Dr. Thabo Mthembu"],
      venue: "ICLR 2024",
      type: "Conference Paper",
      year: "2024",
      abstract: "A comprehensive framework for deploying AI systems in low-connectivity environments, enabling reliable AI applications across Africa's diverse infrastructure landscape.",
      status: "Published",
      links: {
        paper: "#",
        arxiv: "#",
        code: "#"
      },
      citations: 23,
      category: "Infrastructure"
    },
    {
      title: "Cultural Bias in Large Language Models: An African Perspective",
      authors: ["Prof. Kwame Asante", "Dr. Amara Okafor"],
      venue: "FAccT 2024",
      type: "Conference Paper",
      year: "2024",
      abstract: "An empirical study of cultural bias in existing large language models and proposed methods for creating more culturally inclusive AI systems.",
      status: "Published",
      links: {
        paper: "#",
        arxiv: "#"
      },
      citations: 67,
      category: "Ethics & Bias"
    },
    {
      title: "Computer Vision for African Agriculture: Challenges and Opportunities",
      authors: ["Dr. Thabo Mthembu", "Dr. Amara Okafor"],
      venue: "Computer Vision and Image Understanding",
      type: "Journal Article",
      year: "2024",
      abstract: "A comprehensive survey of computer vision applications in African agriculture, highlighting unique challenges and proposing novel solutions.",
      status: "Published",
      links: {
        paper: "#",
        arxiv: "#",
        dataset: "#"
      },
      citations: 34,
      category: "Computer Vision"
    },
    {
      title: "Low-Resource Language Processing: Advances in African Language NLP",
      authors: ["Prof. Kwame Asante", "Dr. Fatima Al-Rashid"],
      venue: "ACL 2024",
      type: "Conference Paper",
      year: "2024",
      abstract: "Novel approaches to natural language processing for low-resource African languages, including transfer learning and multilingual techniques.",
      status: "Published",
      links: {
        paper: "#",
        arxiv: "#",
        code: "#"
      },
      citations: 56,
      category: "NLP"
    },
    {
      title: "Democratizing AI: Lessons from the Ubuntu Philosophy",
      authors: ["Dr. Amara Okafor", "Deep Ubuntu Research Team"],
      venue: "AI & Society",
      type: "Journal Article",
      year: "2023",
      abstract: "Exploring how the African philosophy of Ubuntu can inform the development of more inclusive and human-centered artificial intelligence systems.",
      status: "Published",
      links: {
        paper: "#",
        arxiv: "#"
      },
      citations: 78,
      category: "AI Philosophy"
    }
  ]

  const preprints = [
    {
      title: "Scaling Foundation Models for African Languages: A Multi-Domain Approach",
      authors: ["Dr. Amara Okafor", "Prof. Kwame Asante", "Dr. Fatima Al-Rashid", "Dr. Thabo Mthembu"],
      venue: "arXiv preprint",
      type: "Preprint",
      year: "2024",
      abstract: "We present advances in scaling foundation models across multiple African languages and domains, demonstrating improved performance on downstream tasks.",
      status: "Preprint",
      links: {
        arxiv: "#",
        code: "#"
      },
      category: "Foundation Models"
    },
    {
      title: "Federated Learning in Resource-Constrained Environments",
      authors: ["Dr. Fatima Al-Rashid", "Dr. Thabo Mthembu"],
      venue: "arXiv preprint",
      type: "Preprint",
      year: "2024",
      abstract: "A novel federated learning framework designed for environments with limited computational resources and intermittent connectivity.",
      status: "Preprint",
      links: {
        arxiv: "#",
        code: "#"
      },
      category: "Machine Learning"
    }
  ]

  const categories = [
    { name: "All", count: 8, slug: "all" },
    { name: "Foundation Models", count: 2, slug: "foundation-models" },
    { name: "NLP", count: 2, slug: "nlp" },
    { name: "Computer Vision", count: 1, slug: "computer-vision" },
    { name: "Ethics & Bias", count: 1, slug: "ethics-bias" },
    { name: "Infrastructure", count: 1, slug: "infrastructure" },
    { name: "AI Philosophy", count: 1, slug: "ai-philosophy" }
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Research <span className="text-gradient">Publications</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            Explore our contributions to the global AI research community, focusing on 
            inclusive technology and African language processing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-dbu-fg-2">Publications</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">300+</div>
              <div className="text-dbu-fg-2">Citations</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">8</div>
              <div className="text-dbu-fg-2">Research Areas</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">12+</div>
              <div className="text-dbu-fg-2">Languages Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Browse by <span className="text-gradient">Research Area</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                  category.slug === 'all'
                    ? 'bg-dbu-gradient text-white border-dbu-grad-from'
                    : 'bg-dbu-bg-2/50 text-dbu-fg border-dbu-grad-from/20 hover:border-dbu-grad-from/40'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Published Papers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Published <span className="text-gradient">Research</span>
          </h2>
          
          <div className="space-y-6">
            {publications.map((paper, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {paper.status}
                      </span>
                      <span className="text-dbu-fg-2 text-sm">{paper.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-dbu-fg mb-3 hover:text-gradient transition-colors cursor-pointer">
                      {paper.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.authors.map((author, i) => (
                        <span key={i} className="text-dbu-fg-2 text-sm">
                          {author}{i < paper.authors.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-dbu-fg-2">
                      <span className="font-medium">{paper.venue}</span>
                      <span>•</span>
                      <span>{paper.type}</span>
                      <span>•</span>
                      <span>{paper.citations} citations</span>
                    </div>
                    
                    <p className="text-dbu-fg-2 leading-relaxed mb-6">
                      {paper.abstract}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {paper.links.paper && (
                        <Button 
                          size="sm"
                          className="bg-dbu-gradient hover:opacity-90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          📄 Paper
                        </Button>
                      )}
                      {paper.links.arxiv && (
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          📚 arXiv
                        </Button>
                      )}
                      {paper.links.code && (
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          💻 Code
                        </Button>
                      )}
                      {paper.links.dataset && (
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          🗃️ Dataset
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preprints */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Recent <span className="text-gradient">Preprints</span>
          </h2>
          
          <div className="space-y-6">
            {preprints.map((paper, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium">
                    {paper.category}
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                    {paper.status}
                  </span>
                  <span className="text-dbu-fg-2 text-sm">{paper.year}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-dbu-fg mb-3 hover:text-gradient transition-colors cursor-pointer">
                  {paper.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.authors.map((author, i) => (
                    <span key={i} className="text-dbu-fg-2 text-sm">
                      {author}{i < paper.authors.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                
                <p className="text-dbu-fg-2 leading-relaxed mb-6">
                  {paper.abstract}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {paper.links.arxiv && (
                    <Button 
                      size="sm"
                      className="bg-dbu-gradient hover:opacity-90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      📚 arXiv
                    </Button>
                  )}
                  {paper.links.code && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      💻 Code
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Collaborate with <span className="text-gradient">Our Research</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Interested in collaborating on research or accessing our datasets? 
            We welcome partnerships with academic institutions and research organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/research/collaborations">
              <Button 
                size="lg" 
                className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                Research Collaborations
              </Button>
            </Link>
            <Link href="/research/datasets">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Access Datasets
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 