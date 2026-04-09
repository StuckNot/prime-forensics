"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  bgColor?: string;
  textColor?: string;
  hoverBg?: string;
  hoverText?: string;
  className?: string;
  target?: "_blank" | "_self";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  bgColor = "bg-[#C8A25B]",
  textColor = "text-[#182B45]",
  hoverBg = "hover:bg-[#d4b170]",
  hoverText = "",
  className = "",
  target = "_self",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold transition duration-200";

  const variantStyles =
    variant === "outline"
      ? "border border-gray-400 bg-transparent"
      : bgColor;

  const styles = `${baseStyles} ${variantStyles} ${textColor} ${hoverBg} ${hoverText} ${className}`;

  if (href) {
    const isExternal = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

    if (isExternal) {
      return (
        <a href={href} target={target} rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} target={target} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}