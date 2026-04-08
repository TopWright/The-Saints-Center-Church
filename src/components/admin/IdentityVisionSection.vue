<template>
  <div class="space-y-12">
    <!-- Action Buttons Header -->
    <div class="flex flex-col sm:flex-row items-center justify-end gap-4 px-4 lg:px-0">
      <button class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#eeebe9] text-[#0b1221] font-sans font-bold text-[14px] hover:bg-[#e4e1df] transition-colors">
        Discard Changes
      </button>
      <button class="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#0b1221] text-white font-sans font-bold text-[14px] shadow-xl shadow-[#0b1221]/20 transform hover:-translate-y-1 active:scale-95 transition-all">
        Save Sanctuary Profile
      </button>
    </div>

    <!-- Identity Form -->
    <div class="bg-[#fcfaf9] rounded-[48px] p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#0b1221]/15 relative overflow-hidden">
      <!-- Decor icon -->
      <div class="absolute right-10 top-10 opacity-5">
        <i class="pi pi-briefcase text-[120px]"></i>
      </div>

      <div class="max-w-3xl space-y-12 relative z-10">
        <div class="space-y-8">
          <div class="flex items-center gap-4">
            <div class="h-[2px] w-12 bg-[#d47a22]"></div>
            <h3 class="text-3xl font-display font-black text-[#0b1221] tracking-tight">Identity & Vision</h3>
          </div>

          <div class="grid grid-cols-1 gap-10">
            <div class="space-y-3">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-[#a0a0a0]">Church Name</label>
              <input 
                type="text" 
                value="The Saint's Center"
                class="w-full bg-white border-2 border-transparent rounded-[32px] py-6 px-10 text-2xl font-display font-black text-[#0b1221] shadow-sm focus:border-[#d47a22]/30 focus:ring-0 transition-all outline-none"
              />
            </div>

            <div class="space-y-3">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-[#a0a0a0]">Vision Tagline</label>
              <input 
                type="text" 
                value="The citadel of revelation and power"
                class="w-full bg-white border-2 border-transparent rounded-[32px] py-6 px-10 text-lg font-display font-bold text-[#707070] italic shadow-sm focus:border-[#d47a22]/30 focus:ring-0 transition-all outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
