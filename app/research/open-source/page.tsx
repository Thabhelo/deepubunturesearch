import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Open Source Projects | Deep Ubuntu Research',
  description: 'Explore our open-source contributions to democratize AI for Africa. Access our tools, libraries, and datasets freely available to the global community.',
  keywords: ['Deep Ubuntu Open Source', 'AI Open Source', 'African AI Tools', 'Machine Learning Libraries', 'Open Source Datasets'],
  openGraph: {
    title: 'Open Source Projects | Deep Ubuntu Research',
    description: 'Explore our open-source contributions to democratize AI for Africa.',
    type: 'website',
  },
}

export default function OpenSourcePage() {
  const projects = [
    {
      name: "cowcow CLI",
      description: "Offline-first data capture and processing tool for AI applications in low-connectivity environments.",
      language: "Rust",
      stars: 1247,
      forks: 89,
      category: "Tool",
      status: "Active",
      lastUpdate: "2024-01-15",
      links: {
        github: "https://github.com/deepubuntu/cowcow",
        docs: "/products/cowcow",
        demo: "#"
      },
      features: [
        "Offline-first architecture",
        "Data synchronization",
        "Cross-platform support",
        "Plugin ecosystem"
      ]
    },
    {
      name: "Ubuntu-Lang",
      description: "Preprocessing and tokenization library for African languages, supporting 20+ languages.",
      language: "Python",
      stars: 892,
      forks: 156,
      category: "Library",
      status: "Active",
      lastUpdate: "2024-01-12",
      links: {
        github: "https://github.com/deepubuntu/ubuntu-lang",
        docs: "/resources/documentation",
        pypi: "https://pypi.org/project/ubuntu-lang/"
      },
      features: [
        "Multi-language tokenization",
        "Cultural context preservation",
        "Efficient preprocessing",
        "Easy integration"
      ]
    },
    {
      name: "AfricaNLP Dataset",
      description: "Comprehensive multilingual dataset for African language processing tasks.",
      language: "Dataset",
      stars: 543,
      forks: 78,
      category: "Dataset",
      status: "Active",
      lastUpdate: "2024-01-10",
      links: {
        github: "https://github.com/deepubuntu/africanlp-dataset",
        docs: "/research/datasets",
        huggingface: "https://huggingface.co/datasets/deepubuntu/africanlp"
      },
      features: [
        "20+ African languages",
        "Multiple NLP tasks",
        "Cultural annotations",
        "Ethical guidelines"
      ]
    },
    {
      name: "Offline-AI",
      description: "Framework for deploying AI models in offline and low-connectivity environments.",
      language: "Python",
      stars: 721,
      forks: 92,
      category: "Framework",
      status: "Active",
      lastUpdate: "2024-01-08",
      links: {
        github: "https://github.com/deepubuntu/offline-ai",
        docs: "/resources/documentation",
        pypi: "https://pypi.org/project/offline-ai/"
      },
      features: [
        "Edge deployment",
        "Model optimization",
        "Sync mechanisms",
        "Monitoring tools"
      ]
    },
    {
      name: "Ubuntu-Vision",
      description: "Computer vision library optimized for African agricultural and environmental contexts.",
      language: "Python",
      stars: 456,
      forks: 67,
      category: "Library",
      status: "Active",
      lastUpdate: "2024-01-05",
      links: {
        github: "https://github.com/deepubuntu/ubuntu-vision",
        docs: "/resources/documentation",
        pypi: "https://pypi.org/project/ubuntu-vision/"
      },
      features: [
        "Agricultural CV models",
        "Environmental monitoring",
        "Resource optimization",
        "Local adaptation"
      ]
    },
    {
      name: "DeepUbuntu-Core",
      description: "Core utilities and shared components for Deep Ubuntu Research projects.",
      language: "Python",
      stars: 234,
      forks: 45,
      category: "Library",
      status: "Active",
      lastUpdate: "2024-01-03",
      links: {
        github: "https://github.com/deepubuntu/deepubuntu-core",
        docs: "/resources/documentation",
        pypi: "https://pypi.org/project/deepubuntu-core/"
      },
      features: [
        "Common utilities",
        "Configuration management",
        "Logging framework",
        "Testing helpers"
      ]
    }
  ]

  const categories = [
    { name: "All", count: 6, slug: "all" },
    { name: "Tools", count: 1, slug: "tools" },
    { name: "Libraries", count: 3, slug: "libraries" },
    { name: "Frameworks", count: 1, slug: "frameworks" },
    { name: "Datasets", count: 1, slug: "datasets" }
  ]

  const contributions = [
    {
      project: "Hugging Face Transformers",
      type: "Core Contribution",
      description: "Added support for African language tokenization and improved multilingual handling.",
      status: "Merged",
      pullRequests: 3
    },
    {
      project: "PyTorch",
      type: "Bug Fix",
      description: "Fixed memory issues with large multilingual models on resource-constrained devices.",
      status: "Merged",
      pullRequests: 2
    },
    {
      project: "spaCy",
      type: "Feature Addition",
      description: "Contributed African language models and improved tokenization for low-resource languages.",
      status: "Merged",
      pullRequests: 4
    },
    {
      project: "OpenAI Triton",
      type: "Performance",
      description: "Optimized GPU kernels for efficient inference on edge devices.",
      status: "Under Review",
      pullRequests: 1
    }
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Open Source <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            Democratizing AI through open-source contributions. Explore our tools, libraries, 
            and datasets freely available to the global community.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-dbu-fg-2">Open Source Projects</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">4.2k+</div>
              <div className="text-dbu-fg-2">GitHub Stars</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">500+</div>
              <div className="text-dbu-fg-2">Contributors</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">1M+</div>
              <div className="text-dbu-fg-2">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Philosophy</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              We believe in the Ubuntu philosophy: &ldquo;I am because we are.&rdquo; 
              Open source is fundamental to democratizing AI for Africa and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Community First
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed">
                We prioritize community needs and collaborative development, 
                ensuring our tools serve the global AI ecosystem.
              </p>
            </div>
            
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Global Impact
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed">
                Our open-source projects enable researchers and developers worldwide 
                to build inclusive AI solutions.
              </p>
            </div>
            
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Transparent Development
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed">
                All development happens in the open, with clear documentation, 
                ethical guidelines, and community governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">
                        {project.category === 'Tool' ? '🛠️' : 
                         project.category === 'Library' ? '📚' : 
                         project.category === 'Framework' ? '🏗️' : '🗃️'}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-dbu-fg hover:text-gradient transition-colors cursor-pointer">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-dbu-fg-2">
                        <span>{project.language}</span>
                        <span>•</span>
                        <span className="text-dbu-grad-from">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-dbu-fg-2">
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🍴</span>
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-dbu-fg-2 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-dbu-fg font-medium mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-dbu-fg-2">
                        <span className="w-1.5 h-1.5 bg-dbu-grad-from rounded-full"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <Button 
                      size="sm"
                      className="bg-dbu-gradient hover:opacity-90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        💻 GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.docs && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      📖 Docs
                    </Button>
                  )}
                  {project.links.pypi && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      🐍 PyPI
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      🚀 Demo
                    </Button>
                  )}
                </div>
                
                <div className="mt-4 text-xs text-dbu-fg-2">
                  Last updated: {project.lastUpdate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Contributions */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Community <span className="text-gradient">Contributions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contributions.map((contribution, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-dbu-fg mb-2">
                      {contribution.project}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-2 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded text-xs">
                        {contribution.type}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        contribution.status === 'Merged' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {contribution.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-dbu-fg-2">
                    {contribution.pullRequests} PR{contribution.pullRequests > 1 ? 's' : ''}
                  </div>
                </div>
                
                <p className="text-dbu-fg-2 text-sm leading-relaxed">
                  {contribution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            How to <span className="text-gradient">Contribute</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="w-16 h-16 bg-dbu-gradient/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👀</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Explore
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                Browse our repositories, read the documentation, and understand the codebase.
              </p>
              <Button 
                size="sm"
                variant="outline"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
              >
                Browse Repos
              </Button>
            </div>
            
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="w-16 h-16 bg-dbu-gradient/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Contribute
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                Submit bug reports, feature requests, or code contributions through GitHub.
              </p>
              <Button 
                size="sm"
                variant="outline"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
              >
                Contribute
              </Button>
            </div>
            
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center">
              <div className="w-16 h-16 bg-dbu-gradient/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                Join Community
              </h3>
              <p className="text-dbu-fg-2 text-sm leading-relaxed mb-4">
                Join our Discord, participate in discussions, and connect with other contributors.
              </p>
              <Button 
                size="sm"
                variant="outline"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
              >
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Contribute?</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Join our open-source community and help democratize AI for Africa and beyond. 
            Every contribution, no matter how small, makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <a href="https://github.com/deepubuntu" target="_blank" rel="noopener noreferrer">
                Visit GitHub
              </a>
            </Button>
            <Link href="/resources/community">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 