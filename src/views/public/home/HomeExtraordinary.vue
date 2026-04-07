<script setup>
import AppButton from '@/components/shared/AppButton.vue'
</script>

<template>
  <section class="py-16 bg-[#F9F9F9] px-4 md:px-6 relative overflow-hidden flex flex-col justify-center min-h-[80vh]">
    
    <!-- Background Marquee Watermark -->
    <div class="absolute top-[30%] left-0 right-0 overflow-hidden opacity-[0.05] pointer-events-none select-none z-0 rotate-[-4deg] scale-125">
      <div class="animate-marquee">
        <h1 class="font-display text-[18vw] whitespace-nowrap leading-none mx-4 text-[#0b1221] uppercase tracking-tighter">THE EXTRAORDINARY <span class="mx-4 font-sans text-[#d47a22]">♣︎</span></h1>
        <h1 class="font-display text-[18vw] whitespace-nowrap leading-none mx-4 text-[#0b1221] uppercase tracking-tighter">THE EXTRAORDINARY <span class="mx-4 font-sans text-[#d47a22]">♣︎</span></h1>
        <h1 class="font-display text-[18vw] whitespace-nowrap leading-none mx-4 text-[#0b1221] uppercase tracking-tighter">THE EXTRAORDINARY <span class="mx-4 font-sans text-[#d47a22]">♣︎</span></h1>
        <h1 class="font-display text-[18vw] whitespace-nowrap leading-none mx-4 text-[#0b1221] uppercase tracking-tighter">THE EXTRAORDINARY <span class="mx-4 font-sans text-[#d47a22]">♣︎</span></h1>
      </div>
    </div>

    <div class="max-w-5xl mx-auto bg-[#0b1221] rounded-[40px] px-6 lg:px-8 py-20 text-center relative shadow-2xl group overflow-hidden z-10 w-full border border-[#1e2e4f]">
      
      <!-- Subtle moving glowing bg -->
      <div class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[spin_20s_linear_infinite] pointer-events-none"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <!-- Headlines - Reduced size slightly from previous super huge -->
        <h2 class="font-display text-4xl md:text-5xl lg:text-[4rem] text-[#ffffff] mb-2 leading-none tracking-tight">
          Experience the
        </h2>
        <h2 class="font-display italic text-5xl md:text-[5rem] lg:text-[6rem] text-[#d47a22] mb-10 leading-none drop-shadow-md">
          Extraordinary
        </h2>
        
        <!-- Increased description text to main text size normal weight -->
        <p class="font-sans text-[15px] md:text-[16px] text-gray-300 max-w-lg mx-auto leading-relaxed mb-16 font-normal">
          Step out of the ordinary and into a space designed for divine encounter. We can't wait to welcome you home.
        </p>

        <!-- 3 Column Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full mb-16 md:divide-x divide-white/10">
          
          <div class="flex flex-col items-center group/feature cursor-pointer px-4">
            <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover/feature:bg-white/10 transition-all duration-300 transform group-hover/feature:-translate-y-1 shadow-lg shadow-black/20">
               <i class="pi pi-map-marker text-[#d47a22] text-xl drop-shadow-[0_0_12px_rgba(212,122,34,0.8)]"></i>
            </div>
            <p class="font-sans text-[14px] text-gray-300 leading-relaxed max-w-[200px] font-normal">
              Diamond College Hall,<br/>Iba Estate, Lagos State
            </p>
          </div>
          
          <div class="flex flex-col items-center group/feature cursor-pointer px-4">
            <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover/feature:bg-white/10 transition-all duration-300 transform group-hover/feature:-translate-y-1 shadow-lg shadow-black/20">
               <i class="pi pi-id-card text-[#d47a22] text-xl drop-shadow-[0_0_12px_rgba(212,122,34,0.8)]"></i>
            </div>
            <p class="font-sans text-[14px] text-gray-300 leading-relaxed max-w-[200px] font-normal">
              Open Doors & Hearts<br/>Awaiting Your Arrival
            </p>
          </div>
          
          <div class="flex flex-col items-center group/feature cursor-pointer px-4">
            <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover/feature:bg-white/10 transition-all duration-300 transform group-hover/feature:-translate-y-1 shadow-lg shadow-black/20">
               <i class="pi pi-heart-fill text-[#d47a22] text-xl drop-shadow-[0_0_12px_rgba(212,122,34,0.8)]"></i>
            </div>
            <p class="font-sans text-[14px] text-gray-300 leading-relaxed max-w-[200px] font-normal">
              A Warm Community of<br/>Divine Believers
            </p>
          </div>
          
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
          <AppButton variant="gradient" icon="pi-calendar-plus" iconPosition="left" class="w-full sm:w-auto">
            Plan Your Visit
          </AppButton>
          
          <!-- Explicitly using outline-dark variant for correct text inversion -->
          <AppButton variant="outline-dark" icon="pi-map" iconPosition="right" class="w-full sm:w-auto">
            Get Directions
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
