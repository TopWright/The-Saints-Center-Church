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
        active-class="bg-white/10 shadow-lg !text-white"
      >
        <i :class="[`pi pi-${item.icon}`, 'text-lg opacity-60 group-hover:opacity-100 transition-opacity']"></i>
        <span v-if="!collapsed" class="tracking-wide">{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- Bottom Action -->
    <div class="p-4 mt-auto">
      <button 
        v-if="!collapsed"
        class="w-full bg-[#d47a22] hover:bg-[#c36a1b] text-white py-4 rounded-2xl font-sans font-bold text-[14px] shadow-lg shadow-[#d47a22]/20 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
      >
        New Entry
      </button>
      <button 
        v-else
        class="w-full h-12 bg-[#d47a22] rounded-xl flex items-center justify-center text-white"
        title="New Entry"
      >
        <i class="pi pi-plus"></i>
      </button>
      
      <!-- Collapse toggle hidden in mockup sidebar edge but keeping functionality -->
      <button 
        @click="$emit('toggle')"
        class="w-full mt-4 py-2 text-[#a0a0a0] hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold"
      >
        {{ collapsed ? '→' : 'Collapse Sidebar' }}
      </button>
    </div>
  </aside>
</template>

<script setup>
defineProps({ collapsed: { type: Boolean, default: false } })
defineEmits(['toggle'])

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
