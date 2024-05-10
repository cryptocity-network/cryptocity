<template>
  <main>
    <div v-if="pageData" class="">
      <BlockHeroSection
        :data="pageData.herosection"
        :index="0"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.hero"
      />
      <BlockFullWidthImage
        :data="pageData.image"
        :index="1"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.image"
      />
      <BlockHeadline
        :data="pageData.subHeadline"
        :index="1"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.subHeadline"
      />
      <BlockZigZagContent
        :data="pageData.aboutZigZag"
        :index="1"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.zigZagContent"
      />
      <BlockHeadline
        :data="pageData.carouselHeadline"
        :index="1"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.carouselHeadline"
      />
      <!-- <BlockAllCitiesCarousel
        :data="pageData.allCitiesCarousel"
        :index="1"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.allCitiesCarousel"
      /> -->
      <BlockAllRegionsCarousel
        :data="pageData.allCitiesCarousel"
        :index="1"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.allCitiesCarousel"
      />
      <BlockHeadline
        :data="pageData.contactHeadline"
        :index="8"
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
import AboutQuery from '../../graphql/pages/AboutPage'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import type { SeoTags } from '~/types/dato-api-responses/ContactPage'

  interface AboutPage {
    aboutPage: {
      backgroundColors: {
        hero: string,
        image: string,
        subHeadline: string,
        zigZagContent: string,
        carouselHeadline: string,
        allCitiesCarousel: string,
        contactHeadline: string,
      },
      _seoMetaTags: Array<SeoTags>,
      herosection: Component,
      image: Component,
      subHeadline: Component,
      aboutZigZag: Component,
      carouselHeadline: Component,
      allCitiesCarousel: Component,
      contactHeadline: Component,
    }
  }
//   /* ROUTE LOCALE PARAM HERE CAN BE CONFUSING
//     - Locale always refers to first route param in this instance. Whether that is a page name or a language locale
//     - currentPageType function filters for this where it compares this first param to siteLocales
//     - If not a locale then it treats as a page and moves forwards. This is a quirk of having dynamic urls which change depending on language
//   */

const { locale } = useI18n()
const query = AboutQuery(locale.value)

const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<AboutPage, RTCError>
const pageData = computed(() => {
  if (response) {
    return response.aboutPage
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
  description: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: response.aboutPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>
