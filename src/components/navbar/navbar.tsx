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
    <header className="w-full bg-[#16263A] border-b border-blue-900">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-yellow-500 rounded flex items-center justify-center text-black font-bold">
            🔬
          </div>

          <div className="leading-tight">
            <p className="text-white font-semibold tracking-wide text-lg">
              PRIME<span className="text-yellow-500">FORENSICS</span>
            </p>
            <p className="text-xs text-gray-400 tracking-widest">
              INVESTIGATIVE SERVICES
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
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
          bgColor="bg-[#C8A25B]"
          textColor="text-black"
          hoverBg="hover:bg-[#d4b170]"
          className="text-sm px-5 py-2"
        >
          ⚠ EMERGENCY RESPONSE
        </Button>

      </nav>
    </header>
  );
}