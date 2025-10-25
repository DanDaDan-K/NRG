import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - NRG",
  description: "NRG terms of service and usage agreement.",
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-nrg-accent">Terms of Service</h1>
          <p className="text-nrg-ink/70 text-sm mb-8">Last updated: October 25, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Agreement to Terms</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              By subscribing to NRG and using our campus power bank network, you agree to these terms. 
              Please read them carefully before using our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Service Description</h2>
            <p className="text-nrg-ink/80 leading-relaxed mb-4">
              NRG provides subscription-based access to power bank borrowing stations on participating campuses. 
              Your subscription includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-nrg-ink/80">
              <li>Daily power bank borrowing based on your plan tier</li>
              <li>Access to all NRG stations on your campus</li>
              <li>3-in-1 cables (USB-C, Lightning, Micro-USB)</li>
              <li>Return flexibility at any campus station</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Usage Rules</h2>
            <p className="text-nrg-ink/80 leading-relaxed mb-4">
              To ensure fair access for everyone:
            </p>
            <ul className="list-disc list-inside space-y-2 text-nrg-ink/80">
              <li>Return power banks within your plan&apos;s time limit</li>
              <li>Overtime charges apply at AED 2/hour after included time</li>
              <li>Do not damage, modify, or keep power banks</li>
              <li>One active borrow per person at a time</li>
              <li>Station availability may vary based on demand</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Payment Terms</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              Subscriptions are billed monthly. You can cancel anytime—no long-term commitment required. 
              Overtime charges are billed separately. We accept payment via Stripe and Tap payment processors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Lost or Damaged Devices</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              If a power bank is lost or damaged beyond normal wear, a replacement fee of AED 150 applies. 
              Report issues immediately through your account dashboard or contact support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Fair Use Policy</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              We reserve the right to limit or suspend access for misuse, including repeated late returns, 
              hoarding devices, or violating campus policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Limitation of Liability</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              NRG is not responsible for device damage caused by power banks, though we maintain all units 
              to safety standards. Use at your own discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Changes to Terms</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              We may update these terms occasionally. Significant changes will be communicated via email. 
              Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-nrg-ink">Contact</h2>
            <p className="text-nrg-ink/80 leading-relaxed">
              Questions about these terms? Email us at{" "}
              <a href="mailto:support@nrg.example.com" className="text-nrg-accent hover:underline">
                support@nrg.example.com
              </a>
            </p>
          </section>
        </article>
      </div>

      <SiteFooter />
    </main>
  )
}

