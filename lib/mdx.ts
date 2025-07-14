import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const contentDirectory = path.join(process.cwd(), 'content')

export interface ProductFrontMatter {
  title: string
  slug: string
  tagline: string
  status: 'alpha' | 'beta' | 'stable'
  stack: string[]
  order: number
  modelScene: boolean
}

export interface Product {
  slug: string
  frontMatter: ProductFrontMatter
  content: string
  serialized: any
}

export async function getAllProducts(): Promise<Product[]> {
  const productsDirectory = path.join(contentDirectory, 'products')
  
  if (!fs.existsSync(productsDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(productsDirectory)
  const products: Product[] = []
  
  for (const filename of filenames) {
    if (filename.endsWith('.mdx')) {
      const filePath = path.join(productsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      const serialized = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      })
      
      products.push({
        slug: data.slug,
        frontMatter: data as ProductFrontMatter,
        content,
        serialized,
      })
    }
  }
  
  return products.sort((a, b) => a.frontMatter.order - b.frontMatter.order)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getAllProducts()
  return products.find(product => product.slug === slug) || null
}

export function getProductSlugs(): string[] {
  const productsDirectory = path.join(contentDirectory, 'products')
  
  if (!fs.existsSync(productsDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(productsDirectory)
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(productsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      return data.slug
    })
} 