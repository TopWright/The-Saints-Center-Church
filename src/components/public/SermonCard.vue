<template>
  <div class="group bg-white rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col p-4 pb-6">
    
    <!-- Image Wrapper -->
    <div class="w-full aspect-[16/10] bg-[#f0f0f0] rounded-[32px] relative overflow-hidden mb-6">
      <div 
        class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        :style="{ backgroundImage: `url(${sermon.image || 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop'})` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Duration Badge -->
      <div class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-sans font-bold px-3 py-1.5 rounded-full z-10">
        {{ sermon.duration || '45:12' }}
      </div>
    </div>

    <!-- Content Wrapper -->
    <div class="flex-1 flex flex-col px-4">
      
      <!-- Category/Theme Label -->
      <div class="flex items-center gap-2 mb-3">
        <i :class="['pi', getCategoryIcon(sermon.category), 'text-[#d47a22] text-[10px]']"></i>
        <span class="text-[#d47a22] font-sans font-bold text-[9px] tracking-widest uppercase">
          {{ sermon.category }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="font-display font-medium text-[22px] text-[#1a1d20] mb-3 leading-snug group-hover:text-[#d47a22] transition-colors duration-300">
        {{ sermon.title }}
      </h3>

      <!-- Excerpt -->
      <p class="font-sans text-[#707070] text-[15px] leading-relaxed font-normal mb-8 line-clamp-2">
        {{ sermon.excerpt }}
      </p>

      <!-- Bottom Row: Preacher/Date + Play Button -->
      <div class="mt-auto flex items-end justify-between">
        
        <!-- Preacher & Date stacked -->
        <div class="flex flex-col">
          <span class="font-sans text-[#1a1d20] font-bold text-[12px] mb-1">{{ sermon.preacher }}</span>
          <span class="font-sans text-[#a0a0a0] font-light text-[11px]">{{ sermon.date }}</span>
        </div>

        <!-- Play Button -->
        <div class="w-12 h-12 rounded-full bg-[#0b1221] flex items-center justify-center text-white transform group-hover:bg-[#d47a22] group-hover:scale-110 transition-all duration-300 shadow-md">
          <i class="pi pi-play text-sm ml-1"></i>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  sermon: { type: Object, required: true }
})

const getCategoryIcon = (category) => {
  const icons = {
    'Revelation': 'pi-book',
    'The Supernatural': 'pi-bolt',
    'Pauline Prayers': 'pi-bookmark',
    'Leadership': 'pi-crown'
  }
  return icons[category] || 'pi-bookmark'
}
</script>
