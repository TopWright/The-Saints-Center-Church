<template>
  <div class="bg-white rounded-xl p-5 border border-gray-50 hover:shadow-md transition-all duration-300">
    <div class="flex items-start justify-between mb-3">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center" :class="colorClasses">
        <i :class="`pi pi-${icon} text-lg`"></i>
      </div>
      <span v-if="trend" class="text-xs font-semibold flex items-center gap-1" :class="trend > 0 ? 'text-green-500' : 'text-red-500'">
        <i class="pi" :class="trend > 0 ? 'pi-arrow-up' : 'pi-arrow-down'"></i>
        {{ Math.abs(trend) }}%
      </span>
    </div>
    <p class="text-wisteria text-xs font-medium uppercase tracking-wider mb-1">{{ label }}</p>
    <p class="text-onyx text-2xl font-bold">{{ value }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  icon: { type: String, required: true },
  color: { type: String, default: 'bronze' },
  trend: { type: Number, default: null }
})

const colorClasses = computed(() => ({
  bronze: 'bg-bronze/10 text-bronze',
  prussian: 'bg-prussian/10 text-prussian',
  wisteria: 'bg-wisteria/10 text-wisteria',
  green: 'bg-green-50 text-green-600'
}[props.color] || 'bg-bronze/10 text-bronze'))
</script>
