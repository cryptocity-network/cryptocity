import { useRuntimeConfig, type AsyncData } from 'nuxt/app'
import { defineStore } from 'pinia'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import globalPage from '@/graphql/Global.js'
import type { DatoGlobalResponse } from '@/types/dato-api-responses/Global'
import type { DatoRegionResponse } from '@/types/dato-api-responses/Region'
import type { Page } from '@/types/dato-models/Page'
import type { Region } from '@/types/dato-models/Region'
import type { Global } from '@/types/dato-models/Global'

interface Location {
  name: string
  gmaps: string
  photo: string
  rating: number
  address: string
  enabled: boolean
  category: string
}
export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      newsLang: null as string | null,
      global: null as Global | null,
      region: null as Region | null,
      pages: [] as Array<Page>,
      localization: <Localization>{
        siteLocales: undefined as Array<string> | undefined,
        translations: undefined as JSON | undefined
      },
      locations: new Map<string, Location[]>()
    }
  },
  getters: {
    getGlobalData (state): Global | null { return state.global },
    getCurrentRegion (state): Region | null { return state.region },
    getPages (state): Array<Page> | null { return state.pages },
    getLocations (state): (cityName: string) => (Location[] | null) {
      return (cityName: string) => (state.locations.get(cityName) || null)
    }
  },
  actions: {
    async setNavigation (isGlobalPage: boolean | undefined) {
      if (isGlobalPage) {
        const QUERY = globalPage()
        const { data: { value: body } } = await useGraphqlQuery(QUERY) as AsyncData<DatoGlobalResponse, RTCError>
        this.global = body.global
      } else {
        const pageFields = (showNavLabel = true) => `
          id
          _modelApiKey
          ${showNavLabel ? 'navigationLabel' : ''}
        `
        const { locale } = useI18n()
        const QUERY = `
        query {
          region(filter: {id: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale.value}) {
            id
            _locales
            brandName
            brandIntellectualPropertySymbols
            mainImage {
              url
              alt
            }
            _allReferencingHomePages {
              ${pageFields(false)}
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
            _allReferencingNewsPages {
              ${pageFields()}
            }
            _allReferencingAboutPages {
              ${pageFields()}
            }
            _allReferencingContactPages {
              ${pageFields()}
            }
            _allReferencingCities {
                  name
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
              translation(locale: ${locale.value}) {
                translations
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
    async loadLocationsByCity (cityName: string) {
      if (this.locations.has(cityName)) {
        console.debug('Already have locations for city', cityName, this.locations.get(cityName))
        return
      }
      console.debug('Fetching locations for city', cityName)
      const locations = await $fetch<Array<Location>>(
        `https://mycbdmurjytbdahjljoh.supabase.co/rest/v1/rpc/get_cryptocity_locations?cryptocity_name=${cityName}&only_enabled=1&apikey=${useRuntimeConfig().public.SUPA_KEY}`)
      this.locations.set(cityName, locations)
    }
  }
})
