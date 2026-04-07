<template>
  <div>
    <h2 class="text-ghost text-xl font-bold mb-1">Welcome Back</h2>
    <p class="text-wisteria text-sm mb-6">Sign in to your account</p>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <AppInput v-model="form.email" type="email" placeholder="Email address" icon="envelope" id="login-email" />
      <AppInput v-model="form.password" type="password" placeholder="Password" icon="lock" id="login-password" />

      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center gap-2 text-wisteria cursor-pointer">
          <input type="checkbox" v-model="form.remember" class="rounded border-white/20 bg-white/10 text-bronze focus:ring-bronze" />
          Remember me
        </label>
        <a href="#" class="text-bronze hover:text-bronze-light transition-colors">Forgot password?</a>
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-bronze hover:bg-bronze-light text-ghost font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-bronze/25 text-sm disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <i v-if="loading" class="pi pi-spin pi-spinner"></i>
        {{ loading ? 'Signing in...' : 'Sign In' }}
      </button>
    </form>

    <p class="text-center text-wisteria text-sm mt-6">
      Don't have an account?
      <router-link to="/auth/register" class="text-bronze hover:text-bronze-light font-semibold transition-colors">Sign Up</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppInput from '@/components/shared/AppInput.vue'

const router = useRouter()
const loading = ref(false)

const form = ref({
  email: '',
  password: '',
  remember: false
})

const handleLogin = async () => {
  loading.value = true
  setTimeout(() => {
    localStorage.setItem('tsc_token', 'demo-token')
    router.push('/admin')
    loading.value = false
  }, 1500)
}
</script>
