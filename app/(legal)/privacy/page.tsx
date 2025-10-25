import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - NRG",
  description: "NRG privacy policy and data protection practices.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <div className="flex-1 container px-4 md:px-8 py-16 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-nrg-accent">Privacy Policy</h1>
          <p className="text-nrg-ink/70 text-sm mb-8">Last updated: October 25, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Your Privacy Matters</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              At NRG, we take your privacy seriously. This policy outlines how we collect, use, and protect 
              your personal information when you use our campus power bank network.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Information We Collect</h2>
            <p className="text-nrg-ink/80 leading-relaxed mb-4">
              We practice data minimization and only collect what&apos;s necessary:
            </p>
            <ul className="list-disc list-inside space-y-2 text-nrg-ink/80">
              <li>Account information (email, name, campus affiliation)</li>
              <li>Payment information (processed securely via Stripe/Tap)</li>
              <li>Usage data (borrow/return times, station locations)</li>
              <li>Device information (for QR authentication)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">How We Use Your Data</h2>
            <p className="text-nrg-ink/80 leading-relaxed mb-4">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-nrg-ink/80">
              <li>Process your subscription and borrowing transactions</li>
              <li>Improve station placement and service availability</li>
              <li>Send important service updates (optional marketing with consent)</li>
              <li>Ensure security and prevent abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Data Protection</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              We implement industry-standard security measures including encryption, secure payment processing, 
              and regular security audits. Your payment information is never stored on our servers—it&apos;s handled 
              directly by our certified payment processors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Your Rights</h2>
            <p className="text-nrg-ink/80 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-nrg-ink/80">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Contact Us</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              Questions about your privacy? Email us at{" "}
              <a href="mailto:privacy@nrg.example.com" className="text-nrg-accent hover:underline">
                privacy@nrg.example.com
              </a>
            </p>
          </section>
        </article>
      </div>

      <SiteFooter />
    </main>
  )
}

