<template>
  <footer class="bg-onyx text-ghost pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="TSC" class="w-10 h-10 object-contain" />
            <div>
              <span class="font-display font-bold text-lg block">The Saints Center</span>
              <span class="text-wisteria text-xs tracking-wider">Raising Messengers</span>
            </div>
          </div>
          <p class="text-wisteria text-sm leading-relaxed">
            The Citadel of Revelation and Power. A vibrant community of believers committed to raising messengers for the Kingdom.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-bronze mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <router-link :to="link.to" class="text-wisteria text-sm hover:text-ghost transition-colors duration-300">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-bronze mb-4 text-sm tracking-wider uppercase">Service Times</h4>
          <ul class="space-y-3 text-sm text-wisteria">
            <li class="flex items-start gap-2">
              <i class="pi pi-calendar text-bronze mt-0.5"></i>
              <div>
                <span class="text-ghost block">Sunday Service</span>
                8:00 AM - 10:30 AM
              </div>
            </li>
            <li class="flex items-start gap-2">
              <i class="pi pi-calendar text-bronze mt-0.5"></i>
              <div>
                <span class="text-ghost block">Wednesday Bible Study</span>
                6:00 PM - 7:30 PM
              </div>
            </li>
            <li class="flex items-start gap-2">
              <i class="pi pi-calendar text-bronze mt-0.5"></i>
              <div>
                <span class="text-ghost block">Friday Prayer Meeting</span>
                6:00 PM - 8:00 PM
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-bronze mb-4 text-sm tracking-wider uppercase">Contact</h4>
          <ul class="space-y-3 text-sm text-wisteria">
            <li class="flex items-start gap-2">
              <i class="pi pi-map-marker text-bronze mt-0.5"></i>
              <span>Iba, Lagos State, Nigeria</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="pi pi-phone text-bronze mt-0.5"></i>
              <span>+234 XXX XXX XXXX</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="pi pi-envelope text-bronze mt-0.5"></i>
              <span>info@thesaintscenter.org</span>
            </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <a v-for="social in socials" :key="social.icon" href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-wisteria hover:bg-bronze hover:text-ghost hover:border-bronze transition-all duration-300">
              <i :class="`pi pi-${social.icon} text-sm`"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-wisteria text-xs">&copy; {{ new Date().getFullYear() }} The Saints Center. All rights reserved.</p>
        <p class="text-wisteria/50 text-xs">The Citadel of Revelation and Power</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/contact', label: 'Contact Us' }
]

const socials = [
  { icon: 'facebook' },
  { icon: 'instagram' },
  { icon: 'twitter' },
  { icon: 'youtube' }
]
</script>
