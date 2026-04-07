<template>
  <div class="bg-white rounded-xl border border-gray-50 overflow-hidden">
    <div v-if="title" class="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
      <h3 class="font-semibold text-onyx">{{ title }}</h3>
      <slot name="actions" />
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-ghost">
            <th
              v-for="col in columns"
              :key="col.key"
              class="text-left px-5 py-3 text-xs font-semibold text-wisteria uppercase tracking-wider"
            >
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, idx) in rows"
            :key="idx"
            class="border-t border-gray-50 hover:bg-ghost/50 transition-colors"
          >
            <td v-for="col in columns" :key="col.key" class="px-5 py-3.5 text-onyx">
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
          <tr v-if="!rows.length">
            <td :colspan="columns.length" class="px-5 py-10 text-center text-wisteria">
              No data available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  columns: { type: Array, required: true },
  rows: { type: Array, default: () => [] }
})
</script>
