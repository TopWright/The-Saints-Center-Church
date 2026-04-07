<template>
  <div class="w-full max-w-[550px] bg-white/90 backdrop-blur-3xl rounded-[60px] p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.08)] flex flex-col items-center">
    
    <!-- Logo -->
    <div class="auth-anim w-24 h-24 mb-6 flex items-center justify-center pointer-events-none select-none">
      <img src="/Logo-black.png" alt="TSC Logo" class="w-full h-full object-contain" />
    </div>

    <h1 class="auth-anim font-display text-4xl md:text-5xl text-[#0b1221] mb-2 font-medium tracking-tight">Admin Login</h1>
    <p class="auth-anim font-sans text-[13px] text-[#707070] mb-12 tracking-tight">
      Enter your credentials to access the sanctuary portal
    </p>

    <form @submit.prevent="handleLogin" class="w-full space-y-8">
      <!-- Email -->
      <div class="auth-anim space-y-2">
        <label class="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60 ml-6">
          Email Address
        </label>
        <div class="relative group">
          <input 
            v-model="form.email"
            type="email" 
            placeholder="admin@saintscenter.org"
            class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[15px] transition-all duration-300 placeholder:text-[#a0a0a0] focus:bg-white"
          />
        </div>
      </div>

      <!-- Password -->
      <div class="auth-anim space-y-2">
        <div class="flex items-center justify-between px-6">
          <label class="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#1a1d20]/60">
            Password
          </label>
          <a href="#" class="font-sans font-bold text-[10px] uppercase tracking-widest text-[#d47a22] hover:opacity-70 transition-opacity">
            Forgot password?
          </a>
        </div>
        <div class="relative group">
          <input 
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'" 
            placeholder="••••••••"
            class="w-full px-8 py-5 bg-[#E9E9E9]/40 rounded-full border border-bronze-dark/20 focus:border-prussian/50 focus:ring-4 focus:ring-prussian/10 font-sans text-[15px] transition-all duration-300 placeholder:text-[#a0a0a0] focus:bg-white"
          />
          <button 
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-6 top-1/2 -translate-y-1/2 text-[#a0a0a0] hover:text-[#1a1d20] transition-colors"
          >
            <i class="pi" :class="showPassword ? 'pi-eye-slash' : 'pi-eye'"></i>
          </button>
        </div>
      </div>

      <!-- Remember Me -->
      <div class="auth-anim flex items-center gap-3 px-6">
        <label class="relative flex items-center cursor-pointer group">
          <input type="checkbox" v-model="form.remember" class="peer sr-only" />
          <div class="w-5 h-5 bg-[#E9E9E9] rounded-md border-none peer-checked:bg-[#d47a22] transition-all duration-300"></div>
          <i class="pi pi-check absolute text-[10px] text-white opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"></i>
          <span class="ml-3 font-sans text-[13px] text-[#707070] font-normal group-hover:text-[#1a1d20] transition-colors">
            Keep me signed in for 30 days
          </span>
        </label>
      </div>

      <!-- Submit Button -->
      <div class="auth-anim pt-4">
        <button
          type="submit"
          class="relative w-full py-6 bg-[#0b1221] text-white rounded-full font-sans font-bold text-[14px] uppercase tracking-[0.2em] group shadow-xl shadow-[#0b1221]/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          @mousedown="createRipple"
        >
          <span class="relative z-10 flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-105">
            {{ loading ? 'Authenticating...' : 'Login to Dashboard' }}
            <i class="pi pi-arrow-right text-[12px]" v-if="!loading"></i>
            <i class="pi pi-spin pi-spinner text-[12px]" v-else></i>
          </span>
          
          <!-- Ripple Container -->
          <div class="ripple-container absolute inset-0 pointer-events-none"></div>
        </button>
      </div>
    </form>

    <div class="auth-anim mt-12 text-center flex flex-col gap-4">
      <p class="font-sans text-[13px] text-[#707070]">
        Not yet a member? 
        <router-link to="/auth/register" class="text-[#d47a22] font-bold hover:opacity-70 transition-opacity ml-1">Join the Ministry</router-link>
      </p>
      
      <p class="font-sans text-[9px] uppercase tracking-[0.3em] font-bold text-[#a0a0a0]">
        INSTITUTIONAL ACCESS ONLY. 
        <a href="#" class="text-[#d47a22] hover:underline">NEED HELP?</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const loading = ref(false)
const showPassword = ref(false)

const form = ref({
  email: '',
  password: '',
  remember: false
})

onMounted(() => {
  gsap.from('.auth-anim', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
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

const handleLogin = async () => {
  if (!form.value.email || !form.value.password) return
  
  loading.value = true
  
  // Premium simulated auth
  gsap.to('.auth-anim', {
    y: -10,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power2.in',
    onComplete: () => {
      setTimeout(() => {
        localStorage.setItem('tsc_token', 'demo-token')
        router.push('/admin')
      }, 500)
    }
  })
}
</script>
