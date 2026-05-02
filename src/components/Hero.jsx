import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full bg-brand-navy text-white min-h-screen overflow-hidden flex flex-col">
      {/* Background Graphic (DNA Helix) */}
      <img 
        src="/assets/background/Frame 4.svg" 
        alt="Background DNA Graphic" 
        className="absolute right-0 top-0 h-full w-auto object-cover opacity-90 pointer-events-none" 
      />
      
      {/* Fallback placeholder if image is missing */}
      <div className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"></div>

      {/* Main Content Container aligned with Header (max-w-6xl px-8) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-12 lg:py-16 flex flex-col items-start text-left flex-grow justify-center">
        
        {/* Text Width Constraint (The 60% Split) with tightened vertical rhythm */}
        <div className="w-full lg:w-3/5 flex flex-col items-start text-left gap-8 lg:gap-10">
          
          {/* Prominent Logo Section */}
          <div className="flex flex-col items-start text-left w-full">
            <img 
              src="/assets/logos/Dopa-Z-logo light.svg" 
              alt="DopaX Logo" 
              className="w-56 h-auto object-contain" 
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-rajdhani font-bold leading-[1.1] text-white tracking-wide text-left w-full m-0 p-0">
            We Can't Halt <br />
            What We Can't See.
          </h1>
          
          {/* Two Column Text (Paragraph Proportions) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full text-left">
            <div className="flex flex-col items-start">
              <p className="text-[17px] font-outfit text-gray-light leading-relaxed font-light text-left m-0 p-0">
                <span className="text-xl font-normal text-white">Parkinson's</span> can become a chronic disease managed for decades, but that future depends on something that still does not exist: continuous, precise and objective measurement of how the disease progresses.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[17px] font-outfit text-gray-light leading-relaxed font-light text-left m-0 p-0">
                <span className="text-xl font-normal text-white">Dopa-X</span> was built to close this gap, generating the measurement infrastructure Parkinson's has never had, to halt its progression and dramatically extend effective treatment.
              </p>
            </div>
          </div>
          
          {/* Underlined Sentence */}
          <div className="relative inline-block self-start text-left mt-2">
            <p className="text-[17px] md:text-lg font-outfit text-white font-bold tracking-wide relative z-10 pb-1 m-0 text-left">
              For the 15M+ people living with it, that vision cannot come soon enough.
            </p>
            {/* Custom thick marker underline via pseudo-element equivalent */}
            <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-brand-orange rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
