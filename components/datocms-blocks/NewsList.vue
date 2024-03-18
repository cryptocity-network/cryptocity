<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="!pt-96"
  >
    <div
      v-if="response.allNews"
      class="mx-auto grid max-w-screen-lg grid-cols-1 place-items-center items-stretch justify-items-stretch gap-16 sm:grid-cols-2 md:gap-24 md:!px-32 lg:grid-cols-3 lg:!px-48"
    >
      <!-- :class="[
        {
          'justify-center': response.allNews.length === 1,
          'divide-x-1 divide-blue-dark/10': response.allNews.length <= 2,
        },
      ]" -->
      <!-- :label="item.label"
    :badge="item.badge" -->
      <NewsCard
        v-for="(article, i) in response.allNews"
        :key="i"
        class="w-full"
        :article="article"
      />
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'

import { useWebsiteStore } from '../../store/store'
import allNewsArticles from '../../graphql/AllNewsArticles'
import type { NewsArticle } from '~/types/dato-models/NewsArticle'

defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})

interface AllNewsArticlesResponse {
  allNews: Array<NewsArticle>
}
const store = useWebsiteStore()
const newsArticleQuery = allNewsArticles(store.getCurrentLocale)
console.log(newsArticleQuery)
const { data: { value: response } } = await useGraphqlQuery(newsArticleQuery) as AsyncData<AllNewsArticlesResponse, RTCError>

</script>
