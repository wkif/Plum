// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  unocss: {
    // icon: https://icones.js.org/   interactive: https://unocss.dev/interactive/
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: []
  },
  css: ['~/assets/css/index.css', '~/assets/css/font.css']
})
