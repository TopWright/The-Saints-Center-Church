<template>
  <div class="space-y-2">
    <label v-if="label" :for="name" class="block font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#0b1221]/60 ml-6">
      {{ label }}
    </label>
    
    <div class="relative">
      <template v-if="type === 'textarea'">
        <Field
          :name="name"
          v-slot="{ field, errorMessage }"
        >
          <textarea
            v-bind="field"
            :id="name"
            :placeholder="placeholder"
            :rows="rows"
            class="w-full px-8 py-5 bg-white rounded-[30px] border-2 focus:ring-4 font-sans text-[13px] transition-all duration-300 placeholder:text-[#a0a0a0] resize-none shadow-sm hover:shadow-md"
            :class="errorMessage ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/10' : 'border-[#f0f2f5] focus:border-[#0b1221]/20 focus:ring-[#0b1221]/5'"
          ></textarea>
        </Field>
      </template>
      
      <template v-else>
        <Field
          :name="name"
          v-slot="{ field, errorMessage }"
        >
          <div class="relative flex items-center">
            <i v-if="icon" :class="[`pi pi-${icon}`, 'absolute left-6 text-[#a0a0a0] text-sm pointer-events-none']"></i>
            <input
              v-bind="field"
              :id="name"
              :type="type"
              :placeholder="placeholder"
              class="w-full py-4 bg-white rounded-full border-2 focus:ring-4 font-sans text-[13px] transition-all duration-300 placeholder:text-[#a0a0a0] shadow-sm hover:shadow-md"
              :class="[
                icon ? 'pl-12 pr-6' : 'px-6',
                errorMessage ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/10' : 'border-[#f0f2f5] focus:border-[#0b1221]/20 focus:ring-[#0b1221]/5'
              ]"
            />
          </div>
        </Field>
      </template>
    </div>
    
    <ErrorMessage :name="name" class="text-[#ef4444] text-[11px] font-bold ml-6" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  name: { type: String, required: true },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  icon: { type: String, default: '' },
  rows: { type: Number, default: 4 }
})
</script>
