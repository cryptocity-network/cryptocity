<template>
  <main v-if="!error && data.city" class="min-h-screen">
    <template
      v-for="(component, index) in components"
      :key="typeof component === 'string' ? 'id' : component?.id"
    >
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        v-if="component && component._modelApiKey"
        :component-name="component._modelApiKey"
        :data="component"
        :index="index"
        :city-id="data.city.id"
        :background-color="backgroundColorArray?.[index]"
      />
    </template>
  </main>
  <ErrorMessage v-else-if="data.city === null" />
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery.js'
import city from '@/graphql/pages/City.js'
import type { CityResponse } from '@/types/dato-api-responses/City'
import { useWebsiteStore } from '@/store/store'

const store = useWebsiteStore()
const route = useRoute()

const param = route.params.city as string
const cityName = param.charAt(0).toUpperCase() + route.params.city.slice(1)
const cityQuery = city(cityName, store.getCurrentLocale)

const { data, error } = await useGraphqlQuery(cityQuery) as AsyncData<CityResponse, RTCError>

const backgroundColorArray = computed(() => {
  if (data) {
    return Object.values(data.value.city.backgroundColors)
  }
  return null
})

const components = computed(() => {
  if (data.value?.city !== null) {
    return filterCityResponseForComponents(data.value) as Array<Component>
  }
  return null
})
useSeoMeta({
  description: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: data.value.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>
