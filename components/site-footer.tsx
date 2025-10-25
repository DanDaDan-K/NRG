import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Campuses", href: "#campuses" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-nrg-accent/20 bg-nrg-bg">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/nrg-logo.svg"
                alt="NRG Logo"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-nrg-ink/70 max-w-sm">
              Power for every student. Because your phone shouldn&apos;t die before your ideas do.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-nrg-ink/70 hover:text-nrg-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-nrg-ink/70 hover:text-nrg-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nrg-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-nrg-ink/60">
            © {new Date().getFullYear()} NRG. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nrg-ink/60 hover:text-nrg-accent transition-colors"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

