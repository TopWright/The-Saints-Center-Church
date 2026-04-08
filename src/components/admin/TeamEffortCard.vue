<template>
  <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#f0f2f5] h-full flex flex-col">
    <div class="flex items-center justify-between mb-8">
      <div class="space-y-1">
        <h3 class="font-display text-2xl font-black text-[#0b1221] tracking-tight">Team Effort</h3>
        <p class="text-[12px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0]">Contribution by role hierarchy</p>
      </div>
      <ExportButton report-name="Team Effort Report" />
    </div>

    <div class="space-y-8 flex-1">
      <div v-for="role in effortData" :key="role.name" class="space-y-3">
        <div class="flex justify-between items-center text-[13px] font-bold">
          <span class="text-[#0b1221]">{{ role.name }}</span>
          <span class="text-[#0b1221]">{{ role.percentage }}%</span>
        </div>
        <div class="h-3 bg-[#f0f2f5] rounded-full overflow-hidden">
          <div 
            class="h-full rounded-full transition-all duration-1000 ease-out"
            :style="{ 
              width: `${role.percentage}%`, 
              backgroundColor: role.color 
            }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Inspirational Quote -->
    <div class="mt-12 pt-8 border-t border-[#f0f2f5]">
      <div class="flex gap-4">
        <div class="text-4xl text-[#f0f2f5] font-serif leading-none">“</div>
        <p class="text-[13px] font-sans font-medium text-[#707070] italic leading-relaxed">
          The harvest is plentiful, but the laborers are few. Thank you for your continued dedication to the kingdom work.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExportButton from './ExportButton.vue'

const effortData = [
  { name: 'Ministry Leaders', percentage: 62, color: '#0b1221' },
  { name: 'Workers', percentage: 38, color: '#d47a22' }
]
</script>
