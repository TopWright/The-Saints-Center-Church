<script setup>
// Props/Emits can be added for dynamic data
</script>

<template>
  <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#0b1221]/10 space-y-8">
    <div class="flex flex-col md:flex-row items-center gap-8">
      <!-- Avatar Section -->
      <div class="relative group">
        <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-[#fff5eb] shadow-md group-hover:scale-105 transition-transform duration-300">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop" alt="Profile" class="w-full h-full object-cover" />
        </div>
        <button class="absolute -bottom-1 -right-1 w-9 h-9 bg-[#d47a22] rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform">
          <i class="pi pi-pencil text-[12px]"></i>
        </button>
      </div>

      <!-- Inputs Section -->
      <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <div class="space-y-1.5">
          <label class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-widest px-1">Full Name</label>
          <input 
            type="text" 
            value="Dr. Elena Vangua"
            class="w-full bg-[#f0f2f5] border-none rounded-2xl py-3.5 px-6 text-[14px] font-bold text-[#0b1221] focus:ring-2 focus:ring-[#0b1221]/10 transition-all"
          />
        </div>
        <div class="space-y-1.5">
          <label class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-widest px-1">Email Address</label>
          <input 
            type="email" 
            value="elena@luminous"
            class="w-full bg-[#f0f2f5] border-none rounded-2xl py-3.5 px-6 text-[14px] font-bold text-[#0b1221] focus:ring-2 focus:ring-[#0b1221]/10 transition-all opacity-60 cursor-not-allowed"
            readonly
          />
        </div>
      </div>
    </div>

    <!-- Biography -->
    <div class="space-y-1.5">
      <label class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-widest px-1">Biography</label>
      <textarea 
        rows="4"
        class="w-full bg-[#f0f2f5] border-none rounded-[32px] py-6 px-8 text-[14px] font-medium text-[#707070] leading-relaxed focus:ring-2 focus:ring-[#0b1221]/10 transition-all resize-none"
        placeholder="Tell us about yourself..."
      >Dedicated to spiritual growth and administrative excellence. Serving the Sanctuary since 2018 with a focus on leadership development.</textarea>
    </div>

    <div class="flex justify-end pt-4">
      <button class="bg-[#0b1221] hover:bg-[#1a253a] text-white px-10 py-4 rounded-[40px] font-display font-black text-[15px] shadow-xl shadow-[#0b1221]/20 transition-all transform hover:-translate-y-1 active:scale-95">
        Save Changes
      </button>
    </div>
  </div>
</template>
