<template>
  <div class="pt-32 pb-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      
      <!-- Sermons Hero Banner -->
      <div class="bg-linear-to-br from-[#0c1322] to-[#152340] rounded-[40px] px-8 md:px-16 py-20 md:py-32 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
        <!-- Subtle background overlay -->
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?q=80&w=2000&auto=format&fit=crop')] opacity-[0.03] mix-blend-overlay bg-cover bg-center"></div>
        <div class="absolute inset-0 bg-linear-to-r from-[#0b1221] via-[#0b1221]/90 to-transparent"></div>

        <!-- Left Content -->
        <div class="relative z-10 max-w-2xl">
          <div class="border border-[#7c634a] bg-[#1c2230]/50 backdrop-blur-sm text-[#c49a6c] rounded-full px-5 py-1.5 text-[9px] uppercase tracking-[0.3em] font-bold inline-block mb-10">
            The Collection
          </div>
          
          <h1 class="font-display italic text-white text-6xl md:text-[6.5rem] leading-none mb-10 tracking-tight">
            The Archive
          </h1>
          
          <p class="font-sans text-[#a0a0a0] text-base md:text-[17px] font-normal leading-relaxed max-w-xl">
            Discover the depths of <span class="text-[#d47a22] font-medium italic">Raising Messengers</span>. A sacred repository where the spoken word meets the Eternal Spirit, crafting vessels of light through revelation and apostolic instruction.
          </p>
        </div>

        <!-- Right Sparkle Graphic -->
        <div class="relative z-10 hidden lg:flex items-center justify-center w-[350px] h-[350px] rounded-full border border-white/5 bg-white/5 backdrop-blur-sm shadow-[inset_0_0_50px_rgba(255,255,255,0.02)] mr-10 overflow-hidden group">
           <!-- Inner glow spinning orbit -->
           <div class="absolute inset-0 rounded-full border border-[#d47a22]/30 scale-90 border-dashed animate-[spin_60s_linear_infinite]"></div>
           <i class="pi pi-sparkles text-white text-[70px] mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"></i>
        </div>
      </div>

      <!-- Main Sermons Section -->
      <div class="mt-20 md:mt-32">
        <h2 class="font-display italic text-5xl md:text-6xl text-[#1a1d20] mb-12 px-2">
          Sermons
        </h2>

        <!-- Filters & Search Bar -->
        <div class="flex flex-col xl:flex-row items-center justify-between gap-6 mb-16 px-2 border-b border-gray-200/60 pb-8">
          
          <!-- Search -->
          <div class="w-full xl:w-[350px] bg-[#f9f9f9] rounded-full flex items-center px-6 py-4 shadow-inner border border-gray-100 focus-within:ring-2 focus-within:ring-[#0b1221]/10 transition-all">
             <i class="pi pi-search text-[#a0a0a0] text-[13px] mr-3"></i>
             <input type="text" placeholder="Search the revelation..." class="bg-transparent border-none outline-none text-[13px] font-sans text-[#1a1d20] w-full placeholder:text-[#b0b0b0] font-medium" />
          </div>

          <!-- Category Pills -->
          <div class="flex flex-wrap items-center gap-2 xl:gap-3 justify-start sm:justify-center w-full xl:w-auto">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat"
              class="px-6 py-3.5 rounded-full text-[11px] font-sans font-bold tracking-wide transition-all duration-300 capitalize cursor-pointer"
              :class="activeCategory === cat ? 'bg-[#0b1221] text-white shadow-md' : 'bg-[#f4f4f4] text-[#707070] hover:bg-[#eaeaea] hover:text-[#1a1d20]'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <SermonCard v-for="sermon in filteredSermons" :key="sermon.id" :sermon="sermon" />
        </div>

      </div>

      <!-- Seeking Deeper Roots Endcap -->
      <div class="bg-[#fafafa] rounded-[40px] px-8 py-20 text-center max-w-5xl mx-auto shadow-sm border border-gray-100 flex flex-col items-center justify-center mb-10">
        <h2 class="font-display italic text-4xl md:text-5xl text-[#1a1d20] mb-6">
          Seeking Deeper Roots?
        </h2>
        <p class="font-sans text-[#707070] text-[16px] leading-relaxed max-w-xl font-normal mb-10">
          Our digital vault extends further than these walls. Access the full lineage of teachings, seminars, and prophetic meetings from the early years of our mandate.
        </p>
        <a href="#" class="inline-flex items-center gap-3 font-sans font-bold text-[13px] text-[#A67657] hover:text-[#8a5b3f] transition-colors border-b border-transparent hover:border-[#8a5b3f] pb-1 cursor-pointer">
          Visit the Google Drive Archive <i class="pi pi-arrow-right text-[10px]"></i>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SermonCard from '@/components/public/SermonCard.vue'

const activeCategory = ref('All Records')

const categories = ['All Records', 'Revelation', 'The Supernatural', 'Pauline Prayers', 'Leadership']

const sermons = ref([
  { 
    id: 1, 
    title: 'The Weight of Eternal Glory', 
    excerpt: 'Exploring the dimensions of the supernatural weight that descends when the messenger and the message become one in spiritual synergy.', 
    preacher: 'Rev. Johnathan Saint', 
    date: 'May 12, 2024', 
    category: 'Revelation',
    duration: '45:12',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=1974'
  },
  { 
    id: 2, 
    title: 'Walking Through the Veil', 
    excerpt: 'A deep dive into the practical application of spiritual senses and discerning the movements of the Father in the earthly domain.', 
    preacher: 'Apostle Sarah Vance', 
    date: 'May 05, 2024', 
    category: 'The Supernatural',
    duration: '58:30',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2074'
  },
  { 
    id: 3, 
    title: 'The Prayer of Illumination', 
    excerpt: 'Decoding the prayer for the eyes of the understanding to be enlightened according to the epistles of Paul and the blueprint of grace.', 
    preacher: 'Rev. Johnathan Saint', 
    date: 'April 28, 2024', 
    category: 'Pauline Prayers',
    duration: '1:02:15',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1994'
  },
  { 
    id: 4, 
    title: 'Architects of the Word', 
    excerpt: 'How true leadership in the Kingdom is established upon the unyielding foundation of revelation and accurate dispensational doctrine.', 
    preacher: 'Bishop Thomas Reeds', 
    date: 'April 21, 2024', 
    category: 'Leadership',
    duration: '40:05',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fcfc62?auto=format&fit=crop&q=80&w=2074'
  },
  { 
    id: 5, 
    title: 'Mysteries of the Inner Court', 
    excerpt: 'Transitioning from the foundational teachings into the heavy meat of the Word, seeking the intimate presence of the Most High.', 
    preacher: 'Rev. Johnathan Saint', 
    date: 'April 14, 2024', 
    category: 'Revelation',
    duration: '49:50',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80&w=1968'
  },
  { 
    id: 6, 
    title: 'Atmospheres of Dominion', 
    excerpt: 'Learning to not just experience the supernatural, but to carry the presence and dictate the spiritual atmosphere of your environment.', 
    preacher: 'Apostle Sarah Vance', 
    date: 'April 07, 2024', 
    category: 'The Supernatural',
    duration: '54:20',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070'
  }
])

const filteredSermons = computed(() => {
  if (activeCategory.value === 'All Records') return sermons.value
  return sermons.value.filter(s => s.category === activeCategory.value)
})
</script>
