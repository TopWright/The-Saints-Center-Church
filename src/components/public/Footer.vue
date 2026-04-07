<script setup>
const serviceTimes = [
  { day: 'Sundays', time: '7:00 AM, 9:30 AM, 12:00 PM', icon: 'pi-calendar' },
  { day: 'Wednesdays', time: '6:00 PM', icon: 'pi-clock' }
]

const communityLinks = [
  { name: 'Sermons', to: '/sermons', icon: 'pi-video' },
  { name: 'Programmes', to: '/programmes', icon: 'pi-ticket' },
  { name: 'Privacy Policy', to: '#', icon: 'pi-shield' },
  { name: 'Terms of Service', to: '#', icon: 'pi-file' }
]

const connectLinks = [
  { name: 'WhatsApp', icon: 'pi-whatsapp', to: '#' },
  { name: 'Instagram', icon: 'pi-instagram', to: '#' },
  { name: 'Facebook', icon: 'pi-facebook', to: '#' },
  { name: 'Twitter (X)', icon: 'pi-twitter', to: '#' }
]
</script>

<template>
  <footer class="bg-[#0b1221] text-white pt-24 pb-12 rounded-t-[40px] relative overflow-hidden">
    <!-- Subtle glow behind footer -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
      
      <!-- Brand column -->
      <div class="lg:col-span-4 flex flex-col">
        <img src="/Logo-black.png" alt="The Saints Center" class="h-[84px] w-auto mb-5 object-contain object-left pointer-events-none select-none" />
        <p class="font-sans text-[#a0a0a0] text-[15px] leading-relaxed max-w-[300px] font-normal mb-auto">
          "A digital sanctuary for the modern believer. Built for depth, dedicated to truth in the master's name."
          <br /><br />
          <span class="text-[#d47a22] font-semibold italic drop-shadow-sm">– Habakkuk 2:14</span>
        </p>
      </div>

      <!-- Service Times -->
      <div class="lg:col-span-3 lg:col-start-6">
        <h4 class="font-sans font-bold text-[#d47a22] text-[13px] mb-6 tracking-widest uppercase flex items-center gap-2">
          <i class="pi pi-calendar-times text-[10px]"></i>
          Service Times
        </h4>
        <ul class="space-y-5">
          <li v-for="service in serviceTimes" :key="service.day" class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-opacity">
            <i :class="['pi', service.icon, 'text-[#d47a22] text-[11px] mt-1 relative top-[2px]']"></i>
            <div class="flex flex-col">
              <span class="font-sans text-white text-[14px] font-bold mb-0.5 tracking-wide">{{ service.day }}</span>
              <span class="font-sans text-[#a0a0a0] text-[13px] font-normal">{{ service.time }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Community -->
      <div class="lg:col-span-2 lg:col-start-9 w-full">
        <h4 class="font-sans font-bold text-[#d47a22] text-[13px] mb-6 tracking-widest uppercase flex items-center gap-2">
          <i class="pi pi-users text-[10px]"></i>
          Community
        </h4>
        <ul class="space-y-4">
          <li v-for="link in communityLinks" :key="link.name">
            <router-link :to="link.to" class="font-sans text-[14px] text-[#a0a0a0] font-normal hover:text-white transition-colors group flex items-center gap-2">
              <i :class="['pi', link.icon, 'text-[#d47a22] text-[10px] opacity-70 group-hover:opacity-100 transition-opacity']"></i>
              <span class="relative">
                {{ link.name }}
                <span class="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Connect (Merged Icons + Text) -->
      <div class="lg:col-span-2 lg:col-start-11 w-full pl-0 lg:pl-4">
        <h4 class="font-sans font-bold text-[#d47a22] text-[13px] mb-6 tracking-widest uppercase flex items-center gap-2">
          <i class="pi pi-link text-[10px]"></i>
          Connect
        </h4>
        <ul class="space-y-4">
          <li v-for="link in connectLinks" :key="link.name">
            <a :href="link.to" class="font-sans text-[14px] text-[#a0a0a0] font-normal hover:text-white transition-colors group flex items-center gap-3">
              <div class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:bg-[#d47a22] group-hover:border-[#d47a22] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                 <i :class="['pi', link.icon, 'text-[11px]']"></i>
              </div>
              <span class="relative">
                {{ link.name }}
              </span>
            </a>
          </li>
        </ul>
      </div>

    </div>
    
    <!-- Centralized Copyright -->
    <div class="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 relative z-10 flex flex-col items-center text-center">
       <p class="font-sans text-[#808080] text-[12px] font-light mb-2">
         &copy; {{ new Date().getFullYear() }} The Saints Center. All rights reserved.
       </p>
       <p class="font-sans text-[#555555] text-[10px] uppercase tracking-[0.4em] font-bold">
         Built for the master's use
       </p>
    </div>
  </footer>
</template>
