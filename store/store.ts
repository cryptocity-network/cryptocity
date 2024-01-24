import { useRuntimeConfig } from 'nuxt/app'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import { defineStore } from 'pinia'

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      country: null,
      pages: null,
      localization: {
        siteLocales: null,
        userSelectedLocale: null
      }
    }
  },
  getters: {
    getCurrentCountry (state) { return state.country },
    getCurrentLocale (state) {
      return this.localization.userSelectedLocale || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
    }
  },
  actions: {
    async setNavigation () {
      const QUERY = `
          query {
            country(filter: {url: {eq: "kryptostadt.de"}}, locale: de) {
              id
              _locales
              pages {
                ... on AboutPageRecord {
                  id
                  _modelApiKey
                }
                ... on BeginnerPageRecord {
                  id
                  _modelApiKey
                }
                ... on HomePageRecord {
                  id
                  _modelApiKey
                }
                ... on MerchantPageRecord {
                  id
                  _modelApiKey
                }
                ... on NetworkPageRecord {
                  id
                  _modelApiKey
                }
              }
            }
          }
        `
      const { data, error } = await useGraphqlQuery({ query: QUERY })
      this.pages = data.value.country.pages
      this.country = data.value.country
      this.localization.siteLocales = data.value.country._locales
    },
    setLocale (locale) {
      this.localization.userSelectedLocale = locale
      this.setNavigation()
    }
  }
})
