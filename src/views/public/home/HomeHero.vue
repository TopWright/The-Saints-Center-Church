<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const rotatingWords = [
  "Divine Revelation",
  "Apostolic Grace",
  "Supernatural Power",
  "Divine Encounters"
]

const currentWordIndex = ref(0)
let wordInterval

onMounted(() => {
  wordInterval = setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length
  }, 3500)
})

onUnmounted(() => {
  clearInterval(wordInterval)
})
</script>

<template>
  <section class="h-screen min-h-[900px] flex flex-col items-center justify-center bg-[#F9F9F9] relative w-full pt-16 overflow-hidden">
    
    <!-- Visible Animated Glass Circles -->
    <div class="glass-orb w-[300px] h-[300px] absolute top-[10%] left-[5%] delay-0 bg-blue-100/20"></div>
    <div class="glass-orb w-[200px] h-[200px] absolute top-[25%] right-[10%] delay-700 bg-[#d47a22]/10"></div>
    <div class="glass-orb w-[400px] h-[400px] absolute bottom-[5%] -left-[10%] delay-1000 bg-purple-100/20"></div>
    <div class="glass-orb w-[250px] h-[250px] absolute bottom-[20%] right-[5%] delay-500 bg-[#0b1221]/5"></div>
    
    <!-- Subtle center glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] pointer-events-none opacity-80 mix-blend-overlay"></div>
    
    <div class="z-10 text-center flex flex-col items-center relative w-full max-w-7xl px-4">
      
      <!-- Badge -->
      <div class="bg-white/80 backdrop-blur-xl border border-black/5 px-5 py-2 rounded-full mb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <span class="text-[10px] font-sans font-bold tracking-[0.3em] text-[#666666] uppercase drop-shadow-sm">
          THE ETHEREAL SANCTUARY
        </span>
      </div>
      
      <!-- Headline - Massive text -->
      <h1 class="font-display text-7xl md:text-[8rem] lg:text-[9rem] text-[#1a1d20] font-normal tracking-tight mb-2 leading-none">
        A Place of
      </h1>
      
      <!-- Rotating italic part -->
      <div class="h-[120px] md:h-[180px] lg:h-[200px] flex items-center justify-center w-full mb-8">
        <transition name="fade-slide" mode="out-in">
          <h1 
            :key="currentWordIndex"
            class="font-display italic text-7xl md:text-[8rem] lg:text-[10rem] text-[#1a1d20] pr-4 leading-none"
          >
            {{ rotatingWords[currentWordIndex] }}
          </h1>
        </transition>
      </div>
      
      <!-- Description - text size restored, normal weight -->
      <p class="font-sans text-[#4a4a4a] text-base md:text-lg lg:text-[19px] font-normal max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
        Raising messengers, hearing from God, living the best of both worlds.
      </p>
      
      <!-- Button -->
      <button class="relative bg-transparent overflow-hidden px-10 py-4 rounded-full border-2 border-[#d47a22] text-[#d47a22] font-sans font-bold text-[13px] tracking-widest uppercase hover:text-white group transition-all duration-300 shadow-2xl shadow-[#d47a22]/30 hover:shadow-[#d47a22]/50 hover:-translate-y-1 z-10 cursor-pointer">
        <div class="absolute inset-0 bg-[#d47a22] w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
        <span class="relative z-10 flex items-center gap-3">
          Experience the Glory
          <i class="pi pi-arrow-right text-[11px] transition-transform duration-300 group-hover:translate-x-2"></i>
        </span>
      </button>
      
    </div>

    <!-- Scroll Indicator (Animated bounce) -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 animate-bounce">
      <span class="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-[#888]">SCROLL TO DISCOVER</span>
      <div class="w-px h-12 bg-gradient-to-b from-[#888] to-transparent"></div>
    </div>
  </section>

  <!-- Marquee Watermark After Hero -->
  <div class="w-full overflow-hidden flex items-center justify-center pointer-events-none select-none relative z-10 transition-all rotate-[-4deg] scale-110 my-16 opacity-[0.08]">
    <div class="animate-marquee">
      <h1 class="font-display italic text-[15vw] whitespace-nowrap leading-none mx-4 text-[#1a1d20] uppercase tracking-tighter">RAISING MESSENGERS <span class="mx-4 font-sans not-italic text-[#d47a22]">♣︎</span></h1>
      <h1 class="font-display italic text-[15vw] whitespace-nowrap leading-none mx-4 text-[#1a1d20] uppercase tracking-tighter">RAISING MESSENGERS <span class="mx-4 font-sans not-italic text-[#d47a22]">♣︎</span></h1>
      <h1 class="font-display italic text-[15vw] whitespace-nowrap leading-none mx-4 text-[#1a1d20] uppercase tracking-tighter">RAISING MESSENGERS <span class="mx-4 font-sans not-italic text-[#d47a22]">♣︎</span></h1>
      <h1 class="font-display italic text-[15vw] whitespace-nowrap leading-none mx-4 text-[#1a1d20] uppercase tracking-tighter">RAISING MESSENGERS <span class="mx-4 font-sans not-italic text-[#d47a22]">♣︎</span></h1>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px) rotate(-2deg);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px) rotate(2deg);
}

.glass-orb {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.5);
  animation: floatOrb 10s ease-in-out infinite;
  z-index: 1;
}

.delay-0 { animation-delay: 0s; }
.delay-500 { animation-delay: -2s; }
.delay-700 { animation-delay: -4s; }
.delay-1000 { animation-delay: -6s; }

@keyframes floatOrb {
  0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
  33% { transform: translateY(-30px) translateX(20px) scale(1.05) rotate(5deg); }
  66% { transform: translateY(15px) translateX(-15px) scale(0.95) rotate(-5deg); }
  100% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
}
</style>
