<script setup>
import { ref } from 'vue'
import AdminTabs from '@/components/admin/AdminTabs.vue'
import ProfileSettingsTab from '@/components/admin/ProfileSettingsTab.vue'
import ChurchInformationTab from '@/components/admin/ChurchInformationTab.vue'
import DisciplesLeadersTab from '@/components/admin/DisciplesLeadersTab.vue'
import AppModal from '@/components/shared/AppModal.vue'

const activeTab = ref('profile')
const modalTitle = ref('')

const settingsTabs = [
  { label: 'Profile Settings', value: 'profile' },
  { label: 'Church Information', value: 'church' },
  { label: 'Disciples & Leaders', value: 'disciples' }
]

const openModal = (title) => {
  modalTitle.value = title
}
</script>

<template>
  <div class="space-y-10 pb-20">
    <!-- Header with Glass Tabs -->
    <div class="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 pt-4 relative">
      <!-- Watermark Background -->
      <h2 class="absolute -top-8 left-0 text-[100px] font-display font-black text-[#0b1221]/5 leading-none select-none tracking-tighter">Settings</h2>
      
      <div class="space-y-2 relative z-10">
        <div class="flex items-center gap-4">
          <h1 class="text-[52px] font-display font-black text-[#0b1221] leading-[0.85] tracking-tighter">
            Portal Settings
            <!-- <span class="text-[#d47a22] font-display italic">Settings</span> -->
          </h1>
        </div>
        <p class="text-[14px] font-sans font-medium text-[#707070] tracking-tight">
          Refine your administrative experience and manage the leadership hierarchy.
        </p>
      </div>

      <div class="relative z-10 w-full xl:w-auto overflow-x-auto no-scrollbar pb-2 xl:pb-0">
        <AdminTabs 
          v-model="activeTab" 
          :tabs="settingsTabs" 
        />
      </div>
    </div>

    <!-- Tab Content Area -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      mode="out-in"
    >
      <div :key="activeTab">
        <ProfileSettingsTab v-if="activeTab === 'profile'" />
        <ChurchInformationTab v-if="activeTab === 'church'" />
        <DisciplesLeadersTab 
          v-if="activeTab === 'disciples'" 
          @create-role="openModal('New Ministry Role')"
          @add-position="openModal('New Department Position')"
        />
      </div>
    </Transition>

    <!-- Global Modals -->
    <AppModal 
      :show="!!modalTitle" 
      :title="modalTitle"
      @close="modalTitle = ''"
    >
      <div class="space-y-6">
        <p class="text-[14px] font-medium text-[#707070]">
          Define the parameters for your {{ modalTitle.toLowerCase() }}. This will be reflected across the ministry hierarchy.
        </p>
        <div class="space-y-4">
          <div class="space-y-1.5">
            <label class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-widest px-1">Name / Title</label>
            <input type="text" class="w-full bg-[#f0f2f5] border-none rounded-2xl py-3.5 px-6 text-[14px] font-bold text-[#0b1221]" />
          </div>
          <div class="space-y-1.5">
            <label class="text-[10px] uppercase font-bold text-[#a0a0a0] tracking-widest px-1">Description</label>
            <textarea rows="3" class="w-full bg-[#f0f2f5] border-none rounded-2xl py-3.5 px-6 text-[14px] font-medium text-[#0b1221] resize-none"></textarea>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3">
          <button @click="modalTitle = ''" class="px-6 py-2 rounded-xl text-[13px] font-bold text-[#707070]">Cancel</button>
          <button @click="modalTitle = ''" class="px-8 py-2 rounded-xl bg-[#0b1221] text-white text-[13px] font-bold">Create</button>
        </div>
      </template>
    </AppModal>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
