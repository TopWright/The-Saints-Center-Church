<template>
  <div class="bg-[#fcfaf9] rounded-[48px] p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#0b1221]/15 space-y-12">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-1">
        <h3 class="text-3xl font-display font-black text-[#0b1221] tracking-tight">Ministry Role Definitions</h3>
      </div>
      <button 
        @click="$emit('create')"
        class="bg-[#0b1221] text-white px-8 py-4 rounded-2xl font-sans font-black text-[14px] flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95"
      >
        <i class="pi pi-plus"></i>
        <span>Create New Role</span>
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div v-for="role in roles" :key="role.title" class="bg-white rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-[#f0f2f5] space-y-6 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-[#f0f2f5] flex items-center justify-center text-[#0b1221] text-xl group-hover:bg-[#0b1221] group-hover:text-white transition-all duration-500">
            <i :class="role.icon"></i>
          </div>
          <h4 class="text-2xl font-display font-black text-[#0b1221]">{{ role.title }}</h4>
        </div>
        <p class="text-[14px] font-medium text-[#707070] leading-relaxed">
          {{ role.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in role.tags" :key="tag" class="px-3 py-1 bg-[#f0f2f5] rounded-full text-[9px] font-black uppercase tracking-widest text-[#707070]">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['create'])

const roles = [
  {
    title: 'Pastor',
    icon: 'pi pi-user',
    description: 'Primary spiritual oversight and administrative authority over the sanctuary.',
    tags: ['Full Access', 'Budgeting']
  },
  {
    title: 'Leader',
    icon: 'pi pi-star-fill',
    description: 'Supervises specific ministry departments and heads of positions.',
    tags: ['Team Mgmt', 'Analytics']
  }
]
</script>
