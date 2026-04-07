<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
    <div class="h-48 bg-linear-to-br from-prussian to-prussian-light relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
      <div class="absolute bottom-4 left-4 right-4">
        <span class="bg-bronze text-ghost text-xs font-semibold px-3 py-1 rounded-full">{{ sermon.category }}</span>
      </div>
      <div class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <i class="pi pi-play-circle text-ghost text-lg"></i>
      </div>
    </div>
    <div class="p-5">
      <h3 class="font-display font-bold text-lg text-onyx mb-2 group-hover:text-prussian transition-colors">{{ sermon.title }}</h3>
      <p class="text-wisteria text-sm mb-3 line-clamp-2">{{ sermon.excerpt }}</p>
      <div class="flex items-center justify-between text-xs text-wisteria">
        <span class="flex items-center gap-1.5">
          <i class="pi pi-user"></i>
          {{ sermon.preacher }}
        </span>
        <span class="flex items-center gap-1.5">
          <i class="pi pi-calendar"></i>
          {{ sermon.date }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sermon: { type: Object, required: true }
})
</script>
