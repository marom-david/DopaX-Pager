import React from 'react';
import { motion } from 'framer-motion';
import bgGraphic from '../assets/bg-05.svg';

const IntelligenceLayer = () => {
  return (
    <section className="w-full bg-brand-navy-dark py-24 relative overflow-hidden">
      {/* CSS Noise Texture */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Graphic */}
      <img 
        src={bgGraphic} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen pointer-events-none z-0 brightness-125" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-stretch gap-12 px-6 md:px-12 lg:px-16 relative z-10"
      >
        
        {/* Left Column (Title & Logo) */}
        <div className="w-full lg:w-[30%] flex flex-col justify-center items-start text-left">
          <img 
            src="/assets/logos/Dopa-Z-logo light.svg" 
            alt="DopaX Logo" 
            className="w-32 mb-6 object-contain" 
          />
          <h2 className="text-white font-rajdhani text-4xl font-bold leading-tight m-0">
            Intelligence Layer:
          </h2>
          <p className="text-gray-light text-sm uppercase tracking-widest mt-4 font-outfit m-0 leading-relaxed">
            A CLOSED-LOOP SYSTEM<br/>FOR PARKINSON'S.
          </p>
        </div>

        {/* Right Column (The 3 Cards) */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Sense */}
          <div className="bg-transparent border-2 border-brand-orange rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[250px] text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-rajdhani font-bold text-white mb-6">01</div>
              <h3 className="uppercase tracking-widest text-gray-300 font-outfit font-medium mb-4 text-sm">
                SENSE
              </h3>
              <p className="text-[13px] text-gray-400 font-outfit leading-relaxed m-0">
                Physiological and behavioral data, continuously collected within and beyond the clinical visit
              </p>
            </div>
            {/* Empty div for spacing at the bottom to balance the wave */}
            <div></div>
          </div>

          {/* Card 2: Analyze */}
          <div className="bg-transparent border-2 border-brand-orange rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[250px] text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5">
            <div className="flex flex-col items-center">
              <h3 className="uppercase tracking-widest text-gray-300 font-outfit font-medium mb-4 text-sm">
                ANALYZE
              </h3>
              <p className="text-[13px] text-gray-400 font-outfit leading-relaxed m-0">
                Disease state, progression patterns, and treatment response
              </p>
            </div>
            <div className="text-5xl font-rajdhani font-bold text-white mt-6">02</div>
          </div>

          {/* Card 3: Deliver */}
          <div className="bg-transparent border-2 border-brand-orange rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[250px] text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-rajdhani font-bold text-white mb-6">03</div>
              <h3 className="uppercase tracking-widest text-gray-300 font-outfit font-medium mb-4 text-sm">
                DELIVER
              </h3>
              <p className="text-[13px] text-gray-400 font-outfit leading-relaxed m-0">
                Adaptive, data-informed intervention over time. A signal patients, clinicians and researchers can finally act on.
              </p>
            </div>
            {/* Empty div for spacing at the bottom to balance the wave */}
            <div></div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default IntelligenceLayer;
