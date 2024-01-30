// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-svgo'
  ],
  svgo: {
    defaultImport: 'component'
  },
  runtimeConfig: {
    public: {
      GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      DATO_DOMAIN: process.env.DATO_DOMAIN,
      DATO_DEFAULT_LOCALE: process.env.DATO_DEFAULT_LOCALE,
      IS_HOME: process.env.IS_HOME
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
  },
  typescript: {
    typeCheck: true
  }
})
