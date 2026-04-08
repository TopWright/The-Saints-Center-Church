<template>
  <div class="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden">
    
    <!-- Subtle Background Elements -->
    <div class="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#fdf5f0] rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
    <!-- Watermark text in background -->
    <div class="absolute bottom-0 left-0 right-0 overflow-hidden opacity-[0.05] pointer-events-none select-none z-0">
      <div class="animate-marquee">
        <h1 class="font-display text-[15vw] whitespace-nowrap leading-none mx-4">The Saints Center <span class="mx-4 font-sans text-[10vw] text-black">♣︎</span></h1>
        <h1 class="font-display text-[15vw] whitespace-nowrap leading-none mx-4">The Saints Center <span class="mx-4 font-sans text-[10vw] text-black">♣︎</span></h1>
        <h1 class="font-display text-[15vw] whitespace-nowrap leading-none mx-4">The Saints Center <span class="mx-4 font-sans text-[10vw] text-black">♣︎</span></h1>
        <h1 class="font-display text-[15vw] whitespace-nowrap leading-none mx-4">The Saints Center <span class="mx-4 font-sans text-[10vw] text-black">♣︎</span></h1>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      
      <!-- Page Header -->
      <div class="mb-16 max-w-2xl">
        <h1 class="font-display text-5xl md:text-[5.5rem] text-[#0b1221] leading-none mb-6 tracking-tight">
          Reach the <span class="italic text-[#d47a22]">Sanctuary</span>
        </h1>
        <p class="font-sans text-[#4a4a4a] text-[16px] leading-relaxed font-normal">
          Whether you seek spiritual guidance, community involvement, or simply a space to breathe, we are here for you.
        </p>
      </div>

      <!-- Main Layout Grid -->
      <div class="flex flex-col lg:flex-row gap-8 mb-20 lg:items-start">
        
        <!-- Left Sidebar (Narrow) -->
        <div class="w-full lg:w-4/12 flex flex-col gap-6">
          
          <!-- Contact Details Card -->
          <div class="bg-[#faf9f8] rounded-[32px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div class="flex flex-col gap-8 mb-8">
              
              <div class="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                 <div class="w-12 h-12 shrink-0 rounded-full bg-[#f0e8df] flex items-center justify-center text-[#d47a22]">
                   <i class="pi pi-map-marker text-lg"></i>
                 </div>
                 <div class="flex flex-col">
                   <h4 class="font-display text-2xl text-[#1a1d20] mb-2 font-medium">Lagos Sanctuary</h4>
                   <p class="font-sans text-[#707070] text-[13px] font-normal leading-relaxed">
                     Diamond College Hall, Iba Estate,<br/>Lagos, Nigeria.
                   </p>
                 </div>
              </div>

              <div class="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                 <div class="w-12 h-12 shrink-0 rounded-full bg-[#f0e8df] flex items-center justify-center text-[#d47a22]">
                   <i class="pi pi-envelope text-lg"></i>
                 </div>
                 <div class="flex flex-col">
                   <h4 class="font-display text-2xl text-[#1a1d20] mb-2 font-medium">Email Inquiries</h4>
                   <p class="font-sans text-[#707070] text-[13px] font-normal leading-relaxed">
                     inquiries@thesaintscenter.com
                   </p>
                 </div>
              </div>

            </div>

            <!-- Social Media -->
            <div class="pt-6 border-t border-gray-200/60">
              <span class="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#a0a0a0] block text-center md:text-left mb-4">Connect With Us</span>
              <div class="flex justify-center md:justify-start items-center gap-3">
                 <a href="#" class="w-10 h-10 rounded-full bg-[#0b1221] text-white flex items-center justify-center hover:bg-[#d47a22] transition-colors hover:scale-110 duration-300">
                    <i class="pi pi-whatsapp"></i>
                 </a>
                 <a href="#" class="w-10 h-10 rounded-full bg-[#0b1221] text-white flex items-center justify-center hover:bg-[#d47a22] transition-colors hover:scale-110 duration-300">
                    <i class="pi pi-instagram"></i>
                 </a>
                 <a href="#" class="w-10 h-10 rounded-full bg-[#0b1221] text-white flex items-center justify-center hover:bg-[#d47a22] transition-colors hover:scale-110 duration-300">
                    <i class="pi pi-facebook"></i>
                 </a>
                 <a href="#" class="w-10 h-10 rounded-full bg-[#0b1221] text-white flex items-center justify-center hover:bg-[#d47a22] transition-colors hover:scale-110 duration-300">
                    <i class="pi pi-twitter"></i>
                 </a>
              </div>
            </div>
          </div>

          <!-- Map Image Box -->
          <div class="rounded-[32px] overflow-hidden min-h-[250px] bg-[#0b1221] relative shadow-lg group border border-[#1e2e4f]">
            <div class="absolute inset-0 bg-[url('https://snazzy-maps-cdn.azureedge.net/assets/151-ultra-light-with-labels.png?v=20170626083204')] bg-cover bg-center opacity-40 grayscale invert filter group-hover:scale-105 transition-transform duration-1000"></div>
            
            <div class="absolute inset-0 bg-linear-to-t from-[rgba(11,18,33,0.9)] via-transparent to-transparent"></div>
            
            <!-- Map marker ping -->
            <div class="absolute top-[40%] left-[35%] w-3 h-3 bg-[#d47a22] rounded-full shadow-[0_0_10px_#d47a22]">
              <div class="absolute inset-0 rounded-full bg-[#d47a22] animate-ping opacity-75"></div>
            </div>

            <!-- Floating Pill -->
            <div class="absolute bottom-6 left-6 right-6">
               <div class="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white inline-block">
                 <span class="block font-sans text-[9px] uppercase font-bold tracking-[0.2em] text-[#a0a0a0] mb-1">Our Location</span>
                 <span class="block font-sans text-[13px] font-bold text-[#1a1d20]">Iba Estate, Lagos</span>
               </div>
            </div>
          </div>

          <!-- Admin Portal Access -->
          <div class="bg-linear-to-br from-[#d47a22] to-[#b35e10] rounded-[32px] p-8 shadow-xl relative overflow-hidden group cursor-pointer" @click="$router.push('/admin')">
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors duration-500"></div>
            <div class="relative z-10 flex flex-col justify-between h-full">
               <div>
                  <h4 class="font-display text-2xl text-white mb-2 font-medium">Already a Member?</h4>
                  <p class="font-sans text-white/80 text-[13px] font-normal leading-relaxed mb-6">
                    Sign in to your dashboard to manage your litugry profile and access resources.
                  </p>
               </div>
               <div class="flex items-center gap-3 text-white font-sans text-[12px] uppercase tracking-widest font-bold group-hover:translate-x-1 transition-transform duration-300">
                  Go to Admin <i class="pi pi-arrow-right text-[10px]"></i>
               </div>
            </div>
          </div>

        </div>

        <!-- Right Content (Form) -->
        <div class="w-full lg:w-8/12">
          
          <div class="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 relative h-full flex flex-col justify-center overflow-hidden z-10">
            <!-- Top Right soft gradient -->
            <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#fff2e6] rounded-full blur-[80px] z-[-1] opacity-70 pointer-events-none"></div>

            <div class="mb-10">
              <h2 class="font-display text-4xl  text-[#1a1d20] mb-4">Send a Message</h2>
              <p class="font-sans text-[14px] text-[#707070] font-normal leading-relaxed">
                Share your thoughts, requests, or testimonies with our ministry team.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col">
                  <label class="font-sans text-[10px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0] mb-2 px-1">Full Name</label>
                  <input type="text" placeholder="John Doe" class="bg-[#f5f5f5] w-full px-5 py-4 rounded-full font-sans text-[13px] font-medium text-[#1a1d20] focus:outline-none focus:ring-2 focus:ring-[#d47a22]/30 border border-transparent focus:border-[#d47a22]/20 transition-all placeholder:text-[#c0c0c0]" required />
                </div>
                <div class="flex flex-col">
                  <label class="font-sans text-[10px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0] mb-2 px-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" class="bg-[#f5f5f5] w-full px-5 py-4 rounded-full font-sans text-[13px] font-medium text-[#1a1d20] focus:outline-none focus:ring-2 focus:ring-[#d47a22]/30 border border-transparent focus:border-[#d47a22]/20 transition-all placeholder:text-[#c0c0c0]" required />
                </div>
              </div>

              <div class="flex flex-col">
                <label class="font-sans text-[10px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0] mb-2 px-1">Subject</label>
                <input type="text" placeholder="Inquiry about Sunday Service" class="bg-[#f5f5f5] w-full px-5 py-4 rounded-full font-sans text-[13px] font-medium text-[#1a1d20] focus:outline-none focus:ring-2 focus:ring-[#d47a22]/30 border border-transparent focus:border-[#d47a22]/20 transition-all placeholder:text-[#c0c0c0]" required />
              </div>

              <div class="flex flex-col">
                <label class="font-sans text-[10px] uppercase font-bold tracking-[0.15em] text-[#a0a0a0] mb-2 px-1">Your Message</label>
                <textarea rows="5" placeholder="How can we support you?" class="bg-[#f5f5f5] w-full p-6 rounded-[32px] font-sans text-[13px] font-medium text-[#1a1d20] focus:outline-none focus:ring-2 focus:ring-[#d47a22]/30 border border-transparent focus:border-[#d47a22]/20 transition-all placeholder:text-[#c0c0c0] resize-none" required></textarea>
              </div>

              <div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <AppButton type="submit" variant="primary" icon="pi-send" iconPosition="right">
                  Send Message
                </AppButton>

                <!-- Admin Link -->
                <p class="font-sans text-[13px] font-normal text-[#707070]">
                  Already a member? 
                  <router-link to="/auth/login" class="text-[#d47a22] font-bold hover:underline underline-offset-4 decoration-[#d47a22]/30 transition-all">
                    Login to Portal
                  </router-link>
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>

      <!-- Additional Support Blocks -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        <div class="bg-[#faf9f8] p-8 rounded-[32px] border border-gray-100 text-center md:text-left flex flex-col items-center md:items-start group hover:shadow-md transition-shadow">
          <h4 class="font-display font-medium text-xl text-[#1a1d20] mb-3 group-hover:text-[#d47a22] transition-colors">Pastoral Counseling</h4>
          <p class="font-sans text-[#707070] text-[13px] font-normal leading-relaxed">
            Private sessions available by appointment on Tuesdays and Thursdays. Reach out to schedule a time.
          </p>
        </div>
        
        <div class="bg-[#faf9f8] p-8 rounded-[32px] border border-gray-100 text-center md:text-left flex flex-col items-center md:items-start group hover:shadow-md transition-shadow">
          <h4 class="font-display font-medium text-xl text-[#1a1d20] mb-3 group-hover:text-[#d47a22] transition-colors">Media Relations</h4>
          <p class="font-sans text-[#707070] text-[13px] font-normal leading-relaxed">
            For press inquiries or permission to use recorded content, please contact our media department directly.
          </p>
        </div>

        <div class="bg-[#faf9f8] p-8 rounded-[32px] border border-gray-100 text-center md:text-left flex flex-col items-center md:items-start group hover:shadow-md transition-shadow">
          <h4 class="font-display font-medium text-xl text-[#1a1d20] mb-3 group-hover:text-[#d47a22] transition-colors">Emergency Support</h4>
          <p class="font-sans text-[#707070] text-[13px] font-normal leading-relaxed">
            If you are in immediate need of prayer or support outside of office hours, our hotline is available 24/7.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/shared/AppButton.vue'

const handleSubmit = () => {
  // Handled logic
}
</script>
