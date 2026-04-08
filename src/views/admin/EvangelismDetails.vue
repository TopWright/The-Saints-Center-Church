<template>
  <div class="space-y-12 relative pb-20 max-w-[1000px] mx-auto">
    
    <!-- Top Header -->
    <div class="flex flex-col md:flex-row md:items-start justify-between gap-6">
      <div class="space-y-3">
        <div class="flex items-center gap-3 mb-2">
          <router-link to="/admin/evangelism" class="w-8 h-8 rounded-full bg-[#f0f2f5] flex items-center justify-center text-[#0b1221] hover:bg-[#e4e6e9] transition-colors">
            <i class="pi pi-arrow-left text-xs"></i>
          </router-link>
          <span class="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-[0.2em]">Encounter Details</span>
        </div>
        <h1 class="font-display text-4xl md:text-5xl text-[#0b1221] leading-[1.1] tracking-tighter">
          Report Details: <br/> <span class="text-[#0b1221]">{{ details.reportPeriod }}</span>
        </h1>
        <div class="flex items-center gap-3 mt-4">
          <p class="font-sans text-[11px] text-[#a0a0a0] font-bold uppercase tracking-widest">Lead Evangelist</p>
          <div class="w-6 h-px bg-[#e0e0e0]"></div>
          <p class="font-sans text-[13px] text-[#d47a22] font-bold">{{ details.leadEvangelist }}</p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button class="bg-[#f0f2f5] hover:bg-[#e4e6e9] text-[#0b1221] px-6 py-3.5 rounded-full font-sans font-bold text-[13px] transition-all flex items-center gap-3">
          <i class="pi pi-print text-xs"></i>
          Print
        </button>
      </div>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-[#f8f9fa] rounded-[40px] p-8 relative overflow-hidden group">
        <i class="pi pi-users absolute right-4 top-4 text-[120px] text-black/3 group-hover:scale-110 transition-transform duration-700"></i>
        <div class="w-10 h-10 rounded-full bg-[#d47a22]/10 text-[#d47a22] flex items-center justify-center mb-6">
          <i class="pi pi-users"></i>
        </div>
        <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-[0.2em] mb-2">Total Contacts</p>
        <h3 class="font-display text-5xl font-bold text-[#0b1221]">{{ details.stats.totalContacts }}</h3>
      </div>

      <div class="bg-[#f8f9fa] rounded-[40px] p-8 relative overflow-hidden group">
        <i class="pi pi-sparkles absolute right-4 top-4 text-[120px] text-black/3 group-hover:scale-110 transition-transform duration-700"></i>
        <div class="w-10 h-10 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-6">
          <i class="pi pi-sparkles"></i>
        </div>
        <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-[0.2em] mb-2">Spirit Filled</p>
        <h3 class="font-display text-5xl font-bold text-[#0b1221]">{{ details.stats.spiritFilled }}</h3>
      </div>

      <div class="bg-[#f8f9fa] rounded-[40px] p-8 relative overflow-hidden group">
        <i class="pi pi-heart absolute right-4 top-4 text-[120px] text-black/3 group-hover:scale-110 transition-transform duration-700"></i>
        <div class="w-10 h-10 rounded-full bg-[#ef4444]/10 text-[#ef4444] flex items-center justify-center mb-6">
          <i class="pi pi-heart"></i>
        </div>
        <p class="text-[9px] font-bold text-[#a0a0a0] uppercase tracking-[0.2em] mb-2">Healings</p>
        <h3 class="font-display text-5xl font-bold text-[#0b1221]">{{ details.stats.healings }}</h3>
      </div>
    </div>

    <!-- Encounter Chronicles -->
    <div>
      <div class="flex items-center gap-6 mb-8">
        <h2 class="font-display text-3xl font-bold text-[#0b1221]">Encounter Chronicles</h2>
        <div class="flex-1 h-px bg-[#f0f2f5]"></div>
      </div>

      <!-- Accordion -->
      <div class="space-y-4">
        <div 
          v-for="person in details.chronicles" 
          :key="person.id"
          class="bg-white rounded-[40px] border border-[#f0f2f5]/80 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <!-- Accordion Header -->
          <div 
            @click="activeId = activeId === person.id ? null : person.id"
            class="p-4 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between hover:bg-[#f8f9fa] transition-colors gap-4"
          >
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                <img :src="person.avatar" class="w-full h-full object-cover bg-[#f0f2f5]" />
              </div>
              <div>
                <h3 class="font-sans text-[16px] font-bold text-[#0b1221]">{{ person.name }}</h3>
                <p class="text-[11px] text-[#a0a0a0] font-bold tracking-widest uppercase mt-1">{{ person.phone }}</p>
              </div>
            </div>

            <div class="flex items-center justify-between md:justify-end flex-1 gap-4">
              <div class="flex items-center gap-2 flex-wrap text-right justify-end">
                <div 
                  v-if="person.filledWithSpirit" 
                  class="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center w-fit gap-1.5 bg-[#f8f9fa] border border-[#10b981]/20 text-[#10b981]"
                >
                  <i class="pi pi-check-circle text-[10px]"></i> Filled
                </div>
                <div 
                  v-if="person.healingWitnessed" 
                  class="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center w-fit gap-1.5 bg-[#f8f9fa] border border-[#d47a22]/20 text-[#d47a22]"
                >
                  <i class="pi pi-heart text-[10px]"></i> Healing
                </div>
              </div>
              <div class="w-10 h-10 rounded-full bg-[#f0f2f5] flex items-center justify-center shrink-0 text-[#0b1221]">
                <i :class="['pi transition-transform duration-300 text-xs', activeId === person.id ? 'pi-chevron-up' : 'pi-chevron-down']"></i>
              </div>
            </div>
          </div>

          <!-- Accordion Content -->
          <div v-show="activeId === person.id" class="px-6 pb-8 border-t border-[#f0f2f5]">
            <div class="flex flex-col lg:flex-row gap-8 items-start mt-8">
              <!-- Large Portrait -->
              <div class="w-full lg:w-64 aspect-square rounded-[30px] overflow-hidden shrink-0 shadow-lg relative">
                <img :src="person.avatar" class="w-full h-full object-cover bg-[#f0f2f5]" />
                <div class="absolute inset-0 bg-linear-to-t from-[#0b1221] to-transparent opacity-60"></div>
                <div class="absolute bottom-6 left-6 text-white">
                  <h3 class="font-display text-2xl font-bold mb-1">{{ person.name }}</h3>
                  <p class="text-[9px] uppercase tracking-widest font-bold opacity-70">Evangelism Contact</p>
                </div>
              </div>

              <!-- Details Box -->
              <div class="flex-1 space-y-6 w-full">
                <!-- Description -->
                <div class="bg-[#f8f9fa] rounded-3xl p-6 sm:p-8 relative">
                  <i class="pi pi-quote-right absolute right-8 top-8 text-6xl text-[#e0e0e0] opacity-30"></i>
                  <p class="text-[9px] font-bold text-[#d47a22] uppercase tracking-[0.2em] mb-4">
                    {{ person.healingWitnessed ? 'Healing Description' : 'Encounter Notes' }}
                  </p>
                  <p class="text-[#0b1221] text-[14px] leading-relaxed relative z-10 font-medium">
                    "{{ person.description }}"
                  </p>
                </div>
                
                <!-- Contact Info Bottom Row -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div class="space-y-2">
                    <p class="text-[11px] font-bold text-[#0b1221] tracking-wider uppercase flex items-center gap-3">
                      <div class="w-6 h-6 rounded-full bg-[#f0f2f5] flex items-center justify-center shrink-0">
                        <i class="pi pi-phone text-[9px] text-[#a0a0a0]"></i>
                      </div>
                      {{ person.phone }}
                    </p>
                    <p class="text-[11px] font-bold text-[#0b1221] tracking-wider uppercase flex items-center gap-3">
                      <div class="w-6 h-6 rounded-full bg-[#f0f2f5] flex items-center justify-center shrink-0">
                        <i class="pi pi-map-marker text-[9px] text-[#a0a0a0]"></i>
                      </div>
                      {{ person.address }}
                    </p>
                  </div>
                  
                  <button class="bg-[#0b1221] text-white px-8 py-3.5 rounded-full text-[13px] font-bold shadow-lg shadow-[#0b1221]/20 hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-2">
                    Full Profile <i class="pi pi-arrow-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EVANGELISM_DETAILS } from '@/constants/evangelism'

const details = ref(EVANGELISM_DETAILS)
const activeId = ref(details.value.chronicles[0]?.id || null) // Open first by default
</script>
