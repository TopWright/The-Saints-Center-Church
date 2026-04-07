<template>
  <div class="min-h-screen flex items-center justify-center bg-[#fafafa] relative overflow-hidden font-sans">
    
    <!-- Premium Rotating Atmosphere -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] animate-bg-rotate">
        <div class="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-[#fdf2e9] rounded-full blur-[120px] opacity-60"></div>
        <div class="absolute bottom-[10%] right-[20%] w-[45%] h-[45%] bg-[#fef7f1] rounded-full blur-[130px] opacity-50"></div>
        <div class="absolute top-[40%] right-[10%] w-[35%] h-[35%] bg-[#fffcf9] rounded-full blur-[100px] opacity-40"></div>
        <div class="absolute bottom-[30%] left-[5%] w-[50%] h-[50%] bg-[#fCf5f0] rounded-full blur-[140px] opacity-40"></div>
      </div>
    </div>

    <!-- Main Auth Container -->
    <div class="relative z-10 w-full px-6 flex justify-center py-12">
      <router-view v-slot="{ Component, route }">
        <transition name="auth-fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>

    <!-- Global Footer Line -->
    <div class="absolute bottom-8 left-0 right-0 text-center z-10">
      <p class="font-sans text-[10px] uppercase tracking-[0.3em] text-[#a0a0a0] font-medium">
        © {{ new Date().getFullYear() }} The Saint's Center Sanctuary. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-fade-enter-active,
.auth-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.auth-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.auth-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}
</style>
