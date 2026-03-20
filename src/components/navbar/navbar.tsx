"use client";

import Link from "next/link";
import Button from "../ui/Button";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Expert Witness", href: "/expert-witness" },
  { name: "Lab Certifications", href: "/lab-certifications" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-primary border-b border-secondary/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-accent rounded flex items-center justify-center text-primary font-bold">
            🔬
          </div>

          <div className="leading-tight">
            <p className="text-white font-semibold tracking-wide text-lg">
              PRIME<span className="text-accent">FORENSICS</span>
            </p>
            <p className="text-xs text-white/50 tracking-widest">
              INVESTIGATIVE SERVICES
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          href="/emergency"
          bgColor="bg-accent"
          textColor="text-primary"
          hoverBg="hover:brightness-110"
          className="text-sm px-5 py-2 hidden sm:flex font-bold"
        >
          ⚠ EMERGENCY RESPONSE
        </Button>

      </nav>
    </header>
  );
}