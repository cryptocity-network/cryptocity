import { ref } from 'vue'
import { useRuntimeConfig, type AsyncData } from 'nuxt/app'
import { defineStore } from 'pinia'
import { getRegionQuery } from '../graphql/Region'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import globalPage from '@/graphql/Global.js'
import type { DatoGlobalResponse } from '@/types/dato-api-responses/Global'
import type { DatoRegionResponse } from '@/types/dato-api-responses/Region'
import type { Page } from '@/types/dato-models/Page'
import type { Region } from '@/types/dato-models/Region'
import type { Global } from '@/types/dato-models/Global'

interface Location {
  name: string
  slug: string
  gmaps: string
  photo: string
  rating: number
  address: string
  enabled: boolean
  category: string
}

interface LoadLocationsByCityOptions {
  cityName: string
  page?: number
}

interface GetCryptocityLocationsResponse {
  data: Location[]
  pagination: {
    page_number: number
    page_size: number
    total_items: number
    total_pages: number
  }
}

export const useWebsiteStore = defineStore('websiteStore', () => {
  const newsLang = ref<string>()
  const global = ref<Global>()
  const region = ref<Region>()
  const pages = ref<Array<Page>>([])
  const localization = ref({
    siteLocales: undefined as Array<string> | undefined,
    translations: undefined as JSON | undefined
  })
  const locations = ref<Record<string, Location[]>>({})
  const loadingLocations = ref(false)
  const fetchedPages = ref<Record<string, { pages: Set<number>, totalPages: number }>>({})// Map of fetched pages by city name

  function getLocations (cityName: string) {
    return locations.value[cityName] || undefined
  }

  async function setNavigation (isGlobalPage: boolean | undefined) {
    if (isGlobalPage) {
      const QUERY = globalPage()
      const { data: { value: body } } = await useGraphqlQuery(QUERY) as AsyncData<DatoGlobalResponse, RTCError>
      global.value = body.global
    } else {
      const { locale } = useI18n()
      const QUERY = getRegionQuery(locale.value)
      const { data: { value: body } } = await useGraphqlQuery(QUERY) as AsyncData<DatoRegionResponse, RTCError>
      pages.value = []
      for (const property in body.region) {
        if (property.includes('Pages')) {
          const value = body.region[property as keyof typeof body.region] as Page[]
          if (typeof value === 'object' && value[0]) {
            pages.value?.push((value as Page[])[0])
          }
        }
      }
      region.value = body.region
      localization.value.siteLocales = body.region._locales
    }
  }

  async function loadLocationsByCity ({ cityName, page = 1 }: LoadLocationsByCityOptions) {
    const supabaseCityName = cityName.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).replace(/ /g, '_')

    if (fetchedPages.value[cityName]?.pages.has(page)) {
      return
    }
    if (page > (fetchedPages.value[cityName]?.totalPages || Number.POSITIVE_INFINITY)) {
      return
    }

    loadingLocations.value = true
    const url = new URL('https://mycbdmurjytbdahjljoh.supabase.co/rest/v1/rpc/get_cryptocity_locations')
    url.searchParams.append('cryptocity_name', supabaseCityName)
    url.searchParams.append('only_enabled', '1')
    url.searchParams.append('apikey', useRuntimeConfig().public.SUPA_KEY)
    url.searchParams.append('page_number', page.toString())
    const res = await $fetch<GetCryptocityLocationsResponse>(url.href)
    if (!('data' in res) || !('pagination' in res)) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch locations for city', cityName, res)
      loadingLocations.value = false
      return
    }
    locations.value[cityName] = locations.value[cityName]?.concat(res.data) || res.data
    if (!fetchedPages.value[cityName]) {
      fetchedPages.value[cityName] = { pages: new Set(), totalPages: res.pagination.total_pages }
    }
    fetchedPages.value[cityName].pages.add(page)
    loadingLocations.value = false
  }

  return {
    newsLang,
    global,
    region,
    pages,
    localization,
    locations,
    getLocations,
    fetchedPages,
    hasCityFetchedAllLocations: computed<Record<string, boolean>>(() => {
      return Object.fromEntries(Object.entries(fetchedPages.value).map(([cityName, { pages, totalPages }]) => [cityName, pages.size === totalPages]))
    }),
    loadingLocations,

    regionIsTrademark: computed(() => region.value?.brandIntellectualPropertySymbols === 'trademark'),
    regionIsRegistered: computed(() => region.value?.brandIntellectualPropertySymbols === 'registered'),
    regionBrandName: computed(() => region.value?.brandName),

    setNavigation,
    loadLocationsByCity
  }
})
