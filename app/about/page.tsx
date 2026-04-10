import Footer from '@/src/components/footer/footer'
import { Camera, Globe, Users, Award, ShieldCheck, PlayCircle } from "lucide-react";
import Hero from '@/src/components/about/hero'
import React from 'react'
import OverviewSection from '@/src/components/about/OverviewSection'
import InvestigatorsSection from '@/src/components/about/InvestigatorsSection'
import AchievementsSection from '@/src/components/about/AchievementsSection'
import AdvisoryBoardSection from '@/src/components/about/AdvisoryBoardSection'
import Image from 'next/image';

const galleryImages = [
  { id: 1, title: "International Police Seminar", subtitle: "Dubai Police Force", aspect: "col-span-2 row-span-2 h-[450px]", src: "/images/international-conference-image.jpeg" },
  { id: 2, title: "Digital Extraction Masterclass", subtitle: "CBI Headquarters", aspect: "col-span-1 row-span-1 h-[215px]", src: "/images/discussion-ras-al-khaimah.jpeg" },
  { id: 3, title: "Forensic Keynote Address", subtitle: "Global Cyber Summit", aspect: "col-span-1 row-span-1 h-[215px]", src: "/images/shushant-singh-rajput-case.jpeg" },
  { id: 4, title: "Laboratory Practicum", subtitle: "State Crime Branch", aspect: "col-span-1 row-span-2 h-[450px]", src: "/images/project-discussion-yanko-kolev.jpeg" },
  { id: 5, title: "Document Analysis Training", subtitle: "Federal Investigators", aspect: "col-span-2 row-span-1 h-[215px]", src: "/images/training-haryana.jpeg" },
  { id: 6, title: "Vault Architecture Review", subtitle: "National Security Agency", aspect: "col-span-1 row-span-1 h-[215px]", src: "/images/smart-policing-discussion.jpeg" },
];

const page = () => {
  return (
    <section>
      <Hero />
      <OverviewSection />
      <InvestigatorsSection />
            <section className="container mx-auto max-w-7xl px-6 py-24">
        
        <div className="mb-12 flex items-center justify-between border-b border-secondary/20 pb-6">
          <h2 className="text-3xl font-serif text-primary dark:text-white flex items-center gap-3">
             Professional Highlights <Camera className="text-accent w-6 h-6" />
          </h2>
          <div className="hidden md:flex gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent border border-accent/30 px-3 py-1 bg-accent/5 rounded-full">All Photos</span>
            {/* <span className="text-xs font-bold uppercase tracking-wider text-typography/40 hover:text-typography transition-colors px-3 py-1 cursor-pointer">Seminars</span> */}
            {/* <span className="text-xs font-bold uppercase tracking-wider text-typography/40 hover:text-typography transition-colors px-3 py-1 cursor-pointer">Laboratory</span> */}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[auto]">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className={`relative bg-background dark:bg-primary border border-secondary/20 rounded-xl overflow-hidden group hover:border-accent/50 transition-colors shadow-sm cursor-pointer ${img.aspect} flex flex-col items-center justify-center`}
            >
              <div className="absolute inset-0 bg-secondary/5 pattern-boxes pattern-secondary/10 pattern-bg-transparent pattern-size-6 pointer-events-none" />
              
              {/* Media Icon Placeholder */}
              <div className="w-16 h-16 bg-background dark:bg-[#0A101D] border border-secondary/20 rounded-full flex items-center justify-center text-secondary/30 transition-all z-10 shadow-sm mb-4">
                <Image 
                src={img.src} 
                alt={img.title} 
                fill={true}
                className="object-cover object-center filter contrast-125 opacity-90"

              />
              </div>

              {/* Hover Overlay */}
              {/* <div className="absolute inset-0 bg-background/90 dark:bg-primary/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6 text-center">
                <Award className="text-accent mb-4 w-10 h-10" />
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{img.title}</h3>
                <p className="text-accent text-xs uppercase tracking-widest font-bold">{img.subtitle}</p>
              </div> */}

              {/* Static Label for the placeholder view */}
              {/* <div className="relative z-10 text-center px-6">
                <p className="text-typography/40 text-sm font-medium">{img.title}</p>
                <p className="text-typography/30 text-[10px] uppercase tracking-widest mt-1">{img.subtitle}</p>
              </div> */}

            </div>
          ))}
        </div>

        <p className="text-center text-xs tracking-widest text-typography/40 uppercase mt-16 font-bold">
          Actual operational photos are pending client authorization and PII redaction.
        </p>

      </section>
      {/* <AchievementsSection /> */}
      {/* <AdvisoryBoardSection /> */}
      <Footer></Footer>
    </section>
  )
}

export default page
