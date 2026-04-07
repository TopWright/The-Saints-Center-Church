<script setup>
import AppButton from '@/components/shared/AppButton.vue'
</script>

<template>
  <section class="py-24 bg-white relative">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <!-- Left Column: Globe Image -->
      <div class="relative w-full aspect-square max-w-[450px] mx-auto lg:mx-0 bg-[#0c1421] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col justify-end items-center pb-12 border border-white/5 group">
         <!-- Huge Globe placeholder -->
         <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <!-- Increased size significantly to ensure huge overflow -->
            <i class="pi pi-globe text-[700px] text-[#42b8a7] opacity-40 mix-blend-screen shadow-glow group-hover:scale-105 group-hover:rotate-12 transition-all duration-1000"></i>
         </div>
         
         <div class="relative z-10 text-center mt-auto bg-[#0c1421]/60 px-8 py-4 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 class="font-sans font-bold text-2xl md:text-3xl tracking-[0.3em] text-[#55dfc8] uppercase mb-2 drop-shadow-md">
               GLOBAL MISSION
            </h3>
            <p class="font-sans font-bold text-[12px] tracking-[0.4em] text-[#f0f0f0] uppercase opacity-90">
               SAFE WORK
            </p>
         </div>
      </div>

      <!-- Right Column: Content -->
      <div class="max-w-md">
        <h5 class="font-sans font-bold text-[11px] tracking-[0.3em] text-[#d47a22] uppercase mb-4">
          GLOBAL TRAINING
        </h5>
        
        <h2 class="font-display text-5xl lg:text-7xl text-[#1a1d20] mb-8 leading-tight">
          Raising<br />Messengers
        </h2>
        
        <p class="font-sans text-[#4a4a4a] text-[16px] leading-relaxed mb-10 font-normal">
          We are building a divine ecosystem to nurture spiritual growth and manifest the presence of God in every sphere of influence. Our reach extends beyond walls, equipping a generation to carry the story of the Kingdom to every corner of the earth.
        </p>

        <div class="flex flex-wrap items-center gap-4">
          <AppButton variant="primary" icon="pi-compass" iconPosition="right">
            Explore Mission
          </AppButton>
          
          <AppButton variant="outline-primary">
            View Curriculum
          </AppButton>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.shadow-glow {
  filter: drop-shadow(0 0 50px rgba(66, 184, 167, 0.6));
}
</style>
