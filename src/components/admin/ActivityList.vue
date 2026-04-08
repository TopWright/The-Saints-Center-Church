<template>
  <div class="bg-white rounded-[40px] p-6 lg:p-8 shadow-sm border border-[#f0f2f5]/50 flex flex-col h-full">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <h3 class="font-display text-3xl font-bold text-[#0b1221]">Weekly Activity</h3>
      
      <!-- Toggle -->
      <div class="bg-[#f0f2f5] p-1 rounded-full flex self-start sm:self-auto gap-1">
        <button 
          v-for="tab in ['Evangelism', 'Follow-Ups']" 
          :key="tab"
          @click="activeTab = tab"
          class="px-6 py-2 rounded-full text-[11px] font-bold transition-all duration-300"
          :class="activeTab === tab ? 'bg-white text-[#0b1221] shadow-sm' : 'text-[#a0a0a0] hover:text-[#707070]'"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Activity Items -->
    <div class="space-y-4 lg:space-y-6">
      <div v-for="(item, index) in activities" :key="index" class="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-[#f8f9fa] rounded-[30px] group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-[#f0f2f5]">
        <!-- Avatar -->
        <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm transition-transform duration-500 group-hover:scale-110">
          <img :src="item.image" :alt="item.name" class="w-full h-full object-cover bg-[#f0f2f5]" />
        </div>

        <!-- Content -->
        <div class="flex-1 space-y-1.5 sm:space-y-1">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h4 class="font-sans font-bold text-[#0b1221] text-[15px] sm:text-[15px]">{{ item.name }}</h4>
            <span class="text-[10px] sm:text-[11px] font-bold text-[#a0a0a0] uppercase tracking-widest">{{ item.time }}</span>
          </div>
          <p class="text-[11px] font-bold text-[#d47a22] uppercase tracking-[0.2em]">{{ item.role }}</p>
          <p class="text-[13px] text-[#707070] leading-relaxed line-clamp-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('Evangelism')

const activities = [
  {
    name: 'Sister Sarah Chen',
    role: 'Missionary',
    time: '2 hours ago',
    description: 'Conducted outreach at the central park. 12 people reached, 4 souls saved.',
    image: '/vector-profiles/2.png'
  },
  {
    name: 'Brother James Wilson',
    role: 'Evangelist',
    time: '5 hours ago',
    description: 'Street preaching at East Wing. Distributed 50 tracts and prayed for the sick.',
    image: '/vector-profiles/3.png'
  },
  {
    name: 'Elder Deborah Vance',
    role: 'Elder',
    time: 'Yesterday',
    description: 'Conducted follow-up with the new converts class. 15 attendees recorded.',
    image: '/vector-profiles/4.png'
  }
]
</script>
