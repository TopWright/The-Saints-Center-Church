<template>
  <div class="space-y-10 relative pb-20 max-w-[1200px] mx-auto px-4 sm:px-0">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-start justify-between gap-6">
      <div class="space-y-3 max-w-[600px]">
        <h1 class="font-display text-5xl md:text-6xl text-[#0b1221] leading-[0.9] tracking-tighter">
          My <span class="text-[#0b1221]">Evangelism Logs</span>
        </h1>
        <p class="font-sans text-[15px] text-[#707070] font-medium tracking-tight leading-relaxed">
          A sacred record of your community outreach efforts. Track your journey of faith and every connection made.
        </p>
      </div>

      <div class="flex items-center gap-3">
        <!-- Filter Button -->
        <button class="bg-[#f0f2f5] hover:bg-[#e4e6e9] text-[#0b1221] px-6 py-3.5 rounded-full font-sans font-bold text-[13px] transition-all flex items-center gap-3 border-2 border-[#f0f2f5] hover:border-[#e0e0e0] shadow-sm">
          <i class="pi pi-filter text-xs"></i>
          Filter
        </button>

        <!-- New Report Button -->
        <router-link to="/admin/evangelism/add" class="bg-[#0b1221] hover:bg-black text-white px-8 py-3.5 rounded-full font-sans font-bold text-[13px] shadow-lg shadow-[#0b1221]/20 transition-all active:scale-95 flex items-center gap-3">
          <i class="pi pi-plus text-xs"></i>
          New Entry
        </router-link>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Monthly Impact -->
      <div class="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center border-2 border-[#f0f2f5] shadow-md">
        <div class="relative z-10 max-w-[400px]">
          <p class="text-[10px] font-bold text-[#d47a22] uppercase tracking-[0.2em] mb-4">Monthly Impact</p>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-[#0b1221] mb-4">3,248 Souls Reached</h2>
          <p class="font-sans text-[14px] text-[#707070] leading-relaxed">
            Your highest engagement this quarter, showing a 12% increase from last month.
          </p>
        </div>
        <div class="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
           <i class="pi pi-globe text-[300px]"></i>
        </div>
      </div>

      <!-- User Badge -->
      <div class="bg-[#0b1221] rounded-[40px] p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden shadow-xl">
        <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-10">
          <i class="pi pi-verified text-[#d47a22] text-xl"></i>
        </div>
        <p class="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] mb-3">Status</p>
        <h3 class="font-display text-3xl font-bold mb-6">Faithful<br/>Servant</h3>
        <div class="flex items-center gap-3">
          <span class="px-4 py-1.5 bg-white/10 rounded-full text-[11px] font-bold">Verified Logs</span>
          <span class="px-4 py-1.5 bg-[#d47a22]/20 text-[#d47a22] rounded-full text-[11px] font-bold">Elite</span>
        </div>
      </div>
    </div>

    <!-- Submissions Table -->
    <DataTable 
      title="Recent Submissions"
      :columns="columns"
      :rows="displayedLogs"
    >
      <template #actions>
        <button class="text-[#a0a0a0] hover:text-[#0b1221] flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider transition-colors px-4 py-2 bg-[#f8f9fa] rounded-full border border-[#f0f2f5]">
          <i class="pi pi-download"></i> Export CSV
        </button>
      </template>

      <!-- Date -->
      <template #cell-date="{ row }">
        <div class="flex flex-col">
          <p class="font-sans font-bold text-[#0b1221] text-[13px]">{{ row.date }}</p>
          <p class="font-sans text-[#a0a0a0] text-[11px]">{{ row.time }}</p>
        </div>
      </template>

      <!-- Contacts -->
      <template #cell-contacts="{ value }">
        <span class="font-display text-2xl text-[#0b1221]">{{ value }}</span>
      </template>

      <!-- Counts -->
      <template #cell-results="{ row }">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-[11px] font-bold flex items-center gap-1.5 border border-[#10b981]/20">
            <span class="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
            {{ row.filledCount }} Filled
          </span>
          <span class="px-3 py-1 bg-[#d47a22]/10 text-[#d47a22] rounded-full text-[11px] font-bold flex items-center gap-1.5 border border-[#d47a22]/20">
            <span class="w-1.5 h-1.5 bg-[#d47a22] rounded-full"></span>
            {{ row.healedCount }} Healed
          </span>
        </div>
      </template>

      <!-- Actions -->
      <template #cell-actions="{ row }">
        <div class="flex items-center justify-end gap-2">
          <router-link :to="`/admin/evangelism/${row.id}`" class="w-9 h-9 inline-flex items-center justify-center rounded-full text-[#a0a0a0] hover:bg-[#f0f2f5] hover:text-[#0b1221] transition-all border border-[#f0f2f5] bg-white">
            <i class="pi pi-eye text-[14px]"></i>
          </router-link>
          <button class="w-9 h-9 inline-flex items-center justify-center rounded-full text-[#a0a0a0] hover:bg-[#f0f2f5] hover:text-[#d47a22] transition-all border border-[#f0f2f5] bg-white">
            <i class="pi pi-pencil text-[14px]"></i>
          </button>
        </div>
      </template>

      <!-- Mobile Card Content -->
      <template #card="{ row }">
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-[11px] font-bold text-[#0b1221]">Submission Date</p>
              <p class="text-[13px] text-[#707070]">{{ row.date }} at {{ row.time }}</p>
            </div>
            <div class="text-right">
              <p class="text-[11px] font-bold text-[#0b1221]">Contacts Reached</p>
              <p class="text-2xl font-display text-[#d47a22]">{{ row.contacts }}</p>
            </div>
          </div>
          <div class="pt-4 border-t-2 border-[#f0f2f5] flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="px-2 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-[10px] font-bold border border-[#10b981]/20">
                {{ row.filledCount }} Filled
              </span>
              <span class="px-2 py-1 bg-[#d47a22]/10 text-[#d47a22] rounded-full text-[10px] font-bold border border-[#d47a22]/20">
                {{ row.healedCount }} Healed
              </span>
            </div>
            <div class="flex gap-2">
              <router-link :to="`/admin/evangelism/${row.id}`" class="w-8 h-8 rounded-full border border-[#f0f2f5] flex items-center justify-center text-[#a0a0a0] shadow-sm">
                <i class="pi pi-eye text-xs"></i>
              </router-link>
              <button class="w-8 h-8 rounded-full border border-[#f0f2f5] flex items-center justify-center text-[#a0a0a0] shadow-sm">
                <i class="pi pi-pencil text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="px-8 py-6 border-t-2 border-[#f0f2f5] bg-[#f8f9fa]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span class="text-[12px] font-bold text-[#707070] uppercase tracking-widest">Showing 4 of 1,240 records</span>
          <div class="flex items-center gap-2">
            <button class="w-9 h-9 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center text-[#a0a0a0] hover:text-[#0b1221] hover:border-[#0b1221] transition-colors bg-white shadow-sm">
              <i class="pi pi-angle-left text-xs"></i>
            </button>
            <button class="w-9 h-9 rounded-full bg-[#0b1221] text-white flex items-center justify-center font-bold text-[12px] shadow-lg shadow-[#0b1221]/20">1</button>
            <button class="w-9 h-9 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center text-[#a0a0a0] hover:text-[#0b1221] hover:border-[#0b1221] transition-colors bg-white shadow-sm">
              <i class="pi pi-angle-right text-xs"></i>
            </button>
          </div>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { EVANGELISM_LOGS } from '@/constants/evangelism'
import DataTable from '@/components/admin/DataTable.vue'

const displayedLogs = ref([])

const columns = [
  { key: 'date', label: 'Submission Date' },
  { key: 'contacts', label: 'Contacts Reached', class: 'text-center' },
  { key: 'results', label: 'Spiritual Fruit' },
  { key: 'actions', label: '', class: 'text-right' }
]

onMounted(() => {
  const localLogs = JSON.parse(localStorage.getItem('evangelism_logs') || '[]')
  // Merge mock data with local storage data
  displayedLogs.value = [...localLogs, ...EVANGELISM_LOGS]
})
</script>
