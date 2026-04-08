<template>
  <div class="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#f0f2f5] h-full flex flex-col">
    <div class="flex items-center justify-between mb-8">
      <div class="space-y-1">
        <h3 class="font-display text-2xl font-black text-[#0b1221] tracking-tight">Weekly Growth Trend</h3>
        <p class="text-[12px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0]">Comparing evangelism reach vs. conversions</p>
      </div>
      
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-6 border-r border-[#f0f2f5] pr-6 mr-6">
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-[#0b1221]"></div>
            <span class="text-[10px] font-black text-[#0b1221] uppercase tracking-[0.15em]">Reached</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-[#d47a22]"></div>
            <span class="text-[10px] font-black text-[#a0a0a0] uppercase tracking-[0.15em]">Saved</span>
          </div>
        </div>
        <ExportButton report-name="Weekly Growth Trend" />
      </div>
    </div>

    <div class="flex-1 min-h-[300px] relative">
      <Line
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ExportButton from './ExportButton.vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const chartData = computed(() => ({
  labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  datasets: [
    {
      label: 'Reached',
      data: [65, 78, 48, 82, 56, 94, 72],
      borderColor: '#0b1221',
      backgroundColor: 'rgba(11, 18, 33, 0.05)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      borderWidth: 4
    },
    {
      label: 'Saved',
      data: [32, 45, 28, 52, 38, 64, 48],
      borderColor: '#d47a22',
      backgroundColor: 'rgba(212, 122, 34, 0.05)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      borderWidth: 4
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#0b1221',
      titleFont: { family: 'inherit', size: 13, weight: 'bold' },
      bodyFont: { family: 'inherit', size: 12 },
      padding: 12,
      cornerRadius: 12,
      displayColors: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 10,
          weight: 'bold'
        },
        color: '#a0a0a0'
      }
    },
    y: {
      grid: {
        color: '#f0f2f5',
        drawBorder: false
      },
      ticks: {
        padding: 10,
        font: {
          size: 10,
          weight: 'bold'
        },
        color: '#a0a0a0'
      }
    }
  }
}
</script>
