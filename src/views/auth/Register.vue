<template>
  <div class="w-full max-w-[850px] bg-white/90 backdrop-blur-3xl rounded-[60px] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.08)] flex flex-col items-center">
    
    <!-- Logo -->
    <div class="reg-anim w-16 h-16 mb-4 flex items-center justify-center pointer-events-none select-none">
      <img src="/Logo-black.png" alt="TSC Logo" class="w-full h-full object-contain" />
    </div>

    <h1 class="reg-anim font-display text-4xl md:text-5xl text-[#0b1221] mb-2 font-medium tracking-tight">Join the Ministry</h1>
    <p class="reg-anim font-sans text-[9px] uppercase tracking-[0.3em] font-bold text-[#a0a0a0] mb-12">
      SANCTUARY ADMINISTRATION PORTAL
    </p>

    <form @submit.prevent="handleRegister" class="w-full space-y-6">
      <!-- Grid Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        
        <!-- Full Name -->
        <div class="reg-anim space-y-2">
          <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
            Full Name
          </label>
          <input 
            v-model="form.fullName"
            type="text" 
            placeholder="Johnathan Doe"
            class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[14px] transition-all duration-300 placeholder:text-[#a0a0a0] focus:bg-white"
          />
        </div>

        <!-- Email -->
        <div class="reg-anim space-y-2">
          <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
            Email Address
          </label>
          <input 
            v-model="form.email"
            type="email" 
            placeholder="john@sanctuary.org"
            class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[14px] transition-all duration-300 placeholder:text-[#a0a0a0] focus:bg-white"
          />
        </div>

        <!-- Password -->
        <div class="reg-anim space-y-2">
          <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
            Password
          </label>
          <input 
            v-model="form.password"
            type="password" 
            placeholder="••••••••"
            class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[14px] transition-all duration-300 placeholder:text-[#a0a0a0] focus:bg-white"
          />
        </div>

        <!-- Confirm Password -->
        <div class="reg-anim space-y-2">
          <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
            Confirm Password
          </label>
          <input 
            v-model="form.confirmPassword"
            type="password" 
            placeholder="••••••••"
            class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[14px] transition-all duration-300 placeholder:text-[#a0a0a0] focus:bg-white"
          />
        </div>

        <!-- Ecclesiastical Role (Col Span 2) -->
        <div class="reg-anim md:col-span-2 space-y-2">
          <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
            Ecclesiastical Role
          </label>
          <div class="relative">
            <select 
              v-model="form.role"
              class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[14px] transition-all duration-300 appearance-none text-[#1a1d20] focus:bg-white"
            >
              <option value="member">Member</option>
              <option value="pastor">Pastor</option>
              <option value="deacon">Deacon</option>
              <option value="worker">Worker</option>
            </select>
            <i class="pi pi-chevron-down absolute right-8 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none text-xs"></i>
          </div>
        </div>

        <!-- Position in Church (Col Span 2) -->
        <div class="reg-anim md:col-span-2 space-y-2">
          <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
            Position in Church
          </label>
          <input 
            v-model="form.position"
            type="text" 
            placeholder="e.g. Choir Leader, Evangelism Head"
            class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[14px] transition-all duration-300 placeholder:text-[#a0a0a0] focus:bg-white"
          />
        </div>

        <!-- Assign Supervisor (Col Span 2) -->
        <div class="reg-anim md:col-span-2 space-y-2">
          <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
            Assign Supervisor / Leader (Optional)
          </label>
          <div class="relative">
            <select 
              v-model="form.supervisor"
              class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[14px] transition-all duration-300 appearance-none text-[#1a1d20] focus:bg-white"
            >
              <option value="">Select a Leader</option>
              <option value="1">Pastor John Smith</option>
              <option value="2">Deaconess Sarah Wilson</option>
            </select>
            <i class="pi pi-chevron-down absolute right-8 top-1/2 -translate-y-1/2 text-[#a0a0a0] pointer-events-none text-xs"></i>
          </div>
        </div>

      </div>

      <!-- Submit -->
      <div class="reg-anim pt-8 flex flex-col items-center">
        <button
          type="submit"
          class="relative w-full max-w-[400px] py-6 bg-[#0b1221] text-white rounded-full font-sans font-bold text-[14px] uppercase tracking-[0.2em] group shadow-xl shadow-[#0b1221]/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          @mousedown="createRipple"
        >
          <span class="relative z-10">
            {{ loading ? 'Processing...' : 'Create Account' }}
          </span>
          <div class="ripple-container absolute inset-0 pointer-events-none"></div>
        </button>

        <p class="mt-8 font-sans text-[13px] text-[#707070]">
          Already part of the ministry? 
          <router-link to="/auth/login" class="text-[#d47a22] font-bold hover:opacity-70 transition-opacity ml-1">Sign In</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const loading = ref(false)

const form = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'member',
  position: '',
  supervisor: ''
})

onMounted(() => {
  gsap.from('.reg-anim', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: 'power3.out'
  })
})

const createRipple = (event) => {
  const button = event.currentTarget
  const container = button.querySelector('.ripple-container')
  
  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2
  
  const rect = button.getBoundingClientRect()
  
  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - rect.left - radius}px`
  circle.style.top = `${event.clientY - rect.top - radius}px`
  circle.classList.add('animate-ripple', 'absolute', 'rounded-full', 'bg-white/30')
  
  container.appendChild(circle)
  
  setTimeout(() => circle.remove(), 800)
}

const handleRegister = async () => {
  loading.value = true
  
  gsap.to('.reg-anim', {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.04,
    ease: 'power2.in',
    onComplete: () => {
      setTimeout(() => {
        router.push('/auth/login')
      }, 400)
    }
  })
}
</script>
