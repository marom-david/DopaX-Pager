import React from 'react';
import frame12 from '../assets/Frame_12.svg';

const Team = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-brand-navy-dark leading-tight mb-8">
            Built By Multidisciplinary Problem-Solvers.
          </h2>
          <p className="font-outfit text-gray-500 leading-relaxed text-lg text-left m-0">
            Some problems require an uncommon combination of people. Dopa-X brings together biologists, pharmacologists, physicists, computational biologists, chemists and AI specialists, alongside deep-tech and defense expertise. Not as an interesting mix, but as the team this problem actually demands.
          </p>
        </div>
        
        {/* Right Column (Founder Card) */}
        <div className="w-full md:w-1/2 bg-[#FCEAE3] p-10 md:p-12 rounded-[3rem] shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          <img src={frame12} className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" alt="Founder Card Background" />
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src="/assets/graphs/Achi-pic.svg" 
              alt="Achi Krauz" 
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-sm" 
            />
            <h3 className="font-rajdhani text-sm font-bold uppercase tracking-widest text-brand-navy-dark mb-6">
              Founded by Achi Krauz
            </h3>
            <div className="font-outfit text-brand-navy-dark/80 leading-relaxed space-y-4 text-[17px]">
              <p className="m-0 text-center">
                Krauz spent 25 years building systems that did not yet exist, including Israel's first private spacecraft to the moon with SpaceIL.
              </p>
              <p className="m-0 text-center">
                After being diagnosed with Parkinson's, he chose to face the challenge the way engineers do: by building what is missing.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Team;
