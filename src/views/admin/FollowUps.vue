<script setup>
import { ref, computed, onMounted } from 'vue'
import DataTable from '@/components/admin/DataTable.vue'
import AppModal from '@/components/shared/AppModal.vue'

const searchQuery = ref('')
const sessions = ref([])
const showDetails = ref(false)
const selectedSession = ref(null)

const columns = [
  { key: 'date', label: 'Date' },
  { key: 'time', label: 'Time' },
  { key: 'topic', label: 'Teaching Topic' },
  { key: 'participants', label: 'Total Participants' },
  { key: 'actions', label: '', class: 'w-[100px]' }
]

const MOCK_SESSIONS = [
  { 
    date: '2023-10-24', 
    time: '1:30 HR', 
    topic: 'Foundations of Grace', 
    participants: 17,
    notes: 'A deep dive into the redemptive power of grace. We had a great time of interaction and prayer.',
    participantDetails: [
      { id: 'sarah-1', name: 'Sarah Jenkins', progress: 'Growing', notes: 'Very attentive, asked good questions about faith.' },
      { id: 'ibrahim-1', name: 'Ibrahim Musa', progress: 'New', notes: 'First time attendee, very open to the word.' }
    ]
  },
  { 
    date: '2023-10-21', 
    time: '2:15 HR', 
    topic: 'Servant Leadership Intro', 
    participants: 9,
    notes: 'Exploring the heart of a servant. Discussed practical ways to lead by serving others.'
  },
  { 
    date: '2023-10-18', 
    time: '1:00 HR', 
    topic: 'Navigating Crisis & Hope', 
    participants: 25,
    notes: 'Encouraging one another in difficult times. Focused on the hope we have in Christ.'
  }
]

const mockParticipantDetails = [
  { name: 'Sarah Jenkins', progress: 'Growing', notes: 'Specific updates on her journey...' },
  { name: 'Ibrahim Musa', progress: 'New', notes: 'Observations from the session...' }
]

onMounted(() => {
  const local = JSON.parse(localStorage.getItem('followup_sessions') || '[]')
  sessions.value = [...local, ...MOCK_SESSIONS]
})

const filteredSessions = computed(() => {
  if (!searchQuery.value) return sessions.value
  const q = searchQuery.value.toLowerCase()
  return sessions.value.filter(s => s.topic.toLowerCase().includes(q))
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const openDetails = (session) => {
  selectedSession.value = session
  showDetails.value = true
}

const getParticipantName = (id) => {
  const participantOptions = [
    { label: 'Sarah Jenkins', value: 'sarah-1' },
    { label: 'Ibrahim Musa', value: 'ibrahim-1' },
    { label: 'Amara Eze', value: 'amara-1' },
    { label: 'Tola Bakare', value: 'tola-1' }
  ]
  return participantOptions.find(p => p.value === id)?.label || 'Unknown'
}
</script>

<template>
  <div class="space-y-10 relative pb-20 max-w-[1200px] mx-auto px-4 sm:px-0">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="space-y-4">
        <h1 class="font-display text-5xl md:text-6xl text-[#0b1221] leading-[0.85] tracking-tighter font-bold">
          Follow-Up <span class="text-[#d47a22] font-display italic">Sessions</span>
        </h1>
        <p class="font-sans text-[15px] text-[#707070] font-medium tracking-tight max-w-[500px] leading-relaxed">
          Track and manage spiritual growth dialogues. Every session is a step toward deeper community and understanding.
        </p>
      </div>
      
      <router-link 
        to="/admin/follow-ups/add"
        class="inline-flex items-center gap-3 px-8 py-4 bg-[#ff9f43] text-white rounded-2xl font-bold text-[14px] shadow-lg shadow-[#ff9f43]/20 hover:scale-105 transition-all active:scale-95 group"
      >
        <i class="pi pi-plus text-xs group-hover:rotate-90 transition-transform"></i>
        New Session
      </router-link>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- This Month Card -->
      <div class="lg:col-span-4 bg-white rounded-[40px] p-8 border-2 border-[#f0f2f5] shadow-md flex flex-col justify-between min-h-[240px]">
        <div class="space-y-1">
          <p class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-[0.2em]">This Month</p>
          <div class="flex items-baseline gap-2">
            <h2 class="font-display text-6xl font-bold text-[#0b1221]">124</h2>
          </div>
          <p class="text-[12px] font-medium text-[#707070]">Active Engagements</p>
        </div>
        
        <div class="space-y-3">
          <div class="w-full h-3 bg-[#f8f9fa] rounded-full overflow-hidden border border-[#f0f2f5]">
            <div class="h-full bg-linear-to-r from-[#ff9f43] to-[#ff6b6b] w-[65%] rounded-full"></div>
          </div>
          <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">65% of Target Reached</p>
        </div>
      </div>

      <!-- Weekly Spiritual Health -->
      <div class="lg:col-span-8 bg-[#0b1221] rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[240px]">
        <div class="relative z-10 flex items-start justify-between">
          <div class="space-y-2">
            <h2 class="font-display text-3xl font-bold text-white leading-tight">Weekly Spiritual Health</h2>
            <p class="text-[13px] text-white/50 max-w-[400px]">
              Overview of participant retention and session completion rates across all ministry branches.
            </p>
          </div>
          <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
            <i class="pi pi-chart-bar text-[#ff9f43] text-xl"></i>
          </div>
        </div>

        <!-- Custom CSS Chart -->
        <div class="relative z-10 flex items-end justify-between gap-3 h-24 mt-4">
          <div v-for="(h, i) in [40, 60, 55, 85, 50, 45, 30]" :key="i" class="flex-1 group">
            <div 
              class="w-full rounded-t-xl transition-all duration-500 group-hover:scale-y-110"
              :class="i === 3 ? 'bg-[#ff9f43] shadow-lg shadow-[#ff9f43]/30' : 'bg-white/20 hover:bg-white/30'"
              :style="{ height: `${h}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table Section -->
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 class="font-display text-2xl font-bold text-[#0b1221]">Session Log</h3>
        <div class="flex items-center gap-3">
          <div class="relative group">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a0a0] text-sm"></i>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Filter by topic..."
              class="pl-11 pr-6 py-2.5 bg-white border-2 border-[#f0f2f5] rounded-full text-[13px] font-medium focus:border-[#0b1221]/20 focus:ring-4 focus:ring-[#0b1221]/5 outline-none transition-all w-full sm:w-[240px]"
            />
          </div>
          <button class="w-10 h-10 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center text-[#0b1221] hover:bg-[#f8f9fa] transition-all bg-white">
            <i class="pi pi-filter text-xs"></i>
          </button>
        </div>
      </div>

      <DataTable 
        :columns="columns" 
        :rows="filteredSessions"
      >
        <!-- Date Slot -->
        <template #cell-date="{ value }">
          <span class="font-bold text-[13px]">{{ formatDate(value) }}</span>
        </template>

        <!-- Topic Slot -->
        <template #cell-topic="{ value }">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#f8f9fa] border border-[#f0f2f5] flex items-center justify-center shrink-0">
              <i class="pi pi-book-open text-[#d47a22] text-sm"></i>
            </div>
            <span class="font-bold text-[14px] text-[#0b1221] truncate max-w-[200px]">{{ value }}</span>
          </div>
        </template>

        <!-- Participants Slot -->
        <template #cell-participants="{ value, row }">
          <div class="flex items-center">
            <div class="flex -space-x-3 overflow-hidden">
              <img 
                v-for="i in Math.min(value, 3)" 
                :key="i"
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
                :src="`/vector-profiles/${i+2}.png`" 
                alt=""
              />
            </div>
            <span v-if="value > 3" class="ml-3 text-[11px] font-bold text-[#a0a0a0] uppercase tracking-widest">+{{ value - 3 }} More</span>
            <span v-else-if="value === 0" class="text-[11px] font-bold text-[#a0a0a0] uppercase tracking-widest italic">None Added</span>
            <span v-else class="ml-3 text-[11px] font-bold uppercase tracking-widest text-[#d47a22]">{{ value }} Total</span>
          </div>
        </template>

        <!-- Actions Slot -->
        <template #cell-actions="{ row }">
          <div class="flex items-center justify-end gap-2">
            <button 
              @click="openDetails(row)"
              class="w-10 h-10 rounded-full text-[#a0a0a0] hover:text-[#0b1221] hover:bg-[#f8f9fa] transition-all flex items-center justify-center border-2 border-transparent hover:border-[#f0f2f5]"
              title="View Details"
            >
              <i class="pi pi-eye text-sm"></i>
            </button>
            <button class="w-10 h-10 rounded-full text-[#a0a0a0] hover:text-[#0b1221] hover:bg-[#f8f9fa] transition-all flex items-center justify-center">
              <i class="pi pi-ellipsis-h text-sm"></i>
            </button>
          </div>
        </template>

        <!-- Mobile Card Slot -->
        <template #card="{ row }">
          <div class="space-y-4" @click="openDetails(row)">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">{{ formatDate(row.date) }}</span>
              <span class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">{{ row.time }}</span>
            </div>
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#f8f9fa] border border-[#f0f2f5] hover:border-[#d47a22]/30 transition-all cursor-pointer">
              <div class="w-10 h-10 rounded-xl bg-white border border-[#f0f2f5] flex items-center justify-center shrink-0">
                <i class="pi pi-book-open text-[#d47a22] text-sm"></i>
              </div>
              <div class="space-y-1">
                <h4 class="font-bold text-[14px] text-[#0b1221] leading-tight">{{ row.topic }}</h4>
                <div class="flex items-center gap-2">
                  <div class="flex -space-x-2 overflow-hidden scale-75 origin-left">
                    <img v-for="i in Math.min(row.participants, 3)" :key="i" class="h-6 w-6 rounded-full ring-2 ring-white" :src="`/vector-profiles/${i+4}.png`" />
                  </div>
                  <span class="text-[10px] font-bold text-[#d47a22] uppercase tracking-widest">{{ row.participants }} Participants</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataTable>

      <!-- Pagination -->
      <div class="flex items-center justify-between pt-4 font-sans">
        <p class="text-[11px] uppercase font-bold text-[#a0a0a0] tracking-widest">Page 1 of 12</p>
        <div class="flex items-center gap-2">
          <button class="w-8 h-8 rounded-lg border border-[#f0f2f5] flex items-center justify-center text-[#a0a0a0] hover:bg-[#f8f9fa] transition-all">
            <i class="pi pi-chevron-left text-[10px]"></i>
          </button>
          <button class="w-8 h-8 rounded-lg bg-[#0b1221] text-white flex items-center justify-center text-[10px] font-bold shadow-md">1</button>
          <button class="w-8 h-8 rounded-lg border border-[#f0f2f5] flex items-center justify-center text-[#0b1221] hover:bg-[#f8f9fa] transition-all text-[10px] font-bold">2</button>
          <button class="w-8 h-8 rounded-lg border border-[#f0f2f5] flex items-center justify-center text-[#a0a0a0] hover:bg-[#f8f9fa] transition-all">
            <i class="pi pi-chevron-right text-[10px]"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Session Details Modal -->
    <AppModal 
      :show="showDetails" 
      @close="showDetails = false" 
      title="Session Archive"
      maxWidth="3xl"
    >
      <div v-if="selectedSession" class="space-y-8">
        <!-- Session Header Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-3xl bg-[#f8f9fa] border-2 border-[#f0f2f5] space-y-1">
            <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest">Date</p>
            <p class="font-display text-[15px] font-bold text-[#0b1221]">{{ formatDate(selectedSession.date) }}</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#f8f9fa] border-2 border-[#f0f2f5] space-y-1">
            <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest">Time spent</p>
            <p class="font-display text-[15px] font-bold text-[#0b1221]">{{ selectedSession.time }}</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#f8f9fa] border-2 border-[#f0f2f5] space-y-1">
            <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-widest">Attendance</p>
            <p class="font-display text-[15px] font-bold text-[#d47a22]">{{ selectedSession.participants }} Souls</p>
          </div>
        </div>

        <!-- Teaching Topic Card -->
        <div class="p-8 rounded-[30px] border-2 border-[#f0f2f5] bg-white shadow-sm space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#0b1221] flex items-center justify-center text-[#ff9f43]">
              <i class="pi pi-book-open text-xl"></i>
            </div>
            <div>
              <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">Module Topic</p>
              <h4 class="font-display text-2xl font-bold text-[#0b1221] tracking-tight">{{ selectedSession.topic }}</h4>
            </div>
          </div>
          <div class="h-px bg-[#f0f2f5] w-full"></div>
          <div class="space-y-2">
            <p class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-widest">Session Summary</p>
            <p class="text-[14px] text-[#707070] italic leading-relaxed">
              {{ selectedSession.notes || "The session was filled with deep spiritual insights and active participation from all members." }}
            </p>
          </div>
        </div>

        <!-- Participants Growth Table -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h5 class="text-[11px] font-bold text-[#0b1221] uppercase tracking-[0.2em]">Participant Growth Ledger</h5>
            <div class="h-px flex-1 bg-[#f0f2f5] mx-4"></div>
          </div>

          <div class="space-y-3">
            <div 
              v-for="(p, i) in (selectedSession.participantDetails || mockParticipantDetails)" 
              :key="i"
              class="group p-5 rounded-2xl border-2 border-[#f0f2f5] bg-white hover:border-[#d47a22]/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-full overflow-hidden border border-[#f0f2f5]">
                  <img :src="p.avatar || `/vector-profiles/${i+1}.png`" class="w-full h-full object-cover" />
                </div>
                <div>
                  <p class="font-bold text-[14px] text-[#0b1221]">{{ p.name || getParticipantName(p.id) }}</p>
                  <p class="text-[11px] text-[#707070] font-medium">{{ p.notes || "Gaining clarity on scriptural foundations." }}</p>
                </div>
              </div>
              <div class="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shrink-0 text-center"
                :class="{
                  'bg-green-50 text-green-600': p.progress === 'Established',
                  'bg-amber-50 text-amber-600': p.progress === 'Growing',
                  'bg-blue-50 text-blue-600': p.progress === 'New'
                }"
              >
                {{ p.progress }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end">
          <button 
            @click="showDetails = false"
            class="px-8 py-3 bg-[#0b1221] text-white rounded-full font-bold text-[13px] hover:bg-black transition-all active:scale-95"
          >
            Close Archive
          </button>
        </div>
      </template>
    </AppModal>
  </div>
</template>
