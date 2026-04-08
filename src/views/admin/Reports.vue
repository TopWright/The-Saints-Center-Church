<script setup>
import ReportStatCard from '@/components/admin/ReportStatCard.vue'
import WeeklyGrowthChart from '@/components/admin/WeeklyGrowthChart.vue'
import TeamEffortCard from '@/components/admin/TeamEffortCard.vue'
import ReportSection from '@/components/admin/ReportSection.vue'
import ExportButton from '@/components/admin/ExportButton.vue'
import DataTable from '@/components/admin/DataTable.vue'

const evangelismColumns = [
  { key: 'date', label: 'Date' },
  { key: 'minister', label: 'Minister' },
  { key: 'location', label: 'Location' },
  { key: 'preached', label: 'Preached', class: 'text-center' },
  { key: 'decisions', label: 'Decisions', class: 'text-center' },
  { key: 'healings', label: 'Healings', class: 'text-center' }
]

const evangelismRows = [
  { date: 'Oct 27, 2023', minister: 'James Wilson', location: 'Central Park North', preached: 24, decisions: 8, healings: 2 },
  { date: 'Oct 26, 2023', minister: 'Mary Adams', location: 'Starlight Plaza', preached: 12, decisions: 4, healings: 0 },
  { date: 'Oct 25, 2023', minister: 'Sarah Kim', location: 'East District Mall', preached: 31, decisions: 11, healings: 5 }
]

const followUpColumns = [
  { key: 'contactName', label: 'Contact Name' },
  { key: 'workerAssigned', label: 'Worker Assigned' },
  { key: 'sessionType', label: 'Session Type' },
  { key: 'status', label: 'Status' },
  { key: 'nextStep', label: 'Next Step' }
]

const followUpRows = [
  { contactName: 'John Doe', workerAssigned: 'Pastor Samuel', sessionType: 'Discipleship 101', status: 'COMPLETED', nextStep: 'Assigned to Cell Group' },
  { contactName: 'Jane Smith', workerAssigned: 'Mary Adams', sessionType: 'Home Visit', status: 'IN PROGRESS', nextStep: 'Water Baptism Scheduling' },
  { contactName: 'Robert Brown', workerAssigned: 'Sarah Kim', sessionType: 'Counseling', status: 'SCHEDULED', nextStep: 'Initial Welcome Call' }
]
</script>

<template>
  <div class="space-y-12 pb-20">
    <!-- Header Section -->
    <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4">
      <div class="space-y-2 relative">
        <!-- Watermark Background -->
        <h2 class="absolute -top-12 left-0 text-[100px] font-display font-black text-[#0b1221]/5 leading-none select-none tracking-tighter z-0">Reporting</h2>
        
        <h1 class="text-[52px] font-display font-black text-[#0b1221] leading-[0.9] tracking-tighter relative z-10">
          Ministry Reporting
        </h1>
        <p class="text-[14px] font-sans font-medium text-[#707070] tracking-tight relative z-10">
          Tracking the fruit of our labor in the kingdom.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-4 bg-white p-2 rounded-[24px] shadow-sm border border-[#f0f2f5]">
        <div class="px-5 py-2 border-r border-[#f0f2f5]">
          <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest mb-0.5">Date Range</p>
          <p class="text-[13px] font-bold text-[#0b1221]">This Week (Oct 22 - Oct 29)</p>
        </div>
        <div class="px-5 py-2 border-r border-[#f0f2f5]">
          <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest mb-0.5">Role Filter</p>
          <div class="flex items-center gap-2">
            <p class="text-[13px] font-bold text-[#0b1221]">All Roles</p>
            <i class="pi pi-chevron-down text-[10px]"></i>
          </div>
        </div>
        <div class="px-5 py-2 border-r border-[#f0f2f5]">
          <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest mb-0.5">Assignee</p>
          <p class="text-[13px] font-bold text-[#0b1221]">All Individuals</p>
        </div>
        <div class="pl-4 pr-2">
          <ExportButton report-name="Global Ministry Report" />
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
      <ReportStatCard 
        label="Preached" 
        value="142" 
        icon="megaphone" 
        accent-color="#0b1221"
      />
      <ReportStatCard 
        label="Holy Spirit Filled" 
        value="58" 
        icon="sun" 
        :trend="12"
        accent-color="#d47a22"
      />
      <ReportStatCard 
        label="Healings" 
        value="14" 
        icon="plus-circle" 
        suffix="Weekly Total"
        accent-color="#0b1221"
      />
      <ReportStatCard 
        label="Follow-ups" 
        value="89" 
        icon="phone" 
        :trend="-4"
        accent-color="#d47a22"
      />
      <ReportStatCard 
        label="Participants" 
        value="215" 
        icon="users" 
        accent-color="#d47a22"
      />
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <WeeklyGrowthChart />
      </div>
      <div class="lg:col-span-1">
        <TeamEffortCard />
      </div>
    </div>

    <!-- Tables Section -->
    <div class="space-y-12">
      <!-- Evangelism Field Reports -->
      <ReportSection 
        title="Evangelism Field Reports" 
        subtitle="Detailed Logs - Latest Entries"
        view-all-link="/admin/evangelism"
      >
        <DataTable :columns="evangelismColumns" :rows="evangelismRows">
          <template #cell-minister="{ row }">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-[#0b1221] text-white flex items-center justify-center text-[10px] font-bold">
                {{ row.minister.split(' ').map(n => n[0]).join('') }}
              </div>
              <span class="font-bold text-[14px]">{{ row.minister }}</span>
            </div>
          </template>
          <template #cell-preached="{ value }">
            <span class="font-black text-[15px]">{{ value }}</span>
          </template>
          <template #cell-decisions="{ value }">
            <span class="font-black text-[15px] text-[#d47a22]">{{ value }}</span>
          </template>
          <template #cell-healings="{ value }">
            <span class="font-black text-[15px]">{{ value }}</span>
          </template>
        </DataTable>
      </ReportSection>

      <!-- Follow-up Sessions -->
      <ReportSection 
        title="Follow-up Sessions" 
        subtitle="Nurturing New Believers"
        view-all-link="/admin/follow-ups"
      >
        <DataTable :columns="followUpColumns" :rows="followUpRows">
          <template #cell-status="{ value }">
            <span 
              class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
              :class="{
                'bg-green-100 text-green-700': value === 'COMPLETED',
                'bg-blue-100 text-blue-700': value === 'IN PROGRESS',
                'bg-gray-100 text-gray-700': value === 'SCHEDULED'
              }"
            >
              {{ value }}
            </span>
          </template>
          <template #cell-nextStep="{ value }">
            <span class="text-[#707070] italic text-[13px] font-medium">{{ value }}</span>
          </template>
        </DataTable>
      </ReportSection>
    </div>
  </div>
</template>
