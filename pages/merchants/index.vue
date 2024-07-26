<template>
  <main>
    <div v-if="pageData" class="overflow-x-hidden">
      <BlockHeroSection
        :data="pageData.herosection"
        :index="0"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.hero"
      />
      <BlockPaymentTable
        :data="pageData.paymentTable"
        :background-color="'gray'"
        :index="2"
        :page-response="pageData"
      />
      <BlockHeadline
        :data="pageData.consultationHeadline"
        :index="2"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.consultationHeadline"
      />
      <BlockZigZagContent
        :data="pageData.zigZagContent"
        :index="3"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.zigZagContent"
      />
      <BlockHeadline
        :data="pageData.whyCrypto"
        :index="4"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.whyCrypto"
      />
      <BlockGrid
        :data="pageData.grid"
        :index="5"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.grid"
      />
      <BlockHeadline
        :data="pageData.youtubeHeadline"
        :index="6"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.youtubeHeadline"
      />
      <BlockYoutubeVideoCarousel
        :index="7"
        :background-color="pageData.backgroundColors?.youtubeCarousel"
        :data="pageData.youtubeCarousel"
      />
      <BlockHeadline
        :data="pageData.eventsHeadline"
        :index="8"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.eventsHeadline"
      />
      <BlockEventsCarousel
        :data="pageData.events"
        :index="9"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.events"
      />
      <BlockHeadline
        :data="pageData.contactHeadline"
        :index="10"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.contactHeadline"
      />
      <BlockContactForm show-header />
    </div>
    <ErrorMessage v-else-if="error" />
    <div v-else class="h-screen bg-gray" />
  </main>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import MerchantQuery from '../../graphql/pages/MerchantPage'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import type { SeoTags } from '~/types/dato-api-responses/ContactPage'

  interface MerchantPage {
    merchantPage: {
      backgroundColors: {
        hero: string,
        tiltedVideo: string,
        consultationHeadline: string,
        zigZagContent: string,
        whyCrypto: string,
        grid: string,
        youtubeHeadline: string,
        youtubeCarousel: string,
        eventsHeadline: string,
        events: string,
        contactHeadline: string,
        paymentTable: string,
      },
      _seoMetaTags: Array<SeoTags>,
      herosection: Component,
      tiltVideo: Component,
      consultationHeadline: Component,
      zigZagContent: Component,
      paymentTable: Component,
      grid: Component,
      whyCrypto: Component,
      youtubeHeadline: Component,
      youtubeCarousel: Component,
      eventsHeadline: Component,
      events: Component,
      contactHeadline: Component,
    }
  }
//   /* ROUTE LOCALE PARAM HERE CAN BE CONFUSING
//     - Locale always refers to first route param in this instance. Whether that is a page name or a language locale
//     - currentPageType function filters for this where it compares this first param to siteLocales
//     - If not a locale then it treats as a page and moves forwards. This is a quirk of having dynamic urls which change depending on language
//   */

const { locale } = useI18n()
const query = MerchantQuery(locale.value)

const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<MerchantPage, RTCError>
const pageData = computed(() => {
  if (response) {
    return response.merchantPage
  }
  return null
})
const currentHtmlLang = computed(() => {
  return useI18n().locale.value
})
useHead({
  htmlAttrs: {
    lang: currentHtmlLang.value as string || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
  }
})

useSeoMeta({
  description: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: response.merchantPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>
