"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Expert Witness", href: "/expert-witness" },
  { name: "Career", href: "/career" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-primary border-b border-secondary/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-accent rounded flex items-center justify-center text-primary font-bold">
            🔬
          </div>

          <div className="leading-tight">
            <p className="text-white font-semibold font-serif tracking-wide text-lg">
              PRIME<span className="text-accent">FORENSICS</span>
            </p>
            <p className="text-xs text-white/50 tracking-widest">
              INVESTIGATIVE SERVICES
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex mr-12 items-center gap-12 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 py-1 ${
                  isActive
                    ? "text-accent border-b-2 border-accent"
                    : "text-white/70 hover:text-white border-b-2 border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        {/* <Button
          href="/emergency"
          bgColor="bg-accent"
          textColor="text-primary"
          hoverBg="hover:brightness-110"
          className="text-xs sm:text-sm px-3 sm:px-5 py-2 w-full sm:w-auto flex justify-center font-bold"
        >
          ⚠ EMERGENCY RESPONSE
        </Button> */}
        {/* <Button
          href="/emergency"
          bgColor="bg-accent"
          textColor="text-primary"
          hoverBg="hover:bg-red-600"
          className="p-2 rounded-full sm:px-5 sm:py-2 flex items-center justify-center"
        >
          ⚠
          <span className="hidden sm:inline ml-2">EMERGENCY RESPONSE</span>
        </Button> */}
      </nav>
    </header>
  );
}