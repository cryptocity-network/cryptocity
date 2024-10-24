<template>
  <RegionsCarousel />
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import GlobalQuery from '@/graphql/Global'
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

interface GlobalPage {
  global: {
    _seoMetaTags: Array<SeoTags>,
  }
}

const query = GlobalQuery()
const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<GlobalPage, RTCError>

useSeoMeta({
  description: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: response.global._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>