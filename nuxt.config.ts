// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0', 
      title: 'Nuxt App',
      meta: [
        { name: 'description', content: 'This is nuxt v3 sample site' }
      ],
    }
  },
  css: [
    'vuetify/lib/styles/main.sass'
  ],
  build: {
    transpile: ['vuetify']
  }
})
