<template>
  <button
    :type="type"
    :disabled="loading || disabled"
    class="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[sizeClasses, variantClasses]"
  >
    <i v-if="loading" class="pi pi-spin pi-spinner"></i>
    <i v-else-if="icon" :class="`pi pi-${icon}`"></i>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  icon: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' }
})

const variantClasses = computed(() => ({
  primary: 'bg-bronze hover:bg-bronze-light text-ghost shadow-sm hover:shadow-lg hover:shadow-bronze/20',
  secondary: 'bg-prussian hover:bg-prussian-light text-ghost',
  outline: 'border-2 border-bronze text-bronze hover:bg-bronze hover:text-ghost',
  ghost: 'text-prussian hover:bg-prussian/5'
}[props.variant]))

const sizeClasses = computed(() => ({
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base'
}[props.size]))
</script>
