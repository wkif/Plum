// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@vant/nuxt'],
  unocss: {
    // icon: https://icones.js.org/   interactive: https://unocss.dev/interactive/
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: []
  },
  css: ['~/assets/css/index.css', '~/assets/css/font.css'],
  vant: {},
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue({ file }: any) {
          return file.includes('vant') ? 37.5 : 100
        },
        propList: ['*'],
        exclude: /(node_module)/,
        selectorBlackList: ['html', '.rem-ignore']
      }
    }
  }
})
