<template>
  <aside
    class="fixed top-0 left-0 h-screen bg-prussian text-ghost z-40 transition-all duration-300 flex flex-col"
    :class="collapsed ? 'w-20' : 'w-64'"
  >
    <div class="h-16 flex items-center px-4 border-b border-white/10">
      <router-link to="/admin" class="flex items-center gap-3 overflow-hidden">
        <img src="/logo.png" alt="TSC" class="w-9 h-9 object-contain flex-shrink-0" />
        <transition name="fade">
          <span v-if="!collapsed" class="font-display font-bold text-sm whitespace-nowrap">The Saints Center</span>
        </transition>
      </router-link>
    </div>

    <nav class="flex-1 py-4 overflow-y-auto">
      <ul class="space-y-1 px-3">
        <li v-for="item in menuItems" :key="item.to">
          <router-link
            :to="item.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10"
            :class="collapsed ? 'justify-center' : ''"
            active-class="!bg-bronze/15 !text-bronze"
          >
            <i :class="`pi pi-${item.icon} text-base`"></i>
            <transition name="fade">
              <span v-if="!collapsed" class="whitespace-nowrap">{{ item.label }}</span>
            </transition>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="p-3 border-t border-white/10">
      <button
        @click="$emit('toggle')"
        class="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm text-wisteria hover:text-ghost hover:bg-white/10 transition-all"
      >
        <i class="pi" :class="collapsed ? 'pi-angle-double-right' : 'pi-angle-double-left'"></i>
        <span v-if="!collapsed">Collapse</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
defineProps({ collapsed: { type: Boolean, default: false } })
defineEmits(['toggle'])

const menuItems = [
  { to: '/admin', icon: 'th-large', label: 'Dashboard' },
  { to: '/admin/evangelism', icon: 'megaphone', label: 'Evangelism' },
  { to: '/admin/follow-ups', icon: 'users', label: 'Follow Ups' },
  { to: '/admin/disciples', icon: 'heart', label: 'Disciples' },
  { to: '/admin/reports', icon: 'chart-bar', label: 'Reports' },
  { to: '/admin/users', icon: 'user', label: 'Users' },
  { to: '/admin/settings', icon: 'cog', label: 'Settings' }
]
</script>
