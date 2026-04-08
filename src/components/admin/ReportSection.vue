<script setup>
import ExportButton from './ExportButton.vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  viewAllLink: { type: String, default: '' }
})
</script>

<template>
  <div class="bg-white rounded-[40px] shadow-sm border border-[#f0f2f5] overflow-hidden">
    <div class="p-8 lg:p-10 border-b border-[#f0f2f5] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div class="space-y-1">
        <h3 class="font-display text-2xl font-black text-[#0b1221] tracking-tight">{{ title }}</h3>
        <p v-if="subtitle" class="text-[12px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0]">{{ subtitle }}</p>
      </div>
      <div class="flex items-center gap-4">
        <router-link 
          v-if="viewAllLink" 
          :to="viewAllLink" 
          class="text-[13px] font-bold text-[#0b1221] hover:underline"
        >
          View All
        </router-link>
        <ExportButton :report-name="title" />
      </div>
    </div>
    
    <div class="p-0">
      <slot />
    </div>
  </div>
</template>
