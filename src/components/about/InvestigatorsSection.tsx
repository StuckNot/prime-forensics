import Image from "next/image";
import { FileText, Shield, Award } from "lucide-react";

export default function InvestigatorsSection() {
  return (
    <section className="bg-primary text-white py-24 px-6 border-y border-secondary/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] text-accent font-medium mb-3 uppercase">
            The Scientific Core
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Principal Investigators
          </h2>
          <p className="text-gray-400/80 max-w-xl text-sm leading-relaxed">
            Leading our technical divisions with combined decades of field experience
            and academic distinction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white/5 p-6 md:p-8 flex flex-col sm:flex-row gap-6 border-l-2 border-accent hover:bg-white/10 transition-colors duration-300">
            <div className="shrink-0">
              <Image
                src="/person1.jpg"
                width={140}
                height={160}
                alt="Dr. Jaskaran Singh"
                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-serif mb-1">
                Dr. Jaskaran Singh
              </h3>
              <p className="text-[10px] sm:text-xs text-accent tracking-widest uppercase mb-4 font-semibold">
                PHD | 12+ YRS EXP | GOLD MEDALIST
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
                A pioneer in biometric analysis and forensic anthropology.
                Dr. Singh has spearheaded over 500 high-profile criminal investigations
                across the continent.
              </p>
              <div className="flex gap-4 items-center mt-auto">
                <FileText className="w-4 h-4 text-accent" />
                <Shield className="w-4 h-4 text-accent" />
                <Award className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-6 md:p-8 flex flex-col sm:flex-row gap-6 border-l-2 border-accent hover:bg-white/10 transition-colors duration-300">
            <div className="shrink-0">
              <Image
                src="/person2.jpg"
                width={140}
                height={160}
                alt="Mr. Sahil Sharma"
                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-serif mb-1">
                Mr. Sahil Sharma
              </h3>
              <p className="text-[10px] sm:text-xs text-accent tracking-widest uppercase mb-4 font-semibold">
                FACT QUALIFIED | 3+ YRS EXP
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
                Specializing in Questioned Documents and Digital Forensics.
                Sahil brings cutting-edge computational methods to traditional
                evidence examination.
              </p>
              <div className="flex gap-4 items-center mt-auto">
                <FileText className="w-4 h-4 text-accent" />
                <Shield className="w-4 h-4 text-accent" />
                <Award className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}