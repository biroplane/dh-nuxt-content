// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css:['~~/assets/css/app.css','~~/assets/css/tailwind.pcss'],
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'vue3-carousel-nuxt'
  ],
  content:{
    preview:{
      // api: 'https://api.nuxt.studio',
      dev:true
    }
  },
  vite:{
    server:{
      allowedHosts: ["*.trycloudflare.com"]
    }
  }
})