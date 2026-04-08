<template>
  <div class="space-y-10 relative pb-20 max-w-[1000px] mx-auto px-4 sm:px-0">
    <!-- Header -->
    <div class="flex items-center justify-between gap-6 font-display">
      <div class="space-y-3">
        <div class="flex items-center gap-4">
          <router-link to="/admin/follow-ups" class="w-12 h-12 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center text-[#0b1221] hover:bg-[#f8f9fa] transition-all bg-white shadow-sm">
            <i class="pi pi-arrow-left text-sm font-bold"></i>
          </router-link>
          <h1 class="text-4xl md:text-5xl text-[#0b1221] leading-[0.9] tracking-tighter font-bold">
            Record <span class="text-[#0b1221]/40">Session</span>
          </h1>
        </div>
        <p class="font-sans text-[15px] text-[#707070] font-medium tracking-tight ml-16">
          Document spiritual growth and meaningful conversations from today's session.
        </p>
      </div>
    </div>

    <form @submit.prevent>
      <!-- Combined Context & Teaching Details -->
      <div class="bg-white rounded-[40px] border-2 border-[#f0f2f5] shadow-md overflow-hidden relative">
        <div class="p-8 md:p-10 border-b-2 border-[#f0f2f5] bg-[#f8f9fa]/30">
          <h2 class="font-display text-2xl font-bold text-[#0b1221]">Session Details</h2>
          <p class="text-[13px] text-[#707070]">Logistics and teaching essence for today's gathering.</p>
        </div>
        
        <div class="p-8 md:p-10 space-y-8">
          <!-- Logistics Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AppSelect 
              name="week" 
              label="Week Selector" 
              icon="calendar" 
              :options="weekOptions" 
            />
            <AppInput 
              name="date" 
              label="Session Date" 
              type="date" 
              icon="calendar-plus"
            />
            <AppInput 
              name="startTime" 
              label="Time Started" 
              type="time" 
              icon="clock"
            />
            <AppInput 
              name="endTime" 
              label="Time Ended" 
              type="time" 
              icon="clock-fill"
            />
          </div>

          <div class="h-px bg-[#f0f2f5]"></div>

          <!-- Teaching Logic -->
          <div class="space-y-6">
            <AppInput 
              name="topic" 
              label="Teaching Topic" 
              placeholder="The focus of today's word..." 
              icon="book"
            />
            <AppInput 
              name="generalNotes" 
              label="General Session Notes" 
              type="textarea"
              :rows="3"
              placeholder="Overall spirit of the meeting, breakthrough moments..." 
            />
          </div>
        </div>
      </div>

      <!-- Participant Growth (Single Form + Ledger) -->
      <div class="mt-12 bg-white rounded-[40px] border-2 border-[#f0f2f5] shadow-md overflow-hidden">
        <div class="p-8 md:p-10 border-b-2 border-[#f0f2f5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div>
              <h2 class="font-display text-2xl font-bold text-[#0b1221]">Participant Growth</h2>
              <p class="text-[13px] text-[#707070]">Track individual journeys and spiritual health.</p>
            </div>
            <div v-if="editingIndex !== null" class="animate-pulse bg-[#0b1221] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-[#d47a22] rounded-full"></span>
              Editing Participant
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button 
              v-if="editingIndex !== null"
              type="button"
              @click="cancelEdit"
              class="text-[10px] uppercase font-bold text-[#707070] hover:text-[#0b1221] px-4 py-2 rounded-full border border-[#f0f2f5] transition-all bg-white"
            >
              Cancel Edit
            </button>
            <div class="text-[10px] uppercase font-bold text-[#d47a22] tracking-widest bg-[#d47a22]/10 px-4 py-2 rounded-full">
              {{ fields.length }} Participants
            </div>
          </div>
        </div>

        <!-- Entry Form -->
        <div class="p-8 md:p-10 space-y-8 bg-[#f8f9fa]/30">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div class="space-y-6">
              <AppSelect 
                name="tempParticipant.id" 
                label="Select Participant" 
                icon="user"
                :options="participantOptions"
              />
              <AppSelect 
                name="tempParticipant.progress" 
                label="Spiritual Progress" 
                icon="chart-line"
                :options="progressOptions"
              />
            </div>
            <AppInput 
              name="tempParticipant.notes" 
              label="Observations" 
              type="textarea"
              :rows="4"
              placeholder="Specific updates on their journey..." 
            />
          </div>

          <div class="flex justify-center border-t-2 border-[#f0f2f5] pt-8">
            <button 
              type="button" 
              @click="commitParticipant"
              class="group relative inline-flex items-center gap-4 px-12 py-4 bg-[#0b1221] text-white rounded-full font-bold text-[14px] shadow-lg shadow-[#0b1221]/20 hover:bg-black transition-all active:scale-95 border-2 border-[#0b1221]"
            >
              <i :class="editingIndex !== null ? 'pi pi-save font-bold' : 'pi pi-plus font-bold'" class="text-xs"></i>
              {{ editingIndex !== null ? 'Update Record' : 'Add Participant' }}
            </button>
          </div>
        </div>

        <!-- Ledger Pills -->
        <div v-if="fields.length > 0" class="p-8 pt-0">
          <div class="flex items-center gap-4 mb-6">
            <h3 class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-[0.2em]">Session Ledger</h3>
            <div class="flex-1 h-px bg-[#f0f2f5]"></div>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <div 
              v-for="(field, idx) in fields" 
              :key="field.key"
              @click="editParticipant(idx)"
              class="px-6 py-3 rounded-full border-2 cursor-pointer transition-all flex items-center gap-4 group"
              :class="editingIndex === idx ? 'bg-[#0b1221] border-[#0b1221] text-white shadow-xl scale-105 ring-4 ring-[#0b1221]/10' : 'bg-white border-[#f0f2f5] text-[#0b1221] hover:border-[#d47a22] shadow-sm'"
            >
              <div class="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden" :class="editingIndex === idx ? 'ring-2 ring-white/30' : 'bg-[#f8f9fa] border border-[#f0f2f5]'">
                <img :src="getParticipantAvatar(field.value.id)" class="w-full h-full object-cover" v-if="getParticipantAvatar(field.value.id)" />
                <i class="pi pi-user text-[10px]" v-else></i>
              </div>
              <div class="flex flex-col">
                <span class="text-[13px] font-bold">{{ getParticipantName(field.value.id) }}</span>
                <span class="text-[9px] uppercase tracking-widest font-bold opacity-60">{{ field.value.progress }}</span>
              </div>
              <button 
                type="button" 
                @click.stop="remove(idx); if(editingIndex === idx) editingIndex = null"
                class="w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all font-bold"
                :class="editingIndex === idx ? 'text-white hover:bg-white/10 opacity-100' : 'hover:bg-red-50 text-red-500'"
              >
                <i class="pi pi-times text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="mt-16 pt-8 border-t-2 border-[#f0f2f5] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-center gap-4 text-[#a0a0a0]">
          <i class="pi pi-shield-check text-xl bg-[#f8f9fa] p-4 rounded-full border border-[#f0f2f5] text-[#d47a22]"></i>
          <p class="text-[11px] font-medium leading-relaxed max-w-[320px]">
            All information submitted will be encrypted and stored in the secure Sanctuary vault.
          </p>
        </div>
        
        <div class="flex items-center gap-6 w-full md:w-auto">
          <button 
            type="button"
            @click="saveDraft"
            class="text-[13px] font-bold text-[#707070] hover:text-[#0b1221] uppercase tracking-widest transition-all"
          >
            Save Draft
          </button>
          <button 
            type="button" 
            @click="finalizeSession"
            class="flex-1 md:flex-none px-12 py-4 rounded-full bg-[#0b1221] font-bold text-[14px] text-white hover:bg-black shadow-xl shadow-[#0b1221]/30 transition-all active:scale-95 border-2 border-[#0b1221]"
          >
            Submit Session Report
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useFieldArray } from 'vee-validate'
import * as yup from 'yup'
import AppInput from '@/components/forms/AppInput.vue'
import AppSelect from '@/components/forms/AppSelect.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const editingIndex = ref(null)

const schema = yup.object().shape({
  week: yup.string().required('Required'),
  date: yup.string().required('Required'),
  startTime: yup.string().required('Required'),
  endTime: yup.string().required('Required'),
  topic: yup.string().required('Teaching topic is required'),
  generalNotes: yup.string(),
  tempParticipant: yup.object().shape({
    id: yup.string(),
    progress: yup.string(),
    notes: yup.string()
  }),
  participants: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      progress: yup.string().required(),
      notes: yup.string()
    })
  ).min(1, 'Add at least one participant')
})

const { handleSubmit, values, setValues, setFieldValue, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    week: 'week-42',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:30',
    endTime: '12:00',
    topic: '',
    generalNotes: '',
    tempParticipant: { id: '', progress: 'Growing', notes: '' },
    participants: []
  }
})

const { push, remove, update, fields } = useFieldArray('participants')

const commitParticipant = () => {
  const tp = JSON.parse(JSON.stringify(values.tempParticipant))
  
  if (!tp.id || !tp.progress) {
    alert('Please select a participant and progress status')
    return
  }

  if (editingIndex.value !== null) {
    update(editingIndex.value, tp)
    editingIndex.value = null
  } else {
    push(tp)
  }

  setValues({
    ...values,
    tempParticipant: { id: '', progress: 'Growing', notes: '' }
  })
}

const editParticipant = (idx) => {
  editingIndex.value = idx
  const data = JSON.parse(JSON.stringify(fields.value[idx].value))
  
  setFieldValue('tempParticipant.id', data.id)
  setFieldValue('tempParticipant.progress', data.progress)
  setFieldValue('tempParticipant.notes', data.notes || '')
}

const cancelEdit = () => {
  editingIndex.value = null
  setValues({
    ...values,
    tempParticipant: { id: '', progress: 'Growing', notes: '' }
  })
}

const finalizeSession = handleSubmit((formValues) => {
  const existing = JSON.parse(localStorage.getItem('followup_sessions') || '[]')
  
  const newSession = {
    id: Date.now().toString(),
    date: formValues.date,
    time: `${formValues.startTime} AM`, // Simplified
    topic: formValues.topic,
    participants: formValues.participants.length,
    participantDetails: formValues.participants
  }
  
  existing.unshift(newSession)
  localStorage.setItem('followup_sessions', JSON.stringify(existing))
  router.push('/admin/follow-ups')
})

const saveDraft = () => router.push('/admin/follow-ups')

const weekOptions = [
  { label: 'Week 42 - October 2024', value: 'week-42' },
  { label: 'Week 43 - October 2024', value: 'week-43' }
]

const progressOptions = [
  { label: 'New Converted', value: 'New' },
  { label: 'Growing', value: 'Growing' },
  { label: 'Established', value: 'Established' },
  { label: 'Leadership Track', value: 'Leadership' }
]

const participantOptions = [
  { label: 'Sarah Jenkins', value: 'sarah-1' },
  { label: 'Ibrahim Musa', value: 'ibrahim-1' },
  { label: 'Amara Eze', value: 'amara-1' },
  { label: 'Tola Bakare', value: 'tola-1' }
]

const getParticipantName = (id) => participantOptions.find(p => p.value === id)?.label || 'Unknown'
const getParticipantAvatar = (id) => {
  const map = {
    'sarah-1': '/vector-profiles/1.png',
    'ibrahim-1': '/vector-profiles/2.png',
    'amara-1': '/vector-profiles/3.png',
    'tola-1': '/vector-profiles/4.png'
  }
  return map[id] || '/vector-profiles/10.png'
}
</script>

<style scoped>
input[type="date"], input[type="time"] {
  min-height: 52px;
}
</style>
