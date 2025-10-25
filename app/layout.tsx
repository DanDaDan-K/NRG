import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NRG - Campus Power Bank Network | Borrow. Charge. Return. Repeat.",
  description: "Subscription-based campus power bank network. One borrow a day, up to 1 hour, from any station. Power for every student.",
  keywords: ["power bank", "campus", "charging", "student", "subscription", "UAE", "Abu Dhabi", "NYU"],
  authors: [{ name: "NRG" }],
  creator: "NRG",
  publisher: "NRG",
  metadataBase: new URL("https://nrg.example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nrg.example.com",
    title: "NRG - Campus Power Bank Network",
    description: "Subscription-based campus power bank network. Power for every student.",
    siteName: "NRG",
    images: [
      {
        url: "/og-nrg.png",
        width: 1200,
        height: 630,
        alt: "NRG - Campus Power Bank Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRG - Campus Power Bank Network",
    description: "Subscription-based campus power bank network. Power for every student.",
    images: ["/og-nrg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
