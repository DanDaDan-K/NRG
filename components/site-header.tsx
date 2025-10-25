"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how" },
  { name: "Pricing", href: "#pricing" },
  { name: "Campuses", href: "#campuses" },
  { name: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-nrg-accent/20 bg-nrg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-nrg-bg/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 focus-visible:outline-nrg-accent">
          <Image
            src="/nrg-logo.svg"
            alt="NRG Logo"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-nrg-accent focus-visible:outline-nrg-accent"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild size="default">
            <Link href="/#pricing">Get NRG</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/#partners">Partner with us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/nrg-logo.svg"
                  alt="NRG Logo"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium transition-colors hover:text-nrg-accent"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-nrg-accent/20">
                <Button asChild size="lg">
                  <Link href="/#pricing" onClick={() => setIsOpen(false)}>
                    Get NRG
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#partners" onClick={() => setIsOpen(false)}>
                    Partner with us
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

