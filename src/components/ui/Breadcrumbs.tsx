"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Ignore homepage
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Utility to format slugs to readable Title Case words
  const formatSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="absolute top-24 left-0 w-full px-6 z-[60] pointer-events-auto">
      <div className="max-w-7xl mx-auto flex items-center text-[10px] md:text-[11px] font-bold tracking-widest uppercase overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors"
        >
          <Home size={12} className="mb-[2px]" /> HOME
        </Link>

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join("/")}`;

          return (
            <div key={href} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-white/20" />
              {isLast ? (
                <span className="text-accent">{formatSegment(segment)}</span>
              ) : (
                <Link 
                  href={href} 
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {formatSegment(segment)}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
