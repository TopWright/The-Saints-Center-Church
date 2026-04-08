<template>
  <div class="space-y-10">
    <div class="flex items-center gap-4">
      <div class="h-[2px] w-12 bg-[#d47a22]"></div>
      <h3 class="text-3xl font-display font-black text-[#0b1221] tracking-tight">Global Reach</h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div v-for="social in socialLinks" :key="social.platform" 
        class="bg-[#f0f2f5]/40 rounded-[32px] p-6 flex items-center gap-6 group hover:bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer border border-[#0b1221]/15"
      >
        <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[20px] shadow-sm transform group-hover:scale-110 transition-transform duration-500">
          <i :class="social.icon"></i>
        </div>
        <div class="min-w-0">
          <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#a0a0a0] mb-0.5">{{ social.platform }}</p>
          <p class="text-[14px] font-bold text-[#0b1221] truncate">{{ social.handle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const socialLinks = [
  { platform: 'WhatsApp', handle: '+234 810 000 0000', icon: 'pi pi-whatsapp' },
  { platform: 'X (Twitter)', handle: '@thesaintscenter', icon: 'pi pi-twitter' },
  { platform: 'Facebook', handle: 'thesaintscenter.offic', icon: 'pi pi-facebook' },
  { platform: 'Instagram', handle: '@the_saints_center', icon: 'pi pi-instagram' }
]
</script>
