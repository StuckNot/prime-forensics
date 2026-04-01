import { Award, ShieldCheck, BadgeCheck, Scale } from "lucide-react";

export default function OverviewSection() {
  return (
    <section className="bg-background py-24 px-6 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="tracking-[0.3em] text-xs text-secondary font-medium mb-4 uppercase">
            Institutional Profile
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-typography leading-tight">
            Delivering Justice <br />
            Through Forensic <br />
            Excellence.
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="text-m leading-relaxed text-typography/80 max-w-md">
            <p className="mb-6 ">
              Prime Forensics stands as a sovereign authority in criminalistics,
              bridging the gap between scientific precision and the judicial
              system. Our institution is built on the bedrock of uncompromising
              integrity and advanced technological integration.
            </p>

            <p className="text-lg text-typography font-medium mb-6">
              Through rigorous laboratory standards and a network of world-class
              experts, we provide the definitive clarity required for complex
              legal investigations. Our commitment to accuracy ensures that
              every piece of evidence serves the ultimate goal of truth.
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-primary/50 relative overflow-hidden group p-8 shadow-sm border border-secondary/10 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                <Award className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest text-typography">ISO 9001:2015</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-primary/50 relative overflow-hidden group p-8 shadow-sm border border-secondary/10 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                <BadgeCheck className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest text-typography">MSME CERTIFIED</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-primary/50 relative overflow-hidden group p-8 shadow-sm border border-secondary/10 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                <ShieldCheck className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest text-typography uppercase">Verified Lab</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-primary/50 relative overflow-hidden group p-8 shadow-sm border border-secondary/10 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
               <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                <Scale className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest text-typography uppercase">Legal Adherent</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}