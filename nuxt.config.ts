// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon-196x196.png', sizes: '196x196' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: '/favicon-128.png', sizes: '128x128' }
      ]
    }
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
      GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN,
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
