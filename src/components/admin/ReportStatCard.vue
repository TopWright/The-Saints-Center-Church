<template>
  <div 
    class="relative overflow-hidden rounded-[30px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group border border-[#f0f2f5]"
    :style="{ backgroundColor: 'white' }"
  >
    <!-- Background Accent Pattern (Subtle) -->
    <div 
      class="absolute -right-8 -top-8 w-48 h-48 rounded-full opacity-[0.03] transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12"
      :style="{ backgroundColor: accentColor }"
    ></div>

    <div class="flex items-start justify-between relative z-10">
      <!-- Icon Wrapper -->
      <div 
        class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-black/5"
        :style="{ backgroundColor: accentColor }"
      >
        <i :class="[`pi pi-${icon}`, 'text-2xl text-white']"></i>
      </div>

      <!-- Trend Badge -->
      <div 
        v-if="trend"
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300"
        :class="[
          trend > 0 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50',
          'group-hover:px-4'
        ]"
      >
        <i :class="['pi', trend > 0 ? 'pi-arrow-up-right' : 'pi-arrow-down-right', 'text-[10px]']"></i>
        <span>{{ trend > 0 ? '+' : '' }}{{ Math.abs(trend) }}%</span>
      </div>
    </div>

    <!-- Values Section -->
    <div class="mt-8 space-y-1 relative z-10">
      <p class="text-[12px] font-sans font-bold text-[#a0a0a0] uppercase tracking-widest group-hover:text-[#0b1221] transition-colors duration-300">
        {{ label }}
      </p>
      <div class="flex items-baseline gap-2">
        <h2 class="text-5xl font-display font-black text-[#0b1221] tracking-tighter">
          {{ value }}
        </h2>
        <span v-if="suffix" class="text-xl font-bold text-[#a0a0a0]">{{ suffix }}</span>
      </div>
    </div>
    
    <!-- Decorative bottom line -->
    <div 
      class="absolute bottom-0 left-0 h-1 transition-all duration-500 ease-out"
      :style="{ backgroundColor: accentColor, width: isHovered ? '100%' : '0%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  icon: { type: String, required: true },
  trend: { type: Number, default: 0 },
  suffix: { type: String, default: '' },
  accentColor: { type: String, default: '#0b1221' }
})

const isHovered = ref(false)
</script>

<style scoped>
.group:hover .accent-accent {
  width: 100%;
}
</style>
