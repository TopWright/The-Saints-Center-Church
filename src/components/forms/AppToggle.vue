<template>
  <div class="flex items-center justify-between py-2">
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 rounded-full bg-[#f0f2f5] flex items-center justify-center shrink-0">
        <i :class="[`pi pi-${icon}`, 'text-[#d47a22] text-sm']"></i>
      </div>
      <label :for="name" class="font-sans font-bold text-[13px] text-[#0b1221] cursor-pointer">
        {{ label }}
      </label>
    </div>
    
    <Field :name="name" v-slot="{ field, handleChange }">
      <button
        type="button"
        :id="name"
        class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#d47a22] focus:ring-offset-2"
        :class="field.value ? 'bg-[#d47a22]' : 'bg-[#e5e7eb]'"
        @click="handleChange(!field.value)"
      >
        <span class="sr-only">{{ label }}</span>
        <span
          class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          :class="field.value ? 'translate-x-5' : 'translate-x-0'"
        ></span>
      </button>
    </Field>
  </div>
</template>

<script setup>
import { Field } from 'vee-validate'

defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>
