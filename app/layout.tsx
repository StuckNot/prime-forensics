import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://primeforensics.in";
const companyData = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Prime Forensics",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+91 82838 64936",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "Delhi, India",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prime Forensics | Industry Leading Investigation Services",
  description: "Prime Forensics provides cutting-edge digital forensics and investigation services globally.",
  openGraph: {
    title: "Prime Forensics | Industry Leading Investigation Services",
    description: "Prime Forensics provides cutting-edge digital forensics and investigation services globally.",
    url: siteUrl,
    siteName: companyData.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Forensics | Industry Leading Investigation Services",
    description: "Prime Forensics provides cutting-edge digital forensics and investigation services globally.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyData.name,
  telephone: companyData.phone,
  address: companyData.address,
  url: siteUrl,
};

import Breadcrumbs from "@/src/components/ui/Breadcrumbs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased text-typography bg-base relative`}
      >
        <Navbar />
        <Breadcrumbs />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}