import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router/index.ts'

import ru from './locales/ru.json'
import en from './locales/en.json'
import uz from './locales/uz.json'

const savedLanguage = localStorage.getItem('language') || 'ru'

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'ru',
  messages: {
    ru,
    en,
    uz
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')