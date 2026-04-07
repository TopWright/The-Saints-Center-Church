<template>
  <div class="bg-white min-h-screen">
    
    <!-- Hero Banner with Faded Cathedral BG -->
    <div class="relative pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center">
      <!-- Background Image with Fade -->
      <div class="absolute inset-0 top-0 left-0 right-0 h-[600px] z-0">
        <div class="absolute inset-0 bg-white/80 z-10 block backdrop-blur-[2px]"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-20"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"></div>
      </div>

      <div class="relative z-30 text-center max-w-2xl px-6 flex flex-col items-center">
        <h1 class="font-display italic text-6xl md:text-7xl text-[#0b1221] mb-6 drop-shadow-sm tracking-tight">
          Sacred Rhythms
        </h1>
        <p class="font-sans text-[#4a4a4a] text-[15px] leading-relaxed font-normal mb-8">
          Journey into a curated atmosphere of spiritual growth and communal activation. Our programmes are more than schedules; they are portals for revelation.
        </p>
        <div class="flex items-center justify-center gap-2">
           <div class="w-8 h-[2px] bg-[#d47a22]"></div>
           <div class="w-2 h-[2px] bg-[#d47a22]/50"></div>
           <div class="w-1 h-[2px] bg-[#d47a22]/30"></div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6">
      
      <!-- SACRED GATHERINGS -->
      <div class="mb-32">
        <div class="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-gray-100 pb-4">
          <h2 class="font-display italic text-4xl text-[#1a1d20]">Sacred Gatherings</h2>
          <span class="font-sans text-[10px] uppercase font-bold tracking-[0.3em] text-[#d47a22] mt-4 md:mt-0">WEEKLY CYCLE</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1 -->
          <div class="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 relative mt-6 flex flex-col transition-all cursor-pointer">
            <div class="w-10 h-10 rounded-full bg-[#0b1221] flex items-center justify-center text-white font-sans text-xs italic font-semibold absolute -top-5 left-8 shadow-md">
              i
            </div>
            <h3 class="font-display font-bold text-2xl text-[#1a1d20] mb-2 mt-4">Aggelos Fest</h3>
            <p class="font-sans text-[#d47a22] text-[11px] font-bold tracking-widest uppercase mb-4">Sundays 7:00am - 9:30am</p>
            <p class="font-sans text-[#707070] text-[16px] leading-relaxed font-normal mb-10">
              An early morning encounter focusing on angelic ministrations and prophetic atmospheric shifts.
            </p>
            <div class="mt-auto flex items-center gap-2 pt-4 border-t border-gray-50 uppercase font-sans text-[9px] font-bold tracking-[0.2em] text-[#1a1d20]">
              <i class="pi pi-cloud text-[10px]"></i> Atmospheric
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-[#faf7f5] rounded-[32px] p-8 border border-[#e6d0bf]/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 relative mt-6 flex flex-col transition-all cursor-pointer">
            <div class="w-10 h-10 rounded-full bg-[#d47a22] flex items-center justify-center text-white font-sans text-xs italic font-semibold absolute -top-5 left-8 shadow-md">
              ii
            </div>
            <h3 class="font-display font-bold text-2xl text-[#1a1d20] mb-2 mt-4">The Gathering</h3>
            <p class="font-sans text-[#d47a22] text-[11px] font-bold tracking-widest uppercase mb-4">Sundays 9:30am - 12:00pm</p>
            <p class="font-sans text-[#707070] text-[16px] leading-relaxed font-normal mb-10">
              Our primary weekly communion. A convergence of saints for intense worship and apostolic teaching.
            </p>
            <div class="mt-auto flex items-center gap-2 pt-4 border-t border-[#e6d0bf]/30 uppercase font-sans text-[9px] font-bold tracking-[0.2em] text-[#1a1d20]">
              <i class="pi pi-users text-[10px]"></i> Communion
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 relative mt-6 flex flex-col transition-all cursor-pointer">
            <div class="w-10 h-10 rounded-full bg-[#0b1221] flex items-center justify-center text-white font-sans text-xs italic font-semibold absolute -top-5 left-8 shadow-md">
              iii
            </div>
            <h3 class="font-display font-bold text-2xl text-[#1a1d20] mb-2 mt-4">The Archive Study</h3>
            <p class="font-sans text-[#d47a22] text-[11px] font-bold tracking-widest uppercase mb-4">Wednesdays 6:00pm</p>
            <p class="font-sans text-[#707070] text-[16px] leading-relaxed font-normal mb-10">
              A mid-week dive into the depths of scripture, unearthing ancient wisdom for modern application.
            </p>
            <div class="mt-auto flex items-center gap-2 pt-4 border-t border-gray-50 uppercase font-sans text-[9px] font-bold tracking-[0.2em] text-[#1a1d20]">
              <i class="pi pi-book text-[10px]"></i> Revelation
            </div>
          </div>

        </div>
      </div>

      <!-- DAILY PRAYER -->
      <div class="mb-32 relative">
        <h2 class="font-display italic text-5xl md:text-6xl text-[#0b1221] mb-12 absolute -top-8 -left-4 opacity-10 pointer-events-none select-none">
          Daily Prayer
        </h2>
        
        <div class="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row relative z-10">
          
          <!-- Left Text -->
          <div class="p-10 lg:p-14 flex-1 flex flex-col justify-center">
            <h3 class="font-display italic text-3xl text-[#d47a22] mb-6">Pauline Prayers</h3>
            <p class="font-sans text-[#4a4a4a] text-[16px] italic leading-relaxed font-medium mb-6">
              "That the eyes of your understanding being enlightened; that ye may know what is the hope of his calling."
            </p>
            <p class="font-sans text-[#707070] text-[16px] leading-relaxed font-normal mb-8">
              Every morning, we activate the spirit through the Pauline epistles—revelatory knowledge and minds flooded with light. This is the foundation of our intellectual and spiritual dominance.
            </p>
            <div>
              <AppButton variant="primary" icon="pi-plus-circle" iconPosition="left">
                Join Prayer Room (5:00 AM)
              </AppButton>
            </div>
          </div>

          <!-- Right Image -->
          <div class="lg:w-1/2 relative min-h-[350px]">
            <div class="absolute inset-4 rounded-[32px] bg-cover bg-center overflow-hidden" style="background-image: url('https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?auto=format&fit=crop&q=80&w=2000');"></div>
            
            <!-- Overlap Pill -->
            <div class="absolute bottom-10 right-8 bg-[#8a5b1f] text-white p-4 rounded-xl shadow-xl max-w-[240px] backdrop-blur-sm border border-white/20">
              <p class="font-sans text-[11px] font-medium leading-snug italic">
                "Taste the exactness of the word with light and urgency in prayer."
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- SPECIAL PROGRAMMES -->
      <div class="mb-32">
        <h2 class="font-display italic text-4xl text-[#1a1d20] text-center mb-12">Special Programmes</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Conclave (Col Span 2) -->
          <div class="lg:col-span-2 rounded-[32px] overflow-hidden relative shadow-md group cursor-pointer min-h-[250px]">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1470229722913-7c090be5ae01?auto=format&fit=crop&q=80&w=2070');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b1221] via-[#0b1221]/60 to-transparent"></div>
            
            <div class="absolute bottom-0 left-0 p-8 w-full">
              <span class="bg-[#d47a22] text-white text-[9px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase mb-3 inline-block">Annual Convention</span>
              <h3 class="font-display font-bold text-3xl text-white mb-2">The Saints Conclave 2024</h3>
              <p class="font-sans text-gray-300 text-[16px] font-normal leading-relaxed max-w-md">
                Four days of intensive spiritual impartation and global activation.
              </p>
            </div>
          </div>

          <!-- Silent Retreats (Col Span 1) -->
          <div class="lg:col-span-1 rounded-[32px] bg-[#f9f9f9] p-8 border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <h3 class="font-display font-bold text-2xl text-[#1a1d20] mb-3">Silent Retreats</h3>
            <p class="font-sans text-[#707070] text-[16px] leading-relaxed font-normal mb-auto">
              Quarterly retreats for deep introspection and silence.
            </p>
            <div class="mt-8 bg-white rounded-full py-3 px-5 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex items-center gap-3">
               <div class="w-8 h-8 rounded-full bg-[#fdf2e9] flex items-center justify-center text-[#d47a22]">
                 <i class="pi pi-calendar text-[10px]"></i>
               </div>
               <div class="flex flex-col">
                 <span class="font-sans text-[11px] font-bold text-[#1a1d20]">March 14-18</span>
                 <span class="font-sans text-[9px] text-[#a0a0a0] uppercase tracking-widest">Lush Meadows</span>
               </div>
            </div>
          </div>

          <!-- Worship Streams (Col Span 1) -->
          <div class="lg:col-span-1 border border-gray-100 bg-white rounded-[32px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
             <!-- top edge subtle color -->
             <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d47a22] to-[#f4c89f]"></div>
             <i class="pi pi-wave-pulse text-[#d47a22] text-xl mb-6"></i>
             <h3 class="font-display font-bold text-2xl text-[#1a1d20] mb-3">Worship Streams</h3>
             <p class="font-sans text-[#707070] text-[16px] leading-relaxed font-normal mb-8">
               Spontaneous evenings of adoration and instrumental flow.
             </p>
             <div class="mt-auto font-sans text-[11px] font-bold text-[#d47a22] uppercase tracking-widest flex items-center gap-2 group">
               Notify me <i class="pi pi-arrow-right text-[9px] group-hover:translate-x-1 transition-transform"></i>
             </div>
          </div>

          <!-- Leadership Archive (Col Span 2) -->
          <div class="lg:col-span-2 rounded-[32px] bg-[#e5e5e5]/40 p-8 flex flex-col md:flex-row items-center justify-between shadow-sm border border-gray-200/50 hover:shadow-md transition-shadow cursor-pointer">
            <div class="max-w-sm">
              <h3 class="font-display font-bold text-2xl text-[#1a1d20] mb-3">Leadership Archive</h3>
              <p class="font-sans text-[#555] text-[16px] leading-relaxed font-normal">
                A closed session for ministers and administrators to refine their organizational size.
              </p>
            </div>
            <div class="w-20 h-20 rounded-full border border-[#d47a22]/20 flex items-center justify-center mt-6 md:mt-0 relative group">
               <div class="absolute inset-2 rounded-full bg-white/50 group-hover:bg-white transition-colors"></div>
               <i class="pi pi-shield text-[#8a5b1f] text-xl relative z-10"></i>
            </div>
          </div>

        </div>
      </div>

      <!-- FIND SANCTUARY (Map Section) -->
      <div class="bg-[#fcfcfc] rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center gap-12">
        
        <!-- Left details -->
        <div class="lg:w-1/3">
          <h2 class="font-display italic text-4xl text-[#1a1d20] mb-6">Find Sanctuary</h2>
          <p class="font-sans text-[#707070] text-[16px] leading-relaxed font-normal mb-10">
            Our physical gathering space is curated to provide peace and clarity from the city's noise.
          </p>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
               <div class="w-10 h-10 rounded-full bg-[#0b1221] text-white flex items-center justify-center shrink-0">
                  <i class="pi pi-map-marker text-[12px]"></i>
               </div>
               <div class="flex flex-col pt-1">
                 <span class="font-sans text-[11px] font-bold text-[#1a1d20] mb-1">Location</span>
                 <span class="font-sans text-[12px] text-[#707070]">Diamond College Hall, Iba Estate,<br/>Lagos State, Nigeria.</span>
               </div>
            </div>

            <div class="flex items-start gap-4">
               <div class="w-10 h-10 rounded-full bg-[#0b1221] text-white flex items-center justify-center shrink-0">
                  <i class="pi pi-envelope text-[12px]"></i>
               </div>
               <div class="flex flex-col pt-1">
                 <span class="font-sans text-[11px] font-bold text-[#1a1d20] mb-1">Inquiries</span>
                 <span class="font-sans text-[12px] text-[#707070]">gather@thesaintscenter.com</span>
               </div>
            </div>
          </div>
        </div>

        <!-- Right Map UI -->
        <div class="lg:w-2/3 w-full bg-[#e8e8e8] rounded-[32px] min-h-[350px] relative overflow-hidden shadow-inner border border-gray-200 flex flex-col justify-end">
           <!-- Subtle world map overlay texture -->
           <div class="absolute inset-0 bg-center bg-no-repeat bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] opacity-10 bg-cover transform scale-150 grayscale"></div>
           
           <!-- Dot marker -->
           <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#8a5b1f] rounded-full border-2 border-white shadow-lg"></div>

           <!-- Floating Pill Control -->
           <div class="relative z-10 m-6 mx-auto w-11/12 bg-white/90 backdrop-blur-md rounded-full shadow-lg p-2 px-4 flex items-center justify-between border border-white">
              <span class="font-sans text-[11px] font-bold text-[#1a1d20] pl-3">Diamond College Hall</span>
              <AppButton variant="primary">
                Get Directions
              </AppButton>
           </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/shared/AppButton.vue'
// Static layout built exactly according to provided mockup.
</script>

<style scoped>
/* Additional specific refinements if needed */
</style>
