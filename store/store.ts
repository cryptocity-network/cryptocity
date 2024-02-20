import { useRuntimeConfig, type AsyncData } from 'nuxt/app'
import { defineStore } from 'pinia'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import globalPage from '@/graphql/Global.js'
import type { DatoGlobalResponse } from '@/types/dato-api-responses/Global'
import type { DatoRegionResponse } from '@/types/dato-api-responses/Region'
import type { Page } from '@/types/dato-models/Page'
import type { Region } from '@/types/dato-models/Region'
import type { Global } from '@/types/dato-models/Global'

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
      if (isGlobalPage) {
        const QUERY = globalPage()
        const { data: { value: body } } = await useGraphqlQuery(QUERY) as AsyncData<DatoGlobalResponse, RTCError>
        this.global = body.global
      } else {
        const pageFields = (showSlug = true, showNavLabel = true) => `
          id
          _modelApiKey
          ${showNavLabel ? 'navigationLabel' : ''}
          ${showSlug ? 'slug' : ''}
        `
        const QUERY = `
            query {
              region(filter: {id: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${this.getCurrentLocale}) {
                id
                _locales
                brandName
                mainImage {
                  url
                  alt
                }
                _allReferencingCities {
                  name
                }
                _allReferencingHomePages {
                  ${pageFields(false, false)}
                }
                _allReferencingMerchantPages {
                  ${pageFields()}
                }
                _allReferencingBeginnerPages {
                  ${pageFields()}
                }
                _allReferencingNetworkPages {
                  ${pageFields()}
                }
                _allReferencingAboutPages {
                  ${pageFields()}
                }
                _allReferencingContactPages {
                  ${pageFields()}
                  header
                  subline
                  formUrl
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
        const { data: { value: body } } = await useGraphqlQuery(QUERY) as AsyncData<DatoRegionResponse, RTCError>
        this.pages = []
        for (const property in body.region) {
          if (property.includes('Pages')) {
            const value = body.region[property as keyof typeof body.region] as Page[]
            if (typeof value === 'object' && value[0]) {
              this.pages?.push((value as Page[])[0])
            }
          }
        }
        this.region = body.region
        this.localization.siteLocales = body.region._locales
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
