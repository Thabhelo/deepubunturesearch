import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <pre className="text-dbu-grad-from font-mono text-xs md:text-sm leading-tight">
{`
        (__) 
        (oo) 
   /------\/ 
  / |    ||   
 *  /\---/\ 
    ~~   ~~   
...."Have you mooed today?"...
`}
          </pre>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
          <span className="text-gradient">moo-oo-ps!</span>
        </h1>
        
        <p className="text-xl text-dbu-fg-2 mb-8 max-w-md mx-auto">
          Looks like this page wandered off to greener pastures. 
          Let&apos;s get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            Go Home
          </Link>
          <Link 
            href="/products"
            className="border border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-4 text-lg rounded-xl transition-all duration-300"
          >
            Browse Products
          </Link>
        </div>
        
        <div className="mt-12 text-dbu-fg-2 text-sm">
          <p>Error 404 • Page not found</p>
        </div>
      </div>
    </main>
  )
} 