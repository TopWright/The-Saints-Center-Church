<template>
  <div class="bg-white rounded-[40px] p-6 lg:p-8 shadow-sm border border-[#f0f2f5]/50 flex flex-col">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <h3 class="font-display text-2xl font-bold text-[#0b1221] leading-tight pr-0 sm:pr-4">Field Personnel</h3>
      <span class="px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold uppercase rounded-full tracking-widest">Deployed</span>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 gap-4 lg:gap-8 mb-8">
      <div class="space-y-1">
        <p class="text-[9px] lg:text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">Active Workers</p>
        <p class="text-4xl lg:text-5xl font-sans font-bold text-[#0b1221]">42</p>
      </div>
      <div class="space-y-1 text-right sm:text-left lg:text-right">
        <p class="text-[9px] lg:text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">Coverage</p>
        <p class="text-3xl lg:text-4xl font-sans font-bold text-[#0b1221]">87%</p>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="w-full h-3 bg-[#f0f2f5] rounded-full mb-8 overflow-hidden">
      <div class="h-full bg-[#d47a22] rounded-full transition-all duration-1000" style="width: 87%"></div>
    </div>

    <div class="mt-auto pt-6 border-t border-[#f0f2f5] flex items-center justify-between">
      <div class="flex items-center gap-2">
        <p class="text-[11px] font-medium text-[#707070]">Current Focus: <span class="font-bold text-[#0b1221]">North Sector</span></p>
      </div>
      <div class="w-8 h-8 rounded-full bg-[#d47a22]/10 flex items-center justify-center">
        <i class="pi pi-map-marker text-[#d47a22] text-xs"></i>
      </div>
    </div>
  </div>
</template>
