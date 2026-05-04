import React from 'react';
import { motion } from 'framer-motion';
import joinUsBg from '../assets/bg-07.svg';

const JoinUs = () => {
  const cards = [
    {
      title: "PHILANTHROPIC SUPPORT",
      desc: "Accelerate the work that moves precision neurology from concept to clinical reality."
    },
    {
      title: "STRATEGIC PARTNERSHIP",
      desc: "Bring scientific, clinical or institutional reach to strengthen and scale the model."
    },
    {
      title: "OPEN COLLABORATION",
      desc: "Add expertise, networks or access to a mission already in motion."
    }
  ];

  return (
    <section className="w-full bg-[#EAEAF5] py-24 relative overflow-hidden">
      {/* Faint DNA Background Graphic */}
      <img 
        src={joinUsBg} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply pointer-events-none z-0" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10"
      >
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-16 text-center text-brand-navy-dark">
          Join Us.
        </h2>
        
        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-b from-[#EAEAF5] to-[#FCEAE3] rounded-[2.5rem] p-10 md:p-12 shadow-sm flex flex-col items-center text-center border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange"
            >
              <h3 className="text-[15px] font-rajdhani font-bold uppercase tracking-widest text-blue-800 mb-6">
                {card.title}
              </h3>
              <p className="font-outfit text-blue-800 leading-relaxed text-[16px] m-0">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        

      </motion.div>
    </section>
  );
};

export default JoinUs;
