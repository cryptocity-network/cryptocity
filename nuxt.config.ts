// https://nuxt.com/docs/api/configuration/nuxt-config
import type { LocaleObject } from '@nuxtjs/i18n'

const processLocales = () => {
  const locales = process.env.NUXT_PUBLIC_DATO_REGION_LOCALES
  if (locales) {
    const localeArray = locales?.split(',').map(l => l.trim())
    return localeArray?.map((x) => {
      return {
        code: x,
        file: x + '.js'
      }
    }) as LocaleObject[]
  } else {
    // If no region locales are defined - ensure that the default region is applied
    const defaultLocale = process.env.NUXT_PUBLIC_DATO_DEFAULT_LOCALE
    return [
      {
        code: defaultLocale,
        file: defaultLocale + '.js'
      }
    ] as LocaleObject[]
  }
}

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
    'nuxt-gtag',
    '@vueuse/nuxt'
  ],
  i18n: {
    locales: processLocales(),
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    defaultLocale: process.env.NUXT_PUBLIC_DATO_DEFAULT_LOCALE,
    strategy: 'prefix',
    lazy: true,
    langDir: 'lang'
  },
  svgo: {
    defaultImport: 'component'
  },
  runtimeConfig: {
    REDIRECT_RULES: process.env.REDIRECT_RULES,
    public: {
      GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
      SUPA_KEY: process.env.SUPA_KEY,
      DATO_TOKEN: process.env.DATO_TOKEN,
      DATO_REGION_ID: process.env.DATO_REGION_ID,
      DATO_DEFAULT_LOCALE: process.env.DATO_DEFAULT_LOCALE,
      DATO_REGION_LOCALES: process.env.DATO_REGION_LOCALES,
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
