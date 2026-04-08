<script setup>
import { ref } from 'vue'

const profile = ref({
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop',
  role: 'Minister',
  position: 'Youth Outreach Specialist',
  leader: 'Pastor Sarah Jenkins'
})

const metrics = ref([
  { label: 'People Reached', value: '124', icon: 'users' },
  { label: 'Spirit-Filled', value: '45', icon: 'sparkles' },
  { label: 'Healings', value: '12', icon: 'heart-fill' }
])

const history = ref([
  {
    id: 1,
    type: 'EVANGELISM',
    date: 'Oct 24, 2023',
    title: 'Downtown Park Outreach',
    description: 'Shared the gospel with a group of students. 3 people gave their lives to Christ and requested follow-up next week.'
  },
  {
    id: 2,
    type: 'FOLLOW-UP',
    date: 'Oct 21, 2023',
    title: 'Home Visit: The Miller Family',
    description: 'Deeply encouraging time of prayer. Discussed the foundations of faith and invited them to Sunday service.'
  },
  {
    id: 3,
    type: 'EVANGELISM',
    date: 'Oct 18, 2023',
    title: 'Neighborhood Door-to-Door',
    description: 'Met Mark who had many questions about healing. Prayed for his recovery and left a testimony booklet.'
  }
])
</script>

<template>
  <div class="space-y-10 pb-20">
    <!-- Header Navigation -->
    <div class="flex items-center justify-between">
      <button 
        @click="$router.back()"
        class="flex items-center gap-3 text-[#0b1221] hover:opacity-70 transition-opacity font-display text-xl font-black"
      >
        <i class="pi pi-arrow-left"></i>
        <span>Member Profile</span>
      </button>
      <button class="w-10 h-10 rounded-full bg-[#f0f2f5] flex items-center justify-center text-[#0b1221]">
        <i class="pi pi-ellipsis-v"></i>
      </button>
    </div>

    <!-- Profile Overview -->
    <div class="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 pt-6">
      <div class="flex flex-col lg:flex-row items-center lg:items-center gap-8">
        <!-- Avatar -->
        <div class="relative group">
          <div class="w-40 h-40 rounded-[48px] overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img :src="profile.avatar" :alt="profile.name" class="w-full h-full object-cover" />
          </div>
          <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-[#d47a22] rounded-full flex items-center justify-center text-white border-4 border-white z-20 shadow-lg">
            <i class="pi pi-bookmark-fill text-xs"></i>
          </div>
          <div class="absolute inset-0 bg-[#0b1221]/20 rounded-[48px] z-15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
            <i class="pi pi-camera text-white text-2xl"></i>
          </div>
        </div>

        <div class="text-center lg:text-left space-y-4">
          <div class="space-y-0.5">
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <h1 class="text-[52px] font-display font-black text-[#0b1221] leading-none tracking-tighter">
                {{ profile.name }}
              </h1>
              <span class="px-4 py-1.5 rounded-full bg-[#f0f2f5] text-[11px] font-black text-[#0b1221] uppercase tracking-widest mt-2">
                {{ profile.role }}
              </span>
            </div>
            <p class="text-xl font-display font-bold text-[#707070] italic">{{ profile.position }}</p>
          </div>

          <div class="flex items-center justify-center lg:justify-start gap-3 text-[13px] font-bold text-[#0b1221]">
            <i class="pi pi-user text-[#d47a22]"></i>
            <span>Leader:</span>
            <span class="text-[#d47a22] hover:underline cursor-pointer">{{ profile.leader }}</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <button class="bg-[#f0f2f5] hover:bg-[#e4e6e9] text-[#0b1221] font-display font-black px-10 py-5 rounded-[24px] text-[15px] transition-all flex items-center gap-3">
          <i class="pi pi-pencil"></i>
          Edit User
        </button>
        <button class="bg-[#0b1221] hover:bg-[#1a253a] text-white font-display font-black px-10 py-5 rounded-[32px] text-[15px] shadow-xl shadow-[#0b1221]/20 transition-all flex items-center gap-3">
          <i class="pi pi-envelope"></i>
          Message Member
        </button>
      </div>
    </div>

    <!-- Dashboard Content -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Spiritual Activity -->
      <div class="lg:col-span-4 bg-[#f8f9fa] rounded-[48px] p-8 lg:p-10 border border-[#f0f2f5] space-y-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
        <h3 class="font-display text-2xl font-black text-[#0b1221] tracking-tight">Spiritual Activity</h3>
        
        <div class="space-y-6">
          <div v-for="metric in metrics" :key="metric.label" class="bg-white rounded-[32px] p-8 shadow-sm border border-[#f0f2f5] flex items-center justify-between">
            <div class="space-y-1">
              <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">{{ metric.label }}</p>
              <h4 class="text-4xl font-display font-black text-[#0b1221]">{{ metric.value }}</h4>
            </div>
            <div class="w-14 h-14 rounded-2xl bg-[#f0f2f5] flex items-center justify-center text-[#0b1221]">
              <i :class="[`pi pi-${metric.icon}`, 'text-xl']"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Ministry History -->
      <div class="lg:col-span-8 bg-[#f8f9fa] rounded-[48px] p-8 lg:p-10 border border-[#f0f2f5] flex flex-col min-h-full shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
        <div class="flex items-center justify-between mb-10">
          <h3 class="font-display text-2xl font-black text-[#0b1221] tracking-tight">Ministry History</h3>
          <button class="text-[12px] font-black text-[#0b1221] uppercase tracking-widest hover:underline">View All</button>
        </div>

        <div class="space-y-6">
          <div v-for="event in history" :key="event.id" class="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-[#f0f2f5] space-y-6 group hover:shadow-lg transition-all">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <span 
                  class="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest"
                  :class="event.type === 'EVANGELISM' ? 'bg-[#f0f2f2] text-[#0b1221]' : 'bg-[#fff5eb] text-[#d47a22]'"
                >
                  {{ event.type }}
                </span>
                <span class="text-[12px] font-bold text-[#a0a0a0]">{{ event.date }}</span>
              </div>
              <button class="text-[#a0a0a0] hover:text-[#0b1221]">
                <i class="pi pi-external-link"></i>
              </button>
            </div>
            
            <div class="space-y-3">
              <h4 class="text-2xl font-display font-black text-[#0b1221] tracking-tight group-hover:text-[#d47a22] transition-colors">
                {{ event.title }}
              </h4>
              <p class="text-[14px] font-medium text-[#707070] leading-relaxed pr-10">
                {{ event.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Quote/Branding -->
    <div class="flex flex-col items-center justify-center pt-20 pb-10 space-y-6 opacity-30">
      <div class="w-12 h-1 bg-[#0b1221]/20 rounded-full"></div>
      <p class="text-[10px] uppercase font-bold tracking-[0.4em] text-[#0b1221]">The Digital Sanctuary © 2024</p>
    </div>
  </div>
</template>
