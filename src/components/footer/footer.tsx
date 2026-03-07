import Link from "next/link";
import { MapPin, Phone, Mail, X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0c09] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold tracking-wide mb-4">
            PRIME FORENSICS
          </h2>

          <p className="text-sm leading-relaxed mb-6">
            Delivering truth through science. India's premier private forensic
            laboratory serving legal professionals, corporate entities, and
            private individuals.
          </p>

          <div className="flex gap-3">
            <Link
              href="#"
              className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
            >
              <X size={18} />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">SERVICES</h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/services/questioned-documents" className="hover:text-white transition">Questioned Documents</Link></li>
            <li><Link href="/services/cyber-forensics" className="hover:text-white transition">Cyber Forensics</Link></li>
            <li><Link href="/services/fingerprint-analysis" className="hover:text-white transition">Fingerprint Analysis</Link></li>
            <li><Link href="/services/audio-video" className="hover:text-white transition">Audio/Video Forensics</Link></li>
            <li><Link href="/services/dna-consulting" className="hover:text-white transition">DNA Consulting</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Dr. Singh</Link></li>
            <li><Link href="/certifications" className="hover:text-white transition">Certifications</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT US</h3>

          <ul className="space-y-4 text-sm">

            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 text-yellow-500" />
              <span>
                Level 4, Science & Tech Park,
                <br />
                Sector 62, Noida, India
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-yellow-500" />
              <span>+91 98765 43210</span>
            </li>

            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-yellow-500" />
              <span>lab@primeforensics.in</span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">

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