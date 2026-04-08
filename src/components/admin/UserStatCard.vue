<script setup>
defineProps({
  label: String,
  value: [String, Number],
  trend: String,
  trendLabel: String,
  subtitle: String,
  dark: { type: Boolean, default: false }
})
</script>

<template>
  <div 
    class="rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden h-full border border-[#f0f2f5]"
    :class="dark ? 'bg-[#0b1221] text-white border-white/5!' : 'bg-[#fff5eb] text-[#0b1221]'"
  >
    <!-- Background Accents -->
    <div 
      v-if="dark"
      class="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mb-16"
    ></div>
    
    <div class="relative z-10 flex flex-col h-full justify-between">
      <div class="space-y-1">
        <p class="text-[12px] font-bold uppercase tracking-[0.2em]" :class="dark ? 'text-[#a0a0a0]' : 'text-[#d47a22]'">
          {{ label }}
        </p>
        <h2 class="text-6xl font-display font-black tracking-tighter">
          {{ value }}
        </h2>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <div v-if="trend" class="flex items-center gap-2">
          <span 
            class="px-3 py-1.5 rounded-full text-[11px] font-black"
            :class="dark ? 'bg-[#d47a22] text-white' : 'bg-white text-[#d47a22]'"
          >
            {{ trend }}
          </span>
          <span class="text-[12px] font-medium" :class="dark ? 'text-[#a0a0a0]' : 'text-[#707070]'">
            {{ trendLabel }}
          </span>
        </div>
        <p v-if="subtitle" class="text-[12px] font-medium" :class="dark ? 'text-[#a0a0a0]' : 'text-[#707070]'">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>
