import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://primeforensics.placeholder.com";
const companyData = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Prime Forensics",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1-000-000-0000",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "Placeholder Address",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-typography bg-base`}
      >
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}