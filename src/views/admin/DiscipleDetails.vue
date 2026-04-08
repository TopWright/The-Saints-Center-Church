<script setup>
const activities = [
  { 
    icon: 'pi pi-megaphone', 
    title: 'Street Outreach - Downtown Core', 
    time: '2 hours ago', 
    description: 'Led a team of 5 disciples for the weekly evening outreach. Focused on the transit hub area. Encouraging conversations with 12 individuals.',
    team: true
  },
  { 
    icon: 'pi pi-book', 
    title: 'Curriculum Review: Phase II', 
    time: 'Yesterday', 
    description: 'Updated the \'Foundation of Faith\' manual with new regional testimonies and historical context for the upcoming autumn cohort.'
  },
  { 
    icon: 'pi pi-heart', 
    title: 'Healing Testimony Logged', 
    time: '3 days ago', 
    description: 'Documented a miraculous recovery from chronic respiratory distress following the Friday Vigil. Medical confirmation pending.'
  }
]

const milestones = [
  { title: 'Disciple Training Level 3', status: 'completed' },
  { title: 'Strategic Ministry Management', status: 'in-progress' },
  { title: 'Regional Overseer Track', status: 'up-next' }
]

const teams = [
  { name: 'Outreach Alpha', members: 12, icon: 'pi pi-users' },
  { name: 'Curriculum Design', members: 4, icon: 'pi pi-pencil' }
]
</script>

<template>
  <div class="space-y-12 max-w-[1200px] mx-auto pb-20 px-4 sm:px-0">
    <!-- Breadcrumb Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div class="space-y-2">
        <router-link to="/admin/disciples" class="flex items-center gap-2 text-[12px] font-bold text-[#a0a0a0] uppercase tracking-widest hover:text-[#0b1221] transition-colors group">
          <i class="pi pi-arrow-left text-[10px] group-hover:-translate-x-1 transition-transform"></i>
          Back to Directory
        </router-link>
        <h1 class="font-display text-5xl md:text-6xl text-[#0b1221] leading-[0.85] tracking-tighter font-bold">
          Disciple <span class="text-[#0b1221]/40">Details</span>
        </h1>
      </div>

      <div class="flex items-center gap-4">
        <button class="px-8 py-3.5 rounded-full bg-[#f0f2f5] text-[#0b1221] font-bold text-[13px] hover:bg-[#e4e6e9] transition-all">
          Edit Profile
        </button>
        <button class="px-8 py-3.5 rounded-full bg-[#0b1221] text-white font-bold text-[13px] hover:bg-black shadow-lg shadow-[#0b1221]/20 transition-all flex items-center gap-3">
          <i class="pi pi-envelope text-xs"></i>
          Send Report
        </button>
      </div>
    </div>

    <!-- Main Profile Card -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div class="lg:col-span-8 bg-white rounded-[50px] p-8 md:p-12 border-2 border-[#f0f2f5] shadow-xl relative overflow-hidden group">
        <!-- Abstract Background -->
        <div class="absolute top-0 right-0 p-12 opacity-[0.03] grayscale pointer-events-none">
          <i class="pi pi-shield text-[300px] rotate-12"></i>
        </div>

        <div class="flex flex-col md:flex-row gap-10 relative z-10">
          <div class="w-full md:w-64 aspect-square rounded-[40px] overflow-hidden border-4 border-white shadow-2xl shrink-0">
            <img src="/vector-profiles/9.png" class="w-full h-full object-cover" />
          </div>
          
          <div class="flex-1 space-y-8 self-center">
            <div class="space-y-2">
              <span class="px-5 py-2 rounded-full bg-[#ff9f43]/10 text-[#d47a22] text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#d47a22] animate-pulse"></span>
                Active Leader
              </span>
              <h2 class="font-display text-5xl font-bold text-[#0b1221] tracking-tight">Sarah Jenkins</h2>
              <p class="font-display text-xl font-bold text-[#d47a22] italic">Evangelism Head</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-[#0b1221]">
                  <i class="pi pi-map-marker text-sm"></i>
                </div>
                <div>
                  <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest">Location</p>
                  <p class="text-[13px] font-bold text-[#0b1221]">Western District Sanctuary</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-[#0b1221]">
                  <i class="pi pi-calendar text-sm"></i>
                </div>
                <div>
                  <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest">Joined</p>
                  <p class="text-[13px] font-bold text-[#0b1221]">June 2021</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-[#0b1221]">
                  <i class="pi pi-envelope text-sm"></i>
                </div>
                <div>
                  <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest">Email</p>
                  <p class="text-[13px] font-bold text-[#0b1221]">s.jenkins@sanctuary.org</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-[#0b1221]">
                  <i class="pi pi-phone text-sm"></i>
                </div>
                <div>
                  <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest">Phone</p>
                  <p class="text-[13px] font-bold text-[#0b1221]">+1 (555) 012-3456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="lg:col-span-4 space-y-6">
        <!-- Impact Metric -->
        <div class="bg-[#0b1221] rounded-[40px] p-8 text-white relative overflow-hidden shadow-xl min-h-[220px] flex flex-col justify-between">
          <div class="flex items-center justify-between relative z-10">
            <i class="pi pi-sparkles text-[#ff9f43] text-xl"></i>
            <span class="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">Impact Metric</span>
          </div>
          <div class="relative z-10 space-y-1">
            <h3 class="font-display text-7xl font-bold leading-none tracking-tight">142</h3>
            <p class="text-[12px] font-bold uppercase tracking-widest opacity-60">Preached Messages</p>
          </div>
          <div class="absolute -right-8 -bottom-8 w-40 h-40 bg-white shadow-2xl opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="bg-white rounded-[32px] p-6 border-2 border-[#f0f2f5] shadow-md space-y-4">
            <div class="w-10 h-10 rounded-xl bg-[#ff9f43]/10 flex items-center justify-center text-[#d47a22]">
              <i class="pi pi-waves text-sm"></i>
            </div>
            <div>
              <h4 class="font-display text-3xl font-bold text-[#0b1221]">28</h4>
              <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">Spirit-filled</p>
            </div>
          </div>
          <div class="bg-white rounded-[32px] p-6 border-2 border-[#f0f2f5] shadow-md space-y-4">
            <div class="w-10 h-10 rounded-xl bg-[#ff9f43]/10 flex items-center justify-center text-[#d47a22]">
              <i class="pi pi-plus-circle text-sm"></i>
            </div>
            <div>
              <h4 class="font-display text-3xl font-bold text-[#0b1221]">12</h4>
              <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">Healings</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity & Growth -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <!-- Recent Activity -->
      <div class="lg:col-span-7 space-y-8">
        <div class="flex items-center justify-between border-b-2 border-[#f0f2f5] pb-6">
          <h2 class="font-display text-3xl font-bold text-[#0b1221]">Recent Activity</h2>
          <button class="text-[11px] font-bold text-[#d47a22] uppercase tracking-widest hover:underline">View All Reports</button>
        </div>

        <div class="space-y-6">
          <div v-for="(activity, i) in activities" :key="i" class="flex gap-6 group">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-[#f8f9fa] border-2 border-[#f0f2f5] flex items-center justify-center text-[#0b1221] group-hover:bg-[#d47a22] group-hover:border-[#d47a22] group-hover:text-white transition-all">
                <i :class="activity.icon" class="text-sm"></i>
              </div>
              <div v-if="i !== activities.length - 1" class="w-0.5 h-full bg-[#f0f2f5] my-2"></div>
            </div>
            
            <div class="flex-1 pb-10">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-bold text-[16px] text-[#0b1221]">{{ activity.title }}</h4>
                <span class="text-[11px] font-medium text-[#a0a0a0] uppercase">{{ activity.time }}</span>
              </div>
              <p class="text-[14px] text-[#707070] leading-relaxed mb-4">
                {{ activity.description }}
              </p>
              <div v-if="activity.team" class="flex items-center gap-3">
                <div class="flex -space-x-2">
                  <img v-for="j in 3" :key="j" :src="`/vector-profiles/${j+1}.png`" class="h-6 w-6 rounded-full ring-2 ring-white" />
                </div>
                <span class="text-[10px] font-bold text-[#d47a22] uppercase tracking-widest">Team Report Attached</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Secondary Column -->
      <div class="lg:col-span-5 space-y-10">
        <!-- Leadership Growth -->
        <div class="bg-[#f8f9fa] rounded-[40px] p-8 border-2 border-[#f0f2f5] space-y-8 shadow-sm">
          <h3 class="font-display text-2xl font-bold text-[#0b1221]">Leadership Growth</h3>
          
          <div class="space-y-8 pb-4">
            <div v-for="(milestone, i) in milestones" :key="i" class="flex gap-4 relative">
              <div class="flex flex-col items-center shrink-0">
                <div class="w-6 h-6 rounded-full flex items-center justify-center" :class="milestone.status === 'completed' ? 'bg-green-500 text-white' : milestone.status === 'in-progress' ? 'bg-[#ff9f43]/20 border-2 border-[#ff9f43] text-[#d47a22]' : 'bg-[#f0f2f5] text-[#a0a0a0] border-2 border-[#e4e6e9]'">
                  <i :class="milestone.status === 'completed' ? 'pi pi-check' : milestone.status === 'in-progress' ? 'pi pi-spinner animate-spin-slow' : 'pi pi-lock'" class="text-[10px]"></i>
                </div>
                <div v-if="i !== milestones.length - 1" class="w-px h-12 bg-[#e4e6e9] my-1"></div>
              </div>
              <div class="flex-1 -mt-1">
                <p class="text-[9px] font-bold uppercase tracking-widest" :class="milestone.status === 'completed' ? 'text-green-600' : milestone.status === 'in-progress' ? 'text-[#d47a22]' : 'text-[#a0a0a0]'">{{ milestone.status.replace('-', ' ') }}</p>
                <h4 class="font-bold text-[14px] text-[#0b1221] mt-0.5">{{ milestone.title }}</h4>
                <div v-if="milestone.status === 'in-progress'" class="w-full h-1 bg-[#e4e6e9] rounded-full mt-3 overflow-hidden">
                  <div class="h-full bg-[#ff9f43] w-[70%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Ministry Vision -->
        <div class="bg-white rounded-[40px] p-10 border-2 border-[#f0f2f5] shadow-xl relative overflow-hidden text-center group">
          <i class="pi pi-quote-right absolute -right-4 -bottom-4 text-9xl text-[#f0f2f5] group-hover:scale-110 transition-transform"></i>
          <h3 class="font-display text-xl font-bold text-[#0b1221] mb-6 border-b-2 border-[#f0f2f5] pb-4 uppercase tracking-widest inline-block mx-auto">Ministry Vision</h3>
          <p class="font-display text-[18px] text-[#0b1221]/70 leading-relaxed relative z-10 italic">
            "To see every heart in the Western District ignited by the fire of the sanctuary, bringing healing to the broken and hope to the forgotten."
          </p>
        </div>

        <!-- Managed Teams -->
        <div class="bg-[#f8f9fa] rounded-[40px] p-8 border-2 border-[#f0f2f5] space-y-6 shadow-sm">
          <h3 class="font-display text-2xl font-bold text-[#0b1221]">Managed Teams</h3>
          <div class="space-y-3">
            <div v-for="team in teams" :key="team.name" class="flex items-center justify-between bg-white p-4 rounded-2xl border border-[#f0f2f5] hover:border-[#d47a22]/20 transition-all cursor-pointer">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-[#f8f9fa] flex items-center justify-center text-[#d47a22]">
                  <i :class="team.icon" class="text-xs"></i>
                </div>
                <span class="font-bold text-[13px] text-[#0b1221]">{{ team.name }}</span>
              </div>
              <span class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">{{ team.members }} Members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
