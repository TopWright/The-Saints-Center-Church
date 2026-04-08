<script setup>
import Navbar from '@/components/public/Navbar.vue'
import Footer from '@/components/public/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-up" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>
