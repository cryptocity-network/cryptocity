<template>
  <main v-if="!newsError && newsData" id="news" class="min-h-screen">
    <BlockWrapper
      :block-background-color="'white'"
      :padding-top="136"
      :no-padding-bottom="false"
      :overlaps-next-section="false"
    >
      <div class="mx-auto max-w-screen-2xl px-64">
        <HeadlineSection
          :headline="newsData.news.title"
          :subline="newsData.news.subtitle"
        />
      </div>
      <div class="size-full !px-16 pt-96 lg:!px-96">
        <DatoImage
          v-if="newsData.news.coverImage"
          :priority="true"
          class="max-h-[554px]  rounded-6 shadow"
          :image="newsData.news.coverImage"
        />
      </div>
    </BlockWrapper>
    <BlockWrapper
      :block-background-color="'white'"
      :padding-top="0"
      :no-padding-bottom="false"
      class="!pt-120"
      :overlaps-next-section="false"
    >
      <StructuredText
        class="prose"
        :data="newsData.news.content"
        :render-block="renderBlock"
        :custom-node-rules="customNodeRules"
      />
    </BlockWrapper>
  </main>
  <ErrorMessage v-else-if="!newsData" />
</template>

<script lang="ts" setup>
import { StructuredText, renderNodeRule } from 'vue-datocms'
import { isCode } from 'datocms-structured-text-utils'

import hljs from 'highlight.js'
import ImageWithCaption from '~/components/block/StructuredText/ImageWithCaption.vue'
import news from '@/graphql/pages/News.js'
import getNewsLocale from '@/graphql/pages/NewsLocales.js'
import { useWebsiteStore } from '~/store/store'

const route = useRoute()
const slug = route.params.news as string
const { newsLang } = storeToRefs(useWebsiteStore())
const { locale } = useI18n()

// News data
const newsData: any = ref(null)
const newsError: any = null

// 1. Get locales that news article has been written in
const newsLocaleQuery = getNewsLocale(slug)
const { data } = await useFetch('https://graphql.datocms.com', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${useRuntimeConfig().public.DATO_TOKEN}`,
    'X-environment': 'main'
  },
  body: {
    query: newsLocaleQuery
  },
  transform: ({ data, errors }) => {
    if (errors) { throw errors }
    return data
  }
}) as any

watch(data, (localeData) => {
  // 2. Check if locales includes current route language, otherwise use default
  const newsArticleLocalesList = localeData.news._locales
  newsLang.value = newsArticleLocalesList.includes(locale.value) ? locale.value : newsArticleLocalesList[0]

  // 3. Get news article with the above locale
  const newsQuery = news(slug, newsLang.value)
  useFetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${useRuntimeConfig().public.DATO_TOKEN}`,
      'X-environment': 'main'
    },
    body: {
      query: newsQuery
    },
    transform: ({ data, errors }) => {
      if (errors) { throw errors }
      return data
    }
  }).then((response) => {
    newsData.value = response.data.value
  })
}, {
  deep: true,
  immediate: true
})

const renderBlock = (record: any) => {
  switch (record.record._modelApiKey) {
    case 'image':
      return h(ImageWithCaption, {
        data: record.record
      })
    default:
      return null
  }
}

const customNodeRules = [
  renderNodeRule(isCode, ({ adapter: { renderNode: h }, node }) => {
    return h(
      'pre',
      {},
      [h('code', { class: `language-${node.language}` }, node.code)]
    )
  })
]
onMounted(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block as HTMLElement)
  })
})

// useSeoMeta({
//   description: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'description')?.attributes?.content,
//   ogTitle: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:title')?.attributes?.content,
//   ogDescription: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:description')?.attributes?.content,
//   ogImage: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image')?.attributes?.content,
//   ogImageHeight: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:height')?.attributes?.content,
//   ogImageWidth: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:image:width')?.attributes?.content,
//   ogLocale: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:locale')?.attributes?.content,
//   ogSiteName: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.property === 'og:site_name')?.attributes?.content,
//   twitterImage: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:image')?.attributes?.content,
//   twitterSite: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:site')?.attributes?.content,
//   twitterDescription: data.value.news._seoMetaTags?.find((x: SeoMetaTag) => x.attributes?.name === 'twitter:description')?.attributes?.content,
//   twitterCard: 'summary'
// })
</script>

<style>
 .prose {
  h2 {
    @apply text-32 md:text-36 mt-120;
  }
  h3 {
    @apply text-26 md:text-28 mt-96;
  }
  h4 {
    @apply text-22 md:text-24 mt-96;
  }
  p {
    @apply text-17;
  }
  a {
    @apply transition-colors;
  }
  a:hover {
    @apply text-blue-dark transition-colors;
  }
  blockquote {
    @apply px-20 sm:px-32 my-24 py-24 border-t-2 border-b-2 border-blue/10;

    p {
      @apply mt-0 text-21 md:text-24 font-bold text-green leading-1.6
    }

    footer {
      @apply mt-8 text-16 text-blue/60
    }
  }
  ul {
    @apply list-disc;
    li::marker {
      @apply text-blue/20 text-17
    }
  }

  ol {
    @apply list-decimal;
    counter-reset: my-counter-name;

    li {
      @apply pl-16;
      counter-increment: my-counter-name;
    }
    li::marker {
      @apply text-blue/30 text-17 font-bold;
      content: counter(my-counter-name);
    }
  }

  pre {
    @apply bg-gray;
    font-family: 'Fira Code'
  }
 }
</style>
