<template>
  <div class="space-y-12 pb-20">
    <!-- Header Section -->
    <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4">
      <div class="space-y-4">
        <div class="relative">
          <h2 class="absolute -top-10 left-0 text-[100px] font-display font-black text-[#0b1221]/5 leading-none select-none tracking-tighter">Directory</h2>
          <h1 class="text-[52px] font-display font-black text-[#0b1221] leading-[0.9] tracking-tighter relative z-10">
            User Directory
          </h1>
        </div>
       <p class="text-[14px] font-sans font-medium text-[#707070] tracking-tight relative z-10">
          TThe heartbeat of our spiritual community
        </p>
      </div>

      <div class="flex items-center gap-4">
        <button class="bg-[#f0f2f5] hover:bg-[#e4e6e9] text-[#0b1221] px-6 py-3 rounded-xl font-sans font-bold text-[13px] flex items-center gap-2 transition-all">
          <i class="pi pi-filter"></i>
          <span>Filters</span>
        </button>
        <button 
          @click="generateInviteLink"
          class="bg-[#d47a22] hover:bg-[#c36a1b] text-white px-8 py-4 rounded-2xl font-sans font-black text-[14px] flex items-center gap-3 shadow-lg shadow-[#d47a22]/20 transition-all active:scale-95"
        >
          <i class="pi pi-user-plus"></i>
          <span>Add New User</span>
        </button>
      </div>
    </div>

    <!-- Filters & Search Toolbar -->
    <div class="flex flex-col xl:flex-row items-center justify-between gap-6 bg-white p-4 lg:p-6 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#f0f2f5]">
      <!-- Role Tabs -->
      <div class="flex p-1.5 bg-[#f0f2f5] rounded-2xl w-full xl:w-auto overflow-x-auto no-scrollbar">
        <button 
          v-for="role in roles" 
          :key="role"
          @click="activeRole = role"
          class="px-6 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all whitespace-nowrap"
          :class="activeRole === role ? 'bg-white text-[#0b1221] shadow-sm' : 'text-[#a0a0a0] hover:text-[#0b1221]'"
        >
          {{ role }}
        </button>
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
        <!-- Campus Selector -->
        <div class="relative w-full sm:w-48">
          <div class="bg-[#f0f2f5] rounded-2xl px-5 py-3 flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-2">
              <i class="pi pi-building text-[14px] text-[#0b1221]"></i>
              <span class="text-[13px] font-bold text-[#0b1221]">Main Campus</span>
            </div>
            <i class="pi pi-chevron-down text-[10px] text-[#a0a0a0]"></i>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full sm:w-80">
          <i class="pi pi-search absolute left-5 top-1/2 -translate-y-1/2 text-[#a0a0a0]"></i>
          <input 
            type="text" 
            placeholder="Search by name, position or email..." 
            class="w-full bg-[#f0f2f5] border-none rounded-2xl py-3 pl-12 pr-6 text-[13px] font-medium text-[#0b1221] focus:ring-2 focus:ring-[#0b1221]/10 transition-all placeholder:text-[#a0a0a0]"
          />
        </div>
      </div>
    </div>

    <!-- Users Table Section -->
    <div class="bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-[#f0f2f5] overflow-hidden">
      <DataTable :columns="columns" :rows="rows">
        <!-- User Cell -->
        <template #cell-user="{ row }">
          <router-link :to="{ name: 'MemberProfile', params: { id: row.id } }" class="flex items-center gap-4 group cursor-pointer">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-[#f0f2f5] shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img :src="row.avatar" :alt="row.name" class="w-full h-full object-cover" />
            </div>
            <div class="min-w-0">
              <p class="text-[14px] font-black text-[#0b1221] leading-tight group-hover:text-[#d47a22] transition-colors">{{ row.name }}</p>
              <p class="text-[11px] font-medium text-[#a0a0a0] truncate">{{ row.email }}</p>
            </div>
          </router-link>
        </template>

        <!-- Role Cell -->
        <template #cell-role="{ value }">
          <span 
            class="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border"
            :class="{
              'bg-[#0b1221] text-white border-transparent': value === 'PASTOR',
              'bg-[#fff5eb] text-[#d47a22] border-[#d47a22]/30': value === 'LEADER',
              'bg-[#f0f2f5] text-[#707070] border-transparent': value !== 'PASTOR' && value !== 'LEADER'
            }"
          >
            {{ value }}
          </span>
        </template>

        <!-- Leader Cell -->
        <template #cell-assignedLeader="{ row }">
          <div v-if="row.assignedLeader" class="flex items-center gap-2 group cursor-pointer">
            <div v-if="row.assignedLeader.avatar" class="w-6 h-6 rounded-full overflow-hidden border border-[#f0f2f5]">
              <img :src="row.assignedLeader.avatar" alt="" class="w-full h-full object-cover" />
            </div>
            <div v-else class="w-6 h-6 rounded-full bg-[#f0f2f5] flex items-center justify-center text-[8px] font-black text-[#0b1221]">
              {{ row.assignedLeader.initials }}
            </div>
            <span class="text-[12px] font-bold text-[#707070] group-hover:text-[#0b1221] transition-colors italic">
              {{ row.assignedLeader.name }}
            </span>
          </div>
          <span v-else class="text-[12px] font-medium text-[#a0a0a0] italic">Oversight Council</span>
        </template>

        <!-- Actions Cell -->
        <template #cell-actions>
          <button class="w-8 h-8 rounded-lg hover:bg-[#f0f2f5] text-[#a0a0a0] hover:text-[#0b1221] transition-all">
            <i class="pi pi-ellipsis-v"></i>
          </button>
        </template>

        <!-- Footer / Pagination -->
        <template #footer>
          <div class="p-8 lg:p-10 bg-[#fbfbfc] border-t border-[#f0f2f5] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p class="text-[12px] font-bold text-[#a0a0a0]">
              Showing <span class="text-[#0b1221]">1 to 4</span> of 248 sanctuary members
            </p>
            <div class="flex items-center gap-2">
              <button class="w-10 h-10 rounded-full border border-[#f0f2f5] flex items-center justify-center text-[#a0a0a0] hover:bg-white transition-all disabled:opacity-30">
                <i class="pi pi-chevron-left text-[10px]"></i>
              </button>
              <button class="w-10 h-10 rounded-full bg-[#0b1221] text-white flex items-center justify-center text-[12px] font-black shadow-lg shadow-[#0b1221]/20">1</button>
              <button class="w-10 h-10 rounded-full hover:bg-[#f0f2f5] text-[#0b1221] flex items-center justify-center text-[12px] font-bold transition-all">2</button>
              <button class="w-10 h-10 rounded-full hover:bg-[#f0f2f5] text-[#0b1221] flex items-center justify-center text-[12px] font-bold transition-all">3</button>
              <button class="w-10 h-10 rounded-full border border-[#f0f2f5] flex items-center justify-center text-[#0b1221] hover:bg-white transition-all">
                <i class="pi pi-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </template>
      </DataTable>
    </div>

    <!-- Bottom Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <UserStatCard 
        dark
        label="Total Community"
        value="1,248"
        trend="+12%"
        trend-label="Growth this month"
      />
      <UserStatCard 
        label="Active Leaders"
        value="42"
        subtitle="Overseeing 8 ministries"
      />
      <UserStatCard 
        label="New Registrations"
        value="18"
        subtitle="Pending approval"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from '@/components/admin/DataTable.vue'
import UserStatCard from '@/components/admin/UserStatCard.vue'

const activeRole = ref('All Roles')
const roles = ['All Roles', 'Pastors', 'Leaders', 'Members']

const columns = [
  { key: 'user', label: 'User' },
  { key: 'role', label: 'Role' },
  { key: 'position', label: 'Position' },
  { key: 'assignedLeader', label: 'Assigned Leader' },
  { key: 'actions', label: 'Actions', class: 'text-right' }
]

const rows = ref([
  { 
    id: 1,
    name: 'Elijah Vance', 
    email: 'elijah.v@luminous.org', 
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop',
    role: 'PASTOR', 
    position: 'Senior Teaching Pastor',
    assignedLeader: { initials: 'OC', name: 'Oversight Council' }
  },
  { 
    id: 2,
    name: 'Sarah Jenkins', 
    email: 's.jenkins@sanctuary.com', 
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop',
    role: 'LEADER', 
    position: 'Choir Leader',
    assignedLeader: { name: 'Elijah Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop' }
  },
  { 
    id: 3,
    name: 'Marcus Thorne', 
    email: 'm.thorne@luminous.org', 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&h=128&auto=format&fit=crop',
    role: 'WORKER', 
    position: 'AV Technical Crew',
    assignedLeader: { initials: 'DR', name: 'Daniel Ross' }
  },
  { 
    id: 4,
    name: 'Elena Rodriguez', 
    email: 'elena.rod@gmail.com', 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=128&h=128&auto=format&fit=crop',
    role: 'MEMBER', 
    position: 'None',
    assignedLeader: { name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop' }
  }
])

const generateInviteLink = () => {
  const mockLink = 'https://the-saints-center.org/invite/xY92jL'
  // Mock logic for link generation
  alert(`Invite link generated successfully:\n\n${mockLink}\n\nCopy and send this to the new member.`)
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
