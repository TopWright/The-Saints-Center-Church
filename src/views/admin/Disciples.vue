<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-onyx">Disciples</h1>
        <p class="text-wisteria text-sm">Discipleship tracking and progress</p>
      </div>
      <button class="bg-bronze hover:bg-bronze-light text-ghost font-semibold px-5 py-2.5 rounded-lg transition-all text-sm flex items-center gap-2">
        <i class="pi pi-plus"></i>
        Add Disciple
      </button>
    </div>

    <DataTable :columns="columns" :rows="rows">
      <template #cell-progress="{ value }">
        <div class="flex items-center gap-2">
          <div class="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div class="h-full bg-bronze rounded-full transition-all" :style="{ width: `${value}%` }"></div>
          </div>
          <span class="text-xs text-wisteria">{{ value }}%</span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from '@/components/admin/DataTable.vue'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'mentor', label: 'Mentor' },
  { key: 'started', label: 'Started' },
  { key: 'progress', label: 'Progress' }
]

const rows = [
  { name: 'Adebayo Tunde', mentor: 'Pastor James', started: 'Jan 15, 2026', progress: 75 },
  { name: 'Blessing Okafor', mentor: 'Minister Grace', started: 'Feb 1, 2026', progress: 45 },
  { name: 'Chidi Nnamdi', mentor: 'Bro. David', started: 'Feb 20, 2026', progress: 30 },
  { name: 'Funke Adeyemi', mentor: 'Sis. Ruth', started: 'Mar 5, 2026', progress: 15 }
]
</script>
