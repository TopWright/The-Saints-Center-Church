<template>
  <div class="min-h-screen flex items-center justify-center bg-prussian relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-bronze blur-3xl"></div>
      <div class="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-wisteria blur-3xl"></div>
    </div>
    <div class="relative z-10 w-full max-w-md px-6">
      <div class="text-center mb-8">
        <img src="/logo.png" alt="The Saints Center" class="w-20 h-20 mx-auto mb-4 object-contain" />
        <h1 class="font-display text-2xl font-bold text-ghost">The Saints Center</h1>
        <p class="text-wisteria text-sm mt-1">The Citadel of Revelation and Power</p>
      </div>
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
