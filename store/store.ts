import { useRuntimeConfig } from 'nuxt/app'
import { defineStore } from 'pinia'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import globalPage from '@/graphql/Global.js'
interface Partner {
  badge: string,
  companyName: string,
  description: string,
  label: string,
  linkLabel: string,
  linkUrl: string,
  logo: {
    url: string,
    alt: string,
  }
  socials: {
    youtube: string
    whatsapp: string
    twitter: string
    telegram: string
    linkedIn: string
    instagram: string
    facebook: string
    email: string
    discord: string
  }
}
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
  slug: string;
}
interface Country {
  pages: Array<Page>;
  id?: string;
  _locale?: string;
  partners?: Array<Partner>;
  socialLinks?: SocialLinks;
}
interface Localization {
  siteLocales: Array<string> | undefined,
  userSelectedLocale: string | undefined
}
interface Global {
  countries: Object | undefined,
  tagLine: string | undefined
}

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      global: null as Global | null,
      country: null as Country | null,
      pages: null as Array<Page> | null,
      localization: <Localization>{
        siteLocales: undefined as Array<string> | undefined,
        userSelectedLocale: undefined as string | undefined
      },
      pageType: null as string | null
    }
  },
  getters: {
    getGlobalData (state): Global | null { return state.global },
    getCurrentCountry (state): Country | null { return state.country },
    getCurrentLocale (): string | null {
      return this.localization.userSelectedLocale || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
    },
    getCurrentPageType (): string | null {
      return this.pageType
    }
  },
  actions: {
    async setNavigation (isGlobalPage: boolean | undefined) {
      const pageFields = (showSlug = true) => `
        id
        _modelApiKey
        navigationLabel
        ${showSlug ? 'slug' : ''}
      `
      let QUERY = `
          query {
            country(filter: {url: {eq: "${useRuntimeConfig().public.DATO_DOMAIN}"}}, locale: ${this.getCurrentLocale}) {
              id
              _locales
              pages {
                ... on AboutPageRecord {
                  ${pageFields()}
                }
                ... on BeginnerPageRecord {
                  ${pageFields()}
                }
                ... on HomePageRecord {
                  ${pageFields(false)}
                }
                ... on MerchantPageRecord {
                  ${pageFields()}
                }
                ... on NetworkPageRecord {
                  ${pageFields()}
                }
              }
              partners {
                badge
                companyName
                description
                label
                linkLabel
                linkUrl
                logo {
                  url
                  alt
                }
                socials {
                  youtube
                  whatsapp
                  twitter
                  telegram
                  linkedIn
                  instagram
                  facebook
                  email
                  discord
                }
              }
              socialLinks {
                image{
                  url
                }
                logo{
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
      if (isGlobalPage) {
        QUERY = globalPage()
      }
      const { data, error } = await useGraphqlQuery(QUERY)
      if (isGlobalPage) {
        this.global = data.value.global
      } else {
        this.pages = data.value.country.pages
        this.country = data.value.country
        this.localization.siteLocales = data.value.country._locales
      }
    },
    setLocale (locale: string) {
      if (locale) { this.localization.userSelectedLocale = locale }
      this.setNavigation(false)
    },
    setPageType (pageType: string) {
      this.pageType = pageType
    }
  }
})
