import { HeroSection } from '@/components/sections/hero-section'
import { TrustStripSection } from '@/components/sections/trust-strip-section'
import { FullStackSection } from '@/components/sections/full-stack-section'
import { AgenticSolutionsSection } from '@/components/sections/agentic-solutions-section'
import { FrontierResearchSection } from '@/components/sections/frontier-research-section'
import { FooterCTASection } from '@/components/sections/footer-cta-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-dbu-bg text-dbu-fg">
      <HeroSection />
      <TrustStripSection />
      <FullStackSection />
      <AgenticSolutionsSection />
      <FrontierResearchSection />
      <FooterCTASection />
    </main>
  )
} 