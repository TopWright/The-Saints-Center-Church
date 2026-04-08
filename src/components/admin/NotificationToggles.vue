<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-[#f8f9fa] rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#0b1221]/10 flex items-center justify-between group hover:border-[#d47a22]/30 transition-all duration-300">
      <div class="space-y-1">
        <h4 class="text-[16px] font-display font-black text-[#0b1221]">Push Notifications</h4>
        <p class="text-[12px] font-medium text-[#707070]">Immediate alerts for event updates</p>
      </div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked class="sr-only peer">
        <div class="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#d47a22]"></div>
      </label>
    </div>

    <div class="bg-[#f8f9fa] rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#f0f2f5] flex items-center justify-between group hover:border-[#d47a22]/30 transition-all duration-300">
      <div class="space-y-1">
        <h4 class="text-[16px] font-display font-black text-[#0b1221]">Weekly Digest</h4>
        <p class="text-[12px] font-medium text-[#707070]">Ministry summary report every Sunday</p>
      </div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer">
        <div class="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#d47a22]"></div>
      </label>
    </div>
  </div>
</template>

<script setup>
</script>
