<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-prussian/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-3 group">
        <img src="/logo.png" alt="TSC" class="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
        <div>
          <span class="text-ghost font-display font-bold text-lg leading-tight block">The Saints Center</span>
          <span class="text-wisteria text-[10px] tracking-widest uppercase hidden sm:block">Citadel of Revelation & Power</span>
        </div>
      </router-link>

      <div class="hidden md:flex items-center gap-8">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-ghost/80 text-sm font-medium tracking-wide hover:text-bronze transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-bronze after:transition-all after:duration-300 hover:after:w-full"
          active-class="!text-bronze after:!w-full"
        >
          {{ link.label }}
        </router-link>
        <router-link
          to="/auth/login"
          class="bg-bronze hover:bg-bronze-light text-ghost text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-bronze/25"
        >
          Login
        </router-link>
      </div>

      <button @click="mobileOpen = !mobileOpen" class="md:hidden text-ghost">
        <i class="pi text-2xl" :class="mobileOpen ? 'pi-times' : 'pi-bars'"></i>
      </button>
    </div>

    <transition name="slide-up">
      <div v-if="mobileOpen" class="md:hidden bg-prussian/98 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block text-ghost/80 text-base font-medium hover:text-bronze transition-colors"
          active-class="!text-bronze"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </router-link>
        <router-link
          to="/auth/login"
          class="block text-center bg-bronze text-ghost font-semibold py-3 rounded-lg"
          @click="mobileOpen = false"
        >
          Login
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/contact', label: 'Contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
