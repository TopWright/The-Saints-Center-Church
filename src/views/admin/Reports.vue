<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-onyx">Reports</h1>
      <p class="text-wisteria text-sm">Analytics and ministry reports</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatsCard label="Total Outreaches" :value="52" icon="megaphone" color="bronze" />
      <StatsCard label="Souls Won (Month)" :value="34" icon="heart" color="prussian" />
      <StatsCard label="Active Disciples" :value="18" icon="users" color="green" />
      <StatsCard label="Follow Up Rate" value="87%" icon="chart-bar" color="wisteria" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl border border-gray-50 p-6">
        <h3 class="font-semibold text-onyx mb-4">Monthly Evangelism Summary</h3>
        <div class="space-y-3">
          <div v-for="month in monthlySummary" :key="month.name" class="flex items-center gap-3">
            <span class="text-sm text-wisteria w-12">{{ month.name }}</span>
            <div class="flex-1 h-6 bg-ghost rounded-lg overflow-hidden">
              <div class="h-full bg-gradient-to-r from-prussian to-bronze rounded-lg transition-all duration-500" :style="{ width: `${(month.value / 50) * 100}%` }"></div>
            </div>
            <span class="text-sm font-semibold text-onyx w-8 text-right">{{ month.value }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-50 p-6">
        <h3 class="font-semibold text-onyx mb-4">Growth Metrics</h3>
        <div class="space-y-5">
          <div v-for="metric in metrics" :key="metric.label">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-sm text-wisteria">{{ metric.label }}</span>
              <span class="text-sm font-semibold text-onyx">{{ metric.value }}%</span>
            </div>
            <div class="h-2 bg-ghost rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all duration-500" :class="metric.color" :style="{ width: `${metric.value}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StatsCard from '@/components/admin/StatsCard.vue'

const monthlySummary = [
  { name: 'Jan', value: 28 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 42 },
  { name: 'Apr', value: 18 }
]

const metrics = [
  { label: 'Membership Growth', value: 72, color: 'bg-bronze' },
  { label: 'Follow Up Completion', value: 87, color: 'bg-prussian' },
  { label: 'Discipleship Retention', value: 64, color: 'bg-wisteria' },
  { label: 'Evangelism Activity', value: 91, color: 'bg-green-500' }
]
</script>
