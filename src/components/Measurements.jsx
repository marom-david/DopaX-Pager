import React from 'react';

const Measurements = () => {
  return (
    <section className="relative w-full bg-bg-light pt-12 pb-24 overflow-hidden z-0">
      {/* Background Graphic (DNA Helix) */}
      <img 
        src="/assets/background/Frame 4.svg" 
        className="absolute top-0 right-0 h-full w-1/3 object-cover opacity-50 -z-10 pointer-events-none" 
        alt="DNA Background" 
      />

      {/* Content Centering Wrapper */}
      <div className="max-w-5xl mx-auto relative z-10 w-full px-8">
        
        {/* Title */}
        <h2 className="text-4xl md:text-[2.5rem] font-rajdhani font-bold text-brand-navy-dark mb-12 text-center tracking-wide">
          Measuring Changes Everything.
        </h2>
        
        {/* Block 1: White Cards (Equal Width Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-light/20 flex flex-col items-start text-left">
            <h3 className="text-2xl font-rajdhani font-bold tracking-wider uppercase text-brand-navy-dark mb-6">
              Disease Modification
            </h3>
            <p className="font-outfit text-gray-800 leading-relaxed text-lg m-0 text-left">
              For the first time, AI-driven continuous measurement gives researchers a real, objective signal to test against, creating the infrastructure needed to find disease-modifying treatments and dramatically shortening the path to answers.
            </p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-light/20 flex flex-col items-start text-left">
            <h3 className="text-2xl font-rajdhani font-bold tracking-wider uppercase text-brand-navy-dark mb-6">
              Better Care
            </h3>
            <p className="font-outfit text-gray-800 leading-relaxed text-lg m-0 text-left">
              The same measurement layer enables improving and optimizing the outcomes from existing levodopa therapy. The right dose, at the right time, extending the effective treatment window to 15 years and beyond.
            </p>
          </div>
        </div>
        
        {/* Block 2: Dark Banner */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-navy-dark text-white p-12 rounded-[2.5rem] relative overflow-hidden z-10 shadow-lg items-stretch">
          {/* Subtle glow effect on the right side */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Left Column (Current State) */}
          <div className="relative z-10 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-12 h-full flex flex-col justify-start text-left">
            <h4 className="font-outfit font-bold uppercase tracking-widest text-brand-orange mb-6 text-xs">
              What's happening now?
            </h4>
            <div className="space-y-6">
              <p className="font-outfit text-gray-light text-[13px] leading-relaxed opacity-90 m-0 text-left">
                A real-time snapshot of disease state, enabling smarter, more precise symptom management.
              </p>
              <p className="font-outfit text-gray-light text-[13px] leading-relaxed opacity-90 m-0 text-left">
                A longitudinal signal of disease progression, enabling development of treatments that slow or reverse it.
              </p>
            </div>
          </div>
          
          {/* Right Column (Future State) - Vertically Centered */}
          <div className="relative z-10 pt-8 md:pt-0 md:pl-4 flex flex-col justify-center h-full text-left">
            <h4 className="font-outfit font-bold uppercase tracking-widest text-brand-blue mb-6 text-xs">
              Where is it heading?
            </h4>
            <h2 className="text-[28px] md:text-3xl font-rajdhani font-bold uppercase leading-[1.2] m-0 text-left">
              <span className="text-white">A closed-loop system</span> <br />
              <span className="text-brand-orange">for Parkinson's.</span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Measurements;
