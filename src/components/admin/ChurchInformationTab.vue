<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
    <div class="lg:col-span-8 space-y-12">
      <IdentityVisionSection />
      <GlobalReachGrid />
    </div>
    <div class="lg:col-span-4 space-y-10">
      <SacredGroundsCard />
      
      <!-- Visual Identity placeholder (Image 2) -->
      <div class="bg-[#0b1221] rounded-[48px] p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div class="relative z-10 space-y-4">
          <h3 class="text-3xl font-display font-black text-white italic tracking-tight">Visual Identity</h3>
          <p class="text-white/40 text-[12px] font-medium leading-relaxed">
            Manage your ministry's logos, primary colors, and brand guidelines for all digital assets.
          </p>
          <button class="text-[#d47a22] font-display font-black text-[13px] uppercase tracking-widest hover:gap-5 transition-all flex items-center gap-3">
            <span>Manage Brand</span>
            <i class="pi pi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IdentityVisionSection from './IdentityVisionSection.vue'
import GlobalReachGrid from './GlobalReachGrid.vue'
import SacredGroundsCard from './SacredGroundsCard.vue'
</script>
