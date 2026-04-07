<template>
  <div ref="container">
    <section class="relative min-h-screen flex items-center justify-center bg-prussian overflow-hidden">
      <div class="absolute inset-0">
        <div class="hero-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-bronze/8 blur-[120px]"></div>
        <div class="hero-orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-wisteria/10 blur-[100px]"></div>
        <div class="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-prussian-light/20 blur-[80px]"></div>
      </div>

      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div class="hero-content">
          <img src="/logo.png" alt="The Saints Center" class="w-24 h-24 mx-auto mb-8 object-contain" />
          <p class="text-bronze text-sm font-semibold tracking-[0.3em] uppercase mb-4">Welcome to</p>
          <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ghost leading-tight mb-6">
            The Saints<br />Center
          </h1>
          <p class="text-wisteria text-lg md:text-xl font-light max-w-2xl mx-auto mb-4">
            The Citadel of Revelation and Power
          </p>
          <p class="text-wisteria/60 text-sm tracking-wider uppercase mb-10">Raising Messengers</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link
              to="/sermons"
              class="bg-bronze hover:bg-bronze-light text-ghost font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-bronze/25 text-sm"
            >
              Explore Sermons
            </router-link>
            <router-link
              to="/contact"
              class="border-2 border-white/20 text-ghost font-semibold px-8 py-3.5 rounded-lg hover:bg-white/5 transition-all duration-300 text-sm"
            >
              Visit Us
            </router-link>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i class="pi pi-angle-down text-wisteria/40 text-2xl"></i>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGsap } from '@/composables/useGsap'

const container = ref(null)

useGsap((gsap) => {
  gsap.from('.hero-content > *', {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.3
  })

  gsap.to('.hero-orb', {
    y: -20,
    duration: 4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.8
  })
}, container)
</script>
