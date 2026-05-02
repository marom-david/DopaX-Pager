import React from 'react';

const MissingX = () => {
  return (
    <section className="w-full bg-bg-light pt-20 pb-8 flex flex-col justify-center border-b border-gray-light/30">
      <div className="max-w-6xl mx-auto w-full px-8 flex flex-row items-center justify-center gap-12">
        
        {/* Massive "0" on the left */}
        <div className="flex-shrink-0">
          <span className="text-[12rem] md:text-[16rem] leading-[0.8] font-rajdhani font-bold bg-clip-text text-transparent bg-gradient-to-b from-brand-orange to-brand-blue drop-shadow-md">
            0
          </span>
        </div>
        
        {/* Text Block on the right */}
        <div className="flex flex-col items-start text-left max-w-2xl space-y-3">
          <p className="text-[19px] md:text-[21px] font-outfit text-brand-navy-dark font-medium leading-snug m-0 text-left">
            Approved treatments that slow or stop Parkinson's progression.
          </p>
          
          <p className="text-[19px] md:text-[21px] font-outfit text-brand-navy-dark font-medium leading-snug m-0 text-left">
            Not for lack of trying. For lack of continuous, objective measurement.
          </p>
          
          <p className="text-2xl md:text-[28px] font-outfit font-bold text-brand-orange tracking-wide text-left mt-2 m-0">
            That is the missing X.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissingX;
