// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
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