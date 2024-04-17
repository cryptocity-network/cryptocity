<template>
  <main>
    <div v-if="pageData">
      <section class="min-h-screen bg-gray !py-0">
        <BlockContactForm show-header class="!pt-144" />
      </section>
    </div>
    <ErrorMessage v-else-if="error" />
    <div v-else class="h-screen bg-gray" />
  </main>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import ContactQuery from '../../graphql/pages/ContactPage'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import type { ContactPage, SeoTags } from '@/types/dato-api-responses/ContactPage'

const { locale } = useI18n()
const query = ContactQuery(useRuntimeConfig().public.DATO_REGION_ID, locale.value)
const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<ContactPage, RTCError>
const pageData = computed(() => {
  if (response) {
    return response.contactPage
  }
  return null
})

// META
const currentHtmlLang = computed(() => {
  return useI18n().locale.value
})
useHead({
  htmlAttrs: {
    lang: currentHtmlLang.value as string || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
  }
})

useSeoMeta({
  description: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: response.contactPage._seoMetaTags?.find((x: SeoTags) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>
