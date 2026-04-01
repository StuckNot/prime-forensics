import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base text-white/70 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex flex-col gap-3 mb-6">
            <div className="relative w-16 h-16">
              <Image 
                src="/images/logo-icon.png" 
                alt="Prime Forensics Logo" 
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.1)]"
              />
            </div>
            <h2 className="text-white text-xl font-serif font-bold tracking-wide leading-tight">
              PRIME<br/><span className="text-accent text-sm tracking-widest">FORENSICS</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed mb-6">
            Delivering truth through science. India's premier private forensic
            laboratory serving legal professionals, corporate entities, and
            private individuals.
          </p>

          <div className="flex gap-3">
            <Link
              href="#"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
            >
              <X size={18} />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">SERVICES</h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/services/questioned-documents" className="hover:text-white transition">Questioned Document Examination</Link></li>
            <li><Link href="/services/digital-forensics" className="hover:text-white transition">Digital & Cyber Forensics</Link></li>
            <li><Link href="/services/forensic-vault" className="hover:text-white transition">The Forensic Vault</Link></li>
            <li><Link href="/services/fraud-detection" className="hover:text-white transition">Fraud & Forgery Detection</Link></li>
            <li><Link href="/services/media-authentication" className="hover:text-white transition">Audio/Video Authentication</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link href="/certifications" className="hover:text-white transition">Certifications</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT US</h3>

          <ul className="space-y-4 text-sm text-white/80">

            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 text-accent" />
              <span>
                Level 4, Science & Tech Park,
                <br />
                Sector 62, Noida, India
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-accent" />
              <span>+91 98765 43210</span>
            </li>

            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-accent" />
              <span>lab@primeforensics.in</span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-secondary/20 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-3">

          <p>
            © {new Date().getFullYear()} Prime Forensics & Investigative Services. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>

            <Link href="/disclaimer" className="hover:text-white transition">
              Disclaimer
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}