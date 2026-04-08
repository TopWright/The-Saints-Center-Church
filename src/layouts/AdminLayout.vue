<template>
  <div class="flex min-h-screen bg-[#F8F9FA]">
    <Sidebar 
      :collapsed="sidebarCollapsed" 
      :class="mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
      @toggle="sidebarCollapsed = !sidebarCollapsed" 
    />
    
    <div 
      class="flex-1 flex flex-col transition-all duration-300 min-w-0" 
      :class="sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'"
    >
      <!-- Global Header -->
      <header class="h-20 bg-white flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
        <!-- Logo/Title -->
        <div class="flex items-center gap-3 lg:gap-4">
          <button @click="mobileOpen = !mobileOpen" class="text-[#0b1221] p-2 -ml-2 lg:hidden">
            <i class="pi pi-bars text-xl"></i>
          </button>
          <button @click="sidebarCollapsed = !sidebarCollapsed" class="text-[#0b1221] hover:opacity-70 transition-opacity hidden lg:block">
            <i class="pi pi-bars text-xl"></i>
          </button>
          <span class="font-display text-xl lg:text-2xl font-bold text-[#0b1221] truncate">Saint's Center</span>
        </div>

        <!-- Search Bar -->
        <div class="hidden lg:flex flex-1 max-w-[400px] mx-10">
          <div class="relative w-full">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a0a0]"></i>
            <input 
              type="text" 
              placeholder="Search reports..." 
              class="w-full bg-[#f0f2f5] border-none rounded-full py-2.5 pl-12 pr-6 text-sm focus:ring-2 focus:ring-[#0b1221]/10 transition-all placeholder:text-[#a0a0a0]"
            />
          </div>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-4 lg:gap-8">
          <!-- Notification -->
          <button class="relative text-[#0b1221] hover:opacity-70 transition-opacity p-2">
            <i class="pi pi-bell text-xl"></i>
            <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#d47a22] rounded-full border-2 border-white"></span>
          </button>

          <!-- User Profile -->
          <div class="flex items-center gap-3 lg:gap-4">
            <div class="text-right hidden sm:block">
              <p class="text-[13px] font-bold text-[#0b1221] tracking-tight">Admin User</p>
              <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest leading-none mt-0.5">System Admin</p>
            </div>
            <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#f0f2f5] overflow-hidden p-0.5 shrink-0">
              <img src="/vector-profiles/1.png" alt="Admin" class="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6 lg:p-10">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </main>
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="mobileOpen"
      class="fixed inset-0 bg-[#0b1221]/60 backdrop-blur-sm z-30 lg:hidden"
      @click="mobileOpen = false"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '@/components/admin/Sidebar.vue'

const sidebarCollapsed = ref(false)
const mobileOpen = ref(false)
const route = useRoute()

// Close sidebar on route change for mobile
watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>
