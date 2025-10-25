import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { HowItWorks } from "@/components/how-it-works"
import { FeatureCard } from "@/components/feature-card"
import { Pricing } from "@/components/pricing"
import { CampusMap } from "@/components/campus-map"
import { Partners } from "@/components/partners"
import { SecuritySustainability } from "@/components/security-sustainability"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <FeatureCard />
      <Pricing />
      <CampusMap />
      <Partners />
      <SecuritySustainability />
      <FAQ />
      <CTA />
      <SiteFooter />
    </main>
  )
}
