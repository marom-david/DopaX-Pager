import React from 'react';

const Team = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto w-full px-8 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2">
          <div className="w-12 h-1 bg-brand-orange mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-brand-navy-dark uppercase leading-tight mb-8">
            Built By Multidisciplinary <br />
            <span className="text-brand-blue">Problem-Solvers.</span>
          </h2>
          <p className="font-outfit text-gray-500 leading-relaxed text-lg mb-6">
            Some problems require an uncommon combination of people. Dopa-X brings together biologists, pharmacologists, physicists, computational biologists, chemists and AI specialists, alongside deep-tech and defense expertise.
          </p>
          <p className="font-outfit text-brand-navy font-semibold text-lg">
            Not as an interesting mix, but as the team this problem actually demands.
          </p>
        </div>
        
        <div className="md:w-1/2 bg-bg-light p-10 md:p-12 rounded-3xl border border-gray-light/30 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
          
          <h3 className="font-rajdhani text-2xl font-bold uppercase tracking-widest text-brand-orange mb-6">
            Founded by Achi Krauz
          </h3>
          <p className="font-outfit text-gray-600 leading-relaxed mb-6">
            Krauz spent 25 years building systems that did not yet exist, including Israel's first private spacecraft to the moon with SpaceIL.
          </p>
          <p className="font-outfit text-gray-600 leading-relaxed">
            After being diagnosed with Parkinson's, he chose to face the challenge the way engineers do: <span className="font-semibold text-brand-navy-dark">by building what is missing.</span>
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Team;
