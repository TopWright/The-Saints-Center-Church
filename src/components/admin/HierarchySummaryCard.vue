<template>
  <div class="bg-[#0b1221] rounded-[48px] p-10 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.25)] relative overflow-hidden flex flex-col h-full border border-white/10 group">
    <!-- Texture Accent -->
    <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors duration-1000"></div>

    <h3 class="text-3xl font-display font-black text-white italic tracking-tight mb-12">Hierarchy Summary</h3>

    <div class="space-y-10 flex-1">
      <div v-for="stat in stats" :key="stat.label" class="flex items-center justify-between border-b border-white/10 pb-6">
        <p class="text-[14px] font-medium text-[#a0a0a0]">{{ stat.label }}</p>
        <p class="text-4xl font-display font-black text-white tracking-widest">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Decorative Illustration/Icon -->
    <div class="mt-12 rounded-[40px] overflow-hidden aspect-square relative grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=400&auto=format&fit=crop" 
        alt="Data" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-t from-[#0b1221] to-transparent"></div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Active Pastors', value: '04' },
  { label: 'Department Leaders', value: '12' },
  { label: 'Ministry Workers', value: '86' }
]
</script>
