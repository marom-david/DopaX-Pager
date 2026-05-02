import React from 'react';

const Infrastructure = () => {
  return (
    <section className="w-full bg-brand-navy-dark py-24 border-t border-brand-blue/20">
      <div className="max-w-3xl mx-auto px-8 text-center flex flex-col items-center">
        <h2 className="text-5xl font-rajdhani font-bold uppercase leading-tight mb-8">
          <span className="text-white">OPEN INFRASTRUCTURE.</span> <br />
          <span className="text-brand-orange">BUILT TO BE SHARED.</span>
        </h2>
        
        <div className="space-y-6 text-lg font-outfit text-gray-light font-light leading-relaxed">
          <p>
            At its core, Dopa-X is developing a multidimensional measurement system integrating AI, neurophysiology, sensing, computational biology and cellular biology, creating the first objective ruler for Parkinson's.
          </p>
          <p>
            We are building the infrastructure that makes both possible: accelerating the path to disease-modifying treatments, and unlocking the full potential of existing care.
          </p>
          <p className="font-semibold text-white">
            Developed as a non-profit, open-source initiative, built on existing technologies and available to the entire community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
