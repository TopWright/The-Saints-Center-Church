<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="fixed inset-0 z-100 overflow-y-auto">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-[#0b1221]/40 backdrop-blur-sm" @click="$emit('close')"></div>

        <!-- Modal Container -->
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              v-if="show"
              class="relative transform overflow-hidden rounded-[40px] bg-white text-left shadow-2xl transition-all sm:my-8 w-full"
              :class="maxWidthClass"
            >
              <!-- Header -->
              <div v-if="$slots.header || title" class="px-8 py-6 border-b-2 border-[#f0f2f5] flex items-center justify-between bg-[#f8f9fa]/30">
                <slot name="header">
                  <h3 class="font-display text-2xl font-bold text-[#0b1221]">{{ title }}</h3>
                </slot>
                <button @click="$emit('close')" class="w-10 h-10 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center text-[#0b1221] hover:bg-[#f8f9fa] transition-all bg-white shadow-sm">
                  <i class="pi pi-times text-xs"></i>
                </button>
              </div>

              <!-- Body -->
              <div class="px-8 py-8">
                <slot />
              </div>

              <!-- Footer -->
              <div v-if="$slots.footer" class="px-8 py-6 border-t-2 border-[#f0f2f5] bg-[#f8f9fa]/30">
                <slot name="footer" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: '' },
  maxWidth: { type: String, default: 'md' }
})

const emit = defineEmits(['close'])

const maxWidthClass = computed(() => {
  return {
    'sm': 'sm:max-w-sm',
    'md': 'sm:max-w-md',
    'lg': 'sm:max-w-lg',
    'xl': 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl'
  }[props.maxWidth] || 'sm:max-w-md'
})

// Prevent body scroll when modal is open
watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>
