<template>
  <section class="py-24 bg-white relative">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <!-- Left Column -->
      <div class="max-w-xl pr-10">
        <h2 class="font-display text-5xl lg:text-7xl text-[#1a1d20] mb-8 leading-tight">
          Our Divine<br />Mandate
        </h2>
        <p class="font-sans text-[#4a4a4a] text-base lg:text-[18px] leading-relaxed mb-12 font-normal">
          We are called to anchor the unlimited to the terrestrial. A generation refined by fire, walking in the exactness of the Spirit, and the power of the Word.
        </p>

        <!-- Sparkle Card - Glass Effect & Border -->
        <div class="bg-white/40 backdrop-blur-xl p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex gap-5 max-w-[340px] group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 rounded-full bg-[#fdf2e9] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <i class="pi pi-sparkles text-[#d47a22] text-xl drop-shadow-[0_0_8px_rgba(212,122,34,0.4)]"></i>
          </div>
          <div>
            <h4 class="font-sans font-bold text-[#1a1d20] text-[15px] mb-1.5">The Supernatural Flow</h4>
            <p class="font-sans text-[#707070] text-[13px] leading-relaxed font-normal">
              Experiencing the constant move of the Spirit in every sphere of endeavor.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column (Bento Grid) -->
      <div class="w-full h-[600px] hidden lg:grid grid-cols-2 grid-rows-3 gap-6 relative">
        
        <!-- Left Tall (Col 1, Row 1-2) -->
        <div class="col-start-1 row-start-1 row-span-2 rounded-[32px] bg-linear-to-t from-[#0B1525] to-[#142A45] shadow-2xl flex items-center justify-center overflow-hidden relative group">
           <div class="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
              <div class="w-[3px] h-[300px] bg-white shadow-[0_0_50px_20px_rgba(255,255,255,0.4)] relative">
                 <div class="w-[10px] h-[100px] bg-black/80 absolute bottom-[-50px] left-1/2 -translate-x-1/2 rounded-t-full"></div>
              </div>
           </div>
        </div>

        <!-- Left Small (Col 1, Row 3) -->
        <div class="col-start-1 row-start-3 rounded-[32px] bg-[#0c182b] p-6 shadow-2xl flex flex-col justify-center border border-white/10 group overflow-hidden relative mt-2">
          <div class="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <i class="pi pi-bolt text-[#d47a22] text-2xl mb-4 transform group-hover:rotate-12 transition-transform duration-300"></i>
          <h4 class="font-sans font-bold text-white text-[14px] mb-2 tracking-wide">Men Hearing From God</h4>
          <p class="font-sans text-gray-400 text-[12px] leading-relaxed font-normal">
            Deepening communion easily to secure the exact details of the Father's will on every matter.
          </p>
        </div>

        <!-- Right Small (Col 2, Row 1) -->
        <div class="col-start-2 row-start-1 rounded-[32px] bg-linear-to-br from-[#fca346] to-[#d97c1d] p-6 shadow-xl flex flex-col justify-center border border-white/20 group overflow-hidden relative mb-2">
          <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4 transform group-hover:-translate-y-1 transition-transform">
             <i class="pi pi-compass text-[#6b3e13] text-lg"></i>
          </div>
          <h4 class="font-sans font-bold text-[#5a310d] text-[14px] mb-2 tracking-wide">Global Envoys</h4>
          <p class="font-sans text-[#7d4615] text-[12px] leading-relaxed font-normal">
            Equipping saints to represent the Kingdom at the highest levels of global influence.
          </p>
        </div>

        <!-- Right Tall (Col 2, Row 2-3) -->
        <div class="col-start-2 row-start-2 row-span-2 rounded-[32px] bg-[#225050] shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-white/10 relative group">
           <i class="pi pi-globe text-[180px] text-[#4ea0a0] opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform group-hover:scale-110 transition-transform duration-700 delay-100"></i>
           <div class="absolute bottom-10 w-full text-center z-10">
              <span class="font-sans text-[12px] text-[#55dfc8] tracking-[0.4em] font-bold uppercase drop-shadow-lg scale-95 group-hover:scale-100 inline-block transition-transform duration-300">
                GLOBAL MISSION
              </span>
           </div>
        </div>

      </div>

      <!-- Mobile fallback for Collage -->
      <div class="grid grid-cols-2 gap-4 lg:hidden mt-4">
         <div class="bg-linear-to-br from-[#fca346] to-[#d97c1d] p-6 rounded-3xl shadow-xl border border-white/20">
           <i class="pi pi-compass text-[#6b3e13] mb-3 text-2xl"></i>
           <h4 class="font-sans font-bold text-[#5a310d] text-sm">Global Envoys</h4>
         </div>
         <div class="bg-[#0c182b] p-6 rounded-3xl shadow-xl border border-white/10">
           <i class="pi pi-bolt text-[#d47a22] mb-3 text-2xl"></i>
           <h4 class="font-sans font-bold text-white text-sm">Men Hearing From God</h4>
         </div>
      </div>

    </div>
  </section>
</template>
