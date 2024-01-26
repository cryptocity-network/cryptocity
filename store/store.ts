import { useRuntimeConfig } from 'nuxt/app'
import { defineStore } from 'pinia'
import useGraphqlQuery from '../composables/useGraphqlQuery'
interface SocialLinks {
  role: string,
  name: string,
  email: string,
  telegram: string,
  linkedin: string,
  image: Object,
}
interface Page {
  id?: string;
  _modelApiKey: string;
  navigationLabel: string;
}
interface Country {
  pages: Array<Page>;
  id?: string;
  _locale?: string;
  socialLinks?: SocialLinks;
}
interface Localization {
  siteLocales: Array<string> | undefined,
  userSelectedLocale: string | undefined
}

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      country: null as Country | null,
      pages: null as Array<Page> | null,
      localization: <Localization>{
        siteLocales: undefined as string | undefined,
        userSelectedLocale: undefined as string | undefined
      }
    }
  },
  getters: {
    getCurrentCountry (state): Object | null { return state.country },
    getCurrentLocale (): string | null {
      return this.localization.userSelectedLocale || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
    }
  },
  actions: {
    async setNavigation () {
      const pageFields = `
        id
        _modelApiKey
        navigationLabel
      `
      const QUERY = `
          query {
            country(filter: {url: {eq: "kryptostadt.de"}}, locale: ${this.getCurrentLocale}) {
              id
              _locales
              pages {
                ... on AboutPageRecord {
                  ${pageFields}
                }
                ... on BeginnerPageRecord {
                  ${pageFields}
                }
                ... on HomePageRecord {
                  ${pageFields}
                }
                ... on MerchantPageRecord {
                  ${pageFields}
                }
                ... on NetworkPageRecord {
                  ${pageFields}
                }
              }
              socialLinks {
                name
                image{
                  url
                }
                twitter
                telegram
                email
                linkedIn
              }
            }
          }
        `
      const { data, error } = await useGraphqlQuery({ query: QUERY })

      this.pages = data.value.country.pages
      this.country = data.value.country
      this.localization.siteLocales = data.value.country._locales
    },
    setLocale (locale: string) {
      this.localization.userSelectedLocale = locale
      this.setNavigation()
    }
  }
})
