import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getProductBySlug, getProductSlugs } from '@/lib/mdx'
import { ProductHero } from '@/components/sections/product-hero'
import { ProductTabs } from '@/components/ui/product-tabs'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      <ProductHero product={product} />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <ProductTabs product={product} />
        
        <div className="prose prose-invert prose-purple max-w-none mt-12">
          <MDXRemote source={product.serialized} />
        </div>
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.frontMatter.title} | Deep Ubuntu Research`,
    description: product.frontMatter.tagline,
    openGraph: {
      title: product.frontMatter.title,
      description: product.frontMatter.tagline,
      type: 'website',
    },
  }
} 