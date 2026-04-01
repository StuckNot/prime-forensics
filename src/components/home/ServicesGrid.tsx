import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileSignature, MonitorDot, Shield, Fingerprint, AudioLines, CheckCircle2 } from "lucide-react";

export default function ServicesGrid({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="bg-background py-24 border-t border-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-primary dark:text-white mb-4">
                Specialized Investigative Solutions
              </h2>
              <p className="text-typography/80 text-lg">
                Comprehensive forensic analysis for legal entities, corporations, and private individuals.
              </p>
            </div>
            <Link 
              href="/services" 
              className="group flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
            >
              View All Services
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Questioned Document */}
          <Link href="/services/questioned-documents" className="group relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-2 bg-primary flex items-end">
            <Image 
              src="/images/document-forensics.png" 
              alt="Questioned Document Examination" 
              fill 
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
            <div className="relative p-8 w-full">
              <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4">
                <FileSignature size={20} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Questioned Document Examination</h3>
              <p className="text-white/80 max-w-lg">
                Expert handwriting and signature verification for legal disputes involving wills, cheques, and contracts.
              </p>
            </div>
          </Link>

          {/* Card 2: Digital Forensics */}
          <Link href="/services/digital-forensics" className="group relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1 bg-primary flex items-end">
            <Image 
              src="/images/digital-forensics.png" 
              alt="Digital & Cyber Forensics" 
              fill 
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20" />
            
            <div className="absolute top-6 right-6">
               <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold tracking-wider text-white uppercase">
                 SOLUTION FOR ENTITIES
               </div>
            </div>

            <div className="relative p-8 w-full">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-white border border-white/20 flex items-center justify-center mb-4">
                <MonitorDot size={20} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Digital & Cyber Forensics</h3>
              <p className="text-white/70 text-sm">
                Advanced data recovery, mobile forensics, and email tracking. We provide admissible certification under Section 65B of the Indian Evidence Act.
              </p>
            </div>
          </Link>

          {/* Card 3: The Forensic Vault */}
          <Link href="/services/forensic-vault" className=" relative rounded-2xl overflow-hidden bg-primary md:col-span-1 flex flex-col justify-between p-8 border border-secondary/20 shadow-lg group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            
            <div className="relative z-10">
               <div className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center mb-4">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">The Forensic Vault</h3>
              <p className="text-white/70 text-sm mb-6">
                Secure, climate-controlled storage for sensitive evidence. Our vault ensures chain of custody integrity for physical and digital assets, accessible only to authorized personnel.
              </p>
              
              {/* <ul className="space-y-2 mb-8">
                {['24/7 Biometric Security', 'Fire & Waterproof', 'Automated Logging'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-accent/90">
                    <CheckCircle2 size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul> */}
            </div>
            
            <div className="relative z-10 w-full py-2 px-3 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold tracking-wider uppercase transition-colors">
              Access Protocols
            </div>
          </Link>

          {/* Card 4: Fraud & Forgery Detection */}
          <Link href="/services/fraud-detection" className="group relative rounded-2xl overflow-hidden md:col-span-1 bg-primary flex items-end">
             <Image 
              src="/images/fingerprint-scan.png" 
              alt="Fraud & Forgery Detection" 
              fill 
              className="object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent" />
            <div className="relative p-8 w-full">
               <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4">
                <Fingerprint size={20} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Fraud & Forgery Detection</h3>
              <p className="text-white/70 text-sm">
                Detection of manipulated financial records, counterfeit currency, and identity theft.
              </p>
            </div>
          </Link>

          {/* Card 5: Audio/Video Authentication */}
          <Link href="/services/media-authentication" className="group relative rounded-2xl overflow-hidden md:col-span-1 bg-background dark:bg-[#0A101D] border border-secondary/20 shadow-sm flex items-center justify-center text-center p-8 hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mb-6 ring-8 ring-primary/5 group-hover:ring-primary/10 transition-all">
                <AudioLines size={24} />
              </div>
              <h3 className="text-xl font-serif text-primary dark:text-white mb-3">Audio/Video Authentication</h3>
              <p className="text-typography/70 text-sm">
                Tampering detection and enhancement for multimedia evidence.
              </p>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
