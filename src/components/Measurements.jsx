import React from 'react';
import { motion } from 'framer-motion';
const Measurements = () => {
  return (
    <section className="relative w-full bg-[#F9FAFB] py-24 overflow-hidden z-0">
      {/* Background Graphic (DNA Helix) */}
      <svg width="100%" height="100%" viewBox="0 0 1000 343" fill="none" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid slice" className="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-multiply">
<g clipPath="url(#clip0_44_484)">
<rect width="1000" height="343" fill="white"/>
<rect width="1000" height="343" fill="url(#pattern0_44_484)" fillOpacity="0.15"/>
<g opacity="0.1">
<path d="M817.591 -6.69484L861.053 26.0914L902.071 57.0178L906.789 60.5651C920.22 70.6902 928.141 86.5323 928.141 103.373L928.141 138.501L861.053 87.9443L820.036 57.0178L815.318 53.4706C801.99 43.4488 794.138 27.7789 794 11.1103C794 10.9725 794 10.8003 794 10.6626L794 -24.0178C794 -24.0178 794 -24.3278 794 -24.4655L817.591 -6.66042L817.591 -6.69484Z" fill="url(#paint0_linear_44_484)"/>
<path d="M817.591 120.696L794 138.501C794.138 155.17 802.024 170.805 815.318 180.862L820.036 184.409L861.053 153.482L817.591 120.696Z" fill="url(#paint1_linear_44_484)"/>
<path d="M817.591 120.696L861.053 87.9098L902.071 56.9834L906.789 53.4361C920.22 43.311 928.141 27.4689 928.141 10.6281L928.141 -24.5L861.053 26.0568L820.036 56.9834L815.318 60.5306C801.99 70.5524 794.138 86.2223 794 102.891C794 103.029 794 103.201 794 103.339L794 138.019C794 138.019 794 138.329 794 138.467L817.591 120.662L817.591 120.696Z" fill="url(#paint2_linear_44_484)"/>
<path d="M817.591 120.12L861.053 152.906L902.071 183.832L906.789 187.38C920.22 197.505 928.141 213.347 928.141 230.188L928.141 265.316L861.053 214.759L820.036 183.832L815.318 180.285C801.99 170.263 794.138 154.593 794 137.925C794 137.787 794 137.615 794 137.477L794 102.797C794 102.797 794 102.487 794 102.349L817.591 120.154L817.591 120.12Z" fill="url(#paint3_linear_44_484)"/>
<path d="M817.591 247.511L794 265.316C794.138 281.984 802.024 297.62 815.318 307.676L820.036 311.223L861.053 280.297L817.591 247.511Z" fill="url(#paint4_linear_44_484)"/>
<path d="M817.591 247.511L861.053 214.724L902.07 183.798L906.789 180.251C920.22 170.126 928.141 154.283 928.141 137.443L928.141 102.315L861.053 152.871L820.036 183.798L815.318 187.345C801.99 197.367 794.138 213.037 794 229.706C794 229.843 794 230.015 794 230.153L794 264.834C794 264.834 794 265.144 794 265.281L817.591 247.476L817.591 247.511Z" fill="url(#paint5_linear_44_484)"/>
<path d="M817.591 246.934L861.053 279.721L902.071 310.647L906.789 314.194C920.22 324.319 928.141 340.162 928.141 357.002L928.141 392.13L861.053 341.574L820.036 310.647L815.318 307.1C801.99 297.078 794.138 281.408 794 264.739C794 264.602 794 264.43 794 264.292L794 229.611C794 229.611 794 229.301 794 229.164L817.591 246.969L817.591 246.934Z" fill="url(#paint6_linear_44_484)"/>
<path d="M817.591 374.325L861.053 341.539L902.07 310.613L906.789 307.065C920.22 296.94 928.141 281.098 928.141 264.257L928.141 229.129L861.053 279.686L820.036 310.613L815.318 314.16C801.99 324.182 794.138 339.852 794 356.52C794 356.658 794 356.83 794 356.968L794 391.648C794 391.648 794 391.958 794 392.096L817.591 374.291L817.591 374.325Z" fill="url(#paint7_linear_44_484)"/>
</g>
</g>
<defs>

<linearGradient id="paint0_linear_44_484" x1="938.025" y1="119.697" x2="777.297" y2="-11.1719" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint1_linear_44_484" x1="851.548" y1="190.332" x2="794.138" y2="103.063" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint2_linear_44_484" x1="942.02" y1="-7.38368" x2="797.237" y2="107.781" gradientUnits="userSpaceOnUse">
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
<linearGradient id="paint3_linear_44_484" x1="938.025" y1="246.512" x2="777.297" y2="115.643" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint4_linear_44_484" x1="851.548" y1="317.147" x2="794.138" y2="229.878" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint5_linear_44_484" x1="942.02" y1="119.431" x2="797.237" y2="234.596" gradientUnits="userSpaceOnUse">
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
<linearGradient id="paint6_linear_44_484" x1="938.025" y1="373.327" x2="777.297" y2="242.457" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint7_linear_44_484" x1="942.02" y1="246.246" x2="797.237" y2="361.411" gradientUnits="userSpaceOnUse">
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
<clipPath id="clip0_44_484">
<rect width="1000" height="343" fill="white"/>
</clipPath>

</defs>
</svg>


      {/* Content Centering Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-12 lg:px-16"
      >
        
        {/* Title */}
        <h2 className="text-4xl md:text-[2.5rem] font-rajdhani font-bold text-brand-navy-dark mb-12 text-center tracking-wide">
          Measuring Changes Everything.
        </h2>
        
        {/* Block 1: White Cards (Equal Width Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-light/20 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange">
            <h3 className="text-2xl font-rajdhani font-bold tracking-wider uppercase text-brand-navy-dark mb-6">
              Disease Modification
            </h3>
            <p className="font-outfit text-gray-800 leading-relaxed text-lg m-0 text-left">
              For the first time, AI-driven continuous measurement gives researchers a real, objective signal to test against, creating the infrastructure needed to find disease-modifying treatments and dramatically shortening the path to answers.
            </p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-light/20 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange">
            <h3 className="text-2xl font-rajdhani font-bold tracking-wider uppercase text-brand-navy-dark mb-6">
              Better Care
            </h3>
            <p className="font-outfit text-gray-800 leading-relaxed text-lg m-0 text-left">
              The same measurement layer enables improving and optimizing the outcomes from existing levodopa therapy. The right dose, at the right time, extending the effective treatment window to 15 years and beyond.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Measurements;
