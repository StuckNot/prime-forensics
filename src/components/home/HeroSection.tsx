"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";


export default function HeroSection() {
const [openExpert, setOpenExpert] = useState(false);
const [openPartner, setOpenPartner] = useState(false);
  return (
    <section className="relative bg-background pt-10 pb-14 md:pt-30 md:pb-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent rounded-bl-[100px] -z-10 blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center lg:items-start xl:items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-xs font-semibold tracking-widest text-primary dark:text-white uppercase mb-6">
            <div className="text-[12px] w-1.5 h-1.5 rounded-full bg-accent" />
            Gold Standard Forensics
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-primary dark:text-white leading-tight mb-6 mt-4">
            Scientifically Proven.<br />
            <span className="text-accent">Court Admissible.</span>
          </h1>

          <p className="text-lg text-typography/80 mb-10 leading-relaxed">
            Prime Forensics delivers high-authority laboratory analysis and expert witness consultancy for complex legal disputes.
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
                <div className="text-[10px] font-bold tracking-wider text-accent uppercase mb-1">
                  CHIEF EXPERT
                </div>
                <div className="font-serif font-semibold text-primary dark:text-white text-lg whitespace-nowrap">
                  Dr. Jaskaran Singh
                </div>
                <div className="text-xs text-typography/70">
                  PhD, Gold Medalist
                </div>
              </div>
            </div>

            { openExpert && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
                onClick={() => setOpenExpert(false)}
              >
                <div
                  className="bg-background p-10 rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="font-serif text-[25px] font-semibold text-accent dark:text-white text-lg whitespace-nowrap">
                    Dr. Jaskaran Singh <br />

                  </div>
                  <div className="text-s text-accent text-typography leading-relaxed font-Arial ">
                    Internationally Renowned Forensic Expert<br />
                    Ph.D. Forensic Science
                    (INSPIRE FELLOWSHIP, DST, Ministry of Science & Tech - Govt of India)
                  </div>
                  <div className="text-s text-typography leading-relaxed font-Helvetica ">
                    M.Sc. Forensic Science (Gold Medalist)<br />
                    B.Sc. Forensic Science (Silver Medalist)
                  </div>
                  <div className="text-s text-black text-typography leading-relaxed font-sans-serif">
                    Resource person & Trainer to National, International Law
                    Enforcement Officers
                  </div>

                  <button
                    className="mt-4 bg-primary text-white rounded-lg px-4 py-2"
                    onClick={() => setOpenExpert(false)}
                  >
                    Close
                  </button>
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
                <div className="text-[10px] font-bold tracking-wider text-accent uppercase mb-1">
                  MANAGING PARTNER
                </div>
                <div className="font-serif font-semibold text-primary dark:text-white text-lg whitespace-nowrap">
                  Mr. Sahil Sharma
                </div>
                <div className="text-xs text-typography/70">
                  M.Sc, B.Sc Forensic Science
                </div>
                {/* <div className="text-xs text-typography/70">
                  UGC-NET and FACT Qualified
                </div> */}
              </div>
            </div>
          </div>
          {openPartner && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
                onClick={() => setOpenPartner(false)}
              >
                <div
                  className="bg-background p-10 rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="font-serif text-[25px] font-semibold text-accent dark:text-white text-lg whitespace-nowrap">
                    Mr. Sahil Sharma
                    <br />

                  </div>
                  <div className="text-s text-accent text-typography leading-relaxed font-Arial ">
                    M.Sc. Forensic Science
                  </div>
                  <div className="text-s text-typography leading-relaxed font-Helvetica ">
                    B.Sc. Forensic Science
                  </div>
                  <div className="text-s text-black text-typography leading-relaxed font-sans-serif">
                   UGC-NET & FACT Qualified
                  </div>

                  <button
                    className="mt-4 bg-primary text-white rounded-lg px-4 py-2"
                    onClick={() => setOpenPartner(false)}
                  >
                    Close
                  </button>
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
            <Link
              href="/credentials"
              className="px-8 py-3.5 rounded-md font-medium border-2 border-primary/20 dark:border-white/20 hover:border-primary dark:hover:border-white text-primary dark:text-white transition-all text-center"
            >
              View Credentials
            </Link>
          </div>
        </div>

        {/* Right Content - floating card */}
        <div className="relative lg:ml-auto w-full max-w-lg">
          {/* Decorative elements behind card */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl z-0" />

          <div className="relative z-10 bg-background dark:bg-primary/50 rounded-2xl shadow-2xl p-2 border border-secondary/10 transform transition-transform duration-500 hover:-translate-y-2">
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
                  <span className="font-bold text-lg">Global Forensic Standards</span>
                </div>
                <p className="text-white/80 text-sm">Strict chain of custody protocols.</p>
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
                <div className="text-[10px] font-bold tracking-widest text-typography/50 uppercase mb-1">
                  CASES SOLVED
                </div>
                <div className="font-serif font-bold text-3xl text-primary dark:text-white">
                  1,000+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
