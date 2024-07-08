<template>
  <main>
    <div v-if="pageData" class="">
      <BlockHeroSection
        :data="pageData.hero"
        :index="0"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.hero"
      />
      <BlockCoinCards
        :data="pageData.coinCards"
        :index="0"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.hero"
      />
      <BlockHeadline
        :data="pageData.carouselHeadline"
        :index="1"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.carouselHeadline"
      />
      <BlockMediaCarousel
        :data="pageData.mediaCarousel"
        :index="2"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.mediaCarousel"
      />
      <BlockZigZagContent
        :data="pageData.zigZagContent"
        :index="3"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.zigZagContent"
      />
      <BlockHeadline
        :data="pageData.knowledge"
        :index="4"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.knowledge"
      />
      <BlockGrid
        :data="pageData.grid"
        :index="5"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.grid"
      />
      <BlockHeadline
        :data="pageData.contactHeadline"
        :index="6"
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
import type { Component } from 'nuxt/schema'
import BeginnerQuery from '../../graphql/pages/BeginnerPage'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import type { SeoTags } from '~/types/dato-api-responses/ContactPage'

  interface BeginnerPage {
    beginnerPage: {
      backgroundColors: {
        hero: string,
        carouselHeadline: string,
        mediaCarousel: string,
        zigZagContent: string,
        knowledge: string,
        grid: string,
        contactHeadline: string,
      },
      _seoMetaTags: Array<SeoTags>,
      hero: Component,
      coinCards: Component,
      carouselHeadline: Component,
      mediaCarousel: Component,
      zigZagContent: Component,
      knowledge: Component,
      grid: Component,
      contactHeadline: Component,
    }
  }
//   /* ROUTE LOCALE PARAM HERE CAN BE CONFUSING
//     - Locale always refers to first route param in this instance. Whether that is a page name or a language locale
//     - currentPageType function filters for this where it compares this first param to siteLocales
//     - If not a locale then it treats as a page and moves forwards. This is a quirk of having dynamic urls which change depending on language
//   */

const { locale } = useI18n()

const query = BeginnerQuery(locale.value)

const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<BeginnerPage, RTCError>
const pageData = computed(() => {
  if (response) {
    return response.beginnerPage
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
  description: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: response.beginnerPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>
