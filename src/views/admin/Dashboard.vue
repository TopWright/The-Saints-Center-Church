<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-onyx">Dashboard</h1>
      <p class="text-wisteria text-sm">Overview of church activities</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatsCard label="Total Members" :value="256" icon="users" color="prussian" :trend="12" />
      <StatsCard label="New Converts" :value="34" icon="heart" color="bronze" :trend="8" />
      <StatsCard label="Follow Ups" :value="18" icon="phone" color="wisteria" :trend="-3" />
      <StatsCard label="Evangelism Visits" :value="142" icon="megaphone" color="green" :trend="24" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <DataTable title="Recent Follow Ups" :columns="followUpColumns" :rows="followUpRows">
        <template #cell-status="{ value }">
          <span
            class="text-xs font-semibold px-2.5 py-1 rounded-full"
            :class="value === 'Active' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'"
          >
            {{ value }}
          </span>
        </template>
      </DataTable>

      <DataTable title="Recent Converts" :columns="convertColumns" :rows="convertRows">
        <template #cell-date="{ value }">
          <span class="text-wisteria text-xs">{{ value }}</span>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import StatsCard from '@/components/admin/StatsCard.vue'
import DataTable from '@/components/admin/DataTable.vue'

const followUpColumns = [
  { key: 'name', label: 'Name' },
  { key: 'phone', label: 'Phone' },
  { key: 'status', label: 'Status' }
]

const followUpRows = [
  { name: 'Adebayo Tunde', phone: '+234 801 XXX XXXX', status: 'Active' },
  { name: 'Blessing Okafor', phone: '+234 802 XXX XXXX', status: 'Pending' },
  { name: 'Chidi Nnamdi', phone: '+234 803 XXX XXXX', status: 'Active' },
  { name: 'Funke Adeyemi', phone: '+234 805 XXX XXXX', status: 'Active' }
]

const convertColumns = [
  { key: 'name', label: 'Name' },
  { key: 'date', label: 'Date' },
  { key: 'assignedTo', label: 'Assigned To' }
]

const convertRows = [
  { name: 'Ibrahim Musa', date: 'Mar 30, 2026', assignedTo: 'Bro. David' },
  { name: 'Amara Eze', date: 'Mar 28, 2026', assignedTo: 'Sis. Ruth' },
  { name: 'Tola Bakare', date: 'Mar 25, 2026', assignedTo: 'Bro. Samuel' }
]
</script>
