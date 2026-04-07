<template>
  <div class="text-center mb-12" :class="light ? 'text-ghost' : 'text-onyx'">
    <span v-if="subtitle" class="text-bronze text-sm font-semibold tracking-widest uppercase block mb-2">{{ subtitle }}</span>
    <h2 class="font-display text-3xl md:text-4xl font-bold">{{ title }}</h2>
    <div class="w-16 h-1 bg-bronze mx-auto mt-4 rounded-full"></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  light: { type: Boolean, default: false }
})
</script>
