<template>
  <div class="bg-[#0b1221] rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/5 relative overflow-hidden group">
    <!-- Texture/Accent -->
    <div class="absolute -right-8 -top-8 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
    
    <div class="relative z-10 space-y-6">
      <h3 class="text-2xl font-display font-black text-white italic tracking-tight">Profile Strength</h3>
      
      <div class="space-y-4">
        <!-- Progress Bar -->
        <div class="h-3 bg-white/10 rounded-full overflow-hidden">
          <div 
            class="h-full bg-linear-to-r from-[#d47a22] to-[#ffb36b] rounded-full transition-all duration-1000 ease-out"
            style="width: 85%"
          ></div>
        </div>
        <p class="text-[13px] font-medium text-[#a0a0a0] leading-relaxed">
          Your profile is almost complete. Adding a social link would reach 100%.
        </p>
      </div>

      <button class="flex items-center gap-3 text-[#d47a22] font-display font-black text-[13px] uppercase tracking-widest hover:gap-5 transition-all duration-300">
        <span>Optimize Profile</span>
        <i class="pi pi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>
