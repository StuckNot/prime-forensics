import React from 'react';

const Hero = () => {
    return (
        <section className="bg-primary dark:bg-[#0A101D] pt-40 pb-28 px-6 relative border-t border-secondary/20 overflow-hidden">
            {/* Cinematic Background Orbs */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <p className="text-accent uppercase font-bold tracking-[0.2em] text-[10px] md:text-xs mb-6">
                    Meticulous & Sovereign
                </p>
                
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                    Uncompromising<br />
                    <span className="text-white/70 italic font-light">Scientific</span> Integrity.
                </h1>

                <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    We are India's premier private scientific investigation firm, dedicated to delivering unarguable truth into the courts of law through rigorous, verified methodologies.
                </p>
            </div>
        </section>
    );
};

export default Hero;
