<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-50">
    <div class="p-6">
      <div class="flex items-start justify-between mb-4">
        <div class="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center">
          <i class="pi pi-calendar text-bronze text-xl"></i>
        </div>
        <span
          class="text-xs font-semibold px-3 py-1 rounded-full"
          :class="programme.upcoming ? 'bg-bronze/10 text-bronze' : 'bg-wisteria/10 text-wisteria'"
        >
          {{ programme.upcoming ? 'Upcoming' : 'Completed' }}
        </span>
      </div>
      <h3 class="font-display font-bold text-lg text-onyx mb-2 group-hover:text-prussian transition-colors">{{ programme.title }}</h3>
      <p class="text-wisteria text-sm mb-4 line-clamp-2">{{ programme.description }}</p>
      <div class="flex items-center gap-4 text-xs text-wisteria">
        <span class="flex items-center gap-1.5">
          <i class="pi pi-clock"></i>
          {{ programme.time }}
        </span>
        <span class="flex items-center gap-1.5">
          <i class="pi pi-map-marker"></i>
          {{ programme.venue }}
        </span>
      </div>
      <div class="mt-4 pt-4 border-t border-gray-50">
        <span class="text-prussian text-sm font-semibold flex items-center gap-2 group-hover:text-bronze transition-colors">
          {{ programme.date }}
          <i class="pi pi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  programme: { type: Object, required: true }
})
</script>
