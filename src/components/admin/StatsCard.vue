<template>
  <div class="bg-white rounded-[40px] p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-[#f0f2f5]/50">
    <div class="flex items-start justify-between mb-6 lg:mb-8">
      <!-- Icon Container -->
      <div 
        class="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
        :style="{ backgroundColor: bgColor + '15' }"
      >
        <i :class="[`pi pi-${icon}`, 'text-lg lg:text-xl']" :style="{ color: bgColor }"></i>
      </div>

      <!-- Trend -->
      <div 
        v-if="trend"
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold"
        :class="trend > 0 ? 'text-[#10b981] bg-[#10b981]/10' : trend < 0 ? 'text-[#ef4444] bg-[#ef4444]/10' : 'text-[#a0a0a0] bg-[#f0f2f5]'"
      >
        <i v-if="trend !== 0" :class="['pi', trend > 0 ? 'pi-arrow-up-right' : 'pi-arrow-down-right', 'text-[10px]']"></i>
        <span>{{ trend > 0 ? '+' : '' }}{{ trend }}{{ trend === 0 ? 'stable' : '%' }}</span>
      </div>
      <div v-else class="text-[11px] font-bold text-[#a0a0a0] px-3 py-1.5 rounded-full bg-[#f0f2f5]">
        stable
      </div>
    </div>

    <!-- Values -->
    <div class="space-y-1 mt-2">
      <h2 class="text-4xl lg:text-5xl font-sans font-bold text-[#0b1221] tracking-tighter">{{ value }}</h2>
      <p class="text-[12px] lg:text-[13px] font-sans font-medium text-[#707070] leading-tight pr-0 lg:pr-4">{{ label }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  icon: String,
  trend: { type: Number, default: 0 },
  bgColor: { type: String, default: '#d47a22' }
})
</script>
