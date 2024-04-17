<template>
  <main>
    <div v-if="pageData" class="">
      <BlockHeroSection
        :data="pageData.herosection"
        :index="0"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.hero"
      />
      <BlockCitiesGrid
        :data="pageData.citiesGrid"
        :index="7"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.citiesGrid"
      />
      <BlockHeadline
        :data="pageData.contactHeadline"
        :index="8"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.contactHeadline"
      />
    </div>
    <ErrorMessage v-else-if="error" />
    <div v-else class="h-screen bg-gray" />
  </main>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import HomeQuery from '@/graphql/pages/HomePage'
import useGraphqlQuery from '@/composables/useGraphqlQuery'

  interface SeoTags {
    attributes: {
      property: string,
      name: string,
      content: string
    },
    content: Array<string>,
    tag: Array<string>,
  }

  interface HomePage {
    homePage: {
      backgroundColors: {
        hero: string,
        citiesGrid: string,
        contactHeadline: string,
      },
      _seoMetaTags: Array<SeoTags>,
      herosection: Component,
      citiesGrid: Component,
      contactHeadline: Component,
    }
  }
//   /* ROUTE LOCALE PARAM HERE CAN BE CONFUSING
//     - Locale always refers to first route param in this instance. Whether that is a page name or a language locale
//     - currentPageType function filters for this where it compares this first param to siteLocales
//     - If not a locale then it treats as a page and moves forwards. This is a quirk of having dynamic urls which change depending on language
//   */

const { locale } = useI18n()
const query = HomeQuery(locale.value)

const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<HomePage, RTCError>
const pageData = computed(() => {
  if (response) {
    return response.homePage
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
  description: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: response.homePage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>
