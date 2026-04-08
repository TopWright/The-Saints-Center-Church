<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <button 
      @click="isOpen = !isOpen"
      class="bg-[#0b1221] hover:bg-[#1a253a] text-white px-5 py-2.5 rounded-xl font-sans font-bold text-[13px] flex items-center gap-2 shadow-lg shadow-[#0b1221]/10 transition-all duration-300 active:scale-95 whitespace-nowrap"
    >
      <i class="pi pi-download text-[14px]"></i>
      <span>Export</span>
      <i :class="['pi pi-chevron-down text-[10px] transition-transform duration-300', isOpen ? 'rotate-180' : '']"></i>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0 -translate-y-2"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 -translate-y-2"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-3 w-48 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-[#0b1221]/5 focus:outline-none z-50 overflow-hidden"
      >
        <div class="py-2">
          <button 
            v-for="option in exportOptions" 
            :key="option.format"
            @click="handleExport(option.format)"
            class="flex items-center gap-3 w-full px-5 py-3.5 text-[13px] font-sans font-medium text-[#0b1221] hover:bg-[#f8f9fa] transition-colors text-left"
          >
            <i :class="[option.icon, option.color, 'text-[16px]']"></i>
            {{ option.label }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  reportName: { type: String, default: 'report' },
  data: { type: Array, default: () => [] }
})

const isOpen = ref(false)
const dropdownRef = ref(null)

const exportOptions = [
  { label: 'Export as CSV', format: 'csv', icon: 'pi pi-file-excel', color: 'text-green-600' },
  { label: 'Export as PDF', format: 'pdf', icon: 'pi pi-file-pdf', color: 'text-red-600' },
  { label: 'Export as Excel', format: 'excel', icon: 'pi pi-table', color: 'text-blue-600' }
]

const handleExport = (format) => {
  console.log(`Exporting ${props.reportName} as ${format}...`)
  // Mock export functionality
  alert(`Exporting ${props.reportName} as ${format.toUpperCase()}. This would trigger a real download in a production environment.`)
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>
