import { useRuntimeConfig, type AsyncData } from 'nuxt/app'
import { defineStore } from 'pinia'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import globalPage from '@/graphql/Global.js'
import type { DatoGlobalResponse } from '@/types/dato-api-responses/Global'
import type { DatoRegionResponse } from '@/types/dato-api-responses/Region'
import type { Page } from '@/types/dato-models/Page'
import type { Region } from '@/types/dato-models/Region'
import type { Global } from '@/types/dato-models/Global'

interface Locations {
  name: string
}
interface CityLocations {
  name: string,
  cityLocations: Array<Locations>
}
export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      global: null as Global | null,
      region: null as Region | null,
      pages: [] as Array<Page>,
      localization: <Localization>{
        siteLocales: undefined as Array<string> | undefined,
        userSelectedLocale: undefined as string | undefined,
        translations: undefined as JSON | undefined
      },
      locations: [] as Array<CityLocations>
    }
  },
  getters: {
    getGlobalData (state): Global | null { return state.global },
    getCurrentRegion (state): Region | null { return state.region },
    getPages (state): Array<Page> | null { return state.pages },
    getCurrentLocale (): string | null {
      const routeLocale = useRoute().params.locale?.length === 2 && useRoute().params.locale
      return this.localization.userSelectedLocale || (routeLocale as string) || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
    },
    getLocations (state): any {
      return (cityName: string) => state.locations.find(x => x.name === cityName)?.cityLocations || null
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
        const locale = this.getCurrentLocale as string
        useNuxtApp().$i18n.setLocale(locale)
        const QUERY = `
            query {
              region(filter: {id: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale}) {
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
              translation(locale: ${locale}) {
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
    async getLocationsByCity (cityName: string) {
      if (this.locations.find(x => x.name === cityName)) { return }
      const { data: { value: response } } = await useFetch(
        `https://mycbdmurjytbdahjljoh.supabase.co/rest/v1/rpc/get_cryptocity_locations?cryptocity_name=${cityName}&apikey=${useRuntimeConfig().SUPA_KEY}`
      ) as AsyncData<Array<Locations>, RTCError>
      if (response) {
        this.locations.push(
          {
            name: cityName,
            cityLocations: response as Array<Locations>
          }
        )
      }
    },
    setLocale (newLocale: string, reInitRegion: Boolean = true) {
      if (newLocale) { this.localization.userSelectedLocale = newLocale }
      if (reInitRegion) { this.setNavigation(false) }
      useNuxtApp().$i18n.setLocale(newLocale)
    }
  }
})
