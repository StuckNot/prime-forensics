"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";


export default function HeroSection() {
const [openExpert, setOpenExpert] = useState(false);
const [openPartner, setOpenPartner] = useState(false);
  return (
    <section className="relative bg-background pt-10 pb-14 md:pt-25 md:pb-35 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent rounded-bl-[100px] -z-10 blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center lg:items-start xl:items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-xs font-semibold tracking-widest text-primary dark:text-white uppercase mb-6">
            <div className="text-[12px] w-1.5 h-1.5 rounded-full bg-accent" />
           Forensics of the Future
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary dark:text-white leading-tight mb-6 mt-4">
            Truth through Science.<br />
            <span className="text-accent">Justice through Expertise.</span>
          </h1>

          <p className="text-lg text-typography/80 mb-10 leading-relaxed">
            Prime Forensics delivers scientifically sound, legally admissible, and ethically driven solutions.
          </p>

          {/* Expert Profile Badge */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full xl:w-max">

            {/* Dr. Jaskaran's Badge */}
            <div
              className="flex items-center gap-4 bg-background md:bg-white dark:bg-primary/20 p-4 rounded-xl shadow-sm border border-secondary/20 flex-1 sm:flex-initial transform transition-transform duration-500 hover:-translate-y-2"
              onClick={() => setOpenExpert(true)}
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 overflow-hidden relative border-2 border-accent/20">
                <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-serif">
                  JS
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-wider text-accent uppercase">
                  Founder
                </div>
                <div className="font-serif font-semibold text-primary dark:text-white text-lg whitespace-nowrap">
                  Dr. Jaskaran Singh
                </div>
                {/* <div className="text-xs text-typography/70">
                  Founder
                </div> */}
              </div>
            </div>

            { openExpert && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300"
                onClick={() => setOpenExpert(false)}
              >
                <div
                  className="bg-background dark:bg-[#0A101D] border border-accent/20 p-5 md:p-10 rounded-2xl shadow-2xl max-w-xl w-full relative transform scale-100 transition-all pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-4 right-4 p-2 text-typography/50 hover:text-accent bg-secondary/10 rounded-full transition-colors"
                    onClick={() => setOpenExpert(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>

                  <div className="flex items-center gap-4 mb-6 border-b border-secondary/20 pb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center text-white text-2xl font-serif bg-primary">JS</div>
                    <div>
                      <div className="font-serif text-2xl font-bold text-primary dark:text-white">Dr. Jaskaran Singh</div>
                      <div className="text-[10px] font-bold tracking-widest text-accent uppercase mt-1">Chief Expert</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-primary dark:text-white font-semibold">Internationally Renowned Forensic Expert</span>
                      <span className="text-sm text-typography/70 font-light">Ph.D. Forensic Science (INSPIRE FELLOWSHIP, DST, Ministry of Science & Tech - Govt of India)</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <span className="text-primary dark:text-white font-medium flex items-center gap-3">M.Sc. Forensic Science <span className="text-yellow-600 dark:text-yellow-400 text-[10px] px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full uppercase tracking-wider font-bold">Gold Medalist</span></span>
                      <span className="text-primary dark:text-white font-medium flex items-center gap-3">B.Sc. Forensic Science <span className="text-slate-500 dark:text-slate-300 text-[10px] px-2 py-0.5 bg-slate-500/10 border border-slate-500/20 rounded-full uppercase tracking-wider font-bold">Silver Medalist</span></span>
                    </div>
                    <div className="pt-4 mt-2 border-t border-secondary/20 text-sm text-typography/80 italic">
                      "Resource person & Trainer to National and International Law Enforcement Officers."
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Partner's Badge */}
            <div className="flex items-center gap-4 bg-background md:bg-white dark:bg-primary/20 p-4 rounded-xl shadow-sm border border-secondary/20 flex-1 sm:flex-initial transform transition-transform duration-500 hover:-translate-y-2" onClick={() => setOpenPartner(true)}>
              <div className="w-14 h-14 shrink-0 rounded-full bg-secondary/10 overflow-hidden relative border-2 border-accent/20">
                <div className="w-full h-full bg-accent flex items-center justify-center text-white text-xl font-serif">
                  SS
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-wider text-accent uppercase">
                  Co-Founder
                </div>
                <div className="font-serif font-semibold text-primary dark:text-white text-lg whitespace-nowrap">
                  Mr. Sahil Sharma
                </div>
                {/* <div className="text-xs text-typography/70">
                 Co Founder
                </div> */}
                {/* <div className="text-xs text-typography/70">
                  UGC-NET and FACT Qualified
                </div> */}
              </div>
            </div>
          </div>
          {openPartner && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300"
                onClick={() => setOpenPartner(false)}
              >
                <div
                  className="bg-background dark:bg-[#0A101D] border border-accent/20 p-5 md:p-10 rounded-2xl shadow-2xl max-w-xl w-full relative transform scale-100 transition-all pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-4 right-4 p-2 text-typography/50 hover:text-accent bg-secondary/10 rounded-full transition-colors"
                    onClick={() => setOpenPartner(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>

                  <div className="flex items-center gap-4 mb-6 border-b border-secondary/20 pb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center text-white text-2xl font-serif bg-accent">SS</div>
                    <div>
                      <div className="font-serif text-2xl font-bold text-primary dark:text-white">Mr. Sahil Sharma</div>
                      <div className="text-[10px] font-bold tracking-widest text-accent uppercase mt-1">Managing Partner</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-primary dark:text-white font-semibold">Post-Graduate Scientific Credentials</span>
                      <span className="text-sm text-typography/70 font-light">M.Sc. Forensic Science<br />B.Sc. Forensic Science</span>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                       <span className="text-primary dark:text-white font-medium flex items-center gap-3">UGC-NET Qualified</span>
                       <span className="text-primary dark:text-white font-medium flex items-center gap-3">FACT Qualified</span>
                    </div>
                  </div>
                </div>
              </div>
            )}


          {/* <div className="flex items-center gap-4 bg-base md:bg-white dark:bg-primary/20 p-4 rounded-xl shadow-sm border border-secondary/20 mb-10 w-full sm:w-max">
            <div className="w-14 h-14 rounded-full bg-primary/10 overflow-hidden relative border-2 border-accent/20"> */}
          {/* Placeholder for Expert Photo */}
          {/* <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-serif">
                JS
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-wider text-accent uppercase mb-1">
                LED BY CHIEF EXPERT
              </div>
              <div className="font-serif font-semibold text-primary dark:text-white text-lg">
                Dr. Jaskaran Singh
              </div>
              <div className="text-xs text-typography/70">
                PhD, 15+ Years Experience, Gold Medalist
              </div>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/consultation"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-md font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Consult an Expert
            </Link>
            {/* <Link
              href="/credentials"
              className="px-8 py-3.5 rounded-md font-medium border-2 border-primary/20 dark:border-white/20 hover:border-primary dark:hover:border-white text-primary dark:text-white transition-all text-center"
            >
              View Credentials
            </Link> */}
          </div>
        </div>

        {/* Right Content - floating card */}
        <div className="relative lg:ml-auto w-full max-w-lg">
          {/* Decorative elements behind card */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl z-0" />

          <div className="relative z-10 bg-background dark:bg-[#0A101D] rounded-2xl shadow-2xl p-2 border border-secondary/10 transform transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg z-20">
              Verified Lab
            </div>

            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-primary mb-4">
              {/* Lab image */}
              <Image
                src="/images/hero-lab.png"
                alt="Forensic Laboratory Equipment"
                fill
                className="object-cover opacity-90 mix-blend-screen"
                priority
              />
              {/* Overlay with compliant text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <div className="flex items-center gap-2 text-accent mb-1">
                  <ShieldCheck size={20} />
                  <span className="font-bold text-lg">Compliance & Commitment</span>
                </div>
                <p className="text-white/80 text-sm">Integrity with Precision</p>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-secondary/20 p-4 pt-2">
              {/* <div className="px-4">
                <div className="text-[10px] font-bold tracking-widest text-typography/50 uppercase mb-1">
                  SUCCESS RATE
                </div>
                <div className="font-serif font-bold text-3xl text-primary dark:text-white">
                  98.5%
                </div>
              </div> */}
              <div className="px-4">
                <div className="text-[12px] font-bold tracking-widest text-typography/50 uppercase ">
                  Experience
                </div>
                <div className="font-serif font-bold text-2xl text-primary dark:text-white">
                  15+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
