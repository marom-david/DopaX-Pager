import React from 'react';

const JoinUs = () => {
  const logos = [
    '/assets/logos/image1.svg',
    '/assets/logos/image2.svg',
    '/assets/logos/image3.svg',
    '/assets/logos/image4.svg',
    '/assets/logos/image5.svg',
  ];

  return (
    <section className="w-full bg-brand-navy-dark text-white pt-24 pb-12 border-t border-brand-blue/30 relative">
      <div className="max-w-6xl mx-auto w-full px-8">
        
        <h2 className="text-4xl md:text-6xl font-rajdhani font-bold mb-16 uppercase text-center">
          Join <span className="text-brand-orange">Us.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="border-t-2 border-brand-orange pt-6">
            <h3 className="font-rajdhani font-bold text-2xl uppercase tracking-wider mb-4">Philanthropic <br/> support</h3>
            <p className="font-outfit text-gray-light opacity-80 leading-relaxed">
              Accelerate the work that moves precision neurology from concept to clinical reality.
            </p>
          </div>
          <div className="border-t-2 border-brand-blue pt-6">
            <h3 className="font-rajdhani font-bold text-2xl uppercase tracking-wider mb-4">Strategic <br/> partnership</h3>
            <p className="font-outfit text-gray-light opacity-80 leading-relaxed">
              Bring scientific, clinical or institutional reach to strengthen and scale the model.
            </p>
          </div>
          <div className="border-t-2 border-brand-orange pt-6">
            <h3 className="font-rajdhani font-bold text-2xl uppercase tracking-wider mb-4">Open <br/> Collaboration</h3>
            <p className="font-outfit text-gray-light opacity-80 leading-relaxed">
              Add expertise, networks or access to a mission already in motion.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <p className="font-outfit text-gray-light uppercase tracking-[0.2em] text-sm mb-6 opacity-60">In Collaboration With</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                className="h-6 md:h-8 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <a href="https://dopa-x.org" className="font-outfit text-brand-orange font-bold uppercase tracking-wider hover:text-white transition-colors">
              Learn more at dopa-x.org
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-outfit text-sm text-gray-light opacity-60">
            <a href="mailto:hello@dopa-x.org" className="hover:opacity-100 transition-opacity">hello@dopa-x.org</a>
            <span className="hidden md:block">|</span>
            <span>+972 54-220-4821</span>
            <span className="hidden md:block">|</span>
            <span>dopa-x</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default JoinUs;
