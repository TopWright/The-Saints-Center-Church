<template>
  <div class="bg-[#f8f9fa] rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#0b1221]/10 space-y-8">
    <h3 class="text-2xl font-display font-black text-[#0b1221] tracking-tight">Security Context</h3>

    <div class="space-y-6">
      <!-- 2FA -->
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
          <i class="pi pi-verified text-[#d47a22]"></i>
        </div>
        <div class="space-y-1">
          <p class="text-[14px] font-bold text-[#0b1221]">Two-Factor Auth</p>
          <p class="text-[12px] font-medium text-[#707070]">Enabled via Authenticator app</p>
        </div>
      </div>

      <!-- Password -->
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
          <i class="pi pi-history text-[#d47a22]"></i>
        </div>
        <div class="space-y-1">
          <p class="text-[14px] font-bold text-[#0b1221]">Last Password Change</p>
          <p class="text-[12px] font-medium text-[#707070]">14 days ago</p>
        </div>
      </div>
    </div>

    <button class="w-full bg-white border border-[#f0f2f5] hover:bg-[#f0f2f5] text-[#0b1221] font-sans font-bold text-[13px] py-4 rounded-2xl transition-all duration-300 shadow-sm">
      Manage Security Settings
    </button>
  </div>
</template>

<script setup>
</script>
