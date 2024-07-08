// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: {
  //   enabled: true,
  // },
  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon-196x196.png', sizes: '196x196' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: '/favicon-128.png', sizes: '128x128' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://hits-i.iubenda.com' },
        { rel: 'dns-prefetch', href: 'https://cdn.iubenda.com' },
        { rel: 'dns-prefetch', href: 'https://flagcdn.com' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
    'nuxt-gtag'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'de',
        file: 'de.js'
      },
      {
        code: 'es',
        file: 'es.js'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    defaultLocale: 'en',
    strategy: 'prefix',
    lazy: true,
    langDir: 'lang'
  },
  svgo: {
    defaultImport: 'component'
  },
  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
      SUPA_KEY: process.env.SUPA_KEY,
      DATO_TOKEN: process.env.DATO_TOKEN,
      DATO_REGION_ID: process.env.DATO_REGION_ID,
      DATO_DEFAULT_LOCALE: process.env.DATO_DEFAULT_LOCALE,
      IS_GLOBAL_SITE: process.env.IS_GLOBAL_SITE
    }
  },
  typescript: {
    typeCheck: true
  },
  imports: {
    dirs: ['types/*.d.ts']
  }
})
