<template>
  <div class="relative">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-ghost placeholder-wisteria/50 focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all duration-300 text-sm"
      :class="{ 'pl-10': icon }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <i v-if="icon" :class="`pi pi-${icon} absolute left-3.5 top-1/2 -translate-y-1/2 text-wisteria/60 text-sm`"></i>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  icon: { type: String, default: '' },
  id: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
})

defineEmits(['update:modelValue'])
</script>
