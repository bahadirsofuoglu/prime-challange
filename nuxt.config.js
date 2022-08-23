import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  typescript: false,
  components: true,

  css: [
    '/node_modules/primeflex/primeflex.css',
    '/node_modules/primeicons/primeicons.css',
    '@/assets/scss/index.scss'
  ],
  modules: ['@pinia/nuxt']
})
