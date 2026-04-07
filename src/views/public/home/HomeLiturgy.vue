<template>
  <section class="py-24 bg-[#F9F9F9]">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <h5 class="font-sans font-bold text-[11px] tracking-[0.3em] text-[#A67657] uppercase mb-4">
          DIVINE GATHERINGS
        </h5>
        <h2 class="font-display italic text-5xl md:text-6xl text-[#1a1d20]">
          Weekly Liturgy
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        
        <!-- Card 1: Aggelos Fest -->
        <div class="bg-white/60 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 border border-white/50 flex flex-col justify-between min-h-[360px] group transition-all duration-500 cursor-pointer overflow-hidden relative">
          <div class="absolute inset-0 bg-linear-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="w-12 h-12 rounded-full bg-[#f6efe8] flex items-center justify-center mb-6 group-hover:bg-[#f3dfce] transition-colors duration-300 shadow-inner">
               <i class="pi pi-eye text-[#b58b6e] text-sm group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <h3 class="font-display text-2xl text-[#1a1d20] mb-4 group-hover:text-[#b58b6e] transition-colors duration-300">Aggelos Fest</h3>
            <p class="font-sans text-[#4a4a4a] text-[15px] leading-relaxed font-normal">
              A morning of intense adoration and angelic counts as we greet the new day in His Presence.
            </p>
          </div>
          <div class="mt-10 flex items-end justify-between border-t border-gray-100 pt-5 relative z-10">
            <span class="font-sans font-bold text-[11px] tracking-widest text-[#1a1d20] uppercase">07:00 AM - 09:30 AM</span>
            <span class="font-sans font-bold text-[9px] tracking-[0.2em] text-[#d47a22] uppercase">SUNDAY</span>
          </div>
        </div>

        <!-- Card 2: The Gathering -->
        <div class="bg-[#0b1221]/90 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_20px_60px_rgb(0,0,0,0.3)] hover:shadow-[0_30px_70px_rgb(0,0,0,0.4)] flex flex-col justify-between min-h-[360px] md:scale-105 hover:scale-110 z-10 border border-white/10 group transition-all duration-500 cursor-pointer overflow-hidden relative">
          <div class="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="w-12 h-12 rounded-full bg-[#20293a] flex items-center justify-center mb-6 shadow-inner group-hover:bg-[#2d3a52] transition-colors duration-300">
               <i class="pi pi-bolt text-[#d47a22] text-sm group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"></i>
            </div>
            <h3 class="font-display text-2xl text-white mb-4 group-hover:text-[#d47a22] transition-colors duration-300">The Gathering</h3>
            <p class="font-sans text-gray-300 text-[15px] leading-relaxed font-normal group-hover:text-white transition-colors">
              Our central collective encounter. A fusion of apostolic teaching, corporate worship, and prophetic impartation.
            </p>
          </div>
          <div class="mt-10 flex items-end justify-between border-t border-gray-700/50 pt-5 relative z-10">
            <span class="font-sans font-bold text-[11px] tracking-widest text-white uppercase">09:30 AM - 12:00 PM</span>
            <span class="font-sans font-bold text-[9px] tracking-[0.2em] text-[#d47a22] uppercase">SUNDAY</span>
          </div>
        </div>

        <!-- Card 3: The Archive Study -->
        <div class="bg-white/60 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 border border-white/50 flex flex-col justify-between min-h-[360px] group transition-all duration-500 cursor-pointer overflow-hidden relative">
          <div class="absolute inset-0 bg-linear-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="w-12 h-12 rounded-full bg-[#faeff0] flex items-center justify-center mb-6 group-hover:bg-[#f3d9db] transition-colors duration-300 shadow-inner">
               <i class="pi pi-book text-[#c98e82] text-sm group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <h3 class="font-display text-2xl text-[#1a1d20] mb-4 group-hover:text-[#c98e82] transition-colors duration-300">The Archive Study</h3>
            <p class="font-sans text-[#4a4a4a] text-[15px] leading-relaxed font-normal">
              A deep dive into theological truths. Mid-week refueling through interactive revelation sessions.
            </p>
          </div>
          <div class="mt-10 flex items-end justify-between border-t border-gray-100 pt-5 relative z-10">
            <span class="font-sans font-bold text-[11px] tracking-widest text-[#1a1d20] uppercase">18:00 PM</span>
            <span class="font-sans font-bold text-[9px] tracking-[0.2em] text-[#d47a22] uppercase">WEDNESDAY</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
