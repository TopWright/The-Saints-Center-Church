<template>
  <aside 
    class="fixed top-0 left-0 h-screen bg-[#0b1221] text-white z-40 transition-all duration-300 flex flex-col border-r border-white/5"
    :class="collapsed ? 'w-20' : 'w-64'"
  >
    <!-- Brand -->
    <div class="h-20 flex items-center px-6 mb-4">
      <router-link to="/admin" class="flex items-center gap-3">
        <h1 v-if="!collapsed" class="font-display text-2xl font-bold tracking-tight text-white">Admin Panel</h1>
        <div v-else class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
          <i class="pi pi-shield text-xl"></i>
        </div>
      </router-link>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-3 space-y-1">
      <router-link
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[13px] font-sans font-medium transition-all duration-300 group"
        :class="collapsed ? 'justify-center' : ''"
        :active-class="item.to === '/admin' ? '' : 'bg-gradient-to-r from-bronze to-bronze-dark shadow-lg shadow-bronze/20 !text-white transform scale-[1.02]'"
        :exact-active-class="'bg-gradient-to-r from-bronze to-bronze-dark shadow-lg shadow-bronze/20 !text-white transform scale-[1.02]'"
      >
        <i :class="[`pi pi-${item.icon}`, 'text-lg opacity-60 group-hover:opacity-100 transition-opacity']"></i>
        <span v-if="!collapsed" class="tracking-wide">{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- Profile & Logout -->
    <div class="px-4 pb-8 mt-auto space-y-4">
      <!-- Profile Section -->
      <div 
        class="bg-white/5 rounded-[24px] p-4 flex items-center gap-3 transition-all duration-300"
        :class="collapsed ? 'justify-center' : ''"
      >
        <div class="w-10 h-10 rounded-full border border-white/10 overflow-hidden shrink-0">
          <img src="/vector-profiles/1.png" alt="Pastor Samuel" class="w-full h-full object-cover" />
        </div>
        <div v-if="!collapsed" class="min-w-0">
          <p class="text-[13px] font-bold text-white truncate">Pastor Samuel</p>
          <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest truncate">Lead Administrator</p>
        </div>
      </div>

      <!-- Logout Action -->
      <button 
        class="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[13px] font-sans font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 transition-all duration-300 group w-full"
        :class="collapsed ? 'justify-center' : ''"
        @click="handleLogout"
      >
        <i class="pi pi-sign-out text-lg opacity-60 group-hover:opacity-100 transition-opacity"></i>
        <span v-if="!collapsed" class="tracking-wide">Logout</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({ collapsed: { type: Boolean, default: false } })
defineEmits(['toggle'])

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('tsc_token')
  router.push({ name: 'Login' })
}

const menuItems = [
  { to: '/admin', icon: 'objects-column', label: 'Dashboard' },
  { to: '/admin/evangelism', icon: 'megaphone', label: 'Evangelism' },
  { to: '/admin/follow-ups', icon: 'phone', label: 'Follow-Ups' },
  { to: '/admin/disciples', icon: 'heart', label: 'Discipleship' },
  { to: '/admin/reports', icon: 'chart-bar', label: 'Reports' },
  { to: '/admin/users', icon: 'users', label: 'Users' },
  { to: '/admin/settings', icon: 'cog', label: 'Settings' }
]
</script>
