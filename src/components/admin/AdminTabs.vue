<template>
  <div class="flex items-center gap-1 p-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="$emit('update:modelValue', tab.value)"
      class="px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 whitespace-nowrap"
      :class="modelValue === tab.value 
        ? 'bg-[#0b1221] text-white shadow-lg' 
        : 'text-[#0b1221] hover:bg-white/40'
      "
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, required: true },
  tabs: { type: Array, required: true }
})

defineEmits(['update:modelValue'])
</script>
