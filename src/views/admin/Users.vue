<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-onyx">Users</h1>
        <p class="text-wisteria text-sm">Manage system users and roles</p>
      </div>
      <button class="bg-bronze hover:bg-bronze-light text-ghost font-semibold px-5 py-2.5 rounded-lg transition-all text-sm flex items-center gap-2">
        <i class="pi pi-user-plus"></i>
        Add User
      </button>
    </div>

    <DataTable :columns="columns" :rows="rows">
      <template #cell-role="{ value }">
        <span
          class="text-xs font-semibold px-2.5 py-1 rounded-full"
          :class="{ 'bg-bronze/10 text-bronze': value === 'Admin', 'bg-prussian/10 text-prussian': value === 'Worker', 'bg-wisteria/10 text-wisteria': value === 'Member' }"
        >
          {{ value }}
        </span>
      </template>
      <template #cell-active="{ value }">
        <span class="w-2 h-2 rounded-full inline-block mr-1.5" :class="value ? 'bg-green-500' : 'bg-gray-300'"></span>
        {{ value ? 'Active' : 'Inactive' }}
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from '@/components/admin/DataTable.vue'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'active', label: 'Status' }
]

const rows = [
  { name: 'Pastor James', email: 'pastor@tsc.org', role: 'Admin', active: true },
  { name: 'Minister Grace', email: 'grace@tsc.org', role: 'Admin', active: true },
  { name: 'Bro. David', email: 'david@tsc.org', role: 'Worker', active: true },
  { name: 'Sis. Ruth', email: 'ruth@tsc.org', role: 'Worker', active: true },
  { name: 'Bro. Samuel', email: 'samuel@tsc.org', role: 'Worker', active: false }
]
</script>
