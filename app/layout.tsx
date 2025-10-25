import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PLUGO – Power that moves with you",
  description: "PLUGO is the first student-built campus power network. Borrow power banks on subscription or pay-per-hour, and charge anywhere on campus.",
  keywords: ["PLUGO", "campus charging", "power bank rental", "NYUAD", "UAE universities", "student startup", "sustainable energy"],
  authors: [{ name: "PLUGO Team" }],
  openGraph: {
    title: "PLUGO – Power that moves with you",
    description: "Subscription-based or hourly campus charging service, starting from NYUAD and expanding across UAE universities.",
    url: "https://plugo.ae",
    siteName: "PLUGO",
    images: [
      {
        url: "/og-plugo.png",
        width: 1200,
        height: 630,
        alt: "PLUGO - Campus power made effortless",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLUGO – Power that moves with you",
    description: "Rent or subscribe — campus power made effortless. Try the interactive demo.",
    images: ["/og-plugo.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#00F3A4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
