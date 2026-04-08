<template>
  <div class="space-y-2">
    <label v-if="label" :for="name" class="block font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#0b1221]/60 ml-6">
      {{ label }}
    </label>
    
    <div class="relative">
      <Field
        :name="name"
        v-slot="{ field, errorMessage }"
      >
        <div class="relative flex items-center">
          <i v-if="icon" :class="[`pi pi-${icon}`, 'absolute left-6 text-[#a0a0a0] text-sm pointer-events-none']"></i>
          <select
            v-bind="field"
            :id="name"
            class="w-full py-4 bg-white rounded-full border-2 focus:ring-4 font-sans text-[13px] transition-all duration-300 appearance-none text-[#0b1221] shadow-sm hover:shadow-md"
            :class="[
              icon ? 'pl-12 pr-12' : 'pl-6 pr-12',
              errorMessage ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/10' : 'border-[#f0f2f5] focus:border-[#0b1221]/20 focus:ring-[#0b1221]/5',
              !field.value ? 'text-[#a0a0a0]' : ''
            ]"
          >
            <option value="" disabled selected v-if="placeholder">{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value" class="text-[#0b1221]">
              {{ option.label }}
            </option>
          </select>
          <i class="pi pi-chevron-down absolute right-6 text-[#a0a0a0] text-[10px] pointer-events-none"></i>
        </div>
      </Field>
    </div>
    
    <ErrorMessage :name="name" class="text-[#ef4444] text-[11px] font-bold ml-6" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  name: { type: String, required: true },
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Select an option' },
  icon: { type: String, default: '' },
  options: { type: Array, required: true, default: () => [] }
})
</script>
