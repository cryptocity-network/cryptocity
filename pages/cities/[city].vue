<template>
  <main v-if="pageData" class="min-h-screen">
    <BlockAnimatedCurrencyHero
      :data="pageData.heroSection"
      :index="0"
      :city-id="pageData.id"
      :background-color="backgroundColorArray?.[0]"
    />
    <BlockIframe
      :data="pageData.iframe"
      :city-name="pageData.name"
      :index="1"
      :background-color="backgroundColorArray?.[1]"
    />
    <BlockMapBusiness
      :data="pageData.mapBusinesses"
      :index="2"
      :background-color="backgroundColorArray?.[2]"
    />
    <BlockPartnerLogo
      :data="pageData.partnerLogos"
      :index="3"
      :background-color="backgroundColorArray?.[3]"
    />
    <BlockHeadline
      :data="pageData.eventsHeadline"
      :index="4"
      :background-color="backgroundColorArray?.[4]"
    />
    <BlockEventsCarousel
      :data="pageData.eventsCarousel"
      :index="5"
      :background-color="backgroundColorArray?.[5]"
      :city-id="data.city.id"
    />
    <BlockStartingGrid
      :data="pageData.startingGrid"
      :index="6"
      :background-color="backgroundColorArray?.[6]"
    />
    <BlockHeadline
      :data="pageData.missionHeadline"
      :index="7"
      :background-color="backgroundColorArray?.[7]"
    />
    <BlockCityGrid
      :data="pageData.cityGrid"
      :index="8"
      :background-color="backgroundColorArray?.[8]"
      :city-id="data.city.id"
    />
    <!-- :background-color="backgroundColorArray?.[0]" -->
    <!-- <template
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
    </template> -->
  </main>
  <ErrorMessage v-else-if="!data.city" />
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery.js'
import city from '@/graphql/pages/City.js'
import type { CityResponse } from '@/types/dato-api-responses/City'

const route = useRoute()

const { locale } = useI18n()

const citySlug = route.params.city
const cityQuery = city(citySlug, locale.value)

const { data } = await useGraphqlQuery(cityQuery) as AsyncData<CityResponse, RTCError>

const pageData = computed(() => {
  if (data) {
    return data.value.city
  }
  return null
})

const backgroundColorArray = computed(() => {
  if (data) {
    return Object.values(data.value.city.backgroundColors)
  }
  return null
})

// useSeoMeta({
//   description: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'description')?.attributes?.content,
//   ogTitle: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:title')?.attributes?.content,
//   ogDescription: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:description')?.attributes?.content,
//   ogImage: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image')?.attributes?.content,
//   ogImageHeight: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:height')?.attributes?.content,
//   ogImageWidth: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:width')?.attributes?.content,
//   ogLocale: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:locale')?.attributes?.content,
//   ogSiteName: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:site_name')?.attributes?.content,
//   twitterImage: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:image')?.attributes?.content,
//   twitterSite: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:site')?.attributes?.content,
//   twitterDescription: data.value?.city._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:description')?.attributes?.content,
//   twitterCard: 'summary'
// })
</script>
