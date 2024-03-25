// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },
  hooks: {
    'pages:extend' (pages) {
      // Add locale versions of base pages
      pages.push(
        // Dynamic Pages
        {
          name: 'index-locale',
          path: '/:locale',
          file: '~/pages/index.vue'
        },
        {
          name: 'dynamic-locale',
          path: '/:locale/:uid',
          file: '~/pages/index.vue'
        },
        {
          name: 'city-locale',
          path: '/:locale/cities/:city',
          file: '~/pages/cities/[city].vue'
        },
        {
          name: 'news-locale',
          path: '/:locale/news/:news',
          file: '~/pages/news/[news].vue'
        },
        // Static Pages
        {
          name: 'cookies-locale',
          path: '/:locale/cookies',
          file: '~/pages/cookies.vue'
        },
        {
          name: 'data-protection-locale',
          path: '/:locale/data-protection',
          file: '~/pages/data-protection.vue'
        },
        {
          name: 'haftungsausschluss-locale',
          path: '/:locale/haftungsausschluss',
          file: '~/pages/haftungsausschluss.vue'
        },
        {
          name: 'impressum-locale',
          path: '/:locale/impressum',
          file: '~/pages/impressum.vue'
        }
      )
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
    '@nuxtjs/i18n'
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
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'de' // if you are using custom path, default
  },
  svgo: {
    defaultImport: 'component'
  },
  runtimeConfig: {
    GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
    SUPA_KEY: process.env.SUPA_KEY,
    public: {
      DATO_TOKEN: process.env.DATO_TOKEN,
      DATO_REGION_ID: process.env.DATO_REGION_ID,
      DATO_DEFAULT_LOCALE: process.env.DATO_DEFAULT_LOCALE,
      IS_GLOBAL_SITE: process.env.IS_GLOBAL_SITE
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
  },
  imports: {
    dirs: ['types/*.d.ts']
  }
})
