<script setup>
import AppButton from '@/components/shared/AppButton.vue'

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/sermons', label: 'SERMONS' },
  { to: '/programmes', label: 'PROGRAMMES' },
  { to: '/contact', label: 'CONTACT' }
]
</script>

<template>
  <nav class="fixed top-4 left-0 right-0 z-[100]">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between bg-white/70 backdrop-blur-md shadow-sm border border-white/40 py-3 rounded-full">
      
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3">
        <img src="/logo.png" alt="The Saints Center" class="h-[48px] w-auto object-contain drop-shadow-sm pointer-events-none select-none" />
      </router-link>

      <!-- Center Links -->
      <div class="hidden md:flex items-center gap-10">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[#555] text-[11px] lg:text-[12px] font-sans font-bold tracking-[0.2em] hover:text-[#d47a22] transition-colors"
          exact-active-class="!text-[#d47a22]"
        >
          {{ link.label }}
        </router-link>
      </div>

      <!-- CTA -->
      <div>
        <AppButton to="/contact" variant="primary">
          Join Us
        </AppButton>
      </div>
      
    </div>
  </nav>
</template>
