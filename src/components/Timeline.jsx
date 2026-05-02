import React from 'react';

const Timeline = () => {
  const phases = [
    {
      year: "2026",
      status: "Complete",
      title: "Foundation & Partnerships",
      desc: "Team, scientific framework, and initial academic and industry collaborations in place"
    },
    {
      year: "2027",
      status: "In progress",
      title: "Proof of Concept",
      desc: "Digital biomarkers integration and real-world data acquisition underway"
    },
    {
      year: "Upcoming",
      status: "Upcoming",
      title: "Clinical Validation",
      desc: "Multi-site trials to validate and refine the infrastructure with partner institutions"
    },
    {
      year: "Upcoming",
      status: "Upcoming",
      title: "Research Deployment",
      desc: "Infrastructure released to the Parkinson's research and clinical ecosystem"
    },
    {
      year: "Upcoming",
      status: "Upcoming",
      title: "Clinical Adoption",
      desc: "Large-scale implementation across clinical and research networks worldwide"
    }
  ];

  return (
    <section className="w-full bg-bg-light py-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full px-8">
        <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-brand-navy-dark uppercase leading-tight mb-16 text-center">
          The Work Has <span className="text-brand-orange">Already Begun.</span>
        </h2>
        
        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Main horizontal line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gray-light"></div>
          
          {/* Progress line */}
          <div className="absolute top-8 left-0 w-[30%] h-1 bg-brand-orange"></div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between relative z-10">
            {phases.map((phase, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center relative group">
                
                {/* Status Node */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-rajdhani font-bold text-sm border-4 transition-all duration-300
                  ${phase.status === 'Complete' ? 'bg-brand-orange border-white text-white shadow-md' : 
                    phase.status === 'In progress' ? 'bg-white border-brand-orange text-brand-orange shadow-md' : 
                    'bg-white border-gray-light text-gray-400 group-hover:border-brand-blue'}
                `}>
                  {phase.year}
                </div>
                
                <div className="mt-8">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-full mb-3 inline-block
                    ${phase.status === 'Complete' ? 'bg-brand-orange/10 text-brand-orange' : 
                      phase.status === 'In progress' ? 'bg-brand-blue/10 text-brand-blue' : 
                      'bg-gray-light/50 text-gray-500'}
                  `}>
                    {phase.status}
                  </span>
                  
                  <h3 className="font-rajdhani font-bold text-brand-navy-dark uppercase text-lg mb-2">
                    {phase.title}
                  </h3>
                  <p className="font-outfit text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
