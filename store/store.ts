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
  logo: Object
}
interface Page {
  id?: string;
  _modelApiKey: string;
  navigationLabel: string;
  slug: string;
}
interface Region {
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
  regions: Object | undefined,
  tagLine: string | undefined
}

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      global: null as Global | null,
      region: null as Region | null,
      pages: [] as Array<Page>,
      localization: <Localization>{
        siteLocales: undefined as Array<string> | undefined,
        userSelectedLocale: undefined as string | undefined
      },
      pageType: null as string | null
    }
  },
  getters: {
    getGlobalData (state): Global | null { return state.global },
    getCurrentRegion (state): Region | null { return state.region },
    getPages (state): Array<Page> | null { return state.pages },
    getCurrentLocale (): string | null {
      return this.localization.userSelectedLocale || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
    },
    getCurrentPageType (): string | null {
      return this.pageType
    }
  },
  actions: {
    async setNavigation (isGlobalPage: boolean | undefined) {
      const pageFields = (showSlug = true, showNavLabel = true) => `
        id
        _modelApiKey
        ${showNavLabel ? 'navigationLabel' : ''}
        ${showSlug ? 'slug' : ''}
      `
      // pages {
      //   ... on AboutPageRecord {
      //   }
      //   ... on BeginnerPageRecord {
      //     ${pageFields()}
      //   }
      //   ... on HomePageRecord {
      //     ${pageFields(false, false)}
      //   }
      //   ... on MerchantPageRecord {
      //     ${pageFields()}
      //   }
      //   ... on NetworkPageRecord {
      //     ${pageFields()}
      //   }
      // }
      let QUERY = `
          query {
            region(filter: {url: {eq: "${useRuntimeConfig().public.DATO_DOMAIN}"}}, locale: ${this.getCurrentLocale}) {
              id
              _locales
              mainImage {
                url
              }
              _allReferencingHomePages (filter: {_status: {eq: published}}) {
                ${pageFields(false, false)}
              }
              _allReferencingMerchantPages (filter: {_status: {eq: published}}) {
                ${pageFields()}
              }
              _allReferencingBeginnerPages (filter: {_status: {eq: published}}) {
                ${pageFields()}
              }
              _allReferencingNetworkPages (filter: {_status: {eq: published}}) {
                ${pageFields()}
              }
              _allReferencingAboutPages (filter: {_status: {eq: published}}) {
                ${pageFields()}
              }
              partners {
                companyName
                description
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
      const { data } = await useGraphqlQuery(QUERY)
      if (isGlobalPage) {
        this.global = data.value.global
      } else {
        this.pages = []
        for (const property in data.value.region) {
          if (property.includes('_allReferencing')) {
            if (data.value.region[property][0] !== undefined) {
              this.pages?.push(data.value.region[property][0])
            }
          }
        }
        this.region = data.value.region
        this.localization.siteLocales = data.value.region._locales
      }
    },
    setLocale (locale: string, reInitRegion: Boolean = true) {
      if (locale) { this.localization.userSelectedLocale = locale }
      if (reInitRegion) { this.setNavigation(false) }
    },
    setPageType (pageType: string) {
      this.pageType = pageType
    }
  }
})
