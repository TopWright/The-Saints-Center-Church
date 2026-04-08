<template>
  <div class="space-y-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Main Column -->
      <div class="lg:col-span-8 space-y-8">
        <ProfileInfoForm />
        <NotificationToggles />
      </div>

      <!-- Sidebar Column -->
      <div class="lg:col-span-4 space-y-8">
        <ProfileStrengthCard />
        <SecurityContextCard />
        
        <!-- Motivational Quote Card (Image 3) -->
        <div class="bg-[#fcfaf9] rounded-[48px] overflow-hidden relative group shadow-sm border border-[#f0f2f5]">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&h=600&auto=format&fit=crop" 
            alt="Quote" 
            class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
          >
          <div class="absolute inset-0 bg-linear-to-t from-[#0b1221] via-transparent to-transparent flex flex-col justify-end p-10">
            <p class="text-white text-2xl font-display font-black leading-tight mb-4 group-hover:scale-105 transition-transform origin-bottom-left">
              "Wisdom is the principal thing; therefore get wisdom."
            </p>
            <p class="text-white/60 text-[10px] uppercase font-bold tracking-[0.3em]">Proverbs 4:7</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileInfoForm from './ProfileInfoForm.vue'
import NotificationToggles from './NotificationToggles.vue'
import ProfileStrengthCard from './ProfileStrengthCard.vue'
import SecurityContextCard from './SecurityContextCard.vue'
</script>
