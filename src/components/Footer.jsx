import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-24 flex flex-col items-center">
      
      {/* Top Section (Logos) */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col items-center mb-24">
        <h2 className="text-4xl font-rajdhani font-bold text-brand-navy-dark text-center m-0">
          In Collaboration With
        </h2>
        
        {/* Strictly sized full-color logo grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-12 w-full">
          <img src="/assets/logos/image2.svg" alt="IFM Logo" className="h-8 md:h-10 w-auto object-contain" />
          <img src="/assets/logos/image1.svg" alt="Deepdub Logo" className="h-8 md:h-10 w-auto object-contain" />
          <img src="/assets/logos/image3.svg" alt="IRON NATION Logo" className="h-8 md:h-10 w-auto object-contain" />
          <img src="/assets/logos/image4.svg" alt="eyecuracy Logo" className="h-8 md:h-10 w-auto object-contain" />
          <img src="/assets/logos/image5.svg" alt="Oruka Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
      </div>
      
      {/* Bottom Section (Contact Bar) */}
      <div className="w-full bg-[#F3F4F6] py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-brand-navy-dark text-lg font-outfit font-medium flex-wrap">
            
            {/* 1. Dopa-X Logo */}
            <img src="/assets/logos/Dopa-Z-logo%20dark.svg" alt="Dopa-X Logo" className="h-10 w-auto object-contain" />
            
            {/* 2. Website */}
            <a href="https://dopa-x.org" className="hover:text-brand-orange transition-colors">
              dopa-x.org
            </a>
            
            {/* 3. Divider */}
            <span className="text-gray-400 hidden md:inline">|</span>
            
            {/* 4. Email */}
            <a href="mailto:hello@dopa-x.org" className="hover:text-brand-orange transition-colors">
              hello@dopa-x.org
            </a>
            
            {/* 5. Divider */}
            <span className="text-gray-400 hidden md:inline">|</span>
            
            {/* 6. Phone */}
            <a href="tel:+972542204821" className="hover:text-brand-orange transition-colors">
              +972 54-220-4821
            </a>
            
            {/* 7. Divider */}
            <span className="text-gray-400 hidden md:inline">|</span>
            
            {/* 8. LinkedIn */}
            <a href="https://linkedin.com/company/dopa-x" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <span className="font-bold font-rajdhani text-2xl leading-none">in</span>
              <span>dopa-x</span>
            </a>
            
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
