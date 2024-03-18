<template>
  <TheCard
    :image="article.coverImage"
    :title="article.title"
    :description="article.excerpt"
    link-label="Go to link"
    :link="articleLink"
    :footer="formattedDate"
  />
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '~/store/store'
const store = useWebsiteStore()
// const route = useRoute()
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  const date = new Date(props.article._createdAt)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${day}-${month}-${year}`
})
const articleLink: Ref<string> = computed(() => {
  const currentLocale = store.getCurrentLocale

  if (props.article._locales.includes(currentLocale)) {
    return currentLocale === useRuntimeConfig().public.DATO_DEFAULT_LOCALE
      ? `/news/${props.article.slug}`
      : `/${currentLocale}/poo/${props.article.slug}`
  } else {
    return props.article._locales[0] === useRuntimeConfig().public.DATO_DEFAULT_LOCALE
      ? `/news/${props.article.slug}`
      : `/${props.article._locales[0]}/news/${props.article.slug}`
  }
})

</script>
