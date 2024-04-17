<template>
  <main>
    <div v-if="pageData" class="">
      <BlockHeroSection
        :data="pageData.herosection"
        :index="0"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.hero"
      />
      <BlockNewsList
        :data="pageData.newsList"
        :index="1"
        :page-response="pageData"
        :locale="locale"
        :background-color="pageData.backgroundColors?.newsList"
      />
      <BlockHeadline
        :data="pageData.contactHeadline"
        :index="8"
        :page-response="pageData"
        :background-color="pageData.backgroundColors?.contactHero"
      />
      <BlockContactForm show-header />
    </div>
    <ErrorMessage v-else-if="error" />
    <div v-else class="h-screen bg-gray" />
  </main>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import AllNewsQuery from '../../graphql/pages/AllNewsPage'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import type { SeoTags } from '~/types/dato-api-responses/ContactPage'

  interface AllNewsPage {
    newsPage: {
      backgroundColors: {
        hero: string,
        featured: string,
        newsList: string,
        contactHero: string,
      },
      _seoMetaTags: Array<SeoTags>,
      herosection: Component,
      featured: Component,
      newsList: Component,
      contactHeadline: Component,
    }
  }
//   /* ROUTE LOCALE PARAM HERE CAN BE CONFUSING
//     - Locale always refers to first route param in this instance. Whether that is a page name or a language locale
//     - currentPageType function filters for this where it compares this first param to siteLocales
//     - If not a locale then it treats as a page and moves forwards. This is a quirk of having dynamic urls which change depending on language
//   */

const { locale } = useI18n()
const query = AllNewsQuery(locale.value)

const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<AllNewsPage, RTCError>
const pageData = computed(() => {
  if (response) {
    return response.newsPage
  }
  return null
})
// const currentHtmlLang = computed(() => {
//   return useI18n().locale.value
// })
// useHead({
//   htmlAttrs: {
//     lang: currentHtmlLang.value as string || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
//   }
// })

// useSeoMeta({
//   description: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'description')?.attributes?.content,
//   ogTitle: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:title')?.attributes?.content,
//   ogDescription: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:description')?.attributes?.content,
//   ogImage: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image')?.attributes?.content,
//   ogImageHeight: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:height')?.attributes?.content,
//   ogImageWidth: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:width')?.attributes?.content,
//   ogLocale: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:locale')?.attributes?.content,
//   ogSiteName: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:site_name')?.attributes?.content,
//   twitterImage: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:image')?.attributes?.content,
//   twitterSite: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:site')?.attributes?.content,
//   twitterDescription: response.allNewsPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:description')?.attributes?.content,
//   twitterCard: 'summary'
// })
</script>
