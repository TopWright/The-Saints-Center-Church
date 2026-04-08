<template>
  <div class="bg-[#0b1221] rounded-[40px] p-6 lg:p-8 shadow-2xl text-white flex flex-col items-center text-center">
    <h3 class="font-display text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 tracking-tight">Active Leaders</h3>
    
    <!-- Leader Avatars -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-8">
      <div class="flex -space-x-4">
        <div v-for="i in 3" :key="i" class="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-4 border-[#0b1221] overflow-hidden">
          <img :src="`/vector-profiles/${i + 5}.png`" alt="Leader" class="w-full h-full object-cover" />
        </div>
        <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-4 border-[#0b1221] bg-[#d47a22] flex items-center justify-center text-[12px] lg:text-[13px] font-bold">
          +12
        </div>
      </div>
      <div class="sm:ml-6 text-center sm:text-left mt-2 sm:mt-0">
        <p class="text-xl lg:text-2xl font-sans font-bold leading-none">15 Total</p>
        <p class="text-[9px] lg:text-[10px] uppercase font-bold text-white/40 tracking-widest mt-1">Commissioned</p>
      </div>
    </div>

    <button class="w-full bg-white/10 hover:bg-white/20 py-4 rounded-2xl font-sans font-bold text-[14px] transition-all duration-300 backdrop-blur-md">
      View Roster
    </button>
  </div>
</template>
