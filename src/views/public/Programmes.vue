<template>
  <div ref="container" class="pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-6">
      <SectionHeading title="Programmes" subtitle="Upcoming Events" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 programme-grid">
        <ProgrammeCard v-for="programme in programmes" :key="programme.id" :programme="programme" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGsap } from '@/composables/useGsap'
import SectionHeading from '@/components/public/SectionHeading.vue'
import ProgrammeCard from '@/components/public/ProgrammeCard.vue'

const container = ref(null)

const programmes = ref([
  { id: 1, title: 'Sunday Worship Service', description: 'Join us for a powerful time of praise, worship, and the Word.', date: 'Every Sunday', time: '8:00 AM', venue: 'Main Auditorium', upcoming: true },
  { id: 2, title: 'Midweek Bible Study', description: 'Deep dive into the scriptures for revelation and understanding.', date: 'Every Wednesday', time: '6:00 PM', venue: 'Main Auditorium', upcoming: true },
  { id: 3, title: 'Night of Power', description: 'An evening of intense prayer and supernatural encounters.', date: 'April 18, 2026', time: '7:00 PM', venue: 'Main Auditorium', upcoming: true },
  { id: 4, title: 'Youth Convention', description: 'Empowering the next generation of messengers for Kingdom impact.', date: 'May 5-7, 2026', time: '9:00 AM', venue: 'Main Auditorium', upcoming: true },
  { id: 5, title: 'Workers Conference', description: 'Equipping and training workers for effective ministry service.', date: 'May 20, 2026', time: '10:00 AM', venue: 'Conference Hall', upcoming: true },
  { id: 6, title: 'Annual Convention', description: 'Our flagship event — a week of glory, revelation, and power.', date: 'June 15-21, 2026', time: '5:00 PM', venue: 'Main Auditorium', upcoming: true }
])

useGsap((gsap, ScrollTrigger) => {
  gsap.from('.programme-grid > *', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.programme-grid', start: 'top 85%' }
  })
}, container)
</script>
