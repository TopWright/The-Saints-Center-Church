<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-onyx">Settings</h1>
      <p class="text-wisteria text-sm">Church and application configuration</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl border border-gray-50 p-6">
        <h3 class="font-semibold text-onyx mb-4">Church Information</h3>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-onyx mb-1.5">Church Name</label>
            <input v-model="settings.churchName" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-onyx mb-1.5">Tagline</label>
            <input v-model="settings.tagline" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-onyx mb-1.5">Location</label>
            <input v-model="settings.location" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-onyx mb-1.5">Phone</label>
            <input v-model="settings.phone" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-onyx mb-1.5">Email</label>
            <input v-model="settings.email" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 text-sm" />
          </div>
          <button type="button" class="bg-bronze hover:bg-bronze-light text-ghost font-semibold px-6 py-2.5 rounded-lg transition-all text-sm">
            Save Changes
          </button>
        </form>
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-xl border border-gray-50 p-6">
          <h3 class="font-semibold text-onyx mb-4">Service Times</h3>
          <div class="space-y-3">
            <div v-for="(service, idx) in settings.services" :key="idx" class="flex items-center gap-3">
              <input v-model="service.day" class="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-bronze" />
              <input v-model="service.time" class="w-40 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-bronze" />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl border border-gray-50 p-6">
          <h3 class="font-semibold text-onyx mb-4">Account</h3>
          <button
            @click="handleLogout"
            class="w-full border-2 border-red-200 text-red-500 hover:bg-red-50 font-semibold py-2.5 rounded-lg transition-all text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const settings = ref({
  churchName: 'The Saints Center',
  tagline: 'The Citadel of Revelation and Power',
  location: 'Iba, Lagos State, Nigeria',
  phone: '+234 XXX XXX XXXX',
  email: 'info@thesaintscenter.org',
  services: [
    { day: 'Sunday', time: '8:00 AM - 10:30 AM' },
    { day: 'Wednesday', time: '6:00 PM - 7:30 PM' },
    { day: 'Friday', time: '6:00 PM - 8:00 PM' }
  ]
})

const handleLogout = () => {
  localStorage.removeItem('tsc_token')
  router.push('/auth/login')
}
</script>
