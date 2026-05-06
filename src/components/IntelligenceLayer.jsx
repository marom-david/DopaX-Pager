import React from 'react';
import { motion } from 'framer-motion';
const IntelligenceLayer = () => {
  return (
    <section className="w-full bg-brand-navy-dark py-24 relative overflow-hidden">
      {/* CSS Noise Texture */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Graphic */}
      <svg width="100%" height="100%" viewBox="0 0 1000 320" fill="none" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid slice" className="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen brightness-125">
<g clipPath="url(#clip0_44_571)">
<rect width="1000" height="320" fill="#0F0F3D"/>
<rect width="1000" height="320" fill="url(#pattern0_44_571)" fillOpacity="0.15" style="mix-blend-mode:exclusion"/>
<g opacity="0.2">
<path d="M32.9897 223.495L93.7365 142.967L151.038 66.9698L157.61 58.2279C176.37 33.3421 205.722 18.6659 236.925 18.6659L302.011 18.6659L208.339 142.967L151.038 218.964L144.465 227.706C125.897 252.401 96.8631 266.949 65.9792 267.204C65.724 267.204 65.405 267.204 65.1498 267.204H0.89343C0.89343 267.204 0.319112 267.204 0.0638733 267.204L33.0534 223.495H32.9897Z" fill="url(#paint0_linear_44_571)"/>
<path d="M269.022 223.495L302.011 267.205C332.895 266.949 361.865 252.337 380.497 227.706L387.069 218.965L329.768 142.967L269.022 223.495Z" fill="url(#paint1_linear_44_571)"/>
<path d="M269.021 223.495L208.275 142.967L150.974 66.9698L144.401 58.2279C125.641 33.3421 96.2887 18.6659 65.0858 18.6659L0 18.6659L93.6725 142.967L150.974 218.964L157.546 227.706C176.115 252.401 205.148 266.949 236.032 267.204C236.287 267.204 236.606 267.204 236.861 267.204L301.118 267.204C301.118 267.204 301.692 267.204 301.947 267.204L268.958 223.495H269.021Z" fill="url(#paint2_linear_44_571)"/>
<path d="M267.954 223.495L328.701 142.967L386.002 66.9698L392.574 58.2279C411.334 33.3421 440.687 18.6659 471.889 18.6659L536.975 18.6659L443.303 142.967L386.002 218.964L379.429 227.706C360.861 252.401 331.827 266.949 300.943 267.204C300.688 267.204 300.369 267.204 300.114 267.204H235.858C235.858 267.204 235.283 267.204 235.028 267.204L268.018 223.495H267.954Z" fill="url(#paint3_linear_44_571)"/>
<path d="M503.986 223.495L536.975 267.205C567.859 266.949 596.829 252.337 615.461 227.706L622.034 218.965L564.732 142.967L503.986 223.495Z" fill="url(#paint4_linear_44_571)"/>
<path d="M503.986 223.495L443.239 142.967L385.938 66.9698L379.365 58.2279C360.605 33.3421 331.253 18.6659 300.05 18.6659L234.964 18.6659L328.637 142.967L385.938 218.964L392.51 227.706C411.079 252.401 440.112 266.949 470.996 267.204C471.251 267.204 471.57 267.204 471.825 267.204L536.082 267.204C536.082 267.204 536.656 267.204 536.911 267.204L503.922 223.495H503.986Z" fill="url(#paint5_linear_44_571)"/>
<path d="M502.918 223.495L563.665 142.967L620.966 66.9698L627.538 58.2279C646.298 33.3421 675.651 18.6659 706.854 18.6659L771.939 18.6659L678.267 142.967L620.966 218.964L614.393 227.706C595.825 252.401 566.791 266.949 535.907 267.204C535.652 267.204 535.333 267.204 535.078 267.204H470.822C470.822 267.204 470.247 267.204 469.992 267.204L502.982 223.495H502.918Z" fill="url(#paint6_linear_44_571)"/>
<path d="M738.95 223.495L771.939 267.205C802.823 266.949 831.793 252.337 850.425 227.706L856.998 218.965L799.696 142.967L738.95 223.495Z" fill="url(#paint7_linear_44_571)"/>
<path d="M738.95 223.495L678.203 142.967L620.902 66.9698L614.329 58.2279C595.569 33.3421 566.217 18.6659 535.014 18.6659L469.928 18.6659L563.601 142.967L620.902 218.964L627.474 227.706C646.043 252.401 675.076 266.949 705.96 267.204C706.215 267.204 706.534 267.204 706.789 267.204L771.046 267.204C771.046 267.204 771.62 267.204 771.875 267.204L738.886 223.495H738.95Z" fill="url(#paint8_linear_44_571)"/>
<path d="M737.882 223.495L798.629 142.967L855.93 66.9699L862.502 58.228C881.262 33.3422 910.615 18.666 941.818 18.666L1006.9 18.666L913.231 142.967L855.93 218.964L849.357 227.706C830.789 252.401 801.755 266.949 770.871 267.205C770.616 267.205 770.297 267.205 770.042 267.205H705.786C705.786 267.205 705.211 267.205 704.956 267.205L737.946 223.495H737.882Z" fill="url(#paint9_linear_44_571)"/>
<path d="M973.914 223.495L1006.9 267.205C1037.79 266.95 1066.76 252.337 1085.39 227.707L1091.96 218.965L1034.66 142.967L973.914 223.495Z" fill="url(#paint10_linear_44_571)"/>
<path d="M973.914 223.495L913.167 142.967L855.866 66.9699L849.293 58.228C830.533 33.3422 801.181 18.666 769.978 18.666L704.892 18.666L798.565 142.967L855.866 218.964L862.438 227.706C881.007 252.401 910.04 266.949 940.924 267.205C941.179 267.205 941.498 267.205 941.754 267.205L1006.01 267.205C1006.01 267.205 1006.58 267.205 1006.84 267.205L973.85 223.495H973.914Z" fill="url(#paint11_linear_44_571)"/>
</g>
</g>
<defs>

<linearGradient id="paint0_linear_44_571" x1="267.171" y1="0.352542" x2="24.6945" y2="298.152" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint1_linear_44_571" x1="398.045" y1="160.579" x2="236.351" y2="266.949" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint2_linear_44_571" x1="31.7134" y1="-7.04939" x2="245.093" y2="261.206" gradientUnits="userSpaceOnUse">
<stop offset="0.31" stopColor="#FF5C35"/>
<stop offset="0.33" stopColor="#EE5740"/>
<stop offset="0.43" stopColor="#BA4B63"/>
<stop offset="0.53" stopColor="#8D4081"/>
<stop offset="0.62" stopColor="#68379A"/>
<stop offset="0.72" stopColor="#4C30AD"/>
<stop offset="0.81" stopColor="#382BBB"/>
<stop offset="0.91" stopColor="#2C28C3"/>
<stop offset="1" stopColor="#2828C6"/>
</linearGradient>
<linearGradient id="paint3_linear_44_571" x1="502.135" y1="0.352542" x2="259.659" y2="298.152" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint4_linear_44_571" x1="633.009" y1="160.579" x2="471.315" y2="266.949" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint5_linear_44_571" x1="266.677" y1="-7.04939" x2="480.057" y2="261.206" gradientUnits="userSpaceOnUse">
<stop offset="0.31" stopColor="#FF5C35"/>
<stop offset="0.33" stopColor="#EE5740"/>
<stop offset="0.43" stopColor="#BA4B63"/>
<stop offset="0.53" stopColor="#8D4081"/>
<stop offset="0.62" stopColor="#68379A"/>
<stop offset="0.72" stopColor="#4C30AD"/>
<stop offset="0.81" stopColor="#382BBB"/>
<stop offset="0.91" stopColor="#2C28C3"/>
<stop offset="1" stopColor="#2828C6"/>
</linearGradient>
<linearGradient id="paint6_linear_44_571" x1="737.099" y1="0.352542" x2="494.623" y2="298.152" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint7_linear_44_571" x1="867.973" y1="160.579" x2="706.279" y2="266.949" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint8_linear_44_571" x1="501.642" y1="-7.04939" x2="715.021" y2="261.206" gradientUnits="userSpaceOnUse">
<stop offset="0.31" stopColor="#FF5C35"/>
<stop offset="0.33" stopColor="#EE5740"/>
<stop offset="0.43" stopColor="#BA4B63"/>
<stop offset="0.53" stopColor="#8D4081"/>
<stop offset="0.62" stopColor="#68379A"/>
<stop offset="0.72" stopColor="#4C30AD"/>
<stop offset="0.81" stopColor="#382BBB"/>
<stop offset="0.91" stopColor="#2C28C3"/>
<stop offset="1" stopColor="#2828C6"/>
</linearGradient>
<linearGradient id="paint9_linear_44_571" x1="972.063" y1="0.352664" x2="729.587" y2="298.152" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint10_linear_44_571" x1="1102.94" y1="160.579" x2="941.243" y2="266.95" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint11_linear_44_571" x1="736.606" y1="-7.04927" x2="949.985" y2="261.206" gradientUnits="userSpaceOnUse">
<stop offset="0.31" stopColor="#FF5C35"/>
<stop offset="0.33" stopColor="#EE5740"/>
<stop offset="0.43" stopColor="#BA4B63"/>
<stop offset="0.53" stopColor="#8D4081"/>
<stop offset="0.62" stopColor="#68379A"/>
<stop offset="0.72" stopColor="#4C30AD"/>
<stop offset="0.81" stopColor="#382BBB"/>
<stop offset="0.91" stopColor="#2C28C3"/>
<stop offset="1" stopColor="#2828C6"/>
</linearGradient>
<clipPath id="clip0_44_571">
<rect width="1000" height="320" fill="white"/>
</clipPath>

</defs>
</svg>


      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-stretch gap-12 px-6 md:px-12 lg:px-16 relative z-10"
      >
        
        {/* Left Column (Title & Logo) */}
        <div className="w-full lg:w-[30%] flex flex-col justify-center items-start text-left">
          <img 
            src="/assets/logos/Dopa-Z-logo light.svg" 
            alt="DopaX Logo" 
            className="w-32 mb-6 object-contain" 
          />
          <h2 className="text-white font-rajdhani text-4xl font-bold leading-tight m-0">
            Intelligence Layer:
          </h2>
          <p className="text-gray-light text-sm uppercase tracking-widest mt-4 font-outfit m-0 leading-relaxed">
            A CLOSED-LOOP SYSTEM<br/>FOR PARKINSON'S.
          </p>
        </div>

        {/* Right Column (The 3 Cards) */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Sense */}
          <div className="bg-transparent border-2 border-brand-orange rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[250px] text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-rajdhani font-bold text-white mb-6">01</div>
              <h3 className="uppercase tracking-widest text-gray-300 font-outfit font-medium mb-4 text-sm">
                SENSE
              </h3>
              <p className="text-[13px] text-gray-400 font-outfit leading-relaxed m-0">
                Physiological and behavioral data, continuously collected within and beyond the clinical visit
              </p>
            </div>
            {/* Empty div for spacing at the bottom to balance the wave */}
            <div></div>
          </div>

          {/* Card 2: Analyze */}
          <div className="bg-transparent border-2 border-brand-orange rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[250px] text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5">
            <div className="flex flex-col items-center">
              <h3 className="uppercase tracking-widest text-gray-300 font-outfit font-medium mb-4 text-sm">
                ANALYZE
              </h3>
              <p className="text-[13px] text-gray-400 font-outfit leading-relaxed m-0">
                Disease state, progression patterns, and treatment response
              </p>
            </div>
            <div className="text-5xl font-rajdhani font-bold text-white mt-6">02</div>
          </div>

          {/* Card 3: Deliver */}
          <div className="bg-transparent border-2 border-brand-orange rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[250px] text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-rajdhani font-bold text-white mb-6">03</div>
              <h3 className="uppercase tracking-widest text-gray-300 font-outfit font-medium mb-4 text-sm">
                DELIVER
              </h3>
              <p className="text-[13px] text-gray-400 font-outfit leading-relaxed m-0">
                Adaptive, data-informed intervention over time. A signal patients, clinicians and researchers can finally act on.
              </p>
            </div>
            {/* Empty div for spacing at the bottom to balance the wave */}
            <div></div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default IntelligenceLayer;
