<template>
  <div class="bg-white rounded-[40px] shadow-sm border-2 border-[#f0f2f5] overflow-hidden">
    <div v-if="title" class="p-8 border-b-2 border-[#f0f2f5] flex items-center justify-between">
      <h3 class="font-display text-2xl font-bold text-[#0b1221]">{{ title }}</h3>
      <slot name="actions" />
    </div>

    <!-- Desktop View -->
    <div class="hidden lg:block overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-[#f8f9fa]/50 text-[10px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0]">
            <th
              v-for="col in columns"
              :key="col.key"
              class="py-5 px-8 font-bold"
              :class="col.class"
            >
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y-2 divide-[#f0f2f5]">
          <tr
            v-for="(row, idx) in rows"
            :key="idx"
            class="hover:bg-[#f8f9fa]/50 transition-colors group"
          >
            <td 
              v-for="col in columns" 
              :key="col.key" 
              class="py-6 px-8 text-[#0b1221]"
              :class="col.class"
            >
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                <span class="font-sans text-[14px]">{{ row[col.key] }}</span>
              </slot>
            </td>
          </tr>
          <tr v-if="!rows.length">
            <td :colspan="columns.length" class="px-8 py-20 text-center">
              <p class="font-sans text-[#a0a0a0] italic">No records found matching your criteria.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile View (Cards) -->
    <div class="lg:hidden p-4 space-y-4 bg-[#f8f9fa]/30">
      <div 
        v-for="(row, idx) in rows" 
        :key="idx"
        class="bg-white rounded-3xl p-6 border-2 border-[#f0f2f5] shadow-sm space-y-4"
      >
        <slot name="card" :row="row">
          <div v-for="col in columns" :key="col.key" class="flex justify-between items-center gap-4">
            <span class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-widest">{{ col.label }}</span>
            <div class="text-[13px] font-bold text-[#0b1221]">
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                {{ row[col.key] }}
              </slot>
            </div>
          </div>
        </slot>
      </div>
      <div v-if="!rows.length" class="py-10 text-center">
        <p class="font-sans text-[#a0a0a0] italic">No records found.</p>
      </div>
    </div>

    <!-- Optional Footer Slotted -->
    <slot name="footer" />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  columns: { type: Array, required: true },
  rows: { type: Array, default: () => [] }
})
</script>
