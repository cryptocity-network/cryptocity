// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-svgo'],
  runtimeConfig: {
    public: {
      GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      DATO_DOMAIN: process.env.DATO_DOMAIN,
      DATO_DEFAULT_LOCALE: process.env.DATO_DEFAULT_LOCALE
    }
  },
  components: {
    dirs: [
      {
        path: '~/components/datocms-blocks',
        global: true
      },
      '~/components'
    ]
  }
})
