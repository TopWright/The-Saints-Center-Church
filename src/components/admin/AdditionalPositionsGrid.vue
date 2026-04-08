<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="pos in positions" :key="pos.title" class="bg-[#f0f2f5]/50 rounded-[48px] p-10 flex flex-col items-center text-center space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group border border-[#0b1221]/15 min-h-[380px]">
      <div class="w-20 h-20 rounded-[28px] bg-white flex items-center justify-center text-3xl shadow-sm transform group-hover:scale-110 transition-transform duration-500">
        <i :class="pos.icon" class="text-[#d47a22]"></i>
      </div>
      <div class="space-y-4 flex-1">
        <h4 class="text-2xl font-display font-black text-[#0b1221]">{{ pos.title }}</h4>
        <p class="text-[14px] font-medium text-[#707070] leading-relaxed">
          {{ pos.description }}
        </p>
      </div>
      <!-- Member Stack -->
      <div class="flex items-center justify-center -space-x-4">
        <div v-for="i in pos.members" :key="i" class="w-10 h-10 rounded-full border-4 border-white overflow-hidden shadow-sm">
          <img :src="`https://i.pravatar.cc/100?u=${pos.title + i}`" alt="Member" class="w-full h-full object-cover">
        </div>
        <div v-if="pos.extra" class="w-10 h-10 rounded-full border-4 border-white bg-[#f0f2f5] flex items-center justify-center text-[10px] font-black text-[#0b1221] shadow-sm">
          +{{ pos.extra }}
        </div>
      </div>
    </div>

    <!-- Add Position -->
    <button 
      @click="$emit('add')"
      class="bg-white rounded-[48px] p-10 flex flex-col items-center justify-center text-center space-y-4 border-4 border-dashed border-[#f0f2f5] hover:border-[#d47a22]/30 hover:bg-[#fff5eb]/30 hover:shadow-[0_20px_50px_rgba(212,122,34,0.05)] transition-all duration-500 min-h-[380px] group"
    >
      <div class="w-14 h-14 rounded-full bg-[#f0f2f5] flex items-center justify-center text-lg text-[#0b1221] group-hover:bg-[#d47a22] group-hover:text-white transition-all shadow-sm">
        <i class="pi pi-plus"></i>
      </div>
      <div class="space-y-1">
        <p class="text-[18px] font-display font-black text-[#0b1221]">Add Position</p>
        <p class="text-[12px] font-medium text-[#a0a0a0]">Define new department roles</p>
      </div>
    </button>
  </div>
</template>

<script setup>
defineEmits(['add'])

const positions = [
  {
    title: 'Choir Leader',
    icon: 'pi pi-music',
    description: 'Directs worship sessions and manages the choir ensemble rehearsals.',
    members: 2,
    extra: 7
  },
  {
    title: 'Evangelism Head',
    icon: 'pi pi-globe',
    description: 'Coordinates community outreach and mission-critical evangelism drives.',
    members: 1,
    extra: 15
  }
]
</script>
