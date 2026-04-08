<template>
  <div class="space-y-10 relative pb-20">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="space-y-3 relative">
       <h2 class="absolute -top-10 left-0 text-[100px] font-display font-black text-[#0b1221]/5 leading-none select-none tracking-tighter">Dashboard</h2>
          <h1 class="text-[52px] font-display font-black text-[#0b1221] leading-[0.9] tracking-tighter relative z-10">
            Ministry Reporting
          </h1>
        <p class="text-[14px] font-sans font-medium text-[#707070] tracking-tight relative z-10">
          Tracking spiritual fruitfulness and kingdom expansion.
        </p>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 md:mt-0 w-full md:w-auto">
        <!-- Date Selector -->
        <div class="bg-white px-6 py-3.5 rounded-full shadow-sm border border-[#f0f2f5] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f8f9fa] transition-colors group">
          <span class="text-[13px] font-sans font-bold text-[#0b1221]">Week: Mon 14 – Sun 20</span>
          <i class="pi pi-chevron-down text-[10px] text-[#a0a0a0] group-hover:text-[#0b1221] transition-colors"></i>
        </div>

        <!-- Export -->
        <button class="bg-[#0b1221] hover:bg-black text-white justify-center px-8 py-3.5 rounded-full font-sans font-bold text-[13px] shadow-lg shadow-[#0b1221]/20 transition-all active:scale-95 flex items-center gap-3">
          <i class="pi pi-download text-xs"></i>
          Export
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard 
        label="Total Preached This Week" 
        value="124" 
        icon="megaphone" 
        bgColor="#d47a22" 
        :trend="12" 
      />
      <StatsCard 
        label="Filled with Holy Spirit" 
        value="58" 
        icon="sparkles" 
        bgColor="#f59e0b" 
        :trend="8" 
      />
      <StatsCard 
        label="Total Healings" 
        value="32" 
        icon="user" 
        bgColor="#ec4899" 
        :trend="5" 
      />
      <StatsCard 
        label="Follow-Up Sessions" 
        value="216" 
        icon="phone" 
        bgColor="#78350f" 
        :trend="0" 
      />
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Activity Feed (Left) -->
      <div class="lg:col-span-8">
        <ActivityList />
      </div>

      <!-- Metrics Panel (Right) -->
      <div class="lg:col-span-4 space-y-8">
        <ActiveLeaders />
        <FieldPersonnel />
      </div>
    </div>

    <!-- Watermark -->
    <div class="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.03]">
      <h2 class="font-display text-8xl font-bold whitespace-nowrap text-[#0b1221]">The Saint's Center</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import StatsCard from '@/components/admin/StatsCard.vue'
import ActivityList from '@/components/admin/ActivityList.vue'
import ActiveLeaders from '@/components/admin/ActiveLeaders.vue'
import FieldPersonnel from '@/components/admin/FieldPersonnel.vue'

onMounted(() => {
  // Reveal animations could be added here
})
</script>
