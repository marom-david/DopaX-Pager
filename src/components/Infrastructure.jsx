import React, { useState } from 'react';
import { motion } from 'framer-motion';
import containerBg from '../assets/Container.svg';
import bg04 from '../assets/bg-04.svg';
const Infrastructure = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section className="w-full relative overflow-hidden pt-24 pb-20 bg-[#E6E6F4]">
      <img src={bg04} className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="bg top" onLoad={() => setBgLoaded(true)} />
      

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col gap-6 w-full px-6 md:px-12"
      >
        
        {/* Top Text Card */}
        <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-lg w-full flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold mb-4 text-brand-navy-dark">
            Open Infrastructure. Built to be Shared.
          </h2>
          
          <div className="space-y-6 text-lg font-outfit text-brand-navy-dark/80 font-normal leading-relaxed w-full">
            <p className="text-left m-0">
              At its core, Dopa-X is developing a multidimensional measurement system integrating AI, neurophysiology, sensing, computational biology and cellular biology, creating the first objective ruler for Parkinson's.
            </p>
            <p className="text-left m-0">
              We are building the infrastructure that makes both possible: accelerating the path to disease-modifying treatments, and unlocking the full potential of existing care.
            </p>
            <p className="font-semibold text-brand-navy-dark text-left m-0">
              Developed as a non-profit, open-source initiative, built on existing technologies and available to the entire community.
            </p>
          </div>
        </div>

        {/* Bottom Grid Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column Card (Graph 1) */}
          <div className="bg-brand-navy-dark rounded-[3rem] p-10 md:p-12 flex flex-col items-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange border border-transparent relative overflow-hidden">
            <img src={containerBg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col items-center w-full h-full">
              <img 
                src="/assets/graphs/graph-01.svg" 
                alt="Current State Graph" 
                className="w-3/4 max-w-[280px] mx-auto mb-8 object-contain"
              />
              <div className="w-full text-left mt-auto">
                <h3 className="text-3xl font-rajdhani font-bold text-white uppercase tracking-tight mb-4 m-0">
                  WHAT'S HAPPENING NOW?
                </h3>
                <p className="font-outfit text-gray-light leading-relaxed text-[17px] m-0">
                  A real-time snapshot of disease state, enabling smarter, more precise symptom management.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column Card (Graph 2) */}
          <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-lg flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange border border-transparent">
            <img 
              src="/assets/graphs/graph-02.svg" 
              alt="Future State Graph" 
              className="w-3/4 max-w-[280px] mx-auto mb-8 object-contain"
            />
            <div className="w-full text-left mt-auto">
              <h3 className="text-3xl font-rajdhani font-bold text-brand-navy-dark uppercase tracking-tight mb-4 m-0">
                WHERE IS IT HEADING?
              </h3>
              <p className="font-outfit text-brand-navy-dark/80 leading-relaxed text-[17px] m-0">
                A longitudinal signal of disease progression, enabling development of treatments that slow or reverse it.
              </p>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Infrastructure;
