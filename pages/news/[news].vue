<template>
  <main v-if="!error && data" class="min-h-screen">
    <BlockWrapper
      :block-background-color="'white'"
      :padding-top="136"
      :no-padding-bottom="false"
      :overlaps-next-section="false"
    >
      <div class="mx-auto max-w-screen-2xl px-64">
        <!-- :label="data.label" -->
        <HeadlineSection
          :headline="data.news.title"
        />
        <!-- :subline="data.subline"
          :link="data.simpleLink"
          :has-link="data.hasLink" -->
      </div>
    </BlockWrapper>
    <BlockWrapper
      :block-background-color="'white'"
      :padding-top="0"
      :no-padding-bottom="false"
      :overlaps-next-section="false"
    >
      <StructuredText
        class="prose"
        :data="data.news.content"
      />
    </BlockWrapper>
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
  <ErrorMessage v-else-if="data.news === null" />
</template>

<script lang="ts" setup>
import { StructuredText } from 'vue-datocms'

import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery.js'
import news from '@/graphql/pages/News.js'
import type { NewsResponse } from '@/types/dato-api-responses/News'
import { useWebsiteStore } from '@/store/store'

const store = useWebsiteStore()
const route = useRoute()

// const param = route.params.news as string
// const newsName = param.charAt(0).toUpperCase() + route.params.news.slice(1)
const newsQuery = news(route.params.news, route.params.locale || useRuntimeConfig().public.DATO_DEFAULT_LOCALE)

const { data, error } = await useGraphqlQuery(newsQuery) as AsyncData<NewsResponse, RTCError>

// const backgroundColorArray = computed(() => {
//   if (data) {
//     return Object.values(data.value.news.backgroundColors)
//   }
//   return null
// })

// const components = computed(() => {
//   if (data.value?.news !== null) {
//     return filterNewsResponseForComponents(data.value) as Array<Component>
//   }
//   return null
// })
useSeoMeta({
  description: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'description')?.attributes?.content,
  ogTitle: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:title')?.attributes?.content,
  ogDescription: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:description')?.attributes?.content,
  ogImage: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image')?.attributes?.content,
  ogImageHeight: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:height')?.attributes?.content,
  ogImageWidth: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:width')?.attributes?.content,
  ogLocale: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:locale')?.attributes?.content,
  ogSiteName: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:site_name')?.attributes?.content,
  twitterImage: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:image')?.attributes?.content,
  twitterSite: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:site')?.attributes?.content,
  twitterDescription: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:description')?.attributes?.content,
  twitterCard: 'summary'
})
</script>
