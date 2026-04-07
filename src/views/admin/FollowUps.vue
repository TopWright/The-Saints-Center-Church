<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-onyx">Follow Ups</h1>
        <p class="text-wisteria text-sm">Manage new convert follow-up activities</p>
      </div>
      <button class="bg-bronze hover:bg-bronze-light text-ghost font-semibold px-5 py-2.5 rounded-lg transition-all text-sm flex items-center gap-2">
        <i class="pi pi-plus"></i>
        Add Follow Up
      </button>
    </div>

    <DataTable :columns="columns" :rows="rows">
      <template #cell-stage="{ value }">
        <span
          class="text-xs font-semibold px-2.5 py-1 rounded-full"
          :class="{ 'bg-green-50 text-green-600': value === 'Established', 'bg-amber-50 text-amber-600': value === 'Growing', 'bg-blue-50 text-blue-600': value === 'New' }"
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
  { key: 'name', label: 'Name' },
  { key: 'phone', label: 'Phone' },
  { key: 'assignedTo', label: 'Assigned To' },
  { key: 'lastContact', label: 'Last Contact' },
  { key: 'stage', label: 'Stage' }
]

const rows = [
  { name: 'Ibrahim Musa', phone: '+234 801 XXX XXXX', assignedTo: 'Bro. David', lastContact: 'Mar 30', stage: 'New' },
  { name: 'Amara Eze', phone: '+234 802 XXX XXXX', assignedTo: 'Sis. Ruth', lastContact: 'Mar 29', stage: 'Growing' },
  { name: 'Tola Bakare', phone: '+234 805 XXX XXXX', assignedTo: 'Bro. Samuel', lastContact: 'Mar 27', stage: 'Established' }
]
</script>
