import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className="relative w-full bg-brand-navy-dark text-white min-h-screen overflow-hidden flex flex-col">
      {/* CSS Noise Texture */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Graphic */}
      <svg width="100%" height="100%" viewBox="0 0 1000 521" fill="none" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid slice" className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-60 brightness-110">
<g clipPath="url(#clip0_44_442)">
<rect width="1000" height="521" fill="#0F0F3D"/>
<rect width="1000" height="521" fill="url(#pattern0_44_442)" fillOpacity="0.1"/>
<g opacity="0.3">
<path d="M819.607 -17.6949L863.069 15.0913L904.087 46.0178L908.805 49.565C922.236 59.6902 930.157 75.5323 930.157 92.3731L930.157 127.501L863.069 76.9442L822.052 46.0178L817.334 42.4705C804.006 32.4487 796.154 16.7788 796.016 0.110208C796.016 -0.027548 796.016 -0.199709 796.016 -0.337465L796.016 -35.0179C796.016 -35.0179 796.016 -35.3278 796.016 -35.4656L819.607 -17.6605L819.607 -17.6949Z" fill="url(#paint0_linear_44_442)"/>
<path d="M819.607 109.696L796.016 127.501C796.154 144.17 804.04 159.805 817.334 169.861L822.052 173.409L863.069 142.482L819.607 109.696Z" fill="url(#paint1_linear_44_442)"/>
<path d="M819.607 109.696L863.069 76.9098L904.086 45.9834L908.805 42.4361C922.236 32.311 930.157 16.4689 930.157 -0.371937L930.157 -35.5L863.069 15.0568L822.052 45.9834L817.334 49.5306C804.006 59.5524 796.154 75.2223 796.016 91.8909C796.016 92.0287 796.016 92.2009 796.016 92.3386L796.016 127.019C796.016 127.019 796.016 127.329 796.016 127.467L819.607 109.662L819.607 109.696Z" fill="url(#paint2_linear_44_442)"/>
<path d="M819.607 109.12L863.069 141.906L904.087 172.832L908.805 176.38C922.236 186.505 930.157 202.347 930.157 219.188L930.157 254.316L863.069 203.759L822.052 172.832L817.334 169.285C804.006 159.263 796.154 143.594 796.016 126.925C796.016 126.787 796.016 126.615 796.016 126.477L796.016 91.7968C796.016 91.7968 796.016 91.4869 796.016 91.3491L819.607 109.154L819.607 109.12Z" fill="url(#paint3_linear_44_442)"/>
<path d="M819.607 236.511L796.016 254.316C796.154 270.984 804.04 286.62 817.334 296.676L822.052 300.223L863.069 269.297L819.607 236.511Z" fill="url(#paint4_linear_44_442)"/>
<path d="M819.607 236.511L863.069 203.724L904.086 172.798L908.804 169.251C922.236 159.126 930.157 143.283 930.157 126.443L930.157 91.3146L863.069 141.871L822.052 172.798L817.334 176.345C804.006 186.367 796.154 202.037 796.016 218.706C796.016 218.843 796.016 219.015 796.016 219.153L796.016 253.834C796.016 253.834 796.016 254.143 796.016 254.281L819.607 236.476L819.607 236.511Z" fill="url(#paint5_linear_44_442)"/>
<path d="M819.607 235.934L863.069 268.721L904.087 299.647L908.805 303.194C922.236 313.319 930.157 329.162 930.157 346.002L930.157 381.13L863.069 330.574L822.052 299.647L817.334 296.1C804.006 286.078 796.154 270.408 796.016 253.739C796.016 253.602 796.016 253.43 796.016 253.292L796.016 218.611C796.016 218.611 796.016 218.301 796.016 218.164L819.607 235.969L819.607 235.934Z" fill="url(#paint6_linear_44_442)"/>
<path d="M819.607 363.325L796.016 381.13C796.154 397.799 804.04 413.434 817.334 423.491L822.052 427.038L863.069 396.111L819.607 363.325Z" fill="url(#paint7_linear_44_442)"/>
<path d="M819.607 363.325L863.069 330.539L904.086 299.613L908.804 296.065C922.236 285.94 930.157 270.098 930.157 253.257L930.157 218.129L863.069 268.686L822.052 299.613L817.334 303.16C804.006 313.182 796.154 328.852 796.016 345.52C796.016 345.658 796.016 345.83 796.016 345.968L796.016 380.648C796.016 380.648 796.016 380.958 796.016 381.096L819.607 363.291L819.607 363.325Z" fill="url(#paint8_linear_44_442)"/>
<path d="M819.607 362.749L863.069 395.535L904.087 426.462L908.805 430.009C922.236 440.134 930.157 455.976 930.157 472.817L930.157 507.945L863.069 457.388L822.052 426.462L817.334 422.914C804.006 412.893 796.154 397.223 796.016 380.554C796.016 380.416 796.016 380.244 796.016 380.106L796.016 345.426C796.016 345.426 796.016 345.116 796.016 344.978L819.607 362.783L819.607 362.749Z" fill="url(#paint9_linear_44_442)"/>
<path d="M819.607 490.14L796.016 507.945C796.154 524.614 804.04 540.249 817.334 550.305L822.052 553.853L863.069 522.926L819.607 490.14Z" fill="url(#paint10_linear_44_442)"/>
<path d="M819.607 490.14L863.069 457.354L904.086 426.427L908.804 422.88C922.236 412.755 930.157 396.913 930.157 380.072L930.157 344.944L863.069 395.501L822.052 426.427L817.334 429.974C804.006 439.996 796.154 455.666 796.016 472.335C796.016 472.473 796.016 472.645 796.016 472.782L796.016 507.463C796.016 507.463 796.016 507.773 796.016 507.911L819.607 490.105L819.607 490.14Z" fill="url(#paint11_linear_44_442)"/>
<path d="M819.607 489.564L863.069 522.35L904.087 553.276L908.805 556.824C922.236 566.949 930.157 582.791 930.157 599.632L930.157 634.76L863.069 584.203L822.052 553.276L817.334 549.729C804.006 539.707 796.154 524.037 796.016 507.369C796.016 507.231 796.016 507.059 796.016 506.921L796.016 472.241C796.016 472.241 796.016 471.931 796.016 471.793L819.607 489.598L819.607 489.564Z" fill="url(#paint12_linear_44_442)"/>
<path d="M819.607 616.954L863.069 584.168L904.086 553.242L908.804 549.695C922.236 539.569 930.157 523.727 930.157 506.886L930.157 471.758L863.069 522.315L822.052 553.242L817.334 556.789C804.006 566.811 796.154 582.481 796.016 599.149C796.016 599.287 796.016 599.459 796.016 599.597L796.016 634.277C796.016 634.277 796.016 634.587 796.016 634.725L819.607 616.92L819.607 616.954Z" fill="url(#paint13_linear_44_442)"/>
</g>
</g>
<defs>

<linearGradient id="paint0_linear_44_442" x1="940.041" y1="108.697" x2="779.313" y2="-22.172" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint1_linear_44_442" x1="853.564" y1="179.332" x2="796.154" y2="92.0631" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint2_linear_44_442" x1="944.036" y1="-18.3837" x2="799.253" y2="96.7813" gradientUnits="userSpaceOnUse">
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
<linearGradient id="paint3_linear_44_442" x1="940.041" y1="235.512" x2="779.313" y2="104.643" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint4_linear_44_442" x1="853.564" y1="306.147" x2="796.154" y2="218.878" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint5_linear_44_442" x1="944.036" y1="108.431" x2="799.253" y2="223.596" gradientUnits="userSpaceOnUse">
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
<linearGradient id="paint6_linear_44_442" x1="940.041" y1="362.327" x2="779.313" y2="231.457" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint7_linear_44_442" x1="853.564" y1="432.962" x2="796.154" y2="345.692" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint8_linear_44_442" x1="944.036" y1="235.246" x2="799.253" y2="350.41" gradientUnits="userSpaceOnUse">
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
<linearGradient id="paint9_linear_44_442" x1="940.041" y1="489.141" x2="779.313" y2="358.272" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint10_linear_44_442" x1="853.564" y1="559.776" x2="796.154" y2="472.507" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint11_linear_44_442" x1="944.036" y1="362.06" x2="799.253" y2="477.225" gradientUnits="userSpaceOnUse">
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
<linearGradient id="paint12_linear_44_442" x1="940.041" y1="615.956" x2="779.313" y2="485.087" gradientUnits="userSpaceOnUse">
<stop stopColor="#2828C6"/>
<stop offset="1" stopColor="#0F0F3D"/>
</linearGradient>
<linearGradient id="paint13_linear_44_442" x1="944.036" y1="488.875" x2="799.253" y2="604.04" gradientUnits="userSpaceOnUse">
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
<clipPath id="clip0_44_442">
<rect width="1000" height="521" fill="white"/>
</clipPath>

</defs>
</svg>

      
      {/* Fallback placeholder if image is missing */}
      <div className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"></div>

      {/* Main Content Container aligned with Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-16 flex flex-col items-start text-left flex-grow justify-center"
      >
        
        {/* Text Width Constraint */}
        <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col items-start text-left gap-8 lg:gap-10">
          
          {/* Prominent Logo Section */}
          <div className="flex flex-col items-start text-left w-full">
            <img 
              src="/assets/logos/Dopa-Z-logo light.svg" 
              alt="DopaX Logo" 
              className="w-56 h-auto object-contain" 
            />
          </div>

          {/* Headline Container with Glow */}
          <div className="relative w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/15 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
            <h1 className="text-5xl md:text-6xl font-rajdhani font-bold leading-[1.1] text-white tracking-wide text-left w-full m-0 p-0 relative z-10 drop-shadow-md">
              We Can't Halt <br />
              What We Can't See.
            </h1>
          </div>
          
          {/* Two Column Text (Paragraph Proportions) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full text-left relative z-10">
            <div className="flex flex-col items-start">
              <p className="text-lg lg:text-xl font-outfit text-gray-200 leading-relaxed font-light text-left m-0 p-0 drop-shadow-md">
                <span className="text-xl lg:text-2xl font-normal text-white">Parkinson's</span> can become a chronic disease managed for decades, but that future depends on something that still does not exist: continuous, precise and objective measurement of how the disease progresses.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-lg lg:text-xl font-outfit text-gray-200 leading-relaxed font-light text-left m-0 p-0 drop-shadow-md">
                <span className="text-xl lg:text-2xl font-normal text-white">Dopa-X</span> was built to close this gap, generating the measurement infrastructure Parkinson's has never had, to halt its progression and dramatically extend effective treatment.
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
      </motion.div>
    </section>
  );
};

export default Hero;
