<template>
  <div class="bg-[#fcfaf9] rounded-[48px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#0b1221]/15 space-y-10">
    <h3 class="text-3xl font-display font-black text-[#0b1221] tracking-tight">Sacred Grounds</h3>

    <div class="space-y-3">
      <p class="text-[10px] font-black uppercase tracking-[0.2em] text-[#a0a0a0]">Primary Location</p>
      <div class="bg-white rounded-[32px] p-8 shadow-sm border border-[#f0f2f5]">
        <p class="text-[16px] font-display font-bold text-[#0b1221] leading-relaxed italic">
          Diamond college hall, Iba Estate, Lagos State
        </p>
      </div>
    </div>

    <!-- Map Visualization -->
    <div class="space-y-6">
      <div class="aspect-4/3 rounded-[40px] overflow-hidden relative group">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&h=450&auto=format&fit=crop" 
          alt="Map" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-2000"
        />
        <div class="absolute inset-0 bg-[#0b1221]/10"></div>
        <!-- Map Pin -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="w-16 h-16 bg-[#d47a22] rounded-full border-8 border-white shadow-2xl flex items-center justify-center animate-bounce">
            <i class="pi pi-map-marker text-white text-2xl"></i>
          </div>
        </div>
      </div>

      <button class="w-full flex items-center justify-center gap-3 text-[#0b1221] font-display font-black text-[13px] uppercase tracking-widest hover:text-[#d47a22] transition-colors">
        <i class="pi pi-map"></i>
        <span>Update GPS Coordinates</span>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>
