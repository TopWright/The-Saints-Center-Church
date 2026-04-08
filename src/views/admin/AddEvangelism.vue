<script setup>
import { ref } from 'vue'
import { useForm, useFieldArray } from 'vee-validate'
import * as yup from 'yup'
import AppInput from '@/components/forms/AppInput.vue'
import AppSelect from '@/components/forms/AppSelect.vue'
import AppToggle from '@/components/forms/AppToggle.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const editingIndex = ref(null)

const schema = yup.object().shape({
  week: yup.string().required('Required'),
  evangelist: yup.string().required('Required'),
  notes: yup.string(),
  tempContact: yup.object().shape({
    fullName: yup.string(),
    phone: yup.string(),
    address: yup.string(),
    filledWithSpirit: yup.boolean(),
    healed: yup.boolean(),
    healingDescription: yup.string()
  }),
  contacts: yup.array().of(
    yup.object().shape({
      fullName: yup.string().required('Name is required'),
      phone: yup.string().required('Phone is required'),
      address: yup.string().required('Address is required'),
      filledWithSpirit: yup.boolean(),
      healed: yup.boolean(),
      healingDescription: yup.string()
    })
  ).min(1, 'Add at least one contact to the ledger')
})

const { handleSubmit, values, setValues, setFieldValue, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    week: 'oct-23',
    evangelist: 'johnathan-wright',
    notes: '',
    tempContact: { fullName: '', phone: '', address: '', filledWithSpirit: false, healed: false, healingDescription: '' },
    contacts: []
  }
})

const { push, remove, update, fields } = useFieldArray('contacts')

const commitContact = async () => {
  // Use a deep copy to ensure reactivity is broken and data is fresh
  const tc = JSON.parse(JSON.stringify(values.tempContact))
  
  if (!tc.fullName || !tc.phone || !tc.address) {
    alert('Please fill in Name, Phone, and Address')
    return
  }

  if (editingIndex.value !== null) {
    update(editingIndex.value, tc)
    editingIndex.value = null
  } else {
    push(tc)
  }

  // Clear temp contact but keep session identity
  setValues({
    ...values,
    tempContact: { fullName: '', phone: '', address: '', filledWithSpirit: false, healed: false, healingDescription: '' }
  })
}

const editContact = (idx) => {
  editingIndex.value = idx
  // Use fields.value to access the reactive array correctly
  const contactData = JSON.parse(JSON.stringify(fields.value[idx].value))
  
  // Directly set each field to ensure prefilling triggers reactivity correctly
  setFieldValue('tempContact.fullName', contactData.fullName)
  setFieldValue('tempContact.phone', contactData.phone)
  setFieldValue('tempContact.address', contactData.address)
  setFieldValue('tempContact.filledWithSpirit', !!contactData.filledWithSpirit)
  setFieldValue('tempContact.healed', !!contactData.healed)
  setFieldValue('tempContact.healingDescription', contactData.healingDescription || '')
}

const cancelEdit = () => {
  editingIndex.value = null
  setValues({
    ...values,
    tempContact: { fullName: '', phone: '', address: '', filledWithSpirit: false, healed: false, healingDescription: '' }
  })
}

const saveDraft = () => {
  router.push('/admin/evangelism')
}

const finalizeReport = handleSubmit((formValues) => {
  const existingLogs = JSON.parse(localStorage.getItem('evangelism_logs') || '[]')
  
  const newEntry = {
    id: Date.now().toString(),
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    contacts: formValues.contacts.length,
    filledCount: formValues.contacts.filter(c => c.filledWithSpirit).length,
    healedCount: formValues.contacts.filter(c => c.healed).length,
    details: formValues.contacts
  }
  
  existingLogs.unshift(newEntry)
  localStorage.setItem('evangelism_logs', JSON.stringify(existingLogs))
  
  router.push('/admin/evangelism')
})

const weekOptions = [
  { label: 'Oct 23 - Oct 29, 2023', value: 'oct-23' },
  { label: 'Oct 30 - Nov 5, 2023', value: 'oct-30' }
]

const evangelistOptions = [
  { label: 'Rev. Johnathan Wright', value: 'johnathan-wright' },
  { label: 'Evang. Sarah Jenkins', value: 'sarah-jenkins' }
]
</script>

<template>
  <div class="space-y-10 relative pb-20 max-w-[1000px] mx-auto px-4 sm:px-0">
    <!-- Header -->
    <div class="flex items-center justify-between gap-6">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <router-link to="/admin/evangelism" class="w-10 h-10 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center text-[#0b1221] hover:bg-[#f8f9fa] transition-all bg-white shadow-sm">
            <i class="pi pi-arrow-left text-xs"></i>
          </router-link>
          <h1 class="font-display text-4xl md:text-5xl text-[#0b1221] leading-[0.9] tracking-tighter">
            New <span class="text-[#0b1221]">Entry</span>
          </h1>
        </div>
        <p class="font-sans text-[15px] text-[#707070] font-medium tracking-tight ml-13">
          Record your outreach details for this session.
        </p>
      </div>
    </div>

    <form @submit.prevent>
      <!-- Session Identity -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
        <div class="lg:col-span-4 space-y-6 self-center">
          <div class="space-y-2">
            <h2 class="font-display text-2xl font-bold text-[#d47a22]">Session Identity</h2>
            <p class="text-[13px] text-[#707070]">
              Define the leadership and temporal context for this outreach.
            </p>
          </div>
          <div class="w-full max-w-[280px] aspect-4/3 rounded-[30px] overflow-hidden relative border-2 border-[#f0f2f5] shadow-md mx-auto lg:mx-0">
            <img src="/vector-profiles/10.png" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-linear-to-t from-[#0b1221] via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <p class="text-[8px] uppercase tracking-[0.2em] font-bold text-white/70">Ministry Focus</p>
              <h3 class="font-display text-lg font-bold">Community Outreach</h3>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 bg-white rounded-[40px] p-6 md:p-8 space-y-4 border-2 border-[#f0f2f5] shadow-md h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AppSelect 
              name="week" 
              label="Week Selector" 
              icon="calendar" 
              :options="weekOptions" 
            />
            <AppSelect 
              name="evangelist" 
              label="Evangelist" 
              icon="user" 
              :options="evangelistOptions" 
            />
          </div>
          <AppInput 
            name="notes" 
            label="General Notes" 
            type="textarea"
            :rows="2"
            placeholder="Atmosphere, weather, etc..." 
          />
        </div>
      </div>

      <!-- Harvest Ledger -->
      <div class="mt-16 bg-white rounded-[40px] border-2 border-[#f0f2f5] shadow-md overflow-hidden">
        <div class="p-8 md:p-10 border-b-2 border-[#f0f2f5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div>
              <h2 class="font-display text-3xl font-bold text-[#0b1221]">Harvest Ledger</h2>
              <p class="text-[13px] text-[#707070]">Add contact details below.</p>
            </div>
            <div v-if="editingIndex !== null" class="animate-pulse bg-[#0b1221] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-[#d47a22] rounded-full"></span>
              Editing Record {{ editingIndex + 1 }}
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
              {{ fields.length }} Contacts Added
            </div>
          </div>
        </div>

        <!-- Single Contact Entry Form -->
        <div class="p-8 md:p-10 space-y-8 bg-[#f8f9fa]/30">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AppInput name="tempContact.fullName" label="Full Name" placeholder="John Doe" />
                <AppInput name="tempContact.phone" label="Phone Number" placeholder="+1 (555) 000-0000" />
              </div>
              <AppInput name="tempContact.address" label="Residential Address" placeholder="123 Sanctuary Way" />
            </div>

            <div class="space-y-4">
              <div class="flex gap-3">
                <button 
                  type="button"
                  @click="setFieldValue('tempContact.filledWithSpirit', !values.tempContact?.filledWithSpirit)"
                  class="flex-1 px-5 py-4 rounded-3xl border-2 transition-all flex items-center justify-center gap-3 group"
                  :class="values.tempContact?.filledWithSpirit ? 'bg-[#10b981] border-[#10b981] text-white shadow-lg' : 'bg-white border-[#f0f2f5] text-[#0b1221] hover:border-[#10b981]/30 shadow-sm'"
                >
                  <i class="pi pi-sparkles text-sm" :class="values.tempContact?.filledWithSpirit ? 'text-white' : 'text-[#10b981]'"></i>
                  <span class="text-[11px] font-bold uppercase tracking-widest">Spirit Filled</span>
                </button>

                <button 
                  type="button"
                  @click="setFieldValue('tempContact.healed', !values.tempContact?.healed)"
                  class="flex-1 px-5 py-4 rounded-3xl border-2 transition-all flex items-center justify-center gap-3 group"
                  :class="values.tempContact?.healed ? 'bg-[#d47a22] border-[#d47a22] text-white shadow-lg' : 'bg-white border-[#f0f2f5] text-[#0b1221] hover:border-[#d47a22]/30 shadow-sm'"
                >
                  <i class="pi pi-heart text-sm" :class="values.tempContact?.healed ? 'text-white' : 'text-[#d47a22]'"></i>
                  <span class="text-[11px] font-bold uppercase tracking-widest">Healed</span>
                </button>
              </div>
              
              <div v-if="values.tempContact?.healed" class="animate-fade-in">
                <AppInput 
                  name="tempContact.healingDescription" 
                  label="Healing Description" 
                  type="textarea"
                  :rows="2"
                  placeholder="Share the testimony..." 
                />
              </div>
            </div>
          </div>

          <div class="flex justify-center border-t-2 border-[#f0f2f5] pt-8">
            <button 
              type="button" 
              @click="commitContact"
              class="group relative inline-flex items-center gap-4 px-12 py-4 bg-[#0b1221] text-white rounded-full font-bold text-[14px] shadow-lg shadow-[#0b1221]/20 hover:bg-black transition-all active:scale-95 border-2 border-[#0b1221]"
            >
              <i :class="editingIndex !== null ? 'pi pi-save font-bold' : 'pi pi-plus font-bold'" class="text-xs"></i>
              {{ editingIndex !== null ? 'Update Record' : 'Add Contact' }}
            </button>
          </div>
        </div>

        <!-- Added Contacts Pills -->
        <div v-if="fields.length > 0" class="p-8 pt-0">
          <div class="flex items-center gap-4 mb-6">
            <h3 class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-[0.2em]">Current Session Ledger</h3>
            <div class="flex-1 h-px bg-[#f0f2f5]"></div>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <div 
              v-for="(field, idx) in fields" 
              :key="field.key"
              @click="editContact(idx)"
              class="px-6 py-3 rounded-full border-2 cursor-pointer transition-all flex items-center gap-4 group"
              :class="editingIndex === idx ? 'bg-[#0b1221] border-[#0b1221] text-white shadow-xl scale-105' : 'bg-white border-[#f0f2f5] text-[#0b1221] hover:border-[#d47a22] shadow-sm'"
            >
              <div class="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors" :class="editingIndex === idx ? 'bg-white/20 text-white' : 'bg-[#f8f9fa] border border-[#f0f2f5] text-[#d47a22]'">
                {{ idx + 1 }}
              </div>
              <div class="flex flex-col">
                <span class="text-[13px] font-bold">{{ field.value.fullName || 'Unnamed' }}</span>
                <div class="flex gap-1 items-center mt-0.5" v-if="editingIndex !== idx">
                  <div v-if="field.value.filledWithSpirit" class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                  <div v-if="field.value.healed" class="w-1.5 h-1.5 rounded-full bg-[#d47a22]"></div>
                </div>
              </div>
              <button 
                type="button" 
                @click.stop="remove(idx); if(editingIndex === idx) editingIndex = null"
                class="w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-50 text-red-500 transition-all"
                :class="editingIndex === idx ? 'text-white hover:bg-white/10 opacity-100' : ''"
              >
                <i class="pi pi-times text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="mt-12 pt-8 border-t-2 border-[#f0f2f5] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-center gap-4 text-[#a0a0a0]">
          <i class="pi pi-lock text-sm bg-[#f8f9fa] p-3 rounded-full border border-[#f0f2f5]"></i>
          <p class="text-[11px] italic font-medium leading-relaxed max-w-[300px]">
            Data is securely archived to the ministry cloud.
          </p>
        </div>
        
        <div class="flex items-center gap-4 w-full md:w-auto">
          <button 
            type="button"
            @click="saveDraft"
            class="flex-1 md:flex-none px-10 py-3.5 rounded-full border-2 border-[#f0f2f5] font-bold text-[13px] text-[#0b1221] bg-white hover:bg-[#f8f9fa] shadow-sm transition-all"
          >
            Save Draft
          </button>
          <button 
            type="button" 
            @click="finalizeReport"
            class="flex-1 md:flex-none px-10 py-3.5 rounded-full bg-[#0b1221] font-bold text-[13px] text-white hover:bg-black shadow-xl shadow-[#0b1221]/30 transition-all active:scale-95 border-2 border-[#0b1221]"
          >
            Finalize Log
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
