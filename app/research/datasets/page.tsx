import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Research Datasets | Deep Ubuntu Research',
  description: 'Access our curated datasets for African language processing, computer vision, and AI research. Free, ethical, and community-driven data for researchers worldwide.',
  keywords: ['African Language Datasets', 'AI Research Data', 'Machine Learning Datasets', 'Open Data', 'Research Datasets'],
  openGraph: {
    title: 'Research Datasets | Deep Ubuntu Research',
    description: 'Access our curated datasets for African language processing, computer vision, and AI research.',
    type: 'website',
  },
}

export default function DatasetsPage() {
  const datasets = [
    {
      name: "AfricaNLP Corpus",
      description: "Comprehensive multilingual text corpus covering 20+ African languages with cultural annotations.",
      size: "2.3TB",
      languages: 24,
      samples: "50M+",
      category: "NLP",
      license: "CC BY-SA 4.0",
      lastUpdate: "2024-01-15",
      status: "Active",
      links: {
        download: "#",
        huggingface: "https://huggingface.co/datasets/deepubuntu/africanlp",
        github: "https://github.com/deepubuntu/africanlp-dataset",
        paper: "#"
      },
      features: [
        "24 African languages",
        "Cultural context annotations",
        "Multi-domain coverage",
        "Ethical data collection"
      ],
      tasks: ["Language Modeling", "Translation", "Sentiment Analysis", "Named Entity Recognition"]
    },
    {
      name: "African Agricultural Vision",
      description: "Computer vision dataset for African agricultural applications with crop, livestock, and environmental data.",
      size: "1.8TB",
      languages: 1,
      samples: "2M+",
      category: "Computer Vision",
      license: "CC BY-NC 4.0",
      lastUpdate: "2024-01-12",
      status: "Active",
      links: {
        download: "#",
        github: "https://github.com/deepubuntu/african-agri-vision",
        paper: "#"
      },
      features: [
        "Multi-crop coverage",
        "Seasonal variations",
        "Pest and disease detection",
        "Local context adaptation"
      ],
      tasks: ["Object Detection", "Image Classification", "Segmentation", "Anomaly Detection"]
    },
    {
      name: "Ubuntu Speech Collection",
      description: "Speech recognition dataset with diverse African accents and languages for ASR research.",
      size: "856GB",
      languages: 18,
      samples: "100K+",
      category: "Speech",
      license: "CC BY 4.0",
      lastUpdate: "2024-01-10",
      status: "Active",
      links: {
        download: "#",
        github: "https://github.com/deepubuntu/ubuntu-speech",
        paper: "#"
      },
      features: [
        "18 African languages",
        "Diverse accents",
        "Quality annotations",
        "Privacy-preserving"
      ],
      tasks: ["Speech Recognition", "Speaker Identification", "Language Detection", "Accent Classification"]
    },
    {
      name: "African Cultural Knowledge Base",
      description: "Structured knowledge base of African cultural practices, proverbs, and traditional wisdom.",
      size: "45GB",
      languages: 32,
      samples: "500K+",
      category: "Knowledge Base",
      license: "CC BY-SA 4.0",
      lastUpdate: "2024-01-08",
      status: "Active",
      links: {
        download: "#",
        github: "https://github.com/deepubuntu/african-kb",
        paper: "#"
      },
      features: [
        "32 African languages",
        "Cultural annotations",
        "Proverb collections",
        "Traditional knowledge"
      ],
      tasks: ["Knowledge Extraction", "Cultural QA", "Text Generation", "Cross-cultural Analysis"]
    },
    {
      name: "Low-Resource Language Benchmark",
      description: "Evaluation benchmark for low-resource African languages across multiple NLP tasks.",
      size: "12GB",
      languages: 15,
      samples: "250K+",
      category: "Benchmark",
      license: "MIT",
      lastUpdate: "2024-01-05",
      status: "Active",
      links: {
        download: "#",
        github: "https://github.com/deepubuntu/lr-lang-benchmark",
        paper: "#"
      },
      features: [
        "15 African languages",
        "Standardized evaluation",
        "Multiple tasks",
        "Reproducible results"
      ],
      tasks: ["Classification", "Translation", "Parsing", "Question Answering"]
    },
    {
      name: "African Medical Texts",
      description: "Medical text dataset in African languages for healthcare AI applications.",
      size: "180GB",
      languages: 8,
      samples: "1M+",
      category: "Medical",
      license: "CC BY-NC-SA 4.0",
      lastUpdate: "2024-01-03",
      status: "Active",
      links: {
        download: "#",
        github: "https://github.com/deepubuntu/african-medical-texts",
        paper: "#"
      },
      features: [
        "8 African languages",
        "Medical terminology",
        "Privacy compliance",
        "Expert annotations"
      ],
      tasks: ["Medical NER", "Symptom Classification", "Drug Recognition", "Medical QA"]
    }
  ]

  const categories = [
    { name: "All", count: 6, slug: "all" },
    { name: "NLP", count: 1, slug: "nlp" },
    { name: "Computer Vision", count: 1, slug: "computer-vision" },
    { name: "Speech", count: 1, slug: "speech" },
    { name: "Knowledge Base", count: 1, slug: "knowledge-base" },
    { name: "Benchmark", count: 1, slug: "benchmark" },
    { name: "Medical", count: 1, slug: "medical" }
  ]

  const ethicalGuidelines = [
    {
      title: "Consent & Privacy",
      description: "All data collected with informed consent and privacy protection.",
      icon: "🔒"
    },
    {
      title: "Cultural Sensitivity",
      description: "Respectful representation of African cultures and traditions.",
      icon: "🏛️"
    },
    {
      title: "Community Benefit",
      description: "Datasets designed to benefit African communities and researchers.",
      icon: "🤝"
    },
    {
      title: "Open Access",
      description: "Free access for academic research and non-commercial use.",
      icon: "🔓"
    }
  ]

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Hero Section */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Research <span className="text-gradient">Datasets</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            Access our curated datasets for African language processing, computer vision, 
            and AI research. Free, ethical, and community-driven data for researchers worldwide.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-dbu-fg-2">Public Datasets</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">5.2TB</div>
              <div className="text-dbu-fg-2">Total Data Size</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">35+</div>
              <div className="text-dbu-fg-2">African Languages</div>
            </div>
            <div className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20">
              <div className="text-3xl font-bold text-gradient mb-2">1M+</div>
              <div className="text-dbu-fg-2">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Guidelines */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ethical <span className="text-gradient">Guidelines</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Our commitment to responsible data collection and distribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ethicalGuidelines.map((guideline, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-6 border border-dbu-grad-from/20 text-center"
              >
                <div className="text-4xl mb-4">{guideline.icon}</div>
                <h3 className="text-xl font-display font-semibold text-dbu-fg mb-3">
                  {guideline.title}
                </h3>
                <p className="text-dbu-fg-2 text-sm leading-relaxed">
                  {guideline.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Browse by <span className="text-gradient">Category</span>
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

      {/* Datasets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Featured <span className="text-gradient">Datasets</span>
          </h2>
          
          <div className="space-y-8">
            {datasets.map((dataset, index) => (
              <div
                key={index}
                className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-dbu-gradient/20 text-dbu-grad-from rounded-full text-sm font-medium">
                        {dataset.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {dataset.status}
                      </span>
                      <span className="text-dbu-fg-2 text-sm">{dataset.license}</span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-dbu-fg mb-3 hover:text-gradient transition-colors cursor-pointer">
                      {dataset.name}
                    </h3>
                    
                    <p className="text-dbu-fg-2 leading-relaxed mb-6">
                      {dataset.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-dbu-fg font-medium mb-3">Dataset Info:</h4>
                        <div className="space-y-2 text-sm text-dbu-fg-2">
                          <div className="flex justify-between">
                            <span>Size:</span>
                            <span className="font-medium">{dataset.size}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Languages:</span>
                            <span className="font-medium">{dataset.languages}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Samples:</span>
                            <span className="font-medium">{dataset.samples}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Updated:</span>
                            <span className="font-medium">{dataset.lastUpdate}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-dbu-fg font-medium mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {dataset.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-dbu-fg-2">
                              <span className="w-1.5 h-1.5 bg-dbu-grad-from rounded-full"></span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-dbu-fg font-medium mb-3">Supported Tasks:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dataset.tasks.map((task, i) => (
                          <span key={i} className="px-3 py-1 bg-dbu-gradient/10 text-dbu-grad-from rounded-lg text-sm">
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        size="sm"
                        className="bg-dbu-gradient hover:opacity-90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        📥 Download
                      </Button>
                      {dataset.links.huggingface && (
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          🤗 Hugging Face
                        </Button>
                      )}
                      {dataset.links.github && (
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          💻 GitHub
                        </Button>
                      )}
                      {dataset.links.paper && (
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          📄 Paper
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:w-64 flex-shrink-0">
                    <div className="bg-dbu-gradient/10 rounded-xl p-6 text-center">
                      <div className="text-6xl mb-4">
                        {dataset.category === 'NLP' ? '📝' : 
                         dataset.category === 'Computer Vision' ? '👁️' : 
                         dataset.category === 'Speech' ? '🗣️' : 
                         dataset.category === 'Knowledge Base' ? '🧠' : 
                         dataset.category === 'Benchmark' ? '📊' : '🏥'}
                      </div>
                      <div className="text-dbu-fg font-medium">
                        {dataset.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Process */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              How to <span className="text-gradient">Access</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto">
              Simple steps to access our datasets for your research
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Browse",
                description: "Explore our dataset catalog and find the data you need"
              },
              {
                step: "2",
                title: "Request",
                description: "Fill out the access request form with your research details"
              },
              {
                step: "3",
                title: "Review",
                description: "Our team reviews your request (usually within 48 hours)"
              },
              {
                step: "4",
                title: "Access",
                description: "Receive download links and start your research"
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Start Research?</span>
          </h2>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto mb-8">
            Access our datasets and join the growing community of researchers working on AI for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              Request Access
            </Button>
            <Link href="/research/publications">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                View Publications
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 