<template>
  <div class="space-y-12 max-w-[1200px] mx-auto pb-20 px-4 sm:px-0">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div class="space-y-4">
        <h1 class="font-display text-5xl md:text-7xl text-[#0b1221] leading-[0.85] tracking-tighter font-bold">
          Discipleship <span class="text-[#d47a22] font-display italic">Directory</span>
        </h1>
        <p class="font-sans text-[15px] text-[#707070] font-medium tracking-tight max-w-[550px] leading-relaxed">
          Managing the growth and connection of our spiritual community. View reports, oversee roles, and nurture every member of the sanctuary.
        </p>
      </div>

      <div class="flex items-center gap-4">
        <div class="flex -space-x-3 overflow-hidden">
          <img v-for="i in 3" :key="i" :src="`/vector-profiles/${i+3}.png`" class="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-[14px] font-bold text-[#0b1221]">+124</span>
          <span class="text-[9px] uppercase font-bold text-[#a0a0a0] tracking-widest leading-none">Active Disciples</span>
        </div>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div class="relative flex-1 max-w-[500px] group">
        <i class="pi pi-search absolute left-6 top-1/2 -translate-y-1/2 text-[#a0a0a0] text-sm group-focus-within:text-[#0b1221] transition-colors"></i>
        <input 
          type="text" 
          placeholder="Search by name, role or ministry..."
          class="w-full pl-14 pr-8 py-4.5 bg-white border-2 border-[#f0f2f5] rounded-full text-[14px] font-medium focus:border-[#0b1221]/20 focus:ring-4 focus:ring-[#0b1221]/5 outline-none transition-all shadow-sm"
        />
      </div>

      <div class="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0">
        <button 
          v-for="role in ['All Roles', 'Worker', 'Member']" 
          :key="role"
          @click="activeRole = role"
          class="px-8 py-3.5 rounded-full text-[13px] font-bold transition-all shrink-0 border-2"
          :class="activeRole === role ? 'bg-[#0b1221] text-white border-[#0b1221] shadow-lg shadow-[#0b1221]/20' : 'bg-white text-[#707070] border-[#f0f2f5] hover:border-[#0b1221]/20 shadow-sm'"
        >
          {{ role }}
        </button>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="disciple in filteredDisciples" 
        :key="disciple.id"
        @click="goToDetails(disciple.id)"
        class="group relative bg-white rounded-[40px] p-8 border-2 border-[#f0f2f5] hover:border-[#d47a22]/30 transition-all shadow-md hover:shadow-xl cursor-pointer overflow-hidden"
      >
        <!-- Card Background Decoration -->
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#f8f9fa] rounded-full group-hover:bg-[#d47a22]/5 transition-colors"></div>
        
        <div class="relative z-10 space-y-8">
          <div class="flex items-start justify-between">
            <div class="w-20 h-20 rounded-[28px] overflow-hidden border-2 border-[#f0f2f5] shadow-sm transform group-hover:scale-105 transition-transform">
              <img :src="disciple.avatar" class="w-full h-full object-cover" />
            </div>
            <span class="px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest" :class="disciple.role === 'Worker' ? 'bg-[#ff9f43]/10 text-[#d47a22]' : 'bg-[#f0f2f5] text-[#707070]'">
              {{ disciple.role }}
            </span>
          </div>

          <div class="space-y-1">
            <h3 class="font-display text-2xl font-bold text-[#0b1221] tracking-tight">{{ disciple.name }}</h3>
            <p class="text-[13px] font-medium text-[#707070]">{{ disciple.ministry }}</p>
          </div>

          <div class="flex items-center gap-12 border-t-2 border-[#f0f2f5] pt-6">
            <div class="space-y-0.5">
              <p class="text-[9px] font-bold  uppercase tracking-widest text-[#a0a0a0]">Reports</p>
              <p class="font-display text-lg font-bold text-[#0b1221]">{{ disciple.reports }}</p>
            </div>
            <div class="space-y-0.5">
              <p class="text-[9px] font-bold uppercase tracking-widest text-[#a0a0a0]">Souls</p>
              <p class="font-display text-lg font-bold text-[#0b1221]">{{ disciple.souls }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- New Entry Card -->
      <div class="group h-full min-h-[300px] border-2 border-dashed border-[#f0f2f5] rounded-[40px] flex flex-col items-center justify-center p-8 hover:border-[#d47a22] hover:bg-[#d47a22]/5 transition-all cursor-pointer">
        <div class="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#d47a22] mb-4 group-hover:scale-110 transition-transform">
          <i class="pi pi-plus text-xl font-bold"></i>
        </div>
        <h4 class="font-display text-xl font-bold text-[#0b1221]">New Entry</h4>
        <p class="text-[12px] text-[#707070] text-center mt-2 max-w-[150px]">Add a new disciple to the directory</p>
      </div>
    </div>

    <!-- Momentum Footer -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
      <!-- Momentum Card -->
      <div class="lg:col-span-8 bg-[#0b1221] rounded-[50px] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[340px]">
        <div class="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-tl-[100px] -mr-16 -mb-16"></div>
        <div class="relative z-10 space-y-6">
          <h2 class="font-display text-4xl md:text-5xl font-bold text-white tracking-tight max-w-[450px]">Ministry Momentum</h2>
          <p class="text-[15px] md:text-[17px] text-white/50 max-w-[500px] leading-relaxed">
            Over the last 30 days, we've seen a <span class="text-[#ff9f43] font-bold">14% increase</span> in member engagement and recorded <span class="text-[#ff9f43] font-bold">56 new spiritual milestones</span>.
          </p>
        </div>
        <div class="relative z-10 mt-8">
          <button class="bg-[#ff9f43] hover:bg-white text-[#0b1221] px-10 py-4 rounded-2xl font-bold text-[14px] transition-all active:scale-95 shadow-xl shadow-[#ff9f43]/20">
            View Full Report
          </button>
        </div>
      </div>

      <!-- Side Cards -->
      <div class="lg:col-span-4 space-y-8">
        <!-- Top Worker Card -->
        <div class="bg-white rounded-[40px] p-8 border-2 border-[#f0f2f5] shadow-md flex flex-col items-center text-center space-y-4">
          <p class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-[0.2em]">Top Worker This Month</p>
          <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-[#ff9f43]">
            <img src="/vector-profiles/4.png" class="w-full h-full object-cover" />
          </div>
          <div>
            <h3 class="font-display text-2xl font-bold text-[#0b1221]">Eleanor Vance</h3>
            <div class="w-12 h-1 bg-[#d47a22] mx-auto mt-2 rounded-full"></div>
          </div>
        </div>

        <!-- Next Induction Card -->
        <div class="bg-[#ff9f43]/10 border-2 border-[#ff9f43]/20 rounded-[40px] p-8 flex flex-col items-center text-center space-y-2">
          <p class="text-[10px] uppercase font-bold text-[#d47a22] tracking-[0.2em]">Next Induction</p>
          <h3 class="font-display text-3xl font-bold text-[#0b1221]">June 24th</h3>
          <p class="text-[12px] font-medium text-[#707070]">Sanctuary Hall • 10:00 AM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeRole = ref('All Roles')

const disciples = [
  { id: 1, name: 'Eleanor Vance', ministry: 'Youth Ministry Lead', role: 'Worker', reports: 24, souls: 12, avatar: '/vector-profiles/4.png' },
  { id: 2, name: 'Julian Thorne', ministry: 'Choir Collective', role: 'Member', reports: 8, souls: 3, avatar: '/vector-profiles/5.png' },
  { id: 3, name: 'Marcus Aurel', ministry: 'Evangelism Outreach', role: 'Worker', reports: 42, souls: 19, avatar: '/vector-profiles/6.png' },
  { id: 4, name: 'Clara Saint', ministry: 'Hospitality Team', role: 'Member', reports: 5, souls: 1, avatar: '/vector-profiles/7.png' },
  { id: 5, name: 'Silas Reed', ministry: 'Admin & Operations', role: 'Worker', reports: 31, souls: 7, avatar: '/vector-profiles/8.png' }
]

const filteredDisciples = computed(() => {
  if (activeRole.value === 'All Roles') return disciples
  return disciples.filter(d => d.role === activeRole.value)
})

const goToDetails = (id) => {
  router.push(`/admin/disciples/${id}`)
}
</script>

<style scoped>
/* Smooth scroll for filters */
.overflow-x-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
