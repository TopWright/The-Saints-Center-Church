<template>
  <div>
    <h2 class="text-ghost text-xl font-bold mb-1">Create Account</h2>
    <p class="text-wisteria text-sm mb-6">Join The Saints Center community</p>

    <form @submit.prevent="handleRegister" class="space-y-4">
      <AppInput v-model="form.fullName" placeholder="Full name" icon="user" id="register-name" />
      <AppInput v-model="form.email" type="email" placeholder="Email address" icon="envelope" id="register-email" />
      <AppInput v-model="form.phone" placeholder="Phone number" icon="phone" id="register-phone" />
      <AppInput v-model="form.password" type="password" placeholder="Password" icon="lock" id="register-password" />
      <AppInput v-model="form.confirmPassword" type="password" placeholder="Confirm password" icon="lock" id="register-confirm" />

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-bronze hover:bg-bronze-light text-ghost font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-bronze/25 text-sm disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <i v-if="loading" class="pi pi-spin pi-spinner"></i>
        {{ loading ? 'Creating account...' : 'Create Account' }}
      </button>
    </form>

    <p class="text-center text-wisteria text-sm mt-6">
      Already have an account?
      <router-link to="/auth/login" class="text-bronze hover:text-bronze-light font-semibold transition-colors">Sign In</router-link>
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
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = async () => {
  loading.value = true
  setTimeout(() => {
    router.push('/auth/login')
    loading.value = false
  }, 1500)
}
</script>
