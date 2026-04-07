<template>
  <div class="flex min-h-screen bg-ghost">
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed" />
    <div class="flex-1 flex flex-col transition-all duration-300" :class="sidebarCollapsed ? 'ml-20' : 'ml-64'">
      <header class="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
        <button @click="sidebarCollapsed = !sidebarCollapsed" class="lg:hidden text-prussian">
          <i class="pi pi-bars text-xl"></i>
        </button>
        <div class="flex items-center gap-3">
          <span class="text-sm text-wisteria hidden sm:block">Welcome back, Admin</span>
          <div class="w-9 h-9 rounded-full bg-prussian flex items-center justify-center">
            <i class="pi pi-user text-ghost text-sm"></i>
          </div>
        </div>
      </header>
      <main class="flex-1 p-6">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </main>
    </div>

    <div
      v-if="!sidebarCollapsed"
      class="fixed inset-0 bg-black/40 z-30 lg:hidden"
      @click="sidebarCollapsed = true"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/admin/Sidebar.vue'

const sidebarCollapsed = ref(false)
</script>
