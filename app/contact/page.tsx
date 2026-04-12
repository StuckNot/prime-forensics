import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, LockKeyhole } from "lucide-react";
import Footer from "@/src/components/footer/footer";
import Button from "@/src/components/ui/Button";

export const metadata: Metadata = {
  title: "Secure Contact | Prime Forensics",
  description: "Initiate a secure, confidential transmission with our forensic team.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  
  return (
    <div className="bg-background min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Confidential & Encrypted
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Secure Contact
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            All communications are classified under strict attorney-client confidentiality bindings. Initiate your inquiry through our secured channels below.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section id='contact' className="container mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        
        {/* Left Side: Contact Information & Visuals */}
        <div className="flex flex-col gap-12">
          
          <div className="relative w-full h-64 md:h-80 bg-primary rounded-2xl overflow-hidden shadow-xl border border-secondary/20">
            <div className="absolute inset-0 bg-primary mix-blend-color z-10 opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <Image 
              src="/images/contact-banner.png" 
              alt="High Tech Secure Data Command Center" 
              fill 
              className="object-cover opacity-80"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg">
               <ShieldCheck className="text-accent w-5 h-5" />
               <span className="text-white text-xs font-bold tracking-widest uppercase">Encryption Active</span>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-3xl font-serif text-primary dark:text-white border-b border-secondary/20 pb-4">
              Direct Channels
            </h3>
            
            {/* <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-xl flex items-center justify-center text-primary dark:text-white border border-secondary/20">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-2">Global Headquarters</h4>
                <p className="text-typography/80 leading-relaxed">
                  Level 4, Science & Tech Park,<br/>
                  Sector 62, Noida, India<br/>
                  <span className="text-xs text-typography/50 mt-1 block">Hours: 0800 - 1800 (IST)</span>
                </p>
              </div>
            </div> */}

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-xl flex items-center justify-center text-primary dark:text-white border border-secondary/20">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-2">Forensic Hotline</h4>
                <p className="text-typography/80 leading-relaxed">
                  +91 82838 64936<br/>
                  +91 99997 14103<br/>
                  <span className="text-xs text-typography/50 mt-1 block">Available during business hours (IST)</span>
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-xl flex items-center justify-center text-primary dark:text-white border border-secondary/20">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-2">Secure Uplink</h4>
                <p className="text-typography/80 leading-relaxed">
                  info@primeforensics.in<br/>
                  <span className="text-xs text-typography/50 mt-1 block">PGP Key available upon request</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: High-Trust HTML Form */}
        <div className="bg-background dark:bg-[#0A101D] p-8 md:p-12 rounded-2xl border border-secondary/20 shadow-lg relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <LockKeyhole className="text-accent" size={24} />
            <h2 className="text-2xl font-serif text-primary dark:text-white">Encrypted Transmission Box</h2>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-typography/70">First Name</label>
                <input type="text" className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-typography/70">Last Name</label>
                <input type="text" className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-typography/70">Email Address (Official)</label>
              <input type="email" className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="j.doe@lawfirm.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-typography/70">Organization / Law Firm (Optional)</label>
              <input type="text" className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="Prime Legal Associates" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-typography/70">Inquiry Type</label>
              <select defaultValue={service || "none"} className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors appearance-none outline-none">
                <option value="none" className="text-black">Select forensic category...</option>
                <option value="scientific" className="text-black">Scientific Forensic Analysis</option>
                <option value="digital" className="text-black">Digital & Cyber Forensics</option>
                <option value="corporate" className="text-black">Corporate & Private Investigations</option>
                <option value="insurance" className="text-black">Insurance Fraud Investigation</option>
                <option value="training" className="text-black">Training & Capacity Building</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-typography/70">Secure Message Details</label>
              <textarea rows={4} className="bg-secondary/5 border border-secondary/20 p-4 rounded-lg text-primary dark:text-white focus:outline-none focus:border-accent focus:bg-transparent resize-none transition-colors" placeholder="Describe the nature of your legal requirement. Do not include sensitive personally identifiable information (PII) in this initial form." />
            </div>

            <div className="pt-4">
              <Button 
                href="#" 
                bgColor="bg-accent"
                textColor="text-primary"
                hoverBg="hover:brightness-110"
                className="w-full py-4 shadow-lg text-sm tracking-wider uppercase font-bold flex justify-center items-center"
              >
                Initiate Secure Transmission
              </Button>
            </div>
            
            <p className="text-[10px] text-center text-typography/40 tracking-widest uppercase mt-4">
              Protected by military-grade SSL encryption protocols.
            </p>
          </form>

        </div>
      </section>

      <Footer />
    </div>
  );
}
