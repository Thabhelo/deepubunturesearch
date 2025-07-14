import { getAllProducts } from '@/lib/mdx'
import { ProductCard } from '@/components/ui/product-card'

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      {/* Header */}
      <section className="py-20 bg-dbu-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-dbu-fg-2 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI tools and platforms designed to empower researchers, 
            developers, and organizations across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
            
            {/* Coming Soon Card */}
            <div className="group bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-4">
                More Coming Soon
              </h3>
              
              <p className="text-dbu-fg-2 mb-6 leading-relaxed">
                We&apos;re constantly innovating and building new AI solutions. 
                Stay tuned for exciting new products and features.
              </p>
              
              <div className="inline-flex items-center px-4 py-2 bg-dbu-gradient/10 rounded-lg text-dbu-fg-2 text-sm">
                In Development
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 