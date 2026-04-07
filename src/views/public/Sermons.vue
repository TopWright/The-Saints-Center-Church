<template>
  <div ref="container" class="pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-6">
      <SectionHeading title="Sermons" subtitle="The Word" />

      <div class="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeCategory === cat ? 'bg-bronze text-ghost shadow-sm' : 'bg-white text-wisteria hover:text-onyx border border-gray-100'"
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sermon-grid">
        <SermonCard v-for="sermon in filteredSermons" :key="sermon.id" :sermon="sermon" />
      </div>

      <div v-if="!filteredSermons.length" class="text-center py-16">
        <i class="pi pi-inbox text-4xl text-wisteria/30 mb-3"></i>
        <p class="text-wisteria">No sermons found in this category</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGsap } from '@/composables/useGsap'
import SectionHeading from '@/components/public/SectionHeading.vue'
import SermonCard from '@/components/public/SermonCard.vue'

const container = ref(null)
const activeCategory = ref('All')

const categories = ['All', 'Faith', 'Prayer', 'Worship', 'Kingdom', 'Holy Spirit']

const sermons = ref([
  { id: 1, title: 'Walking in the Power of the Spirit', excerpt: 'Discover how to live daily under the influence and power of the Holy Spirit.', preacher: 'Pastor James', date: 'Mar 30, 2026', category: 'Holy Spirit' },
  { id: 2, title: 'The Power of Prevailing Prayer', excerpt: 'Understanding the dynamics of prayer that moves mountains and shifts atmospheres.', preacher: 'Pastor James', date: 'Mar 23, 2026', category: 'Prayer' },
  { id: 3, title: 'Kingdom Ambassadors', excerpt: 'We are sent as representatives of the Kingdom with authority and dominion.', preacher: 'Pastor James', date: 'Mar 16, 2026', category: 'Kingdom' },
  { id: 4, title: 'Faith That Overcomes', excerpt: 'Living by faith that transcends circumstances and lays hold of the supernatural.', preacher: 'Minister Grace', date: 'Mar 9, 2026', category: 'Faith' },
  { id: 5, title: 'The Heart of Worship', excerpt: 'True worship begins in the heart and transforms every area of our lives.', preacher: 'Pastor James', date: 'Mar 2, 2026', category: 'Worship' },
  { id: 6, title: 'Revelation and Power', excerpt: 'Accessing divine revelation that unlocks supernatural power for the believer.', preacher: 'Pastor James', date: 'Feb 23, 2026', category: 'Holy Spirit' }
])

const filteredSermons = computed(() => {
  if (activeCategory.value === 'All') return sermons.value
  return sermons.value.filter(s => s.category === activeCategory.value)
})

useGsap((gsap, ScrollTrigger) => {
  gsap.from('.sermon-grid > *', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.sermon-grid', start: 'top 85%' }
  })
}, container)
</script>
