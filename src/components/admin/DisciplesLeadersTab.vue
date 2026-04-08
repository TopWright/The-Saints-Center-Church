<template>
  <div class="space-y-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div class="lg:col-span-8">
        <RoleDefinitionsGrid @create="$emit('create-role')" />
      </div>
      <div class="lg:col-span-4">
        <HierarchySummaryCard />
      </div>
    </div>

    <AdditionalPositionsGrid @add="$emit('add-position')" />
    
    <AutomatedReportsSection />

    <!-- Church Stylized Logo Bottom (Image 1) -->
    <div class="flex flex-col items-center justify-center pt-10 pb-20 space-y-6 opacity-20">
      <div class="w-20 h-20 bg-[#0b1221] rounded-2xl flex items-center justify-center p-4">
        <div class="w-full h-full border-4 border-white rounded-lg"></div>
      </div>
      <p class="text-[12px] font-black uppercase tracking-[0.5em] text-[#0b1221]">THE SAINT'S CENTER</p>
    </div>
  </div>
</template>

<script setup>
import RoleDefinitionsGrid from './RoleDefinitionsGrid.vue'
import HierarchySummaryCard from './HierarchySummaryCard.vue'
import AdditionalPositionsGrid from './AdditionalPositionsGrid.vue'
import AutomatedReportsSection from './AutomatedReportsSection.vue'

defineEmits(['create-role', 'add-position'])
</script>
