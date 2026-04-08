<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  icon: { type: String, default: '' },
  iconPosition: { type: String, default: 'right' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
  to: { type: [String, Object], default: null },
  href: { type: String, default: null }
})

const componentTag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const variantClasses = computed(() => {
  const v = props.variant
  if (v === 'primary') return 'bg-[#0b1221] text-white border border-[#0b1221]'
  if (v === 'secondary') return 'bg-[#d47a22] text-white border border-[#d47a22]'
  if (v === 'outline') return 'bg-transparent text-[#0b1221] border-2 border-[#0b1221] hover:text-white'
  if (v === 'outline-dark') return 'bg-transparent text-white border-2 border-white hover:text-[#0b1221]'
  if (v === 'gradient') return 'bg-linear-to-r from-[#d47a22] to-[#b35e10] text-white border border-transparent'
  return 'bg-[#0b1221] text-white'
})

const hoverOverlayClasses = computed(() => {
  const v = props.variant
  if (v === 'primary') return 'bg-[#21355e]'
  if (v === 'secondary') return 'bg-[#a35912]'
  if (v === 'outline') return 'bg-[#0b1221]'
  if (v === 'outline-dark') return 'bg-white'
  if (v === 'gradient') return 'bg-linear-to-l from-[#d47a22] to-[#b35e10]'
  return 'bg-black/20'
})

const sizeClasses = computed(() => ({
  sm: 'px-6 py-3 text-[10px]',
  md: 'px-8 py-4 text-[11px]',
  lg: 'px-10 py-5 text-[12px]'
}[props.size]))
</script>

<template>
  <component
    :is="componentTag"
    :type="type"
    :to="to"
    :href="href"
    :disabled="loading || disabled"
    class="relative inline-flex items-center justify-center gap-3 font-sans font-bold tracking-widest uppercase overflow-hidden transition-all duration-500 rounded-full group disabled:opacity-50 disabled:cursor-not-allowed z-10 shadow-xl cursor-pointer hover:shadow-2xl hover:-translate-y-1"
    :class="[sizeClasses, variantClasses]"
  >
    <!-- Background ripple/sweep overlay for that 'creative hover' -->
    <div class="absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] -z-10" :class="hoverOverlayClasses"></div>
    
    <div class="flex items-center gap-2 relative z-10 transform group-hover:scale-105 transition-transform duration-300">
      <i v-if="loading" class="pi pi-spin pi-spinner text-inherit"></i>
      <i v-else-if="icon && iconPosition === 'left'" :class="`pi pi-${icon} text-[14px] group-hover:-rotate-12 transition-transform duration-300`"></i>
      
      <span><slot /></span>
      
      <i v-if="icon && iconPosition === 'right' && !loading" :class="`pi pi-${icon} text-[14px] group-hover:translate-x-1 transition-transform duration-300`"></i>
    </div>
  </component>
</template>
