<template>
  <div ref="container" class="pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-6">
      <SectionHeading title="Contact Us" subtitle="Get In Touch" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 contact-content">
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-onyx mb-1.5">Full Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Your full name"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all text-sm"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-onyx mb-1.5">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all text-sm"
              />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-onyx mb-1.5">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="How can we help?"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all text-sm"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-onyx mb-1.5">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Write your message..."
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all text-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-bronze hover:bg-bronze-light text-ghost font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-bronze/20 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        <div class="space-y-8">
          <div class="bg-white rounded-2xl p-6 border border-gray-50 shadow-sm">
            <h3 class="font-display font-bold text-lg text-onyx mb-5">Church Information</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-map-marker text-bronze"></i>
                </div>
                <div>
                  <p class="font-medium text-onyx text-sm">Location</p>
                  <p class="text-wisteria text-sm">Iba, Lagos State, Nigeria</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-phone text-bronze"></i>
                </div>
                <div>
                  <p class="font-medium text-onyx text-sm">Phone</p>
                  <p class="text-wisteria text-sm">+234 XXX XXX XXXX</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-envelope text-bronze"></i>
                </div>
                <div>
                  <p class="font-medium text-onyx text-sm">Email</p>
                  <p class="text-wisteria text-sm">info@thesaintscenter.org</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-clock text-bronze"></i>
                </div>
                <div>
                  <p class="font-medium text-onyx text-sm">Service Times</p>
                  <p class="text-wisteria text-sm">Sunday: 8:00 AM — 10:30 AM</p>
                  <p class="text-wisteria text-sm">Wednesday: 6:00 PM — 7:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-prussian rounded-2xl p-6 text-ghost">
            <h3 class="font-display font-bold text-lg mb-2">Visit Us</h3>
            <p class="text-wisteria text-sm mb-4">We'd love to have you worship with us. Our doors are always open.</p>
            <div class="w-full h-48 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <div class="text-center">
                <i class="pi pi-map text-wisteria text-3xl mb-2"></i>
                <p class="text-wisteria text-xs">Iba, Lagos State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGsap } from '@/composables/useGsap'
import SectionHeading from '@/components/public/SectionHeading.vue'

const container = ref(null)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}

useGsap((gsap, ScrollTrigger) => {
  gsap.from('.contact-content > *', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.contact-content', start: 'top 85%' }
  })
}, container)
</script>
