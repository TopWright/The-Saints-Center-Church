import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
import App from './App.vue'
import 'primeicons/primeicons.css'
import './style.css'

const app = createApp(App)

app.use(router)

app.use(VueQueryPlugin)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode'
    }
  }
})

app.mount('#app')
