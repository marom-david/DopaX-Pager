import React from 'react';

const IntelligenceLayer = () => {
  const steps = [
    {
      num: "01",
      title: "Sense",
      desc: "Physiologic and behavioral data, continuously collected within and beyond the clinical visit"
    },
    {
      num: "02",
      title: "Analyze",
      desc: "Disease state, progression patterns, and treatment response"
    },
    {
      num: "03",
      title: "Deliver",
      desc: "Adaptive, data-informed intervention over time. A signal patients, clinicians and researchers can finally act on."
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-t border-gray-light/30">
      <div className="max-w-6xl mx-auto w-full px-8">
        <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-brand-navy-dark mb-16 uppercase leading-tight text-center">
          Intelligence Layer: <br />
          <span className="text-brand-orange">a closed-loop system for Parkinson's.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-light/50"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border-2 border-brand-orange text-brand-navy font-rajdhani text-3xl font-bold group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-brand-navy-dark uppercase tracking-widest mb-4">
                {step.title}
              </h3>
              <p className="font-outfit text-gray-500 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceLayer;
