// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      DATO_DOMAIN: process.env.DATO_DOMAIN
    }
  }
})
