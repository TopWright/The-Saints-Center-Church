<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-onyx">Evangelism</h1>
        <p class="text-wisteria text-sm">Track outreach activities and visits</p>
      </div>
      <button class="bg-bronze hover:bg-bronze-light text-ghost font-semibold px-5 py-2.5 rounded-lg transition-all text-sm flex items-center gap-2">
        <i class="pi pi-plus"></i>
        New Record
      </button>
    </div>

    <DataTable :columns="columns" :rows="rows">
      <template #cell-status="{ value }">
        <span
          class="text-xs font-semibold px-2.5 py-1 rounded-full"
          :class="{ 'bg-green-50 text-green-600': value === 'Completed', 'bg-amber-50 text-amber-600': value === 'In Progress', 'bg-blue-50 text-blue-600': value === 'Planned' }"
        >
          {{ value }}
        </span>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from '@/components/admin/DataTable.vue'

const columns = [
  { key: 'location', label: 'Location' },
  { key: 'date', label: 'Date' },
  { key: 'team', label: 'Team Lead' },
  { key: 'souls', label: 'Souls Won' },
  { key: 'status', label: 'Status' }
]

const rows = [
  { location: 'Iba Market', date: 'Mar 30, 2026', team: 'Bro. David', souls: 5, status: 'Completed' },
  { location: 'Ojo Road', date: 'Mar 28, 2026', team: 'Sis. Ruth', souls: 3, status: 'Completed' },
  { location: 'Iyana Iba', date: 'Apr 5, 2026', team: 'Bro. Samuel', souls: 0, status: 'Planned' },
  { location: 'Igando Junction', date: 'Apr 2, 2026', team: 'Sis. Grace', souls: 7, status: 'In Progress' }
]
</script>
