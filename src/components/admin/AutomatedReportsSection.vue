<template>
  <div class="bg-white rounded-[40px] p-8 lg:p-14 border border-[#0b1221]/10 space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#d47a22]">
        <i class="pi pi-sync text-2xl animate-spin-slow"></i>
      </div>
      <h3 class="text-3xl font-display font-black text-[#0b1221] tracking-tight">Automated Report Assignment</h3>
    </div>

    <div class="space-y-6">
      <div v-for="report in reports" :key="report.title" class="bg-[#fcfaf9] rounded-[32px] p-8 flex items-center justify-between group hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-transparent hover:border-[#f0f2f5]">
        <div class="flex items-start gap-6">
          <div class="h-12 w-1.5 rounded-full" :style="{ backgroundColor: report.color }"></div>
          <div class="space-y-1">
            <h4 class="text-[18px] font-display font-black text-[#0b1221]">{{ report.title }}</h4>
            <p class="text-[14px] font-medium text-[#707070]">Assign to: {{ report.assignees }}</p>
          </div>
        </div>
        <div class="flex items-center gap-8">
          <div class="hidden sm:block text-right">
            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#a0a0a0] mb-1">Frequency</p>
            <p class="text-[13px] font-bold text-[#0b1221]">{{ report.frequency }}</p>
          </div>
          <button class="w-10 h-10 rounded-full hover:bg-white transition-all flex items-center justify-center text-[#a0a0a0] hover:text-[#0b1221]">
            <i class="pi pi-pencil"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reports = [
  { title: 'Monthly Tithe Analytics', assignees: 'Pastor, Financial Secretary', frequency: 'MONTHLY', color: '#d47a22' },
  { title: 'Weekly Attendance Metrics', assignees: 'All Leaders, Admin Portal', frequency: 'WEEKLY', color: '#0b1221' },
  { title: 'Growth & Discipleship Progress', assignees: 'Discipleship Coordinator', frequency: 'QUARTERLY', color: '#d47a22' }
]
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
